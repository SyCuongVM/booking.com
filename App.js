import React, { Component } from 'react';

// import AppNavigation from './src/navigation/AppNavigation';
import AppNavigation from './src/navigation/AppNav';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <AppNavigation />
    );
  }
}