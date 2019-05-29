import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

import { getData } from '../../util/localStorage';

const { width } = Dimensions.get('window');
class Bookings extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    getData('loggedUser').then((res) => {
      this.setState({ user: JSON.parse(res)});
    })
  }

  render() {
    const { user } = this.state;

    return (
      <View style={{flex: 1}}>

        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: -(75)}}>
              {user ? (
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Hi, {user.firstname}!</Text>
              ) : (
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Bookings</Text>
              )}
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ImportBooking')}>
                <Fontawesome name="cloud-download" color='white' size={22} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingHorizontal: 25}}>
            <View style={{paddingBottom: 30}}>
              <Fontawesome name="briefcase" size={30} />
            </View>
            {user ? (
              <View>
                <View style={{paddingBottom: 30, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 10}}>Welcome back!</Text>
                  <Text style={{fontSize: 14, fontWeight: '100', textAlign: 'center'}}>To see your bookings, you might need to import them using your booking reference number and PIN.</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                  <TouchableOpacity style={{height: 35, justifyContent: 'center', alignItems: 'center', borderColor: '#3376C6', borderRadius: 3, borderWidth: 1, paddingHorizontal: 15}} onPress={() => this.props.navigation.navigate('ImportBooking')}>
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#3376C6'}}>Import your booking</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <View style={{paddingBottom: 30, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', paddingBottom: 10}}>Welcome back!</Text>
                  <Text style={{fontSize: 14, fontWeight: '100', textAlign: 'center'}}>To see your bookings, you might need to import them using your booking reference number and PIN or by signing in to your account.</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                  <TouchableOpacity style={{height: 35, justifyContent: 'center', alignItems: 'center', borderColor: '#3376C6', borderRadius: 3, borderWidth: 1, paddingHorizontal: 15}} onPress={() => this.props.navigation.navigate('Auth')}>
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#3376C6'}}>Sign in</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ImportBooking')}>
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#3376C6', paddingTop: 40}}>Import your booking</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default Bookings;