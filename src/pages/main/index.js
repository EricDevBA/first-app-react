import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
	state = {
		products: [],
		productInfo: [],
		page: 1,
	}

	//Método executado assim que o componente for mostrado em tela
	componentDidMount() {
		this.loadProducts()
	}

	// Renderização dos produtos da API na view //
	loadProducts = async (page = 1) => {
		const response = await api.get(`/products?page=${page}`)

		const { docs, ...productInfo } = response.data

		this.setState({ products: docs, productInfo })
	}

	nextPage = () => {
		// Listagem da Próxima página
		const { page, productInfo } = this.state

		if (page === productInfo.page) return

		const pageNumber = page + 1

		this.loadProducts(pageNumber)
	}

	prevPage = () => {
		//Listagem da Página Anterior
	}

	render() {
		const { products } = this.state

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
					<button onClick={this.prevPage}>Anterior</button>
					<button onClick={this.nextPage}>Próxima</button>
				</div>
			</div>
		)
	}
}
