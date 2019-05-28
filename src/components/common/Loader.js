import React, { Component } from 'react';
import { View, Text, StyleSheet,  Modal, ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;

    return (
      <Modal animationType={animationType} transparent visible={modalVisible}>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' style={{marginVertical: 15}} />
            <Text style={styles.text}>
              Searching properties in selected location
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  loaderContainer: {
    width: 140,
    height: 140,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    left: width/2 - 160/2,
    top: height/2 - 160/2,
  },
  text: {
    fontSize: 14, 
    fontWeight: '500', 
    color: '#FFFFFF', 
    textAlign: 'center', 
    paddingHorizontal: 10, 
    paddingVertical: 10
  }
});
export default Loader;