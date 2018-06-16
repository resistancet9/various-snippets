(()=>{
    const click = document.querySelector('#click');

    click.addEventListener('click', ()=>{
        document.querySelector('.overlay').classList.add('overlay-hide-show')
    })

    document.querySelector('.dropdown').addEventListener('click', (e)=>{
        console.log(e.target.value)
        if (e.target.classList.contains('cancel') || e.target.classList.contains('submit'))
            document.querySelector('.overlay').classList.remove('overlay-hide-show')
    })

})()