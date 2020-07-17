let numbers =[1,2,34,5,6,7,8,8,9,55,777,89,9];

let min = numbers[0];

for(let i =0;i<numbers.length; i++){
var element = numbers[i];
if(element < min){

    min = element;
}
}
console.log(min);


