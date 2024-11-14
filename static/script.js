// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for project cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});
// Animate skills on scroll
const skillCards = document.querySelectorAll('.skill-card');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.3 });

skillCards.forEach(card => {
    skillsObserver.observe(card);
});

// Add hover effect to skill cards
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Animate page elements on scroll
const animateOnScroll = (elements, className) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

animateOnScroll(document.querySelectorAll('section'), 'fade-in');