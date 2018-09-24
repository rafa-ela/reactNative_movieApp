import React from 'react';
import {View, FlatList,StyleSheet, Text, TouchableOpacity} from 'react-native';
import { List,Card } from "react-native-elements";
import Movie from '../components/Movie';

export default class ItemList extends React.Component {

  actionOnRow(item,media_type,index) {
  
    this.props.itemClickedCallBack(item,media_type,index);
  }       
     
  render() {
  return (

    <FlatList 
        data={this.props.items}
        renderItem={({item,index}) => (
          <Card>
        <TouchableOpacity onPress={ () => this.actionOnRow(item.id,item.media_type,index)}>
                 <Movie movie={item}
                          type={item.media_type} 
                  />
           </TouchableOpacity>
          </Card>
       )}
       keyExtractor={(item,index) => index.toString()}
       /> 
  );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 25,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  }
};
