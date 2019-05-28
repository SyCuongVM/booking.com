import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as mocks from '../../resources/mocks';

const { width } = Dimensions.get('window');
class More extends Component {
  render() {
    const { appMore } = this.props;

    return (
      <View style={{flex: 1}}>
        
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: 'bold'}}>More</Text>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            {appMore.map(more => (
              <View key={`more-${more.id}`}>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Fontawesome name={more.icon} size={18} color="#13357B" />
                  </View>
                  <View style={{flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 14, fontWeight: 'normal'}}>{more.name}</Text>
                  </View>
                  <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name="ios-arrow-forward" size={18} color="#9DA3C4" />
                  </View>
                </TouchableOpacity>
                <View style={{marginHorizontal: 10, height: 2, backgroundColor: '#F7F7F7', width: width - 20}} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

More.defaultProps = {
  appMore: mocks.appMore
}
export default More;