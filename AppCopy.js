import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HomepageComponent from './src/Homepage';
import InstagramPage from './src/InstagramPage';
import ErrorComponent from './src/error/ErrorMessage';


export default class AppCopy extends Component {
  state = {
    currentWindow: 'HomePage',
    photoArr: [],
    errorMsg: ''
  };

  changeWindow = newWindow => {
    this.setState({ currentWindow: newWindow });
  };

  handlePhotoArrays = photoArr => {
    this.setState({photoArr: photoArr})
  }

  handleErrorMsg = errorMsg => {
    this.setState({errorMsg})
  }
  render() {
    const currentWindow = this.state.currentWindow;

    // if (currentWindow === 'FirstPage') {
    //   return (
    //     <View style={styles.container}>
    //       <FirstPage onSwitchPage={this.changeWindow} />/>
    //     </View>
    //   );
    // } else if (currentWindow === 'SecondPage') {
    //   return (
    //     <View style={styles.container}>
    //       <SecondPage onSwitchPage={this.changeWindow} />/>
    //     </View>
    //   );
    // }

    return (
      <View style={styles.container}>
        {currentWindow === 'HomePage' && (
          <HomepageComponent 
            onSwitchPage={this.changeWindow} 
            onLoadPhotoArrays={this.handlePhotoArrays}
            errorMsg={() => this.handleErrorMsg()}/>
        )}
        {currentWindow === 'InstagramPage' && (
          <InstagramPage 
            onSwitchPage={this.changeWindow}
            loadPhotoArrays={this.state.photoArr}
           />
        )}
         {currentWindow === 'ErrorPage' && (
          <ErrorComponent 
            onSwitchPage={this.changeWindow} 
            errorMsg = {this.state.errorMsg}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
