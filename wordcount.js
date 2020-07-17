let speach = "i am   not understanding   java script 100 percent.maybe in future it will be easy for me";

let count = 0;

let i = 0;


while (i<speach.length){
i++;
var char = speach[i];
if (char == " " && speach[i-1] != " "){

count++;

}

}
count++
console.log(count);