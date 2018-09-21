import React from 'react';
import { Button, Text, View } from 'react-native';

import HomeScreen from './HomeView';

class TopTwentyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Top 20</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to More"
          onPress={() => this.props.navigation.navigate('More')}
        />
      </View>
    );
  }
}

export default TopTwentyScreen;