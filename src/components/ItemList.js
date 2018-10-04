import React, { PureComponent } from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Card } from "react-native-elements";
import Movie from '../components/Movie';

export default class ItemList extends  PureComponent {

  pressedSearchResult(item,media_type,index) {
    this.props.itemClickedCallBack(item,media_type,index);
  }       
  
  render() {
  return (

    <FlatList 
        data={this.props.items}
        initialNumToRender={7}
        renderItem={({item,index}) => (
        <Card >
        <TouchableOpacity onPress={ () => this.pressedSearchResult(item.id,item.media_type,index)}>
                 <Movie movie={item}
                        type={item.media_type==='movie'?'film':'tvshows'} 
          />
        </TouchableOpacity>
        </Card>
       )}
       keyExtractor={(item,index) => index.toString()}
       /> 
  );
  }
}