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

            if (operator===''){
                firstNumber += value
            }else{
                secondNumber += value
            }
             display.textContent=`${firstNumber} ${operator} ${secondNumber}`
        })
})

const operators=document.querySelectorAll('.operator')
operators.forEach(button=>{
        button.addEventListener('click',()=>{
        if(firstNumber !== ''){
            operator=button.textContent
            display.textContent=`${firstNumber} ${operator}`
        }
     })
})

const equal=document.querySelector('#equal')
equal.addEventListener('click', ()=>{
    if (firstNumber!=='' && operator!=='' && secondNumber!==''){
        const result=operate (operator, firstNumber, secondNumber)
        display.textContent=result

        firstNumber=result.toString()
        operator=''
        secondNumber=''
    }
})

const clear=document.querySelector('#clear')
clear.addEventListener('click', ()=>{
    firstNumber=''
    operator=''
    secondNumber=''
    display.textContent='0'
})


