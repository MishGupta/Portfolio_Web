document.addEventListener("DOMContentLoaded", () => {
    const hamster = document.querySelector(".hamster");
    const animationDuration = 1000; // Animation duration in milliseconds

    // Add an event listener to detect when the animation ends
    hamster.addEventListener("animationiteration", () => {
        // Redirect after a specific number of iterations
        setTimeout(() => {
            window.location.href = "about.html";
        }, animationDuration);
    });
});
const images = document.querySelectorAll('.image-carousel img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 4000); // Change image every 3 seconds
document.addEventListener('DOMContentLoaded', function() {
    let countdownElement = document.getElementById('countdown-timer');
    let countdownValue = 3;
    let countdownInterval = setInterval(function() {
        countdownValue--;
        countdownElement.textContent = countdownValue;
        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            // Redirect to about page
            window.location.href = 'about.html';
        }
    }, 1000);
});
// Example script to show tooltip on hover
document.querySelectorAll('.tooltip-html').forEach(function (tooltipElement) {
  tooltipElement.addEventListener('mouseover', function () {
    const tooltip = this.querySelector('.tooltip');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
  });

  tooltipElement.addEventListener('mouseout', function () {
    const tooltip = this.querySelector('.tooltip');
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
  });
});
