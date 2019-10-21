import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
	// Estado inicial do Componente
	state = {
		products: [],
		productInfo: {},
		page: 1
	};

	//Método executado assim que o componente for mostrado em tela
	componentDidMount() {
		this.loadProducts();
	}

	// Renderização dos produtos da API na view //
	loadProducts = async (page = 1) => {
		const response = await api.get(`/products?page=${page}`);

		const { docs,...productInfo } = response.data;

		this.setState({ products: docs, productInfo, page }); //Mudança de estado
	};

	nextPage = () => {
		// Listagem da Próxima página
		const { page, productInfo } = this.state;

		if (page === productInfo.pages) return;

		const pageNumber = page + 1;

		this.loadProducts(pageNumber);
	};

	prevPage = () => {
		// Listagem Página Anterior
		const { page, productInfo } = this.state;

		if (page === 1) return;

		const pageNumber = page - 1;

		this.loadProducts(pageNumber);
	};

	render() {
		const { products, page, productInfo } = this.state

		return (
			<div className="product-list">
				{products.map(product => (
					<article key={product.id}>
						<strong>{product.title}</strong>
						<p>{product.description}</p>

						<a href="...">Acessar</a>
					</article>
				))}
				<div className="actions">
					<button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
					<button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
				</div>
			</div>
		);
	}
}
