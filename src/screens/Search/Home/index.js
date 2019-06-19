import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Loader from '../../../components/common/Loader';
import * as mocks from '../../../resources/mocks';
import { getData } from '../../../util/localStorage';

const { width } = Dimensions.get('window');
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingVisible: false,
      user: {}
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    getData('loggedUser').then((res) => {
      this.setState({ user: JSON.parse(res)});
    })
  }
  handleSearch() {
    this.setState({ loadingVisible: true });

    setTimeout(() => {
      this.setState({ loadingVisible: false });
      this.props.navigation.navigate('PropertyList');
    }, 2000);
  }

  render() {
    const { loadingVisible, user } = this.state;
    const { recentSearch, navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: -(80)}}>
              <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}>Booking</Text>
              <Text style={{color: '#009FE3', fontSize: 20, fontWeight: 'bold'}}>.com</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Ionicons name="ios-notifications" color="#FFFFFF" size={22} />
            </View>
          </View>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>
            <View style={{flex: 2, backgroundColor: '#FEBA02', paddingHorizontal: 15, paddingVertical: 30}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {user ? (
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>Welcome back, {user.firstname}!</Text>
                ) : (
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>Search</Text>
                )}
                <Text style={{fontSize: 12, fontWeight: '300', marginBottom: 20}}>Destination/property name</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', padding: 10, backgroundColor: '#FFFFFF', height: 45, marginBottom: 5, borderRadius: 3, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                  <Ionicons name="ios-search" size={18} />
                  <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder="Enter destination"
                    placeholderTextColor="black"
                    style={{flex: 1, fontSize: 14, fontWeight: '300', backgroundColor: '#FFFFFF', paddingLeft: 10}}
                    onFocus={() => this.props.navigation.navigate('Search')}
                  />
                </View>
                <View style={{flexDirection: 'row', padding: 10, backgroundColor: '#FFFFFF', height: 45, marginBottom: 5, borderRadius: 3, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                  <Fontawesome name="calendar" size={18} />
                  <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder="Sat, May 18 - Sat, Jun 8"
                    placeholderTextColor="black"
                    style={{flex: 1, fontSize: 14, fontWeight: '300', backgroundColor: '#FFFFFF', paddingLeft: 10}}
                  />
                </View>
                <View style={{flexDirection: 'row', padding: 10, backgroundColor: '#FFFFFF', height: 45, marginBottom: 5, borderRadius: 3, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                  <Fontawesome name="user" size={18} />
                  <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder="1 room . 2 adults . 0 children"
                    placeholderTextColor="black"
                    style={{flex: 1, fontSize: 14, fontWeight: '300', backgroundColor: 'white', paddingLeft: 10}}
                    onFocus={() => this.props.navigation.navigate('MoreOptions')}
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity style={{width: width - 30, height: 45, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3}} onPress={this.handleSearch} >
                  <Text style={{fontSize: 16, color: '#FFFFFF'}}>Search</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '300', alignItems: 'flex-start'}}>I'm traveling for work</Text>
              </View>
            </View>

            <View style={{backgroundColor: '#FFFFFF', paddingHorizontal: 15, marginVertical: 5}}>
              <View style={{marginTop: 20, marginBottom: 15}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Recent Searches</Text>
              </View>
              <View style={{flex: 1}} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {recentSearch.map(location => (
                    <TouchableOpacity activeOpacity={0.8} key={`location-${location.id}`}>
                      <View style={{flex: 1}}>
                        <View style={{flex: 2, marginRight: 10}}>
                          <Image source={location.image} style={{width: (width - 40)/2, height: 100, borderRadius: 2}} resizeMode="cover" />
                        </View>
                        <View style={{flex: 1, marginTop: 10, marginBottom: 15, width: (width - 40)/2}}>
                          <Text style={{fontSize: 14, fontWeight: 'bold'}}>{location.name}</Text>
                          <Text style={{fontSize: 12, fontWeight: '100'}}>{location.date}, {location.guest}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>

            <View style={{backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 10, marginBottom: 5}}>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={user ? () => navigation.navigate('Lists') : () => navigation.navigate('MakeList')}>
                <View style={{flex: 2}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>Lists</Text>
                </View>
                <View style={{flex: 1.2, flexDirection: 'row'}}>
                  <View style={{flex: 10, alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>1 Property</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                    <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 10, marginBottom: 5}}>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('RecentlyViewed')}>
                <View style={{flex: 2}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>Recently Viewed</Text>
                </View>
                <View style={{flex: 1.2, flexDirection: 'row'}}>
                  <View style={{flex: 10, alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>11 Properties</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                    <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Image 
                    source={require('../../../resources/assets/images/car.png')} 
                    style={{width: 90, height: 90}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 4, flexDirection: 'column', paddingHorizontal: 15, paddingVertical: 20}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>Need some wheels?</Text>
                  <Text style={{fontSize: 12, fontWeight: '300'}}>Rent a car and make the most of your trip.</Text>
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#3376C6', marginTop: 15}}>See deals</Text>
                </View>
              </View>
            </View>

            <Loader modalVisible={loadingVisible} animationType="fade" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

Home.defaultProps = {
  recentSearch: mocks.recentSearch
}
export default Home;