import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Loading from '../screens/Loading';

import Home from '../screens/Search/Home';
import Search from '../screens/Search/Search';
import RecentlyViewed from '../screens/Search/View';
import PropertyList from '../screens/Search/List';
import Property from '../screens/Search/Property';

import Bookings from '../screens/Bookings/Bookings';
import ImportBooking from '../screens/Bookings/ImportBooking';

import Auth from '../screens/SignIn/Auth';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignIn/SignUp';
import ResetPassword from '../screens/SignIn/ResetPassword';
import Profile from '../screens/SignIn/Profile';
import EditProfile from '../screens/SignIn/EditProfile';

import More from '../screens/More/More';

const searchScreensWithBottomBarVisible = createStackNavigator(
  { Home, RecentlyViewed },
  { initialRouteName: "Home", headerMode: 'none'}
);
const SearchStack = createStackNavigator(
  { searchScreensWithBottomBarVisible, Search, PropertyList, Property },
  { headerMode: 'none' }
);
SearchStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  }
}

const BookingsStack = createStackNavigator(
  { Bookings, ImportBooking },
  { initialRouteName: "Bookings", headerMode: 'none' }
);
const SignInStack = createStackNavigator(
  { Auth, SignIn, SignUp, ResetPassword, Profile, EditProfile },
  { initialRouteName: "Profile", headerMode: 'none' }
);
const MoreStack = createStackNavigator(
  { More },
  { initialRouteName: "More", headerMode: 'none' }
);

const bottomTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Bookings: {
      screen: BookingsStack,
      navigationOptions: {
        tabBarLabel: 'Bookings',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="suitcase" color={tintColor} size={24} />
        )
      }
    },
    SignIn: {
      screen: SignInStack,
      navigationOptions: {
        tabBarLabel: 'Sign in',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" color={tintColor} size={24} />
        )
      }
    },
    More: {
      screen: MoreStack,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="more-horiz" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#3376C6',
      inactiveTintColor: '#808FA4',
      style: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3},
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

export default createAppContainer(createSwitchNavigator(
  { Loading, bottomTabNavigator },
  { initialRouteName: 'Loading' }
));