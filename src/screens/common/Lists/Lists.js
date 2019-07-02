import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class Lists extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={25} />
              <Text style={{color: '#FFFFFF', fontSize: 16, marginLeft: 5}}>Back</Text>  
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Lists</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>Edit</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>
            <View style={{backgroundColor: '#FFFFFF', marginTop: 30, marginBottom: 15}}>
              <View style={{borderBottomWidth: 0.5, borderBottomColor: '#ECECEC'}}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('ListDetail', { listName: 'UK', property: 0 })}>
                    <View style={{flex: 2}}>
                      <Text style={{fontSize: 14, fontWeight: '400'}}>UK</Text>
                    </View>
                    <View style={{flex: 1.2, flexDirection: 'row'}}>
                      <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                        <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{borderBottomWidth: 0.5, borderBottomColor: '#ECECEC'}}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('ListDetail', { listName: 'US', property: 1 })}>
                    <View style={{flex: 2}}>
                      <Text style={{fontSize: 14, fontWeight: '400'}}>US</Text>
                    </View>
                    <View style={{flex: 1.2, flexDirection: 'row'}}>
                      <View style={{flex: 10, alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 14, fontWeight: '400', color: '#009FE3'}}>1</Text>
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                        <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('ListDetail', { listName: 'My next trip', property: 2 })}>
                    <View style={{flex: 2}}>
                      <Text style={{fontSize: 14, fontWeight: '400'}}>My next trip</Text>
                    </View>
                    <View style={{flex: 1.2, flexDirection: 'row'}}>
                      <View style={{flex: 10, alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 14, fontWeight: '400', color: '#009FE3'}}>2</Text>
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                        <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{backgroundColor: '#FFFFFF'}}>
              <TouchableOpacity onPress={() => navigation.navigate('CreateList')}>
                <View style={{paddingHorizontal: 15, paddingVertical: 10, justifyContent: 'center', alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, fontWeight: '400', color: '#009FE3'}}>Create a list</Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Lists;