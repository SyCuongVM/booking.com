import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as mocks from '../../../resources/mocks';
const { width } = Dimensions.get('window');
class Search extends Component {
  state = { 
    searchFocus: false,
    searchString: null
  }
  handleSearchFocus(status) {
    status ? this.setState({ searchFocus: true }) : this.setState({ searchFocus: false });
  }

  render() {
    const { searchLocations, navigation } = this.props;
    const { searchString, searchFocus } = this.state;
    const isEditing = searchFocus && searchString;

    return (
      <React.Fragment>
         <View style={{backgroundColor: '#13357B', paddingHorizontal: 10, paddingTop: 20, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', height: width - 300}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 4.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5, backgroundColor: '#FFFFFF', height: 32, borderRadius: 8}}>
              <Ionicons name="ios-search" size={14} color="gray" />
              <TextInput 
                autoFocus
                autoCapitalize='none'
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Enter destination"
                placeholderTextColor="gray"
                style={{flex: 1, fontSize: 14, fontWeight: '400', backgroundColor: '#FFFFFF', paddingLeft: 10}}
                onFocus={() => this.handleSearchFocus(true)}
                onBlur={() => this.handleSearchFocus(false)}
                onChangeText={text => this.setState({ searchString: text })}
                value={searchString}
              />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', alignSelf: 'center'}}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}} onPress={() => navigation.goBack()}>Cancel</Text>
            </View>
          </View>
         </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}} showsVerticalScrollIndicator={false}>
          <View>
            {isEditing ? (
              <View>
                {searchLocations.map(location => (
                  <TouchableOpacity activeOpacity={0.8} key={`location-${location.id}`}>
                    <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 15, borderBottomWidth: 0.16, borderBottomColor: '#9DA3B4'}}>
                      <Image source={location.image} style={{width: 45, height: 45, borderRadius: 2}} />
                      <View style={{justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 15}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{location.name}</Text>
                        <Text style={{fontSize: 12, fontWeight: '500', color: 'gray'}}>{location.description}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
                <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 20, backgroundColor: '#FFFFFF', flexWrap: 'wrap'}}>
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#9DA3B4', textAlign: 'center'}}>Haven't found your destination? Try a more specific search. (e.g. add country or region name) </Text>
                </View> 
              </View> ) : (
              <View style={{flexDirection: 'row', height: 50, padding: 15, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                <FontAwesome name="compass" size={20} />
                <Text style={{color: '#9DA3B4', fontSize: 14, fontWeight: '300', paddingHorizontal: 10}}>Around current location</Text>
              </View> 
              ) 
            }
          </View>
        </ScrollView>
        <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF'}}>
          <TouchableOpacity style={{height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3, margin: 10}}>
            <Text style={{fontSize: 14, color: '#FFFFFF'}}>Clear list</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

Search.defaultProps = {
  searchLocations: mocks.searchLocations
}
export default Search;