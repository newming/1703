import React from 'react'
import Home from './component/Home'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component{
	
	render(){
		
		return(
			<BrowserRouter>
				<div>
					<h1>cnode header</h1>

					<Route path='/' exact component={Home} />
					
					<h1>cnode footer</h1>
				</div>
			</BrowserRouter>
		)
	}
}

export default App