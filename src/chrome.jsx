// Shared chrome: Nav (with page switcher), Footer, Breadcrumbs, SEO head, CTA strip, etc.

// Hash-based router
function useRoute() {
  const [route, setRoute] = React.useState(() => window.location.hash.slice(1) || "/");
  React.useEffect(() => {
    const onHash = () => { setRoute(window.location.hash.slice(1) || "/"); window.scrollTo({top:0,behavior:"instant"}); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (to) => { window.location.hash = to; }];
}

function Link({ to, children, className, ...rest }) {
  return <a href={`#${to}`} className={className} {...rest}>{children}</a>;
}

// ======== Nav (reused across all pages) ========
function SiteNav({ variant = "dark" }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isDark = variant === "dark";

  return (
    <header className={`snav ${isDark?'snav--dark':'snav--light'} ${scrolled?'is-scrolled':''}`}>
      <a href="#/" className="skip-link">Skip to content</a>
      <div className="wrap snav__inner">
        <Link to="/" className="mark">
          <svg viewBox="0 0 40 40" width="26" height="26" aria-hidden="true">
            <path d="M20 4c-2.5 0-4 2-4 4.5v6c0 1.5 1 2.5 2.5 2.5H19v18c0 .6.4 1 1 1s1-.4 1-1V17h.5c1.5 0 2.5-1 2.5-2.5V13h3c2 0 3.5-1.5 3.5-3.5S29 6 27 6h-3v-.5C24 4 22 4 20 4z" fill="currentColor"/>
          </svg>
          <div className="mark__txt">
            <div className="mark__name">{SITE.name}</div>
            <div className="mark__sub">Phoenix · Est. {SITE.founded}</div>
          </div>
        </Link>
        <nav className="snav__links" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="snav__cta">
          <div className="snav__rating">
            <Icon.Google size={14}/>
            <span>{SITE.reviews.google.rating} <span style={{opacity:0.55}}>· {SITE.reviews.google.count}</span></span>
          </div>
          <a href={`tel:${SITE.phone.tel}`} className="btn btn--ghost">
            <Icon.Phone size={14}/> {SITE.phone.display}
          </a>
        </div>
        <button className="snav__menu" onClick={()=>setOpen(!open)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
      {open && (
        <div className="snav__mobile">
          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/services" onClick={()=>setOpen(false)}>Services</Link>
          <Link to="/work" onClick={()=>setOpen(false)}>Work</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link to="/blog" onClick={()=>setOpen(false)}>Journal</Link>
          <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <a href={`tel:${SITE.phone.tel}`} className="btn btn--primary">
            <Icon.Phone size={14}/> {SITE.phone.display}
          </a>
        </div>
      )}
    </header>
  );
}

// ======== Breadcrumbs ========
function Breadcrumbs({ trail }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((t, i) => (
          <li key={i}>
            {t.to ? <Link to={t.to}>{t.label}</Link> : <span aria-current="page">{t.label}</span>}
            {i < trail.length - 1 && <span className="crumbs__sep" aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ======== SEO / JSON-LD head (visible preview card) ========
function SeoCard({ meta }) {
  return (
    <aside className="seo-card" aria-label="SEO preview (template)">
      <div className="seo-card__head">
        <span className="seo-card__tag">SEO</span>
        <span className="seo-card__path">{meta.canonical}</span>
      </div>
      <div className="seo-card__title">{meta.title}</div>
      <div className="seo-card__desc">{meta.description}</div>
      <div className="seo-card__schemas">
        {meta.schemas.map(s => <span key={s} className="seo-card__schema">JSON-LD: {s}</span>)}
      </div>
    </aside>
  );
}

// ======== Footer (reused) ========
function SiteFooter() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="footer__mark">
          <span className="footer__mark-txt display">{SITE.name}</span>
          <span className="footer__mark-sub serif-it">{SITE.tagline}</span>
        </div>

        <div className="footer__grid">
          <address className="footer__nap">
            <div className="footer__eye">Visit the shop</div>
            <div className="footer__addr">
              <div>{SITE.name} Exterior Painting</div>
              <div>{SITE.address.line1}</div>
              <div>{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</div>
            </div>
            <div className="footer__line">
              <Icon.Phone size={13}/>
              <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>
            </div>
            <div className="footer__line">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></svg>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="footer__hrs">
              {SITE.hours.map(([d,h]) => <div key={d}><span>{d}</span> · {h}</div>)}
            </div>
          </address>

          <div className="footer__col">
            <div className="footer__eye">Services</div>
            <ul>
              {SERVICES_DATA.slice(0,8).map(s => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__eye">Neighborhoods</div>
            <ul className="footer__areas">
              {LOCATIONS.map(l => <li key={l.slug}><Link to={`/locations/${l.slug}`}>{l.name}</Link></li>)}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__eye">Sitemap</div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/work">Work &amp; Portfolio</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Journal</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
            <div className="footer__eye" style={{marginTop:24}}>Credentials</div>
            <ul className="footer__creds">
              <li>{SITE.roc}</li>
              {SITE.insurance.map(i => <li key={i}>{i}</li>)}
              <li>BBB {SITE.reviews.bbb} · since 2011</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            © {SITE.founded}–2026 {SITE.name} LLC · Licensed, bonded &amp; insured in Arizona
          </div>
          <div className="footer__small">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>

      <div className="footer__horizon" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 Q200,60 400,75 T800,78 Q1000,65 1200,82 L1200,120 L0,120 Z" fill="var(--ink)" opacity="0.3"/>
          <path d="M0,95 Q300,82 600,90 T1200,92 L1200,120 L0,120 Z" fill="var(--ink)" opacity="0.6"/>
          <path d="M0,105 Q400,98 800,102 T1200,105 L1200,120 L0,120 Z" fill="var(--ink)"/>
          <g fill="var(--ink)" opacity="0.9">
            <path d="M120,95 L120,75 Q120,70 125,70 Q130,70 130,75 L130,95 Z"/>
            <path d="M128,82 Q138,82 138,75 L140,75 L140,85 Q140,90 135,90 L128,90 Z"/>
            <path d="M280,100 L280,70 Q280,64 286,64 Q292,64 292,70 L292,100 Z"/>
            <path d="M288,80 Q300,80 300,70 L302,70 L302,82 Q302,88 296,88 L288,88 Z"/>
            <path d="M278,85 Q268,85 268,75 L266,75 L266,87 Q266,93 272,93 L278,93 Z"/>
            <path d="M960,98 L960,72 Q960,67 965,67 Q970,67 970,72 L970,98 Z"/>
            <path d="M968,82 Q978,82 978,75 L980,75 L980,86 Q980,91 975,91 L968,91 Z"/>
          </g>
        </svg>
      </div>
    </footer>
  );
}

// ======== CTA Strip (reused) ========
function CtaStripShared({ variant = "sand", heading, sub }) {
  const h = heading || <>One call. One crew.<br/><span className="serif-it">One coat of peace of mind.</span></>;
  return (
    <section className={`ctastrip ctastrip--${variant}`} data-screen-label="CTA">
      <div className="wrap">
        <div className="ctastrip__inner">
          <div className="ctastrip__left">
            <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Free estimate</div>
            <h3 className="display ctastrip__title">{h}</h3>
            <p className="ctastrip__p">{sub || "Same-week walkthrough. Itemized bid in 48 hours. Zero pressure."}</p>
          </div>
          <div className="ctastrip__right">
            <a href={`tel:${SITE.phone.tel}`} className="btn btn--dark btn--xl">
              <Icon.Phone size={18}/>
              <span className="btn__stack">
                <span className="btn__label">Call for estimate</span>
                <span className="btn__phone">{SITE.phone.display}</span>
              </span>
            </a>
            <div className="ctastrip__meta">
              <span><Icon.Check size={12}/> Answered in 2 rings</span>
              <span>·</span>
              <span>Mon–Sat, 7a–6p</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Page header (for interior pages)
function PageHeader({ eyebrow, title, subtitle, tone = "dark" }) {
  return (
    <header className={`pg-head pg-head--${tone}`}>
      <div className="wrap">
        <div className="eyebrow pg-head__eye">{eyebrow}</div>
        <h1 className="display pg-head__title">{title}</h1>
        {subtitle && <p className="pg-head__sub">{subtitle}</p>}
      </div>
    </header>
  );
}

window.useRoute = useRoute;
window.Link = Link;
window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
window.Breadcrumbs = Breadcrumbs;
window.SeoCard = SeoCard;
window.CtaStripShared = CtaStripShared;
window.PageHeader = PageHeader;
