const screenDisplay = document.querySelector('.screen')
const  buttons = document.querySelectorAll('button')


let calculations =[]
let accumulationCalculations

const calculator =(button)=>{
   const value = button.textContent;

   if(value === "CLEAR"){
    calculations =[]
    screenDisplay.textContent = '.'
   }else if(value === '='){
    screenDisplay.textContent = eval(accumulationCalculations)
   }else{
    calculations.push(value)
   accumulationCalculations = calculations.join('')
   screenDisplay.textContent = accumulationCalculations
   }
}

buttons.forEach(button =>button.addEventListener('click' ,()=> calculator(button)) )