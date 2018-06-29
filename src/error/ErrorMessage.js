import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from '../shared/Header';
import { Button } from 'react-native-elements'

class ErrorComponent extends Component {

    onPress = () => {
        //this.props.navigation.navigate('Home');
        this.props.onSwitchPage('HomePage');
    }

   render() {
        // const errorMsg = this.props.navigation.getParam('errorMsg', '');
        const errorMsg = this.props.errorMsg;

        const { container, mainTitle, buttonStyle} = styles 
        return (
            <View style={{flex: 1}}>
                <HeaderComponent 
                    headerTitle="Error"
                    homePage={false}
                    onSwitchPage={this.props.onSwitchPage}/>
                <View style={{flex: 1, justifyContent: 'space-around'}}>
                    <Text style={mainTitle} >Error Has Occured</Text>
                    {/* //<Text>{errorMsg}</Text> */}
                    <Button 
                        title="Find Photos"
                        buttonStyle={buttonStyle}
                        onPress={this.fetchInstagramPhotos}/>
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
