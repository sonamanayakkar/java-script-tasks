

let studentName = document.getElementById("sname");

let subjects = document.querySelectorAll(".subjects");
console.log(subjects.length);



let nameshow = document.getElementById("nameshow");
let total = document.getElementById("total");
let avg = document.getElementById("avg");


let calulate = () => {


    if (studentName.value != "" && subjects[0].value != '' && subjects[1].value != '' && subjects[2].value != '' && subjects[3].value != '' && subjects[4].value != '' && subjects[5].value != '') {


        black();
        let details = [];     // ["sonu",20,70,90,100]

        details.push(studentName.value)
        details.push(subjects[0].value)
        details.push(subjects[1].value)
        details.push(subjects[2].value)
        details.push(subjects[3].value)
        details.push(subjects[4].value)
        details.push(subjects[5].value)
        console.log(details);


        let [name, ...marks] = details;

        nameshow.innerText = name;
        console.log(name);
        // console.log(marks);

        let sum = (list) => {
            let total = 0;


            for (let mm of list) {
                total += Number(mm);
            }
            let avgm = (total / (list.length));

            return [total, avgm];
        }


        let [a, b] = sum(marks);
        console.log(a);
        console.log(b);

        total.innerText = a
        avg.innerText = b

    }
    else {
        red()
        alert("please fill the maeks or name!")
    }


}


function red() {
    studentName.style.border = "red solid 2px"
    subjects[0].style.border = "red solid 2px"
    subjects[1].style.border = "red solid 2px"
    subjects[2].style.border = "red solid 2px"
    subjects[3].style.border = "red solid 2px"
    subjects[4].style.border = "red solid 2px"
    subjects[5].style.border = "red solid 2px"
}



let black = () => {
    studentName.style.border = "black solid 2px"
    subjects[0].style.border = "black solid 2px"
    subjects[1].style.border = "black solid 2px"
    subjects[2].style.border = "black solid 2px"
    subjects[3].style.border = "black solid 2px"
    subjects[4].style.border = "black solid 2px"
    subjects[5].style.border = "black solid 2px"
}