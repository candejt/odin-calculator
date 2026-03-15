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
    if (b===0){
        return "ERROR"
    }
    return a/b    
}

let operator=''
let firstNumber=''
let secondNumber=''
let isResultDisplay=false

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

            if(isResultDisplay){
                firstNumber=value
                display.textContent=value
                isResultDisplay=false
                return
            }else if (operator===''){
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
        if(firstNumber!=='' && operator!=='' && secondNumber!==''){
            const preResult=operate(operator, firstNumber, secondNumber)

            firstNumber=preResult.toString()
            display.textContent=firstNumber
            secondNumber=''
        }
            operator=button.textContent
            display.textContent=`${firstNumber} ${operator}`
     })
})

const equal=document.querySelector('#equal')
equal.addEventListener('click', ()=>{
    if (firstNumber!=='' && operator!=='' && secondNumber!==''){
        let result=operate (operator, firstNumber, secondNumber)
        if (result!=="ERROR"){
         result=Number(result.toFixed(2))
        }
        display.textContent=result
        firstNumber=result.toString()
        operator=''
        secondNumber=''
    }
    isResultDisplay=true
})

const clear=document.querySelector('#clear')
clear.addEventListener('click', ()=>{
    firstNumber=''
    operator=''
    secondNumber=''
    display.textContent='0'
})

const decimal=document.querySelector('.decimal')
decimal.addEventListener('click', ()=>{
    if(operator===''){
        if(!firstNumber.includes('.')){
            firstNumber += '.'
            display.textContent=firstNumber
            }
    }else{
        if(!secondNumber.includes('.')){
            secondNumber += '.'
            display.textContent=firstNumber+operator+secondNumber
         }
    }
})
    
const backspace=document.querySelector('#delete')
backspace.addEventListener('click',()=>{
    if (operator===''){
        firstNumber=firstNumber.slice(0,-1)
        display.textContent=firstNumber || '0'
    }else if (secondNumber !== ''){
        secondNumber=secondNumber.slice(0,-1)
        display.textContent=firstNumber + operator + secondNumber
    }else{
        operator=''
        display.textContent=firstNumber
    }
})

window.addEventListener('keydown', (e)=>{
    let key=e.key
    if (key==='Enter') key = '='
    if (key ==='Escape') key = 'Clear'
    if (key === 'Backspace') key= 'C'

    const button= Array.from(document.querySelectorAll('button'))
                    .find(btn => btn.textContent===key)
    if (button){
        button.click()
    }
})