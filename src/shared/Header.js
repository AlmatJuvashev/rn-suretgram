import React from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


const HeaderComponent = ({ headerTitle, homePage, onSwitchPage }) => {

    const {viewStyle, textStyle} = styles;

    onPress = () => {
        //this.props.navigation.navigate('Home');
        onSwitchPage('HomePage');
    }

    renderText = ()=> {
        if(!homePage) {
            return (
                <Button hasText transparent>
                    <Text style={{color: 'black'}} onPress={this.onPress}>Back</Text>
                </Button>
            )
        }
        return;
    }


    return (
        <Container>
            <Header style={viewStyle}>
            <Left>
                {this.renderText()}
            </Left>
            <Body>
                <Title>{headerTitle}</Title>
            </Body>
            <Right>
            </Right>
            </Header>
      </Container>
        // <View style={viewStyle}>
        //     <Text style={textStyle}>{headerTitle}</Text>
        // </View>
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    }
};
export default HeaderComponent;
