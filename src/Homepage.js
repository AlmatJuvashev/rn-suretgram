import React, { Component } from 'react';
import { Container, Form, Item, Label, Input, Text, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import HeaderComponent from './shared/Header';
import { Button } from 'react-native-elements'



class HomepageComponent extends Component {
    state = {
        isLoading: true,
        name: '',
    }

    instagramLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"

    fetchInstagramPhotos = async () => {
       try {
            let response = await fetch(`https://apinsta.herokuapp.com/u/${this.state.name}`);
            const json = await response.json();
            const arr = json.graphql.user.edge_owner_to_timeline_media.edges;
            const photoArray = arr.map(this.createObjFromArray);
            //this.props.navigation.navigate('Profile', { imgUrls: photoArray});
            //this.setState({ isLoading: false, dataSource: cleanArray });
            this.props.onSwitchPage('InstagramPage');
            this.props.onLoadPhotoArrays(photoArray);
       } catch (error) {
            this.props.onSwitchPage('ErrorPage');
            this.props.errorMsg(error);
            //this.props.navigation.navigate('Error', { errorMsg: error});
       }
        
       
        
    }

    createObjFromArray = (item) => {
        return { url: item.node.display_url, id: item.node.id };
    }

  
    render() {

        const { container, inputPosition, buttonStyle, imageStyle } = styles

        if(this.state.isLoading) {
            return(
                <View style={container}>
                    <HeaderComponent headerTitle="Suretgram"/>
                    <Image 
                            source = {{uri: this.instagramLogoUrl}}
                            style = {imageStyle} />
                    <Container style={inputPosition}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Input name</Label>
                                <Input 
                                    onChangeText={(name) => this.setState({name: name.toLowerCase()})}/>
                            </Item>
                        </Form>
                    </Container>
                    <Button 
                        title="Find Photos"
                        buttonStyle={buttonStyle}
                        onPress={this.fetchInstagramPhotos}/>
                   
                </View>  
            );
        } 
        // else {
        //     console.log('Loading page');
        //     return (
        //         <InstagramPage imgUrls={this.state.dataSource}/>
        //     ) 
        // }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,0,255,0.05)'
    },
    buttonStyle: {
        marginHorizontal: 20,
        marginBottom: 100,
        backgroundColor: 'rgba(186,85,211, 1.0)',
        borderRadius: 3,
        borderColor: 'transparent'
    },
    inputPosition: {
        marginTop: 50
    },
    imageStyle: {
        width: 150, 
        height: 150,
        alignSelf: 'center',
        marginTop: 50
    }
})

export default HomepageComponent;