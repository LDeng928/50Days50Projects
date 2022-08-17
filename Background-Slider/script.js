const body = document.body
const slides =  document.querySelectorAll('.slide') // Node list
const leftBtn =  document.getElementById('left')
const rightBtn =  document.getElementById('right')

// Slide index
let activeSlide = 0

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage; // Inline style 
}

// Rotate background images
function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })

  slides[activeSlide].classList.add('active')
}

// Right button click event
rightBtn.addEventListener('click', () => {
  activeSlide++

  if(activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

// Left button click event
leftBtn.addEventListener('click', () => {
  activeSlide--

  if(activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody()
  setActiveSlide()
})