let user;
let accno = 1234;
let initialamount = 0;

let isexit = true;

while (isexit) {

    let options = prompt("enter yor options\n 1.create account \n 2.Deposit amount \n 3.case withdra \n 4.balance enquiry \n 5.exit");
    // debugger;
    switch (options) {

        case "1":
            createacc();
            break;
        case "2":
            deposit()
            break;
        case "3":
            withdra()
            break;
        case "4":
            balance()
            break;
        case "5":
            isexit = false;
            break;

        default:
            alert("options not available!")
    }
}



function createacc() {
    user = prompt("enter your name: ")
    initialamount = parseFloat(prompt("pay initial amount : "))
    alert("account created successfully!!")
}

function deposit() {
    let accno2 = prompt("enter your account number: ");

    if (accno2 == accno) {
        let depositamt = parseFloat(prompt("pay deposit amount : "));
        initialamount += depositamt;
        console.log("your  amount "+depositamt+"has successfully deposited")
    }
    else {
        alert("account no does'nt match!!!");
    }
}

function withdra() {
    let accno3 = prompt("enter your account number: ");

    if (accno3 == accno) {
        let withdraamt = parseFloat(prompt("enter withdra amount : "));

        if (withdraamt < initialamount) {
            initialamount -= withdraamt
              console.log("your  amount "+withdraamt+"has successfully withdravel")
        }
        else {
            alert("Insufficient balance!!!");
        }

    }
    else {
        alert("account no does'nt match!!!");
    }
}

function balance() {
    console.log("===================== ")
    console.log("Name of User: " + user)
    console.log("Acc No: " + accno)
    console.log("Balance: " + initialamount)
    console.log("===================== ")
}