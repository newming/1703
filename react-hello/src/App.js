import React from 'react'

import Modal from './Modal'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			signin: false,
			signup: false
		}
	}
	handleLogin(){
		alert('你要登录了')
		this.setState({signin: false})
	}
	render(){
		return(
			<div>
				<button onClick={()=>this.setState({signin: true})}>登录</button>
				<button onClick={()=>this.setState({signup: true})}>注册</button>

				<Modal visible={this.state.signin} title='登录' onOk={this.handleLogin.bind(this)} onCancle={()=>this.setState({signin: false})}>
					<label htmlFor="username">用户名：</label>
					<input type="text" name='username'/>
					<label htmlFor="password">密码：</label>
					<input type="text" name='password'/>
				</Modal>

				<Modal visible={this.state.signup} title='注册'>
					<label htmlFor="username">用户名：</label>
					<input type="text" name='username'/>
					<label htmlFor="password">密码：</label>
					<input type="text" name='password'/>
					<label htmlFor="confirmPassword">确认密码：</label>
					<input type="text" name='confirmPassword'/>
				</Modal>
			</div>
		)
	}
}

export default App