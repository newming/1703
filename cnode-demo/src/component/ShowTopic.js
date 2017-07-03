import React from 'react'

class ShowTopic extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
				{this.props.match.params.id}
			</div>
		)
	}
}

export default ShowTopic