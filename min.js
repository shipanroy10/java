/*
let arun = 70;
let topon = 50;
let dustu = 20;
let small = Math.min(arun,topon,dustu);
console.log(small);
if(arun < topon){
if(dustu < arun){

    console.log('dustu is small');
}else{

    console.log('arun is small');
}
    
}else{

   if(dustu < topon){

    console.log('dustu is small');
   }else{

    console.log('topon is small');
   }
}*/
let numbers = [1,2,3,4,4,5,6,7,84,3,33,2,2,-3];
let result = Math.max(... numbers);
console.log(result);
let number = [1,2,3,4,4,5,6,7,84,3,33,2,2,-3];
let results = Math.min(... number);
console.log(results);