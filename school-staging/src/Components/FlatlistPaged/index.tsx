import {
  FlatListProps,
  ViewStyle,
  StyleProp,
  FlatList,
  StyleSheet,
} from 'react-native';
import {View} from 'react-native-ui-lib';
import React, {ReactNode, useRef} from 'react';
import {useScrollToTop} from '@react-navigation/native';
import {useRefetch} from '@Utils/useRefetch';

interface IFlatlistPaged extends FlatListProps<any> {
  keyId?: string;
  loadMore?: () => void;
  refetch?: () => void;
  hasNextPage?: boolean;
  data: any;
  contentContainerStyle?: StyleProp<ViewStyle>;
  footerComponent?: ReactNode;
}

export default function FlatlistPaged(props: IFlatlistPaged) {
  const {
    data,
    keyId = 'id',
    renderItem,
    refetch,
    loadMore,
    hasNextPage,
    contentContainerStyle,
    extraData,
    footerComponent,
    ...rest
  } = props;

  const flatListRef = useRef<any>(null);
  useScrollToTop(flatListRef);
  const {isRefetching, refetchFunction} = useRefetch(refetch);

  return (
    <View flex>
      <FlatList
        ref={flatListRef}
        keyExtractor={item => item[keyId]}
        renderItem={renderItem}
        data={data}
        extraData={extraData}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        onRefresh={refetchFunction}
        refreshing={isRefetching}
        //@ts-expect-errors
        ListFooterComponent={hasNextPage && footerComponent}
        contentContainerStyle={[styles.container, contentContainerStyle]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // paddingTop: 16,
    // marginHorizontal: 16,
    // paddingHorizontal: 16,
  },
});
