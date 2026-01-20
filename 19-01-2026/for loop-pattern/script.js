
//task 1-

for (let i = 1; i <= 10; i++) {
    debugger;
    for (let j = 1; j <= 10; j++) {
        if ((j == 1 || j == 10) || (((i == 1 || i == 10) ))) {
            document.writeln("*")

        }

        else {
            document.writeln("&nbsp;&nbsp;");
        }




    }

    document.writeln("<br>");

}
document.writeln("<br>");
document.writeln("<br>");

//task - 2

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {
        if ((j == 3 || i == 5) || (j == 2 && i == 2)) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp;&nbsp;");
        }


    }
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// task - 3

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {
        if ((i == 1 || i == 3 || i == 5) || (i == 2 && j == 5) || (i == 4 && j == 1)) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp;&nbsp;");
        }


    }
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");
// task - 4

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {
        if ((i == 1 || i == 3 || i == 5) || (i == 2 && j == 5) || (i == 4 && j == 5)) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp;&nbsp;");
        }


    }
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// task - 5

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {
        if ((j == 3 || i == 3 || (j == 2 && i == 2))) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp;&nbsp;");
        }


    }
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// task - 5

for (let i = 1; i <= 7; i++) {

    for (let j = 1; j <= 5; j++) {
        if ((i == 3 || i == 7 || ((i != 5 && i != 6 && i != 2) && j == 3) || ((i != 1 && (j == 2 || j == 4))) || ((i == 4 || i == 5 || i == 6) && j == 1) || (i == 4 || i == 5 || i == 6) && j == 5)) {
            document.writeln("*");
        }
        else {
            document.writeln("&nbsp;&nbsp;");
        }


    }
    document.writeln("<br>");
}


for(let i=1;i<=10;i++){
    if (i%3==0) {
        document.writeln("*");
    } else {
        document.writeln(i);
    }
    document.writeln("<br>");
}

