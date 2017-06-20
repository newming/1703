import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Nav from './Nav'

import './main.css'

ReactDOM.render(
	<div>
		<Header />
		<Nav />
	</div>
	, document.getElementById('root'))


/*
	JSX 语法
	JSX语法需要 babel 进行编译，React.createElement()
	标签区分大小写
	每一个标签必须闭合 Unterminated JSX contents
	Adjacent JSX elements must be wrapped in an enclosing tag 相邻的JSX元素必须包裹在一个闭合标签内
	class => className, for => htmlFor
	声明式渲染 可以嵌入变量 {}
*/

/*
	组件
	functional
	function Hello(){
		return (
			
		)
	}
	class
	class Nav extends React.Component{
		render(){
			return(
				<div>
					nav
				</div>
			)
		}
	}
*/