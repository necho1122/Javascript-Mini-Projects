const quest = document.querySelectorAll('.div-quest');

quest.forEach(button=>{
    const btn = button.querySelector('.button');

    const show_hd = button.querySelector('.answers');

    btn.addEventListener('click', ()=>{
        show_hd.classList.toggle('answers-show');
    });
});