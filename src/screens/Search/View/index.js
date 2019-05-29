import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as mocks from '../../../resources/mocks';
import Property from '../../../components/Property';

const { width } = Dimensions.get('window');
class RecentlyViewed extends Component {
  render() {
    const { propertyList, navigation } = this.props;
    const ex1 = propertyList.filter(property => property.id === 1);
    const ex2 = propertyList.filter(property => property.id === 4);

    return (
      <View style={{flex: 1}}>
         <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={25} />
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Recently Viewed</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>Clear</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>

            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.3, borderBottomColor: '#9DA3C4', borderTopWidth: 0.3, borderTopColor: '#9DA3C4'}}>
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>Brussels</Text>
                <Text style={{fontSize: 12, fontWeight: '100', marginBottom: 3}}>Aug 17 - 21</Text>
                <Text style={{fontSize: 12, fontWeight: '100'}}>2 adults</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#3376C6'}}>Resume search</Text>
              </View>
            </View>

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

            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.3, borderBottomColor: '#9DA3C4', borderTopWidth: 0.3, borderTopColor: '#9DA3C4'}}>
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>Paris</Text>
                <Text style={{fontSize: 12, fontWeight: '100', marginBottom: 3}}>Jun 12 - 14</Text>
                <Text style={{fontSize: 12, fontWeight: '100'}}>2 adults, 2 children</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#3376C6'}}>Resume search</Text>
              </View>
            </View>

            <Property 
              key={ex2[0].id}
              coverImage={ex2[0].coverImage}
              name={ex2[0].name}
              stars={ex2[0].stars} 
              thumbUp={ex2[0].thumbUp} 
              rating={ex2[0].rating} 
              room={ex2[0].room} 
              location={ex2[0].location} 
              breakfast={ex2[0].breakfast}
              deal={ex2[0].deal} 
              soldOut={ex2[0].soldOut} 
              propertyType={ex2[0].propertyType} 
              stays={ex2[0].stays} 
              currency={ex2[0].currency} 
              price={ex2[0].price} 
              tax={ex2[0].tax} 
              freeCancellation={ex2[0].freeCancellation} 
              noPrepayment={ex2[0].noPrepayment} 
              roomLefts={ex2[0].roomLefts}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

RecentlyViewed.defaultProps = {
  propertyList: mocks.propertyList
}
export default RecentlyViewed;