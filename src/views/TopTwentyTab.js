import React from 'react';
import {View, FlatList,StyleSheet, Text, TouchableOpacity} from 'react-native';
import { List,Card } from "react-native-elements";
import movieAPI from '../helper/movieAPI';

export default class TopTwentyTab extends React.Component {

  static navigationOptions = {
    title: 'TOP CATEGORIES',
    headerStyle: {
      backgroundColor: '#173e69',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#ffffff',
      fontSize: 25,
      flex:1,
        },
  };
  constructor(props){
    super(props);
    this.state = {
      top20List:[
        {category :'Highest Grossing Movie', id:'HighGrossingMovie'},
        {category :'Lowest Grossing Movie', id:'LowestGrossingMovie'},
        {category :'Worst Movies of All Time',id:'WorstMovies'},
        {category :'Best Movies of All Time',id:'BestMovies'},
        {category :'Top Rated TV Shows',id:'BestTVShows'},
       ]
      }
    
  };

  pressedTop20Item(id) {
    var url =  movieAPI.getTopHighestGrossingURL(),type="film",title="Top";
    switch(id){
      case "HighGrossingMovie":
      url = movieAPI.getTopHighestGrossingURL();
      type = "film";
      title ="Highest Grossing Movies";
      break;
      case "LowestGrossingMovie":
      url = movieAPI.getTopLowestGrossingURL();
      type = "film";
      title ="Lowest Grossing Movies";
      break;
      case "WorstMovies":
      url = movieAPI.getTopWorstMovieURL();
      type = "film";
      title ="Worst Movies";
      break;
      case "BestMovies":
      url = movieAPI.getTopBestMovieURL();
      type = "film";
      title ="Best Movies";
      break;
      case "BestTVShows":
      url = movieAPI.getTopTVShowsURL();
      type = "tvshows";
      title ="Top Rated TV Shows";
      break;
      default:
      url = movieAPI.getTopBestMovieURL();
      break;
    }
    this.goToListingsPage(url,type,title);
 }

 goToListingsPage(url,mediaType,HeaderTitle) {
  Promise.all([
    fetch(url),
  ])
  .then(([res1]) => Promise.all([res1.json()]))
  .then(([data1]) => this.props.navigation.push('MovieListings', {
    movies: data1.results,
    title: HeaderTitle,
    type: mediaType
    })).catch(error => {
    console.log("Getting cart data error",error)});
}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#CCE5FF'}}>
      <List containerStyle={styles.container}>
        <FlatList 
            data={this.state.top20List}
            styles ={styles.flatview}
            renderItem={({item}) => (
              <Card>
                <TouchableOpacity onPress={ () => this.pressedTop20Item(item.id)}>
                    <View>
                       <Text style= {styles.name}> {item.category}</Text>
                    </View>
               </TouchableOpacity>
              </Card>      
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
    marginBottom: 50,
    justifyContent: 'center',
    backgroundColor: '#999fb0',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    textAlign:'center'
  }

  
});


