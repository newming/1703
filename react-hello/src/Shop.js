import React from 'react'

class Shop extends React.Component{
	constructor(){
		super()
		this.state={
			data: [
				{name: '裤子', price: 50, num: 8},
				{name: '袜子', price: 10, num: 6},
				{name: '鞋子', price: 20, num: 12}
			]
		}
	}
	handleNum(index,num){
		// console.log(index, num)
		let newData = this.state.data;
		newData[index].num = newData[index].num + num;
		this.setState({
			data: newData
		})
	}
	render(){
		let result = 0;
		this.state.data.forEach( item => result+=(item.price*item.num))
		return(
			<div>
				<table style={{width: '100%', textAlign: 'center'}}>
					<thead>
						<tr>
							<th>商品名称</th>
							<th>单价</th>
							<th>数量</th>
							<th>小计</th>
							<th>删除</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.data.map( (item,index) =>
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td>
										<button onClick={this.handleNum.bind(this,index,-1)}>-</button>
										{item.num}
										<button onClick={this.handleNum.bind(this,index,1)}>+</button>
									</td>
									<td>{item.num*item.price}</td>
									<td><button>删除</button></td>
								</tr>
							)
						}
						<tr><td>总价：{result}</td></tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default Shop