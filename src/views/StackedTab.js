import React from 'react';
import {View, FlatList,StyleSheet, Text, TouchableOpacity} from 'react-native';
import { List,Card } from "react-native-elements";

export default class MoreOptionsView extends React.Component {
  

  constructor(props){
    super(props);
    this.state = {
      top20List:[
        {category : 'Top 20', id:'top20'},
        {category :'Genres', id:'genres'}
       ]
      }
    
  };

  actionOnRow(item) {
    if(item === 'top20'){
      this.props.navigation.push('Top20');
    }
 }

  render() {
    console.log(this.state.top20List);
    return (
      <List containerStyle={styles.container}>
        <FlatList 
            data={this.state.top20List}
            styles ={styles.flatview}
            renderItem={({item}) => (
              <Card>
                <TouchableOpacity onPress={ () => this.actionOnRow(item.id)}>
                    <View>
                       <Text> {item.category}</Text>
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

const styles = StyleSheet.create({
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
  },
});




