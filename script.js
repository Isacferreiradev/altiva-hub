// ===================================
// ALTIVA HUB - MODERN FINTECH INTERACTIONS
// Bold & Dynamic
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // PERFORMANCE OPTIMIZATIONS
    // ===================================

    // Disable heavy animations on low-power devices/mobile if needed
    const isMobile = window.innerWidth < 768;

    // ===================================
    // NAVBAR SCROLL EFFECT (OPTIMIZED)
    // ===================================
    // Uses IntersectionObserver instead of scroll event listener

    const nav = document.querySelector('.nav');
    const hero = document.querySelector('.hero');

    // Create a sentinel element to track scroll position
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '100px'; // Trigger point
    sentinel.style.left = '0';
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    sentinel.style.pointerEvents = 'none';
    sentinel.style.visibility = 'hidden';
    document.body.prepend(sentinel);

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }, { rootMargin: '0px', threshold: 0 });

    navObserver.observe(sentinel);

    // ===================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ===================================

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(element => {
        observer.observe(element);
    });





    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navHeight = nav.offsetHeight;
                    const offsetTop = targetElement.offsetTop - navHeight - 20;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ===================================
    // CTA BUTTON RIPPLE EFFECT
    // ===================================

    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary, .plan-cta, .nav-cta');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple CSS
    const style = document.createElement('style');
    style.textContent = `
        .cta-primary, .cta-secondary, .plan-cta, .nav-cta {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);


    // ===================================
    // PLAN CARDS - CSS-only animations (3D tilt removed)
    // ===================================
    // Cards now use pure CSS hover effects for smooth, stable animations


    // ===================================
    // PILLAR CARDS GLOW ON HOVER
    // ===================================

    const pillarCards = document.querySelectorAll('.pillar-card');

    pillarCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function () {
            pillarCards.forEach((otherCard, otherIndex) => {
                if (otherIndex !== index) {
                    otherCard.style.opacity = '0.6';
                }
            });
        });

        card.addEventListener('mouseleave', function () {
            pillarCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });


    // ===================================
    // PROCESS STEPS PROGRESSIVE ANIMATION
    // ===================================

    const processSteps = document.querySelectorAll('.process-step');

    const processObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepNumber = entry.target.querySelector('.step-number');
                const stepContent = entry.target.querySelector('.step-content');
                const stepLine = entry.target.querySelector('.step-line');

                setTimeout(() => {
                    if (stepNumber) {
                        stepNumber.style.opacity = '1';
                        stepNumber.style.transform = 'scale(1) rotate(0deg)';
                    }
                }, 100);

                setTimeout(() => {
                    if (stepContent) {
                        stepContent.style.opacity = '1';
                        stepContent.style.transform = 'translateX(0)';
                    }
                }, 300);

                setTimeout(() => {
                    if (stepLine) {
                        stepLine.style.opacity = '1';
                        stepLine.style.height = 'calc(100% + 4rem - 100px)';
                    }
                }, 500);

                processObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    processSteps.forEach(step => {
        const stepNumber = step.querySelector('.step-number');
        const stepContent = step.querySelector('.step-content');
        const stepLine = step.querySelector('.step-line');

        if (stepNumber) {
            stepNumber.style.opacity = '0';
            stepNumber.style.transform = 'scale(0.5) rotate(-45deg)';
            stepNumber.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }

        if (stepContent) {
            stepContent.style.opacity = '0';
            stepContent.style.transform = 'translateX(-30px)';
            stepContent.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }

        if (stepLine) {
            stepLine.style.opacity = '0';
            stepLine.style.height = '0';
            stepLine.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }

        processObserver.observe(step);
    });


    // ===================================
    // GRADIENT MOUSE FOLLOW (Subtle)
    // ===================================

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGradients() {
        // Smooth easing
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        const floats = document.querySelectorAll('.geometric-float');
        floats.forEach((float, index) => {
            const speed = (index + 1) * 0.02;
            const x = (currentX - window.innerWidth / 2) * speed;
            const y = (currentY - window.innerHeight / 2) * speed;

            float.style.transform = `translate(${x}px, ${y}px)`;
        });

        requestAnimationFrame(animateGradients);
    }

    animateGradients();


    // ===================================
    // PROBLEMA ITEMS COUNTER ANIMATION
    // ===================================

    const problemaItems = document.querySelectorAll('.problema-item');

    const problemaObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target.querySelector('.problema-number');
                if (number) {
                    number.style.animation = 'numberPulse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                }
                problemaObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    problemaItems.forEach(item => {
        problemaObserver.observe(item);
    });

    const numberStyle = document.createElement('style');
    numberStyle.textContent = `
        @keyframes numberPulse {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(numberStyle);


    // ===================================
    // FOOTER FADE IN
    // ===================================

    const footer = document.querySelector('.footer');

    if (footer) {
        const footerObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        footer.style.opacity = '0';
        footer.style.transform = 'translateY(40px)';
        footer.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';

        footerObserver.observe(footer);
    }


    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================

    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function () {
        const floats = document.querySelectorAll('.geometric-float');
        if (document.hidden) {
            floats.forEach(element => {
                element.style.animationPlayState = 'paused';
            });
        } else {
            floats.forEach(element => {
                element.style.animationPlayState = 'running';
            });
        }
    });

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }

});
