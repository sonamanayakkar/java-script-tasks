

let cl1 = document.getElementById("cl1")
let cl2 = document.getElementById("cl2")
let body = document.body;

let bgchange = () => {

    console.log(cl1.value);
    console.log(cl2.value);

    // body.style.background=`linear-gradient(to right,${cl1.value},${cl2.value})`
    // body.style.background="linear-gradient(to right,"+cl1.value+","+cl2.value+")"
    body.setAttribute("style", "background:linear-gradient(to right," + cl1.value + "," + cl2.value + ");")

}