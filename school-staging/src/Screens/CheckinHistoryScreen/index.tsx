import {View, Text, Carousel} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import useCheckinHistory from './services';
import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import {Colors} from 'react-native-ui-lib';
import TabViewHeaderButton from '@Components/TabViewHeaderButton';
import CheckinItem from '@Components/CheckinItem';
import MainLoading from '@Components/MainLoading';

export default function CheckinHistoryScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {currentTab, setCurrentTab, carouselRef, checkinList, isLoading} =
    useCheckinHistory(nav);

  return (
    <MainContainer>
      <MainLayout
        title="Lịch sử điểm danh"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <View row spread paddingV-10>
          <TabViewHeaderButton
            isFocused={currentTab === 0}
            title="Theo ngày"
            onPress={() => setCurrentTab(0)}
          />
          <TabViewHeaderButton
            isFocused={currentTab === 1}
            title="Theo môn học"
            onPress={() => setCurrentTab(1)}
          />
        </View>
        <Carousel
          ref={carouselRef}
          initialPage={currentTab}
          onChangePage={(pageIndex: number) => setCurrentTab(pageIndex)}
          containerStyle={{
            flex: 1,
          }}>
          {!isLoading ? (
            <View flex>
              {/**Group theo tháng thứ nhất */}
              <Text black1 primarySemiBold md marginL-16>
                Tháng 5
              </Text>
              <View paddingV-8>
                {checkinList &&
                  checkinList.map((item, index) => {
                    return <CheckinItem key={index} data={item} isInHistory />;
                  })}
              </View>
            </View>
          ) : (
            <MainLoading />
          )}
          <View flex center>
            <Text primaryBold md black1>
              Chức năng hiện đang phát triển!
            </Text>
          </View>
        </Carousel>
      </MainLayout>
    </MainContainer>
  );
}
