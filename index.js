const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = ""
let passwordTwo = ""
let newPassword = ""

let passBoxOne = document.getElementById("password-one")
let passBoxTwo = document.getElementById("password-two")
function generatePassword() {
    for (let i = 0; i<15; i++){
        newPassword += characters[Math.floor(Math.random()*91)]
    }
    return newPassword
}

function generate() {
    passwordOne=generatePassword()
    newPassword = ""
    passwordTwo=generatePassword()
    newPassword = ""
    passBoxOne.textContent = passwordOne
    passBoxTwo.textContent = passwordTwo
}
