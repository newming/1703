import React from 'react'

class Test extends React.Component{
	constructor(){
		super()
		this.state={
			show: false
		}
	}
	handleShow(){
		// this.setState({show: !this.state.show})
		this.setState( prevState=>{
			console.log(prevState)
			return {
				show: !prevState.show
			}
		})
	}
	render(){
		return (
			<div>
				<p style={{display: this.state.show ? 'block' : 'none'}}>hello</p>
				<button onClick={this.handleShow.bind(this)}>显示/隐藏</button>
			</div>
		)
	}
}

export default Test