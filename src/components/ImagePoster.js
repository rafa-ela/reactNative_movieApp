
import React from 'react';
import {Image } from 'react-native';

export default class ImagePoster extends React.Component {
render(){
    var urlToImage = "http://image.tmdb.org/t/p/w500" + this.props.path;
    const defaultImg =
        'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
    return (
        <Image
            source={ {uri:urlToImage || defaultImg}  }
            style={styles.detailsImage}
        />
    );
}
}
const styles = {
      detailsImage: {
        width: 134,
        height: 200,
        backgroundColor: '#eaeaea',
        marginRight: 10,
      }
};
