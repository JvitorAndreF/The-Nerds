(function(){
    
    //código para criar evento do menu
    var $html= document.querySelector('html');
    var $btn= document.querySelector('.header-nav__hamburggerParties')


    // codigo para ver se o js esta ativo e dar solução caso não
    $html.classList.remove('no-js');
    $html.classList.add('js');


    $btn.addEventListener('click',function(){
        $html.classList.toggle('menu-opened');
    })
})()


function Apresenta(){
    
}