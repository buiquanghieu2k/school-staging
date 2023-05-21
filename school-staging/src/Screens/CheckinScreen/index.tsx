import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Colors, View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {Calendar} from 'react-native-calendars';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import useCheckin from './services';
import styles from './styles';
import moment from 'moment';
import {fontFamilies, fontSizes} from '@Themes/Fonts';
import SvgXml, {
  ArrowBackIcon,
  ArrowNextIcon,
  NextArrowColorIcon,
} from '@Components/SvgXml';
import {translate} from '@Languages/Translate';
import CheckinItem from '@Components/CheckinItem';
import MainLoading from '@Components/MainLoading';

export default function CheckinScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {
    selectedDate,
    setSelectedDate,
    currentDateString,
    setCurrentDateString,
    checkinList,
    handleHistory,
    isLoading,
  } = useCheckin(nav);

  return (
    <MainContainer>
      <MainLayout
        title="Điểm danh"
        navigation={navigation}
        statusBarColor={Colors.secondary}
        paddingH={16}
        paddingB={8}>
        {!isLoading ? (
          <>
            {/**Selected Date Display */}
            <View row flex marginB-sm>
              <View width="30%" />
              <View center width="40%">
                <Text primaryBold lg primary>
                  {currentDateString}
                </Text>
              </View>
              <TouchableOpacity
                width="30%"
                padding-xs
                marginT-sm
                onPress={handleHistory}>
                {/* <PrimaryButton
              label={translate('checkin.History')}
              containerStyle={styles.historyButton}
              textStyle={styles.historyText}
            /> */}
                <View row center>
                  <Text primary primaryRegular sm marginB-xss>
                    {translate('checkin.History')}
                  </Text>
                  <SvgXml xml={NextArrowColorIcon} />
                </View>
              </TouchableOpacity>
            </View>
            {/**Calendar Display */}
            <Calendar
              renderArrow={direction => (
                <SvgXml
                  xml={direction === 'left' ? ArrowBackIcon : ArrowNextIcon}
                />
              )}
              firstDay={1}
              style={styles.calendar}
              theme={{
                arrowColor: Colors.primary,
                textDayFontFamily: fontFamilies.primarySemiBold,
                textMonthFontFamily: fontFamilies.primarySemiBold,
                textDayHeaderFontFamily: fontFamilies.primaryRegular,
                textDayFontSize: fontSizes.md,
                textMonthFontSize: fontSizes.md,
                textDayHeaderFontSize: fontSizes.xs,
                todayTextColor: Colors.primary,
                selectedDayBackgroundColor: Colors.primary,
                // textSecondaryColor: Colors.primary,
                textSectionTitleColor: Colors.primary,
              }}
              headerStyle={styles.calendarHeader}
              markedDates={selectedDate}
              onDayPress={dateData => {
                let newSelected: Record<string, any> = {};
                newSelected[dateData.dateString] = {
                  selected: true,
                  marked: true,
                };
                setSelectedDate(newSelected);
                setCurrentDateString(
                  moment(dateData.timestamp).format('DD/MM/YYYY'),
                );
              }}
            />
            <View style={styles.dashedLine} />

            {/**Dashline Display */}
            {/**Checkin list Display */}
            {checkinList.length &&
              !isLoading &&
              checkinList.map((item, index) => {
                return <CheckinItem key={index} data={item} />;
              })}
          </>
        ) : (
          <MainLoading />
        )}
      </MainLayout>
    </MainContainer>
  );
}
