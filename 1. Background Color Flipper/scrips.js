const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.button');
const colorId = document.querySelector('#color-id');
const forMix = ['A', 'B', 'C', 'D', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function colorMixed(){
    let y = '#';
    for(i=0; i<6; i++){
        y += forMix[ranNum()];
    }
    colorId.textContent = y;
    return y;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(e){
        const colorback = e.currentTarget.classList;

        if(colorback.contains('button')){
            container.style.backgroundColor = colorMixed();
        }
    })
})

function ranNum () {
    return Math.floor(Math.random() * forMix.length);
} 