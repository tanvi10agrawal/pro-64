import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import dictionary  from './database';

export default class App extends Component{
  render(){
    var word=dictionary[text]["word"]
    var lexicalCategory=dictionary[text]["lexicalCategory"]
    var definition=dictionary[text]["definition"]
    return(
      <View style={{flex:1}}>
        <HomeScreen style={StyleSheet}
        onPress={()=>{
          this.setState({
            "word":word,
            "lexicalCategory":lexicalCategory,
            "defintion" : defintion
          });
        }}
        />
      </View>
    )
  }
}
