import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Property from '../../../components/Property';
import * as mocks from '../../../resources/mocks';

const { width } = Dimensions.get('window');
class ListDetail extends Component {
  render() {
    const { propertyList, navigation } = this.props;
    const ListName = navigation.getParam('listName');
    const hasProperty = navigation.getParam('property');
    const ex1 = propertyList.filter(property => property.id === 1);

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
            </TouchableOpacity>
            <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: 'bold'}}>{ListName}</Text>  
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Ionicons name="md-open" color='#FFFFFF' size={22} />
            </View>
          </View>
        </View>

        {(hasProperty === 0) ? (
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
        ) : (
          <ScrollView style={{flex: 1}}>
            <View style={{flex: 1}}>
              <View>
                <Image source={require('../../../resources/assets/images/background/1.jpg')} resizeMode='cover' style={{width: width, height: width/3.5}} />
              </View>

              <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{ListName}</Text>  
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Ionicons name="ios-heart" color='red' size={14} style={{marginRight: 5}} />
                  <Text style={{fontSize: 12, fontWeight: '200', marginRight: 5}}>2 properties saved.</Text>
                  <Text style={{fontSize: 12, fontWeight: '200', color: '#3376C6'}}>Show on map</Text>    
                </View>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <Ionicons name="ios-calendar" color='#3376C6' size={14} style={{marginRight: 5}} />
                  <Text style={{fontSize: 12, fontWeight: '200', color: '#3376C6'}}>Jun 5 - Jun 7</Text>    
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
        )}
      </View>
    );
  }
}

ListDetail.defaultProps = {
  propertyList: mocks.propertyList
}
export default ListDetail;