import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Code2, Cpu, Globe2, Mail, Menu, Download,
  Layers, Sparkles, BriefcaseBusiness, GraduationCap, Palette,
  ChartNoAxesCombined, ExternalLink, Volume2, VolumeX
} from "lucide-react";
import "./style.css";

const EMAIL = "mahroos529@gmail.com";
const INSTAGRAM = "https://www.instagram.com/mahrooz_b.md/";
const LINKEDIN = "https://www.linkedin.com/in/mohamed-mahroos";
const GITHUB = "https://github.com/mahroos529-sys";
const ASSET_BASE = import.meta.env.BASE_URL;
const RESUME = `${ASSET_BASE}Mohamed-Mahroos-Resume.pdf`;
const HOME_PORTRAIT = `${ASSET_BASE}mahroos-seated-portrait.jpeg`;
const JOURNEY_PORTRAIT = `${ASSET_BASE}mahroos-standing-portrait.jpeg`;
const DIGITAL_MARKETING_CERT = `${ASSET_BASE}digital-marketing-certificate.png`;
const FULL_STACK_CERT = `${ASSET_BASE}full-stack-certificate.png`;

const timeline = [
  { kind: "PROJECT WORK", title: "Full Stack Development", detail: "Building responsive web experiences and practical website projects.", icon: Code2 },
  { kind: "PROJECT WORK", title: "Digital Marketing & Ad Designing", detail: "Exploring digital campaigns, content, and creative ad design.", icon: Palette },
  { kind: "TRAINING", title: "Full Stack Trainee", detail: "Developing foundational full-stack skills through guided learning and practice.", icon: Layers, certificate: FULL_STACK_CERT },
  { kind: "TRAINING", title: "Digital Marketing Trainee", detail: "Learning SEO, SEM, content marketing, and social media marketing.", icon: ChartNoAxesCombined, certificate: DIGITAL_MARKETING_CERT },
  { kind: "EDUCATION", title: "B.Tech — Information Technology", detail: "SRM Valliammai Engineering College · 2nd Year, 3rd Semester", icon: GraduationCap },
  { kind: "EDUCATION", title: "Higher Secondary", detail: "School education", icon: GraduationCap }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  const heroRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const frame = frameRef.current;
    if (!hero || !frame) return;
    const onMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 6;
      frame.style.setProperty("--rx", `${rotateX}deg`);
      frame.style.setProperty("--ry", `${rotateY}deg`);
      frame.style.setProperty("--mx", `${(x - 0.5) * 18}px`);
      frame.style.setProperty("--my", `${(y - 0.5) * 18}px`);
    };
    const onLeave = () => {
      frame.style.setProperty("--rx", "0deg");
      frame.style.setProperty("--ry", "0deg");
      frame.style.setProperty("--mx", "0px");
      frame.style.setProperty("--my", "0px");
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio.load();
    audio.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false));
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused || audio.muted) {
      audio.muted = false;
      try { await audio.play(); setMusicOn(true); }
      catch { setMusicOn(false); }
    } else {
      audio.pause();
      setMusicOn(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-brand-group">
          <a className="brand" href="#home" onClick={closeMenu}>MM<span>.</span></a>
          <button className="music-toggle" type="button" onClick={toggleMusic} aria-label={musicOn ? "Pause background music" : "Play background music"} title={musicOn ? "Pause music" : "Play music"}>
            {musicOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>
        </div>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
        <nav className={menuOpen ? "navigation is-open" : "navigation"}>
          {["Home", "About", "Skills", "Journey", "Projects", "Contact"].map((item) =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <audio ref={audioRef} src={`${ASSET_BASE}song.mp3`} loop preload="auto" />
      <main>
        <section className="hero" id="home" ref={heroRef}>
          <div className="hero-video-bg" aria-hidden="true">
            <video className="hero-video-fill" autoPlay muted loop playsInline preload="metadata" tabIndex={-1}>
              <source src={`${ASSET_BASE}hero-video.mp4`} type="video/mp4" />
            </video>
            <video className="hero-video-full" autoPlay muted loop playsInline preload="metadata" aria-label="Full uncropped cinematic portfolio background video">
              <source src={`${ASSET_BASE}hero-video.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <p className="hero-kicker">HELLO, I’M</p>
            <h1>Mohamed<br /><em>Mahroos.</em></h1>
            <h2>Software Developer <span>·</span> Tech Enthusiast</h2>
            <div className="specialties">
              <span>FULL STACK</span><i /> <span>UI/UX DESIGN</span><i /> <span>DATA SCIENCE</span>
            </div>
            <p className="hero-copy">Curious by nature. Building thoughtful digital experiences with purpose and precision.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
              <a className="button button-outline" href={RESUME} download>Download resume <Download size={15} /></a>
            </div>
            <div className="hero-meta"><span>BASED IN INDIA</span><b>·</b><span>B.TECH INFORMATION TECHNOLOGY</span></div>
          </div>
          <div className="hero-frame-wrap" ref={frameRef}>
            <div className="hero-frame">
              <img className="hero-portrait" src={HOME_PORTRAIT} alt="Mohamed Mahroos seated in a black suit" />
              <div className="frame-top"><span>MOHAMED MAHROOS</span><span>PORTFOLIO / 2026</span></div>
              <div className="frame-bottom"><span>DESIGN · DEVELOPMENT · DIGITAL</span><span>SCROLL TO EXPLORE ↓</span></div>
            </div>
          </div>
          <div className="hero-side-note">INDEPENDENT THINKER<br />CREATIVE BUILDER</div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="about-grid">
            <div className="about-heading">
              <p className="eyebrow">A LITTLE INTRODUCTION</p>
              <h2>Curious by nature.<br /><em>Developer</em> by choice.</h2>
            </div>
            <div className="about-copy">
              <p>I’m Mohamed Mahroos, an Information Technology student at SRM Valliammai with an interest in software development and web designing.</p>
              <p>I enjoy learning by building — from web experiences to company projects — and turning ideas into practical, user-focused solutions.</p>
              <div className="education-strip">
                <div><span>B.TECH</span><strong>Information Technology</strong></div>
                <div><span>COLLEGE</span><strong>SRM Valliammai</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label">02 / WHAT I DO</div>
          <div className="section-heading">
            <div><p className="eyebrow">MY TOOLKIT</p><h2>Skills & <em>interests</em></h2></div>
            <p>Areas I’m learning, creating, and growing in.</p>
          </div>
          <div className="skill-grid">
            <article className="skill-card"><Code2 /><h3>Web Development</h3><p>HTML · CSS · JavaScript · React</p></article>
            <article className="skill-card"><Palette /><h3>Web Designing</h3><p>UI layouts · Visual design · Responsive experiences</p></article>
            <article className="skill-card"><Layers /><h3>Full Stack</h3><p>Frontend foundations · Backend concepts · GitHub</p></article>
            <article className="skill-card"><Sparkles /><h3>UI/UX Design</h3><p>User-focused interfaces · Design thinking</p></article>
            <article className="skill-card"><ChartNoAxesCombined /><h3>Data Science</h3><p>Foundational data science and analytics</p></article>
            <article className="skill-card"><Globe2 /><h3>Digital Marketing</h3><p>SEO · SEM · Content · Social media marketing</p></article>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="section-label">03 / EXPERIENCE & EDUCATION</div>
          <div className="section-heading">
            <div><p className="eyebrow">THE PATH SO FAR</p><h2>My <em>journey</em></h2></div>
            <p>Project work, training, and education.</p>
          </div>
          <div className="journey-layout">
          <div className="timeline">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return <article className="timeline-item" key={`${item.kind}-${item.title}`}>
                <div className="timeline-marker"><Icon size={17} /></div>
                <div className="timeline-content"><span>{item.kind}</span><h3>{item.title}</h3><p>{item.detail}</p>{item.certificate && <a className="certificate-link" href={item.certificate} target="_blank" rel="noreferrer"><GraduationCap size={14} /> View Certificate <ArrowUpRight size={13} /></a>}</div>
                <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
              </article>;
            })}
          </div>
          <aside className="journey-portrait-card"><img src={JOURNEY_PORTRAIT} alt="Mohamed Mahroos standing in a black suit" /><div className="journey-photo-caption"><span>THE JOURNEY</span><strong>Learning. Creating. Growing.</strong></div></aside>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label">04 / SELECTED WORK</div>
          <div className="section-heading">
            <div><p className="eyebrow">FEATURED PROJECT</p><h2>Things I’ve <em>built</em></h2></div>
            <p>Ideas turned into practical digital experiences.</p>
          </div>
          <article className="featured-project">
            <div className="project-art">
              <div className="project-art-glow" />
              <div className="project-window">
                <div className="window-dots"><i /><i /><i /></div>
                <div className="juice-wordmark">GREEN<br /><em>NATURAL</em></div>
                <div className="juice-sub">FRESHNESS IN EVERY SIP.</div>
                <div className="juice-bottles"><span>JOOCY</span><span>BASIL</span><span>FRESH</span></div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-type">WEB DEVELOPMENT · PRODUCT WEBSITE</span>
              <h3>Green Natural<br /><em>Website</em></h3>
              <p>A multi-page product website experience, built with a focus on clear structure, visual presentation, and interactive product browsing.</p>
              <div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive UI</span></div>
              <a className="text-link" href="https://mahroos529-sys.github.io/green-natural-website/" target="_blank" rel="noreferrer">View live project <ExternalLink size={15} /></a>
            </div>
          </article>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-label">05 / CONTACT</div>
          <div className="contact-panel">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let’s create something<br /><em>meaningful.</em></h2>
            <a className="button button-gold" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's connect")}`}>Say hello <ArrowUpRight size={16} /></a>
            <div className="social-links">
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
              <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
              <a href={`mailto:${EMAIL}`}><Mail size={14} /> Email</a>
            </div>
            <p className="email-line">{EMAIL}</p>
          </div>
        </section>
      </main>
      <footer className="site-footer"><a className="brand" href="#home">MM<span>.</span></a><small>DESIGNED & BUILT BY MOHAMED MAHROOS</small><small>© 2026</small></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
