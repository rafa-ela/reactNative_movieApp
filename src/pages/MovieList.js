import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {List} from "react-native-elements";
import Movie from '../components/Movie';
import movieAPI from '../helper/movieAPI';
export default class MovieList extends  React.PureComponent {

  static navigationOptions = ({
    navigation
  }) => {
    return {
      title: navigation.getParam('title', 'Listings'),
      headerStyle: {backgroundColor: '#173e69'},
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 25,
        flex: 1,
      },
     headerTintColor: '#ffffff'
    }
  }
  clickedOnMovie(id, index, movieList, type) {
    let mediaType = type ==='film'? 'movie':'tv';
    let detailsURL = movieAPI.getDetails(mediaType, id);
    Promise.all([
      fetch(detailsURL)
    ])
    .then(([res1]) => Promise.all([res1.json()]))
    .then(([data1]) => this.props.navigation.push('MovieDetails', {
      movieInfo: movieList[index],
      actorList: data1,
      mediaType: type
    })).catch(error => {
      console.log("Error in Movie List ", error)
    });
  }

  render() {
    const {navigation} = this.props;
    const movies = navigation.getParam('movies');
    const mediaType = navigation.getParam('type');
    return (
       <View style = {{flex: 1, backgroundColor: '#CCE5FF'}}>
       <List containerStyle = {
        styles.containerStyle
      }>
      <FlatList data = {movies}
      renderItem = {
        ({item,index}) => ( 
          <TouchableOpacity onPress = {() => this.clickedOnMovie(item.id, index, movies, mediaType)} >
          <Movie movie = {item }
                  type = {mediaType}
          />
          </TouchableOpacity >
        )}
      keyExtractor = {(item, index) => index.toString()}
    /> 
       </List>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingBottom: 1,
    marginBottom: 15,
    backgroundColor: '#999fb0',
  }
})