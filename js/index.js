const navbarScroll = document.querySelector('.navbar')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarMenu = document.querySelector('.navbar ul')
const navbarLinks = document.querySelectorAll('.navbar a')

window.addEventListener('scroll', function () {
	navbarScroll.classList.toggle('sticky', window.scrollY > 0)
})

navbarToggler.addEventListener('click', navbarTogglerClick)

function navbarTogglerClick() {
	navbarToggler.classList.toggle('open-navbar-toggler')
	navbarMenu.classList.toggle('open')
}

// navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick))

for (let i = 0; i < navbarLinks.length; i++) {
	navbarLinks[i].addEventListener('click', navbarLinkClick)
}

function navbarLinkClick(event) {

	smoothScroll(event) // Call smoothScroll function

	if (navbarMenu.classList.contains('open')) { // Close navbarMenu in smaller screen
		navbarToggler.click()
	}
}

// Smooth scrolling

// APPROACH #1 = window.scrollTo() (window.scroll())
// function smoothScroll(event) {
// 	event.preventDefault()
// 	const targetId = event.currentTarget.getAttribute('href')
// 	window.scrollTo({
// 		top: targetId === '#' ? 0 : document.querySelector(targetId).offsetTop,
// 		behavior: 'smooth'
// 	})
// 	console.log(targetId)
// }

// APPROACH #2 - element.scrollIntoView()
// function smoothScroll(event) {
// 	event.preventDefault()
// 	const targetId = event.currentTarget.getAttribute('href') === '#' ? 'header' : event.currentTarget.getAttribute('href')
// 	document.querySelector(targetId).scrollIntoView({
// 		behavior: 'smooth',
// 		block: 'start'
// 	})
// 	console.log(targetId)
// }

// APPROACH #3 - window.requestAnimationFrame()
function smoothScroll(event) {
	event.preventDefault()

	const targetId = event.currentTarget.getAttribute('href') === '#' ? 'header' : event.currentTarget.getAttribute('href')
	const targetPosition = document.querySelector(targetId).offsetTop
	const startPosition = window.pageYOffset
	const distance = targetPosition - startPosition
	const duration = 1500
	let start = null

	window.requestAnimationFrame(step)

	function step(timestamp) {
		if (!start) start = timestamp
		const progress = timestamp - start
		// window.scrollTo(0, distance * (progress / duration) + startPosition)
		window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration))
		if (progress < duration) window.requestAnimationFrame(step)

	}
}

function linear(t, b, c, d) {
	return c * t / d + b
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};

$(document).ready(function () {
	$("#up").on("click", function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1400)
	})
})