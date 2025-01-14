// Select all "open" buttons and "close" buttons
const openButtons = document.querySelectorAll('.open');
const closeButtons = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal-container');

// Add event listeners to "open" buttons
openButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].classList.add('show'); // Show corresponding modal
    });
});

// Add event listeners to "close" buttons
closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].classList.remove('show'); // Hide corresponding modal
    });
});



// Menu-toggle button

   
      $(document).ready(function() {
        $(".menu-icon").on("click", function() {
              $("nav ul").toggleClass("showing");
        });
  });

  // Scrolling Effect

  $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('color');
        }

        else {
              $('nav').removeClass('color');
        }
  })

  TweenMax.staggerFrom(
      ".title h1, .title h2, .title > a",
      2,
      {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut,
        delay: 1,
      },
      0.06
    );