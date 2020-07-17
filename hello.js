  /* let shipan = 5;
let susmita = 7;

console.log(shipan,susmita);
let mom = shipan;
shipan = susmita;
susmita = mom;

console.log(shipan,susmita);

let x = 10;
let y = 15;
console.log(x,y);
x = x + y;
y = x - y;
x = x -y;
console.log('x =', x,'y =',y);
let a = 5;
let b = 7;
[a,b] = [b,a];
console.log('a =',a ,' b =',b);


// let year = 2000;
let year = 1991;


function isleapyear(year)
{

  if(year % 4 == 0 && year / 400)
  {
  
    return 'this is leap year';
  }else{
  
    return 'it is not leap year';
  }


}
let result = isleapyear(2020);
// console.log(result);

function factorial(n){

  let factorial = 1;
  for (let i =1; i<n; i++){

    factorial = factorial * i;
  var result = factorial;
    }
return result;
}
const output = factorial(12);
console.log(output);

function fibonacci(n){

  let fibo =[0,1];

  for(let i = 2; i<n;i++){
  fibo[i] = fibo[i-1] +fibo [i-2];

  var result = fibo[i]

  }
return result;
}
const output = fibonacci(12);

console.log(output);



function prime(n){

  for(let i = 2;i<n;i++){
    n = n % i;
    if(n == 0){
    
      return'it is not prime';
    }else{
    return 'it is prime';
    }

    }
    

}
const output = prime(13);
console.log(output);*/



let names = ['susmita','dustu','mistu','shipan','dustu','mistu'];

let blank = [];

for(let i = 0;i<names.length;i++){
var element = names[i];
let index = blank.indexOf(element);

if(index == -1){
blank.push(element);

}

}
console.log(blank);