// ============ PAGE: /contact ============
function ContactPage() {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({ name:"", email:"", phone:"", address:"", service:"exterior-painting", timeline:"this-month", sqft:"", notes:"", photos:0 });
  const [faqOpen, setFaqOpen] = React.useState(0);
  const upd = (k,v) => setForm(f => ({...f,[k]:v}));

  const contactFaqs = [
    { q:"What happens after I submit?", a:"You'll get a confirmation email within minutes. A human from our shop calls you inside one business day to schedule the walkthrough." },
    { q:"How long is the walkthrough?", a:"45 minutes. We take moisture readings, note substrate issues, discuss scope, and photograph areas that need prep attention." },
    { q:"Is there a fee for the estimate?", a:"No. Estimates are always free. We'll email the written bid within 48 hours of the walkthrough." },
    { q:"What if I'm not ready to paint yet?", a:"Totally fine. We'll give you an honest timeline recommendation. If it's not time yet, we'll say so." },
  ];

  if (step === 3) {
    return (
      <main id="content">
        <section className="thanks">
          <div className="wrap">
            <div className="thanks__inner">
              <div className="thanks__check"><Icon.Check size={36}/></div>
              <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ Thank you</div>
              <h1 className="display" style={{fontSize:'clamp(40px,6vw,88px)',marginBottom:24}}>Got it, <span className="serif-it" style={{color:'var(--clay)'}}>{form.name.split(' ')[0] || 'friend'}.</span></h1>
              <p style={{fontSize:18,opacity:0.72,maxWidth:560,lineHeight:1.5,marginBottom:40}}>We just sent a confirmation to <strong>{form.email || 'your email'}</strong>. A human from the shop will call you at {form.phone || 'your number'} within one business day.</p>
              <div className="next-steps">
                <div className="next-step"><div className="next-step__n">01</div><div><div className="next-step__t">Next hour</div><div className="next-step__d">Confirmation email arrives with your submission summary.</div></div></div>
                <div className="next-step"><div className="next-step__n">02</div><div><div className="next-step__t">Next business day</div><div className="next-step__d">{form.phone ? `We call ${form.phone}` : 'We give you a call'} to schedule the walkthrough.</div></div></div>
                <div className="next-step"><div className="next-step__n">03</div><div><div className="next-step__t">Within 48 hours of walkthrough</div><div className="next-step__d">Itemized written bid and color rendering arrive in your inbox.</div></div></div>
              </div>
              <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:40}}>
                <Link to="/work" className="btn btn--dark">Browse our work <Icon.Arrow size={14}/></Link>
                <Link to="/blog" className="btn btn--ghost" style={{borderColor:'rgba(26,21,18,0.2)',color:'var(--ink)',background:'transparent'}}>Read the journal</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="content">
      <SeoCard meta={{
        canonical:"/contact",
        title:`Contact ${SITE.name} — Free Phoenix Painting Estimate`,
        description:`Request a free estimate. Call ${SITE.phone.display} or fill out the form — we reply within one business day.`,
        schemas:["LocalBusiness","ContactPage","FAQPage","BreadcrumbList"]
      }}/>
      <PageHeader eyebrow="◇ Get in touch" title={<>Free estimate,<br/><span className="serif-it">zero pressure.</span></>} subtitle="Call for fastest response, or tell us about your project below."/>

      <section className="contact">
        <div className="wrap">
          <div className="contact__grid">
            {/* FORM */}
            <div className="contact__form-wrap">
              <div className="form-steps">
                {["Your project","About you","Notes & photos"].map((lbl, i) => (
                  <div key={i} className={`form-step ${step===i?'is-active':''} ${step>i?'is-done':''}`}>
                    <div className="form-step__n">{step>i?<Icon.Check size={12}/>:String(i+1).padStart(2,'0')}</div>
                    <div className="form-step__lbl">{lbl}</div>
                  </div>
                ))}
              </div>

              {step === 0 && (
                <div className="form-panel">
                  <label className="field"><span>Service needed</span>
                    <select value={form.service} onChange={e=>upd('service',e.target.value)}>
                      {SERVICES_DATA.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                    </select>
                  </label>
                  <label className="field"><span>Timeline</span>
                    <div className="radio-grid">
                      {[["asap","ASAP"],["this-month","This month"],["next-3-months","Next 3 months"],["just-exploring","Just exploring"]].map(([v,l]) => (
                        <button key={v} type="button" className={`radio-card ${form.timeline===v?'is-active':''}`} onClick={()=>upd('timeline',v)}>{l}</button>
                      ))}
                    </div>
                  </label>
                  <label className="field"><span>Approximate home size</span>
                    <input value={form.sqft} onChange={e=>upd('sqft',e.target.value)} placeholder="e.g. 2,800 sqft"/>
                  </label>
                  <div className="form-nav">
                    <div/>
                    <button className="btn btn--primary" onClick={()=>setStep(1)}>Continue <Icon.Arrow size={14}/></button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="form-panel">
                  <label className="field"><span>Your name</span>
                    <input value={form.name} onChange={e=>upd('name',e.target.value)} placeholder="Jane Cactus"/>
                  </label>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                    <label className="field"><span>Email</span>
                      <input type="email" value={form.email} onChange={e=>upd('email',e.target.value)} placeholder="you@email.com"/>
                    </label>
                    <label className="field"><span>Phone</span>
                      <input type="tel" value={form.phone} onChange={e=>upd('phone',e.target.value)} placeholder="(480) 000-0000"/>
                    </label>
                  </div>
                  <label className="field"><span>Project address</span>
                    <input value={form.address} onChange={e=>upd('address',e.target.value)} placeholder="Street, city, zip"/>
                  </label>
                  <div className="form-nav">
                    <button className="btn btn--link" onClick={()=>setStep(0)}>← Back</button>
                    <button className="btn btn--primary" onClick={()=>setStep(2)}>Continue <Icon.Arrow size={14}/></button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-panel">
                  <label className="field"><span>Notes (optional)</span>
                    <textarea value={form.notes} onChange={e=>upd('notes',e.target.value)} placeholder="Tell us about substrate condition, HOA, color ideas, or anything else helpful." rows={5}/>
                  </label>
                  <div className="field"><span>Photos (optional — really helps)</span>
                    <div className="upload" onClick={()=>upd('photos',form.photos+1)}>
                      <Icon.Plus size={20}/>
                      <div>
                        <div style={{fontWeight:600,fontSize:14}}>{form.photos ? `${form.photos} photo${form.photos>1?'s':''} added` : "Drag & drop or click to upload"}</div>
                        <div style={{fontSize:12,opacity:0.6,marginTop:2}}>JPG, PNG, HEIC. Up to 20MB each.</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-nav">
                    <button className="btn btn--link" onClick={()=>setStep(1)}>← Back</button>
                    <button className="btn btn--primary btn--xl" onClick={()=>setStep(3)}>Submit estimate request <Icon.Arrow size={14}/></button>
                  </div>
                </div>
              )}
            </div>

            {/* BUSINESS CARD */}
            <aside className="biz-card">
              <div className="biz-card__head">
                <div className="eyebrow" style={{color:'var(--sun)'}}>◇ The shop</div>
                <div className="biz-card__rating">
                  <Icon.Google size={14}/>
                  <span>{SITE.reviews.google.rating} · {SITE.reviews.google.count}</span>
                </div>
              </div>

              <a href={`tel:${SITE.phone.tel}`} className="biz-card__phone">
                <div className="biz-card__phone-lbl">Fastest response</div>
                <div className="biz-card__phone-num">{SITE.phone.display}</div>
                <div className="biz-card__phone-sub">Answered in 2 rings · Mon–Sat 7a–6p</div>
              </a>

              <div className="biz-card__row">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></svg>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="biz-card__row">
                <Icon.Pin size={14}/>
                <span>{SITE.address.line1}<br/>{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
              </div>

              <div className="biz-card__map">
                <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                  <rect width="100" height="60" fill="#ecdcc4"/>
                  <g stroke="#8a6b52" strokeWidth="0.3" opacity="0.5" fill="none">
                    <path d="M0 30 L100 30"/>
                    <path d="M50 0 L50 60"/>
                    <path d="M0 50 Q40 48 100 50"/>
                  </g>
                  <path d="M30,15 Q40,10 50,14 Q45,22 35,22 Z" fill="#e07a3b" opacity="0.25"/>
                  <circle cx="50" cy="32" r="2" fill="#b5651d"/>
                  <circle cx="50" cy="32" r="4" fill="#b5651d" opacity="0.3"/>
                </svg>
                <div className="biz-card__map-pin">
                  <Icon.Pin size={14}/> Our shop — Arcadia
                </div>
              </div>

              <div className="biz-card__hrs">
                {SITE.hours.map(([d,h]) => (
                  <div key={d} className="biz-card__hr"><span>{d}</span><span>{h}</span></div>
                ))}
              </div>

              <div className="biz-card__alt">
                <div className="eyebrow" style={{opacity:0.5,marginBottom:12}}>◇ Also</div>
                <a href="#" className="biz-card__alt-link">Text us → {SITE.phone.display}</a>
                <a href="#" className="biz-card__alt-link">DM on Instagram → {SITE.social.instagram}</a>
                <a href="#" className="biz-card__alt-link">Chat live (business hours)</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTACT FAQ */}
      <section className="faq">
        <div className="wrap">
          <div className="faq__grid">
            <div className="faq__side">
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Before you submit</div>
              <h2 className="display faq__title">Quick <span className="serif-it">questions.</span></h2>
              <p className="faq__p">Everything about what happens next.</p>
            </div>
            <ul className="faq__list">
              {contactFaqs.map((f,i) => {
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

      <ServiceMap/>
    </main>
  );
}
window.ContactPage = ContactPage;

// ============ PAGE: /thanks ============
function ThanksPage() {
  return (
    <main id="content">
      <section className="thanks">
        <div className="wrap">
          <div className="thanks__inner">
            <div className="thanks__check"><Icon.Check size={36}/></div>
            <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ Thank you</div>
            <h1 className="display" style={{fontSize:'clamp(40px,6vw,88px)',marginBottom:24}}>Got it. <span className="serif-it" style={{color:'var(--clay)'}}>We're on it.</span></h1>
            <p style={{fontSize:18,opacity:0.72,maxWidth:560,lineHeight:1.5,marginBottom:40}}>A human from the shop will call you within one business day. For fastest response, call us directly.</p>
            <a href={`tel:${SITE.phone.tel}`} className="btn btn--primary btn--xl"><Icon.Phone size={18}/> {SITE.phone.display}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ThanksPage = ThanksPage;

// ============ PAGE: /404 ============
function NotFoundPage() {
  return (
    <main id="content">
      <section className="notfound">
        <div className="wrap">
          <div className="notfound__n display">404</div>
          <h1 className="display" style={{fontSize:'clamp(40px,6vw,88px)',marginBottom:24}}>This page got <span className="serif-it" style={{color:'var(--ember)'}}>sun-bleached.</span></h1>
          <p style={{fontSize:18,opacity:0.65,maxWidth:520,lineHeight:1.5,marginBottom:40}}>It's gone, or it never existed. Either way, here's where most people head next.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <Link to="/" className="btn btn--primary">← Home</Link>
            <Link to="/services" className="btn btn--ghost">Services</Link>
            <Link to="/work" className="btn btn--ghost">Work</Link>
            <Link to="/contact" className="btn btn--ghost">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
window.NotFoundPage = NotFoundPage;

// ============ PAGE: /privacy and /terms ============
function LegalPage({ kind = "privacy" }) {
  const isP = kind === "privacy";
  return (
    <main id="content">
      <article className="legal">
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ {isP?"Privacy":"Terms"}</div>
          <h1 className="display" style={{fontSize:'clamp(40px,6vw,80px)',marginBottom:16}}>{isP?"Privacy Policy":"Terms of Service"}</h1>
          <p style={{opacity:0.55,fontSize:13,marginBottom:48}}>Last updated: April 2026</p>

          <div className="legal-body">
            <p className="legal-lead">
              {isP
                ? `This policy explains what information ${SITE.name} collects, how we use it, and the choices you have. We keep things short because most of this is straightforward.`
                : `These Terms govern your use of ${SITE.name}'s website and painting services. By using either, you agree to them. They're written plainly — if anything's unclear, call us.`}
            </p>

            {(isP ? [
              ["What we collect","Contact info you give us (name, email, phone, address), photos you upload, and standard web analytics (page views, device type). We don't sell any of it, ever."],
              ["How we use it","To respond to your estimate request, schedule walkthroughs, and send occasional project updates. That's it."],
              ["Cookies","We use basic analytics cookies (Google Analytics) and, if you've consented, advertising cookies (Meta Pixel). You can opt out any time via your browser or our cookie banner."],
              ["Third parties","Google Analytics, Google Search Console, Meta Pixel, and a call-tracking service. Each has their own privacy policy; links available on request."],
              ["Your rights","You can request a copy of any data we hold on you, or ask us to delete it. Email privacy@saguaroco.paint. Arizona and California residents have additional rights under CCPA."],
              ["Security","We use TLS everywhere, encrypted backups, and industry-standard access controls. No system is perfect; we'll notify you in writing within 72 hours of any breach affecting your data."],
              ["Contact","Questions? Email privacy@saguaroco.paint or call the shop at "+SITE.phone.display+"."],
            ] : [
              ["Services","We provide residential and commercial painting services in the Phoenix metro area. Every project is governed by a separate written contract; these Terms cover website use and general policies."],
              ["Estimates","Estimates are free and non-binding until both parties sign a written scope. Verbal estimates are advisory only."],
              ["Payment","Standard terms: 10% deposit at contract signing, 40% on start, 50% on final walkthrough. We accept check, ACH, credit card (3% fee), and financing via approved partners."],
              ["Warranty","We warrant all workmanship for 10 years against peeling, blistering, and premature coating failure. Warranty doesn't cover acts of God, vandalism, or substrate changes (e.g. settling cracks) outside our control. Full terms in your contract."],
              ["Cancellation","You may cancel before work begins with written notice. Deposits are refundable up to 7 days before scheduled start."],
              ["Liability","Our liability is capped at the contract amount. We carry $2M general liability and $1M workers' comp — certificates available on request."],
              ["Dispute resolution","Disputes go to mediation first, arbitration second, in Maricopa County, Arizona. Arizona law governs."],
              ["Changes","We may update these Terms occasionally. Material changes will be noted on this page with a new 'Last updated' date."],
            ]).map(([h,t]) => (
              <section key={h} className="legal-section">
                <h2>{h}</h2>
                <p>{t}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
window.LegalPage = LegalPage;
