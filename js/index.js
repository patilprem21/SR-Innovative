/*js fro sticky bar */

$(document).ready(function() {
  var navbar = $('.navbar');
  var sticky = navbar.offset().top;

  $(window).scroll(function() {
      if (window.pageYOffset >= sticky) {
          navbar.addClass('sticky');
      } else {
          navbar.removeClass('sticky');
      }
  });
});


/*js for side bar 

function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}
*/

function showSidebar() {
  $('.sidebar').addClass('d-flex');
  $('.sidebar').removeClass('d-none');
}

function hideSidebar() {
  $('.sidebar').removeClass('d-flex');
  $('.sidebar').addClass('d-none');
}







/* product js*/



document.addEventListener('DOMContentLoaded', function() {
    const productContainers = document.querySelectorAll('.product-container');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.5 });
  
    productContainers.forEach(container => {
      observer.observe(container);
    });
  });





/*popup js of career section */

    document.addEventListener('DOMContentLoaded', function() {
        var form = document.querySelector('#job-openings form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting
            showPopupMessage();
            form.reset(); // Reset the form after displaying the message
        });

        function showPopupMessage() {
            alert('Thank you, we will reach out to you soon!');
        }
    });



