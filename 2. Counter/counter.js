window.onload = function() {
    let counter = 0;

    const counterValue = document.querySelector('#counter');
    const incrementDOM = document.querySelector('#btn-increment');
    const decrementDOM = document.querySelector('#btn-decrement');

    incrementDOM.addEventListener('click', increment=>{
        counter++;
        document.querySelector('#counter').innerHTML = counter;
    })


    decrementDOM.addEventListener('click', decrement=>{
        counter--;
        document.querySelector('#counter').innerHTML = counter;
    })

    document.querySelector('#btn-reset').addEventListener('click', reset=>{
        counter = 0;
        document.querySelector('#counter').innerHTML = counter;
    })
}