const menuHamburger = document.querySelector(".HamburgerMenu")
const navLinks = document.querySelector(".NavbarLink__Wrapper")
const DashboardLink = document.querySelector(".Dashboard__Nav")
const Navbar__Butons= document.querySelector('.Navbar__Butons')
const Logout__Btn = document.querySelector(".Logout__Btn")
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

document.addEventListener("DOMContentLoaded" , () => {
    const isLoggedIn = localStorage.getItem("loginUser")

    if (!isLoggedIn) {
        DashboardLink.style.display = "none" 
        Navbar__Butons.style.display = "block"
        Logout__Btn.style.display = "none"
    }else {
        DashboardLink.style.display = "block"
        Navbar__Butons.style.display = "none"
        Logout__Btn.style.display = "block"
    }
})


Logout__Btn.addEventListener("click" , () => {
    localStorage.removeItem("loginUser")
    window.location.reload();

})
