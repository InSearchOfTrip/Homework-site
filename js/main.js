var myNumber = 36;
var word = 'world';
let a = (1 > 2);
let b = null;
let c;
let d = NaN;

var arr = [];
arr.push(a,b,c,d);
arr.unshift('Добавить в начало');
arr.push('Добавить в конец');

console.log(arr);

arr.shift(); // Удалить из начала
arr.pop();  // Удалить из конца
console.log(arr);

arr.splice(2,1); // Удалить выбранные данный (Удалит undefinded)

arr.forEach((item, i) =>{
    console.log(item, i);
});

const transformArr = arr.map((item, i) =>{
    console.log(item);
    return String(item);
});

console.log(transformArr);

var coppy = arr.slice();
console.log(coppy);