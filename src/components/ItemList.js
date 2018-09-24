import React from 'react';
import {View, FlatList,StyleSheet, Text, TouchableOpacity} from 'react-native';
import { List,Card } from "react-native-elements";

export default class ItemList extends React.Component {

  
  
  actionOnRow(item) {
    console.log("Id in action row");
  }       
     
  render() {
  return (
    <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
    <FlatList 
        data={this.props.items}
        renderItem={({item}) => (
          <Card>
            <TouchableOpacity >
                <View>
                   <Text> {item.title} </Text>
                </View>
           </TouchableOpacity>
          </Card>
       )}
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
