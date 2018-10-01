
import React from 'react';
import { View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import ImagePoster from '../components/ImagePoster'

export default class ActorDetailsPage extends React.Component {
    
static navigationOptions = {
        title: "Actor Details"
      }
  
actorMovies(actorMovies,name,type){
    if (type === 'film'){
        this.props.navigation.push('MovieListings', {
            movies: actorMovies.cast,
            title: "Showing Movies " ,
            type:"film"
         });
    }
    else{
        this.props.navigation.push('MovieListings', {
            movies: actorMovies.cast,
            title: "Showing TV Shows " ,
            type:"tvshows"
         });
    }
}
render(){
    const { navigation } = this.props;
    const actor = navigation.getParam('actorInfo');
    const movies = navigation.getParam('movies');
    const tvshows = navigation.getParam('tvList');

    return(
     <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
        <ImagePoster path = {actor.profile_path} />
        <View style={styles.rightPane}> 
        <Text style={styles.heading}> Full Name:</Text>
             <Text> {actor.name} </Text>
       <Text style={styles.heading}> Birthday:</Text>
             <Text> {actor.birthday} </Text>
        <Text style={styles.heading}> Place of Birth:</Text>
              <Text>{actor.place_of_birth} </Text>
        <Text style = {styles.heading}>Popularity:</Text>
             <Text> {actor.popularity}</Text>
            </View>
       </View>
        <View style={styles.separator} />
            <Text style = {styles.heading}> Biography:</Text> 
            <Text> {actor.biography} </Text>
        <View style={{padding: 15}} />
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style = {styles.buttonBox}  onPress={() => this.actorMovies(movies,actor.name,"film") } >
                    <Text style ={styles.buttonText}> Movies </Text>
            </TouchableOpacity>
            <View style={{padding: 10}} />
            <TouchableOpacity style = {styles.buttonBox}  onPress={() => this.actorMovies(tvshows,actor.name,"tv") } >
                <Text style ={styles.buttonText}> TV Shows </Text>
            </TouchableOpacity>
       </View>
  </ScrollView>
    );
}
}

const styles = {
    buttonBox: {
        borderWidth: 1,
        borderColor: '#00008b',
        backgroundColor: '#eeeeee',
        width: 85,
        height: 40
    },
    contentContainer: {
        padding: 10,
      },
      rightPane: {
        flex: 1,
      },
      buttonText:{
        padding:5,
        color: 'blue' ,
      },
      separator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: StyleSheet.hairlineWidth,
        marginVertical: 10,
      },
      heading:{
        fontWeight: '500',
        marginTop:10,
        marginBottom: 10,

      },
      mainSection: {
        flexDirection: 'row'
    },

};