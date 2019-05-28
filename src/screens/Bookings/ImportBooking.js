import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
class ImportBooking extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 40}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Import Booking</Text>
            </View>
          </View>
        </View>
        
        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>
            <View style={{paddingHorizontal: 20, paddingVertical: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: '400', textAlign: 'center'}}>Import a booking you made on a different device</Text>
            </View>

            <View style={{width: width, backgroundColor: '#FFFFFF'}}>
              <View style={{height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', paddingHorizontal: 15}}>
                <TextInput 
                  autoFocus
                  autoCorrect={false}
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
                  placeholder="Confrimation number"
                  placeholderTextColor="gray"
                  style={{fontSize: 14, fontWeight: '200'}}
                />
              </View>
              <View style={{width: width - 30, height: 0.3, marginHorizontal: 15, backgroundColor: 'gray',}} />
              <View style={{height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', paddingHorizontal: 15}}>
                <TextInput 
                  secureTextEntry
                  autoCorrect={false}
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
                  placeholder="PIN code"
                  placeholderTextColor="gray"
                  style={{fontSize: 14, fontWeight: '200'}}
                />
              </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
              <View style={{paddingVertical: 20}}>
                <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3}}>
                  <Text style={{fontSize: 18, color: '#FFFFFF'}}>Import</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ImportBooking;