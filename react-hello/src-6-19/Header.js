import React from 'react';
import Nav from './Nav.js'

import img11 from './images/a.jpg';
import img22 from './images/a.jpg';

class Hello extends React.Component {
	render(){
		let num = 66;
		let styles = {
			color: 'blue',
			fontSize: num+'px'
		}
		return(
			<div className='box'>
				<h1 style={styles}>afdasfd</h1>
				{num}
			</div>
		)
	}
}

export default Hello