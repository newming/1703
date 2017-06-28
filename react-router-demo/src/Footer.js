import React from 'react'

import {Link, withRouter } from 'react-router-dom'

class Footer extends React.Component{
	render(){
		// console.log(this.props)
		return(
			<footer>
				<h1>footer</h1>
				<Link to='/'>首页</Link>
				<button onClick={()=> this.props.history.push('/about')}>about</button>
			</footer>
		)
	}
}

export default withRouter(Footer)