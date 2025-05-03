let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('#signup-btn').onclick = () => {
    document.querySelector('.signup-form-container').classList.toggle('active');
}

document.querySelector('#close-signup-btn').onclick = () => {
    document.querySelector('.signup-form-container').classList.remove('active');
}

window.addEventListener('scroll',function() {

    if(window.scrollY > 60){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }

});




window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header-2').classList.add('active');
    } else {
        document.querySelector('header-2').classList.remove('active');
    }
}





let wrapper = document.querySelector('.wraper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeLable = document.querySelector('.activeCircle').querySelectorAll('.fa-circle')
let nextBtn = document.querySelector('#nextBtn');
let preBtn = document.querySelector('#preBtn');
let imgInd = 0;

nextBtn.onclick = ()=>{
    imgInd++;
    changeBox();
}

preBtn.onclick = ()=>{
    imgInd--;
    changeBox();
}

let changeBox = () =>{
    
    if(imgInd > activeBox.length - 1){
        imgInd = 0;
    } else if(imgInd < 0){
        imgInd = activeBox.length - 1;
    }

    for(let i = 0; i < activeBox.length; i++){
        if(i === imgInd){
            activeBox[i].classList.add('active');
            activeLable[i].classList.add('fa-solid');
            if(window.screen.width > 450){
                wrapper.style.transform = `translateX(${imgInd * -250}px)`;
            }
            
        } else{            
            activeBox[i].classList.remove('active');
            activeLable[i].classList.remove('fa-solid');
        }
    }
}





let fwrapper = document.querySelector('.featured-wrapper-box');
let fActBox = fwrapper.querySelectorAll('.box');
let FActLable = document.querySelector('.fActCircle').querySelectorAll('.fa-circle')
let fNextBtn = document.querySelector('#fNextBtn');
let fPreBtn = document.querySelector('#fPreBtn');

let fImgInd = 0;

fNextBtn.onclick = ()=>{
    fImgInd++;
    fChangeBox();
}

fPreBtn.onclick = ()=>{
    fImgInd--;
    fChangeBox();
}

let fChangeBox = () =>{
    
    if(fImgInd > fActBox.length - 1){
        fImgInd = 0;
    } else if(fImgInd < 0){
        fImgInd = fActBox.length - 1;
    }

    for(let i = 0; i < fActBox.length; i++){
        if(i === fImgInd){
            fActBox[i].classList.add('active');
            FActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                fwrapper.style.transform = `translateX(${fImgInd * -21}vw)`;
            }
            
        } else{            
            fActBox[i].classList.remove('active');
            FActLable[i].classList.remove('fa-solid');
        }
    }
}



let rWrapper = document.querySelector('.review-wrapper-box');
let rActBox = rWrapper.querySelectorAll('.box');
let rActLable = document.querySelector('.rActCircle').querySelectorAll('.fa-circle')
let rNextBtn = document.querySelector('#rNextBtn');
let rPreBtn = document.querySelector('#rPreBtn');

let rImgInd = 0;

rNextBtn.onclick = ()=>{
    rImgInd++;
    rChangeBox();
}

rPreBtn.onclick = ()=>{
    rImgInd--;
    rChangeBox();
}

let rChangeBox = () =>{
    
    if(rImgInd > rActBox.length - 1){
        rImgInd = 0;
    } else if(rImgInd < 0){
        rImgInd = rActBox.length - 1;
    }
    for(let i = 0; i < rActBox.length; i++){
        if(i === rImgInd){
            rActBox[i].classList.add('active');
            rActLable[i].classList.add('fa-solid');
            if(window.screen.width > 768){
                rWrapper.style.transform = `translateX(${rImgInd * -20}vw)`;
            }  
        } else{            
            rActBox[i].classList.remove('active');
            rActLable[i].classList.remove('fa-solid');
        }
    }
}

const form = document.getElementById('lform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');
const dob = document.getElementById('dateofbirth')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const numberValue = number.value.trim();
    const dobValue = dob.value.trim();
    

    if(usernameValue === '') {


        setErrorFor(username, 'Full name cannot be blank');
    } else if(!isUsername(usernameValue)) {
        setErrorFor(username, 'Enter a valid First and Last Name');
    }
     else {

        setSuccessFor(username);
    }
    
    if(emailValue === '') {

        setErrorFor(email, 'Email cannot be blank');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Please enter a Valid Email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {

        setErrorFor(password, 'Password cannot be blank');
        
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'Please enter a valid password (at least 8 characters, one uppercase, one lowercase, and one number');
    } else {
        setSuccessFor(password);
    }
     
    if(numberValue === '') {

        setErrorFor(number, 'Mobile Number cannot be blank');

    } else if (!isNumber(numberValue)) {
        setErrorFor(number, 'Please enter a valid 10-digit mobile number');
    } else {
        setSuccessFor(number);
    }

    if(dobValue === '') {

        setErrorFor(dob, 'Date of Birth cannot be blank');

    } else {
        setSuccessFor(dob);
    }

}


function setErrorFor(input, message) {
    const inputControl = input.parentElement;
    const small = inputControl.querySelector('small');

    small.innerText = message;

    inputControl.className = 'input-control error';
}

function setSuccessFor(input) {
    const inputControl = input.parentElement;
    inputControl.className = 'input-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}


function isNumber(number) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number);
}

function isUsername(username) {
    return /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(username);
}

const form1 = document.getElementById('form1');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const emailValue = email1.value.trim();
    const passwordValue = password1.value.trim();

    if(emailValue === '') {

        setErrorFor(email1, 'Email cannot be blank');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email1, 'Please enter a Valid Email');
    } else {
        setSuccessFor(email1);
    }

    if(passwordValue === '') {

        setErrorFor(password1, 'Password cannot be blank');
        
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password1, 'Please enter a valid password (at least 8 characters, one uppercase, one lowercase, and one number');
    } else {
        setSuccessFor(password1);
    }

}
    