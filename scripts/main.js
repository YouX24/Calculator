const button9 = document.getElementById("button-9")
const button8 = document.getElementById("button-8")
const button7 = document.getElementById("button-7")
const button6 = document.getElementById("button-6")
const button5 = document.getElementById("button-5")
const button4 = document.getElementById("button-4")
const button3 = document.getElementById("button-3")
const button2 = document.getElementById("button-2")
const button1 = document.getElementById("button-1")
const button0 = document.getElementById("button-0")
const dotBtn = document.getElementById("period-btn")
const deleteBtn = document.getElementById("delete-btn")
const clearBtn = document.getElementById("clear-btn")
const divideBtn = document.getElementById("divide-btn")
const multiplyBtn = document.getElementById("multiply-btn")
const subtractBtn = document.getElementById("subtract-btn")
const addBtn = document.getElementById("add-btn")
const equalBtn = document.getElementById("equal-btn")
const currentOperand = document.getElementById("current-operation")
const previousOperand = document.getElementById("previous-operation")
let operation;

// Add number to the current operand
button9.addEventListener("click", function() {
    currentOperand.innerText += 9
})

button8.addEventListener("click", function() {
    currentOperand.innerText += 8
})

button7.addEventListener("click", function() {
    currentOperand.innerText += 7
})

button6.addEventListener("click", function() {
    currentOperand.innerText += 6
})

button5.addEventListener("click", function() {
    currentOperand.innerText += 5
})

button4.addEventListener("click", function() {
    currentOperand.innerText += 4
})

button3.addEventListener("click", function() {
    currentOperand.innerText += 3
})

button2.addEventListener("click", function() {
    currentOperand.innerText += 2
})

button1.addEventListener("click", function() {
    currentOperand.innerText += 1
})

button0.addEventListener("click", function() {
    currentOperand.innerText += 0
})

// only allow one single dot
dotBtn.addEventListener("click", function() {
    if (currentOperand.innerText.includes('.')) {
        return
    }
    currentOperand.innerText += "."
})

divideBtn.addEventListener("click", function() {
    compute()
    operation = "÷"
})

multiplyBtn.addEventListener("click", function() {
    compute()
    operation = "x"
})

subtractBtn.addEventListener("click", function() {
    compute()
    operation = "-"})

addBtn.addEventListener("click", function() {
    compute()
    operation = "+"})

deleteBtn.addEventListener("click", function() {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1)
})

clearBtn.addEventListener("click", function() {
    previousOperand.innerText = ""
    currentOperand.innerText = ""
})

function compute() {
    if (currentOperand.innerText === '') {
        return
    }
    if (previousOperand.innerText !== '') {
        let prevOp = parseFloat(previousOperand.innerText)
        let currOp = parseFloat(currentOperand.innerText)
        switch (operation) {
            case '÷':
                previousOperand.innerText = prevOp / currOp
                currentOperand.innerText = ""
                break
            case 'x':
                previousOperand.innerText = prevOp * currOp
                currentOperand.innerText = ""
                break
            case '-':
                previousOperand.innerText = prevOp - currOp
                currentOperand.innerText = ""
                break
            case '+':
                previousOperand.innerText = prevOp + currOp
                currentOperand.innerText = ""
                break
            default: return
        }
    }
    else {
        previousOperand.innerText = currentOperand.innerText
        currentOperand.innerText = ''
    }
}

equalBtn.addEventListener("click", function() {
    if (currentOperand.innerText !== '' && operation !== '') {
        let prevOp = parseFloat(previousOperand.innerText)
        let currOp = parseFloat(currentOperand.innerText)
        switch (operation) {
            case '÷':
                currentOperand.innerText = prevOp / currOp
                previousOperand.innerText = ""
                operation = ''
                break
            case 'x':
                currentOperand.innerText = prevOp * currOp
                previousOperand.innerText = ""
                operation = ''
                break
            case '-':
                currentOperand.innerText = prevOp - currOp
                previousOperand.innerText = ""
                operation = ''
                break
            case '+':
                currentOperand.innerText = prevOp + currOp
                previousOperand.innerText = ""
                operation = ''
                break
            default: return
        }
    }
})