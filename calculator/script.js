window.addEventListener('load', function () {

    let inp1 = document.querySelector('.num1');
    let inp2 = document.querySelector('.num2');
    let btnRun = document.querySelector('.btnRun');
    let resultBox = document.querySelector('.result');
    let operation = document.querySelector('.operation');

    btnRun.addEventListener('click', function () {
        let res;
        let op = operation.value;
        let num1 = parseInt(inp1.value);
        let num2 = parseInt(inp2.value);
        switch (op) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num1 / num2;
                break;
            default:
                res = 0;
                break;
            }

        resultBox.innerHTML = res;
        // btnRun.setAttribute('disabled', true); Через атрибуты работать неверно, потому что они не связаны с элементами ДОМ
        btnRun.disabled = true;
    });
    
    inp1.addEventListener('input', cleanInput);
    inp2.addEventListener('input', cleanInput);

    inp1.addEventListener('input', enableBtn);
    inp2.addEventListener('input', enableBtn);
    operation.addEventListener('input', enableBtn);

    function enableBtn() {
        // btnRun.removeAttribute('disabled'); Через атрибуты работать неверно, потому что они не связаны с элементами ДОМ
        btnRun.disabled = false;
    }
    function cleanInput() {
        this.value = this.value.replace(/[^\d]/g, '');
    }
});