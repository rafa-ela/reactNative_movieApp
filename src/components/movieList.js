import React from 'react';
import { Button, Text, View ,FlatList, StyleSheet,} from 'react-native';

class movieList extends React.Component {

      render() {

      const {
        
      } = this.props.movies;

        return (
          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              keyExtractor={(x, i) => i}
              renderItem={({ item }) =>
                <Text>
                  {`${item.name.first} ${item.name.last}`}
                </Text>}
            />
          </View>
        );
      }
    }
    
const styles = StyleSheet.create({
      container: {
        marginTop: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});


export default movieList;