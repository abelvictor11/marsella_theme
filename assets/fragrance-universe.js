/**
 * Fragrance Universe Section - Parallax Effect
 * Handles scroll-based parallax animations for cards and decorative elements
 */

class FragranceUniverseParallax {
  constructor(section) {
    this.section = section;
    this.parallaxElements = section.querySelectorAll('.parallax-card, .parallax-scroll-item');
    this.videoPlayButton = section.querySelector('.video-play-button');
    this.videoIframe = section.querySelector('.fragrance-video');
    this.arrowPaths = section.querySelectorAll('.arrow-path');
    
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isMobile = window.innerWidth <= 768;
    this.ticking = false;
    this.lastScrollY = window.scrollY;
    
    this.init();
  }

  init() {
    if (this.isReducedMotion) {
      console.log('Parallax disabled: reduced motion preference detected');
      return;
    }

    this.setupParallax();
    this.setupVideoControls();
    this.setupArrowAnimation();
    this.setupResizeObserver();
  }
  
  setupArrowAnimation() {
    // Animate arrow paths on scroll into view
    if (!this.arrowPaths.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'drawArrow 2s ease-out forwards';
        }
      });
    }, { threshold: 0.3 });
    
    this.arrowPaths.forEach(path => observer.observe(path));
  }

  setupParallax() {
    // Initial position calculation
    this.updateParallax();

    // Scroll event with requestAnimationFrame for performance
    window.addEventListener('scroll', () => {
      this.lastScrollY = window.scrollY;
      
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateParallax();
          this.ticking = false;
        });
        
        this.ticking = true;
      }
    }, { passive: true });
  }

  updateParallax() {
    const sectionRect = this.section.getBoundingClientRect();
    const sectionTop = sectionRect.top;
    const sectionHeight = sectionRect.height;
    const windowHeight = window.innerHeight;

    // Only apply parallax when section is in viewport
    if (sectionTop > windowHeight || sectionTop + sectionHeight < 0) {
      return;
    }

    // Calculate scroll progress through the section (-1 to 1)
    // -1 = section at bottom of viewport
    //  0 = section centered in viewport
    //  1 = section at top of viewport
    const scrollProgress = (windowHeight - sectionTop - sectionHeight / 2) / (windowHeight + sectionHeight);

    this.parallaxElements.forEach((element) => {
      const speed = parseFloat(element.dataset.parallaxSpeed) || 0;
      
      if (speed === 0) return;

      // Reduce parallax effect on mobile
      const multiplier = this.isMobile ? 0.3 : 1;
      
      // Calculate parallax offset
      // Higher speed = more movement
      // Positive scrollProgress (scrolling down) = move element up (negative offset)
      const offset = -scrollProgress * speed * multiplier;
      
      // Apply transform with GPU acceleration
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }

  setupVideoControls() {
    if (!this.videoPlayButton) return;

    // Check if it's HTML5 video or iframe
    const html5Video = this.section.querySelector('.fragrance-video-html5');
    
    if (html5Video) {
      this.videoElement = html5Video;
      this.isHTML5 = true;
    } else {
      this.videoElement = this.videoIframe;
      this.isHTML5 = false;
    }

    if (!this.videoElement) return;

    this.videoPlayButton.addEventListener('click', () => {
      this.playVideo();
    });
  }

  playVideo() {
    if (!this.videoElement) return;

    if (this.isHTML5) {
      // HTML5 video
      this.videoElement.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    } else {
      // YouTube/Vimeo iframe
      const src = this.videoElement.src;
      
      if (src.includes('youtube.com')) {
        this.videoElement.src = src.replace('autoplay=0', 'autoplay=1');
      } else if (src.includes('vimeo.com')) {
        this.videoElement.src = src.replace('autoplay=0', 'autoplay=1');
      }
    }

    // Hide play button
    if (this.videoPlayButton) {
      this.videoPlayButton.style.opacity = '0';
      this.videoPlayButton.style.pointerEvents = 'none';
      
      setTimeout(() => {
        this.videoPlayButton.style.display = 'none';
      }, 300);
    }
  }

  setupResizeObserver() {
    let resizeTimer;
    
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      
      resizeTimer = setTimeout(() => {
        this.isMobile = window.innerWidth <= 768;
        this.updateParallax();
      }, 250);
    });
  }

  destroy() {
    // Clean up event listeners if needed
    this.parallaxElements.forEach((element) => {
      element.style.transform = '';
    });
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFragranceUniverse);
} else {
  initFragranceUniverse();
}

function initFragranceUniverse() {
  const sections = document.querySelectorAll('.fragrance-universe-section');
  
  sections.forEach((section) => {
    new FragranceUniverseParallax(section);
  });
}

// Shopify theme editor support
if (window.Shopify && window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => {
    const section = event.target.querySelector('.fragrance-universe-section');
    if (section) {
      new FragranceUniverseParallax(section);
    }
  });

  document.addEventListener('shopify:section:unload', (event) => {
    const section = event.target.querySelector('.fragrance-universe-section');
    if (section && section.parallaxInstance) {
      section.parallaxInstance.destroy();
    }
  });

  document.addEventListener('shopify:section:select', (event) => {
    const section = event.target.querySelector('.fragrance-universe-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FragranceUniverseParallax;
}
