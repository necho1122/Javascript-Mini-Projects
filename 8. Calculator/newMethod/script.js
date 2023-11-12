const ALL_BUTTONS = {
    seven: 7,
    eight: 8,
    nine: 9,
    four: 4,
    five: 5,
    six: 6,
    one: 1,
    two: 2,
    three: 3,
    zero: 0,
    multi: "*",
    divide: "/",
    plus: "+",
    minus: "-",
    clear: "",
    equal: "=",
    dot: ".",
    leftBra: "(",
    rightBra: ")"
};

const BUTTONS = document.querySelectorAll('.buttons');
const SCREEN = document.getElementById('in_screen');

let result = [];

BUTTONS.forEach(button=>{
    button.addEventListener('click', e=>{
        e.currentTarget.classList;
        if(button.classList.contains('seven')){
            SCREEN.textContent = ALL_BUTTONS.seven;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('eight')){
            SCREEN.textContent = ALL_BUTTONS.eight;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('nine')){
            SCREEN.textContent = ALL_BUTTONS.nine;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('multi')){
            SCREEN.textContent = ALL_BUTTONS.multi;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('four')){
            SCREEN.textContent = ALL_BUTTONS.four;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('five')){
            SCREEN.textContent = ALL_BUTTONS.five;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('six')){
            SCREEN.textContent = ALL_BUTTONS.six;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('divide')){
            SCREEN.textContent = ALL_BUTTONS.divide;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('one')){
            SCREEN.textContent = ALL_BUTTONS.one;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('two')){
            SCREEN.textContent = ALL_BUTTONS.two;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('three')){
            SCREEN.textContent = ALL_BUTTONS.three;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('plus')){
            SCREEN.textContent = ALL_BUTTONS.plus;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('zero')){
            SCREEN.textContent = ALL_BUTTONS.zero;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('dot')){
            SCREEN.textContent = ALL_BUTTONS.dot;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('minus')){
            SCREEN.textContent = ALL_BUTTONS.minus;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('left-bra')){
            SCREEN.textContent = ALL_BUTTONS.leftBra;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('right-bra')){
            SCREEN.textContent = ALL_BUTTONS.rightBra;
            result.push(SCREEN.textContent);
            SCREEN.textContent = result.join('');
        }
        if(button.classList.contains('equal')){
            SCREEN.textContent = result.join('');
            document.getElementById('test').textContent = SCREEN.textContent;
            scrStr = document.getElementById('test').textContent;
            document.getElementById('test').textContent = eval(SCREEN.textContent);
            result = [];
            SCREEN.textContent = "Result";


        }if(button.classList.contains('clean')){
            result =[];
            SCREEN.textContent = "";
            document.getElementById('test').textContent = result;

        }
        
    });
});




/* const operate = operation =>{
    const [ope1, operator, ope2] = operation;
    return OPERATION_MAP[operator]?.(+ope1, +ope2) || 'not allowed';
}*/