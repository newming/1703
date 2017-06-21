import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			num: 0,
			male: false,
			height: true
		}
	}
	handleInc(num){
		this.setState({
			num: this.state.num+num
		})
		console.log(this.state.num)
	}
	handleChange(){
		this.setState({
			male: !this.state.male,
			height: !this.state.height
		})
	}
	render(){
		// state 控制组件内部的状态，state变，界面自动跟着变
		// console.log(this.state)
		let styles={
			width: '500px',
			height: this.state.height ? '500px' : '0px',
			transition: 'all 0.75s',
			background: 'blue'
		}
		return(
			<div>
				<p>数量是：{this.state.num}</p>
				<button onClick={this.handleInc.bind(this,100)}>+1</button>
				<button onClick={this.handleInc.bind(this,-1000)}>-1</button>
				<br />
				<p onClick={this.handleChange.bind(this)}>性别是：{this.state.male ? '男' : '女'}</p>
				
				<div style={styles}></div>

			</div>
		)
	}
}

export default App