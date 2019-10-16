import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {
  componentDidMount(){  //Método executado assim que o componente for mostrado em tela
    this.loadProducts();
  }

  loadProducts = async() => {
    const response = await api.get('/products')

    console.log(response.data.docs);

  };


	render() {
		return <h1>Hello World</h1>
	}
}
