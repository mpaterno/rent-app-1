import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon, Header } from 'react-native-elements';

class TakeTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      placeholderText: '',
      isFilled: false,
    };
  }
  // Make isFilled state true when function is called
  isFilledColor = () => this.setState({ isFilled: true });
  render() {
    return (
      <View style={(this.isFilledColor) ? PageStyles.lightOrangeFill : PageStyles.lightBlueFill }>
        <TextInput
          placeholder={this.props.placeholderText}
          onSubmitEditing = {() => this.setState({isFilled: true})}
        />
      </View>
    )
  }
}

export default class StartScreen extends React.Component {
  render() {
    return (
      <View style={PageStyles.mainBackground}>
        <Header 
          backgroundColor = '#fff'
          leftComponent = {{ icon: 'menu', color: '#5b5b5b' }}
          centerComponent = {{ text: 'Getting Started', style: { color: '#5b5b5b' } }}
          rightComponent = {{ icon: 'home', color: '#5b5b5b' }}
          
        />
        <View style={PageStyles.mainContainer}>
          <Text style={PageStyles.title}> Let's get you started! </Text>
            <TakeTextInput placeholderText="What's your username?" />
            <TakeTextInput placeholderText="What's your password?" />
            <TakeTextInput placeholderText="What's your email" />
        </View>
      </View>
    )
  }}

PageStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainBackground: {
    backgroundColor: '#fff8ce',
  },
  mainContainer: {
    margin: 12,
    padding: 20,
    width: 350,
    backgroundColor: 'white',
    shadowRadius: 10,
    shadowOpacity: 0.10,
    shadowOffset:{ width: 0, height: 5,  },
    borderRadius: 10,
  },
  // userName: {
  //   margin: 10,
  //   padding: 5,
  //   backgroundColor: '#ADEBFF',
  //   borderRadius: 50,
  // }
  lightBlueFill: {
    margin: 10,
    padding: 15,
    backgroundColor: '#ADEBFF',
    borderRadius: 50,
  },
  lightOrangeFill: {
    margin: 10,
    padding: 15,
    backgroundColor: '#FFB48A',
    borderRadius: 50,
  }
});