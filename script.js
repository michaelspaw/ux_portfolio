// Smooth scrolling for navigation links
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

// Mobile menu functionality
const createMobileMenu = () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav__links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    mobileMenuBtn.innerHTML = `
        <span class="mobile-menu-icon"></span>
    `;
    
    // Insert mobile menu button before nav links
    nav.insertBefore(mobileMenuBtn, navLinks);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
};

// Initialize mobile menu on smaller screens
const initMobileMenu = () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
};

// Check screen size on load and resize
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    .mobile-menu-icon {
        display: block;
        width: 24px;
        height: 2px;
        background-color: var(--primary-color);
        position: relative;
    }
    
    .mobile-menu-icon::before,
    .mobile-menu-icon::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: var(--primary-color);
        transition: transform 0.3s ease;
    }
    
    .mobile-menu-icon::before {
        top: -6px;
    }
    
    .mobile-menu-icon::after {
        bottom: -6px;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }
        
        .nav__links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background-color: var(--background-color);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.3s ease;
        }
        
        .nav__links.active {
            right: 0;
        }
        
        .mobile-menu-btn.active .mobile-menu-icon {
            background-color: transparent;
        }
        
        .mobile-menu-btn.active .mobile-menu-icon::before {
            transform: rotate(45deg);
            top: 0;
        }
        
        .mobile-menu-btn.active .mobile-menu-icon::after {
            transform: rotate(-45deg);
            bottom: 0;
        }
    }
`;

document.head.appendChild(style); 