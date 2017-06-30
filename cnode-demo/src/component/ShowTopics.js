import React from 'react'

class ShowTopic extends React.Component{
	render(){
		let tab = {ask: '问答', share: '分享', job: '工作'}
		return(
			<div>
				{
					this.props.data.map( item => (
						<div key={item.id} className='topic'>
							<img src={item.author.avatar_url} alt={item.author.loginname}/>
							<spsn className='topic-num'>{item.reply_count}/{item.visit_count}</spsn>
							<span className='topic-tab'>{
								item.top ? '置顶' : 
								item.good ? '精华' : tab[item.tab]}</span>
							<span className='topic-title'>{item.title}</span>
						</div>
					))
				}
			</div>
		)
	}
}

export default ShowTopic