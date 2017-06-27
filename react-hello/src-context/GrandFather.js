import React from 'react'
import PropTypes from 'prop-types'
import Father from './Father'

class GrandFather extends React.Component{
	getChildContext() {
    return {hello: "son"}
  }
	render(){
		return(
			<div>
				<h1>我是爷爷辈的组件</h1>
				<Father />
			</div>
		)
	}
}
GrandFather.childContextTypes = {
  hello: PropTypes.string
}
export default GrandFather