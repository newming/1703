import React from 'react'

class MulpForm extends React.Component{
	constructor(){
		super()
		this.state={
			text: '',
			password: '',
			textarea: ''
		}
	}
	handleForm(type, e){
		this.setState({
			[type]: e.target.value
		})
	}
	render(){
		return(
			<div>
				<input type="text" value={this.state.text} onChange={this.handleForm.bind(this, 'text')}/>
				<textarea type="password" value={this.state.textarea} onChange={this.handleForm.bind(this, 'textarea')}/>
				<button onClick={()=>console.log(this.state)}>aaa</button>
			</div>
		)
	}
}

export default MulpForm