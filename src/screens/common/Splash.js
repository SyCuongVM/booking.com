import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => { 
      this.props.navigation.navigate('Home');
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.bookingText}>Booking</Text>
          <Text style={styles.comText}>.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#13357B'
  },
  wrapper: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  bookingText: {
    color: '#FFFFFF', 
    fontSize: 50, 
    fontWeight: 'bold'
  },
  comText: {
    color: '#009FE3', 
    fontSize: 50, 
    fontWeight: 'bold'
  }
});

export default Splash;