import React from 'react';
import { 
  createAppContainer,
  createBottomTabNavigator, 
  createStackNavigator, createSwitchNavigator,
  StackViewTransitionConfigs
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Splash from '../screens/common/Splash';

import Home from '../screens/Search/Home';
import MoreOptions from '../screens/Search/Home/MoreOptions';
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
import RecentSearches from '../screens/SignIn/RecentSearches';

import More from '../screens/More/More';

import Lists from '../screens/common/Lists/Lists';
import ListDetail from '../screens/common/Lists/ListDetail';
import CreateList from '../screens/common/Lists/CreateList';
import MakeList from '../screens/common/Lists/MakeList';
import QuickList from '../screens/common/Lists/QuickList';

const MODAL_ROUTES = [
  "CreateList",
  "MoreOptions",
];
let dynamicModalTransition = (
  transitionProps,
  prevTransitionProps
) => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    MODAL_ROUTES.some(
      screenName => screenName === transitionProps.scene.route.routeName ||
                   (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const searchScreensWithBottomBarVisible = createStackNavigator(
  { Home, RecentlyViewed, Lists, MakeList },
  { initialRouteName: "Home", headerMode: 'none' }
);
const SearchStack = createStackNavigator(
  { searchScreensWithBottomBarVisible, Search, PropertyList, Property, MoreOptions, CreateList, ListDetail, QuickList },
  { headerMode: 'none', transitionConfig: dynamicModalTransition }
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

const signInScreensWithBottomBarVisible = createStackNavigator(
  { Auth, SignIn, SignUp, ResetPassword, Profile, EditProfile, RecentSearches },
  { initialRouteName: "Profile", headerMode: 'none' }
);
const SignInStack = createStackNavigator(
  { signInScreensWithBottomBarVisible, CreateList },
  { headerMode: 'none', transitionConfig: dynamicModalTransition }
);
SignInStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  }
}

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
  { Splash, bottomTabNavigator },
  { initialRouteName: 'Splash' }
));