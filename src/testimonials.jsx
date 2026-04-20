// Testimonials carousel
const REVIEWS = [
  {
    quote: "We interviewed four painters for our Paradise Valley home. Saguaro was the only crew who talked about prep before price. A year in and not one hairline crack has opened up.",
    name: "Elena R.",
    detail: "Paradise Valley · 3,800 sqft repaint",
    rating: 5,
    source: "Google",
    date: "Mar 2026",
    avatarColor: "#c87138",
  },
  {
    quote: "Our HOA palette approval was months of headache until Javier walked it through for us. They handled the paperwork, did color mockups, and nailed the matte finish on the first try.",
    name: "Michael T.",
    detail: "Scottsdale (Gainey Ranch)",
    rating: 5,
    source: "Google",
    date: "Feb 2026",
    avatarColor: "#8a4a2c",
  },
  {
    quote: "Old stucco, lots of hairlines, west-facing — basically the worst case. They brought in an elastomeric system I'd never heard of, and the west wall looks like a new build.",
    name: "Ann-Marie K.",
    detail: "Arcadia · 1958 ranch",
    rating: 5,
    source: "Google",
    date: "Feb 2026",
    avatarColor: "#b5651d",
  },
  {
    quote: "Two full days of prep before a drop of paint. Neighbors asked who we used before we were halfway done. Worth every dollar and came in under their own estimate.",
    name: "David & Sara L.",
    detail: "Biltmore · Spanish Colonial",
    rating: 5,
    source: "Google",
    date: "Jan 2026",
    avatarColor: "#e07a3b",
  },
  {
    quote: "Third time we've used them across two homes. The 10-year warranty is real — they came back on year four for a sun-faded trim piece, no argument.",
    name: "Priya S.",
    detail: "North Scottsdale",
    rating: 5,
    source: "Google",
    date: "Dec 2025",
    avatarColor: "#8a6b52",
  },
];

function Testimonials() {
  const [idx, setIdx] = React.useState(0);
  const n = REVIEWS.length;
  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i+1) % n), 7000);
    return () => clearInterval(t);
  }, [n]);

  return (
    <section id="reviews" className="testimonials" data-screen-label="06 Testimonials">
      <div className="wrap">
        <div className="testimonials__head">
          <div>
            <div className="eyebrow" style={{color:'var(--sun)'}}>◇ What clients say</div>
            <h2 className="display testimonials__title">
              <span style={{color:'var(--sun)'}}>4.9</span> from 312 neighbors.
            </h2>
          </div>
          <div className="testimonials__srcs">
            <div className="src src--google">
              <Icon.Google size={16}/>
              <div>
                <div className="src__num">4.9<span>★</span></div>
                <div className="src__lbl">312 Google reviews</div>
              </div>
            </div>
            <div className="src">
              <div className="src__badge">A+</div>
              <div>
                <div className="src__num">BBB</div>
                <div className="src__lbl">Accredited since 2011</div>
              </div>
            </div>
            <div className="src">
              <div className="src__badge src__badge--red">H</div>
              <div>
                <div className="src__num">Top Pro</div>
                <div className="src__lbl">Houzz · 5 years</div>
              </div>
            </div>
          </div>
        </div>

        <div className="quote-stage">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className={`quote ${i===idx?'is-active':''}`}
              aria-hidden={i!==idx}
            >
              <div className="quote__mark">“</div>
              <blockquote className="quote__text">{r.quote}</blockquote>
              <figcaption className="quote__foot">
                <div className="quote__avatar" style={{background:r.avatarColor}}>
                  {r.name.split(' ').map(w=>w[0]).join('').slice(0,2)}
                </div>
                <div>
                  <div className="quote__name">{r.name}</div>
                  <div className="quote__detail">{r.detail}</div>
                </div>
                <div className="quote__rating">
                  {[0,1,2,3,4].map(s=> <Icon.Star key={s} size={12}/>)}
                  <span>· {r.source} · {r.date}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="quote__ctrl">
          <div className="quote__dots">
            {REVIEWS.map((_,i) => (
              <button
                key={i}
                onClick={()=>setIdx(i)}
                className={`dot ${i===idx?'is-active':''}`}
                aria-label={`Review ${i+1}`}
              />
            ))}
          </div>
          <div className="quote__nav">
            <button className="icon-btn icon-btn--ghost" onClick={()=>setIdx((idx - 1 + n) % n)}>
              <Icon.Arrow size={14} style={{transform:'rotate(180deg)'}}/>
            </button>
            <button className="icon-btn icon-btn--ghost" onClick={()=>setIdx((idx + 1) % n)}>
              <Icon.Arrow size={14}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
