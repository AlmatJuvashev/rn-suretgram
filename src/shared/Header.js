import React, {Component} from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


class HeaderComponent extends Component {


    onPress = () => {
        //this.props.navigation.navigate('Home');
        this.props.onSwitchPage('HomePage');
    }

    
    renderText = (homepage)=> {
        if(!homepage) {
            return (
                <Button hasText transparent>
                    <Text style={{color: 'black'}} onPress={this.onPress}>Back</Text>
                </Button>
            )
        }
        return;
    }

    render () {
        const headerTitle = this.props.headerTitle;
        const homePage = this.props.homePage;

        return (
            <Container>
                <Header style={styles.viewStyle}>
                <Left>
                    {this.renderText(homePage)}
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
    }
}



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
