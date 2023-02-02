window.addEventListener('load', function() {

    let page1 = document.querySelector('.page-one');
    let page2 = document.querySelector('.page-two');



    setTimeout(changePage, 4000);


    function changePage() {
        page1.classList.remove('open');
        page1.classList.add('closing');
        page2.classList.remove('closing');
        page2.classList.add('open');
    }
});
