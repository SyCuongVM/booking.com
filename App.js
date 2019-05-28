import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigation from './src/navigation/AppNavigation';

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    );
  }
}