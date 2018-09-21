import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import getMovie from '../helper/movieAPI';

class HomeScreen extends React.Component {

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
  const API_KEY= "api_key=0139806a87c06ca7e1455f8012a66a29";
  const BASE_URL = "http://api.themoviedb.org";
  var urlReq = BASE_URL +"/3/discover/movie?" + API_KEY+"&primary_release_year=2018&certification_country=US&certification.lte=PG-13&sort_by=vote_count.desc&certification_country=US&certification.lte=PG-13&include_adult=false";
  const response = await fetch(urlReq);
  const json = await response.json();
  console.log(json);
  this.setState({ movies: json.results });
};
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HOME</Text>
          <FlatList
          data = {this.state.movies}
         // keyExtractor={(x, i) => i}
          renderItem = { ({item})  =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.original_title}</Text>
          </View>
          }
          keyExtractor={item => item.id}
      />
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
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
  
});


export default HomeScreen;