window.addEventListener('load', function () {

    let form = document.querySelector('.form');
    let inputs = document.querySelectorAll('.check');
    let dataValids = {
        name: [new RegExp(/^[аА-яЯaA-zZ]{2,10}/), "Поле должно содержать от 2 до 10 букв"],
        phone: [new RegExp(/^[8]\d{10}/), "В поле должно быть 11 цифр, начиная с цифры 8"],
        email: [new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu), "В поле должен быть корректный email"]
    };

    form.addEventListener('submit', function (e) {

        let hasError = false;

        for (let i = 0; i < inputs.length; i++) {
            let reg = dataValids[inputs[i].dataset.valid][0];
            let errText = dataValids[inputs[i].dataset.valid][1];
            let tagErrText = document.createElement('div');

            if (reg !== undefined && !reg.test(inputs[i].value)) {
                inputs[i].classList.add('err');
                if (!inputs[i].nextElementSibling.classList.contains('errText')) {
                    form.insertBefore(tagErrText, inputs[i].nextElementSibling);
                    tagErrText.classList.add('errText');
                    tagErrText.innerText = errText;
                }
                hasError = true;
            }
        }

        if (hasError) {
            e.preventDefault();
        }

    });
    delegate(form, 'input', 'focusin', removeErr);


    // form.addEventListener('click', function (e) {
    //     removeErr(e.target);
    // let elem = e.target.closest('.errText');
    // console.log(elem);
    // elem.remove();
    // });


    // for (let i = 0; i < inputs.length; i++) {
    //     inputs[i].addEventListener('focus', function () {
    //         inputs[i].classList.remove('err');
    //     })
    // }


});

function removeErr() {
    this.classList.remove('err');
    if (this.nextElementSibling.classList.contains('errText')) {
        this.nextElementSibling.remove();
    }
}

function delegate(box, selector, eventName, handler) {
    box.addEventListener(eventName, function (e) {
        let elem = e.target.closest(selector);

        if (elem !== null && box.contains(elem)) {
            handler.call(elem, e);
        }
    });
}