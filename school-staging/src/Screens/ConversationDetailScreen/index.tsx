import {Colors, TouchableOpacity, View} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import {
  addDialogToConversation,
  getOrCreateConversation,
} from '@Api/ConversationApi';
import {IDialog} from '@Types/IDialog';
import MainLoading from '@Components/MainLoading';
import {useSelector} from 'react-redux';
import {IRootState} from '@Store/configureStore';
import DialogItem from '@Components/DialogItem';
import {ITeacher} from '@Types/ITeacher';
import {IStudent} from '@Types/IStudent';
import {nameObjectToString} from '@Utils/utils';
import {ScrollView, StyleSheet, TextInput} from 'react-native';
import SvgXml, {Reload, Send} from '@Components/SvgXml';

export default function ConversationDetailScreen(nav: StackScreenProps<any>) {
  const {navigation, route} = nav;
  const currentUser = useSelector((state: IRootState) => state.user);
  const teacherList: ITeacher[] = route?.params?.teacherList;
  const studentList: IStudent[] = route?.params?.studentList;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentConversationId, setCurrentConversationId] =
    useState<string>('');
  const [listChatting, setListChatting] = useState<IDialog[]>([]);
  const [text, setText] = useState<string>('');

  const renderReload = () => {
    return (
      <TouchableOpacity onPress={getData}>
        <SvgXml xml={Reload} />
      </TouchableOpacity>
    );
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const conversationRes = await getOrCreateConversation(
        route?.params?.users,
      );

      setCurrentConversationId(conversationRes.id);
      setListChatting(conversationRes.history);

      console.log('conversation', conversationRes);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getName = (id: string) => {
    let current = teacherList.find(item => item.user_id == id);
    if (!current) {
      current = studentList.find(item => item.user_id == id);
    }
    if (!current!) {
      return '';
    }
    return nameObjectToString(current.name);
  };

  const isMe = (id: string) => {
    return id === currentUser.user.id;
  };

  const handleSend = async () => {
    try {
      const newDialog: IDialog = {
        userId: currentUser.user.id ?? '',
        text: text.trim(),
        createdAt: new Date().toISOString(),
      };
      setListChatting([...listChatting, newDialog]);
      const created = await addDialogToConversation({
        id: currentConversationId,
        newDialog: newDialog,
      });

      console.log('created', created);
    } catch (error) {
      console.error(error);
    } finally {
      setText('');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainContainer>
      <MainLayout
        isFlatList
        title={route?.params?.username}
        navigation={navigation}
        statusBarColor={Colors.secondary}
        right={{type: 'component', component: renderReload()}}>
        {isLoading && <MainLoading />}
        <View height="90%">
          <ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={event => {
              console.log(event);
            }}>
            {listChatting.map(item => {
              return (
                <DialogItem
                  key={item.createdAt}
                  username={getName(item.userId)}
                  isOwn={isMe(item.userId)}
                  dialog={item}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={styles.chat}
          paddingH-6
          height={46}
          flex
          backgroundColor="white">
          <TextInput
            style={styles.textInput}
            multiline
            value={text}
            onChangeText={string => {
              setText(string);
            }}
          />
          <TouchableOpacity center width="15%" paddingH-12 onPress={handleSend}>
            <SvgXml xml={Send} />
          </TouchableOpacity>
        </View>
      </MainLayout>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  chat: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    flex: 1,
  },
  textInput: {
    color: 'black',
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.secondary,
    paddingVertical: 6,
  },
});
