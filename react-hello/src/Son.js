import React from 'react'
import PropTypes from 'prop-types'

class Son extends React.Component{
	componentDidMount(){
		console.log(this.refs.myh)
	}
	render(){
		// console.log(this.context)
		return(
			<div>
				<h1 ref='myh'>我是儿子辈的组件</h1>
				{this.context.hello}
			</div>
		)
	}
}
Son.contextTypes = {
  hello: PropTypes.string
}
export default Son