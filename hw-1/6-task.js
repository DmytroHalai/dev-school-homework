const num = 333333321786;
let str = String(num);
let arr = str.split('');
arr = arr.sort((a, b) => b - a);
let str_result = arr.toString();
str_result = str_result.replaceAll(",","");
console.log(+str_result);