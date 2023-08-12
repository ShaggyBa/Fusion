let introH = $('.header').innerHeight()
let header = $('.header')
let scrollOffset = $(window).scrollTop()

//Плавный переход
$('[data-scroll]').on('click', function (event) {
	event.preventDefault()
	let $this = $(this)
	let elementId = $this.data('scroll')
	let elementOffset = $(elementId).offset().top

	$('html, body').animate({
		scrollTop: elementOffset
	}, 500)
})

// Slider
$('.next').on('click', (event) => {
	event.preventDefault()
	let currentGallery = $('.gallery.current'),
		currentGalleryIndex = currentGallery.index(),
		nextGallery = currentGallery.next(),
		nextGalleryIndex = currentGalleryIndex + 1

	currentGallery.removeClass('current')
	if (nextGalleryIndex === ($('.gallery').length)) {
		$('.gallery:first').addClass('current')
	}
	else {
		nextGallery.addClass('current')
	}
})

$('.prev').on('click', (event) => {
	event.preventDefault()
	let currentGallery = $('.gallery.current'),
		currentGalleryIndex = currentGallery.index(),
		prevGallery = currentGallery.prev(),
		prevGalleryIndex = currentGalleryIndex - 1

	currentGallery.removeClass('current')
	if (prevGalleryIndex === ($('.gallery:first').index() - 1)) {
		$('.gallery:last').addClass('current')
	}
	else {
		prevGallery.addClass('current')
	}
})

// Меню-бургер
$('.header__burger').click(function (event) {
	$('.header__burger, .header__menu').toggleClass('active')
})
