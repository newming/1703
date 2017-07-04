import React from 'react'
import {Link} from 'react-router-dom'

class ShowTopic extends React.Component{
	render(){
		let tab = {ask: '问答', share: '分享', job: '工作'}
		return(
			<div>
				{
					this.props.data.map( item => (
						<div key={item.id} className='topic'>
							<Link to={`/user/${item.author.loginname}`}>
								<img src={item.author.avatar_url} alt={item.author.loginname}/>
							</Link>
							<spsn className='topic-num'>{item.reply_count}/{item.visit_count}</spsn>
							<span className='topic-tab'>{
								item.top ? '置顶' : 
								item.good ? '精华' : tab[item.tab]}</span>
							<Link to={`/topic/${item.id}`} className='topic-title'>{item.title}</Link>
						</div>
					))
				}
			</div>
		)
	}
}

export default ShowTopic