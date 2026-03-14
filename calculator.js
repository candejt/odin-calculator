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
    a=Number(a)
    b=Number(b)

    if(op==='+'){
        return add (a,b)
    }else if (op ==='-') {
        return subtract (a,b)
    }else if (op === '*'){
        return multiply(a,b)
    }else if (op=== '/'){
        return divide(a,b)
    }else{
        return null
    }
}

const digits=document.querySelectorAll('.digit')
const display=document.querySelector('.display')

digits.forEach(button=>{
        button.addEventListener('click', ()=>{
            const value=button.textContent

            if (operator=''){
                firstNumber += value
                display.textContent=firstNumber
            }else{
                secondNumber += value
                display.textContent=secondNumber
            }
        })
})

const operators=document.querySelectorAll('.operator')

operators.forEach(button=>{
        button.addEventListener('click',()=>{
            operator=button.textContent
        })
})


