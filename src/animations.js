// Intersection Observer for scroll-triggered animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Add specific animations based on element type
        if (entry.target.classList.contains('section-reveal')) {
          entry.target.style.animationDelay = '0.2s';
        }
        
        if (entry.target.classList.contains('heading-enhanced')) {
          entry.target.classList.add('revealed');
        }
        
        // Animate statistics counters
        if (entry.target.classList.contains('stats-counter')) {
          animateCounter(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const elementsToAnimate = document.querySelectorAll(
    '.section-reveal, .heading-enhanced, .stats-counter, .card-3d'
  );
  
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
};

// Counter animation for statistics
const animateCounter = (element) => {
  const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
    }
  };
  
  updateCounter();
};

// Parallax effect for hero elements
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Smooth scrolling for navigation links
export const initSmoothScrolling = () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = 80; // Account for fixed header
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// 3D tilt effect for cards
export const init3DTiltEffect = () => {
  const cards = document.querySelectorAll('.card-3d');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(10px)
      `;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
};

// Animated gradient background
export const initAnimatedGradient = () => {
  const gradientElements = document.querySelectorAll('.animated-gradient');
  
  gradientElements.forEach(element => {
    let angle = 0;
    
    const animateGradient = () => {
      angle += 1;
      element.style.background = `
        linear-gradient(${angle}deg, 
          rgba(59, 130, 246, 0.1) 0%, 
          rgba(139, 92, 246, 0.1) 50%, 
          rgba(16, 185, 129, 0.1) 100%)
      `;
      requestAnimationFrame(animateGradient);
    };
    
    animateGradient();
  });
};

// Loading animation
export const initLoadingAnimation = () => {
  const loadingElements = document.querySelectorAll('.loading-animation');
  
  loadingElements.forEach(element => {
    element.classList.add('skeleton');
    
    // Simulate loading completion after 2 seconds
    setTimeout(() => {
      element.classList.remove('skeleton');
      element.classList.add('fade-in-up');
    }, 2000);
  });
};

// Cursor trail effect
export const initCursorTrail = () => {
  const trail = [];
  const trailLength = 10;
  
  // Create trail elements
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    dot.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: linear-gradient(45deg, #3B82F6, #8B5CF6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      opacity: ${1 - i / trailLength};
      transition: all 0.1s ease;
    `;
    document.body.appendChild(dot);
    trail.push(dot);
  }
  
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  const animateTrail = () => {
    let x = mouseX;
    let y = mouseY;
    
    trail.forEach((dot, index) => {
      const nextDot = trail[index + 1] || trail[0];
      
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      
      x += (nextDot.offsetLeft - x) * 0.3;
      y += (nextDot.offsetTop - y) * 0.3;
    });
    
    requestAnimationFrame(animateTrail);
  };
  
  animateTrail();
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initSmoothScrolling();
      init3DTiltEffect();
      initAnimatedGradient();
      
      // Initialize parallax after a short delay
      setTimeout(() => {
        initParallaxEffect();
      }, 100);
    });
  } else {
    initScrollAnimations();
    initSmoothScrolling();
    init3DTiltEffect();
    initAnimatedGradient();
    initParallaxEffect();
  }
};

// Performance optimization: Debounce scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Reduced motion support
export const respectsReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Initialize with reduced motion check
export const initAnimationsWithAccessibility = () => {
  if (!respectsReducedMotion()) {
    initAllAnimations();
  } else {
    // Initialize only essential animations for accessibility
    initSmoothScrolling();
    initScrollAnimations();
  }
};

