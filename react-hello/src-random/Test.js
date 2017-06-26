import React from 'react'

class Test extends React.Component{
	componentWillReceiveProps(nextProps){
		console.log('test receive props', nextProps)
	}
	componentDidMount(){
		console.log('test did')
	}
	componentWillUnmount(){
		console.log('test destory')
	}
	render(){
		console.log('test render')
		return(
			<div>
				test{this.props.num}
			</div>
		)
	}
}

export default Test