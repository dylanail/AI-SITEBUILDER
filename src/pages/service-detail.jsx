// ============ PAGE: /services/[slug] ============
// Reused: BeforeAfter (from gallery.jsx)

function ServiceDetailPage({ slug }) {
  const svc = SERVICES_DATA.find(s => s.slug === slug) || SERVICES_DATA[1]; // default interior
  const I = Icon[svc.icon];
  const projects = PROJECTS.filter(p => p.service === svc.slug).slice(0, 4);
  const svcProjects = projects.length ? projects : PROJECTS.slice(0, 4);
  const reviews = REVIEWS_DATA.filter(r => r.service === svc.slug).slice(0, 3);
  const svcReviews = reviews.length ? reviews : REVIEWS_DATA.slice(0, 3);
  const faqs = FAQS_BY_SERVICE[svc.slug] || FAQS_GLOBAL.slice(0, 5);
  const related = SERVICES_DATA.filter(s => s.slug !== svc.slug).slice(0, 4);

  const [bafIdx, setBafIdx] = React.useState(0);
  const [faqOpen, setFaqOpen] = React.useState(0);

  return (
    <main id="content">
      {/* HERO */}
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div>
              <div className="eyebrow" style={{color:'var(--sun)',marginBottom:24}}>◇ {svc.icon === "Palette" ? "Interior Services" : "Exterior Services"}</div>
              <h1 className="display svc-hero__h1">
                {svc.name}<br/>
                <span className="serif-it" style={{color:'var(--sun)'}}>in Phoenix.</span>
              </h1>
              <p className="svc-hero__lede">{svc.blurb} Every job includes full prep, written specs, and a 10-year workmanship warranty.</p>

              <div className="svc-hero__meta">
                <div className="svc-hero__meta-item">
                  <div className="svc-hero__meta-lbl">Starting at</div>
                  <div className="svc-hero__meta-val">{svc.priceFrom}</div>
                </div>
                <div className="svc-hero__meta-item">
                  <div className="svc-hero__meta-lbl">Typical duration</div>
                  <div className="svc-hero__meta-val">{svc.duration}</div>
                </div>
                <div className="svc-hero__meta-item">
                  <div className="svc-hero__meta-lbl">Warranty</div>
                  <div className="svc-hero__meta-val">10 years</div>
                </div>
              </div>

              <div className="svc-hero__actions">
                <a href={`tel:${SITE.phone.tel}`} className="btn btn--primary btn--xl">
                  <Icon.Phone size={18}/>
                  <span className="btn__stack">
                    <span className="btn__label">Free estimate</span>
                    <span className="btn__phone">{SITE.phone.display}</span>
                  </span>
                </a>
                <Link to="/contact" className="btn btn--ghost">Get a written quote</Link>
              </div>
            </div>
            <div className="svc-hero__badge">
              <div className="svc-hero__badge-ring">
                <I size={80}/>
              </div>
              <img src={svcProjects[0].after} alt={`${svc.name} example project in Phoenix`} className="svc-hero__img"/>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="svc-included">
        <div className="wrap">
          <div className="section-head section-head--light">
            <div className="section-head__left">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ What's included</div>
              <h2 className="display section-head__title">Every {svc.name.toLowerCase()}<br/>project includes.</h2>
            </div>
            <div className="section-head__right">
              <p>We itemize every line so you see exactly what you're paying for — and what competitors leave out.</p>
            </div>
          </div>
          <div className="included-grid">
            {[
              { t:"Written scope", d:"Line-itemed bid with product specs, sheen, and square footage. No verbal promises." },
              { t:"Full surface prep", d:"Wash, scrape, patch, sand, caulk, prime. Most jobs: 40–60% of total labor." },
              { t:"Premium products", d:"Sherwin-Williams Duration or Dunn-Edwards Evershield as standard." },
              { t:"Two coats", d:"Sprayed and back-rolled. Not a single-coat marketing finish." },
              { t:"Daily walkthrough", d:"Crew lead reviews progress with you end of each day." },
              { t:"Final punch list", d:"You walk the job. We don't invoice until the list is clear." },
              { t:"10-year warranty", d:"Written workmanship warranty. Plus manufacturer's paint warranty." },
              { t:"Clean jobsite", d:"Daily cleanup. Final day: pressure-washed driveway, zero debris." },
            ].map(x => (
              <div key={x.t} className="included-item">
                <div className="included-item__check"><Icon.Check size={14}/></div>
                <div>
                  <div className="included-item__t">{x.t}</div>
                  <div className="included-item__d">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" style={{background:'var(--ink)',color:'var(--sand)'}}>
        <div className="wrap">
          <div className="process__head">
            <div>
              <div className="eyebrow" style={{color:'var(--clay-2)',display:'block',marginBottom:20}}>◇ The process</div>
              <h2 className="display process__title">Five steps. <span className="serif-it" style={{color:'var(--sun)'}}>Zero surprises.</span></h2>
            </div>
          </div>
          <ol className="process__list">
            {[
              { n:"01", t:"Walkthrough", d:`On-site scope for your ${svc.name.toLowerCase()}. 45 minutes.` },
              { n:"02", t:"Proposal", d:"Itemized bid in 48 hours. Color renderings if needed." },
              { n:"03", t:"Prep", d:"Wash, patch, prime. Usually 40–60% of total labor." },
              { n:"04", t:"Paint", d:"Two coats sprayed and back-rolled. Crew lead on-site daily." },
              { n:"05", t:"Walk &amp; warrant", d:"Final punch, touch-ups, 10-year written warranty." },
            ].map((p, i, arr) => (
              <li key={p.n} className="process__step">
                <div className="process__n">{p.n}</div>
                <div className="process__body">
                  <h3>{p.t}</h3>
                  <p dangerouslySetInnerHTML={{__html:p.d}}/>
                </div>
                {i < arr.length - 1 && <div className="process__rule"/>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BEFORE/AFTER GALLERY */}
      <section className="gallery">
        <div className="wrap">
          <div className="section-head section-head--light">
            <div className="section-head__left">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Recent work</div>
              <h2 className="display section-head__title">{svc.name}<br/>projects, <span className="serif-it">by us.</span></h2>
            </div>
            <div className="section-head__right">
              <p>A selection of {svc.name.toLowerCase()} projects we've completed in the last twelve months. Drag the handle.</p>
              <Link to="/work" className="inline-cta">See all projects <Icon.Arrow size={14}/></Link>
            </div>
          </div>
          <div className="gallery__stage">
            <BeforeAfter before={svcProjects[bafIdx].before} after={svcProjects[bafIdx].after} key={bafIdx}/>
            <div className="gallery__meta">
              <div className="gallery__count">
                <span className="gallery__cur">{String(bafIdx+1).padStart(2,'0')}</span>
                <span className="gallery__total">/ {String(svcProjects.length).padStart(2,'0')}</span>
              </div>
              <div className="gallery__info">
                <div className="gallery__title">{svcProjects[bafIdx].title}</div>
                <div className="gallery__subline">
                  <Icon.Pin size={12}/> {LOCATIONS.find(l=>l.slug===svcProjects[bafIdx].location)?.name} · Completed {svcProjects[bafIdx].completed} · {svcProjects[bafIdx].days}-day
                </div>
              </div>
              <div className="gallery__nav">
                <button className="icon-btn" onClick={()=>setBafIdx((bafIdx-1+svcProjects.length)%svcProjects.length)} aria-label="Previous"><Icon.Arrow size={16} style={{transform:'rotate(180deg)'}}/></button>
                <button className="icon-btn" onClick={()=>setBafIdx((bafIdx+1)%svcProjects.length)} aria-label="Next"><Icon.Arrow size={16}/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <div className="wrap">
          <div className="section-head section-head--light">
            <div className="section-head__left">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Pricing</div>
              <h2 className="display section-head__title">Honest<br/><span className="serif-it">numbers.</span></h2>
            </div>
            <div className="section-head__right">
              <p>Every home is different, so every quote is itemized. Here's what most {svc.name.toLowerCase()} projects look like.</p>
            </div>
          </div>
          <div className="pricing__grid">
            {[
              { tier:"Essential", price:svc.priceFrom, blurb:"Single-coat prep, two-coat finish, premium paint, 10-yr warranty.", features:["Full surface prep","Premium paint system","Two coats sprayed + back-rolled","10-year workmanship warranty"], popular:false },
              { tier:"Signature", price:`2× ${svc.priceFrom}`, blurb:"Our most-chosen tier. Adds stucco patch, trim enamel, and HOA renderings.", features:["Everything in Essential","Stucco / substrate repair","High-build trim enamel","HOA color renderings","Priority scheduling"], popular:true },
              { tier:"Elevated", price:"Custom quote", blurb:"Full restoration — rot replacement, elastomeric systems, cabinet refinish adds.", features:["Everything in Signature","Wood rot replacement","Elastomeric system upgrade","Cabinet refinish add-on","Dedicated project lead"], popular:false },
            ].map(p => (
              <article key={p.tier} className={`price-card ${p.popular?'price-card--pop':''}`}>
                {p.popular && <div className="price-card__flag">Most chosen</div>}
                <div className="price-card__tier">{p.tier}</div>
                <div className="price-card__price">{p.price}</div>
                <p className="price-card__blurb">{p.blurb}</p>
                <ul className="price-card__feats">
                  {p.features.map(f => <li key={f}><Icon.Check size={13}/> {f}</li>)}
                </ul>
                <a href={`tel:${SITE.phone.tel}`} className={`btn ${p.popular?'btn--primary':'btn--dark'}`} style={{width:'100%',justifyContent:'center'}}>
                  Get this quote
                </a>
              </article>
            ))}
          </div>
          <p className="pricing__note">
            * Numbers reflect a typical 2,500–3,500 sqft home. Final pricing depends on substrate condition, access, and finish choice. Every quote is itemized and written.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" style={{background:'var(--ink-2)'}}>
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--sun)',marginBottom:20,display:'block'}}>◇ {svc.name} reviews</div>
          <h2 className="display" style={{fontSize:'clamp(32px,4vw,64px)',marginBottom:56}}>What clients say about our <span className="serif-it" style={{color:'var(--sun)'}}>{svc.name.toLowerCase()}.</span></h2>
          <div className="svc-reviews">
            {svcReviews.map((r, i) => (
              <figure key={i} className="svc-review">
                <div className="quote__mark" style={{fontSize:80,marginBottom:-20}}>“</div>
                <blockquote style={{fontSize:18,lineHeight:1.5,marginBottom:20}}>{r.quote}</blockquote>
                <figcaption style={{display:'flex',alignItems:'center',gap:12}}>
                  <div className="quote__avatar" style={{background:r.color,width:40,height:40,fontSize:13}}>{r.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:13}}>{r.name}</div>
                    <div style={{fontSize:11,opacity:0.6}}>{r.detail} · {r.source}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <div className="faq__grid">
            <div className="faq__side">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ {svc.name} FAQ</div>
              <h2 className="display faq__title">Your <span className="serif-it">{svc.name.toLowerCase()}</span> questions.</h2>
              <p className="faq__p">Specific to this service. Still stuck? Call the shop.</p>
              <a href={`tel:${SITE.phone.tel}`} className="btn btn--dark"><Icon.Phone size={14}/> {SITE.phone.display}</a>
            </div>
            <ul className="faq__list">
              {faqs.map((f, i) => {
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

      {/* SERVICE AREAS */}
      <section className="svc-areas">
        <div className="wrap">
          <div className="section-head section-head--light">
            <div className="section-head__left">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Areas served</div>
              <h2 className="display section-head__title">{svc.name}<br/>across <span className="serif-it">the Valley.</span></h2>
            </div>
            <div className="section-head__right">
              <p>Click any neighborhood for a location-specific page with projects, reviews, and FAQ for that area.</p>
            </div>
          </div>
          <div className="svc-areas__grid">
            {LOCATIONS.map(l => (
              <Link key={l.slug} to={`/services/${svc.slug}/${l.slug}`} className="area-chip">
                <span className="area-chip__name">{svc.name} in {l.name}</span>
                <span className="area-chip__arr"><Icon.ArrowUpRight size={12}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="related-svc">
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ Related services</div>
          <h2 className="display" style={{fontSize:'clamp(28px,3.5vw,48px)',marginBottom:40}}>Also from <span className="serif-it">the shop.</span></h2>
          <div className="svc-grid">
            {related.map(s => {
              const RI = Icon[s.icon];
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="svc-card svc-card--light">
                  <div className="svc-card__top">
                    <div className="svc-card__n">→</div>
                    <div className="svc-card__icon"><RI size={24}/></div>
                  </div>
                  <h3 className="svc-card__title">{s.name}</h3>
                  <p className="svc-card__blurb">{s.blurb}</p>
                  <div className="svc-card__more" style={{opacity:1,color:'var(--clay)'}}>
                    Explore <Icon.ArrowUpRight size={14}/>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaStripShared heading={<>Ready for <span className="serif-it">{svc.name.toLowerCase()}?</span></>}/>
    </main>
  );
}
window.ServiceDetailPage = ServiceDetailPage;
