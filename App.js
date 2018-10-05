import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator,DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import MovieDetailsPage from './src/pages/MovieDetails';
import ActorDetailsPage from './src/pages/ActorDetails';
import MovieList from './src/pages/MovieList';

import TopTwentyTab from   './src/tabs/TopTwentyTab';
import SearchTab from './src/tabs/SearchTab';
import HomeScreen from './src/tabs/HomeTab';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  MovieDetails: {screen: MovieDetailsPage},
  ActorDetails: {screen: ActorDetailsPage},
  MovieListings: {screen: MovieList}
});
const SearchTabStack = createStackNavigator({
  Search: {screen: SearchTab},
  MovieDetails: {screen: MovieDetailsPage},
  ActorDetails: {screen: ActorDetailsPage},
  MovieListings: {screen: MovieList}
});
const MoreOptionsStack = createStackNavigator({
  Top20: {screen: TopTwentyTab},
  MovieListings: {screen: MovieList},
  MovieDetails: {screen: MovieDetailsPage},
  ActorDetails: {screen: ActorDetailsPage},
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Search: {screen:SearchTabStack},
    More : {screen: MoreOptionsStack}
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Search') {
          iconName = 'search';
        }
        else if (routeName == 'More')
        {
          iconName = 'trophy';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589',  // inactive icon color
      style: {
          backgroundColor: '#173e69' // TabBar background
      }
  
    },
  
  } 
);

