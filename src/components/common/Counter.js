import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.start
    }

    this.onPressMinus = this.onPressMinus.bind(this);
    this.onPressPlus = this.onPressPlus.bind(this);
  }

  onPressMinus() {
    const { number } = this.state;
    const minusNumber = number - 1;
    if (number == this.props.min) 
      return;

    return this.setState({ number: minusNumber }, () => 
      this.props.onChange(minusNumber, "-")
    );
  }
  onPressPlus() {
    const { number } = this.state;
    const plusNumber = number + 1;

    if (number == this.props.max)
      return;

    return this.setState({ number: plusNumber }, () => 
      this.props.onChange(plusNumber, "+")
    );
  }

  renderMinusButton() {
    const { min, touchableDisabledColor, touchableColor } = this.props;
    const isMinusDisabled = (min == this.state.number);
    const buttonStyle = { borderColor: isMinusDisabled ? touchableDisabledColor: touchableColor };

    return (
      <TouchableOpacity style={[styles.touchable, buttonStyle]} onPress={this.onPressMinus}>
        <Ionicons name="ios-remove" color={isMinusDisabled ? touchableDisabledColor : touchableColor} size={30} />
      </TouchableOpacity>
    )
  }
  renderPlusButton() {
    const { max, touchableDisabledColor, touchableColor } = this.props;
    const isPlusDisabled = (max == this.state.number);
    const buttonStyle = { borderColor: isPlusDisabled ? touchableDisabledColor: touchableColor };

    return (
      <TouchableOpacity style={[styles.touchable, buttonStyle]} onPress={this.onPressPlus}>
        <Ionicons name="ios-add" color={isPlusDisabled ? touchableDisabledColor : touchableColor} size={30} />
      </TouchableOpacity>
    )
  }

  render() {
    const { number } = this.state;

    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        {this.renderMinusButton()}
        <View style={{width: 30, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: '400'}}>{number}</Text>
        </View>
        {this.renderPlusButton()}
      </View>
    );
  }
}

Counter.defaultProps = {
  start: 0,
  min: 0,
  max: 10,
  onChange(number, type) {
    // Number, - or +
  },

  touchableColor: "#009FE3",
  touchableDisabledColor: "#BCCCD4",

  minusIcon: null,
  plusIcon: null
};

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: 30, 
    height: 30, 
    borderRadius: 2, 
    borderWidth: 0.5
  }
});

export default Counter;