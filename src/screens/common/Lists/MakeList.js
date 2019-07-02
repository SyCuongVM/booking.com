import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Loader from '../../../components/common/Loader';

const { width } = Dimensions.get('window');

class MakeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingVisible: false
    };
    this.navigateQuickList = this.navigateQuickList.bind(this);
  }
  navigateQuickList() {
    this.setState({ loadingVisible: true });

    setTimeout(() => {
      this.setState({ loadingVisible: false });
      this.props.navigation.navigate('QuickList');
    }, 1500);
  }

  render() {
    const { loadingVisible } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{lex: 1, flexDirection: 'row', alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
              <Text style={{color: '#FFFFFF', fontSize: 16, marginLeft: 5}}>Back</Text>  
            </TouchableOpacity>
            <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', marginRight: 40}}>
              <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: 'bold'}}>Lists</Text>  
            </View>
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: '#F7F7F7'}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 10}}>
            <Ionicons name="ios-heart-empty" size={40} />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingHorizontal: 15}}>
            <View>
              <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: '400', textAlign: 'center', marginBottom: 40}}>Make Your List</Text>
                <Text style={{fontSize: 16, fontWeight: '100', textAlign: 'center'}}>Just sign in to create, add, delete or edit your lists of great places to stay</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginVertical: 20}}>
                <TouchableOpacity style={{width: width - 30, height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3, marginBottom: 10}} onPress={() => navigation.navigate('Auth')}>
                  <Text style={{fontSize: 16, color: '#FFFFFF'}}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                <View style={{width: 20, height: 1, marginHorizontal: 3, backgroundColor: '#808080'}} />
                <Text style={{fontSize: 16}}> or </Text>
                <View style={{width: 20, height: 1, marginHorizontal: 3, backgroundColor: '#808080'}} />
              </View>
            </View>
          </View>
          <View>
            <View style={{paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#FFFFFF'}}>
              <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.navigateQuickList}>
                <View style={{flex: 2}}>
                  <Text style={{fontSize: 18, fontWeight: '100'}}>Quick List</Text>
                </View>
                <View style={{flex: 1.2, flexDirection: 'row'}}>
                  <View style={{flex: 10, alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 18, fontWeight: '400', color: '#009FE3'}}>1</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end', marginLeft: 10}}>
                    <Ionicons name="ios-arrow-forward" color='gray' size={20} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingHorizontal: 15, marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '100', textAlign: 'center'}}>Add properties that inspire you to the list. After you sign in, you'll see the list in your account.</Text>
          </View>
        </View>
        <Loader modalVisible={loadingVisible} animationType="fade" dimensions={100} text="Loading" />
      </View>
    );
  }
}

export default MakeList;