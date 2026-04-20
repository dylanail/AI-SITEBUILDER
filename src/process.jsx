// Process ribbon
const PROCESS = [
  { n: "01", t: "Walkthrough", d: "On-site scope, moisture check, HOA review. 45 minutes. No pressure." },
  { n: "02", t: "Color & proposal", d: "Line-itemed bid and photorealistic color renderings within 48 hours." },
  { n: "03", t: "Prep", d: "Pressure wash, scrape, patch stucco, re-caulk, prime bare spots. 2–3 days." },
  { n: "04", t: "Paint", d: "Two-coat sprayed and back-rolled. Crew lead on-site daily." },
  { n: "05", t: "Walk & warrant", d: "Final walkthrough, touch-ups, 10-year written workmanship warranty." },
];

function Process() {
  return (
    <section className="process" data-screen-label="03 Process">
      <div className="wrap">
        <div className="process__head">
          <div className="eyebrow" style={{color:'var(--clay-2)'}}>◇ The process</div>
          <h2 className="display process__title">
            Five steps. <span className="serif-it">Zero surprises.</span>
          </h2>
        </div>
        <ol className="process__list">
          {PROCESS.map((p,i) => (
            <li key={p.n} className="process__step">
              <div className="process__n">{p.n}</div>
              <div className="process__body">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
              {i < PROCESS.length - 1 && <div className="process__rule"/>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.Process = Process;
