import React from 'react'
import axios from 'axios'
class ShowTopic extends React.Component{
	constructor(){
		super()
		this.state={
			data: null
		}
	}
	componentDidMount(){
		let id = this.props.match.params.id
		axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
			.then( res => this.setState({data: res.data.data}) )
			.catch( err => alert(err) )
	}
	render(){
		let {data} = this.state;
		return(
			<div>
				{
					data ? (
						<div>
							<h3>{data.title}</h3>
							<p>{data.author.loginname}——{data.visit_count}——{data.tab}</p>
							<div>
								{data.content}
							</div>
						</div>
					) : '数据加载中'
				}
			</div>
		)
	}
}

export default ShowTopic