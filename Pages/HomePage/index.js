const menuHamburger = document.querySelector(".HamburgerMenu")
const navLinks = document.querySelector(".NavbarLink__Wrapper")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})