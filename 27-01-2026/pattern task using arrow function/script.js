//task - 1

let tamil=Number(prompt("Enter the mark obtained in TAMIL: "))
let english=Number(prompt("Enter the mark obtained in ENGLISH: "))
let maths=Number(prompt("Enter the mark obtained in MATHS: "))
let physics=Number(prompt("Enter the mark obtained in PHYSICS: "))
let chemistry=Number(prompt("Enter the mark obtained in CHEMISTRY: "))
let cs=Number(prompt("Enter the mark obtained in COMPUTER SCIENCE: "))

let percentage=(sub1,sub2,sub3,sub4,sub5,sub6)=>{
    let calculation=(sub1+sub2+sub3+sub4+sub5+sub6)/6;
    return calculation;
}
let inputs=percentage(tamil,english,maths,physics,chemistry,cs)
console.log("you obtained "+inputs+"%");




//task -2 
// let initial = (letter) => {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 5; j >= i; j--) {
//             document.writeln(letter)
//         }
//         document.writeln("<br>")
//     }
// }




// let reverseprint = (value) => {
//     for (let i = 1; i <= value; i++) {
//         for (let j = value; j >= i; j--) {
//             document.writeln(j)
//         }
//         document.writeln("<br>")
//     }
// }


// let frontprint = (value) => {
//     for (let i = 1; i <= value; i++) {
//         for (let j = 1; j < i; j++) {

//             document.writeln("&nbsp;&nbsp;")
//         }
//         for (let j = i; j <= value; j++) {

//             document.writeln(j)
//         }
//         document.writeln("<br>")
//     }
// }



// let input = Number(prompt("Enter your option: "))

// switch (input) {
//     case 1:
//         initial("s")
//         break;

//     case 2:
//         reverseprint(5);
//         break;
//     case 3:
//         frontprint(5)
//         break;

//     default:
//         alert("OPTION IS NOT AVAILABLE!")

//         break;

// }