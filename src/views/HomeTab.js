import React from 'react';
import { StyleSheet, FlatList, Text, View,TouchableOpacity  } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import getMovie from '../helper/movieAPI';
import Movie from '../components/Movie';
import RenderSeparator from '../components/RenderSeparator';
import movieAPI from '../helper/movieAPI';

class HomeScreen extends React.Component {
    
  static navigationOptions = {
    title: "Home Page"
  }

  state = {
    movies:[],
    isSuccessful: false 
  }

componentDidMount(){
  this.fetchData();
 // getMovie().then(movies => this.setState({ movies,isSuccessful:true}))
  //.catch(() => this.setState({ isSuccessful: false }));
}


fetchData = async () => {
  var urlReq = movieAPI.getPopuMovies();
  const response = await fetch(urlReq);
  const json = await response.json();
  this.setState({ movies: json.results });
};

clickedOnMovie(id,index) {
    //Make another query to the API that will get the list of actors in the selected movie. 
    actorList = movieAPI.getActorListURL(id);
    Promise.all([
      fetch(actorList),
      ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => this.props.navigation.push('MovieDetails', {
        movieInfo: this.state.movies[index],
        actorList: data1,
        mediaType: 'film'
      })).catch(error => {
        console.log("Getting Blah error",error)});
      }
  render() {
    return (
      <View style={{ flex: 1}}>
            <Text style={styles.h2text}> {"Popular Movies"} </Text>
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <FlatList
              data = {this.state.movies}
              renderItem={
                ({ item, index }) =>(
             <TouchableOpacity  onPress={() => this.clickedOnMovie(item.id,index)} >
                   <Movie movie={item}
                          type={"film"}
                  />
             </TouchableOpacity >
            )}
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  }
});
export default HomeScreen;