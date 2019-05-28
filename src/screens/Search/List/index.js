import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as mocks from '../../../resources/mocks';
import Property from '../../../components/Property';
const { width } = Dimensions.get('window');

class PropertyList extends Component {
  render() {
    const { propertyList, navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', height: 30, backgroundColor: '#0C285D', padding: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: '#FFFFFF', paddingHorizontal: 5}}>Aug 28 - Sep 02</Text>
                <FontAwesome name="search" color='#FFFFFF' size={18} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
              <View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 1}}>
                  <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginRight: 2}}>
                    <FontAwesome name="dollar" color='#13357B' size={7} />
                  </View>
                  <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="euro" color='#13357B' size={7} />
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginRight: 1}}>
                    <FontAwesome name="gbp" color='#13357B' size={7} />
                  </View>
                  <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="yen" color='#13357B' size={7} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flexDirection: 'row', height: 40, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="ios-swap" color='#3376C6' size={18} style={{ transform: [{ rotate: '90deg'}]}} />
              <Text style={{fontSize: 14, fontWeight: '300', marginLeft: 5}}>Sort</Text>
            </View>
            <View style={{width: 1, height: 25, marginHorizontal: 5, backgroundColor: '#ECECEC'}} />
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="ios-funnel" color='#3376C6' size={18} />
              <Text style={{fontSize: 14, fontWeight: '300', marginLeft: 5}}>Filter</Text>
            </View>
            <View style={{width: 1, height: 25, marginHorizontal: 5, backgroundColor: '#ECECEC'}} />
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="ios-globe" color='#3376C6' size={18} />
              <Text style={{fontSize: 14, fontWeight: '300', marginLeft: 5}}>Map</Text>
            </View>
          </View>

          <ScrollView>
            <View style={{flex: 1}}>
              {propertyList.map(property => (
                <TouchableOpacity key={property.id} onPress={() => navigation.navigate('Property', { property })}>
                  <Property 
                    coverImage={property.coverImage}
                    name={property.name}
                    stars={property.stars} 
                    thumbUp={property.thumbUp} 
                    rating={property.rating} 
                    room={property.room} 
                    location={property.location} 
                    breakfast={property.breakfast}
                    deal={property.deal} 
                    soldOut={property.soldOut} 
                    propertyType={property.propertyType} 
                    stays={property.stays} 
                    currency={property.currency} 
                    price={property.price} 
                    tax={property.tax} 
                    freeCancellation={property.freeCancellation} 
                    noPrepayment={property.noPrepayment} 
                    roomLefts={property.roomLefts}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

PropertyList.defaultProps = {
  propertyList: mocks.propertyList
}
export default PropertyList;