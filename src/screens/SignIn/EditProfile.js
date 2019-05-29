import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextField } from 'react-native-material-textfield';

import { getData, removeData } from '../../util/localStorage';

const { width } = Dimensions.get('window');
class EditProfile extends Component {
  state = {
    user: {},
    business: false
  }
  componentDidMount() {
    getData('loggedUser').then((res) => {
      this.setState({ user: JSON.parse(res)});
    })
  }
  logUserOut = () => {
    removeData('loggedUser');
    this.props.navigation.navigate('Auth');
  }

  render() {
    const { user } = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -70}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Edit profile</Text>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>
            
            <View>
              <View style={{paddingTop: 25, paddingBottom: 10, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#808FA4'}}>NAME</Text>
              </View>
              <View style={{backgroundColor: '#FFFFFF'}}>
                <TextField 
                  value={user.firstname}
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="First Name"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
                <View style={{marginLeft: 10, height: 0.5, backgroundColor: '#808FA4', width: width - 10, alignItems: 'flex-end'}} />
                <TextField 
                  value={user.lastname}
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Last Name"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
              </View>
            </View>

            <View>
              <View style={{paddingTop: 20, paddingBottom: 10, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4', borderTopWidth: 0.2, borderTopColor: '#808FA4'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#808FA4'}}>EMAIL ADDRESSES</Text>
              </View>
              <View style={{backgroundColor: '#FFFFFF'}}>
                <TextField 
                  value={user.email}
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="First Name"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
              </View>
            </View>

            <View>
              <View style={{paddingTop: 20, paddingBottom: 10, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4', borderTopWidth: 0.2, borderTopColor: '#808FA4'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#808FA4'}}>DETAILS</Text>
              </View>
              <View style={{backgroundColor: '#FFFFFF'}}>
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Mobile Number"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
                <View style={{marginLeft: 10, height: 0.5, backgroundColor: '#808FA4', width: width - 10, alignItems: 'flex-end'}} />
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Date of Birth"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
                <View style={{marginLeft: 10, height: 0.5, backgroundColor: '#808FA4', width: width - 10, alignItems: 'flex-end'}} />
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Gender"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
                <View style={{marginLeft: 10, height: 0.5, backgroundColor: '#808FA4', width: width - 10, alignItems: 'flex-end'}} />
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Smoking preference"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
              </View>
            </View>

            <View>
              <View style={{paddingTop: 20, paddingBottom: 10, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4', borderTopWidth: 0.2, borderTopColor: '#808FA4'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#808FA4'}}>ADDRESS</Text>
              </View>
              <View style={{backgroundColor: '#FFFFFF'}}>
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Country/Region"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
                <View style={{marginLeft: 10, height: 0.5, backgroundColor: '#808FA4', width: width - 10, alignItems: 'flex-end'}} />
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="City"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
                <View style={{marginLeft: 10, height: 0.5, backgroundColor: '#808FA4', width: width - 10, alignItems: 'flex-end'}} />
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Street Address"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
                <View style={{marginLeft: 10, height: 0.5, backgroundColor: '#808FA4', width: width - 10, alignItems: 'flex-end'}} />
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="Zip Code"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
              </View>
            </View>

            <View>
              <View style={{paddingTop: 20, paddingBottom: 10, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4', borderTopWidth: 0.2, borderTopColor: '#808FA4'}} />
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10}}>
                <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, fontWeight: 'normal'}}>Travelling for Business?</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Switch 
                    value={this.state.business}
                    onValueChange={(value) => {
                      this.setState({
                        business: value
                      })
                    }} 
                  />
                </View>
              </View>
            </View>

            <View>
              <View style={{paddingTop: 20, paddingBottom: 10, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4', borderTopWidth: 0.2, borderTopColor: '#808FA4'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#808FA4'}}>CREDIT CARDS</Text>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingVertical: 10}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons name="ios-add-circle-outline" size={25} color="#3376C6" />
                </View>
                <View style={{flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, fontWeight: 'normal'}}>Add credit card</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons name="ios-arrow-forward" size={20} color="#9DA3C4" />
                </View>
              </View>
            </View>

            <View>
              <View style={{paddingTop: 20, paddingBottom: 10, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4', borderTopWidth: 0.2, borderTopColor: '#808FA4'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#808FA4'}}>MY BUSINESS CREDIT CARDS</Text>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingVertical: 10, borderBottomWidth: 0.2, borderBottomColor: '#808FA4'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons name="ios-add-circle-outline" size={25} color="#3376C6" />
                </View>
                <View style={{flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 14, fontWeight: 'normal'}}>Add business credit card</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons name="ios-arrow-forward" size={20} color="#9DA3C4" />
                </View>
              </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
              <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3}} onPress={this.logUserOut.bind(this)}>
                <Text style={{fontSize: 14, color: '#FFFFFF'}}>Log out</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default EditProfile;