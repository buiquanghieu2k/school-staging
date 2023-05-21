import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import type {IRootState} from '@Store/configureStore';

export default function Loading() {
  const loading = useSelector((state: IRootState) => state.loading.value);

  if (!loading) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  );
}
