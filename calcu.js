class calculator{

   addNum(numbers){
   if(numbers===" "){
    return 0;
}
var sum=0;
var number=numbers.split(",");

for(let i=0;i<number.length;i++){   
sum=sum+parseInt(number[i]);
}
return sum;
    }
}
var calcu = new calculator();
console.log(calcu.addNum("1,8"));

