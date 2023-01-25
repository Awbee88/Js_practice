window.addEventListener('load', function () {

    let inp1 = document.querySelector('.num1');
    let inp2 = document.querySelector('.num2');
    let btnRun = document.querySelector('.btnRun');
    let resultBox = document.querySelector('.result');
    let operation = document.querySelector('.operation');

    btnRun.addEventListener('click', function () {
        let res;
        let op = operation.value;
        switch (op) {
            case '+':
                res = parseInt(inp1.value.replace(/[^+\d]/g, '')) + parseInt(inp2.value);
                resultBox.innerHTML = res;
                break;
            case '-':
                res = parseInt(inp1.value) - parseInt(inp2.value);
                resultBox.innerHTML = res;
                break;
            case '*':
                res = parseInt(inp1.value) * parseInt(inp2.value);
                resultBox.innerHTML = res;
                break;
            case '/':
                res = parseInt(inp1.value) / parseInt(inp2.value);
                resultBox.innerHTML = res;
                break;
            default:
                res = 0;
                break;
        }
        btnRun.setAttribute('disabled', true);
    });

    inp1.addEventListener('input', function () {
        inp1.value = inp1.value.replace(/[^\d]/g, '');
        btnRun.removeAttribute('disabled');
    });
    inp2.addEventListener('input', function () {
        inp2.value = inp1.value.replace(/[^\d]/g, '');
        btnRun.removeAttribute('disabled');
    });

});