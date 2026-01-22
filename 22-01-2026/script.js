

//task-1 (swap number without temp variable)

// let a=2;
// let b=624;
// console.log("before "+a,b)
// a=a+b;//7
// b=a-b;//5
// a=a-b;
// console.log("after "+a,b)



//task-2 (age calculator)

// let input =Number(prompt("enter your birth month to calculate your age: "));
// console.log("DOB : "+input)

// let live=2026;

// let calculation=(input-live)*-1;
// console.log("age: "+calculation)


//task-3 (number reverse)

// let value =Number(prompt("enter the number: "));
// console.log("Before swap : "+value)
// // debugger;
// let temp="";
// while(value>0){
//     temp+=value%10;

//     let filter =(value/10);

//     value = Math.floor(filter);


// }
// console.log("after swap : "+temp)


//task-4 (Factorial)

// let input =prompt("Enter the value: ")
// let storage=1;
// let count="";
// for(let i=1;i<=input;i++){
//     storage*=i;
//     count+=i+"x";
// }
// console.log(count+" = ",storage);


//task-5 (Amstrong Number)

// let input =prompt("Enter end value: ")
// let temp =input;
// let final=0;
// // debugger;
// while(temp>0){
//     final+=(temp%10)**3;
//    temp=Math.floor(temp/10);
// }
// if(final==input){
//     console.log(final+" is amstrong number");
// }
// else{
//      console.log(input+" not a amstrong number");
// }


//task-6 (fibanaci Number)

let input =prompt("Enter end value: ")
let a = 0;
let b = 1;
// debugger;

for (let i = 1; i <= input; i++) {
    console.log(a)//0
    let temp=a+b;//1
    a=b;
    b=temp;
    

}




