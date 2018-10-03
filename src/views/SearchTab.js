import React from 'react';
import { 
    StyleSheet,
    View,
    Text
} from 'react-native' ;
import { SearchBar, List, Card }  from 'react-native-elements';
import ItemList from '../components/ItemList';

export default class SearchTab extends React.Component {
  static navigationOptions = {
    title: 'SEARCH',
    headerStyle: {
      backgroundColor: '#173e69',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#ffffff',
      fontSize: 25,
      flex:1,
        },
  };
    constructor(props){
    super(props);
    this.state = {
    hasResults: false ,
    finishedSearching:false,
    message: " Search results will be shown here",
    responses:[]
    };
    this.itemClicked = this.itemClicked.bind(this);

}
searchMovie(event) {
    var queryString = event.split(' ').join('+');
    Promise.all([
        fetch("https://api.themoviedb.org/3/search/multi?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US&query="+queryString+"&page=1&include_adult=false")
      ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data]) => {
          var count = Object.keys(data.results).length;
          this.setState({
              responses: data.results,
              finishedSearching: true,
              hasResults: count > 1 ? true: false,
              message: count > 1? "Displaying results for " + queryString : "No results found for: " + queryString
          });
      }).catch(error => {
        console.log("ERROR: In Search Movie",error)});
    }

itemClicked(id,type,index){
        Promise.all([
            fetch('https://api.themoviedb.org/3/'+type+'/' + id + '/credits?api_key=0139806a87c06ca7e1455f8012a66a29'),
          ])
          .then(([res1]) => Promise.all([res1.json()]))
          .then(([data1]) => this.props.navigation.push('MovieDetails', {
            movieInfo: this.state.responses[index],
            actorList: data1,
            mediaType: type ==='movie' ? 'film': 'tvshows'
          })).catch(error => {
            console.log("ERROR: Item click in search",error)});
    }

  render() {
    return (
    <View style={{ flex: 1, backgroundColor:'#CCE5FF'  }}>
        <SearchBar
        style = {styles.searchBar}
        platform="android"
        cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        placeholder='Type a Movie, TV Show or Actor Name ' 
        onSubmitEditing={(event) => this.searchMovie(event.nativeEvent.text)}
        />
        <Text  style={styles.h2text} > {this.state.message} </Text>
         {this.state.hasResults  ?
            <ItemList items = {this.state.responses}
            itemClickedCallBack = {this.itemClicked}/>
            : <Text> </Text>
         }
      </View>
    );
  }
}

var styles = StyleSheet.create({
    separator: {
    height: StyleSheet.hairlineWidth,
    marginVertical: 15,
   },
   h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 25,
    fontWeight: 'bold',
  },
   container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 25,
    justifyContent: 'center',
    paddingBottom: 30,
    borderRadius: 2,
   },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    height: 56,
  },
  spinner: {
    width: 30,
}
});

