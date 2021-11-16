import React, {Component} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <LottieView
          source={require('./src/animation/loader.json')}
          autoPlay
          loop
        />
      </View>
    );
  }
}

export default App;
