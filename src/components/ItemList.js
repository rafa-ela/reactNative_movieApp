import React from 'react';
import {View, FlatList,StyleSheet, Text, TouchableOpacity} from 'react-native';
import { List,Card } from "react-native-elements";

export default class ItemList extends React.Component {

  actionOnRow(item,media_type,index) {
  
    this.props.itemClickedCallBack(item,media_type,index);
  }       
     
  render() {
  return (
    <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
    <FlatList 
        data={this.props.items}
        renderItem={({item,index}) => (
          <Card>
        <TouchableOpacity onPress={ () => this.actionOnRow(item.id,item.media_type,index)}>
                <View>
                   <Text> {item.title} : {item.id} </Text>
                </View>
           </TouchableOpacity>
          </Card>
       )}
       keyExtractor={(item,index) => index.toString()}
       /> 
     </List>
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
