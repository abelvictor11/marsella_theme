class SplitBannerProducts {
  constructor(element) {
    this.section = element;
    this.track = this.section.querySelector('[data-products-track]');
    this.nextButton = this.section.querySelector('[data-products-next]');
    
    if (!this.track) return;

    this.items = Array.from(this.track.children);
    this.currentIndex = 0;
    this.itemsToShow = this.getItemsToShow();
    this.autoplayInterval = null;
    this.autoplayDelay = 4000; // 4 seconds

    this.init();
  }

  init() {
    // Set initial position
    this.updateCarousel(false);
    
    // Add event listeners
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

    // Quick add functionality
    this.initQuickAdd();
  }

  getItemsToShow() {
    const width = window.innerWidth;
    if (width < 480) return 1;
    if (width < 768) return 1.5;
    if (width < 1024) return 2;
    return 2;
  }

  updateCarousel(animate = true) {
    const itemWidth = this.items[0]?.offsetWidth || 0;
    const gap = 20; // Match CSS gap
    const offset = -(this.currentIndex * (itemWidth + gap));
    
    if (animate) {
      this.track.style.transition = 'transform 0.5s ease';
    } else {
      this.track.style.transition = 'none';
    }
    
    this.track.style.transform = `translateX(${offset}px)`;
    
    // Update button state
    this.updateButton();
  }

  next() {
    const maxIndex = Math.max(0, this.items.length - Math.floor(this.itemsToShow));
    
    this.currentIndex++;
    
    // Loop back to start
    if (this.currentIndex > maxIndex) {
      this.currentIndex = 0;
    }
    
    this.updateCarousel(true);
    this.resetAutoplay();
  }

  updateButton() {
    // Button is always enabled for continuous loop
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

  initQuickAdd() {
    const quickAddButtons = this.section.querySelectorAll('.product-quick-add');
    
    quickAddButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = button.dataset.productId;
        this.handleQuickAdd(productId, button);
      });
    });
  }

  handleQuickAdd(productId, button) {
    // Get the first available variant
    fetch(`/products/${productId}.js`)
      .then(response => response.json())
      .then(product => {
        const variantId = product.variants[0].id;
        
        // Add to cart
        return fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: variantId,
            quantity: 1
          })
        });
      })
      .then(response => response.json())
      .then(data => {
        // Show success feedback
        this.showQuickAddFeedback(button, true);
        
        // Trigger cart update event
        document.dispatchEvent(new CustomEvent('cart:updated'));
      })
      .catch(error => {
        console.error('Quick add error:', error);
        this.showQuickAddFeedback(button, false);
      });
  }

  showQuickAddFeedback(button, success) {
    const originalHTML = button.innerHTML;
    
    if (success) {
      button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
      button.style.background = '#4CAF50';
      button.style.color = '#fff';
    } else {
      button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>';
      button.style.background = '#f44336';
      button.style.color = '#fff';
    }
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.background = '';
      button.style.color = '';
    }, 2000);
  }
}

// Initialize all split banner products sections
function initSplitBannerProducts() {
  const sections = document.querySelectorAll('.split-banner-products');
  sections.forEach(section => {
    new SplitBannerProducts(section);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSplitBannerProducts);
} else {
  initSplitBannerProducts();
}

// Reinitialize on Shopify section load (theme editor)
if (window.Shopify && window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', initSplitBannerProducts);
}
