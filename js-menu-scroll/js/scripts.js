window.addEventListener('load', function () {
	let menu = document.querySelector('.menu');
	let content = document.querySelector('.content');
	let marginTop = parseInt(getComputedStyle(content).marginTop, 10);


	// Функция, которая подсвечивает заголовки меню и скролит до них

	delegate(menu, 'a', 'click', function (e) {
		e.preventDefault();

		let target = document.querySelector(this.hash);
		let top = target.getBoundingClientRect().top + window.pageYOffset;
		scrollToElem(top, marginTop);
		// setActiveMenuItem(menu, this);
	});

	window.addEventListener('scroll', () => {
		let menuLinks = menu.querySelectorAll('a');
		let titleItems = document.querySelectorAll('h2');
		for (let i = titleItems.length - 1; i > -1; i--) {
			let titleOffset = titleItems[i].getBoundingClientRect().top + window.pageYOffset - 200;
			let curMenuLink = menuLinks[i];
			if (window.scrollY > titleOffset) {
				setActiveMenuItem(menu, curMenuLink);
				break;
			}
		}
	});



	const btnUp = {
		el: document.querySelector('.btn-up'),
		show() {
			// удалим у кнопки класс btn-up_hide
			this.el.classList.remove('btn-up_hide');
		},
		hide() {
			// добавим к кнопке класс btn-up_hide
			this.el.classList.add('btn-up_hide');
		},
		addEventListener() {
			// при прокрутке содержимого страницы
			window.addEventListener('scroll', () => {
				// определяем величину прокрутки
				const scrollY = window.scrollY || document.documentElement.scrollTop;
				// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
				scrollY > 400 ? this.show() : this.hide();
			});
			// при нажатии на кнопку .btn-up
			document.querySelector('.btn-up').onclick = () => {
				// переместим в начало страницы
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}
		}
	}

	btnUp.addEventListener();

});

function delegate(box, selector, eventName, handler) {
	box.addEventListener(eventName, function (e) {
		let elem = e.target.closest(selector);

		if (elem !== null && box.contains(elem)) {
			handler.call(elem, e);
		}
	});
}

function setActiveMenuItem(menu, item) {
	menu.querySelectorAll('a').forEach(link => link.classList.remove('menu__link-active'));
	item.classList.add('menu__link-active');
}

function scrollToElem(pos, margin) {

	pos = pos - margin;

	window.scrollTo({
		top: pos,
		behavior: "smooth"
	});
}
