// Hero — full-bleed photo, dark overlay, oversized type, phone CTA
const PHONE_DISPLAY = "(480) 555-5555";
const PHONE_TEL = "4805555555";

const HERO_IMAGES = {
  // Curated Unsplash desert architecture / Phoenix-style homes
  photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop", // modern stucco home
  alt1: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2400&auto=format&fit=crop", // desert home w pool
  alt2: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2400&auto=format&fit=crop", // warm tone home
};

function Hero() {
  const [scrolled, setScrolled] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax = Math.min(scrolled * 0.3, 180);
  const overlayBoost = Math.min(scrolled / 600, 0.35);

  return (
    <section className="hero" data-screen-label="01 Hero">
      {/* photo layer */}
      <div className="hero__photo" style={{ transform: `translate3d(0, ${parallax}px, 0) scale(1.08)` }}>
        <img src={HERO_IMAGES.photo} alt="Freshly painted Phoenix home at golden hour" />
      </div>
      {/* gradient overlays */}
      <div className="hero__scrim" style={{ opacity: 1 + overlayBoost }} />
      <div className="hero__vignette" />
      {/* grain */}
      <div className="hero__grain" />

      {/* Top bar */}
      <header className={`nav ${scrolled > 40 ? 'is-scrolled' : ''}`}>
        <div className="wrap nav__inner">
          <a href="#" className="mark">
            <svg viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
              <path d="M20 4c-2.5 0-4 2-4 4.5v6c0 1.5 1 2.5 2.5 2.5H19v18c0 .6.4 1 1 1s1-.4 1-1V17h.5c1.5 0 2.5-1 2.5-2.5V13h3c2 0 3.5-1.5 3.5-3.5S29 6 27 6h-3v-.5C24 4 22 4 20 4z" fill="var(--sand)"/>
            </svg>
            <div className="mark__txt">
              <div className="mark__name">Saguaro &amp; Co.</div>
              <div className="mark__sub">Phoenix · Est. 2009</div>
            </div>
          </a>
          <nav className="nav__links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#areas">Areas</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav__cta">
            <div className="nav__rating">
              <Icon.Google size={14}/>
              <span>4.9 <span style={{opacity:0.55}}>· 312</span></span>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="btn btn--ghost">
              <Icon.Phone size={14}/> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      {/* Main hero content */}
      <div className="wrap hero__content">
        <div className="hero__eye">
          <span className="pulse"/> <span>Now booking — April &amp; May 2026</span>
        </div>

        <h1 className="hero__h1 display">
          The exterior paint<br/>
          that outlasts<br/>
          <span className="serif-it">the Sonoran sun.</span>
        </h1>

        <p className="hero__lede">
          Premium exterior painting for Paradise Valley, Scottsdale, Arcadia &amp; greater Phoenix.
          Heat‑rated systems, obsessive prep, no surprises.
        </p>

        <div className="hero__actions">
          <a href={`tel:${PHONE_TEL}`} className="btn btn--primary btn--xl">
            <Icon.Phone size={18}/>
            <span className="btn__stack">
              <span className="btn__label">Call for a free estimate</span>
              <span className="btn__phone">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a href="#work" className="btn btn--link">
            See recent work <Icon.ArrowUpRight size={14}/>
          </a>
        </div>

        {/* Trust strip */}
        <div className="trust">
          <div className="trust__item">
            <div className="trust__stars">
              {[0,1,2,3,4].map(i=> <Icon.Star key={i} size={13}/>)}
            </div>
            <div className="trust__val">4.9 / 5</div>
            <div className="trust__lbl">312 Google reviews</div>
          </div>
          <div className="trust__divider"/>
          <div className="trust__item">
            <div className="trust__val">16<span className="trust__sub">yrs</span></div>
            <div className="trust__lbl">Painting Phoenix homes</div>
          </div>
          <div className="trust__divider"/>
          <div className="trust__item">
            <div className="trust__val">2,400+</div>
            <div className="trust__lbl">Exteriors completed</div>
          </div>
          <div className="trust__divider"/>
          <div className="trust__item">
            <div className="trust__val">10<span className="trust__sub">yr</span></div>
            <div className="trust__lbl">Workmanship warranty</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line"><div className="hero__scroll-dot"/></div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.PHONE_DISPLAY = PHONE_DISPLAY;
window.PHONE_TEL = PHONE_TEL;
