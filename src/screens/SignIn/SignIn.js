import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

const { width, height } = Dimensions.get('window');
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  onChangeEmail = (value) => {
    this.setState({ email: value });
  }
  onChangePassword = (value) => {
    this.setState({ password: value });
  }
  onLogin = async () => {
    const user = {
      firstname: 'Cuong',
      lastname: 'Vu Manh',
      email: this.state.email,
      password: this.state.password
    };
    await AsyncStorage.setItem('loggedUser', JSON.stringify(user));
    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground 
          style={{flex: 1, width: width, height: height}}
          source={require('../../resources/assets/images/background/6.jpg')}
        >
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingHorizontal: 10, marginBottom: 50}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='white' size={22} />
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -50}}>
              <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>Booking</Text>
              <Text style={{color: '#009FE3', fontSize: 20, fontWeight: 'bold'}}>.com</Text>
            </View>
          </View>

          <View style={{width: width, backgroundColor: '#FFFFFF'}}>
            <View style={{height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', paddingHorizontal: 15}}>
              <TextInput 
                autoFocus
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="gray"
                style={{fontSize: 14, fontWeight: '200'}}
                value={this.state.email}
                onChangeText={this.onChangeEmail.bind(this)}
              />
            </View>
            <View style={{width: width - 30, height: 0.3, marginHorizontal: 15, backgroundColor: 'gray',}} />
            <View style={{height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', paddingHorizontal: 15}}>
              <TextInput 
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="gray"
                style={{fontSize: 14, fontWeight: '200'}}
                value={this.state.password}
                onChangeText={this.onChangePassword.bind(this)}
              />
            </View>
          </View>
          
          <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
            <View style={{paddingVertical: 20}}>
              <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3}} onPress={this.onLogin.bind(this)}>
                <Text style={{fontSize: 14, color: '#FFFFFF'}}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ResetPassword')}>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF', textAlign: 'center'}}>Forgot password</Text>
               </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SignIn;