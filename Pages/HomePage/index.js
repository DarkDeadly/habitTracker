const menuHamburger = document.querySelector(".HamburgerMenu")
const navLinks = document.querySelector(".NavbarLink__Wrapper")
const DashboardLink = document.querySelector(".Dashboard__Nav")
const Navbar__Butons= document.querySelector('.Navbar__Butons')
const Logout__Btn = document.querySelector(".Logout__Btn")
const Cta = document.querySelector(".Cta")
const Hero__Buttons = document.querySelector(".Hero__Buttons")
const habit__nav = document.querySelector(".habit__nav")
const profile__nav = document.querySelector(".profile__nav")
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

document.addEventListener("DOMContentLoaded" , () => {
    const isLoggedIn = localStorage.getItem("loginUser")

    if (!isLoggedIn) {
        DashboardLink.style.display = "none" 
        Navbar__Butons.style.display = "block"
        Logout__Btn.style.display = "none"
        Cta.style.display="flex"
        Hero__Buttons.style.display = "block"
        habit__nav.style.display = "none"
        profile__nav.style.display = "none"
    }else {
        DashboardLink.style.display = "block"
        Navbar__Butons.style.display = "none"
        Logout__Btn.style.display = "block"
        Cta.style.display="none"
        Hero__Buttons.style.display = "none"
        habit__nav.style.display = "block"
        profile__nav.style.display = "block"

    }
})


Logout__Btn.addEventListener("click" , () => {
    localStorage.removeItem("loginUser")
    window.location.href = "../HomePage/index.html";


})
