import React from 'react'

import Son from './Son'

class Father extends React.Component{
	render(){
		return(
			<div>
				<h1>我是爸爸辈的组件</h1>
				<Son />
			</div>
		)
	}
}

export default Father