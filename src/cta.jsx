// Mid-page CTA strip
function CtaStrip() {
  return (
    <section className="ctastrip" data-screen-label="08 CTA strip">
      <div className="wrap">
        <div className="ctastrip__inner">
          <div className="ctastrip__left">
            <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Free estimate</div>
            <h3 className="display ctastrip__title">
              One call. One crew.<br/>
              <span className="serif-it">One coat of peace of mind.</span>
            </h3>
            <p className="ctastrip__p">
              Same-week walkthrough. Itemized bid in 48 hours. Zero pressure.
            </p>
          </div>
          <div className="ctastrip__right">
            <a href={`tel:${PHONE_TEL}`} className="btn btn--dark btn--xl">
              <Icon.Phone size={18}/>
              <span className="btn__stack">
                <span className="btn__label">Call for estimate</span>
                <span className="btn__phone">{PHONE_DISPLAY}</span>
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
window.CtaStrip = CtaStrip;
