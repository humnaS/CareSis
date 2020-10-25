import React from 'react';
import {
  View,
  Image
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 67,
        "paddingTop": 307,
        "flex": 1
      }
    } >
    <Image style = {
      {
        "width": 241,
        "height": 198
      }
    }
    source = {
      require('./assets/lologo.png')
    }
    />
    </View>

  );
};