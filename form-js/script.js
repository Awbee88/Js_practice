window.addEventListener('load', function () {

    let form = document.querySelector('.form');
    let inputs = document.querySelectorAll('.check');

    form.addEventListener('submit', function (e) {

        let hasError = false;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length == 0) {
                inputs[i].classList.add('err');
                hasError = true;
            }
        }

        if (hasError) {
            e.preventDefault();
        }
    });

    form.addEventListener('click', function (e) {
        // console.log(e.target);
        removeErr(e.target);
    });

    // for (let i = 0; i < inputs.length; i++) {
    //     inputs[i].addEventListener('focus', function () {
    //         inputs[i].classList.remove('err');
    //     })
    // }

    function removeErr(el) {
        el.classList.remove('err');
    }

});