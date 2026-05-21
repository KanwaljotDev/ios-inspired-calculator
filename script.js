//Numpad
const oneEl = document.getElementById("one-btn");
const twoEl = document.getElementById("two-btn");
const threeEl = document.getElementById("three-btn");
const fourEl = document.getElementById("four-btn");
const fiveEl = document.getElementById("five-btn");
const sixEl = document.getElementById("six-btn");
const sevenEl = document.getElementById("seven-btn");
const eightEl = document.getElementById("eight-btn");
const nineEl = document.getElementById("nine-btn");
const zeroEl = document.getElementById("zero-btn");
const decimalEl = document.getElementById("decimal-btn");

//Operations
const plusEl = document.getElementById("plus-btn");
const minusEl = document.getElementById("minus-btn");
const multiplyEl = document.getElementById("multiply-btn");
const divideEl = document.getElementById("divide-btn");
const moduloEl = document.getElementById("modulo-btn");

//Functions
const clearEl = document.getElementById("clear-btn");
const equalEl = document.getElementById("equal-btn");
const signEl = document.getElementById("sign-btn");

//Result
let resultEl = document.getElementById("result");

let finalResult = "";
let isOperator = false;
let canUseDecimal = true;
let allClear = true;
let evalResult = "";

function updateClearButton() {
    if (allClear) {
        clearEl.textContent = "AC";
    }

    else {
        clearEl.textContent = "C";
    }
}

oneEl.addEventListener("click", function(){
    
    if(finalResult.length < 9) {
        finalResult += "1";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
    
});

twoEl.addEventListener("click", function(){

    if(finalResult.length < 9) {
        finalResult += "2";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
});

threeEl.addEventListener("click", function(){
    if(finalResult.length < 9) {
        finalResult += "3";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
}); 

fourEl.addEventListener("click", function(){
    if(finalResult.length < 9) {
        finalResult += "4";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
});

fiveEl.addEventListener("click", function(){
    if(finalResult.length < 9) {
        finalResult += "5";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
});  

sixEl.addEventListener("click", function(){
    if(finalResult.length < 9) {
        finalResult += "6";
        resultEl.textContent = finalResult;
        isOperator = false;

        allClear = false;
        updateClearButton();
    }
});

sevenEl.addEventListener("click", function(){
    if(finalResult.length < 9) {
        finalResult += "7";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
}); 

eightEl.addEventListener("click", function(){  
    if(finalResult.length < 9) { 
        finalResult += "8";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
});

nineEl.addEventListener("click", function(){
    if(finalResult.length < 9) {
        finalResult += "9";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
}); 

zeroEl.addEventListener("click", function(){
    if(finalResult.length < 9) {
        finalResult += "0";
        resultEl.textContent = finalResult;
        isOperator = false;
        allClear = false;
        updateClearButton();
    }
});

decimalEl.addEventListener("click", function(){
    if(finalResult.length < 9 && canUseDecimal && finalResult.at(-1) != "." && finalResult.at(-1) != "+" && finalResult.at(-1) != "-" && finalResult.at(-1) != "x" && finalResult.at(-1) !="÷"
&& finalResult.at(-1) != "%" && finalResult != "") {
        finalResult += ".";
        resultEl.textContent = finalResult;
        isOperator = false;
        canUseDecimal = false;
        allClear = false;
        updateClearButton();
    }
});

plusEl.addEventListener("click", function(){
    if(finalResult.length < 8 && isOperator === false && finalResult != "") {
        finalResult += "+";
        resultEl.textContent = finalResult;
        isOperator = true;
        canUseDecimal = true;
        allClear = false;
        updateClearButton();
    }   
});

minusEl.addEventListener("click", function(){
    if(finalResult.length < 8 && isOperator === false && finalResult != "") {
        finalResult += "-";
        resultEl.textContent = finalResult;
        isOperator = true;
        canUseDecimal = true;
        allClear = false;
        updateClearButton();
    }   
});

multiplyEl.addEventListener("click", function(){
    if(finalResult.length < 8 && isOperator === false && finalResult != "") {
        finalResult += "x";
        resultEl.textContent = finalResult;
        isOperator = true;
        canUseDecimal = true;
        allClear = false;
        updateClearButton();
    }
});

divideEl.addEventListener("click", function(){
    if(finalResult.length < 8 && isOperator === false && finalResult != "") {
        finalResult += "÷";
        resultEl.textContent = finalResult;
        isOperator = true;
        canUseDecimal = true;
        allClear = false;
        updateClearButton();
    }
});

moduloEl.addEventListener("click", function(){
    if(finalResult.length < 8 && isOperator === false && finalResult != "") {
        finalResult += "%";
        resultEl.textContent = finalResult;
        isOperator = true;
        canUseDecimal = true;
        allClear = false;
        updateClearButton();
    }
});

clearEl.addEventListener("click", function(){
    finalResult = "";
    resultEl.textContent = "0";
    canUseDecimal = true;
    allClear = true;
    updateClearButton();
    evalResult = "";
});

signEl.addEventListener("click", function(){
    if(finalResult.length < 9 && finalResult != "" && finalResult != "0" && finalResult.at(-1) != "." && finalResult.at(-1) != "+" && finalResult.at(-1) != "-" && finalResult.at(-1) != "x" && finalResult.at(-1) !="÷"
    && finalResult.at(-1) != "%" && finalResult.at(-1) != ")") {

        let prevChar = finalResult[finalResult.length - 1];
        finalResult = finalResult.slice(0, finalResult.length - 1);
        finalResult += `(-${prevChar})`;
        allClear = false;
        resultEl.textContent = finalResult;
        updateClearButton();
    }

});

equalEl.addEventListener("click", function(){
    if(finalResult !== "") {
        finalResult = finalResult.replaceAll("x", "*");
        finalResult = finalResult.replaceAll("÷", "/");
        
        evalResult = eval(finalResult).toString();
        resultEl.textContent = evalResult;
        finalResult = evalResult;
        allClear = false;
        updateClearButton();
    }
});



