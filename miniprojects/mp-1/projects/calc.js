function addition(){
    let num1 = document.getElementById("first-num-input").value;
    num1 = Number(num1);
    let num2 = document.getElementById("second-num-input").value;
    num2 = Number(num2);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML ="Please enter a valid number :)";
    } else{
    let result = Number(num1) + Number(num2);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else{
        document.getElementById("output").style.color = "black";
    }
    document.getElementById("output").innerHTML = String(result);
    }
}

function subtract(){
    let num1 = document.getElementById("first-num-input").value;
    num1 = Number(num1);
    let num2 = document.getElementById("second-num-input").value;
    num2 = Number(num2);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML ="Please enter a valid number :)";
    } else{
        let result = Number(num1) - Number(num2);
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else{
            document.getElementById("output").style.color = "black";
        }
        document.getElementById("output").innerHTML = String(result);
    }
}

function multiply(){
    let num1 = document.getElementById("first-num-input").value;
    num1 = Number(num1);
    let num2 = document.getElementById("second-num-input").value;
    num2 = Number(num2);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML ="Please enter a valid number :)";
    } else{
        let result = Number(num1) * Number(num2);
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else{
            document.getElementById("output").style.color = "black";
        }
        document.getElementById("output").innerHTML = String(result);
    }
}

function divide(){
    let num1 = document.getElementById("first-num-input").value;
    num1 = Number(num1);
    let num2 = document.getElementById("second-num-input").value;
    num2 = Number(num2);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML ="Please enter a valid number :)";
    } else{
        let result = Number(num1) / Number(num2);
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else{
            document.getElementById("output").style.color = "black";
        }
        document.getElementById("output").innerHTML = String(result);
    }
}

function power(){
    let num1 = document.getElementById("first-num-input").value;
    let num2 = document.getElementById("second-num-input").value;
    num1 = Number(num1);
    num2 = Number(num2);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML ="Please enter a valid number :)";
    } else if(num2>1000){
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML ="Please enter a smaller second number :)";
    } else {
        let result = 1;
        for (let i = 0; i < num2; i++) {
            result *= num1;
        }
        if (result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
        document.getElementById("output").innerHTML = String(result);
    }
}


function clearCalc(){
    document.getElementById("first-num-input").value = String("");
    document.getElementById("second-num-input").value = String("");
    document.getElementById("output").innerHTML = String("");
}