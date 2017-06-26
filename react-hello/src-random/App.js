import React from 'react'

import Test from './Test'

class App extends React.Component{
	constructor(){
		super()
		this.state={
			num: 0,
			destory: false
		}
		console.log('constructor')
	}
	componentDidMount(){
		console.log('did')
	}
	componentWillMount(){
		console.log('will')
		// 挂载
	}
	componentWillReceiveProps(nextProps){
		console.log('app receive props', nextProps)
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('should',nextProps, nextState)
		if (nextState.num>10) {
			return false
		}
		return true
	}
	componentWillUpdate(nextProps, nextState){
		console.log('will update',nextProps, nextState)
	}
	componentDidUpdate(prevProps, prevState){
		console.log('did update',prevProps, prevState)
	}
	render(){
		console.log('render')
		return(
			<div>
				{this.state.num}
				<button onClick={()=> this.setState({ num: this.state.num+1})}>+1</button>
				{ this.state.destory? null : <Test num={this.state.num}/> }
				<button onClick={()=>this.setState({destory: true})} >销毁</button>
			</div>
		)
	}
}

export default App