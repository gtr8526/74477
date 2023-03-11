const signinInBtn = document.querySelector('.signin-btn');
const signinUpBtn = document.querySelector('.signin-btn'); 
const formBox = document.querySelector ('.form-box');
signinUpBtn.addEventListener('click',function (){
    formBox.classList.add('active');
});
signinInBtn.addEventListener('click',function (){
    formBox.classList.remove('active');
});
