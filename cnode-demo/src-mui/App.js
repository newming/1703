import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import People from 'material-ui/svg-icons/action/account-circle';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
console.log(darkBaseTheme)
let obj = {
	borderRadius: 10,
	palette: {
		primary1Color: '#f00'
	}
}

class App extends React.Component{
	render(){
		return(
			<MuiThemeProvider muiTheme={getMuiTheme(obj)}>
				<div>
					<RaisedButton label="Primary" primary={true}/>
					<RaisedButton label="Primary"/>
					<CircularProgress size={60} thickness={7} />
					<FontIcon className="material-icons">cloud_download</FontIcon>
					<ActionHome />
					<People color='red' />
					<TextField hintText="Hint Text" underlineFocusStyle={{border: '1px solid red'}}/>
					<DatePicker hintText="Portrait Dialog" />
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App