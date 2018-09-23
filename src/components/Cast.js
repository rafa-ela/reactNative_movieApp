import React from 'react';
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';

export default class Cast extends React.Component {

    someAction(actorID){
       this.props.selectedActor(actorID);
    }
    render() {
      if (!this.props.actors) {
        return null;
      }
      else if (this.props.actors.cast) {
        return (
            <View>
              <Text style={styles.castTitle}>Actors</Text>
         {this.props.actors.cast.map(actor =>
          <Text key={actor.name} style={styles.castActor}>
            &bull; 
            <Text onPress={()=> this.someAction(actor.id)} style = {styles.actorName}> {actor.name} </Text> as {actor.character}
          </Text>
                  )}
            </View>
          );
      }
    }
  }
  
  const styles = {
      castTitle: {
        fontWeight: '500',
        marginBottom: 3,
      },
      castActor: {
        marginLeft: 2,
    },
    actorName:{
        color: 'blue' ,
        textDecorationLine: 'underline'
    }
};