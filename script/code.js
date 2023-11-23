let btnCheck = document.querySelector('[data-check]')
let output = document.querySelector('[data-output]')

function palindrome (){
    let word = document.querySelector('[data-input]').value 
    let wordarr = word.split('')
    let arrrev= wordarr.reverse()
    let backwards = arrrev.join('')
    if (word == backwards){
        output.innerHTML = word+ ' is a palindrome'
    }else {
        output.innerHTML = word + ' is not a palindrome'
    }
}

btnCheck.addEventListener('click', palindrome)