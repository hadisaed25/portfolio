// Words to cycle through
const words = ["ML Engineer","Coding Instructor"];
let wordIndex = 0;
let letterIndex = 0;

// Get the element where text will be animated
const animatedText = document.getElementById("animated-text");

// Function to type each letter
function typeWord() {
  if (letterIndex < words[wordIndex].length) {
    // Add the next letter
    animatedText.textContent += words[wordIndex][letterIndex];
    letterIndex++;
    setTimeout(typeWord, 150); // Adjust speed by changing 150ms
  } else {
    // Pause, then start deleting
    setTimeout(deleteWord, 2000);
  }
}

// Function to delete each letter
function deleteWord() {
  if (letterIndex > 0) {
    animatedText.textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(deleteWord, 100); // Adjust speed by changing 100ms
  } else {
    // Move to the next word after deletion
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, 500); // Start typing the new word after a pause
  }
}

// Start the typing effect
typeWord();
// Google Analytics Code - Checking for Do Not Track preference
var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
if (dnt != "1" && dnt != "yes") {
    (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
        i[r] ||
        function () {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
    
    ga("create", "", "auto"); // Add your Google Analytics ID here
    ga("send", "pageview");
}

// Carousel Control
let currentIndex = 1;

function moveSlide(direction) {
  const images = document.querySelectorAll('.carousel-image');
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * 100;
  images.forEach(image => {
    image.style.transform = `translateX(${newTransformValue}%)`;
  });
}
// Get the modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Function to open the modal
function openModal(imgElement) {
  modal.style.display = "flex"; // Show the modal
  modalImg.src = imgElement.src; // Set the modal image source to the clicked image
  captionText.innerHTML = imgElement.alt; // Optional: display image alt text as caption
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none"; // Hide the modal
}

document.getElementById('see-more-button').addEventListener('click', function() {
  const hiddenRows = document.querySelectorAll('.hidden');
  hiddenRows.forEach(row => {
    row.style.display = 'flex'; // Show the hidden rows
  });
  this.style.display = 'none'; // Hide the "See More" button after clicking
});
