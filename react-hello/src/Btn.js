import React from 'react'
import PropTypes from 'prop-types';

class Btn extends React.Component {
	render(){
		console.log(this.props)
		let styles = {
			background: this.props.bg,
			padding: this.props.pad,
			borderRadius: this.props.br+'%',
			color: this.props.color,
			border: this.props.border ? '5px solid #000' : 'none'
		}
		return(
			<button style={styles}>{this.props.xxx}</button>
		)
	}
}

Btn.defaultProps = {
	bg: 'blue',
	pad: '10px',
	br: 20,
	color: 'white',
	title: 'default',
	border: false
}

Btn.propTypes = {
	bg: PropTypes.string,
  br: PropTypes.number
};

export default Btn