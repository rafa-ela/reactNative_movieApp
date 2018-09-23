import React from 'react';
import { StyleSheet, FlatList, Text, View,TouchableOpacity  } from 'react-native';
import { List } from "react-native-elements";
import Movie from '../components/Movie';
import RenderSeparator from '../components/RenderSeparator';

export default class MovieList extends React.Component {

    clickedOnMovie(id, index,movieList){
      console.log(movieList[index]);
      Promise.all([
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=0139806a87c06ca7e1455f8012a66a29'),
      ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => this.props.navigation.push('MovieDetails', {
        movieInfo: movieList[index],
        actorList: data1,
      })).catch(error => {
        console.log("Error in Movie List ", error)});
  }

    render() {
      const { navigation } = this.props;
      const movies = navigation.getParam('movies');
      console.log(movies);
      return (
          <View style={{ flex: 1}}>
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <FlatList
              data = {movies.cast}
              renderItem={
                ({ item, index }) =>(
             <TouchableOpacity  onPress={() => this.clickedOnMovie(item.id,index,movies.cast)} >
                   <Movie movie={item}/>
             </TouchableOpacity >
            )}
              ItemSeparatorComponent={RenderSeparator}
              keyExtractor={item => item.id}
          />
          </List>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
      },
    });