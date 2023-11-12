const resp_navbar = document.querySelector('.bar_list');
const button_hs = document.querySelectorAll('.button');

button_hs.forEach(button=>{

    button.addEventListener('click', function(e){
        let display_hide = e.currentTarget.classList;

        if(display_hide.contains('button')){
            resp_navbar.classList.toggle('bar_list_2');
        }
    });
});

const button_2 = document.querySelectorAll('.button_2');
const menu_option = [...document.querySelectorAll('.menu_option')];
const user_log = [...document.querySelectorAll('.bar_list')];
const container = document.querySelector('.navbar_container');

button_2.forEach(button_2=>{
    button_2.addEventListener('click', ele=>{
        ele.currentTarget.classList;
        menu_option.forEach(el=>{
            el.classList.toggle('menu_option_2')
        });
        user_log.forEach(tog=>{
            tog.classList.toggle('bar_list_2');
        });
        container.classList.toggle('container_2');
    });
});

/*const menu_option = [...document.querySelectorAll('.menu_option')];

menu_option.forEach(event=>{
    event.classList.add('menu_option_2');
});*/

/*if(window.matchMedia("(min-width: 900px)").matches){
    menu_option.forEach(element=>{
        element.classList.add('menu_option_2');
    });
}*/
