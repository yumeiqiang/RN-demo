import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Avatar, ListItem, Header } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

// MaterialIcons

const list = [
    {
      name: '地址',
      icon: 'movie'
    },
    {
      name: '指纹认证',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      icon: 'adjust'
    },
    {
        name: '人脸识别',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        icon: 'home'
      },
      {
        name: '访问记录',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        icon: 'save'
      },
  ]
export default class About extends React.Component {
    state = {
      search: ''
    }
    updateSearch = search => {
      this.setState({ search });
    };
    goto = () => {
        const { navigate } = this.props.navigation;
        navigate('History')
    }
    render() {
      return (
        <View style={styles.all}>
            {/* <Header
            backgroundColor='#0C7CD7'
            centerComponent={{ text: '首页', style: { color: '#fff' } }}
    /> */}
            <View style={styles.content}>
            <Avatar
            rounded
            size='large'
            source={{
                uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJiabrzic7IeQJLialXlzWiaiaSc3vgKUUM8jEuGh4iaibA7gyZFmgNFcvfxwNabRTr6nvEwbEyM0W849h0g/132',
            }}
            />
            <View style={{marginLeft: 10}}>
            <Text style={{color:'#fff', fontSize: 22, marginBottom: 2}}>yumeiqiang</Text>
            <Text style={{color:'#fff', fontSize: 16}}>浙江杭州</Text>
            </View>
            </View>
            <View style={{marginTop: 20}}>
            {
                list.map((l, i) => (
                <ListItem
                onPress={this.goto}
                key={i}
                leftIcon={{ name: l.icon }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
                chevron
                // badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
          />
    ))
  }
            </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    all: {
      backgroundColor: '#f1f1f1',
      flex: 1
    },
    content: {
        width: '100%',
        backgroundColor: '#0C7CD7',
        height: 140,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center'
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