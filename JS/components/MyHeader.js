import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, StyeSheet } from 'react-native';
import{Appbar,Title} from 'react-native-paper'




function MyHeader({titleText}) {
  return (
    <Appbar.Header>
      <View>
        <Title>
          {titleText}
        </Title>
      </View>
    </Appbar.Header>
    );
};

export default MyHeader;
