class CollectionFiltersOverlay {
  constructor() {
    this.sidebar = document.querySelector('.page-sidebar');
    this.overlay = document.querySelector('.filters-overlay');
    this.toggleButton = document.querySelector('[data-filters-toggle]');
    this.closeButton = document.querySelector('[data-close-sidebar]');
    this.applyButton = document.querySelector('[data-filters-apply]');
    this.clearButton = document.querySelector('[data-filters-clear]');
    
    console.log('CollectionFiltersOverlay initialized', {
      sidebar: !!this.sidebar,
      overlay: !!this.overlay,
      toggleButton: !!this.toggleButton,
      closeButton: !!this.closeButton
    });
    
    if (!this.sidebar || !this.overlay || !this.toggleButton) {
      console.warn('Missing required elements for filters overlay');
      return;
    }

    this.init();
  }

  init() {
    // Ensure sidebar starts hidden
    this.sidebar.classList.remove('active');
    this.overlay.classList.remove('active');
    
    // Toggle filters
    this.toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Toggle button clicked');
      this.openFilters();
    });
    
    // Close filters
    if (this.closeButton) {
      this.closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Close button clicked');
        this.closeFilters();
      });
    }
    
    // Close on overlay click
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        console.log('Overlay clicked');
        this.closeFilters();
      }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.sidebar.classList.contains('active')) {
        console.log('ESC key pressed');
        this.closeFilters();
      }
    });

    // Apply filters
    if (this.applyButton) {
      this.applyButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Apply button clicked');
        this.applyFilters();
      });
    }

    // Clear filters
    if (this.clearButton) {
      this.clearButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Clear button clicked');
        this.clearFilters();
      });
    }

    // Update filter count
    this.updateFilterCount();
    
    // Listen for filter changes
    this.sidebar.addEventListener('change', () => {
      this.updateFilterCount();
    });

    // Collapsible filter blocks
    this.initCollapsibleBlocks();
    
    // Scroll indicator
    this.initScrollIndicator();
    
    console.log('Filters overlay initialized successfully');
  }

  initScrollIndicator() {
    const wrapper = this.sidebar.querySelector('.halo-sidebar-wrapper');
    if (!wrapper) return;
    
    wrapper.addEventListener('scroll', () => {
      if (wrapper.scrollTop > 10) {
        wrapper.classList.add('is-scrolled');
      } else {
        wrapper.classList.remove('is-scrolled');
      }
    });
  }

  openFilters() {
    console.log('Opening filters...');
    this.sidebar.classList.add('active');
    this.overlay.classList.add('active');
    document.body.classList.add('filters-open');
    document.body.style.overflow = 'hidden';
    
    // Force scroll to top of sidebar
    const wrapper = this.sidebar.querySelector('.halo-sidebar-wrapper');
    if (wrapper) {
      wrapper.scrollTop = 0;
    }
  }

  closeFilters() {
    console.log('Closing filters...');
    this.sidebar.classList.remove('active');
    this.overlay.classList.remove('active');
    document.body.classList.remove('filters-open');
    document.body.style.overflow = '';
  }

  applyFilters() {
    // Trigger form submission or filter update
    const form = this.sidebar.querySelector('form');
    if (form) {
      form.submit();
    }
    this.closeFilters();
  }

  clearFilters() {
    // Uncheck all checkboxes
    const checkboxes = this.sidebar.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });

    // Clear price inputs
    const priceInputs = this.sidebar.querySelectorAll('input[type="number"]');
    priceInputs.forEach(input => {
      input.value = '';
    });

    // Update count
    this.updateFilterCount();

    // Submit form to clear filters
    const form = this.sidebar.querySelector('form');
    if (form) {
      // Remove all filter parameters from URL
      const url = new URL(window.location);
      const params = new URLSearchParams(url.search);
      
      // Keep only sort_by parameter
      const sortBy = params.get('sort_by');
      params.forEach((value, key) => {
        if (key !== 'sort_by') {
          params.delete(key);
        }
      });

      window.location.href = url.pathname + (sortBy ? `?sort_by=${sortBy}` : '');
    }
  }

  updateFilterCount() {
    const checkedFilters = this.sidebar.querySelectorAll('input[type="checkbox"]:checked').length;
    const countElement = this.toggleButton.querySelector('.filter-count');
    
    if (countElement) {
      if (checkedFilters > 0) {
        countElement.textContent = checkedFilters;
        countElement.style.display = 'inline-flex';
      } else {
        countElement.style.display = 'none';
      }
    }
  }

  initCollapsibleBlocks() {
    const headings = this.sidebar.querySelectorAll('.sidebarBlock-heading');
    
    headings.forEach(heading => {
      // Add toggle icon if not present
      if (!heading.querySelector('.icon-toggle')) {
        const icon = document.createElement('span');
        icon.className = 'icon-toggle';
        icon.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';
        heading.appendChild(icon);
      }

      heading.addEventListener('click', () => {
        heading.classList.toggle('collapsed');
      });
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CollectionFiltersOverlay();
  });
} else {
  new CollectionFiltersOverlay();
}

// Reinitialize on Shopify section load (theme editor)
if (window.Shopify && window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', () => {
    new CollectionFiltersOverlay();
  });
}
