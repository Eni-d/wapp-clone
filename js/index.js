let images = document.querySelectorAll('img')
let modal = document.getElementById('modal')
let modalContainer = document.querySelector('.modal')
let userName = document.getElementById('userName')
let overlay = document.getElementById('overlay')

images.forEach((image) => {
    image.addEventListener('click', (e) => {
        modalContainer.style.display = 'flex'
        modalContainer.style.animationName = 'fadeIn'
        modalContainer.style.animationDuration = '1s'
        overlay.style.display = 'block'
        overlay.style.opacity = '0.5'
        modal.src = e.target.src
        userName.textContent = e.target.nextElementSibling.textContent
        overlay.addEventListener('click', (e) => {
            modalContainer.style.display = 'none'
            overlay.style.display = 'none'
        })
    })
})
