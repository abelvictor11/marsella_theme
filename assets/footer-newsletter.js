class FooterNewsletter {
  constructor() {
    this.form = document.getElementById('footer-newsletter-form');
    if (!this.form) return;

    this.emailInput = this.form.querySelector('input[type="email"]');
    this.submitButton = this.form.querySelector('.newsletter-submit-button');
    this.responseDiv = this.form.querySelector('.newsletter-response');

    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  async handleSubmit() {
    const email = this.emailInput.value.trim();

    if (!this.validateEmail(email)) {
      this.showResponse('Por favor ingresa un email válido', 'error');
      return;
    }

    // Disable button during submission
    this.submitButton.disabled = true;
    this.submitButton.style.opacity = '0.6';

    try {
      const formData = new FormData(this.form);
      
      const response = await fetch(this.form.action || '/contact', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        }
      });

      if (response.ok) {
        this.showResponse('¡Gracias por suscribirte! Revisa tu email.', 'success');
        this.emailInput.value = '';
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      this.showResponse('Hubo un error. Por favor intenta de nuevo.', 'error');
    } finally {
      // Re-enable button
      this.submitButton.disabled = false;
      this.submitButton.style.opacity = '1';
    }
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  showResponse(message, type) {
    this.responseDiv.textContent = message;
    this.responseDiv.className = `newsletter-response ${type}`;
    this.responseDiv.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
      this.responseDiv.style.display = 'none';
    }, 5000);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new FooterNewsletter();
  });
} else {
  new FooterNewsletter();
}
