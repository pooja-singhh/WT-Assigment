// Dark Mode Toggle
$('.dark-mode-toggle').click(function() {
    $('body').toggleClass('dark-mode');
  });
  
  // Smooth Scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
  
  // Form Validation (Simple Example)
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
  
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '!');
    } else {
      alert('Please fill all fields!');
    }
  });
  
  // Dark Mode Toggle
$(document).ready(function () {
    $('.dark-mode-toggle').click(function () {
      $('body').toggleClass('dark-mode');
      // Change the icon for dark mode toggle
      const currentIcon = $(this).text();
      $(this).text(currentIcon === '🌙' ? '☀️' : '🌙');
    });
  });

  

    // Dark Mode Toggle Script
$(document).ready(function () {
    // Listen for a click on the dark mode toggle button
    $('.dark-mode-toggle').click(function () {
      // Toggle the dark-mode class on the body element
      $('body').toggleClass('dark-mode');
  
      // Toggle the button icon between moon and sun
      const currentIcon = $(this).text();
      $(this).text(currentIcon === '🌙' ? '☀️' : '🌙');
    });
  });
  