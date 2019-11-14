import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
export default class DetailsScreen extends React.Component {

  // static navigationOptions = {
  //   headerTitle: '222'
  // };
  // static navigationOptions: () => ({
  //   headerTitle: 222
  //     })
    state = {
      search: ''
    }
    updateSearch = search => {
      this.setState({ search });
    };
    goto = (lk) => {
      console.log(111)
      const { navigate } = this.props.navigation;
      navigate('History')
    }
    render() {
      const list = [1,2,3]
      return (
        <View style={styles.all}>
           <SearchBar
        placeholder="搜索"
        inputContainerStyle={{backgroundColor: 'white'}}
        containerStyle = {styles.searchcontainer}
        onChangeText={this.updateSearch}
        style={styles.searchbar}
        lightTheme round
        value={this.state.search}
      />
          <View style={{backgroundColor: '#fff', marginTop: 20}}>

            
      <View style={{marginTop: 20}}>
      {
                list.map((l, i) => (
                  <View style={styles.noraml} onPress={this.goto}>
                  <View style={{marginLeft: 20}}>
                  <Icon
                name='g-translate'
                size={30}
                color='#fff' />
                  </View>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.textColor}>杭州市公安局</Text>
                  <Text style={styles.textColor}>身份证明</Text>
                </View>
                <View style={{marginLeft: 180}}>
                <Icon
                name='navigate-next'
                size={30}
                color='#fff' />
                </View>
                </View>
    ))
  }
      </View>
          </View>
          
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    noraml: {
      height: 80,
      backgroundColor: '#007AFF',
      borderRadius: 15,
      width: '90%',
      marginLeft: '5%',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10
    },
    textColor: {
      color: '#fff'
    },
    all: {
      backgroundColor: '#f1f1f1',
      flex: 1
    },
    searchcontainer: {
      backgroundColor: 'white',
      borderWidth: 0, //no effect
      shadowColor: 'white', //no effect
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent'
    },
  searchbar: {
      width: "100%",
      backgroundColor: 'red', //no effect
      borderWidth:0, //no effect
      shadowColor: 'white', //no effect
  },
  });