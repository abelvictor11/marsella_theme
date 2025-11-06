/**
 * Collection Filters Initialization
 * Ensures the filters overlay loads correctly with the new class structure
 */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilters);
  } else {
    initFilters();
  }

  function initFilters() {
    // Check if we're on a collection page
    const filtersSidebar = document.querySelector('.filters-sidebar');
    const filtersOverlay = document.querySelector('.filters-overlay');
    
    if (!filtersSidebar || !filtersOverlay) {
      console.log('Filters sidebar not found on this page');
      return;
    }

    // Ensure collection-filters-overlay.js has loaded
    if (typeof CollectionFiltersOverlay === 'undefined') {
      console.error('CollectionFiltersOverlay class not found. Make sure collection-filters-overlay.js is loaded.');
      return;
    }

    console.log('✓ Filters system initialized successfully');
    
    // Add helper for debugging
    window.debugFilters = function() {
      const sidebar = document.querySelector('.filters-sidebar');
      const overlay = document.querySelector('.filters-overlay');
      const activeFilters = document.querySelectorAll('.filters-sidebar input[type="checkbox"]:checked');
      
      console.log('=== Filters Debug Info ===');
      console.log('Sidebar found:', !!sidebar);
      console.log('Sidebar active:', sidebar?.classList.contains('active'));
      console.log('Overlay found:', !!overlay);
      console.log('Overlay active:', overlay?.classList.contains('active'));
      console.log('Active filters count:', activeFilters.length);
      console.log('Is mobile view:', window.innerWidth <= 768);
      console.log('=========================');
    };
  }

  // Re-initialize on Shopify section reload (for theme editor)
  if (window.Shopify && window.Shopify.designMode) {
    document.addEventListener('shopify:section:load', function(event) {
      // Small delay to ensure DOM is updated
      setTimeout(initFilters, 100);
    });
  }
})();
