import React from 'react';

import { View  } from 'react-native';

export default class RenderSeparator extends React.Component {


    render(){
        return (
            <View
              style={{
                height: 1,
                width: "86%",
                backgroundColor: "#CED0CE",
              }}
            />
          );
    }

}