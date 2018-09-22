import React from 'react';
import {View, FlatList,StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import { List,Card } from "react-native-elements";
import RenderSeparator from '../components/RenderSeparator';

export default class TopTwentyScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      top20List:[
        {category :'Highest Grossing Movie'},
        {category :'Highest Grossing TV Shows'},
        {category :'Top Actors'},
        {category :'Worst Movies of All Time'}
       ]
      }
    
  };

  actionOnRow(item) {
    console.log('Selected Item :',item);
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
                <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                    <View>
                       <Text> {item.category}</Text>
                    </View>
               </TouchableWithoutFeedback>
              </Card>
                
           )}
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


