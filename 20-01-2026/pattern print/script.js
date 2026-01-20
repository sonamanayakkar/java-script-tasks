
//task -1
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        document.writeln("0")
    } else {
        document.writeln("1")
        // document.writeln("&nbsp")
    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -2
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        document.writeln("1")
    } else {
        document.writeln("0")
    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -3
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.writeln("*")

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -4
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.writeln(j)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -5
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        document.writeln(i)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -6
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln("*")

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -7
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln(i)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -8
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln(j)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -9
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.writeln(i)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -10
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.writeln(j)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -11
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        document.writeln(j)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -12
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.writeln(j)

    }
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")
// document.writeln("&nbsp;&nbsp;");

//task -13
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= 5; j++) {

        if (j >= i) {
            document.writeln("*")
        }
        else {
            document.writeln("&nbsp;&nbsp;");
        }
    }
    document.writeln("<br>")


}
document.writeln("<br>")
document.writeln("<br>")

//task -13 another method
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
        document.writeln("&nbsp;&nbsp;");
    }
    for(let k=5;k>=i;k--){
         document.writeln("*")
    }
    document.writeln("<br>")


}
document.writeln("<br>")
document.writeln("<br>")

//task -13 another method
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
         document.writeln("&nbsp;&nbsp;");

    }
    // debugger;
    for (let k = 5; k >=i; k--) {
        document.writeln("*")
    }
   
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -14
for (let i = 5; i >= 1; i--) {
    for (let j = i; j < 5; j++) {
         document.writeln("&nbsp;&nbsp;");

    }
    
    for (let k = i; k >=1; k--) {
        document.writeln("*")
    }
   
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -15
// debugger;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=(i*2)-1; j++) {
         document.writeln("*")
    }
    
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")

//task -16
// debugger;
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <i; j++) {
         document.writeln("&nbsp;&nbsp;");
    }
    for (let k = 5; k >=i; k--) {
          document.writeln("*")
    }
    for (let l = 5; l >i; l--) {
          document.writeln("*")
    }

  
    
    document.writeln("<br>")

}
document.writeln("<br>")
document.writeln("<br>")