class HeaderTransparent {
  constructor() {
    this.header = document.querySelector('[data-header]');
    if (!this.header) return;

    this.mobileToggle = document.querySelector('[data-mobile-menu-toggle]');
    this.mobileMenu = document.querySelector('[data-mobile-menu]');
    this.mobileClose = document.querySelector('[data-mobile-menu-close]');
    this.isHomepage = this.header.classList.contains('header-transparent-home');

    this.init();
  }

  init() {
    // Handle scroll for homepage transparent header
    if (this.isHomepage) {
      this.handleScroll();
      window.addEventListener('scroll', () => this.handleScroll());
    }

    // Mobile menu toggle
    if (this.mobileToggle && this.mobileMenu) {
      this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
      
      if (this.mobileClose) {
        this.mobileClose.addEventListener('click', () => this.closeMobileMenu());
      }

      // Close on overlay click
      this.mobileMenu.addEventListener('click', (e) => {
        if (e.target === this.mobileMenu) {
          this.closeMobileMenu();
        }
      });

      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
          this.closeMobileMenu();
        }
      });
    }
  }

  handleScroll() {
    const scrollThreshold = 50;
    
    if (window.scrollY > scrollThreshold) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  toggleMobileMenu() {
    const isActive = this.mobileMenu.classList.contains('active');
    
    if (isActive) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.mobileMenu.classList.add('active');
    this.mobileToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.mobileMenu.classList.remove('active');
    this.mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HeaderTransparent();
  });
} else {
  new HeaderTransparent();
}
