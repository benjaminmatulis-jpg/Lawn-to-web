class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background-color: #0f172a;
          color: #f8fafc;
          padding: 3rem 1rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #22c55e;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .footer-description {
          color: white;
          margin-bottom: 1.5rem;
        }
.footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
.footer-link:hover {
          /* No color change */
        }
.social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-link {
          color: white;
          transition: color 0.3s;
        }
.social-link:hover {
          /* No color change */
        }
.footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid #1e293b;
          text-align: center;
          color: white;
          font-size: 0.875rem;
}
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="footer-container">
        <div>
          <a href="index.html" class="footer-logo">Lawn to Web</a>
            <p class="footer-description">
            Helping lawn care businesses grow with professional websites designed by someone who understands your industry.
          </p>
<div class="social-links">
            <a href="#" class="social-link"><i data-feather="twitter"></i></a>
            <a href="#" class="social-link"><i data-feather="instagram"></i></a>
            <a href="#" class="social-link"><i data-feather="linkedin"></i></a>
          </div>
        </div>
        <div>
          <h3 class="footer-heading">Quick Links</h3>
          <div class="footer-links">
            <a href="index.html" class="footer-link px-3 py-2 rounded-md hover:bg-primary-100/20 inline-block">Home</a>
            <a href="services.html" class="footer-link px-3 py-2 rounded-md hover:bg-primary-100/20 inline-block">Services</a>
            <a href="portfolio.html" class="footer-link px-3 py-2 rounded-md hover:bg-primary-100/20 inline-block">Portfolio</a>
            <a href="about.html" class="footer-link px-3 py-2 rounded-md hover:bg-primary-100/20 inline-block">About Me</a>
            <a href="contact.html" class="footer-link px-3 py-2 rounded-md hover:bg-primary-100/20 inline-block">Contact</a>
</div>
        </div>
        <div>
          <h3 class="footer-heading">Services</h3>
          <div class="footer-links">
            <a href="services.html" class="footer-link px-3 py-2 rounded-md hover:bg-primary-100/20 inline-block">Website Design</a>
            <a href="services.html" class="footer-link px-3 py-2 rounded-md hover:bg-primary-100/20 inline-block">Website Redesign</a>
</div>
        </div>
        <div>
          <h3 class="footer-heading">Contact</h3>
          <div class="footer-links">
            <div class="bg-white/10 p-4 rounded-lg flex items-center gap-3">
                <div class="bg-primary-100/20 p-2 rounded-full">
                    <i data-feather="mail" class="text-primary-600 w-4 h-4"></i>
                </div>
                <div>
                    <h3 class="text-sm font-semibold">Email</h3>
                    <a href="mailto:matulisbenjamin@gmail.com" class="text-[#45cb6e] hover:underline">matulisbenjamin@gmail.com</a>
</div>
            </div>
</div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Lawn to Web. All rights reserved.</p>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);