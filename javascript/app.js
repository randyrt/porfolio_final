// Modal for all image when its clicked
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

function initializeImageClickHandler() {
  document.querySelectorAll(
    '#project-slider1 .project img, #project-slider2 .project img, #project-slider3 .project img'
  ).forEach((image) => {
    image.addEventListener('click', () => {
      if(modal){
        AOS.init({ disable: true });
        modal.style.display = 'flex';
        modalImage.src = image.src;
        console.log(modalImage);
      }else {
        AOS.init({
          disable: false,
          startEvent: 'DOMContentLoaded'
        })
        AOS.refresh()
      }
     });
  });
}

initializeImageClickHandler()

const Myproject = document.getElementById('projectSlider1')
console.log(Myproject)

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
    AOS.refresh()
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    AOS.refresh()
  }
});

$(document).ready(function () {
  $('#hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 9000,
    autoplay: true,
    autoplayTimeout: 9000,
    smartSpeed: 9000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="3O" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L9.293 8 4.646 3.354a.5.5 0 0 1 0-.708z"/></svg>'
    ],
    responsive: {
      0: {
        nav: false
      },
      768: {
        nav: true
      },
    }
  });

$('#project-slider1, #project-slider2, #project-slider3').owlCarousel({
    loop: true,
    margin: 10,
    mouseDrag: true,
    nav: true,
    dots: false,
    smartSpeed: 500,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L9.293 8 4.646 3.354a.5.5 0 0 1 0-.708z"/></svg>'
    ],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0
      },
      768: {
        items: 2
      },
      1140: {
        items: 3,
        center: true,
        margin: 20
      }
    }
  });
});




