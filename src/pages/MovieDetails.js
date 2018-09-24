import React from 'react';
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import Cast from '../components/Cast';
import ImagePoster from '../components/ImagePoster'

//import moment from 'moment';

export default class MovieDetailsPage extends React.Component {
    static navigationOptions = {
        title: ' Go Back '
      }
  
  getSelectedActor = (actorID) => {
        //make a query to get actor details. 
        Promise.all([
          fetch('https://api.themoviedb.org/3/person/' +actorID+'?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US'),
          fetch("https://api.themoviedb.org/3/person/"+actorID+"/movie_credits?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US"),
          fetch("https://api.themoviedb.org/3/person/"+actorID+"/tv_credits?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US")
        ])
        .then(([res1,res2,res3]) => Promise.all([res1.json(),res2.json(),res3.json()]))
        .then(([data1,data2,data3]) => this.props.navigation.navigate('ActorDetails',{
          actorInfo:data1,
          movies:data2,
          tvList:data3
        }));
      }    

  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam('movieInfo');
    const type = navigation.getParam('mediaType');
    const {noteStyle} = styles;
    console.log(movie);
    //const time = moment(publishedAt || moment.now()).fromNow();        
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style={styles.mainSection}>
          <ImagePoster path = {movie.poster_path} />
          <View style={styles.rightPane}> 
            <Text style={styles.movieTitle}>Original Title: {type === 'movie'? movie.original_title: movie.original_name}</Text>
            <View style={styles.mpaaWrapper}>
              <Text style={styles.mpaaText}>
                NR
              </Text>
            </View>
            <Text style={noteStyle}> Average vote: {movie.vote_average} </Text>
            {
              type === 'movie' ? <Text>Release Date: {movie.release_date}</Text> :
              <Text>First air Date: {movie.first_air_date}</Text>
            }
          </View>
        </View>
        <View style={styles.separator} />
        <Text style = {styles.movieTitle}>Summary:</Text> 
        <Text>{movie.overview} </Text>
        <View style={styles.separator} />
        <Cast actors={ navigation.getParam('actorList')}
              selectedActor = {this.getSelectedActor}
         />
    </ScrollView>
    );
  }
}


  const styles = {
    contentContainer: {
        padding: 10,
      },
      rightPane: {
        justifyContent: 'space-between',
        flex: 1,
      },
      movieTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
      },
      rating: {
        marginTop: 10,
      },
      ratingTitle: {
        fontSize: 14,
      },
      ratingValue: {
        fontSize: 28,
        fontWeight: '500',
      },
      mpaaWrapper: {
        alignSelf: 'flex-start',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 3,
        marginVertical: 5,
      },
      mpaaText: {
        fontFamily: 'Palatino',
        fontSize: 13,
        fontWeight: '500',
      },
      mainSection: {
        flexDirection: 'row',
      },
      separator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: StyleSheet.hairlineWidth,
        marginVertical: 10,
      }
};
