import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'
import Work from './Work.js'

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div>
					<h1>导航</h1>
					<Link to='/'>首页</Link>
					<Link to='/about'>关于</Link>
					<Link to='/work'>工作</Link>

					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/work' component={Work} />

					<h1>页脚</h1>
				</div>
			</BrowserRouter>
		)
	}
}

export default App