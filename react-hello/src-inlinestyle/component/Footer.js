import React from 'react';

export default class Footer extends React.Component {
	render(){
		let styles = {
			btn: {
				width: '80px',
				height: '60px',
				background: 'blue'
			},
			text: {
				color: 'white',
				background: 'red'
			}
		}
		return(
			<div>
				<button style={styles.btn}>btn1</button>
				<button style={styles.btn}>btn2</button>
				<button style={{...styles.btn, ...styles.text}}>btn2</button>
				<button style={styles.btn}>btn2</button>
				<button style={Object.assign({}, styles.btn, styles.text)}>btn2</button>
			</div>
		)
	}
}