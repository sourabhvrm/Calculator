const calculatorOperations = {
    isFirstNum: true,
    firstNum: "",
    secondNum: "",
    operation: "",
    takeInput(number) {
        if (this.isFirstNum) {
            this.firstNum += number;
        }
        else {
            this.secondNum += number;
        }
        return this.returnValue();
    },
    Add() {
        this.operation = "+";
        this.isFirstNum = !this.isFirstNum;
        return this.returnValue();
    },
    Sub() {
        this.operation = "-";
        this.isFirstNum = !this.isFirstNum;
        return this.returnValue();
    },
    Mul() {
        this.operation = "*";
        this.isFirstNum = !this.isFirstNum;
        return this.returnValue();
    },
    Div() {
        this.operation = "/";
        this.isFirstNum = !this.isFirstNum;
        return this.returnValue();
    },
    Equal() {
        if(isNaN(parseFloat(this.firstNum))||isNaN(parseFloat(this.secondNum))){
            return "Error";
        }
        this.firstNum = parseFloat(this.firstNum);
        this.secondNum = parseFloat(this.secondNum);
        var result;
        switch (this.operation) {
            case "+":
                result= this.firstNum + this.secondNum;
                break;
            case "-":
                result= this.firstNum - this.secondNum;
                break;
            case "*":
                result= this.firstNum * this.secondNum;
                break;
            case "/":
                result= this.firstNum / this.secondNum;
                break;
        }
        this.operation="";
        return result;
    },
    Decimal() {
        return this.takeInput(".");
    },
    CE() {
        this.firstNum = "";
        this.secondNum = "";
        this.operation="";
        this.isFirstNum=true;
        return 0;
    },
    C() {
        if (this.isFirstNum) {
            this.firstNum = "";
        } else {
            this.secondNum = "";
        }
        return this.returnValue();
    },
    Del() {
        if (this.isFirstNum) {
            this.firstNum = this.firstNum.slice(0, -1);
            return this.returnValue();
        } else {
            this.secondNum = this.secondNum.slice(0, -1);
            return this.returnValue();
        }
    },
    returnValue(){
        return this.firstNum + this.operation + this.secondNum;
    }
}