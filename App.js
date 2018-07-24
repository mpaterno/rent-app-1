import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import StartScreen from './start_screen/StartScreen';



class TakeTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          placeholder="What's your username?"
          onChangeText={(text) => this.setState({text})}/>
      </View>
    )
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Icon
          name='home'
          color='#5b5b5b'/>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.push('ProfileScreen')}
        />
      </View>
    );
  }
}


class SettingsScreen extends Component{
  render(){
    return(
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}


class HotPicksScreen extends Component{
  render(){
    return(
    <View>
      <Text>HotPicks</Text>
    </View>
    );
  }
}

class FindHomeScreen extends Component{
  render(){
    return(
      <View>
        <Text>Find Home!</Text>
      </View>
    );
  }
}

class JustForYouScreen extends Component{
  render(){
    return(
      <View>
        <Text>JustForYou</Text>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  render() {
    return ( 
    <View>
      <Text>Profile Screen</Text>
      <TakeTextInput/> 
    </View>);
  }
}

export const Tabs = createMaterialTopTabNavigator(
  {
    Home:
    {
      screen: HomeScreen,
    },
    Profile:
    {
      screen: ProfileScreen,
    },
    StartScreen:
    {
      screen: StartScreen,
    },
    Settings:
    {
      screen: SettingsScreen,
    }
      /* HotPicks:
    {
      screen: HotPicksScreen,
    },
    FindHome:
    {
      screen: FindHomeScreen,
    },
    JustForYou:
    {
      screen: JustForYouScreen,
    },*/
  },
    {
    initialRouteName: 'Home',
    });

export default class App extends React.Component {
  render() {
    return <Tabs />;
  }
}

