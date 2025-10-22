class BrandCarousel {
  constructor(element) {
    this.section = element;
    this.track = this.section.querySelector('[data-carousel-track]');
    this.prevButton = this.section.querySelector('[data-carousel-prev]');
    this.nextButton = this.section.querySelector('[data-carousel-next]');
    
    if (!this.track) return;

    this.items = Array.from(this.track.children);
    this.currentIndex = 0;
    this.itemsToShow = this.getItemsToShow();
    this.autoplayInterval = null;
    this.autoplayDelay = 3000; // 3 seconds

    this.init();
  }

  init() {
    // Clone items for infinite loop effect
    this.cloneItems();
    
    // Set initial position
    this.updateCarousel(false);
    
    // Add event listeners
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => this.prev());
    }
    
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => this.next());
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.itemsToShow = this.getItemsToShow();
        this.updateCarousel(false);
      }, 250);
    });

    // Touch/swipe support
    this.addTouchSupport();

    // Start autoplay
    this.startAutoplay();

    // Pause autoplay on hover
    this.track.addEventListener('mouseenter', () => this.stopAutoplay());
    this.track.addEventListener('mouseleave', () => this.startAutoplay());
  }

  getItemsToShow() {
    const width = window.innerWidth;
    if (width < 480) return 2;
    if (width < 768) return 3;
    if (width < 1024) return 4;
    return 5;
  }

  cloneItems() {
    // Clone first and last items for seamless loop
    const firstClones = this.items.slice(0, this.itemsToShow).map(item => item.cloneNode(true));
    const lastClones = this.items.slice(-this.itemsToShow).map(item => item.cloneNode(true));
    
    firstClones.forEach(clone => this.track.appendChild(clone));
    lastClones.reverse().forEach(clone => this.track.insertBefore(clone, this.track.firstChild));
    
    // Update items array
    this.items = Array.from(this.track.children);
    this.currentIndex = this.itemsToShow;
  }

  updateCarousel(animate = true) {
    const itemWidth = this.items[0]?.offsetWidth || 0;
    const gap = 60; // Match CSS gap
    const offset = -(this.currentIndex * (itemWidth + gap));
    
    if (animate) {
      this.track.style.transition = 'transform 0.5s ease';
    } else {
      this.track.style.transition = 'none';
    }
    
    this.track.style.transform = `translateX(${offset}px)`;
    
    // Update button states
    this.updateButtons();
  }

  next() {
    this.currentIndex++;
    this.updateCarousel(true);
    
    // Check if we need to reset to create infinite loop
    if (this.currentIndex >= this.items.length - this.itemsToShow) {
      setTimeout(() => {
        this.currentIndex = this.itemsToShow;
        this.updateCarousel(false);
      }, 500);
    }

    this.resetAutoplay();
  }

  prev() {
    this.currentIndex--;
    this.updateCarousel(true);
    
    // Check if we need to reset to create infinite loop
    if (this.currentIndex < this.itemsToShow) {
      setTimeout(() => {
        this.currentIndex = this.items.length - this.itemsToShow * 2;
        this.updateCarousel(false);
      }, 500);
    }

    this.resetAutoplay();
  }

  updateButtons() {
    // For infinite carousel, buttons are always enabled
    if (this.prevButton) {
      this.prevButton.disabled = false;
    }
    if (this.nextButton) {
      this.nextButton.disabled = false;
    }
  }

  addTouchSupport() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.stopAutoplay();
    });

    this.track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    });

    this.track.addEventListener('touchend', () => {
      if (!isDragging) return;
      
      const diff = startX - currentX;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }

      isDragging = false;
      this.startAutoplay();
    });
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

// Initialize all brand carousels
function initBrandCarousels() {
  const carousels = document.querySelectorAll('.brand-carousel-section');
  carousels.forEach(carousel => {
    new BrandCarousel(carousel);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBrandCarousels);
} else {
  initBrandCarousels();
}

// Reinitialize on Shopify section load (theme editor)
if (window.Shopify && window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', initBrandCarousels);
}
