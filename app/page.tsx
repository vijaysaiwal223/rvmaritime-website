import { ServicesGrid } from "@/components/ui/services-grid";
import { Navbar5 } from "@/components/ui/navbar-5";

const ports = ["Alang", "Bhavnagar", "Kandla", "Mundra", "Jamnagar", "Mumbai", "Cochin", "Vizag", "Paradip", "Haldia"];

export default function Home() {
  return (
    <>
      <Navbar5 />

      <main id="top">
        <section className="hero" aria-label="R V Maritime introduction">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-port.png"
            aria-hidden="true"
          >
            <source src="/assets/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Marine services and engineering</p>
            <h1>Marine support for vessels, owners, and recyclers.</h1>
            <p className="hero-copy">
              R V Maritime Private Limited supports commercial shipping requirements with practical, round-the-clock coordination for port calls, ship recycling, spares, chandling, cargo operations, engineering assistance, and vessel support services across India.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#services">Explore Services</a>
              <a className="button secondary" href="#contact">Request Vessel Support</a>
            </div>
            <div className="hero-panel" aria-label="Operational highlights">
              <div><strong>24/7</strong><span>Operational response</span></div>
              <div><strong>India</strong><span>Port and recycling support</span></div>
              <div><strong>Single Desk</strong><span>Agency, supplies and coordination</span></div>
            </div>
          </div>
        </section>

        <section className="intro band">
          <div className="intro-grid">
            <div className="intro-content">
              <p className="section-label">Company Profile</p>
              <h2>Built for urgent vessel coordination.</h2>
              <div className="intro-copy">
                <p>R V Maritime Private Limited is positioned as a multi-service maritime partner for vessel owners, technical managers, charterers, cash buyers, ship recyclers, suppliers, and offshore operators. The company brings together marine services, engineering assistance, agency attendance, operational follow-up, local coordination, and supply support through one accountable point of contact.</p>
                <p>The service model is designed for real vessel timelines: clear pre-arrival planning, local follow-up, urgent procurement, documentation support, and practical updates until the job is closed.</p>
              </div>
            </div>
            <figure className="operations-card">
              <img src="/assets/operations-desk.png" alt="Maritime operations desk with port planning tools" />
              <figcaption>
                <span>Operations desk</span>
                Operational planning, supplier coordination, and port follow-up handled through one desk.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="services" className="services">
          <div className="section-head">
            <p className="eyebrow">Core Services</p>
            <h2>Support across the vessel lifecycle</h2>
            <p>From arrival planning and port formalities to recycling support and urgent supplies, R V Maritime Private Limited helps keep vessel operations moving with clear communication and practical execution.</p>
          </div>
          <ServicesGrid />
        </section>

        <section id="recycling" className="recycling band">
          <div className="split">
            <div>
              <p className="eyebrow">Alang and Recycling Desk</p>
              <h2>Practical support for vessel delivery and recycling readiness.</h2>
              <p className="section-note">Suitable for owners, cash buyers, masters, managers, and recyclers who need local coordination before and during arrival.</p>
            </div>
            <div className="split-copy">
              <p>R V Maritime Private Limited can present a dedicated recycling support desk for vessels nominated to Indian recycling yards. The service can cover pre-arrival planning, ETA coordination, local authority interface, crew disembarkation support, and beaching-day guidance.</p>
              <ul className="check-list">
                <li>Arrival instructions and local reporting guidance</li>
                <li>Coordination with port, customs, immigration, coast guard, pollution control, and other authorities</li>
                <li>Support for provisions, freshwater, bunkers, transport, hotel, and crew logistics</li>
                <li>Document follow-up connected with recycling readiness and delivery formalities</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="coverage" className="coverage">
          <div className="coverage-grid">
            <div>
              <p className="eyebrow">Network</p>
              <h2>Coverage for major Indian maritime gateways</h2>
              <p>The website can present R V Maritime Private Limited as a single-window coordination partner for key Indian ports and recycling locations, with partner and sub-agent coverage where required.</p>
            </div>
            <div className="port-strip" aria-label="Indicative port coverage">
              {ports.map((port) => <span key={port}>{port}</span>)}
            </div>
          </div>
        </section>

        <section className="why band-dark">
          <div className="section-head compact">
            <p className="eyebrow">Why R V Maritime</p>
            <h2>Clear ownership from first message to final report.</h2>
          </div>
          <div className="why-grid">
            <div><strong>Responsive coordination</strong><p>Operational follow-up for urgent port, vessel, and supply requirements.</p></div>
            <div><strong>Local understanding</strong><p>Practical familiarity with Indian port procedures and recycling-yard workflows.</p></div>
            <div><strong>Multi-service capability</strong><p>Agency, supplies, recycling support, spares, and logistics handled through one desk.</p></div>
            <div><strong>Documentation discipline</strong><p>Support for formalities, clearances, reporting, and stakeholder communication.</p></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need vessel support or a service quotation?</h2>
            <p>Share the vessel name, port, ETA, scope of work, and urgency. R V Maritime Private Limited can respond with the next steps, required documents, and a service plan.</p>
            <div className="contact-strip">
              <span>Port call support</span>
              <span>Urgent supplies</span>
              <span>Recycling coordination</span>
            </div>
          </div>
          <form className="contact-form">
            <label>Name<input type="text" name="name" placeholder="Your name" /></label>
            <label>Email<input type="email" name="email" placeholder="you@example.com" /></label>
            <label>
              Service Required
              <select name="service" defaultValue="Ship agency">
                <option>Ship agency</option>
                <option>Ship recycling support</option>
                <option>Marine spares</option>
                <option>Ship chandling</option>
                <option>Cargo or tank services</option>
                <option>Other maritime support</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows={4} placeholder="Vessel name, port, ETA, and requirements" /></label>
            <button type="submit">Send Enquiry</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="footer-logo" href="#top" aria-label="R V Maritime home">
                <img src="/assets/logo-white-bg.png" alt="R V Maritime Private Limited logo" />
              </a>
              <p>Single-window marine services, engineering assistance, ship recycling coordination, spares, chandling, and vessel support across Indian ports.</p>
            </div>
            <div className="footer-links" aria-label="Footer navigation">
              <div>
                <h2>Services</h2>
                <a href="#services">Ship agency</a>
                <a href="#recycling">Ship recycling</a>
                <a href="#services">Marine spares</a>
                <a href="#services">Ship chandling</a>
              </div>
              <div>
                <h2>Coverage</h2>
                <a href="#coverage">Alang</a>
                <a href="#coverage">Kandla & Mundra</a>
                <a href="#coverage">Mumbai</a>
                <a href="#coverage">Cochin & Vizag</a>
              </div>
            </div>
            <div className="footer-contact">
              <span>Need vessel support?</span>
              <p>Share the vessel name, port, ETA, and scope of work for a quick service plan.</p>
              <a className="footer-cta" href="#contact">Send Enquiry</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 R V Maritime Private Limited. First draft website content for review.</p>
            <p>Marine agency · Ship recycling · Spares · Chandling · Cargo support</p>
          </div>
        </div>
      </footer>
    </>
  );
}
