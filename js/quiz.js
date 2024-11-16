document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector(".contact-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contactSection.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(contactSection);
});
