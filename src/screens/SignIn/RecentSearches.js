import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class RecentSearches extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={25} />
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Recent Searches</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>Clear</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <View style={{padding: 10, borderBottomWidth: 2, borderBottomColor: '#F7F7F7'}}>
              <TouchableOpacity>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Los Angeles</Text>
                <View style={{marginTop: 5, marginBottom: 10}}>
                  <Text style={{fontSize: 12, fontWeight: '300'}}>Check-in Date: Thu, May 30, 2019</Text>
                </View>
                <Text style={{fontSize: 12, fontWeight: '300'}}>Staying for 2 nights</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Washington, D.C.</Text>
                <View style={{marginTop: 5, marginBottom: 10}}>
                  <Text style={{fontSize: 12, fontWeight: '300'}}>Check-in Date: Fri, Jul 5, 2019</Text>
                </View>
                <Text style={{fontSize: 12, fontWeight: '300'}}>Staying for 2 nights</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

export default RecentSearches;