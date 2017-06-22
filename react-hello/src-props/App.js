import React from 'react'

// import Btn from './Btn'
import Card from './Card'

class App extends React.Component {
	constructor(){
		super()
		this.state={
			title: 'first title'
		}
	}
	handleClick(){
		this.setState({title: 'second title'})
	}
	handleH3(num){
		alert(num)
	}
	render(){
		return(
			<div>
				<Card title={this.state.title} extra={<a href='http://huya.com'>百度</a>} xxx={this.handleH3.bind(this)} >
					<p style={{fontSize: '32px'}}>456</p>
				</Card>

				<Card title={this.state.title} extra={<a href='http://huya.com'>百度</a>} xxx={(num)=> this.setState({title: num}) } >
					<p style={{fontSize: '32px'}}>456</p>
				</Card>

				<button onClick={this.handleClick.bind(this)}>变</button>
			</div>
		)
	}
}
// props 组件之间沟通的手段
export default App