/**
 * Fragrance Universe Section - Parallax Effect
 * Handles scroll-based parallax animations for cards and decorative elements
 */

class FragranceUniverseParallax {
  constructor(section) {
    this.section = section;
    this.parallaxElements = section.querySelectorAll('.parallax-card');
    this.videoPlayButton = section.querySelector('.video-play-button');
    this.videoIframe = section.querySelector('.fragrance-video');
    
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
    this.setupResizeObserver();
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

    // Calculate scroll progress through the section (0 to 1)
    const scrollProgress = Math.max(0, Math.min(1, 
      (windowHeight - sectionTop) / (windowHeight + sectionHeight)
    ));

    this.parallaxElements.forEach((element) => {
      const speed = parseFloat(element.dataset.parallaxSpeed) || 0;
      
      if (speed === 0) return;

      // Reduce parallax effect on mobile
      const multiplier = this.isMobile ? 0.3 : 1;
      
      // Calculate parallax offset
      // Negative speed moves element up as you scroll down
      const offset = (scrollProgress - 0.5) * speed * multiplier;
      
      // Apply transform with GPU acceleration
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }

  setupVideoControls() {
    if (!this.videoPlayButton || !this.videoIframe) return;

    this.videoPlayButton.addEventListener('click', () => {
      this.playVideo();
    });
  }

  playVideo() {
    if (!this.videoIframe) return;

    const src = this.videoIframe.src;
    
    // Add autoplay parameter to URL
    if (src.includes('youtube.com')) {
      this.videoIframe.src = src.replace('autoplay=0', 'autoplay=1');
    } else if (src.includes('vimeo.com')) {
      this.videoIframe.src = src.replace('autoplay=0', 'autoplay=1');
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
