
import React from 'react';
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import ImagePoster from '../components/ImagePoster'

export default class ActorDetailsPage extends React.Component {

    render(){
    const { navigation } = this.props;
    const actor = navigation.getParam('actorInfo');
    return(
     <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
        <ImagePoster path = {actor.profile_path} />
        <View style={styles.rightPane}> 
       <Text style={styles.heading}> Birthday:</Text>
             <Text> {actor.birthday} </Text>
        <Text style={styles.heading}> Place of Birth:</Text>
              <Text>{actor.place_of_birth} </Text>
        <Text style = {styles.heading}>Popularity:</Text>
             <Text> {actor.popularity}</Text>
        </View>
        </View>
      <View style={styles.separator} />
       <Text style = {styles.heading}> Biography:  </Text> 
       <Text> {actor.biography}  </Text>
    </ScrollView>
    );
}
}

const styles = {
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