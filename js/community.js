// Adding a post to the Discussion Forum
function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim()) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('forum-post');
        postDiv.textContent = postContent;
        document.getElementById('forum-posts').appendChild(postDiv);
        document.getElementById('postContent').value = ''; // Clear the textarea
    } else {
        alert('Please write something before posting!');
    }
}

// Submitting a user story
function submitStory() {
    const storyContent = document.getElementById('storyContent').value;
    if (storyContent.trim()) {
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('user-story');
        storyDiv.textContent = storyContent;
        document.getElementById('stories-list').appendChild(storyDiv);
        document.getElementById('storyContent').value = ''; // Clear the textarea
    } else {
        alert('Please write your story before submitting!');
    }
}

// Load community events dynamically
document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');
    const events = [
        { name: "Mental Health Webinar - Coping with Anxiety", date: "Oct 30, 2024" },
        { name: "Stress Management Workshop", date: "Nov 15, 2024" },
        { name: "Depression Support Group Meeting", date: "Dec 5, 2024" }
    ];

    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(li);
    });
});


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
