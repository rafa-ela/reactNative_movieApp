
import React from 'react';
import { View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import ImagePoster from '../components/ImagePoster'

export default class ActorDetailsPage extends React.Component {
    
    static navigationOptions = {
        title: "Actor Details"
      }
  
    actorMovies(actorMovies){
        this.props.navigation.navigate('MovieListings', {
            movies: actorMovies
        });
    
    }
    render(){
    const { navigation } = this.props;
    const actor = navigation.getParam('actorInfo');
    const movies = navigation.getParam('movies');
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
            <TouchableOpacity style = {styles.text}  onPress={() => this.actorMovies(movies) } >
                    <Text style ={{padding:5 }}> Movies </Text>
            </TouchableOpacity>
            <View style={{padding: 10}} />
            <TouchableOpacity style = {styles.text}>
                <Text style ={{padding:5 }}> TV Shows </Text>
            </TouchableOpacity>
       </View>
  </ScrollView>
    );
}
}

const styles = {
    text: {
        borderWidth: 1,
        borderColor: 'black',
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