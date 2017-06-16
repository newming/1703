// let obj = { foo: "aaa", bar: "bbb" };

// let { bar } = obj

// console.log( bar)

// function hello({name, age}) {
// 	console.log('my name is ' + name)
// }

// hello({name: 'newming', age: 555, tall: 176})

// let username = 'newmingafdafda'
// let password = 'passwordfsfdsfd'
// let user = {
// 	username,
// 	password,
// 	say(){
// 		console.log('hello')
// 	},
// 	// say: function () {
// 	// }
// }
// console.log(user)

// function sum(x, y) {
// 	return x*y
// }

// let sum = num => ({
// 	name: 'aaa',
// 	age: 456
// })

// let a = sum(5)
// console.log(a)

// setTimeout( () => console.log(111), 1100)

// let arr = [2,6,3]
// arr.sort( (a,b)=> a-b );
// console.log(arr)

// function sum() {
// 	console.log(this)
// }
// let sum = () => console.log(this);
// sum()

// var obj = {
// 	say: sum
// }
// obj.say()

// let name = 'newming';
// let age = 29;
// function sum() {
// 	return 99999
// }
// console.log(`my name is ${name.toUpperCase()},my age is ${true ? 888 : age+100} +++ ${sum()}`)
// document.write('<h1 class="'+ age +'">' + name + '</h1>')

// document.write(`<h1 class='${age}'>${name}</h1>`)

// default value
// function sum(x=5, y=8) {
// 	return x*y
// }
// console.log(sum())

// rest
// function sum(...rest) {
// 	let result = 0
// 	for (let i = 0; i < rest.length; i++) {
// 		if (isNaN(rest[i])) continue;
// 		result += Number(rest[i])
// 	}
// 	return result
// }

// console.log(sum(5,8,9,6,4,'',6,2,3,5,6))

// spared
// let arr1 = [1,2,3];
// let arr2 = [5,6,8]
// // [1,2,3,5,6,8,999]
// // let arr = arr1.concat(arr2,[999])

// let arr = [...arr1, 888, ...arr2, 999];
// console.log(arr)

// let arr = [
// 	{name: 'aaa', age: 55}
// ]
// arr = [...arr, {name: 'aaaa', age: 88888}]
// console.log(arr)

// let obj1 = {
// 	name: "aaaa",
// 	age: 5656
// }
// let obj2 = {
// 	hobby: 'running'
// }

// let obj = {...obj1}
// console.log(obj)

// class
// function Person() {}
// Person.prototype.say = function() {
// 	console.log(`my name is ` + this.name)
// };

// function Women(name) {
// 	this.name = name
// }
// Women.prototype = new Person()

// var lili = new Women('lili')
// lili.say()


// class Person {
// 	// 只能写方法，方法之间不可以加符号隔开
// 	// constructor，自动执行，接收实例对象的参数
// 	constructor(name, hobby){
// 		// console.log(1233)
// 		this.name = name
// 		this.hobby = hobby
// 	}
// 	say(){
// 		console.log('say')
// 	}
// }
// class Women extends Person{
// 	constructor(tall, name, hobby){
// 		super(name, hobby)
// 		this.tall = tall
// 	}
// 	run(){
// 		console.log('run')
// 	}
// }
// var person = new Women(888, 'bili', 'jump');
// console.log(person)
// person.say()
// person.run()

// module as
// import sss,{a,b,c} from './test.js'

// console.log(sss(5,8))

// import indexOf from 'lodash/indexOf';

// console.log(indexOf)
// console.log(indexOf([1, 2, 1, 2], 2, 2))

// let result = [1,2,30].filter(function (element) {
// 	console.log(element)
// 	return element>20
// })

// console.log(result)

// let arr = ['第一天', '第二条', '54646'];
// let res = arr.map( item => `<h1>${item}</h1>` )

// console.log(res)
// let text = '';
// res.forEach( item => text+=item )

// document.write(text)

// let arr = [
// 	{name: 'aaaa', age: 12},
// 	{name: 'bbb', age: 122},
// 	{name: 'aa', age: 124},
// 	{name: 'aahhaa', age: 126}
// ]
// let index = arr.findIndex( item => item.age === 122 )
// console.log(index)

let obj ={
	name: 'aaaa',
	age: 6465
}
let obj1 ={
	hobby: '454545',
	name: '6666'
}

Object.assign(obj, obj1, {name: 'ttt'})
console.log(obj)