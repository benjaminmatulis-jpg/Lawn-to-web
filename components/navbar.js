class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="sticky top-0 z-50 bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">
          
          <!-- Logo -->
          <a href="index.html" class="text-xl font-bold text-green-500">
            Lawn to Web
          </a>

          <!-- Desktop Links -->
          <div class="ml-auto hidden md:flex items-center gap-6">
            <a href="index.html" class="font-medium text-slate-800">Home</a>
            <a href="services.html" class="font-medium text-slate-800">Services</a>
            <a href="portfolio.html" class="font-medium text-slate-800">Portfolio</a>
            <a href="about.html" class="font-medium text-slate-800">About</a>
            <a href="contact.html" class="bg-green-500 text-white px-4 py-2 rounded-md font-medium">
              Contact
            </a>
          </div>

          <!-- Mobile Button -->
          <button id="menuBtn" class="ml-auto md:hidden">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
          <a href="index.html" class="block px-6 py-3">Home</a>
          <a href="services.html" class="block px-6 py-3">Services</a>
          <a href="portfolio.html" class="block px-6 py-3">Portfolio</a>
          <a href="about.html" class="block px-6 py-3">About</a>
          <a href="contact.html" class="block px-6 py-3 font-semibold text-green-600">
            Contact
          </a>
        </div>
      </nav>
    `;

    const btn = this.querySelector('#menuBtn');
    const menu = this.querySelector('#mobileMenu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
