import React from 'react';
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';


export default class DetailsPage extends React.Component {
    static navigationOptions = {
        title: ' Go Back '
      }
  
  getSelectedActor = (val) => {
        console.log("here at parent");
        console.log(val);
    }         
  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam('movieInfo');
    const actorList = navigation.getParam('actorList');
          const {
              noteStyle,
              featuredTitleStyle
          } = styles;
          // const time = moment(publishedAt || moment.now()).fromNow();
    
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style={styles.mainSection}>
          <Image
            source={ {uri:urlToImage || defaultImg}  }
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>{movie.original_title}</Text>
            <Text>{movie.release_date}</Text>
            <View style={styles.mpaaWrapper}>
              <Text style={styles.mpaaText}>
                NR
              </Text>
            </View>
            <Text style={noteStyle}> Average vote:  {movie.vote_average} </Text>
          </View>
        </View>
        <View style={styles.separator} />
        <Text>
          {movie.overview}
        </Text>
        <View style={styles.separator} />
        <Cast actors={ navigation.getParam('actorList')}
             selectedActor = {this.getSelectedActor}
         />
    </ScrollView>
    );
  }
}


const styles = {
    actorName:{
        color: 'blue' ,
        textDecorationLine: 'underline'
    },
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
      detailsImage: {
        width: 134,
        height: 200,
        backgroundColor: '#eaeaea',
        marginRight: 10,
      },
      separator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: StyleSheet.hairlineWidth,
        marginVertical: 10,
      },
      castTitle: {
        fontWeight: '500',
        marginBottom: 3,
      },
      castActor: {
        marginLeft: 2,
    },
};
