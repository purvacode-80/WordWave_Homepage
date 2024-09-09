document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links .active')?.classList.remove('active');
            link.classList.add('active');
        });
    });

    // Example of adding more animations or interactivity
    // You can use JS libraries like GSAP for more advanced animations
});
