import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import message from 'antd/lib/message'
import Rate from 'antd/lib/rate';
import Carousel from 'antd/lib/carousel'
import BackTop from 'antd/lib/back-top';
import Spin from 'antd/lib/spin';
import Tabs from 'antd/lib/tabs'

message.info('hello world')

const TabPane = Tabs.TabPane;
function Hello() {
	return(
		<div>
			<BackTop />
			<Spin />
			<Rate allowHalf character='钮' defaultValue={2.5} />
			<Carousel autoplay>
		    <div style={{height: '200px', background: 'blue'}}><h3>1</h3></div>
		    <div style={{height: '200px', background: 'yellow'}}><h3>2</h3></div>
		    <div style={{height: '200px', background: 'deeppink'}}><h3>3</h3></div>
		    <div style={{height: '200px', background: 'red'}}><h3>4</h3></div>
		  </Carousel>
		  <Tabs defaultActiveKey="1" style={{ height: 220 }} >
        <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
        <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
        <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
        <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
        <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
        <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
        <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
        <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
        <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
      </Tabs>
		  <div style={{height: '1000px'}}></div>
		</div>
	)
}

ReactDOM.render(<Hello />, document.getElementById('root'))