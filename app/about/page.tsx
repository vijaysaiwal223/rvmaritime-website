import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Globe2, Handshake, MapPin, ShieldCheck } from "lucide-react";

import { Navbar5 } from "@/components/ui/navbar-5";
import { SiteFooter } from "@/components/ui/site-footer";

export const metadata: Metadata = {
  title: "About R V Maritime Private Limited",
  description:
    "Meet R V Maritime Private Limited, a relationship-led maritime company with more than 20 years of experience supporting ship owners, managers, and partners worldwide.",
};

const leaders = [
  {
    name: "Mr. Vinay Kumar Tripathi",
    role: "Founder",
    focus: "Marine engineering and technical guidance",
    experience: "15+ years of experience in technical ship operations and maintenance.",
    image: "/assets/about-headshot-03.jpg",
  },
  {
    name: "Mr. Vivek Mishra",
    role: "Co-Founder and Managing Director",
    focus: "Operations and technical leadership",
    experience: "12+ years of experience in technical ship operations and maintenance.",
    image: "/assets/about-headshot-02.jpg",
  },
  {
    name: "Mr. Ridham Sonpal",
    role: "Co-Founder and Director",
    focus: "Shipping, logistics, operations, and growth",
    experience: "3 years of experience in ship operations and marketing.",
    image: "/assets/about-headshot-01.jpg",
  },
];

const highlights = [
  { value: "20+ years", label: "Experience in maritime and shipping support" },
  { value: "Bhavnagar", label: "Our home and registered head office in Gujarat" },
  { value: "Global reach", label: "Relationships across India and overseas markets" },
];

const locations = ["Bhavnagar", "Mumbai", "Lucknow", "Mirzapur", "Chennai", "Singapore", "Dubai", "U.K."];

const values = [
  {
    title: "We understand the work",
    description: "Our roots in marine engineering and seafaring help us understand the pressure behind every vessel schedule and every request.",
    icon: Compass,
  },
  {
    title: "We stay accountable",
    description: "Customers work with a responsive team that follows through, communicates clearly, and takes ownership from enquiry to completion.",
    icon: ShieldCheck,
  },
  {
    title: "We value relationships",
    description: "We believe lasting partnerships are built through trust, practical support, and consistent service over time.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar5 />
      <main id="top" className="about-page">
        <section className="about-hero" aria-label="About R V Maritime">
          <div className="about-hero-grid">
            <div className="about-hero-copy">
              <p className="eyebrow">About R V Maritime</p>
              <h1>A maritime company built on experience, trust, and dependable relationships.</h1>
              <p>
                R V Maritime Private Limited brings together marine engineers, seafarers, and shipping professionals with one shared purpose: to be a reliable partner to the people who keep vessels moving.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="/#contact">Talk to Our Team</a>
                <a className="button secondary" href="/#services">Explore Our Services</a>
              </div>
            </div>
            <figure className="about-hero-media">
              <img src="/assets/operations-desk.png" alt="The R V Maritime team coordinating vessel support" />
              <figcaption>
                <span>One team, one point of contact</span>
                Clear communication and dependable follow-through, wherever our customers need support.
              </figcaption>
            </figure>
          </div>
          <div className="about-stat-strip" aria-label="Company highlights">
            {highlights.map((item) => (
              <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>
            ))}
          </div>
        </section>

        <section className="about-story band">
          <div className="about-two-column">
            <div>
              <p className="section-label">Our Story</p>
              <h2>From specialist beginnings to a trusted maritime partner.</h2>
            </div>
            <div className="about-rich-copy">
              <p>
                R V Maritime began with a close understanding of ships, machinery, and the realities of life at sea. Over more than two decades, that experience has grown into a company serving ship owners, operators, managers, and business partners in India and around the world.
              </p>
              <p>
                Our work has expanded, but our approach has stayed personal. We listen carefully, respond practically, and bring the right people together to solve each requirement. Whether the need is planned or urgent, our customers know there is an experienced team behind every commitment.
              </p>
              <p>
                Bhavnagar remains our home. From there, our network extends through key Indian cities and international maritime centres, giving us local knowledge with a wider global outlook.
              </p>
              <div className="about-location-strip" aria-label="Office and representative network">
                {locations.map((location) => <span key={location}>{location}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="about-pillars band">
          <div className="section-head">
            <p className="eyebrow">What Matters to Us</p>
            <h2>A practical way of working, shaped by the maritime world.</h2>
            <p>Our company is defined less by a list of services and more by how we show up for the people who rely on us.</p>
          </div>
          <div className="pillar-grid">
            {values.map(({ title, description, icon: Icon }) => (
              <article className="pillar-card" key={title}>
                <div className="pillar-icon"><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="leadership" className="about-leadership">
          <div className="section-head compact">
            <p className="eyebrow">Our Leadership</p>
            <h2>Experienced people with a shared commitment.</h2>
            <p>R V Maritime is led by professionals whose backgrounds span marine engineering, vessel operations, shipping, logistics, and customer support.</p>
          </div>
          <div id="leadership-team" className="leader-grid">
            {leaders.map((leader) => (
              <article className="leader-card" key={leader.name}>
                <Image
                  className="leader-photo"
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role} at R V Maritime`}
                  width={1254}
                  height={1254}
                  sizes="(max-width: 700px) calc(100vw - 44px), (max-width: 1180px) 50vw, 33vw"
                />
                <div className="leader-details">
                  <p>{leader.role}</p>
                  <h3>{leader.name}</h3>
                  <span className="leader-focus">{leader.focus}</span>
                  <span className="leader-experience">{leader.experience}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-promise band-dark">
          <div className="about-two-column">
            <div>
              <p className="eyebrow">Our Promise</p>
              <h2>Support that feels close, even across oceans.</h2>
            </div>
            <div className="about-promise-copy">
              <p>
                Shipping depends on timing, clarity, and trust. We work as an extension of our customers&apos; teams, keeping communication direct and decisions grounded in what is practical for the vessel and the business.
              </p>
              <div className="about-promise-notes">
                <div><Globe2 aria-hidden="true" /><span>Indian roots with an international network and worldwide outlook.</span></div>
                <div><MapPin aria-hidden="true" /><span>Local coordination backed by people who understand ports and vessel schedules.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta band">
          <div className="about-cta-inner">
            <div>
              <p className="eyebrow">Work With Us</p>
              <h2>Let us be the team you can call when it matters.</h2>
              <p>Tell us about your vessel, schedule, or requirement. Our team will listen, understand the situation, and help shape the right next step.</p>
            </div>
            <div className="about-cta-actions">
              <a className="button primary" href="/#contact">Start a Conversation</a>
              <a className="button secondary" href="/#services">View Our Services</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
