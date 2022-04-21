(function(){
    
    let $html= document.querySelector('html');
    let $btn= document.querySelector('.header-nav__hamburggerParties');
    let $body = document.querySelector('body');
    
    $html.classList.remove('no-js');
    $html.classList.add('js');


    $btn.addEventListener('click',function(){
        $html.classList.toggle('menu-opened');
        $body.classList.toggle('menu-active');
    })
})()

window.scroll({
    top:0,
    behavior:'smooth'
});



const $Theme = document.getElementById('Theme');
const body = document.body;

$Theme.addEventListener('input', (e) => {
    const isChecked = e.target.checked;
    
    if(isChecked) {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
});