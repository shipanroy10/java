/*let numbers = [1,2,3,2,4,45,6,6,7,8,9];

let uniqueName = [];

for (let i = 0;i <numbers.length; i++){

var element = numbers[i];
var index = uniqueName.indexOf(element);

if (index == -1){
uniqueName.push(element);

}


}
console.log(uniqueName);

let names = ['rakal','bokul','nokul','susmita','shipan','bokul','susmita'];

let checkedFile = [];


for(let i =0; i<names.length; i++){
let element = names[i];
let index = checkedFile.indexOf(element);

if (index == -1){

    checkedFile.push(element);
}


}
console.log(checkedFile);*/


let names = ['a','b','c','d','a','d'];

let result = [...new Set(names)];
console.log(result);
