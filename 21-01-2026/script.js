//task -1
let temp = 0;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {


        temp += 1;
        document.writeln(temp);

    }
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");


//task -2
let temp2 = 0;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {


        temp2 += 1;
        document.writeln(temp2);

    }
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");


// //task -3
for (let i = 1; i <= 5; i++) {

    for (let j = i; j <= 5; j++) {

        document.writeln("&nbsp;&nbsp;");

    }
    for (let k = 1; k <= i; k++) {


        document.writeln(i)
        document.writeln("&nbsp;&nbsp;");

    }

    document.writeln("<br>");

}

document.writeln("<br>");
document.writeln("<br>");


// //task -4

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        // debugger
        switch (j) {
            case 1:
                document.writeln("A");
                break;
            case 2:
                document.writeln("B");
                break;
            case 3:
                document.writeln("C");
                break;
            case 4:
                document.writeln("D");
                break;
            case 5:
                document.writeln("E");
                break;


        }


    }
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");


//task -5
let temp3 = 2;
for (let i = 1; i <= 7; i++) {
    debugger
    if (i < 5) {
        for (let j = 1; j <= i; j++) {
            document.writeln("*");

        }
    }
    else {
        for (let j = i - temp3; j >= 1; j--) {
            document.writeln("*");

        }
        temp3 += 2;
    }

    document.writeln("<br>");

}

document.writeln("<br>");
document.writeln("<br>");


//task -6

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {


        document.writeln(j * i);

    }
    document.writeln("<br>");

}

document.writeln("<br>");
document.writeln("<br>");


//task -7

for (let i = 5; i >= 1; i--) {

    for (let j = 1; j <= i; j++) {
        switch (j) {
            case 1:
                document.writeln("a");
                break;
            case 2:
                document.writeln("b");
                break;
            case 3:
                document.writeln("c");
                break;
            case 4:
                document.writeln("d");
                break;
            case 5:
                document.writeln("e");
                break;
        }

    }
    document.writeln("<br>");

}

document.writeln("<br>");
document.writeln("<br>");


// //task -8
for (let i = 1; i <= 5; i++) {

    for (let j = i; j <= 5; j++) {

        document.writeln("&nbsp;&nbsp;");

    }

    document.writeln("*")
 
    for (let j = 1; j < (i * 2) - 2; j++) {

        if (i == 5) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp;&nbsp;");
        }


    }
    if (i != 1) {
        document.writeln("*");
    }

    document.writeln("<br>");

}

document.writeln("<br>");
document.writeln("<br>");

//task -9
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {

        document.writeln(j);

    }
    for (let j = 5; j >= i; j--) {

        document.writeln("*");

    }

    document.writeln("<br>");

}

document.writeln("<br>");
document.writeln("<br>");



//task -10
for (let i = 1; i <= 5; i++) {

    for (let j = i; j <= 5; j++) {

        document.writeln("&nbsp;&nbsp;");

    }
    
        document.writeln("*")
       
    for (let j = 1; j < (i * 2) - 2; j++) {


        document.writeln("&nbsp;&nbsp;");



    }

    if (i != 1) {
        document.writeln("*");
    }
    for (let s = 4; s >= i; s--) {

        document.writeln("&nbsp;&nbsp;");

    }

    for (let j = i; j <= 3; j++) {

        document.writeln("&nbsp;&nbsp;");

    }
    for (let k = 1; k <= 1; k++) {

        if (i != 5) {
            document.writeln("*")
        }


    }
    for (let j = 1; j < (i * 2) - 2; j++) {
        document.writeln("&nbsp;&nbsp;");

    }

    if (i != 1) {
        document.writeln("*");
    }

    document.writeln("<br>");

 

}
   //
let heart = 15;
for (let i2 = 1; i2 < 10; i2++) {
    for (let j = 1; j <= i2; j++) {
        document.writeln("&nbsp;&nbsp;");

    }
 
        document.writeln("*")

    for (let s = 1; s <= heart; s++) {

        document.writeln("&nbsp;&nbsp;");
    }


    for (let k = 1; k <= 1; k++) {

        if (i2 != 9) {
            document.writeln("*")
        }
    }
    heart -= 2;
    document.writeln("<br>");
}

document.writeln("<br>");
document.writeln("<br>");



