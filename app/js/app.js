const widthScrollBar = () => {
	let div = document.createElement("div");
	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();
	return scrollWidth;
}

const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;
	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
}

const createAnnounceSlider = () => {
	let slider = new Swiper(".announce__slider", {
		slidesPerView: 1,
		spaceBetween: 12,
		pagination: {
			el: ".announce__slider-pagination",
			clickable: true,
		},
	});
};
createAnnounceSlider();

const createPartnersSlider = () => {
	let slider = new Swiper(".partners-slider", {
		spaceBetween: 8,
		navigation: {
			nextEl: ".partners-slider-next",
			prevEl: ".partners-slider-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 2.5,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
			},
		},
	});
};
createPartnersSlider();

const createReviewsSlider = () => {
	let config = {
		spaceBetween: 18,
		navigation: {
			nextEl: ".reviews-slider-next",
			prevEl: ".reviews-slider-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.1,
			},
			576: {
				slidesPerView: 2,
			},
		},
	};
	let slider = new Swiper(".reviews-slider", config);

	let filter = document.querySelector(".filter");
	if (!filter) return false;
	let btns = filter.querySelectorAll(".filter__btn");
	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			filter.querySelector(".filter__btn.active").classList.remove("active");
			e.target.classList.add("active");
			let type = e.target.dataset.type;
			let filterItemsBlock = document.querySelector(".filter-items");
			let itemsAll = filterItemsBlock.querySelectorAll(`div[data-filter-item]`);
			if (type === "all") {
				itemsAll.forEach((item) => {
					item.classList.add("swiper-slide");
					item.classList.remove("non-swiper-slide");
				});
			} else {
				itemsAll.forEach((item) => {
					item.classList.add("swiper-slide");
					item.classList.remove("non-swiper-slide");
				});
				let itemsFilter = filterItemsBlock.querySelectorAll(`div[data-filter-item]:not([data-filter-item=${type}])`);
				itemsFilter.forEach((item) => {
					item.classList.remove("swiper-slide");
					item.classList.add("non-swiper-slide");
				});
			}

			slider.destroy();
			slider = new Swiper(".reviews-slider", config);
		});
	});
};
createReviewsSlider();

const createHeroSlider = () => {
	let slider = new Swiper(".hero-slider", {
		slidesPerView: 1,
		spaceBetween: 12,
		pagination: {
			el: ".hero-slider__pagination",
			clickable: true,
		},
	});
	slider.on("slideChange", function (e) {
		let prevSlide = slider.slides[slider.previousIndex];
		if (prevSlide.querySelector('video')) {
			prevSlide.querySelector('video').pause();
		}
		let slide = slider.slides[slider.activeIndex];
		if (slide.querySelector('video')) {
			slide.querySelector('video').play();
		}
	});
};
createHeroSlider();


let initServiceSlider = false;
let serviceSlider;
const createServiceSlider = () => {
	if (!document.querySelector(".service-slider")) return false;
	let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");
	let desktop = window.matchMedia("(min-width: 768px)");

	if (mobile.matches) {
		if (!initServiceSlider) {
			initServiceSlider = true;
			serviceSlider = new Swiper(".service-slider", {
				slidesPerView: "auto",
				spaceBetween: 14,
				pagination: {
					el: ".service-slider__pagination",
					clickable: true,
				},
			});
		}
	} else if (desktop.matches) {
		if (serviceSlider) {
			serviceSlider.destroy();
			initServiceSlider = false;
		}
	}
}

let initServiceGallerySlider = false;
let serviceGallerySlider;
const createServiceGallerySlider = () => {
	if (!document.querySelector(".service-gallery-slider")) return false;
	let mobile = window.matchMedia("(min-width: 0px) and (max-width: 575px)");
	let desktop = window.matchMedia("(min-width: 576px)");

	if (mobile.matches) {
		if (!initServiceGallerySlider) {
			initServiceGallerySlider = true;
			serviceGallerySlider = new Swiper(".service-gallery-slider", {
				slidesPerView: 1.1,
				spaceBetween: 20,
				pagination: {
					el: ".service-gallery-slider__pagination",
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 6
				},
			});
		}
	} else if (desktop.matches) {
		if (serviceGallerySlider) {
			serviceGallerySlider.destroy();
			initServiceGallerySlider = false;
		}
	}
}

window.addEventListener("load", () => {
	createServiceSlider();
	createServiceGallerySlider();
});

window.addEventListener("resize", () => {
	createServiceSlider();
	createServiceGallerySlider();
});

const createCertificateSlider = () => {
	let slider = new Swiper(".certificate-slider", {
		slidesPerView: 2,
		pagination: {
			el: ".certificate__pagination",
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 6
		},
		breakpoints: {
			0: {
				slidesPerView: 1.15,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			768: {
				spaceBetween: 40,
			},
		},
		navigation: {
			nextEl: ".certificate-slider-next",
			prevEl: ".certificate-slider-prev",
		},
	});
};
createCertificateSlider();

const header = document.querySelector(".header");
const togglemenu = document.querySelector("#toggle-menu");
const menu = document.querySelector(".menu");
const overlay = document.querySelector('.header__overlay');
const menuClose = document.querySelector('.menu__close');
var scrollPrev = 0;
togglemenu.addEventListener("click", () => {
	togglemenu.classList.add("on");
	menu.classList.add("on");
	overlay.classList.add("active");
	document.body.classList.add("noscroll");
});
menuClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
	togglemenu.classList.remove("on");
	menu.classList.remove("on");
	overlay.classList.remove("active");
	document.body.classList.remove("noscroll");
}

window.addEventListener("resize", () => {
	if (window.outerWidth >= 992) {
		closeMenu();
	}
});

const openMenu = (e) => {
	if (e.currentTarget.parentElement.classList.contains("open")) {
		e.currentTarget.nextElementSibling.style.maxHeight = "0";
		e.currentTarget.parentElement.classList.remove("open");
	} else {
		e.currentTarget.nextElementSibling.style.maxHeight = 8 + e.currentTarget.nextElementSibling.scrollHeight + "px";
		e.currentTarget.parentElement.classList.add("open");
	}
}
let menuSubBtns = document.querySelectorAll(".menu__item-svg-block");
menuSubBtns.forEach((el) => {
	el.addEventListener("click", openMenu);
});

const openShedule = (e) => {
	document.querySelector(".shedule-btn.active").classList.remove("active");
	document.querySelector(".shedule-content.active").classList.remove("active");
	let trg = e.target;
	trg.classList.add("active");
	document.querySelector(`.shedule-content[data-tab-content="${trg.dataset.tab}"]`).classList.add("active");
}

let sheduletTabs = document.querySelectorAll(".shedule-btn");
if (sheduletTabs) {
	document.querySelector('.shedule-btn.active') ? document.querySelector('.shedule-btn.active').closest('.tabs').scrollLeft = document.querySelector('.shedule-btn.active').getBoundingClientRect().left - 12 : '';
	sheduletTabs.forEach((el) => {
		el.addEventListener("click", openShedule);
	});
}

const openModal = (e) => {
	e.preventDefault();
	let modal = e.currentTarget.dataset.idModal ? document.getElementById(e.currentTarget.dataset.idModal) : document.getElementById("modal-callback");
	let wsb = widthScrollBar();
	fadeIn(modal, 300, "flex");
	document.body.classList.add("noscroll");
	document.querySelector(".header").style.paddingRight = wsb + "px";
	document.querySelector(".footer").style.paddingRight = wsb + "px";
	document.querySelector(".main").style.paddingRight = wsb + "px";
}

let btnModals = document.querySelectorAll(".btn-modal");
btnModals.forEach((el) => {
	el.addEventListener("click", (e) => {
		openModal(e);
	});
});

const closeModal = (e) => {
	if (e.target.closest('.modal__close') || e.target.classList.contains('modal')) {
		fadeOut(e.currentTarget, 300);
		setTimeout(() => {
			document.body.classList.remove("noscroll");
			document.querySelector(".header").style.paddingRight = "0px";
			document.querySelector(".footer").style.paddingRight = "0px";
			document.querySelector(".main").style.paddingRight = "0px";
		}, 300);
	}
}
let modals = document.querySelectorAll('#modal-program, #modal-callback');
modals.forEach(el => {
	el.addEventListener('click', closeModal);
});

const closeModalProgramAndScrollPage = (e) => {
	e.preventDefault();
	let modal = e.currentTarget.closest('.modal');
	fadeOut(modal, 300);
	setTimeout(() => {
		document.body.classList.remove("noscroll");
		document.querySelector(".header").style.paddingRight = "0px";
		document.querySelector(".footer").style.paddingRight = "0px";
		document.querySelector(".main").style.paddingRight = "0px";
	}, 300);
	setTimeout(() => {
		window.scrollTo({
			top: document.querySelector('#intensive_sign_form').getBoundingClientRect().top + window.pageYOffset,
			behavior: 'smooth',
		});
	}, 300);
}

document.querySelector('.btn-modal-program') && document.querySelector('.btn-modal-program').addEventListener('click', closeModalProgramAndScrollPage);

Array.prototype.forEach.call(
	document.querySelectorAll('.simple-bar'),
	(el) => new SimpleBar(el), {
		autohide: false,
	});

let galleries = document.querySelectorAll(".lg");
for (let i = 0; i < galleries.length; i++) {
	lightGallery(galleries[i], {
		thumbnail: false,
		selector: ".lg-item",
		download: false,
		enableDrag: true,
		enableTouch: true,
	});
}

wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 0,
	mobile: true,
	live: true
})
wow.init();


let modalVideo = document.querySelector('#modal-video');
const openYoutubeVideo = (e) => {
	let target = e.currentTarget;
	let wsb = widthScrollBar();
	let src = target.dataset.src;
	let iframeSrc = `https://www.youtube.com/embed/${youtube_parser(src)}`;
	if (target.classList.contains('video-rutube')) iframeSrc = `https://rutube.ru/play/embed/${rutube_get_id(src)}/`;
	if (target.classList.contains('video-local')) iframeSrc = src;

	if (modalVideo !== null && !modalVideo.classList.contains("active")) {
		modalVideo.querySelector('iframe').src = iframeSrc;
		fadeIn(modalVideo, 300, "flex");
		document.body.classList.add("noscroll");
		document.querySelector(".header").style.paddingRight = wsb + "px";
		document.querySelector(".footer").style.paddingRight = wsb + "px";
		document.querySelector(".main").style.paddingRight = wsb + "px";
		setTimeout(() => {
			modalVideo.classList.add("active");
		}, 300);
	}
}
let videos = document.querySelectorAll('.video-youtube');
videos.forEach(el => {
	el.addEventListener("click", openYoutubeVideo);
});


const closeYoutubeVideo = (e) => {
	if (e.target.closest('.modal__close') || e.target.classList.contains('modal')) {
		modalVideo.querySelector('iframe').src = '';
		fadeOut(modalVideo, 300);
		setTimeout(() => {
			modalVideo.classList.remove("active");
			document.body.classList.remove("noscroll");
			document.querySelector(".header").style.paddingRight = "0px";
			document.querySelector(".footer").style.paddingRight = "0px";
			document.querySelector(".main").style.paddingRight = "0px";
		}, 300);
	}
}
if (modalVideo) modalVideo.addEventListener('click', closeYoutubeVideo);


const youtube_parser = (url) => {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	var match = url.match(regExp);
	return (match && match[7].length == 11) ? match[7] : false;
}

const rutube_get_id = (url) => {
	let result = URL.parse(url).pathname;
	result = result.replace('video', '');
	result = result.replaceAll('/', '');
	return result;
}


const loadYoutubeThumb = () => {
	videos.forEach(el => {
		let src = el.dataset.src;
		if (el.classList.contains('video-rutube')) {
			let proxyUrl = 'https://api.allorigins.win/get?url=';
			let targetUrl = `https://rutube.ru/api/video/${rutube_get_id(src)}/thumbnail/`;
			fetch(proxyUrl + encodeURIComponent(targetUrl))
				.then(response => {
					if (response.ok) return response.json()
					throw new Error('Network response was not ok.')
				})
				.then(data => {
					el.querySelector('.video-item__img').src = JSON.parse(data.contents).url;
				}).catch(err => {
					console.error(err);
				});
		} else if (el.classList.contains('video-local')) {} else {
			el.querySelector('.video-item__img').src = `https://img.youtube.com/vi/${youtube_parser(src)}/maxresdefault.jpg`;
		}
	});
}
// document.addEventListener("DOMContentLoaded", loadYoutubeThumb);

const formMessageResponse = (check, msg = '') => {
	if (document.querySelector('.form-message-response')) document.querySelector('.form-message-response').remove();
	let div = document.createElement('div');
	div.classList.add('form-message-response');
	check === true ? div.classList.add('form-message-response__success') : div.classList.add('form-message-response__error');
	div.textContent = msg ? msg : (check === true ? 'Сообщение успешно отправлено!' : 'Заполните обязательные поля!');
	// div.textContent = 'Сообщение успешно отправлено!';

	document.querySelector('body').insertAdjacentElement('beforebegin', div);
	setTimeout(() => {
		div.classList.add('active');
		setTimeout(() => {
			div.classList.remove('active');
			setTimeout(() => {
				div.remove();
			}, 500);
		}, 3000);
	}, 10);
}

const sendForm = (event) => {
	event.preventDefault();
	let form = event.target;
	let action = form.getAttribute('action');
	if (!action) return false;
	let btn = form.querySelector('button');
	let btnText = btn.querySelector('.btn__text').textContent;
	btn.setAttribute('disabled', 'disabled');
	btn.querySelector('.btn__text').textContent = 'Загрузка...';
	let formData = new FormData(form);
	formData.append("action", action);
	fetch('/wp-admin/admin-ajax.php', {
			method: "POST",
			body: formData,
		})
		.then(response => response.json())
		.then((data) => {
			if (data.result === 'ok') {
				formMessageResponse(true, data.message);
				btn.querySelector('.btn__text').textContent = btnText;
				btn.removeAttribute('disabled');
				form.reset();
			} else if (data.result === 'false') {
				formMessageResponse(false, data.message);
				btn.querySelector('.btn__text').textContent = btnText;
				btn.removeAttribute('disabled');
				let inputs = form.querySelectorAll('input');
				inputs.forEach(el => {
					el.addEventListener('input', () => {
						el.removeAttribute("style");
						el.classList.remove("error");
					});
				});
				if (data.errors) {
					for (let el in data.errors) {
						document.querySelector(`input[name=${el}]`).style.borderColor = "#CE2C2C";
						document.querySelector(`input[name=${el}]`).classList.add('error');
					}
				}
			}
		});
}

document.querySelectorAll('.form').forEach(el => {
	el.addEventListener('submit', sendForm);
});

const grid = document.querySelector('.grid');
if (grid) {
	imagesLoaded(grid, function () {
		var msnry = new Masonry(grid, {
			percentPosition: true,
			gutter: '.grid__gutter',
			itemSelector: '.grid__item',
			// horizontalOrder: true
		});
	});
}

const wrapTagInDiv = (el, wrapClass = 'wrapclass') => {
	let div = document.createElement("div");
	div.classList.add(wrapClass);
	el.parentNode.insertBefore(div, el);
	div.appendChild(el);
}

const wrapVideoInContent = () => {
	let contents = document.querySelectorAll('.content');
	if (!contents) return false;
	contents.forEach(el => {
		let videos = el.querySelectorAll('iframe, video');
		videos.forEach(video => {
			wrapTagInDiv(video, 'video');
		});
		let tables = el.querySelectorAll('table');
		tables.forEach(table => {
			wrapTagInDiv(table, 'table-adaptive');
		});
	})
}
document.addEventListener("DOMContentLoaded", wrapVideoInContent);