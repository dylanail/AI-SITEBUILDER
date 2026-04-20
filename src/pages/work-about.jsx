// ============ PAGE: /work ============
function WorkPage() {
  const [svcFilter, setSvcFilter] = React.useState("all");
  const [locFilter, setLocFilter] = React.useState("all");
  const [active, setActive] = React.useState(null);

  const filtered = PROJECTS.filter(p =>
    (svcFilter === "all" || p.service === svcFilter) &&
    (locFilter === "all" || p.location === locFilter)
  );
  const featured = filtered[0] || PROJECTS[0];
  const rest = filtered.slice(1);

  return (
    <main id="content">
      <PageHeader eyebrow="◇ Portfolio" title={<>Work we're <span className="serif-it">proud of.</span></>} subtitle={`${PROJECTS.length}+ projects across the Valley. Filter by service or neighborhood.`}/>

      <section className="work-filters">
        <div className="wrap">
          <div className="filters">
            <div className="filters__group">
              <div className="filters__lbl">Service</div>
              <div className="filters__chips">
                <button className={`chip ${svcFilter==="all"?'is-active':''}`} onClick={()=>setSvcFilter("all")}>All</button>
                {SERVICES_DATA.slice(0,6).map(s => (
                  <button key={s.slug} className={`chip ${svcFilter===s.slug?'is-active':''}`} onClick={()=>setSvcFilter(s.slug)}>{s.name}</button>
                ))}
              </div>
            </div>
            <div className="filters__group">
              <div className="filters__lbl">Location</div>
              <div className="filters__chips">
                <button className={`chip ${locFilter==="all"?'is-active':''}`} onClick={()=>setLocFilter("all")}>All</button>
                {LOCATIONS.slice(0,6).map(l => (
                  <button key={l.slug} className={`chip ${locFilter===l.slug?'is-active':''}`} onClick={()=>setLocFilter(l.slug)}>{l.name}</button>
                ))}
              </div>
            </div>
            <div className="filters__count">{filtered.length} projects</div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      {featured && (
        <section className="work-featured">
          <div className="wrap">
            <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ Featured project</div>
            <div className="featured-grid">
              <BeforeAfter before={featured.before} after={featured.after} init={48}/>
              <div className="featured-meta">
                <h2 className="display" style={{fontSize:'clamp(28px,3.5vw,52px)',marginBottom:16}}>{featured.title}</h2>
                <div style={{display:'flex',flexWrap:'wrap',gap:24,marginBottom:24,fontSize:13}}>
                  <div><div style={{opacity:0.5,fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:4}}>Service</div><div style={{fontWeight:600}}>{SERVICES_DATA.find(s=>s.slug===featured.service)?.name}</div></div>
                  <div><div style={{opacity:0.5,fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:4}}>Location</div><div style={{fontWeight:600}}>{LOCATIONS.find(l=>l.slug===featured.location)?.name}</div></div>
                  <div><div style={{opacity:0.5,fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:4}}>Completed</div><div style={{fontWeight:600}}>{featured.completed}</div></div>
                  <div><div style={{opacity:0.5,fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:4}}>Duration</div><div style={{fontWeight:600}}>{featured.days} days</div></div>
                </div>
                <div className="gallery__palette" style={{marginBottom:24}}>
                  <span className="gallery__palette-lbl">Palette</span>
                  {featured.colors.map((c,i) => <span key={i} className="gallery__swatch" style={{background:c}}/>)}
                </div>
                <button className="btn btn--dark" onClick={()=>setActive(featured)}>Read case study <Icon.Arrow size={14}/></button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GRID */}
      <section className="work-grid">
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ All projects</div>
          <div className="pgrid">
            {rest.map(p => (
              <article key={p.id} className="pcard" onClick={()=>setActive(p)}>
                <div className="pcard__img"><img src={p.after} alt={p.title} loading="lazy"/></div>
                <div className="pcard__body">
                  <div className="pcard__meta">
                    <span>{LOCATIONS.find(l=>l.slug===p.location)?.name}</span>
                    <span>·</span>
                    <span>{p.completed}</span>
                  </div>
                  <h3 className="pcard__title">{p.title}</h3>
                  <div className="pcard__tag">{SERVICES_DATA.find(s=>s.slug===p.service)?.name}</div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{padding:'80px 0',textAlign:'center',opacity:0.5}}>No projects match this filter. <button style={{color:'var(--clay)',textDecoration:'underline'}} onClick={()=>{setSvcFilter("all");setLocFilter("all");}}>Clear filters</button></div>
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat"><div className="stat__v">2,400+</div><div className="stat__l">Homes painted</div></div>
            <div className="stat"><div className="stat__v">4.9<span>★</span></div><div className="stat__l">312 Google reviews</div></div>
            <div className="stat"><div className="stat__v">16</div><div className="stat__l">Years in business</div></div>
            <div className="stat"><div className="stat__v">10<span style={{fontSize:'0.5em',marginLeft:4}}>yr</span></div><div className="stat__l">Workmanship warranty</div></div>
          </div>
        </div>
      </section>

      {/* CASE STUDY MODAL */}
      {active && (
        <div className="modal" onClick={()=>setActive(null)}>
          <div className="modal__inner" onClick={e=>e.stopPropagation()}>
            <button className="modal__close" onClick={()=>setActive(null)}>×</button>
            <BeforeAfter before={active.before} after={active.after}/>
            <div className="modal__body">
              <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:8}}>
                <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Case study</div>
                <span style={{opacity:0.5,fontSize:12}}>{active.completed}</span>
              </div>
              <h3 className="display" style={{fontSize:'clamp(26px,3vw,40px)',marginBottom:16}}>{active.title}</h3>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,marginTop:24}}>
                <div>
                  <div className="eyebrow" style={{color:'var(--clay)',marginBottom:8}}>The brief</div>
                  <p style={{fontSize:14,lineHeight:1.6,opacity:0.8}}>Homeowners wanted a {SERVICES_DATA.find(s=>s.slug===active.service)?.name.toLowerCase()} refresh with HOA-approved colors that would hold up to {LOCATIONS.find(l=>l.slug===active.location)?.name} sun. Substrate was sound but showing UV chalking on west and south elevations.</p>
                </div>
                <div>
                  <div className="eyebrow" style={{color:'var(--clay)',marginBottom:8}}>The spec</div>
                  <p style={{fontSize:14,lineHeight:1.6,opacity:0.8}}>3,000-PSI wash, elastomeric crack-bridge, two coats SW Duration. Trim in high-build enamel. {active.days}-day schedule, single crew. 10-year warranty.</p>
                </div>
              </div>
              <Link to={`/services/${active.service}/${active.location}`} className="btn btn--dark" style={{marginTop:24}}>See more in {LOCATIONS.find(l=>l.slug===active.location)?.name} <Icon.Arrow size={14}/></Link>
            </div>
          </div>
        </div>
      )}

      <Testimonials/>
      <CtaStripShared/>
    </main>
  );
}
window.WorkPage = WorkPage;

// ============ PAGE: /about ============
function AboutPage() {
  return (
    <main id="content">
      <PageHeader eyebrow="◇ About us" title={<>We're the<br/>crew <span className="serif-it">painting Phoenix.</span></>} subtitle="Family-run since 2009. Still family-run. Still painting every job like it's our own house."/>

      <section className="about-story">
        <div className="wrap">
          <div className="story-grid">
            <div className="story-num">
              <div className="display story-num__v">2009</div>
              <div className="story-num__l">Javier started the company out of a used F-250 and his grandfather's paintbrushes.</div>
            </div>
            <div className="story-txt">
              <p className="story-p story-p--lead">Three generations of painters. One truck. One client at a time. That's how Saguaro &amp; Co. started, and — honestly — it's still how we operate.</p>
              <p className="story-p">Javier Ruiz founded the company after a decade running crews for a big regional outfit. He'd watched too many jobs get rushed, too many homes repainted in five years instead of fifteen. He wanted to build something where the crew did it right because they worked for the guy who'd sign off.</p>
              <p className="story-p">Seventeen years later, that's still the rule. Every job has a crew lead on site daily. Every estimate is walked by Javier or a senior estimator. Every warranty call gets answered — even the ones from 2012.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team">
        <div className="wrap">
          <div className="section-head section-head--light">
            <div className="section-head__left">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ The crew</div>
              <h2 className="display section-head__title">Humans you'll<br/><span className="serif-it">actually meet.</span></h2>
            </div>
            <div className="section-head__right">
              <p>Small shop. Everyone you interact with is on this page — no outsourced call centers, no sales funnels.</p>
            </div>
          </div>
          <div className="team-grid">
            {TEAM.map(m => (
              <article key={m.name} className="tm">
                <div className="tm__avatar" style={{background:m.color}}>{m.initials}</div>
                <div className="tm__info">
                  <h3 className="tm__name">{m.name}</h3>
                  <div className="tm__role">{m.role}</div>
                  <div className="tm__years">{m.years} years at the shop</div>
                  <p className="tm__bio">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="diff">
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--sun)',marginBottom:16,display:'block'}}>◇ What makes us different</div>
          <h2 className="display" style={{fontSize:'clamp(32px,5vw,72px)',marginBottom:56}}>Four things <span className="serif-it" style={{color:'var(--sun)'}}>we don't bend on.</span></h2>
          <div className="diff-grid">
            {[
              { n:"01", t:"Prep is most of the job", d:"Not a line item we shave to win bids. 40–60% of our labor on every project is surface prep, because that's what determines whether your paint lasts 5 years or 15." },
              { n:"02", t:"One crew, start to finish", d:"You meet your crew lead on day one. Same lead is there on day seven. No sub-crews, no rotating faces, no communication breakdown." },
              { n:"03", t:"We answer warranty calls", d:"Still. We've honored warranties on homes painted in 2012. If it fails inside ten years, we come fix it. No arguments." },
              { n:"04", t:"Written everything", d:"Itemized bids. Written specs. Written punch lists. Written warranty. Zero verbal promises. If it's not on paper, it's not in the scope." },
            ].map(x => (
              <article key={x.n} className="diff-card">
                <div className="diff-card__n">{x.n}</div>
                <h3 className="diff-card__t">{x.t}</h3>
                <p className="diff-card__d">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="creds">
        <div className="wrap">
          <div className="section-head section-head--light">
            <div className="section-head__left">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Credentials</div>
              <h2 className="display section-head__title">Licensed, bonded,<br/><span className="serif-it">boring on paper.</span></h2>
            </div>
            <div className="section-head__right">
              <p>All of it current, all of it verifiable. We'll email certificates before your first walkthrough.</p>
            </div>
          </div>
          <div className="cred-grid">
            {[
              { icon:"Shield", t:SITE.roc, s:"Arizona state license, active since 2009" },
              { icon:"Shield", t:"$2M General Liability", s:"Hartford · current through 2026" },
              { icon:"Shield", t:"$1M Workers' Comp", s:"CopperPoint · covers every crew member on site" },
              { icon:"Shield", t:"BBB A+ Accredited", s:"Since 2011. Zero unresolved complaints." },
              { icon:"Shield", t:"EPA Lead-Safe Certified", s:"Firm certification #NAT-F-123456" },
              { icon:"Shield", t:"Sherwin-Williams Certified Applicator", s:"Since 2014. Pro-tier pricing passed to clients." },
              { icon:"Shield", t:"Dunn-Edwards Pro Partner", s:"Preferred contractor, HOA program" },
              { icon:"Shield", t:"Houzz Top Pro 2021–2026", s:"Five consecutive years" },
            ].map(c => (
              <div key={c.t} className="cred-item">
                <div className="cred-item__ic"><Icon.Shield size={20}/></div>
                <div>
                  <div className="cred-item__t">{c.t}</div>
                  <div className="cred-item__s">{c.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--clay)',marginBottom:20,display:'block'}}>◇ How we operate</div>
          <h2 className="display" style={{fontSize:'clamp(36px,5vw,88px)',maxWidth:960,marginBottom:64}}>If you can read a receipt, <span className="serif-it" style={{color:'var(--clay)'}}>you can read our bid.</span></h2>
          <div className="values-grid">
            <div className="value"><div className="value__n">I</div><div><div className="value__t">Transparency</div><div className="value__d">Every line of the bid explained. Every change order signed.</div></div></div>
            <div className="value"><div className="value__n">II</div><div><div className="value__t">Craft</div><div className="value__d">Clean cut-lines. Consistent mils. Zero brush marks on cabinetry.</div></div></div>
            <div className="value"><div className="value__n">III</div><div><div className="value__t">Respect</div><div className="value__d">Your home, neighbors, pets, landscaping. All of it matters.</div></div></div>
            <div className="value"><div className="value__n">IV</div><div><div className="value__t">Accountability</div><div className="value__d">We sign everything. We warranty everything. We pick up the phone.</div></div></div>
          </div>
        </div>
      </section>

      <CtaStripShared heading={<>Put us to work on <span className="serif-it">your home.</span></>}/>
    </main>
  );
}
window.AboutPage = AboutPage;
