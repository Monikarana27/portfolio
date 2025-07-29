// Loading Screen
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 2500);
});

// Navigation
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Terminal Typewriter Effect
const typewriter = document.getElementById('typewriter');
const output = document.getElementById('output');
const commands = [
    'whoami',
    'cat skills.txt',
    'ls projects/',
    'git log --oneline',
    'python deploy.py'
];

const responses = [
    'Monika - Full-Stack Developer & ML Engineer',
    'Python | JavaScript | React.js | Node.js | TensorFlow | Docker',
    'task-management-platform/\nmnist-digit-recognition/\ndocument-verification/',
    '2024 - feat: Smart India Hackathon selection\n2023 - feat: WeCode Scholar Harvard\n2023 - feat: ML Research at MisaHub',
    'Deploying creative portfolio...\n✓ Loading animations\n✓ Interactive elements\n✓ Smooth scrolling\n✓ Ready to impress recruiters!'
];

let commandIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeCommand() {
    const currentCommand = commands[commandIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentCommand.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriter.textContent = currentCommand.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentCommand.length) {
        // Show response
        setTimeout(() => {
            output.textContent = responses[commandIndex];
        }, 500);
        
        setTimeout(() => {
            isDeleting = true;
        }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
        output.textContent = '';
    }

    const typeSpeed = isDeleting ? 50 : 100;
    setTimeout(typeCommand, typeSpeed);
}

// Start typewriter effect
setTimeout(typeCommand, 1000);

// Hero Typing Animation
const typingText = document.querySelector('.typing-text');
const roles = [
    'Full-Stack Developer',
    'ML Engineer', 
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator'
];

let roleIndex = 0;
let roleCharIndex = 0;
let isRoleDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isRoleDeleting) {
        typingText.textContent = currentRole.substring(0, roleCharIndex - 1);
        roleCharIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, roleCharIndex + 1);
        roleCharIndex++;
    }

    if (!isRoleDeleting && roleCharIndex === currentRole.length) {
        setTimeout(() => {
            isRoleDeleting = true;
        }, 2000);
    } else if (isRoleDeleting && roleCharIndex === 0) {
        isRoleDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isRoleDeleting ? 50 : 150;
    setTimeout(typeRole, speed);
}

// Start role typing
setTimeout(typeRole, 2000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger specific animations
            if (entry.target.classList.contains('stat-card')) {
                animateCounter(entry.target);
            }
            
            if (entry.target.classList.contains('skill-item')) {
                animateSkillBar(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-card, .skill-item, .project-card, .timeline-item, .achievement-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Counter Animation
function animateCounter(element) {
    const counter = element.querySelector('.stat-number');
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
        if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 50);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
}

// Skill Bar Animation
function animateSkillBar(element) {
    const skillBar = element.querySelector('.skill-progress');
    const skillLevel = element.getAttribute('data-skill');
    
    setTimeout(() => {
        skillBar.style.width = skillLevel + '%';
    }, 200);
}

// Particle Background Effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';
    
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.backgroundColor = '#6366f1';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    container.appendChild(particle);
    
    // Animate particle
    animateParticle(particle);
}

function animateParticle(particle) {
    const duration = Math.random() * 3000 + 2000;
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    const endX = startX + (Math.random() - 0.5) * 100;
    const endY = startY + (Math.random() - 0.5) * 100;
    
    particle.animate([
        { 
            left: startX + '%', 
            top: startY + '%',
            opacity: particle.style.opacity 
        },
        { 
            left: endX + '%', 
            top: endY + '%',
            opacity: 0 
        }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => {
        // Reset particle position and animate again
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        animateParticle(particle);
    };
}

// Initialize particles
createParticles();

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create success animation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    // Reset form
    setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = 'var(--gradient-primary)';
    }, 3000);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
});

// Cursor Trail Effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    trail.push({ x: mouseX, y: mouseY });
    if (trail.length > 10) {
        trail.shift();
    }
});

function createCursorTrail() {
    const trailContainer = document.createElement('div');
    trailContainer.style.position = 'fixed';
    trailContainer.style.top = '0';
    trailContainer.style.left = '0';
    trailContainer.style.width = '100%';
    trailContainer.style.height = '100%';
    trailContainer.style.pointerEvents = 'none';
    trailContainer.style.zIndex = '9999';
    document.body.appendChild(trailContainer);

    for (let i = 0; i < 10; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.backgroundColor = '#6366f1';
        dot.style.borderRadius = '50%';
        dot.style.opacity = '0';
        dot.style.transition = 'all 0.3s ease';
        trailContainer.appendChild(dot);
    }

    function updateTrail() {
        const dots = trailContainer.children;
        
        trail.forEach((point, index) => {
            if (dots[index]) {
                dots[index].style.left = point.x + 'px';
                dots[index].style.top = point.y + 'px';
                dots[index].style.opacity = (10 - index) / 20;
                dots[index].style.transform = `scale(${(10 - index) / 10})`;
            }
        });
        
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
}

// Initialize cursor trail
createCursorTrail();

// Project Card Tilt Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
});

// Text Reveal Animation
function revealText() {
    const textElements = document.querySelectorAll('.section-title, .hero-description, .timeline-content p');
    
    textElements.forEach((element, index) => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, charIndex) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `all 0.3s ease ${charIndex * 0.02}s`;
            element.appendChild(span);
        });
    });
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const spans = entry.target.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                });
            }
        });
    }, { threshold: 0.5 });
    
    textElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Initialize text reveal
revealText();

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
            document.head.removeChild(style);
        }, 10000);
        
        konamiCode = [];
    }
});

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log(`Page load time: ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
    }
});

perfObserver.observe({ entryTypes: ['navigation'] });

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation to all sections
    const allSections = document.querySelectorAll('section');
    allSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            sectionObserver.observe(section);
        }, index * 100);
    });
});

console.log('🚀 Portfolio loaded successfully! Made with 💜 by Monika');