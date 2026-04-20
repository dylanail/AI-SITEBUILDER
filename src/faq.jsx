// FAQ
const FAQS = [
  {
    q: "What does a full exterior repaint actually cost in Phoenix?",
    a: "Most single-family homes run $6,800–$14,500 depending on square footage, stucco condition, and trim complexity. HOA-approved color renderings and our 10-year workmanship warranty are included at every tier. We give you an itemized bid — no ballpark texts.",
  },
  {
    q: "How long does an exterior job take?",
    a: "A standard 2,500–3,500 sqft home is 5–7 working days start to finish: one day wash, two days stucco patch and prep, two days paint, plus trim and walk-through. We staff one crew per home so your timeline is predictable.",
  },
  {
    q: "Do you handle HOA approvals and color renderings?",
    a: "Yes. We're pre-familiar with palette guidelines for every major HOA from Desert Mountain to Ocotillo. We generate photorealistic color renderings of your home in three palettes, then file paperwork on your behalf.",
  },
  {
    q: "What paint brands and products do you use?",
    a: "Sherwin-Williams Duration, Emerald Rain Refresh, and Dunn-Edwards Evershield as standard. For west-facing elevations and flat roofs we spec elastomeric systems from SW Loxon or DE Ultrashield — engineered for Phoenix UV and thermal cycling.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — a 10-year written workmanship warranty covering peeling, blistering, and premature failure, plus the manufacturer's limited lifetime paint warranty. We've honored warranty calls on homes as old as 2012.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "AZ ROC #287-431 (C-34), $2M general liability, $1M workers' comp, BBB A+ since 2011. We'll email certificates before your first walkthrough.",
  },
  {
    q: "How soon can you start?",
    a: "Most weeks we can be on-site for an estimate within 2–4 business days. Current start dates are 3–5 weeks out; expedited slots are occasionally available for urgent repaints or listings.",
  },
  {
    q: "Do you paint during monsoon season?",
    a: "Yes — but we schedule around humidity and storm cells. July–August jobs add 1–2 buffer days. We never paint on stucco with moisture readings above 16%.",
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="faq" data-screen-label="07 FAQ">
      <div className="wrap">
        <div className="faq__grid">
          <div className="faq__side">
            <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Frequently asked</div>
            <h2 className="display faq__title">
              Straight<br/>answers,<br/>
              <span className="serif-it">no upsell.</span>
            </h2>
            <p className="faq__p">
              Don't see what you need? Call the shop — you'll reach Javier
              or a human who's been here a minute.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="btn btn--dark">
              <Icon.Phone size={14}/> {PHONE_DISPLAY}
            </a>
          </div>

          <ul className="faq__list">
            {FAQS.map((f,i) => {
              const isOpen = open === i;
              return (
                <li key={i} className={`faq__item ${isOpen?'is-open':''}`}>
                  <button
                    className="faq__q"
                    onClick={()=>setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq__num">{String(i+1).padStart(2,'0')}</span>
                    <span className="faq__qtext">{f.q}</span>
                    <span className={`faq__ic ${isOpen?'is-open':''}`}>
                      <Icon.Plus size={16}/>
                    </span>
                  </button>
                  <div className="faq__a" style={{
                    maxHeight: isOpen ? 400 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}>
                    <p>{f.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
