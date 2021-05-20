document.addEventListener("DOMContentLoaded", function() {
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const decimal = document.getElementById("decimal")
const output= document.getElementById("output");
const clear= document.getElementById("clear");
var expressionArr =[];
var display ='0';
var currentNum;


updateDisplay = (e) => { 
    var btnText = e.target.innerText;
    if(display === "0") { 
      display = ""; 
    }
    display += btnText; 
        output.innerText = display;
} 

operate = (e) => {
var opter = e.target.innerText; 
if(opter == "=")
{
currentNum = display;
expressionArr.push(currentNum);
solve()
}
else{
    currentNum = display;
    display = '0';
    output.innerText = display;
    expressionArr.push(currentNum);
    if(opter == 'x')
    expressionArr.push('*')
    else
    expressionArr.push(opter)
}

}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', updateDisplay) 
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', operate);
}

clear.onclick = () => {
    document.getElementById("output").innerHTML = "";
    expressionArr.splice(0, expressionArr.length);
    currentNum =''
    display ='0'
    }

decimal.onclick = () => { 
    if(!display.includes('.')) {
        display += '.';
    }
    output.innerText = display;
    }

negate.onclick=() => {
    if(display!='0')
    display = '-' + display
    else
    display = '-'
    output.innerText = display;
    currentNum= display;
    };

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

function solve() {
    console.log(expressionArr)
    removeZero()
    // var solved = eval(expressionArr.join(' '));
    // //convert datatype from number to string
    // display = solved + ''; 
    // output.innerText = display;
    // expressionArr.splice(0, expressionArr.length);              
   
    var solved= calculate(expressionArr)
    if(!solved) solved='0'
    document.getElementById('output').innerHTML = solved;
    expressionArr.splice(0, expressionArr.length);
}


function calculate(exprArr)
{ 
    console.log(exprArr)
    var result;
    var n1, n2;
    for(var i=1; i<=exprArr.length-2; i=i+2)
    { 
        if(result) 
        n1=Number(result)
        else
        n1=Number(exprArr[i-1])

        n2=Number(exprArr[i+1])
    
        if(exprArr[i]=="+")
        {
        result = add(n1,n2)  
        n1=result;
        }  
        else{
            if(exprArr[i]=="-")
            {
            result = subtract(n1,n2)  
            n1=result;
            }  
            else{
                if(exprArr[i]=="*")
                {
                result = multiply(n1,n2)  
                n1=result;
                } 
                else{
                    if(exprArr[i]=="/")
                    {
                    result = divide(n1,n2)  
                    n1=result;
                    }   
                } 
            }  
        }
     }

return result;
}
})
           
function add (a, b) {
    return a + b
  }
  
  function subtract (a, b) {
    return a - b
  }
  
  function multiply (a, b) {
      return a * b
  }
  
  function divide (a, b) {
    let value = (a * 1.0) / b
    if (!isFinite(value)) throw new RangeError('Divide-by-zero')
    else return value
  }
