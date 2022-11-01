let registration = document.querySelector(".register");

registration.addEventListener("click", registerFunc);

function registerFunc(){
    document.querySelector(".hide").style.display = "none";
    document.querySelector(".registerWrapper").style.display = "block";
}

document.querySelector(".login").addEventListener("click", loginFunc);

function loginFunc(){
    document.querySelector(".hide").style.display = "block";
    document.querySelector(".registerWrapper").style.display = "none";
}

// ГЕНЕРАТОР РАНДОМНОГО ПАРОЛЯ
function createPassword(){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let word = '';
    for(let i = 0; i < 6; i++){
        let number =  Math.floor(Math.random() * 100);
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
        word += number;
    }
    console.log(word);
    return word;
}

document.querySelector(".newPassword").addEventListener("click", suggestPassword);

function suggestPassword() {
    let value = document.querySelector("#password").value = createPassword();
    console.log(value);
}
//

// ПОКАЗАТЬ, СПРЯТАТЬ ПАРОЛЬ
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

const togglePassword1 = document.querySelector("#togglePassword1");
const password1 = document.querySelector("#password1");

togglePassword1.addEventListener("click", function () {
    // toggle the type attribute
    const type = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});
//

// ПРОВЕРКА ПУСТАЯ ЛИ ФОРМА
const form1 = document.forms[0];
const form2 = document.forms[1];

form1.addEventListener("submit", function (e){
    if(form1.password.value.length == 0 || form1.userName.value.length == 0){
        e.preventDefault();
    }
});

form2.addEventListener("submit", function (e){
    for(let i = 0; i < form2.elements.length - 1; i++){
        let x = form2[i].value.length;
        if(x == 0){
            e.preventDefault();
        }
    }
});

let errors = document.querySelectorAll(".red");
let inputs = document.querySelectorAll(".check");

form2.addEventListener("submit", showError);
function showError(){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value.length == 0){
            errors[i].style.display = "block";
        }else{
            errors[i].style.display = "none";
        }
    }
};

let errors1 = document.querySelectorAll(".red1");
let inputs1 = document.querySelectorAll(".check1");

form1.addEventListener("submit", showError1);
function showError1(){
    for(let i = 0; i < inputs1.length; i++){
        if(inputs1[i].value.length == 0){
            errors1[i].style.display = "block";
        }else{
            errors1[i].style.display = "none";
        }
    }
};


// let x = document.querySelector('.container');
// window.addEventListener("click", ()=>{
//     if(true){
//         let z = window.getComputedStyle(x).width;
//         const q = z.slice(0, -2);
//         const res = Math.floor(q);
//         if(Number(res) <= 970){
//             console.log(window.getComputedStyle(x).width)
//             document.querySelector('.bg').src = './img/image-1-2.jpg';
//             console.log(1)
//         }else{
//             document.querySelector('.bg').src = './img/image%201.jpg';
//         }
//     }
// })
