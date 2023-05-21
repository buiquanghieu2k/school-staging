import {Text, Colors, View} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import StarRating from 'react-native-star-rating-widget';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import {ITopic} from '@Types/ITopic';
import {nameObjectToString} from '@Utils/utils';
import {getAll} from '@Api/CategoryApi';
import TagItem from '@Components/TagItem';
import ScreenNames from '@Constants/ScreenNames';
import PrimaryButton from '@Components/PrimaryButton';
import {studentSelectTopic} from '@Api/StudentApi';
import {IRootState} from '@Store/configureStore';
import styles from './styles';
import {ShowMessage} from '@Utils/flashMessage';
import {updateStudent} from '@Store/Reducers/userSlice';
import {ratingTopic} from '@Api/TopicApi';

export default function TopicDetailScreen(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  //@ts-expect-error
  const {data}: {data: ITopic} = nav.route.params;
  const dispatch = useDispatch();
  const currentUser = useSelector((state: IRootState) => state.user);

  const [categories, setCategories] = useState<Record<string, string>>({});
  const [rating, setRating] = useState<number>(0);

  const getCategories = async () => {
    try {
      const res = await getAll();
      const _categories: Record<string, string> = {};
      res.forEach((item: any) => {
        _categories[item.id] = item.category_name;
      });
      if (
        route.params &&
        route.params.data &&
        currentUser.teacherData &&
        currentUser.teacherData.id
      ) {
        const currentRating = route.params.data.rating.find((item: any) => {
          if (item.teacherId === currentUser.teacherData?.id) {
            return item;
          }
        });
        if (currentRating) {
          setRating(currentRating.level);
          console.log(currentRating);
        }
      }
      setCategories(_categories);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterTopic = async () => {
    try {
      const res = await studentSelectTopic(
        currentUser.studentData?.id,
        data.id,
      );
      if (res) {
        navigation.pop();
        ShowMessage({message: 'Đăng ký đề tài thành công.', type: 'success'});
        dispatch(updateStudent({selected_topic_id: data.id}));
      } else {
        ShowMessage({message: 'Có lỗi khi đăng ký đề tài.', type: 'success'});
      }
    } catch (error) {
      ShowMessage({message: 'Đăng ký không thành công!', type: 'danger'});
    }
  };

  const handleRating = async (rate: number) => {
    try {
      if (
        currentUser.teacherData &&
        currentUser.teacherData.id &&
        route.params &&
        route.params.data.id
      ) {
        const res = await ratingTopic({
          teacherId: currentUser.teacherData.id,
          topicId: route.params.data.id,
          rating: rate,
        });

        if (res) {
          ShowMessage({
            message: 'Đánh giá thành công!',
            position: 'top',
            type: 'success',
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <MainContainer>
      <MainLayout
        title="Chi tiết đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <Text primarySemiBold xl>
          {data.topic_name}
        </Text>

        <View>
          <View row flex>
            <Text gray2 primaryLight md marginT-6>
              {`Người tạo: `}
            </Text>
            <TagItem
              title={nameObjectToString(data.creator?.name)}
              screenName={ScreenNames.TeacherDetail}
              data={data.creator}
            />
          </View>
          <Text gray2 primaryLight md>
            {`Thời gian tạo: ${moment(data.createdAt).format(
              'hh:mm:ss -  DD/MM/YYYY',
            )}`}
          </Text>
          <View row>
            <Text gray2 primaryLight md>
              Phân loại:{' '}
            </Text>
            {data.tags &&
              data.tags.map(item => {
                return (
                  <Text key={item} gray2 primaryLight md>
                    {categories[item]}
                  </Text>
                );
              })}
          </View>
          {currentUser.teacherData && (
            <View centerH paddingV-6>
              <StarRating
                rating={rating}
                onChange={async rate => {
                  setRating(rate);
                  await handleRating(rate);
                }}
              />
            </View>
          )}
          <Text black1 primaryRegular md marginT-6>
            {data.detail}
          </Text>
          {!currentUser.studentData?.selected_topic_id &&
            currentUser.studentData && (
              <PrimaryButton
                label="Đăng ký đề tài"
                onPress={handleRegisterTopic}
                textStyle={styles.updateText}
                containerStyle={styles.updateButton}
              />
            )}
        </View>
      </MainLayout>
    </MainContainer>
  );
}
