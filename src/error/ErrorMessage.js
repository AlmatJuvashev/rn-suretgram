import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from '../shared/Header';

class ErrorComponent extends Component {

    onPress = () => {
        //this.props.navigation.navigate('Home');
        this.props.onSwitchPage('HomePage');
    }

   render() {
        // const errorMsg = this.props.navigation.getParam('errorMsg', '');
        const errorMsg = this.props.errorMsg;
        console.log(errorMsg);
        const { container, mainTitle, button} = styles 
        return (
            <View style={container}>
                <HeaderComponent headerTitle="Images"/>
                <View style={container}>
                    <Text style={mainTitle}>Error Has Occured</Text>
                    {/* //<Text>{errorMsg}</Text> */}
                    <TouchableOpacity
                        style={button}
                        onPress={this.onPress}
                    >
                        <Text> Return </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
   }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    mainTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      }
})

export default ErrorComponent;
