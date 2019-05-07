
var keys = document.getElementsByClassName("key");
var resultScreen = document.querySelector(".resultScreen");
var topScreen = document.getElementById("topScreen");
var bottomScreen = document.getElementById("bottomScreen");
var operatorScreen = document.getElementsByClassName("operatorScreen")[0];

for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener("click", getKeyPressed);
}



function getKeyPressed(event){
    var sourceElement = event.srcElement;

    // condition for when the key pressed is a number
    if (sourceElement.innerText !== "+" && sourceElement.innerText !== "-" &&
        sourceElement.innerText !== "*" && sourceElement.innerText !== "/" && 
        sourceElement.innerText !== "=" && sourceElement.innerText !== "C"){
        
            if(operatorScreen.innerText !== "="){
                var firstNumber = bottomScreen.innerText + sourceElement.innerText;
                bottomScreen.innerText = firstNumber;
            }else{
                if(!isSymbol(sourceElement.innerText) && sourceElement.innerText !== "="){
                    topScreen.innerText = "";
                    operatorScreen.innerText = "";
                    bottomScreen.innerText = sourceElement.innerText;
                }else{
                    var result = calculate(topScreen.innerText, bottomScreen.innerText, operatorScreen.innerText);
                    topScreen.innerText = result;
                    operatorScreen.innerText = sourceElement.innerText;
                    bottomScreen.innerText = "";
                }
            }
        

    }else{
        // condition for when the key pressed is not a number
        // clearing screen if its the clear button
        if(sourceElement.innerText === "C"){
            topScreen.innerText = "";
            operatorScreen.innerText = "";
            bottomScreen.innerText = "";
        }else{

            //statements in here executes only if key pressed is not a number
            //or the clear button
            if(sourceElement.innerText === "=" && topScreen.innerText !== "" &&bottomScreen.innerText !== ""){
                var operator = operatorScreen.innerText;
                var result = calculate(topScreen.innerText, bottomScreen.innerText, operator);

                operatorScreen.innerText = "=";
                bottomScreen.innerText = result;
            }else{

                if(operatorScreen.innerText === "="){
                    operatorScreen.innerText = sourceElement.innerText;
                    topScreen.innerText = bottomScreen.innerText;
                    bottomScreen.innerText = "";
                }
            }


            if(topScreen.innerText === ""){
                topScreen.innerText = bottomScreen.innerText;
                operatorScreen.innerText = sourceElement.innerText;
                bottomScreen.innerText = "";
            }

        }
        
    }

    
}

function calculate(a, b, operator){
    
    switch(operator){
        case "-":
            return Number(a) - Number(b);
        case "*":
            return Number(a) * Number(b);
        case "/":
            return Number(a) / Number(b);
        default:
            return Number(a) + Number(b);
    }
}


function isOperator(keyPressed){
    return keyPressed === "-" || keyPressed === "+" || keyPressed === "*" || keyPressed === "/";
}