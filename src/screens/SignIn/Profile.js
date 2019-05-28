import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
import { getData } from '../../util/localStorage';

class Profile extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    getData('loggedUser').then((res) => {
      this.setState({ user: JSON.parse(res)});
    });
  }

  render() {
    const { user } = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: -(65)}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Profile</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView style={{backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>

            <View style={{paddingTop: 10, paddingBottom: 25, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#9DA3C4', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginBottom: 15}}>
                <Ionicons name="ios-person" size={45} color="#F7F7F7" />
              </View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>{user.lastname} {user.firstname}</Text>
            </View>

            <View style={{backgroundColor: '#FFFFFF'}}>
              <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: '#F7F7F7'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{marginRight: 10}}>
                    <Ionicons name="ios-checkbox-outline" size={18} />
                  </View>
                  <Text style={{fontSize: 14, fontWeight: '300'}}>Trips</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={18} />
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: '#F7F7F7'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{marginRight: 10}}>
                    <Ionicons name="ios-contacts" size={18} />
                  </View>
                  <Text style={{fontSize: 14, fontWeight: '300'}}>Reviews</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={18} />
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: '#F7F7F7'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{marginRight: 10}}>
                    <Ionicons name="ios-heart-empty" size={18} />
                  </View>
                  <Text style={{fontSize: 14, fontWeight: '300'}}>Lists</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#F7F7F7', width: 20, height: 20, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                      <Text style={{fontSize: 12, fontWeight: '300'}}>3</Text>
                    </View>
                    <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={18} />
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{marginRight: 10}}>
                    <Ionicons name="ios-search" size={18} />
                  </View>
                  <Text style={{fontSize: 14, fontWeight: '300'}}>Recent searches</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={18} />
                </View>
              </View>
            </View>

          </View>
        </ScrollView>

      </View>
    );
  }
}

export default Profile;