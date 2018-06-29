import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderComponent from '../shared/Header';
import { Button } from 'react-native-elements'

class ErrorComponent extends Component {

    onPress = () => {
        this.props.onSwitchPage('HomePage');
    }

   render() {
        const { mainTitle, buttonStyle} = styles 
        return (
            <View style={{flex: 1}}>
                <HeaderComponent 
                    headerTitle="Error"
                    homePage={false}
                    onSwitchPage={this.props.onSwitchPage}/>
                <View style={{flex: 1, justifyContent: 'space-around'}}>
                    <Text style={mainTitle} >Error Has Occured</Text>
                    <Button 
                        title="Go Back"
                        buttonStyle={buttonStyle}
                        onPress={onPress}/>
                </View>
            </View>
        );
   }
}

;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,0,255,0.05)'
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 100,
    },
    buttonStyle: {
        backgroundColor: 'rgba(186,85,211, 1.0)',
        borderRadius: 3,
        borderColor: 'transparent',
        marginBottom: 100,
    },
})

export default ErrorComponent;
