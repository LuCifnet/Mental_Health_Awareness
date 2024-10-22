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


const therapists = [
    { name: "Dr. Jane Smith", specialty: "Anxiety", location: "New York", type: "Virtual" },
    { name: "Dr. John Doe", specialty: "Depression", location: "Los Angeles", type: "In-Person" },
    { name: "Dr. Emily Johnson", specialty: "Family Therapy", location: "Chicago", type: "Virtual" },
    { name: "Dr. Sarah Brown", specialty: "Trauma", location: "San Francisco", type: "In-Person" },
    { name: "Dr. Michael Lee", specialty: "CBT", location: "Boston", type: "Virtual" }
];

function searchTherapists() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const therapistList = document.getElementById('therapist-list');
    
    // Clear previous results
    therapistList.innerHTML = '';

    const filteredTherapists = therapists.filter(therapist => {
        return (
            therapist.name.toLowerCase().includes(searchInput) ||
            therapist.specialty.toLowerCase().includes(searchInput) ||
            therapist.location.toLowerCase().includes(searchInput) ||
            therapist.type.toLowerCase().includes(searchInput)
        );
    });

    // Display filtered results
    if (filteredTherapists.length > 0) {
        filteredTherapists.forEach(therapist => {
            const card = document.createElement('div');
            card.className = 'therapist-card';
            card.innerHTML = `
                <img src="https://via.placeholder.com/80" alt="${therapist.name}" class="therapist-img">
                <div>
                    <strong>${therapist.name}</strong><br>
                    ${therapist.specialty}, ${therapist.location} (${therapist.type})
                </div>
            `;
            therapistList.appendChild(card);
        });
    } else {
        const noResults = document.createElement('li');
        noResults.textContent = 'No results found.';
        therapistList.appendChild(noResults);
    }
}

// Add event listener for search input to call searchTherapists when user types
document.getElementById('search').addEventListener('input', searchTherapists);
