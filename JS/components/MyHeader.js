import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import{Appbar,Title} from 'react-native-paper'




function MyHeader({titleText}) {
  return (
    <Appbar.Header style={styles.HeaderContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>
          {titleText}
        </Title>
      </View>
    </Appbar.Header>
    );
};

const styles= StyleSheet.create({
  HeaderContainer:
  {
    backgroundColor:"blue",
  },
  container:
  {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:
  {
    color:'white',
  }
})

export default MyHeader;
