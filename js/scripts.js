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
    const portfolioItem = button.closest('.portfolio-item');
    const moreContent = portfolioItem.querySelector('.more-content');
    const seeMoreButton = portfolioItem.querySelector('.see-more-button');
    const seeLessButton = portfolioItem.querySelector('.see-less-button');

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
// JavaScript to handle opening and closing the modal
const modal = document.getElementById('imageModal');
const fullSizeImage = document.getElementById('fullSizeImage');
let scale = 1; // Initial scale for zoom
let isDragging = false; // Flag for dragging state
let startX, startY, translateX = 0, translateY = 0;

// Function to open the modal and display the full-size image
function openImageModal(src) {
    fullSizeImage.src = src; // Set the source to the full-size image path
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    fullSizeImage.style.transform = 'translate(0, 0) scale(1)'; // Reset transform
    scale = 1;
    translateX = 0;
    translateY = 0;
}

// Function to handle mouse wheel zoom
fullSizeImage.addEventListener('wheel', function (event) {
    event.preventDefault(); // Prevent page scroll
    scale += event.deltaY * -0.01; // Adjust scale by wheel movement
    scale = Math.min(Math.max(0.5, scale), 3); // Set zoom range between 0.5 and 3
    fullSizeImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});

// Function to handle drag and pan
fullSizeImage.addEventListener('mousedown', function (event) {
    isDragging = true;
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
    fullSizeImage.style.cursor = 'grabbing'; // Change cursor while dragging
});

document.addEventListener('mousemove', function (event) {
    if (isDragging) {
        translateX = event.clientX - startX;
        translateY = event.clientY - startY;
        fullSizeImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
    fullSizeImage.style.cursor = 'grab'; // Reset cursor when not dragging
});

// Event listener to close the modal when clicking outside the image
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
<script>
    function openVideoModal() {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('videoPlayer');

        modal.style.display = 'flex'; // Show modal
        video.load(); // Load video
    }

    function closeVideoModal() {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('videoPlayer');

        modal.style.display = 'none'; // Hide modal
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset to start
    }
</script>


