import {View, Text, TouchableOpacity, Colors} from 'react-native-ui-lib';
import React from 'react';
import {StyleSheet} from 'react-native';

import SvgXml, {LogoutIcon, RegisterTopic} from '@Components/SvgXml';

export default function SubButton({
  onPress,
  showTitle = false,
  title,
  backgroundColor,
  type,
}: {
  onPress?: () => void;
  showTitle?: boolean;
  title?: string;
  backgroundColor?: string;
  type: 'register' | 'update' | 'add';
}) {
  const renderIcon = () => {
    if (type === 'register') {
      return <SvgXml xml={RegisterTopic} />;
    }
    if (type === 'update') {
      return <SvgXml xml={LogoutIcon} />;
    }
  };

  return (
    <View
      //@ts-expect-error
      shadow>
      <TouchableOpacity
        backgroundColor={backgroundColor ? backgroundColor : Colors.primary}
        spread
        center
        style={[
          styles.bottomButton,
          type === 'register' ? styles.rec : styles.circle,
        ]}
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}>
        {renderIcon()}
        {showTitle && title !== undefined && (
          <Text
            center
            marginL-5
            color={type === 'register' ? 'white' : Colors.blue7}
            primaryRegular>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 42,
    right: 16,
    shadowColor: Colors.gray3,
  },
  circle: {
    borderRadius: 50,
    padding: 18,
  },
  rec: {
    padding: 12,
    borderRadius: 8,
  },
});
