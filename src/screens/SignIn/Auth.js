import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
class Auth extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground 
          style={{flex: 1, width: width, height: height}}
          source={require('../../resources/assets/images/background/6.jpg')}
        >
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20, marginBottom: 100}}>
            <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>Booking</Text>
            <Text style={{color: '#009FE3', fontSize: 20, fontWeight: 'bold'}}>.com</Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingHorizontal: 15, marginBottom: 100}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', paddingBottom: 10}}>Let's get started</Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF', textAlign: 'center'}}>Sign in to see deals up to 50%, easily manage your current bookings, and so much more...</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingHorizontal: 15}}>
            <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#C3523F', justifyContent: 'center', alignItems: 'center', borderRadius: 3, marginBottom: 10}}>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#13357B', justifyContent: 'center', alignItems: 'center', borderRadius: 3, marginBottom: 10}}>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>Sign in with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3, marginBottom: 10}} onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>Sign in with email</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
            <View style={{width: 30, height: 1, marginHorizontal: 5, backgroundColor: '#FFFFFF',}} />
            <Text style={{fontSize: 14, color: '#FFFFFF'}}> Or </Text>
            <View style={{width: 30, height: 1, marginHorizontal: 5, backgroundColor: '#FFFFFF',}} />
          </View>
          <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
            <TouchableOpacity style={{width: width - 30, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#FFFFFF', borderRadius: 3, borderWidth: 1, marginBottom: 15}} onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Create your account</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#FFFFFF', textAlign: 'center'}}>
              By creating or logging in to an account, you agree to our
              {' '}
              <Text style={{textDecorationLine: 'underline'}}>Terms & Conditions</Text>
              {' '}and{' '} 
              <Text style={{textDecorationLine: 'underline'}}>Privacy Statement</Text>
            </Text>
          </View>
          
        </ImageBackground>
      </View>
    );
  }
}
export default Auth;