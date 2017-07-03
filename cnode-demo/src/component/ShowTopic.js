import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
		console.log(data)
		return(
			<div>
				{
					data ? (
						<div className='show-topic'>
							<h3>{data.title}</h3>
							<p>{data.author.loginname}——{data.visit_count}——{data.tab}</p>
							<div dangerouslySetInnerHTML={{__html: data.content}} className='content' />
							<h3>全部评论：</h3>
							{
								data.replies.map( item =>(
									<div key={item.id} className='comment'>
										<img src={item.author.avatar_url} alt="avatar"/>
										<Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
										<div dangerouslySetInnerHTML={{__html: item.content}} className='content' />
									</div>
								))
							}
						</div>
					) : '数据加载中'
				}
			</div>
		)
	}
}

export default ShowTopic