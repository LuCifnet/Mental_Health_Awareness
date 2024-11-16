document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.querySelector('.contact-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add('visible'); // Add the visible class to trigger animation
                observer.disconnect(); // Stop observing once the section has been animated
            }
        });
    });

    observer.observe(contactSection); // Observe the contact section
});
