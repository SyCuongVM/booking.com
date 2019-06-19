import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class MakeList extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{lex: 1, flexDirection: 'row', falignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
              <Text style={{color: '#FFFFFF', fontSize: 16, marginLeft: 5}}>Back</Text>  
            </TouchableOpacity>
            <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', marginRight: 40}}>
              <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: 'bold'}}>Lists</Text>  
            </View>
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingHorizontal: 25}}>
            <View style={{paddingBottom: 30}}>
              <Ionicons name="ios-heart-empty" size={40} />
            </View>
            <View>
              <View style={{paddingBottom: 30, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', paddingBottom: 10, textAlign: 'center'}}>Here are 3 simple steps to help you begin:</Text>
                <Text style={{fontSize: 14, fontWeight: '100', textAlign: 'center'}}>1. Search for a place to stay</Text>
                <Text style={{fontSize: 14, fontWeight: '100', textAlign: 'center'}}>2. When you find a place you like, tap the heart icon</Text>
                <Text style={{fontSize: 14, fontWeight: '100', textAlign: 'center'}}>3. Save the property to a wish list so you can find it later</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                <TouchableOpacity style={{height: 35, justifyContent: 'center', alignItems: 'center', borderColor: '#3376C6', borderRadius: 3, borderWidth: 1, paddingHorizontal: 15}} onPress={() => navigation.navigate('Home')}>
                  <Text style={{fontSize: 16, fontWeight: '400', color: '#3376C6'}}>Start searching</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

export default MakeList;