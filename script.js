document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Floating navigation behavior
    const nav = document.getElementById('floating-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(40, 40, 40, 1)';
        } else {
            nav.style.backgroundColor = 'rgba(40, 40, 40, 0)';
        }
    });

    // Smooth hover underline effect
    const navLinks = document.querySelectorAll('#floating-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const underline = link.querySelector('::after');
            if (underline) {
                underline.style.left = `${e.offsetX}px`;
                underline.style.width = '0';
                setTimeout(() => {
                    underline.style.width = '100%';
                    underline.style.left = '0';
                }, 10);
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! (Replace this with your actual form submission logic)');
    });

    // Cursor effects
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .experience-card, .blog-card').forEach(elem => {
        elem.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        elem.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    // Page transitions
    const pageTransition = document.createElement('div');
    pageTransition.classList.add('page-transition');
    document.body.appendChild(pageTransition);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            pageTransition.classList.add('active');
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
                pageTransition.classList.remove('active');
            }, 300);
        });
    });

    // Card text fade effect
    document.querySelectorAll('.experience-card, .blog-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelectorAll('p').forEach(p => p.style.opacity = '0.7');
        });
        card.addEventListener('mouseleave', () => {
            card.querySelectorAll('p').forEach(p => p.style.opacity = '1');
        });
    });

    // Improved Loading Animation
    function showLoadingIndicator() {
        const loadingIndicator = document.getElementById('loading-indicator');
        loadingIndicator.classList.remove('hidden');
    }

    function hideLoadingIndicator() {
        const loadingIndicator = document.getElementById('loading-indicator');
        loadingIndicator.classList.add('hidden');
    }

    // Simulate page load delay (remove this in production)
    function simulatePageLoad() {
        showLoadingIndicator();
        setTimeout(() => {
            hideLoadingIndicator();
        }, 2000); // Simulated 2-second load time
    }

    // Call simulatePageLoad on initial page load
    window.addEventListener('load', simulatePageLoad);

    // Show loading indicator when navigating between sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            showLoadingIndicator();
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
                hideLoadingIndicator();
            }, 500); // Adjust this delay as needed
        });
    });

    // Loading animation
    window.addEventListener('beforeunload', () => {
        document.getElementById('loading-indicator').classList.remove('hidden');
    });

    // Interactive asymmetric grid layout
    function animateAsymmetricGrid() {
        const grids = document.querySelectorAll('.asymmetric-grid');
        
        grids.forEach(grid => {
            const children = grid.children;
            let delay = 0;
            
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const rect = child.getBoundingClientRect();
                const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
                
                if (inView) {
                    setTimeout(() => {
                        child.style.transform = `translateY(${Math.sin(i) * 10}px)`;
                    }, delay);
                    delay += 100;
                } else {
                    child.style.transform = 'translateY(0)';
                }
            }
        });
    }

    // Call the function on scroll and resize
    window.addEventListener('scroll', animateAsymmetricGrid);
    window.addEventListener('resize', animateAsymmetricGrid);

    // Initial call
    animateAsymmetricGrid();

    // Scroll-to-top functionality
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add this to your CSS file for the custom cursor
    /*
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--neon-green);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transition: all 0.1s ease;
        z-index: 9999;
    }

    .cursor-hover {
        transform: scale(1.5);
        background-color: rgba(0, 255, 127, 0.3);
    }
    */
});

// Add this to your existing JavaScript

function animateBlobs() {
    const blobs = document.querySelectorAll('.blob');
    const container = document.querySelector('.blob-container');

    function moveBlob(blob, index) {
        const rect = container.getBoundingClientRect();
        const maxX = rect.width - blob.clientWidth;
        const maxY = rect.height - blob.clientHeight;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        const scale = 0.8 + Math.random() * 0.4;

        blob.style.transition = 'all 15s ease';
        blob.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

        setTimeout(() => moveBlob(blob, index), 15000 + index * 1000);
    }

    blobs.forEach((blob, index) => {
        moveBlob(blob, index);
    });
}

function handleResize() {
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach(blob => {
        blob.style.transition = 'none';
        blob.style.transform = 'translate(0, 0) scale(1)';
    });
    setTimeout(animateBlobs, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    animateBlobs();
    window.addEventListener('resize', handleResize);
    // ... other existing function calls ...
});

// Add this function to your existing JavaScript
function animateHeaderFooterBlobs() {
    const headerBlob = document.querySelector('.blob-header');
    const footerBlob = document.querySelector('.blob-footer');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const headerX = (clientX - centerX) / centerX * 20;
        const headerY = (clientY - centerY) / centerY * 20;

        const footerX = (clientX - centerX) / centerX * -20;
        const footerY = (clientY - centerY) / centerY * -20;

        headerBlob.style.transform = `translate(${headerX}px, ${headerY}px)`;
        footerBlob.style.transform = `translate(${footerX}px, ${footerY}px)`;
    });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateHeaderFooterBlobs();
    // ... other existing function calls ...
});

// Add this function to your existing JavaScript
function initExperienceCardInteraction() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach(card => {
        const blob = card.querySelector('.card-blob');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            blob.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px) scale(1.1)`;
        });
        
        card.addEventListener('mouseleave', () => {
            blob.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initExperienceCardInteraction();
    // ... other existing function calls ...
});

// Add this function to your existing JavaScript
function initButtonIconBlobEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    const socialIcons = document.querySelectorAll('.social-links a');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const blob = button.querySelector('.button-blob');
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            blob.style.left = `${x}px`;
            blob.style.top = `${y}px`;
        });
    });

    socialIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const blob = icon.querySelector('.icon-blob');
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            blob.style.left = `${x}px`;
            blob.style.top = `${y}px`;
        });
    });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initButtonIconBlobEffects();
    // ... other existing function calls ...
});