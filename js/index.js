const menuBtn = document.querySelector('.menu-btn')
const navbarMenu = document.getElementById('navbar-menu')
let menuOpen = false

menuBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('show')
	if (!menuOpen) {
		menuBtn.classList.add('open')
		menuOpen = true
	} else {
		menuBtn.classList.remove('open')
		menuOpen = false
	}
})