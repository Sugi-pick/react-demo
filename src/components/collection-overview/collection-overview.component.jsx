import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import PreviewCollection from '../preview-collection/preview-collection.component';

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherProps }) => (
				<PreviewCollection key={id} {...otherProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
