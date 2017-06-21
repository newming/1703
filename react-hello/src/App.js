import React from 'react'

// import Btn from './Btn'
import Card from './Card'

class App extends React.Component {
	render(){
		return(
			<div>
				<Card title='my title' extra={<a href='#'>百度</a>} style={{width: '100%', background: 'rgba(0,0,0,0.3)'}}>
					<h2>hello everyone</h2>
					<h2>hello everyone</h2>
					<h2>hello everyone</h2>
				</Card>
			</div>
		)
	}
}
// props 组件之间沟通的手段
export default App