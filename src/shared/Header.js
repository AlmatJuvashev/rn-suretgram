import React from 'react';
import { Text, View } from 'react-native';

const HeaderComponent = ({ headerTitle }) => {

    const {viewStyle, textStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerTitle}</Text>
        </View>
    );
};



const styles = {
    textStyle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    viewStyle: {
        backgroundColor: 'rgba(255,0,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};
export default HeaderComponent;
