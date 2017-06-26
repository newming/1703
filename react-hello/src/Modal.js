import React from 'react'
import './main.css'

class Modal extends React.Component{
	constructor(){
		super()
		this.state={
			visible: true
		}
	}
	render(){
		let styles = {
			root: {
				display: this.state.visible?'block':'none'
			}
		}
		return(
			<div className='modal-wrap' style={styles.root}>
				<div className='modal-card'>
					<div className='modal-header'>
						<h3>title</h3>
						<span>关闭</span>	
					</div>
					<div className='modal-body'>
						<p>some contents</p>
						<p>some contents</p>
						<p>some contents</p>
					</div>
					<div className='modal-control'>
						<button>Cancle</button>
						<button>OK</button>
					</div>
				</div>
			</div>
		)
	}
}
export default Modal