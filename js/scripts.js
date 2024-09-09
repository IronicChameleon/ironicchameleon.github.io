/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
});
function expandImage(imageSrc) {
    var modal = document.getElementById("imageModal");
    var expandedImage = document.getElementById("expandedImage");
    expandedImage.src = imageSrc;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
function openGalleryModal(projectId) {
  // You can implement logic here to change images dynamically based on the projectId
  // For now, the gallery content is hard-coded in the HTML
}
function toggleMoreContent(button) {
    const moreContent = button.closest('.portfolio-item').querySelector('.more-content');
    const seeMoreButton = button.closest('.portfolio-item').querySelector('.see-more-button');
    const seeLessButton = button.closest('.portfolio-item').querySelector('.see-less-button');

    if (moreContent.classList.contains('expanded')) {
        // Collapse the section
        moreContent.classList.remove('expanded');
        seeMoreButton.style.display = 'block'; // Show "See More" button again
        seeLessButton.style.display = 'none'; // Hide "See Less" button
    } else {
        // Expand the section
        moreContent.classList.add('expanded');
        seeMoreButton.style.display = 'none'; // Hide "See More" button
        seeLessButton.style.display = 'block'; // Show "See Less" button
    }
}

