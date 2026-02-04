

let isexit = true;
let createarr;
console.log(createarr);

while (isexit) {
    let switchcontroller = Number(prompt("enter the option:\n 1.create student count and add name \n 2.Remove Name \n 3. String conversion \n 4. join conversion \n 5.total Student lists \n 6.Index value of each student \n 7.Exit"))


    switch (switchcontroller) {
        case 1:
            // debugger

            objectcreate()

            break;
        case 2:
            removename(emptystudentData);


            break;
        case 3:
            stringconversion(emptystudentData)


            break;
        case 4:
            joinconversion(emptystudentData)


            break;
        case 5:
            studentlists(emptystudentData)


            break;
        case 6:
            indexvalueofstudent(emptystudentData)


            break;
        case 7:
            isexit = false
            break;

        default:
            break;
    }
}


function objectcreate() {
    let length = Number(prompt("enter length of array: "))

    createarr = new Array(length);
    for (let i = 0; i < createarr.length; i++) {
        let entry = prompt("enter student name" + (i + 1) + ": ")
        console.log(entry);

        if (entry != "") {
            createarr[i] = entry;
            console.log(createarr);

            if (createarr.includes("")) {
                console.log("null");

            } else {
                console.log("not null");
            }
        }
        else {
            alert("your missing to enter student name!")
            break;
        }
    }
}

function removename(nothing) {
    if (createarr == undefined) {
        nothing();
    }
    else {
        let remove = Number(prompt("how many names want to remove : "));

        for (let index = 0; index < remove; index++) {
            createarr.pop();
        }

        console.log(createarr);
    }
}

function stringconversion(nothing) {
    if (createarr == undefined) {
         nothing();
    }
    else {
        console.log(createarr.toString());
    }
}

function joinconversion(nothing) {
    if (createarr == undefined) {
       nothing();
    }
    else {
        console.log(createarr.join("*"));
    }
}

function studentlists(nothing) {
    if (createarr == undefined) {
         nothing();
    }
    else {
        for (let a = 0; a < createarr.length; a++) {
            console.log((a + 1) + createarr[a]);

        }
    }
}
function indexvalueofstudent(nothing) {
    if (createarr == undefined) {
         nothing();
    }
    else {
        let searchindex = prompt("Enter student name to search Index value: ")


        if (createarr.includes(searchindex)) {
            console.log("Index value is " + createarr.indexOf(searchindex));
        }
        else {
            console.log("Name not registed!");

        }
    }

}

function emptystudentData() {
    alert("Please enter student name first!")
}
