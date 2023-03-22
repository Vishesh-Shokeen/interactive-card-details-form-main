
// card -details inputs
let nameInput = document.querySelector('.name-input')
let numberInput = document.querySelector('.number-input')
let monthInput = document.querySelector('.month-input')
let yearInput = document.querySelector('.year-input')
let cvcInput = document.querySelector('.CVC')

//card image 

let cardNumber = document.querySelector('.card-number')
let cardName = document.querySelector('.card-name')
let cardExp = document.querySelector('.exp-date')
let cardCVC = document.querySelector('.card-cvc')


//confirm btn
let confirmBtn =document.querySelector('.btn')



//wrong input
let numberInputWrong = document.querySelector('.number-input-wrong')
let dateEmpty = document.querySelector('.date-empty')
let cvcEmpty = document.querySelector('.cvc-empty')

/* Input Is Wrong do not update card details */
let WrongInput = false



confirmBtn.addEventListener('click',()=>{
if(!WrongInput){
     cardName.textContent   = nameInput.value
     cardNumber.textContent = numberInput.value
     cardExp.textContent    = `${monthInput.value}/${yearInput.value}`
     cardCVC.textContent    = cvcInput.value
}
})


numberInput.addEventListener('change',(e)=>{
     let regex =/([\D])/g

     if(numberInput.value.length < 8 || numberInput.value.split('').some((x)=>regex.test(x))){
          numberInput.style.border='2px solid red'
          numberInputWrong.style.display = 'block'
          WrongInput = true
     }
     else{
          numberInput.style.border = '1px solid gray'
          numberInputWrong.style.display = 'none'
          WrongInput = false
     }
})


monthInput.addEventListener('change',()=>{
     if(monthInput.value <= 0 ){
          dateEmpty.style.display='block'
          monthInput.style.border='1px solid red'
          WrongInput = true
     }
     else{
          dateEmpty.style.display='none'
          monthInput.style.border='1px solid gray'
          WrongInput = false
     }
})


yearInput.addEventListener('change',()=>{
     if( yearInput.value <= 0 ){
          dateEmpty.style.display='block'
          yearInput.style.border='1px solid red'
          WrongInput = true
     }
     else{
          dateEmpty.style.display='none'
          yearInput.style.border='1px solid gray'
          WrongInput = false
     }
})


cvcInput.addEventListener('change',()=>{
     if( cvcInput.value <= 0 || cvcInput.value.length < 3 ){
          cvcEmpty.style.display='block'
          cvcInput.style.border='1px solid red'
          WrongInput = true
     }
     else{
          cvcEmpty.style.display='none'
          cvcInput.style.border='1px solid gray'
          WrongInput = false
     }
})







