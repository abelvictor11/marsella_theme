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

  async handleQuickAdd(productId, button) {
    try {
      // Disable button during process
      button.disabled = true;
      
      // Add to cart directly with product ID (first variant)
      const formData = {
        items: [{
          id: productId,
          quantity: 1
        }]
      };
      
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }
      
      const data = await response.json();
      
      // Show success feedback
      this.showQuickAddFeedback(button, true);
      
      // Update cart count
      this.updateCartCount();
      
      // Trigger cart update event
      document.dispatchEvent(new CustomEvent('cart:updated'));
      
    } catch (error) {
      console.error('Quick add error:', error);
      this.showQuickAddFeedback(button, false);
    } finally {
      button.disabled = false;
    }
  }
  
  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      // Update all cart count elements
      const cartCountSelectors = [
        '.cart-count',
        '[data-cart-count]',
        '.cart-count-bubble',
        '#cart-icon-bubble',
        '.cartCount',
        '[data-header-cart-count]'
      ];
      
      cartCountSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.textContent = cart.item_count;
          // Add visible class if count > 0
          if (cart.item_count > 0) {
            element.classList.add('visible');
          }
        });
      });
      
      // Trigger cart drawer update if it exists
      if (typeof window.theme !== 'undefined' && window.theme.cart) {
        window.theme.cart.getCart();
      }
      
      // Alternative: trigger custom event for cart refresh
      document.dispatchEvent(new CustomEvent('cart:refresh', { detail: cart }));
      
    } catch (error) {
      console.error('Cart count update error:', error);
    }
  }

  showQuickAddFeedback(button, success) {
    const originalHTML = button.innerHTML;
    
    if (success) {
      // Checkmark icon - better centered and sized
      button.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      button.style.background = '#F2D953';
      button.style.color = '#000';
      button.style.borderColor = '#F2D953';
      button.style.transform = 'scale(1.05)';
      
      // Add success animation
      button.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    } else {
      // X icon for error
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      button.style.background = '#f44336';
      button.style.color = '#fff';
      button.style.borderColor = '#f44336';
    }
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.background = '';
      button.style.color = '';
      button.style.borderColor = '';
      button.style.transform = '';
      button.style.transition = '';
    }, 2500);
  }
}

// Initialize all split banner products sections
function initSplitBannerProducts() {
  const sections = document.querySelectorAll('.split-banner-products');
  sections.forEach(section => {
    // Check if already initialized
    if (!section.dataset.splitBannerInit) {
      new SplitBannerProducts(section);
      section.dataset.splitBannerInit = 'true';
    }
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

// Listen for cart refresh events to update cart sidebar
document.addEventListener('cart:refresh', async (event) => {
  // Update cart sidebar content if it exists
  const cartSidebar = document.querySelector('.halo-cart-sidebar, [data-cart-sidebar]');
  if (cartSidebar) {
    try {
      // Fetch updated cart HTML
      const response = await fetch('/?section_id=cart-drawer');
      if (response.ok) {
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('.previewCart, [data-cart-content]');
        const currentContent = cartSidebar.querySelector('.previewCart, [data-cart-content]');
        
        if (newContent && currentContent) {
          currentContent.innerHTML = newContent.innerHTML;
        }
      }
    } catch (error) {
      console.log('Cart sidebar update skipped:', error);
    }
  }
});
