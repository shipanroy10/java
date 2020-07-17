

function getArray(numbers){


    let sum = 0;

    for(let i = 0; i<numbers.length; i++){
    
    let element = numbers[i];
    sum = sum + element;
    
    
    }

return sum;
}
let num = [2,4,5,7,8,90,7,5,5,4,32,22,57,88,2,556];
const result = getArray(num);
console.log(result);
const total = getArray([44,77,99,88]);
console.log(total);
