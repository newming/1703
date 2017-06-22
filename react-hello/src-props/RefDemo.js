import React from 'react'

// import $ from 'jquery'
import Test from './Test'

class RefDemo extends React.Component{
	handleClick(){
		// 原生方法
		// console.log(document.querySelector('p'))
		// document.querySelector('p').style.color = 'red'
		// 第三方插件
		// $(this.input).val('')
		// this.input.value = ''
		console.log(this.test)
		this.test.handleShow()
	}
	render(){
		return (
			<div>
				<Test ref={test => this.test = test} show={true} />
				<input ref={ input => this.input = input } />
				<button onClick={this.handleClick.bind(this)}>获取光标</button>
			</div>
		)
	}
}

export default RefDemo