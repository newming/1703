import React from 'react';
import {BrowserRouter, Route, NavLink, Redirect, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Work from './Work'
import Footer from './Footer'

let NotFound = () => <div>您访问的页面不存在</div>

class App extends React.Component{
	render(){
		let user = true
		return(
			<BrowserRouter>
				<div>
					<h1>导航</h1>
					<NavLink to='/' exact activeStyle={{fontWeight: 'bold', color: 'red'}}>首页</NavLink>
					<NavLink to='/about' activeStyle={{fontWeight: 'bold', color: 'red'}}>关于</NavLink>
					<NavLink to='/work/afdsafdsa' activeStyle={{fontWeight: 'bold', color: 'red'}}>工作</NavLink>
					
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/about' render={ props =>  (
								user ? <About {...props} /> : <Redirect to='/404' />
							)} />
						<Route path='/work/:name' component={Work} />
						{/*<Route path='*' component={NotFound} />*/}
						<Route path='/404' component={NotFound} />
						<Redirect to='/404' from='*' />
					</Switch>

					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default App