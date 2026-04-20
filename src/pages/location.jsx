// ============ PAGE: /services/[svc]/[loc] OR /locations/[loc] ============
function LocationPage({ serviceSlug = "interior-painting", locSlug = "arcadia" }) {
  const svc = SERVICES_DATA.find(s => s.slug === serviceSlug) || SERVICES_DATA[1];
  const loc = LOCATIONS.find(l => l.slug === locSlug) || LOCATIONS[2];
  const I = Icon[svc.icon];
  const localProjects = PROJECTS.filter(p => p.location === loc.slug);
  const projects = localProjects.length ? localProjects : PROJECTS.slice(0,3);
  const localReviews = REVIEWS_DATA.filter(r => r.location === loc.slug);
  const reviews = localReviews.length ? localReviews : REVIEWS_DATA.slice(0,2);
  const nearby = LOCATIONS.filter(l => l.slug !== loc.slug).slice(0, 6);
  const [bafIdx, setBafIdx] = React.useState(0);
  const [faqOpen, setFaqOpen] = React.useState(0);
  const locFaqs = [
    { q:`How long has ${SITE.name} been serving ${loc.name}?`, a:`We've painted homes in ${loc.name} continuously since 2011. Many are repeat clients on their second or third repaint with us.` },
    { q:`Are you familiar with ${loc.name} HOAs?`, a:`Yes. We have pre-approved palettes on file for every major HOA in ${loc.name} and have handled submittals for well over 200 homes in the area.` },
    { q:`What does ${svc.name.toLowerCase()} typically cost in ${loc.name}?`, a:`${loc.name} homes typically run ${svc.priceFrom}–${svc.priceFrom.includes('$')?'2-3× that':'quote-based'} depending on substrate, square footage, and palette complexity.` },
    { q:`How quickly can you start a project in ${loc.name}?`, a:`${loc.name} is ${loc.drive} from our Arcadia shop, so estimates happen within 2–3 business days. Start dates are typically 3–5 weeks out.` },
  ];

  return (
    <main id="content">
      <section className="loc-hero">
        <div className="wrap">
          <div className="loc-hero__grid">
            <div>
              <div className="eyebrow" style={{color:'var(--sun)',marginBottom:20}}>◇ {loc.name}, Arizona</div>
              <h1 className="display loc-hero__h1">
                {svc.name}<br/>
                in <span className="serif-it" style={{color:'var(--sun)'}}>{loc.name}.</span>
              </h1>
              <p className="loc-hero__lede">
                We've painted {loc.name} homes continuously since 2011 — from mid-century ranches to new-build contemporaries. Our shop is {loc.drive} away, so estimates happen this week.
              </p>
              <div className="loc-hero__stats">
                <div><div className="loc-hero__stat-v">15+</div><div className="loc-hero__stat-l">Years in {loc.name}</div></div>
                <div><div className="loc-hero__stat-v">{localProjects.length || "200"}+</div><div className="loc-hero__stat-l">Local projects</div></div>
                <div><div className="loc-hero__stat-v">{loc.drive}</div><div className="loc-hero__stat-l">From our shop</div></div>
              </div>
              <div className="svc-hero__actions" style={{marginTop:32}}>
                <a href={`tel:${SITE.phone.tel}`} className="btn btn--primary btn--xl">
                  <Icon.Phone size={18}/>
                  <span className="btn__stack">
                    <span className="btn__label">Free {loc.name} estimate</span>
                    <span className="btn__phone">{SITE.phone.display}</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="loc-hero__media">
              <img src={projects[0].after} alt={`${svc.name} project in ${loc.name}`}/>
              <div className="loc-hero__tag">
                <Icon.Pin size={12}/> Recently in {loc.name}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="loc-intro">
        <div className="wrap">
          <div className="loc-intro__grid">
            <div>
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Why this matters here</div>
              <h2 className="display" style={{fontSize:'clamp(32px,4vw,56px)',marginTop:20}}>{loc.name} homes have <span className="serif-it">specific needs.</span></h2>
            </div>
            <div className="loc-intro__p">
              <p>
                {loc.name} sits in a distinct microclimate — west-facing walls hit 140°F in July, monsoon moisture wicks into old stucco, and HOA color palettes are tightly controlled. Big-box crews don't know this. We do.
              </p>
              <p>
                Our {svc.name.toLowerCase()} spec for {loc.name} is different from Gilbert or Chandler. We account for altitude, UV index, and the specific substrates common to homes built between 1955 and 2010 here.
              </p>
              <ul className="loc-intro__list">
                <li><Icon.Check size={13}/> HOA palettes pre-loaded for every major {loc.name} community</li>
                <li><Icon.Check size={13}/> Elastomeric upgrades on west elevations (included in Signature tier)</li>
                <li><Icon.Check size={13}/> Crew lives within 20 minutes — warranty callbacks happen same-week</li>
                <li><Icon.Check size={13}/> Stucco color-matching to originals on {loc.name}'s mid-century homes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS / LOCAL GALLERY */}
      <section className="gallery">
        <div className="wrap">
          <div className="section-head section-head--light">
            <div className="section-head__left">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Local projects</div>
              <h2 className="display section-head__title">{loc.name}<br/>homes, <span className="serif-it">painted by us.</span></h2>
            </div>
            <div className="section-head__right">
              <p>A small selection of {svc.name.toLowerCase()} projects recently completed in {loc.name}.</p>
            </div>
          </div>
          <div className="gallery__stage">
            <BeforeAfter before={projects[bafIdx].before} after={projects[bafIdx].after} key={bafIdx}/>
            <div className="gallery__meta">
              <div className="gallery__count">
                <span className="gallery__cur">{String(bafIdx+1).padStart(2,'0')}</span>
                <span className="gallery__total">/ {String(projects.length).padStart(2,'0')}</span>
              </div>
              <div className="gallery__info">
                <div className="gallery__title">{projects[bafIdx].title}</div>
                <div className="gallery__subline"><Icon.Pin size={12}/> {loc.name} · {projects[bafIdx].completed} · {projects[bafIdx].days}-day</div>
              </div>
              <div className="gallery__nav">
                <button className="icon-btn" onClick={()=>setBafIdx((bafIdx-1+projects.length)%projects.length)}><Icon.Arrow size={16} style={{transform:'rotate(180deg)'}}/></button>
                <button className="icon-btn" onClick={()=>setBafIdx((bafIdx+1)%projects.length)}><Icon.Arrow size={16}/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDENSED SERVICE */}
      <section className="condensed-svc">
        <div className="wrap">
          <div className="condensed-svc__grid">
            <div>
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ The service</div>
              <h2 className="display" style={{fontSize:'clamp(30px,4vw,52px)',marginTop:16}}>Our {svc.name.toLowerCase()}<br/><span className="serif-it">spec.</span></h2>
              <p style={{marginTop:20,opacity:0.72,maxWidth:480,lineHeight:1.55}}>{svc.blurb}</p>
              <Link to={`/services/${svc.slug}`} className="inline-cta" style={{marginTop:20}}>Full service details <Icon.Arrow size={14}/></Link>
            </div>
            <div className="condensed-svc__steps">
              {[
                ["Walkthrough","45-min on-site scope"],
                ["Proposal","Itemized bid in 48 hrs"],
                ["Prep","Wash, patch, prime"],
                ["Paint","2 coats, sprayed + back-rolled"],
                ["Warranty","10-year written"],
              ].map(([t,d], i) => (
                <div key={t} className="condensed-step">
                  <div className="condensed-step__n">0{i+1}</div>
                  <div>
                    <div className="condensed-step__t">{t}</div>
                    <div className="condensed-step__d">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL TESTIMONIALS */}
      <section className="testimonials" style={{background:'var(--ink-2)'}}>
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--sun)',marginBottom:20,display:'block'}}>◇ {loc.name} reviews</div>
          <h2 className="display" style={{fontSize:'clamp(30px,4vw,56px)',marginBottom:48}}>From your <span className="serif-it" style={{color:'var(--sun)'}}>neighbors.</span></h2>
          <div className="svc-reviews">
            {reviews.map((r, i) => (
              <figure key={i} className="svc-review">
                <div className="quote__mark" style={{fontSize:72,marginBottom:-18}}>“</div>
                <blockquote style={{fontSize:17,lineHeight:1.5,marginBottom:18}}>{r.quote}</blockquote>
                <figcaption style={{display:'flex',alignItems:'center',gap:12}}>
                  <div className="quote__avatar" style={{background:r.color,width:40,height:40,fontSize:13}}>{r.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:13}}>{r.name}</div>
                    <div style={{fontSize:11,opacity:0.6}}>{r.detail}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL FAQ */}
      <section className="faq">
        <div className="wrap">
          <div className="faq__grid">
            <div className="faq__side">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ {loc.name} FAQ</div>
              <h2 className="display faq__title">Local <span className="serif-it">questions.</span></h2>
              <p className="faq__p">Specific to {svc.name.toLowerCase()} in {loc.name}.</p>
              <a href={`tel:${SITE.phone.tel}`} className="btn btn--dark"><Icon.Phone size={14}/> {SITE.phone.display}</a>
            </div>
            <ul className="faq__list">
              {locFaqs.map((f, i) => {
                const isOpen = faqOpen === i;
                return (
                  <li key={i} className={`faq__item ${isOpen?'is-open':''}`}>
                    <button className="faq__q" onClick={()=>setFaqOpen(isOpen?-1:i)} aria-expanded={isOpen}>
                      <span className="faq__num">{String(i+1).padStart(2,'0')}</span>
                      <span className="faq__qtext">{f.q}</span>
                      <span className={`faq__ic ${isOpen?'is-open':''}`}><Icon.Plus size={16}/></span>
                    </button>
                    <div className="faq__a" style={{maxHeight:isOpen?400:0,opacity:isOpen?1:0}}>
                      <p>{f.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE AREA MAP (shared) */}
      <ServiceMap/>

      {/* NEARBY */}
      <section className="nearby">
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ Nearby locations</div>
          <h2 className="display" style={{fontSize:'clamp(28px,3.5vw,48px)',marginBottom:32}}>Also serving <span className="serif-it">these areas.</span></h2>
          <div className="svc-areas__grid">
            {nearby.map(l => (
              <Link key={l.slug} to={`/services/${svc.slug}/${l.slug}`} className="area-chip">
                <span className="area-chip__name">{svc.name} in {l.name}</span>
                <span className="area-chip__arr"><Icon.ArrowUpRight size={12}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStripShared heading={<>Ready for <span className="serif-it">{svc.name.toLowerCase()} in {loc.name}?</span></>}/>
    </main>
  );
}
window.LocationPage = LocationPage;
