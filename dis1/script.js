function checkAge(){
    const ageInput = document.getElementById("age-input").value;

    const age = Number(ageInput);

    let errorMessage= "";

    if (isNaN(age)) {
        errorMessage = "That is not a valid number";
    } else if (Number(age)% 1 !== 0){
        errorMessage = "Please enter a whole number";
    } else if (Number(age)<0){
        errorMessage = "Your age cannot be negative";
    } else if (Number(age)<18){
        errorMessage = "You are too young to access this site";
    } else if (Number(age)>120) {
        errorMessage = "You are lying about how old you are";
    }

    if (errorMessage  === ""){
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    }
    else {
        document.getElementById("error-content").innerHTML = errorMessage;
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "visible";
    }
}