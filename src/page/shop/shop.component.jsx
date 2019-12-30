import React, { Component } from 'react';

import shopData from '../../data/shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: shopData
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherProps }) => (
					<PreviewCollection key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
