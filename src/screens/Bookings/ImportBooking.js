import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextField } from 'react-native-material-textfield';

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
            <View style={{paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 12, fontWeight: '400', textAlign: 'center'}}>Import a booking you made on a different device</Text>
            </View>

            <View style={{width: width, backgroundColor: '#FFFFFF'}}>
              <View>
                <TextField 
                  style={{paddingHorizontal: 15, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Confrimation number"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 20}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
              </View>
              <View style={{width: width - 30, height: 0.3, marginHorizontal: 15, backgroundColor: 'gray',}} />
              <View>
                <TextField 
                  secureTextEntry
                  style={{paddingHorizontal: 15, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="PIN code"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 20}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
              </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
              <View style={{paddingVertical: 20}}>
                <TouchableOpacity style={{width: width - 30, height: 30, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3}}>
                  <Text style={{fontSize: 14, color: '#FFFFFF', fontWeight: '500'}}>Import</Text>
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