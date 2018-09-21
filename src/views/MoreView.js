import React from 'react';
import { Button, Text, View } from 'react-native';

class MoreOptionsView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>More</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
    
      </View>
    );
  }
}

export default MoreOptionsView;