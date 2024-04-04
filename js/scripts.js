/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

// Summon alert dialog when form is submitted
window.addEventListener("load", function() {
    const form = document.getElementById('email-form');
    const btn = document.getElementById('submit-button');
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      btn.disabled = true;
      btn.innerText = "Submitting...";
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        form.reset();
        btn.outerHTML = "<div class='text-center btn-div'><div class='fw-bolder'>Thanks for submitting!</div></div>";
      })
      .catch(error => {
        form.reset();
        btn.outerHTML = "<div class='text-center text-danger'>There was an error</div>";
      })
    });
  });

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
