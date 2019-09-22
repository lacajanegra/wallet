/**
 * Created by ggoma on 2016. 11. 22..
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  LayoutAnimation
} from 'react-native';

import CardModal from '../../components/card-modal';
// import NavigationBar from 'react-native-navbar';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: true
    };
  }

  disableScroll() {
    this.setState({ scroll: !this.state.scroll });
  }

  render() {
    return (
      <ScrollView scrollEnabled={this.state.scroll} style={styles.container}>
        <CardModal
          title={'Card 1'}
          description={'Lorem ipsum'}
          color={'#0E48BE'}
          content={
            'What started small, with a single discount store and the simple idea of selling more for less, has grown over the last 50 years into the largest retailer in the world. Today, nearly 260 million customers visit our more than 11,500 stores under 63 banners in 28 countries and e-commerce sites in 11 countries each week. With fiscal year 2016 revenue of $482.1 billion, Walmart employs 2.3 million associates worldwide – 1.5 million in the U.S. alone. It’s all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.'
          }
          onClick={() => this.disableScroll()}
          due={3}
        />
        <CardModal
          title={'Card two'}
          description={'Lorem ipsum'}
          color="#662BAB"
          content={
            'What started small, with a single discount store and the simple idea of selling more for less, has grown over the last 50 years into the largest retailer in the world. Today, nearly 260 million customers visit our more than 11,500 stores under 63 banners in 28 countries and e-commerce sites in 11 countries each week. With fiscal year 2016 revenue of $482.1 billion, Walmart employs 2.3 million associates worldwide – 1.5 million in the U.S. alone. It’s all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.'
          }
          onClick={() => this.disableScroll()}
          due={5}
        />
        <CardModal
          title={'Card number 3'}
          description={'Lorem ipsum'}
          color={'#fc3758'}
          content={
            'What started small, with a single discount store and the simple idea of selling more for less, has grown over the last 50 years into the largest retailer in the world. Today, nearly 260 million customers visit our more than 11,500 stores under 63 banners in 28 countries and e-commerce sites in 11 countries each week. With fiscal year 2016 revenue of $482.1 billion, Walmart employs 2.3 million associates worldwide – 1.5 million in the U.S. alone. It’s all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.'
          }
          onClick={() => this.disableScroll()}
          due={4}
        />
        <CardModal
          title={'Card four'}
          description={'Lorem ipsum'}
          color="black"
          content={
            'What started small, with a single discount store and the simple idea of selling more for less, has grown over the last 50 years into the largest retailer in the world. Today, nearly 260 million customers visit our more than 11,500 stores under 63 banners in 28 countries and e-commerce sites in 11 countries each week. With fiscal year 2016 revenue of $482.1 billion, Walmart employs 2.3 million associates worldwide – 1.5 million in the U.S. alone. It’s all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.'
          }
          onClick={() => this.disableScroll()}
          due={1}
        />
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f76067',
    paddingTop: 20
  },
  box: {
    backgroundColor: 'red'
  },
  button: {
    borderColor: 1,
    borderWidth: 1
  }
});
