import React from 'react';
import { Button } from 'react-native-elements'


const CustomButton = (props) => {
    const { onPress, children } = props;

    return (
        <Button 
            raised
            backgroundColor="darkblue"
            onPress={onPress}
            title={children}
            />
    );
};


export default CustomButton;