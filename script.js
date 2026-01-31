// Smooth scrolling for scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Chapter expand/collapse functionality
    const chapters = document.querySelectorAll('.chapter');
    
    chapters.forEach(chapter => {
        const header = chapter.querySelector('.chapter-header');
        
        header.addEventListener('click', function() {
            // Close all other chapters
            chapters.forEach(otherChapter => {
                if (otherChapter !== chapter) {
                    otherChapter.classList.remove('active');
                }
            });
            
            // Toggle current chapter
            chapter.classList.toggle('active');
        });
    });

    // Fade in chapters on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    chapters.forEach(chapter => {
        chapter.style.opacity = '0';
        chapter.style.transform = 'translateY(30px)';
        chapter.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(chapter);
    });

    // Project bubble animations
    const projectBubbles = document.querySelectorAll('.project-bubble');
    
    projectBubbles.forEach((bubble, index) => {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(30px)';
        bubble.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add click effect to project bubbles
    projectBubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            // You can add project detail modal or navigation here
            console.log('Project clicked:', this.querySelector('h3').textContent);
        });
    });
});
