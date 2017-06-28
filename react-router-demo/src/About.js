import React from 'react';

import {Route, Link} from 'react-router-dom'

const Dijia = () => <div>dijia</div>
const Zhang = () => <div>zhang</div>
const Niu = () => <div>niu</div>

class About extends React.Component{
	render(){
		console.log('about-====',this.props)
		let {match} = this.props;
		return(
			<div>
				About页面<br />
				<Link to={match.url}>第嘉</Link>
				<Link to={`${match.url}/zhang`}>张老师</Link>
				<Link to={`${match.url}/niu`}>钮老师</Link>

				<Route path={match.url} exact component={Dijia} />
				<Route path={`${match.url}/zhang`} component={Zhang} />
				<Route path={`${match.url}/niu`} component={Niu} />
			</div>
		)
	}
}

export default About