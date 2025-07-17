// Text Animation for Hero Section
// Selects the element where the animated text will appear
const textElement = document.querySelector(".hero-text .second-text");
// Defines the array of texts to cycle through
const textOptions = ["Frontend Developer", "Web Designer", "Graphic Designer"]; 
let textIndex = 0; // Keeps track of the current text in the array

// Function to update the text content and cycle to the next text
const animateText = () => {
    textElement.textContent = textOptions[textIndex]; // Set the text content
    textIndex = (textIndex + 1) % textOptions.length; // Move to the next text, loop back to start if at end
};

// Initial call to display the first text immediately
animateText(); 
// Sets an interval to call animateText every 4 seconds (4000 milliseconds)
setInterval(animateText, 4000); 

// Navbar Toggle for Mobile Responsiveness
// Selects the burger icon, navigation links container, and close button
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');

// Event listener for when the burger icon is clicked
burger.addEventListener('click', () => {
    navLinks.classList.add('active'); // Adds 'active' class to show the navigation menu
    document.body.style.overflow = 'hidden'; // Prevents scrolling on the body when menu is open
});

// Event listener for when the close button is clicked
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Removes 'active' class to hide the navigation menu
    document.body.style.overflow = ''; // Re-enables scrolling on the body
});

// Close nav menu when a navigation link is clicked (for smooth navigation)
// Selects all anchor tags within the nav-links list
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Hides the navigation menu
        document.body.style.overflow = ''; // Re-enables scrolling
    });
});

// Scroll to Top Button Functionality
let mybutton = document.getElementById("myBtn"); // Selects the scroll-to-top button

// Event listener for window scroll to show/hide the button
window.onscroll = function() {
    scrollFunction();
};

// Function to determine when to show or hide the scroll-to-top button
function scrollFunction() {
    // If scrolled more than 100px from the top (for both body and documentElement)
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { 
        mybutton.style.display = "block"; // Show the button
    } else {
        mybutton.style.display = "none"; // Hide the button
    }
}

// Function to scroll to the top of the document when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Set current year in footer dynamically
// Ensures the copyright year is always current
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Dark/Light Mode Toggle Logic
    const modeToggleBtn = document.getElementById('mode-toggle');
    const htmlElement = document.documentElement; // The <html> tag

    // Function to set the theme
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Save preference
        // Update icon based on theme
        if (theme === 'dark') {
            modeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
        } else {
            modeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
        }
    };

    // Check for saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to dark mode if no preference is saved
        setTheme('dark'); 
    }

    // Event listener for the toggle button
    modeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
});
