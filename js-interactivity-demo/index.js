console.log('Index is functional')
///Query Selectors ////
let plusBtn = document.querySelector('#plus-btn')
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')
let counter = document.querySelector('#counter')
let themeButtons = document.querySelectorAll('.theme-buttons')
let body = document.querySelector('body')
let allBtn = document.querySelectorAll('button')

let count = 0

let increment = () =>{
    count += 1
    counter.textContent = count
}

let decrement = () =>{
    count -= 1
    counter.textContent = count
}

let reset = () =>{
    count = 0
    counter.textContent = count
}

let selectTheme = (e) =>{
    console.log(e.target.textContent)
    body.className = e.target.textContent
    allBtn.forEach((btn, index, arr) =>{

            btn.classList.remove('facebook')
            btn.classList.remove('devmountain')
            btn.classList.remove('twitter')
            btn.classList.remove('default')

            btn.classList.add(e.target.textContent)
        })
}

/// Event Listeners ///
plusBtn.addEventListener('click', increment)
minusBtn.addEventListener('click', decrement)
resetBtn.addEventListener('click', reset)
for(let i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', selectTheme)
}
