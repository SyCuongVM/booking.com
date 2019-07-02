import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { NavigationActions } from 'react-navigation';

const { width } = Dimensions.get('window');

class CreateList extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>Cancel</Text>
            </TouchableOpacity>
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -70}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Create a list</Text>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{flex: 1}}>

            <View>
              <View style={{paddingTop: 25, paddingBottom: 10, paddingHorizontal: 10}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: '#808FA4'}}>NEW LIST</Text>
              </View>
              <View style={{backgroundColor: '#FFFFFF'}}>
                <TextField 
                  style={{paddingHorizontal: 10, fontSize: 14, fontWeight: '400'}}
                  autoCorrect={false}
                  fontSize={14}
                  label="New list"
                  labelFontSize={14}
                  labelPadding={5}
                  labelTextStyle={{marginLeft: 10}}
                  lineWidth={0}
                  activeLineWidth={0}
                  disabledLineWidth={0}
                />
              </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 30, paddingRight: 25, paddingTop: 20}}>
              <TouchableOpacity style={{width: width - 60, height: 35, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3}} onPress={() => navigation.goBack()}>
                <Text style={{fontSize: 16, color: '#FFFFFF'}}>Search</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CreateList;