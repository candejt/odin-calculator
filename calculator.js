const add = function(a,b){
    return a+b
}

const subtract = function (a,b){
    return a-b
}

const multiply = function (a,b){
    return a*b
}

const divide = function (a,b) {
    return a/b    
}

let operator=''
let firstNumber=''
let secondNumber=''

function operate (op, a, b){
    if(op==='+'){
        return add (a,b)
    }else if (op ==='-') {
        return subtract (a,b)
    }else if (op === '*'){
        return multiply(a,b)
    }else if (op=== '/'){
        return divide(a,b)
    }
}
