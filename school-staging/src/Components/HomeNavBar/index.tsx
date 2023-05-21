import {View} from 'react-native-ui-lib';
import React from 'react';
import homeListButton from './homeListButton';
import HomeNavItem from './HomeNavItem';

export default function HomeNavBar() {
  const widthItem = '25%';
  // const [listNav, setListNav] = useState(homeListButton.slice(0, 9));
  // const [isFull, setIsFull] = useState(false);
  return (
    <View
      row
      marginT-20
      //@ts-expect-errors
      flexWrap="wrap">
      {homeListButton.map(item => {
        return (
          <HomeNavItem
            id={item.id}
            assetName={item.assetName}
            key={item.id}
            width={widthItem}
            name={item.name}
            screenName={item.screenName}
          />
        );
      })}
    </View>
  );
}
