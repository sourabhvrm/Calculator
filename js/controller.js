window.addEventListener("DOMContentLoaded", init);
// window.addEventListener("keyup", keyUpEvent);

function init() {
    createButtons();
    registerEvents();
}

function registerEvents() {
    var buttons = document.querySelectorAll("button");
    // for (let button of buttons) {
    //     button.addEventListener("click", ButtonListener);
    // }

    // buttons.forEach(function (value) {
    //     value.addEventListener("click", ButtonListener);
    // });

    buttons.forEach(button => button.addEventListener("click", ButtonListener));
}

function createButtons() {
    var buttonVal = [
        ["CE", "CE"],
        ["C", "C"],
        ["Del", "Del"],
        ["Div", "/"],
        ["7", "7"],
        ["8", "8"],
        ["7", "7"],
        ["Mul", "X"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["Sub", "-"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["Add", "+"],
        [" ", " "],
        ["0", "0"],
        ["Decimal", "."],
        ["Equal", "="]
    ];
    buttonVal.forEach(value=>{
        let buttonTag = `<section class="col-md-3 col-sm-3 col-buttons">
        <button class="btn btn-default btn-lg" data-val="${value[0]}">${value[1]}</button>
        </section>`;
        document.querySelector("#row-btn").innerHTML += buttonTag;
    });
}

function ButtonListener() {
    var screen = document.querySelector("#screen");
    if (parseInt(this.getAttribute("data-val")) || parseInt(this.getAttribute("data-val")) == 0) {
        screen.innerText = calculatorOperations.takeInput(this.getAttribute("data-val"));
    }
    else {
        screen.innerText = calculatorOperations[this.getAttribute("data-val")]();
    }
    //Instead of using id use custom attribute for buttons
    // console.log(`First Number : ${calculatorOperations.firstNum}`);
    // console.log(`Second Number : ${calculatorOperations.secondNum}`);
}

function keyUpEvent(event) {
    var num = event.keyCode - 96 + "";
    var screen = document.querySelector("#screen");
    if (parseInt(num)) {
        console.log(num);
        screen.innerText = calculatorOperations.takeInput(num);
    }
}