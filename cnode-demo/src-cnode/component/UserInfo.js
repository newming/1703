import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserInfo extends React.Component{
	constructor(){
		super()
		this.state={
			user: null
		}
	}
	componentDidMount(){
		let loginname = this.props.match.params.loginname
		axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
			.then( res => this.setState({user: res.data.data}) )
			.catch( err => alert(err) )
	}
	render(){
		let {user} = this.state
		console.log(user)
		return(
			<div>
				{
					user?(
						<div>
							<img src={user.avatar_url} alt="avatar"/>
							<h3>用户名：{user.loginname}</h3>
							<h4>积分：{user.score}</h4>
							<h2>发布的话题：</h2>
							{
								user.recent_topics.map( item=>(
									<div key={item.id}>
										<Link to={`/topic/${item.id}`}>{item.title}</Link>
									</div>
								))
							}
							<h2>发布的回复：</h2>
							{
								user.recent_replies.map( item=>(
									<div key={item.id}>
										<Link to={`/topic/${item.id}`}>{item.title}</Link>
									</div>
								))
							}
						</div>
					) : '数据加载中...'
				}
			</div>
		)
	}
}
export default UserInfo