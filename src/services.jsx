// Services grid
const SERVICES = [
  {
    n: "01",
    icon: "Paint",
    title: "Full Exterior Repaint",
    blurb: "Heat-cured acrylic systems engineered for 115°F summers. 3-stage prep, elastomeric crack bridging, sun-rated topcoats.",
    tags: ["Stucco", "Block", "Siding"],
  },
  {
    n: "02",
    icon: "Brick",
    title: "Stucco & Masonry Repair",
    blurb: "Hairline to structural. We patch, match, and texture-blend so repairs disappear under color.",
    tags: ["Patch", "Re-texture", "Color match"],
  },
  {
    n: "03",
    icon: "Trim",
    title: "Trim, Fascia & Eaves",
    blurb: "Fine-line cutting, wood rot replacement, and high-build enamel that shrugs off monsoon rain.",
    tags: ["Wood repair", "Enamel", "Caulking"],
  },
  {
    n: "04",
    icon: "Palette",
    title: "HOA Color Consulting",
    blurb: "Pre-approved palettes for Scottsdale, Paradise Valley & Arcadia HOAs. Renderings before a drop of paint.",
    tags: ["Dunn-Edwards", "Sherwin-Williams", "Renderings"],
  },
  {
    n: "05",
    icon: "Roof",
    title: "Cool-Roof Coatings",
    blurb: "Reflective elastomeric systems that drop rooftop temps 30–50°F and seal against UV checking.",
    tags: ["Reflective", "ENERGY STAR", "10yr"],
  },
  {
    n: "06",
    icon: "Building",
    title: "Commercial & Multi-Family",
    blurb: "After-hours crews, dust control, and traffic-managed jobsites for HOAs, retail, and office exteriors.",
    tags: ["After-hours", "Scheduled", "Insured"],
  },
];

function Services() {
  const [hover, setHover] = React.useState(null);
  return (
    <section id="services" className="services" data-screen-label="02 Services">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__left">
            <div className="eyebrow" style={{color:'var(--clay-2)'}}>◇ What we do</div>
            <h2 className="display section-head__title">
              Six ways we<br/>protect your<br/><span className="serif-it">exterior.</span>
            </h2>
          </div>
          <div className="section-head__right">
            <p>
              Every surface in Phoenix fights UV, thermal cycling, and monsoon moisture.
              Our systems are specified for each — so they last two to three times longer than big-box crews.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="inline-cta">
              Scope your project <Icon.Arrow size={14}/>
            </a>
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const I = Icon[s.icon];
            const active = hover === i;
            return (
              <article
                key={s.n}
                className={`svc-card ${active?'is-active':''}`}
                onMouseEnter={()=>setHover(i)}
                onMouseLeave={()=>setHover(null)}
              >
                <div className="svc-card__top">
                  <div className="svc-card__n">{s.n}</div>
                  <div className="svc-card__icon"><I size={26}/></div>
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__blurb">{s.blurb}</p>
                <div className="svc-card__tags">
                  {s.tags.map(t=> <span key={t}>{t}</span>)}
                </div>
                <div className="svc-card__more">
                  <span>Learn more</span> <Icon.ArrowUpRight size={14}/>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
