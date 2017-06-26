import React from 'react'
import './main.css'

class Modal extends React.Component{
	constructor(props){
		super(props)
		this.state={
			visible: props.visible
		}
	}
	componentWillReceiveProps(nextProps){
		// console.log(nextProps)
		this.setState({visible: nextProps.visible})
	}
	handleClose(event){
		// console.log(event.target, event.currentTarget)
		if (event.target === event.currentTarget) {
			this.props.onCancle && this.props.onCancle()
		}
	} 
	render(){
		let styles = {
			root: {
				display: this.state.visible?'block':'none'
			}
		}
		let {title, cancelText, okText, children, onOk, onCancle} = this.props;
		// console.log('state===',this.state.visible, 'props===',this.props.visible)
		return(
			<div className='modal-wrap' style={styles.root} onClick={this.handleClose.bind(this)}>
				<div className='modal-card'>
					<div className='modal-header'>
						<h3>{title}</h3>
						<span onClick={()=>{onCancle && onCancle()}}>关闭</span>
					</div>

					<div className='modal-body'>{children}</div>

					<div className='modal-control'>
						<button onClick={()=>{onCancle && onCancle()}}>{cancelText}</button>
						<button onClick={()=>{onOk && onOk()}}>{okText}</button>
					</div>
				</div>
			</div>
		)
	}
}

Modal.defaultProps = {
	title: 'default title',
	cancelText: 'Cancle',
	okText: 'OK',
	children: ''
}

export default Modal