export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="/" aria-label="R V Maritime home">
              <img src="/assets/logo-white-bg.png" alt="R V Maritime Private Limited logo" />
            </a>
            <p>Single-window marine services, engineering assistance, ship recycling coordination, spares, chandling, and vessel support across Indian ports.</p>
          </div>
          <div className="footer-links" aria-label="Footer navigation">
            <div>
              <h2>Company</h2>
              <a href="/about">About R V Maritime</a>
              <a href="/#services">Services</a>
              <a href="/#coverage">Coverage</a>
              <a href="/#contact">Contact</a>
            </div>
            <div>
              <h2>Services</h2>
              <a href="/#services">Ship agency</a>
              <a href="/#recycling">Ship recycling</a>
              <a href="/#services">Marine spares</a>
              <a href="/#services">Ship chandling</a>
            </div>
          </div>
          <div className="footer-contact">
            <span>Need vessel support?</span>
            <p>Share the vessel name, port, ETA, and scope of work for a quick service plan.</p>
            <a className="footer-cta" href="/#contact">Send Enquiry</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 R V Maritime Private Limited. First draft website content for review.</p>
          <p>Marine agency · Ship recycling · Spares · Chandling · Cargo support</p>
        </div>
      </div>
    </footer>
  );
}
