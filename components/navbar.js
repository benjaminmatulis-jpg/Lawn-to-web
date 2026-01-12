class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center">

          <!-- Logo -->
          <a href="index.html" class="text-xl font-bold tracking-wide text-green-600 hover:text-green-700 transition">
            Lawn<span class="text-slate-900">to</span>Web
          </a>

          <!-- Desktop Links -->
          <div class="ml-auto hidden md:flex items-center gap-8">
            <a href="index.html" class="relative font-medium text-slate-700 hover:text-slate-900 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 hover:after:w-full after:transition-all">
              Home
            </a>
            <a href="services.html" class="relative font-medium text-slate-700 hover:text-slate-900 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 hover:after:w-full after:transition-all">
              Services
            </a>
            <a href="portfolio.html" class="relative font-medium text-slate-700 hover:text-slate-900 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 hover:after:w-full after:transition-all">
              Portfolio
            </a>
            <a href="about.html" class="relative font-medium text-slate-700 hover:text-slate-900 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 hover:after:w-full after:transition-all">
              About
            </a>

            <a href="contact.html" class="ml-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:bg-green-600 hover:shadow-md transition">
              Contact
            </a>
          </div>

          <!-- Mobile Button -->
          <button id="menuBtn" class="ml-auto md:hidden text-slate-800">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden bg-white border-t border-slate-200">
          <div class="px-6 py-4 space-y-3">
            <a href="index.html" class="block font-medium text-slate-800">Home</a>
            <a href="services.html" class="block font-medium text-slate-800">Services</a>
            <a href="portfolio.html" class="block font-medium text-slate-800">Portfolio</a>
            <a href="about.html" class="block font-medium text-slate-800">About</a>
            <a href="contact.html" class="block mt-3 bg-green-500 text-center py-2 rounded-lg font-semibold">
              Contact
            </a>
          </div>
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
