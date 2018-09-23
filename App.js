import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/views/HomeTab';
import MovieDetailsPage from './src/pages/MovieDetails';
import ActorDetailsPage from './src/pages/ActorDetails';
import MovieList from './src/pages/MovieList';

import TopTwentyTab from   './src/views/TopTwentyTab';
import MoreOptionsView from   './src/views/StackedTab';


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  MovieDetails: {screen: MovieDetailsPage},
  ActorDetails: {screen: ActorDetailsPage},
  MovieListings: {screen: MovieList}
});
/*
const TopTwentyStack = createStackNavigator({
  Top20: {screen: TopTwentyTab},
});
const MoreOptionStack = createStackNavigator({
  MoreOptions: {screen: MoreOptionsView}
});
*/

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Top20: { screen: TopTwentyTab },
    More : {screen: MoreOptionsView}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Top20') {
          iconName = 'trophy';
        }
        else if (routeName == 'More')
        {
       // iconName = `area-chart${focused ? '' : '-outline'}`;
          iconName = 'bars';
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  } 
);


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome my rafaela world! </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
