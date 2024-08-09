document.addEventListener('DOMContentLoaded', function () {
  
    //navbar highlight
    highlight();
    navbarActivate();
    marquee();
   
  })

  function highlight(){
    const target = document.querySelector('.target');
    const trigger = document.querySelector('.trigger');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Trigger div is in view of Target div');
          // You can trigger any action here
          target.classList.remove('scroll');
        } else {
          target.classList.add('scroll');
        }
      });
    }, {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 1.0 // Trigger when 100% of the target is visible
    });

    observer.observe(target);
    observer.observe(trigger);
  }

  //navbar activate upon scroll
  function navbarActivate(){
    const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

      function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) =>
          link.classList.remove('active')
        );
        navLinks[index].classList.add('active');
      }

      window.addEventListener('scroll', changeActiveLink);
      changeActiveLink();
  }

  //marquee
  function marquee(){
    if (typeof Typed === 'function') { // Check if Typed.js is loaded
      var options = {
        strings: ["A Developer.", "I love to Develop.", "A web developer.", "I love learning.", "A Gamer."],
        typeSpeed: 50, // Speed of typing in milliseconds
        backSpeed: 30,  // Speed of deleting in milliseconds
        backDelay: 1000, // Delay before starting to delete
        startDelay: 500, // Delay before starting typing
        loop: true, // Loop the animation
        showCursor: true, // Show the cursor
        smartBackspace: true // Only backspace what was typed
      };
      
      var typed = new Typed('.typed', options);
      // Hide fallback text and show typed text
      document.querySelector('.fallback-text').style.display = 'none';
      document.querySelector('.typed').style.display = 'inline';
    } else {
      // Typed.js not loaded, show fallback text
      document.querySelector('.typed').style.display = 'none';
      document.querySelector('.fallback-text').style.display = 'inline';
    }
  }