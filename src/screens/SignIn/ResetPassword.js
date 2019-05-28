import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class ResetPassword extends Component {
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
            <View style={{flex: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>Booking</Text>
              <Text style={{color: '#009FE3', fontSize: 20, fontWeight: 'bold'}}>.com</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}} onPress={() => this.props.navigation.goBack()}>Cancel</Text>
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
              />
            </View>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
            <View style={{paddingTop: 20, paddingBottom: 30}}>
              <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF', textAlign: 'center'}}>Enter an email address and we'll send you a link to reset your password.</Text>
            </View>
            <View>
              <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3}}>
                <Text style={{fontSize: 14, color: '#FFFFFF'}}>Reset password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ResetPassword;