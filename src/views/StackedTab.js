import React from 'react';
import {View, FlatList,StyleSheet, Text, TouchableOpacity} from 'react-native';
import { List,Card } from "react-native-elements";

export default class MoreOptionsView extends React.Component {
  

  constructor(props){
    super(props);
    this.state = {
      top20List:[
        {category : 'Top 20', id:'top20'},
        {category :'Genres', id:'genres'},
        {category :'Popular TV Shows' ,id:'tv shows'},
       ]
      }
    
  };

  actionOnRow(item) {
    if(item === 'top20'){
      this.props.navigation.navigate('Top20');
    }
 }

 getTopGrossingMovie() {
  Promise.all([
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990'),
  ])
  .then(([res1]) => Promise.all([res1.json()]))
  .then(([data1]) => this.props.navigation.navigate('MovieListings', {
    movies: data1.results,
    title: "Top Grossing Movies"
  })).catch(error => {
    console.log("Getting cart data error",error)});
}

  render() {
    console.log(this.state.top20List);
    return (
      <List containerStyle={styles.container}>
        <FlatList 
            data={this.state.top20List}
            styles ={styles.flatview}
            renderItem={({item}) => (
              <Card>
                <TouchableOpacity onPress={ () => this.actionOnRow(item.id)}>
                    <View>
                       <Text> {item.category}</Text>
                    </View>
               </TouchableOpacity>
              </Card>   
           )}
        /> 
        </List>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 25,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
});




