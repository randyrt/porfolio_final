$(document).ready(function () {
  // HERO SLIDER
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
  
    $('#project-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navText: [
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"/></svg>', 
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L9.293 8 4.646 3.354a.5.5 0 0 1 0-.708z"/></svg>'
   ],
    smartSpeed: 1000,
    autoplay: true,          
    autoplayTimeout: 5000,  
    smartSpeed: 5000,
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


