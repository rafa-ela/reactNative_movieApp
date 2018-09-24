import React from 'react';
import { StyleSheet, FlatList, Text, View,TouchableOpacity  } from 'react-native';
import { List } from "react-native-elements";
import Movie from '../components/Movie';
import RenderSeparator from '../components/RenderSeparator';

export default class MovieList extends React.Component {

    clickedOnMovie(id, index, movieList){
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
      const headerTitle = navigation.getParam('title');
      return (
          <View style={{ flex: 1}}>
          <Text style={styles.h2text}> {headerTitle} </Text>
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <FlatList
              data = {movies}
              renderItem={
                ({ item, index }) =>(
             <TouchableOpacity  onPress={() => this.clickedOnMovie(item.id,index,movies)} >
                   <Movie movie={item}/>
             </TouchableOpacity >
            )}
              ItemSeparatorComponent={RenderSeparator}
              keyExtractor={(item,index) => index.toString()}
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