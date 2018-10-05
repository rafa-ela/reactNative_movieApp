import React from 'react';
import { StyleSheet, FlatList, Text, View,TouchableOpacity  } from 'react-native';
import { List } from "react-native-elements";
import Movie from '../components/Movie';
import movieAPI from '../helper/movieAPI';

class HomeScreen extends React.Component {
    
  static navigationOptions = {
    title: 'HOME',
    headerStyle: {backgroundColor: '#173e69',},
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#ffffff',
      fontSize: 25,
      flex:1,
    },
    headerTintColor: '#ffffff',
  };
  
  state = {
    movies:[],
    isSuccessful: false 
  }

componentDidMount(){
  this.fetchData();
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
      <View style={{ flex: 1, backgroundColor: '#CCE5FF' ,alignItems: 'center'}}>
            <Text style={styles.h2text}> {"Popular Movies"} </Text>
            <List containerStyle={styles.containerStyle}>
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
  containerStyle:{
    flex: 1,    
    paddingBottom: 1, 
    marginBottom: 15, 
    backgroundColor: '#999fb0'
  },
  h2text: {
    marginTop:15,
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold'
    },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  }
});
export default HomeScreen;