let btnCheck = document.querySelector('[data-check]')
let output = document.querySelector('[data-output]')

function palindrome (){
    let word = document.querySelector('[data-input]').value 
    let downcase = word.toLowerCase()
    let wordarr = downcase.split('')
    let arrrev= wordarr.reverse()
    let backwards = arrrev.join('')
    if (downcase == backwards){
        output.innerHTML = word+ ' is a palindrome'
    }else {
        output.innerHTML = word + ' is not a palindrome'
    }
}

btnCheck.addEventListener('click', palindrome)