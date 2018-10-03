import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, StyleSheet, Card, Divider } from 'react-native-elements';
//import moment from 'moment';

export default class Movie extends React.Component {

  render() {
    const {
      title,
      overview,
      vote_average,
      poster_path,
      popularity,
      id
    } = this.props.movie;
    const { noteStyle, featuredTitleStyle } = styles;
   // const time = moment(publishedAt || moment.now()).fromNow();
   var urlToImage = "http://image.tmdb.org/t/p/w500"+ poster_path;
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
        <Card
          featuredTitle={this.props.type === 'film' ? title: this.props.movie.original_name}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
          >
          <Text style = {{fontSize: 13, fontWeight: 'bold'}}>
            Summary:
          </Text>
          <Text style={{ marginBottom: 10 }} numberOfLines = { 2 } >
            {overview || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}> Average vote: {vote_average} </Text>
            <Text style={noteStyle}> Popularity :  {popularity} </Text>
            <Text style={noteStyle}> Media type :  {this.props.type} </Text>
          </View>
        </Card>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#B0BBBF',
    fontSize: 10,
    fontWeight:'bold'
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};
