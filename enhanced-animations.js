// Enhanced animations for the professional portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.project-card, .skill-tag, .contact-method');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all animated sections
    const animatedElements = document.querySelectorAll('.about, .projects, .contact');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Mouse trail effect
    let mouseTrail = [];
    const maxTrailLength = 20;

    document.addEventListener('mousemove', (e) => {
        mouseTrail.push({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
        });

        if (mouseTrail.length > maxTrailLength) {
            mouseTrail.shift();
        }

        // Remove old trail elements
        const existingTrails = document.querySelectorAll('.mouse-trail');
        existingTrails.forEach(trail => {
            if (Date.now() - trail.dataset.timestamp > 1000) {
                trail.remove();
            }
        });

        // Create new trail element
        if (Math.random() > 0.7) { // Only create trail occasionally to avoid performance issues
            const trailElement = document.createElement('div');
            trailElement.className = 'mouse-trail';
            trailElement.style.cssText = `
                position: fixed;
                pointer-events: none;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                left: ${e.clientX - 2}px;
                top: ${e.clientY - 2}px;
                z-index: 9999;
                animation: trailFade 1s ease-out forwards;
            `;
            trailElement.dataset.timestamp = Date.now();
            document.body.appendChild(trailElement);
        }
    });

    // Add CSS for trail animation
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(trailStyle);

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });
    });

    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const opacity = Math.min(scrolled / 100, 1);
            navbar.style.background = `linear-gradient(135deg, rgba(0, 0, 0, ${0.95 * opacity}) 0%, rgba(30, 30, 30, ${0.95 * opacity}) 100%)`;
        });
    }

    // Glitch effect for logo on hover
    const logo = document.querySelector('.nav-logo h2');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
    }

    // Add glitch animation
    const glitchStyle = document.createElement('style');
    glitchStyle.textContent = `
        @keyframes glitch {
            0% { transform: translateX(0); }
            20% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            60% { transform: translateX(-1px); }
            80% { transform: translateX(1px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(glitchStyle);

    // Loading progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.5));
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    console.log('Enhanced animations initialized for professional portfolio');
});