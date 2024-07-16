document.addEventListener("DOMContentLoaded", function () {
	// Custom JS
});

const createAnnounceSlider = () => {
	let slider = new Swiper(".announce__slider", {
		// slidesPerView: 3,
		slidesPerView: 1,
		// rewind: true,
		spaceBetween: 12,
		pagination: {
			el: ".announce__slider-pagination",
			clickable: true,
		},
		navigation: {
			// nextEl: slider.el.closest('.section').querySelector('.product-slider-next'),
			// prevEl: slider.el.closest('.section').querySelector('.product-slider-prev'),
		},
	});
};

createAnnounceSlider();

const createPartnersSlider = () => {
	let slider = new Swiper(".partners-slider", {
		// slidesPerView: 3,
		// slidesPerView: 6,
		// rewind: true,
		spaceBetween: 8,
		// pagination: {
		//   el: ".swiper-pagination",
		//   clickable: true,
		// },
		navigation: {
			// nextEl: slider.el.closest('.section').querySelector('.product-slider-next'),
			// prevEl: slider.el.closest('.section').querySelector('.product-slider-prev'),
		},
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
	if(!filter) return false;
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
				let itemsFilter = filterItemsBlock.querySelectorAll(
					`div[data-filter-item]:not([data-filter-item=${type}])`
				);
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
		// slidesPerView: 3,
		slidesPerView: 1,
		// rewind: true,
		spaceBetween: 12,
		// pagination: {
		//   el: ".swiper-pagination",
		//   clickable: true,
		// },
		navigation: {
			// nextEl: slider.el.closest('.section').querySelector('.product-slider-next'),
			// prevEl: slider.el.closest('.section').querySelector('.product-slider-prev'),
		},
		pagination: {
			el: ".hero-slider__pagination",
			clickable: true,
			// dynamicBullets: true,
		},
	});
};

createHeroSlider();



let initServiceSlider = false;
let serviceSlider;
const createServiceSlider = ()=>{ 
	if (!document.querySelector(".service-slider")) return false;
	let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");
	let desktop = window.matchMedia("(min-width: 768px)");

	if (mobile.matches) {
		if (!initServiceSlider) {
			initServiceSlider = true;
			serviceSlider = new Swiper(".service-slider", {
				// slidesPerView: 1,
				slidesPerView: "auto",

				spaceBetween: 14,
				pagination: {
					el: ".service-slider__pagination",
					clickable: true,
					// dynamicBullets: true,
				},
				// navigation: {
				// 	nextEl: '.slider-btn__item_next',
				// 	prevEl: '.slider-btn__item_prev',
				// },
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
const createServiceGallerySlider = ()=>{ 
	if (!document.querySelector(".service-gallery-slider")) return false;
	let mobile = window.matchMedia("(min-width: 0px) and (max-width: 575px)");
	let desktop = window.matchMedia("(min-width: 576px)");

	if (mobile.matches) {
		if (!initServiceGallerySlider) {
			initServiceGallerySlider = true;
			serviceGallerySlider = new Swiper(".service-gallery-slider", {
				slidesPerView: 1.1,
				// slidesPerView: "auto",

				spaceBetween: 20,
				pagination: {
					el: ".service-gallery-slider__pagination",
					clickable: true,
					// dynamicBullets: true,
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

window.addEventListener("load", function () {
	createServiceSlider();
	createServiceGallerySlider();
});

window.addEventListener("resize", function () {
	createServiceSlider();
	createServiceGallerySlider();
});



const createCertificateSlider = () => {
	let slider = new Swiper(".certificate-slider", {
		slidesPerView: 2,
		pagination: {
		  el: ".certificate__pagination",
		  clickable: true,
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
			// nextEl: slider.el.closest('.section').querySelector('.product-slider-next'),
			// prevEl: slider.el.closest('.section').querySelector('.product-slider-prev'),
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

function closeMenu (){
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

let menuSubBtns = document.querySelectorAll(".menu__item-svg-block");
menuSubBtns.forEach((el) => {
	el.addEventListener("click", openMenu);
});

function openMenu(e) {
	if (e.currentTarget.classList.contains("menu__item-svg-block_level")) {
		if (e.currentTarget.parentElement.classList.contains("open")) {
			e.currentTarget.nextElementSibling.style.maxHeight = "0";
			e.currentTarget.parentElement.classList.remove("open");
		} else {
			e.currentTarget.parentElement.parentElement.style.maxHeight =
				8 +
				e.currentTarget.parentElement.parentElement.scrollHeight +
				e.currentTarget.nextElementSibling.scrollHeight +
				"px";
			e.currentTarget.nextElementSibling.style.maxHeight =
				8 + e.currentTarget.nextElementSibling.scrollHeight + "px";
			e.currentTarget.parentElement.classList.add("open");
		}
	} else {
		if (e.currentTarget.parentElement.classList.contains("open")) {
			e.currentTarget.nextElementSibling.style.maxHeight = "0";
			e.currentTarget.parentElement.classList.remove("open");
		} else {
			e.currentTarget.nextElementSibling.style.maxHeight =
				8 + e.currentTarget.nextElementSibling.scrollHeight + "px";
			e.currentTarget.parentElement.classList.add("open");
		}
	}
}

let productTabs = document.querySelectorAll(".shedule-btn");
if (productTabs) {
	productTabs.forEach((el) => {
		el.addEventListener("click", function (e) {
			document.querySelector(".shedule-btn.active").classList.remove("active");
			document.querySelector(".shedule-content.active").classList.remove("active");
			let trg = e.target;
			trg.classList.add("active");
			document.querySelector(`.shedule-content[data-tab-content="${trg.dataset.tab}"]`).classList.add("active");
		});
	});
}

if (document.querySelector(".contacts-page__acc")) {
	document
		.querySelector(".contacts-page__acc")
		.addEventListener("click", function (e) {
			if (!e.target.closest(".contacts-page__acc-head")) return false;
			let item = e.currentTarget;
			if (item.classList.contains("open")) {
				item.classList.remove("open");
				item.querySelector(".contacts-page__acc-body").style.maxHeight = "0";
			} else {
				item.classList.add("open");
				item.querySelector(".contacts-page__acc-body").style.maxHeight =
					item.querySelector(".contacts-page__acc-body").scrollHeight +
					20 +
					"px";
			}
		});
}

let btnModals = document.querySelectorAll(".btn-modal");
btnModals.forEach((el) => {
	el.addEventListener("click", openModalNominaton);
});

function openModalNominaton(e) {
	e.preventDefault();
	let modal = document.getElementById("modal-callback");
	let wsb = widthScrollBar();

	window.addEventListener("click", function (e) {
		if (e.target.classList.contains("modal") && modal.classList.contains("active") ||	e.target.closest(".modal__close")) {
			fadeOut(modal, 300);
			setTimeout(() => {
				modal.classList.remove("active");
				document.body.classList.remove("noscroll");
				document.querySelector(".header").style.paddingRight = "0px";
				document.querySelector(".footer").style.paddingRight = "0px";
				document.querySelector(".main").style.paddingRight = "0px";
			}, 300);
		}
	});
	if (modal !== null && !modal.classList.contains("active")) {
		fadeIn(modal, 300, "flex");
		document.body.classList.add("noscroll");
		document.querySelector(".header").style.paddingRight = wsb + "px";
		document.querySelector(".footer").style.paddingRight = wsb + "px";
		document.querySelector(".main").style.paddingRight = wsb + "px";
		setTimeout(() => {
			modal.classList.add("active");
		}, 300);
	}
}




var galleries = document.querySelectorAll(".lg");
for (let i = 0; i < galleries.length; i++) {
	lightGallery(galleries[i], {
		thumbnail: false,
		selector: ".lg-item",
		download: false,
	});
}



function widthScrollBar() {
	let div = document.createElement("div");
	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();
	return scrollWidth;
}

function fadeIn(el, timeout, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

function fadeOut(el, timeout) {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
}

function formSend(e) {
	var act = e.getAttribute("action");
	var url = "";
	var btn = e.querySelector("button");
	var btnText = btn.textContent;
	btn.setAttribute("disabled", "disabled");
	btn.textContent = "Загрузка...";
	for (var i = e.elements.length - 1; i >= 0; i--) {
		var name = e.elements[i].getAttribute("name");
		if (e.elements[i].type == "checkbox") {
			if (e.elements[i].checked) {
				url += name + "=" + e.elements[i].value + "&";
			}
		} else if (name) {
			url += name + "=" + e.elements[i].value + "&";
		}
	}
	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status === 422) {
				btn.textContent = btnText;
				btn.removeAttribute("disabled");
				e.nextElementSibling.innerHTML = request.response;
				let inputs = e.querySelectorAll("input, select, textarea");
				inputs.forEach((el) => {
					el.addEventListener("input", () => {
						el.removeAttribute("style");
						el.classList.remove("error");
					});
				});
				let errors = e.nextElementSibling.querySelectorAll("[data-error]");
				errors.forEach((el) => {
					let dataAt = el.getAttribute("data-error");
					let input = e.querySelector(
						"input[name=" +
						dataAt +
						"], select[name=" +
						dataAt +
						"], textarea[name=" +
						dataAt +
						"]"
					);
					input.style.borderColor = "#da4c4c";
					input.classList.add("error");
				});
			} else {
				btn.textContent = btnText;
				btn.removeAttribute("disabled");
				e.nextElementSibling.innerHTML = request.response;
				e.reset();
			}
		}
	};

	request.open("POST", act);

	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.send(url);

	return false;
}