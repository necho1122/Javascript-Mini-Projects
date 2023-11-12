let counter = 0;
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.button');

buttons.forEach (button => {
    button.addEventListener('click', function(e){
        const parameter = e.currentTarget.classList;

        if(parameter.contains('decrease')){
            counter--;
        }
        else if(parameter.contains('increase')){
            counter++;
        }
        else{
            counter = 0;
        }
        value.textContent = counter;

        if(counter>0){
            value.style.color = '#009900';
        }
        if(counter<0){
            value.style.color = '#ff3333';
        }
        if(counter===0){
            value.style.color = '#fff';
        }
    })
})