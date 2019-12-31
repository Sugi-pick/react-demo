import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
	render() {
		const { sections } = this.props;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...sectionProps }) => (
					<MenuItem key={id} {...sectionProps} />
				))}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
