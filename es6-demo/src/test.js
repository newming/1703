var a = 8;
var b = 9;
var c = 444;

// 第一种导出变量，命名导出
export {a, b, c}
// export var a = 10;

// 第二种默认导出
// function sum(x, y) {
// 	return x+y
// }
export default function sum(x, y) {
	return x+y
}