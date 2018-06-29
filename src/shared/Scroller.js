import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Text } from 'native-base';

export default class SpinnerComponent extends Component {
    
  render() {
    return (
      <Container>
        <HeaderComponent headerTitle="Image Gallery"/>
        <Header />
        <Content>
          <Spinner color='green' />
          <Text>The Photos is being loaded</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,0,255,0.05)'
    }
})