import React from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/userRedux';

export const Loading = () => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={50} color="black" />
    </View>
  );
};
