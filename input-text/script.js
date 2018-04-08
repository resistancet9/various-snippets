document.querySelector('.container .text input').addEventListener('focus', function(){
    document.querySelector('.container').style.background = "#f75b25";
    document.querySelector('.container .logo').style.color = "#eee";
    document.querySelector('.container .logo').style.borderColor = "#eee";
    document.querySelector('.container .text input').style.color = "#eee";
    document.querySelector('.container .text input').classList.add('placeholder-color');
})

document.querySelector('.container .text input').addEventListener('focusout', function(){
    document.querySelector('.container').style.background = "";
    document.querySelector('.container .logo').style.color = "#333";
    document.querySelector('.container .logo').style.borderColor = "#333";
    document.querySelector('.container .text input').style.color = "#333";
    document.querySelector('.container .text input').classList.remove('placeholder-color');
})