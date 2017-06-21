import React from 'react'

class Tabs extends React.Component{
	constructor(){
		super()
		this.state={
			tabs: 3, // 选项卡的个数
			show: 0 // 当前展示的第几个选项卡
		}
	}
	change(num){
		this.setState({show: num})
	}
	render(){
		let styles = {
			tabs: {
				width: '300px',
				border: '1px solid #000',
				margin: '0 auto',
				overflow: 'hidden'
			},
			box: {
				width: this.state.tabs*100+'%',
				overflow: 'hidden',
				marginLeft: this.state.show*100*(-1)+'%',
				transition: 'all 0.5s ease'
			},
			tab: {
				width: 100/this.state.tabs+'%',
				float: 'left'
			}
		}
		return(
			<div style={styles.tabs}>
				<button onClick={this.change.bind(this, 0)}>tab 1</button>
				<button onClick={this.change.bind(this, 1)}>tab 2</button>
				<button onClick={this.change.bind(this, 2)}>tab 3</button>		
				<div style={styles.box}>
					<div style={styles.tab}>content 1</div>
					<div style={styles.tab}>content 2</div>
					<div style={styles.tab}>content 3</div>
				</div>
			</div>
		)
	}
}

export default Tabs