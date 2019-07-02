import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Counter from '../../../components/common/Counter';

const { width } = Dimensions.get('window');

class MoreOptions extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-close" color='#FFFFFF' size={30} />
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 40}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>More Options</Text>
            </View>
          </View>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>
            <View style={{backgroundColor: '#FFFFFF'}}>
               <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#ECECEC', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>Rooms</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Counter start={1} min={1} max={30} />
                </View>
              </View>

              <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#ECECEC', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>Adults</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Counter start={2} min={1} max={30} />
                </View>
              </View>

              <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>Children</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Counter start={0} min={0} max={10} />
                </View>
              </View>
            </View>

            <View style={{backgroundColor: '#FFFFFF', marginVertical: 10}}>
              <View style={{paddingHorizontal: 15, paddingTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Age of children at check-out</Text>
              </View>
              <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <Text style={{fontSize: 14, fontWeight: '400'}}>Child 1</Text>
                  </View>
                  <View style={{flex: 1.2, flexDirection: 'row'}}>
                    <View style={{flex: 10, alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 14, fontWeight: '400', color: '#009FE3'}}>2 years old</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                      <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <Text style={{fontSize: 14, fontWeight: '400'}}>Child 2</Text>
                  </View>
                  <View style={{flex: 1.2, flexDirection: 'row'}}>
                    <View style={{flex: 10, alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 14, fontWeight: '400', color: '#009FE3'}}>4 years old</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                      <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF'}}>
          <TouchableOpacity style={{height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3, margin: 10}} onPress={() => this.props.navigation.goBack()}>
            <Text style={{fontSize: 14, color: '#FFFFFF'}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MoreOptions;