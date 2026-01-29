let initialvalue=document.getElementById("number").innerText;
let number = document.getElementById("number");//0-string
let n = parseInt(number.innerText); //0-number

let plusbutton = () => {
   
    incree()

}
let minusbutton = () => {
   
    decree();
}
let resetbtn=()=>{
    n=initialvalue
    number.innerText = n
}

let incree=()=>{
     if (n < 10) {
        console.log("+");
        n++;
        number.innerText = n
    } else {
        alert("limited item only you can add 10 items")
    }
}

let decree=()=>{
     if (n > 0) {
        console.log("-");
        n--
        number.innerText = n
    }
    else {
        alert("no of itms not going below 0")
    }
}