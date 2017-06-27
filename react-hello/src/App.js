import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			input: '',
			textarea: '',
			name: 'lime',
			sex: 'male',
			edu: 'serior',
			agree: false,
			hobby: []
		}
	}
	handleSubmit(e){
		e.preventDefault()
		let {input, textarea, name, sex, edu, agree, hobby} = this.state
		if (agree) {
			console.log(input, textarea, name, sex, edu, hobby)
		}else{
			alert('请同意霸王协议')
		}
	}
	handleChange(e){
		this.setState({input: e.target.value})
	}
	handleCheckbox(e){
		// console.log(e.target.value)
		let hobby = this.state.hobby;
		let val = e.target.value;
		let index = hobby.indexOf(val);
		if (index===-1) {
			hobby.push(val)
		}else{
			hobby.splice(index, 1)
		}
		this.setState({hobby})
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} placeholder='username' />
					<br />
					<textarea value={this.state.textarea} onChange={(e)=>this.setState({textarea: e.target.value})}/>
					<br />
					<select value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
					<br />

					男<input type="radio" name='sex' value='male' checked={this.state.sex==='male'? true : false} onChange={ e => this.setState({sex: e.target.value}) }/>
					女<input type="radio" name='sex' value='female' checked={this.state.sex==='female'? true : false} onChange={ e => this.setState({sex: e.target.value}) }/>

					<br />
					本科<input type="radio" name='edu' value='college' onChange={e=>this.setState({edu: e.target.value})}/>
					高中<input type="radio" name='edu' value='serior' defaultChecked onChange={e=>this.setState({edu: e.target.value})}/>
					初中<input type="radio" name='edu' value='junior' onChange={e=>this.setState({edu: e.target.value})}/>
					<br />

					我已阅读并同意<input type="checkbox" checked={this.state.agree} onChange={e=>this.setState({agree: e.target.checked})}/>
					
					<br />
					兴趣爱好：
					篮球<input type="checkbox" value='basketball' onChange={this.handleCheckbox.bind(this)}/>
					足球<input type="checkbox" value='football' onChange={this.handleCheckbox.bind(this)}/>
					排球<input type="checkbox" value='paiqiu' onChange={this.handleCheckbox.bind(this)}/>
					台球<input type="checkbox" value='taiqiu' onChange={this.handleCheckbox.bind(this)}/>

					<br />
					<button>提交</button>
				</form>
			</div>
		)
	}
}
// 受控组件
// 非受控组件
export default App