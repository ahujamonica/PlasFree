// Sliding Menu Toggle Function
function toggleMenu() {
    const slidingMenu = document.getElementById('sliding-menu');
    if (slidingMenu.style.left === '0px') {
        slidingMenu.style.left = '-250px'; // Hide menu
    } else {
        slidingMenu.style.left = '0px'; // Show menu
    }
}

// Scroll to Section Functionality
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
