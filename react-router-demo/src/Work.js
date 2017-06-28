import React from 'react';

class Work extends React.Component{
	handleBack(){
		this.props.history.push('/about')
	}
	componentDidMount(){
		// setTimeout( ()=>this.props.history.push('/') ,5000)
	}
	render(){
		console.log(this.props)
		return(
			<div>
				Work
				{this.props.match.params.name}
				<button onClick={this.handleBack.bind(this)}>返回</button>
			</div>
		)
	}
}

export default Work