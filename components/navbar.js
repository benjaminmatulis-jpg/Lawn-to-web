class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
.navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: 700;
          color: #22c55e;
          font-size: 1.25rem;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .nav-link {
          color: #0f172a;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
.nav-link:hover {
          /* No color change */
        }
.nav-button {
          background-color: #22c55e;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          transition: background-color 0.3s;
        }
        .nav-button:hover {
          /* No background-color change */
        }
.mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #334155;
        }
        .mobile-menu {
          display: none;
          padding: 1rem;
          background-color: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .mobile-menu-link {
          display: block;
          padding: 0.75rem 0;
          color: #0f172a;
          text-decoration: none;
          border-bottom: 1px solid #e2e8f0;
        }
.mobile-menu-link:last-child {
          border-bottom: none;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
          .mobile-menu.show {
            display: block;
          }
        }
      </style>
      <div class="navbar-container">
        <a href="index.html" class="logo">Lawn to Web</a>
        <div class="nav-links">
          <a href="index.html" class="nav-link px-4 py-2 rounded-md hover:bg-primary-100 transition">Home</a>
          <a href="services.html" class="nav-link px-4 py-2 rounded-md hover:bg-primary-100 transition">Services</a>
          <a href="portfolio.html" class="nav-link px-4 py-2 rounded-md hover:bg-primary-100 transition">Portfolio</a>
          <a href="about.html" class="nav-link px-4 py-2 rounded-md hover:bg-primary-100 transition">About</a>
          <a href="contact.html" class="nav-link px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition">Contact</a>
</div>
        <button class="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
      </div>
      <div class="mobile-menu hidden">
        <a href="index.html" class="mobile-menu-link px-4 py-2 rounded-md hover:bg-primary-100 transition">Home</a>
        <a href="services.html" class="mobile-menu-link px-4 py-2 rounded-md hover:bg-primary-100 transition">Services</a>
        <a href="portfolio.html" class="mobile-menu-link px-4 py-2 rounded-md hover:bg-primary-100 transition">Portfolio</a>
        <a href="about.html" class="mobile-menu-link px-4 py-2 rounded-md hover:bg-primary-100 transition">About</a>
        <a href="contact.html" class="mobile-menu-link px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition">Contact</a>
</div>
    `;
    
    this.shadowRoot.querySelector('.mobile-menu-button').addEventListener('click', () => {
      const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);