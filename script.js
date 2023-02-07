document.getElementById("email").addEventListener('input',myFunction)
document.getElementById("message").addEventListener('input',messageOnChange)
document.getElementById("form").addEventListener('submit',onClick)
var email = null
var message = null

function myFunction(e) {
    email = e.target.value
}

function messageOnChange(e){
    message =  e.target.value
}

function onClick(e){
    e.preventDefault()
    alert(email+" "+message)
}