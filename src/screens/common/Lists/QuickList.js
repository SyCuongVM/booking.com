import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Property from '../../../components/Property';
import * as mocks from '../../../resources/mocks';

const { width } = Dimensions.get('window');

class QuickList extends Component {
  render() {
    const { propertyList, navigation } = this.props;
    const ex1 = propertyList.filter(property => property.id === 4);

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
            </TouchableOpacity>
            <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: 'bold'}}>Quick List</Text>  
            </View>
          </View>
        </View>

        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Quick List</Text>  
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Ionicons name="ios-heart" color='red' size={14} style={{marginRight: 5}} />
                <Text style={{fontSize: 12, fontWeight: '200', marginRight: 5}}>1 property saved.</Text>
                <Text style={{fontSize: 12, fontWeight: '200', color: '#3376C6'}}>Show on map</Text>    
              </View>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Ionicons name="ios-calendar" color='#3376C6' size={14} style={{marginRight: 5}} />
                <Text style={{fontSize: 12, fontWeight: '200', color: '#3376C6'}}>Jun 19 - Jun 20</Text>    
              </View>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name="ios-people" color='#3376C6' size={14} style={{marginRight: 5}} />
                <Text style={{fontSize: 12, fontWeight: '200', color: '#3376C6'}}>2 adults</Text>    
              </View>
            </View>

            <View>
              <Property 
                key={ex1[0].id}
                coverImage={ex1[0].coverImage}
                name={ex1[0].name}
                stars={ex1[0].stars} 
                thumbUp={ex1[0].thumbUp} 
                rating={ex1[0].rating} 
                room={ex1[0].room} 
                location={ex1[0].location} 
                breakfast={ex1[0].breakfast}
                deal={ex1[0].deal} 
                soldOut={ex1[0].soldOut} 
                propertyType={ex1[0].propertyType} 
                stays={ex1[0].stays} 
                currency={ex1[0].currency} 
                price={ex1[0].price} 
                tax={ex1[0].tax} 
                freeCancellation={ex1[0].freeCancellation} 
                noPrepayment={ex1[0].noPrepayment} 
                roomLefts={ex1[0].roomLefts}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

QuickList.defaultProps = {
  propertyList: mocks.propertyList
}
export default QuickList;