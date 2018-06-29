import React, { Component } from 'react';
import { Image, FlatList, StyleSheet, TouchableHighlight, View, Dimensions } from 'react-native';
import { Overlay } from 'react-native-elements';
import HeaderComponent from './shared/Header';
import Icon from 'react-native-vector-icons/Ionicons';

class InstagramPage extends Component {
   

    state = {
        showPhotoImage: false,
        url: ''
    };
    

    keyExtractor = (item) => {
        console.log('Keys::: ', item.url);
        return item.url
    }

    renderImages = (obj) => {

        console.log(obj.item.url);
        return (
            //this.renderUrls(obj.item.url)
            
            <TouchableHighlight onPress={this.createModalImage.bind(this, obj.item.url)}>
                <Image 
                    source={{uri: obj.item.url}} 
                    style={{width: 150, height: 150}} />
            </TouchableHighlight>
        )
    }

    createModalImage = (url) => {
        this.setState({
            showPhotoImage: !this.state.showPhotoImage,
            url: url
        })
    }

    getBackToImageGalery = () => {
        this.setState({showPhotoImage: !this.state.showPhotoImage});
    }

    render() {
        // const imgUrl = this.props.navigation.getParam('imgUrls', '')
        const imgUrl = this.props.loadPhotoArrays;
        console.log('Image url:::', imgUrl);
       
        return(
            <View style={styles.container}>
                <HeaderComponent 
                    headerTitle="Images"
                    homePage={false}
                    onSwitchPage={this.props.onSwitchPage}/>
                <View style={{ alignSelf: 'center', marginTop: 70}}>
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={imgUrl}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderImages}
                    />
                </View>
                <Overlay
                    isVisible={this.state.showPhotoImage}
                    onBackdropPress={() => this.setState({showPhotoImage: false})} 
                    height={350}
                    width={350}                 
                    >
                    <TouchableHighlight onPress={this.getBackToImageGalery}>
                        <Image source={{uri: this.state.url}} style={ styles.flexImage } />
                    </TouchableHighlight>
                </Overlay>;
            </View>
        )
        
    }
}


const win = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,0,255,0.05)'
    },
    centralizeItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    flexImage: {
        alignSelf: 'center',
        width: 300,
        height: 300
    }
})

export default InstagramPage;