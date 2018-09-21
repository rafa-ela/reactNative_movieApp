import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
//import moment from 'moment';

export default class Movie extends React.Component {
  render() {
    const {
      title,
      overview,
      vote_average,
      poster_path
    } = this.props.movie;
    const { noteStyle, featuredTitleStyle } = styles;
   // const time = moment(publishedAt || moment.now()).fromNow();
   var urlToImage = "http://image.tmdb.org/t/p/w500"+ poster_path;
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <TouchableNativeFeedback
        useForeground
        //TODO: NEED TO DO THIS
       //  onPress={() => Linking.openURL("www.google.com")}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {overview || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}> Average vote:  {vote_average} </Text>
            <Text style={noteStyle}> Average vote:  {vote_average} </Text>
            <Text style={noteStyle}> Average vote:  {vote_average} </Text>

          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};