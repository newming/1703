import React from 'react';

import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

export default class App extends React.Component {
	render(){
		return(
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}