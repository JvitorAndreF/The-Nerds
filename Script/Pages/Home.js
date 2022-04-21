(function(){
    
    //código para criar evento do menu
    let $html= document.querySelector('html');
    let $btn= document.querySelector('.header-nav__hamburggerParties');
    let $body = document.querySelector('body');
    
    // codigo para ver se o js esta ativo e dar solução caso não
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