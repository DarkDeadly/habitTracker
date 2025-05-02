const slider = document.querySelector('.auth-slider')
const tosignIN = document.querySelector('.to__SignIn')
const tosignUp = document.querySelector('.to__SignUp')

tosignUp.addEventListener("click" , () => {
    slider.style.transform = 'translateX(-50%)';
})
tosignIN.addEventListener("click" , () => {
    slider.style.transform = 'translateX(0%)';
})