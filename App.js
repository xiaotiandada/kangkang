/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Container,
  Header,
  Item,
  Input,
  Body,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';


export default class App extends Component {
  listItems() {
    const imgList = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
      'https://image.lnstzy.cn/aoaodcom/2020-02/14/202002140746294253873a66da063b423328a01144d621.png.h700.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
      'https://dvblobcdnjp.azureedge.net//Content/Upload/DailyArticle/Images/2019-10/f4108a5b-9d90-4028-ac54-fff85499f13b_m.jpg',
      'https://image.lnstzy.cn/aoaodcom/2020-02/14/202002140746294253873a66da063b423328a01144d621.png.h700.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
      'https://image.lnstzy.cn/aoaodcom/2020-02/14/202002140746294253873a66da063b423328a01144d621.png.h700.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
      'https://image.lnstzy.cn/aoaodcom/2020-02/14/202002140746294253873a66da063b423328a01144d621.png.h700.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
      'https://image.lnstzy.cn/aoaodcom/2020-02/14/202002140746294253873a66da063b423328a01144d621.png.h700.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
      'https://image.lnstzy.cn/aoaodcom/2020-02/14/202002140746294253873a66da063b423328a01144d621.png.h700.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcR5KsdvgJHtSBbAvFovlZ0qyiln9p_A_sGw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRF-4R89535QO8EvXtkP0J4W4yjmarHyS3Q&usqp=CAU',
    ];

    let list = []
    imgList.map((i, idx) => {
      list.push(
        <Col key={idx.toString()} style={{ width: '50%' }}>
          <Image style={styles.listCover} source={{uri: i}} />
          <Text>{ idx }</Text>
        </Col>
      )
    })
    return list
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <Grid>
            <Row style={{ flexWrap: "wrap" }}>
              { this.listItems() }
            </Row>
          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Text>首页</Text>
            </Button>
            <Button vertical>
              <Text>发现</Text>
            </Button>
            <Button vertical>
              <Text>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

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
  listCover: {
    width: '100%',
    height: 200
  }
});