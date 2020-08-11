/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Header, Item, Input, Body, Title, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const App: () => React$Node = () => {

  return (
    <>
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#205DB7', height: 200 }}></Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#135DB7', height: 200 }}></Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#935DB7', height: 200 }}></Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>首页</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>发现</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default App;
