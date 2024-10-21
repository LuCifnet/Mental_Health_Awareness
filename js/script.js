// Change navbar background color on scroll with smooth transition
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.transition = 'background-color 0.3s ease';
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#f7f7f7'; // Light gray when scrolled
    } else {
        header.style.backgroundColor = '#fff'; // Original white color
    }
});

// Interactive mood tracker with dynamic message update
document.querySelectorAll('.mood-options button').forEach(button => {
    button.addEventListener('click', function() {
        const mood = this.textContent;
        const moodMessageContainer = document.querySelector('.mood-message') || document.createElement('p');

        moodMessageContainer.classList.add('mood-message');
        moodMessageContainer.classList.remove('positive', 'neutral', 'negative'); // Remove old mood classes
        let message = '';

        switch (mood) {
            case '😊':
                message = "We're glad you're feeling great!";
                moodMessageContainer.classList.add('positive'); // Add positive class
                break;
            case '😐':
                message = "It's okay to feel neutral. Take things easy.";
                moodMessageContainer.classList.add('neutral'); // Add neutral class
                break;
            case '😢':
                message = "We're sorry you're feeling down. Take some time to care for yourself.";
                moodMessageContainer.classList.add('negative'); // Add negative class
                break;
            case '😠':
                message = "Feeling angry? Consider taking a break to calm down.";
                moodMessageContainer.classList.add('negative'); // Add negative class
                break;
            case '😴':
                message = "Feeling tired? Rest is essential for your mental health.";
                moodMessageContainer.classList.add('neutral'); // Add neutral class
                break;
            default:
                message = "How are you feeling today?";
                moodMessageContainer.classList.add('neutral'); // Add neutral class
        }

        moodMessageContainer.textContent = message;
        const moodTracker = document.querySelector('.mood-tracker');

        // Check if the message container is already in the DOM
        if (!document.querySelector('.mood-message')) {
            moodTracker.appendChild(moodMessageContainer);
        }

        // Set a timeout to remove the message after 5 seconds
        setTimeout(() => {
            if (moodMessageContainer) {
                moodTracker.removeChild(moodMessageContainer); // Remove the message from the DOM
            }
        }, 5000); // 5000 milliseconds = 5 seconds
    });
});



// // Smooth scroll for internal links with error handling
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const sectionId = this.getAttribute('href').substring(1);
//         const section = document.getElementById(sectionId);

//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         } else {
//             console.error(`Section with ID "${sectionId}" not found.`);
//         }
//     });
// });

// Enhanced "Get Started" button animation with shadow effect
const getStartedButton = document.querySelector('.button');
if (getStartedButton) {
    getStartedButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#218838'; // Darker green on hover
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
        this.style.transition = 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease';
    });

    getStartedButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#28a745'; // Original color
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            // Toggle menu visibility
            navLinks.classList.toggle('show');
            // Toggle between the hamburger and close icon
            hamburger.classList.toggle('active');
        });
    }
});


