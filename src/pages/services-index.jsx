// ============ PAGE: /services (index) ============
function ServicesIndexPage() {
  return (
    <main id="content">
      <PageHeader
        eyebrow="◇ Our services"
        title={<>Eight ways we<br/>paint <span className="serif-it">Phoenix.</span></>}
        subtitle="Every service is backed by 16 years of Valley experience, a 10-year workmanship warranty, and crews who do this for a living — not a season."
      />

      <section className="svc-index">
        <div className="wrap">
          <ul className="svc-index__list">
            {SERVICES_DATA.map((s, i) => {
              const I = Icon[s.icon];
              return (
                <li key={s.slug} className="svc-row">
                  <Link to={`/services/${s.slug}`} className="svc-row__link">
                    <div className="svc-row__n">{String(i+1).padStart(2,'0')}</div>
                    <div className="svc-row__icon"><I size={28}/></div>
                    <div className="svc-row__body">
                      <h2 className="svc-row__title">{s.name}</h2>
                      <p className="svc-row__blurb">{s.blurb}</p>
                      <div className="svc-row__tags">
                        {s.tags.map(t => <span key={t}>{t}</span>)}
                      </div>
                    </div>
                    <div className="svc-row__meta">
                      <div className="svc-row__price">
                        <span className="svc-row__price-lbl">Starting at</span>
                        <span className="svc-row__price-val">{s.priceFrom}</span>
                      </div>
                      <div className="svc-row__duration">{s.duration}</div>
                    </div>
                    <div className="svc-row__arrow"><Icon.ArrowUpRight size={18}/></div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="svc-index__consult">
            <div>
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Not sure which?</div>
              <h3 className="display" style={{fontSize:'clamp(28px,4vw,48px)',marginTop:16}}>Book a <span className="serif-it">free consultation.</span></h3>
              <p style={{opacity:0.72,marginTop:12,maxWidth:480}}>45-minute walkthrough, moisture readings, and an honest scope. If it's not time to paint, we'll tell you.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start'}}>
              <a href={`tel:${SITE.phone.tel}`} className="btn btn--dark btn--xl">
                <Icon.Phone size={18}/>
                <span className="btn__stack">
                  <span className="btn__label">Call</span>
                  <span className="btn__phone">{SITE.phone.display}</span>
                </span>
              </a>
              <Link to="/contact" className="inline-cta">Or send a photo &amp; specs <Icon.Arrow size={14}/></Link>
            </div>
          </div>
        </div>
      </section>

      <CtaStripShared/>
    </main>
  );
}
window.ServicesIndexPage = ServicesIndexPage;
