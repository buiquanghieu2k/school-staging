import {View, Text, Colors} from 'react-native-ui-lib';
import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function CardView({
  title,
  children,
  transparent,
  isGradient,
}: {
  title?: string;
  children: ReactNode;
  transparent?: boolean;
  isGradient?: boolean;
}) {
  return isGradient ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[Colors.primary, Colors.backgroundMain]}>
      <View
        marginB-15
        padding-15
        backgroundColor={transparent ? 'transparent' : Colors.white}
        // @ts-expect-error
        radius={15}
        shadow={transparent ? false : true}>
        {title && (
          <View paddingB-sm>
            <Text primaryBold md grey3>
              {title}
            </Text>
          </View>
        )}
        {children}
      </View>
    </LinearGradient>
  ) : (
    <View
      marginB-15
      padding-15
      backgroundColor={transparent ? 'transparent' : Colors.white}
      // @ts-expect-error
      radius={15}
      shadow={transparent ? false : true}>
      {title && (
        <View paddingB-sm>
          <Text primaryBold md grey3>
            {title}
          </Text>
        </View>
      )}
      {children}
    </View>
  );
}
