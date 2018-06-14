(function(){
    var open_close = document.querySelector('#open_close');
    var overlay = document.querySelector('.overlay');

    overlay.addEventListener('mouseover', function(){
        overlay.classList.toggle('show_hide');    
    })

    overlay.addEventListener('mouseout', function(){
        overlay.classList.toggle('show_hide');    
    })
})()