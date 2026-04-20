// Service area map — stylized SVG of Phoenix metro with neighborhoods
const AREAS = [
  { name: "Paradise Valley", x: 62, y: 38, primary: true, drive: "12 min" },
  { name: "Scottsdale", x: 74, y: 32, primary: true, drive: "15 min" },
  { name: "Arcadia", x: 58, y: 48, primary: true, drive: "10 min" },
  { name: "Biltmore", x: 50, y: 50, primary: true, drive: "8 min" },
  { name: "North Phoenix", x: 44, y: 24, drive: "20 min" },
  { name: "Central Phoenix", x: 42, y: 52, drive: "12 min" },
  { name: "Ahwatukee", x: 44, y: 78, drive: "25 min" },
  { name: "Tempe", x: 60, y: 64, drive: "18 min" },
  { name: "Mesa", x: 76, y: 62, drive: "22 min" },
  { name: "Chandler", x: 72, y: 80, drive: "28 min" },
  { name: "Gilbert", x: 82, y: 74, drive: "26 min" },
  { name: "Fountain Hills", x: 86, y: 40, drive: "28 min" },
];

function ServiceMap() {
  const [active, setActive] = React.useState(2); // Arcadia
  const current = AREAS[active];

  return (
    <section id="areas" className="map-section" data-screen-label="04 Service Area">
      <div className="wrap">
        <div className="section-head section-head--light">
          <div className="section-head__left">
            <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Service area</div>
            <h2 className="display section-head__title">
              A painter<br/>around the<br/><span className="serif-it">next arroyo.</span>
            </h2>
          </div>
          <div className="section-head__right">
            <p>
              We stay hyper-local to the East Valley and central Phoenix. Most jobs
              are less than 20 minutes from our Arcadia shop, so your estimate
              happens this week — not next.
            </p>
          </div>
        </div>

        <div className="map-wrap">
          {/* Stylized topographic map */}
          <div className="map-canvas">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="map-svg">
              <defs>
                <radialGradient id="desert-glow" cx="55%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#f0a85c" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#f0a85c" stopOpacity="0"/>
                </radialGradient>
                <pattern id="topo" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="0.3" fill="#b5651d" opacity="0.25"/>
                </pattern>
              </defs>
              {/* base */}
              <rect width="100" height="100" fill="#f5e8d6"/>
              <rect width="100" height="100" fill="url(#topo)"/>
              <rect width="100" height="100" fill="url(#desert-glow)"/>
              {/* mountain preserves */}
              <path d="M28,20 Q36,12 46,16 T60,22 Q54,30 42,30 T28,20 Z" fill="#e07a3b" opacity="0.22"/>
              <path d="M68,18 Q76,10 86,14 T96,20 Q90,26 80,28 T68,18 Z" fill="#e07a3b" opacity="0.22"/>
              <path d="M30,70 Q42,62 52,66 T68,72 Q60,80 48,80 T30,70 Z" fill="#b5651d" opacity="0.18"/>
              {/* freeways */}
              <g stroke="#8a6b52" strokeWidth="0.3" fill="none" opacity="0.45" strokeDasharray="0.6 0.6">
                <path d="M0,50 L100,50"/>
                <path d="M55,0 L55,100"/>
                <path d="M0,75 Q40,72 100,78"/>
                <path d="M20,0 Q25,40 30,100"/>
              </g>
              {/* service radius */}
              <circle cx="55" cy="50" r="30" fill="none" stroke="#b5651d" strokeWidth="0.25" strokeDasharray="1 1" opacity="0.6"/>
              <circle cx="55" cy="50" r="18" fill="#b5651d" fillOpacity="0.04" stroke="#b5651d" strokeWidth="0.25" strokeDasharray="1 1" opacity="0.9"/>

              {/* labels for geography */}
              <text x="38" y="14" fontSize="2" fill="#8a6b52" opacity="0.7" fontFamily="Archivo">PHOENIX MTN PRESERVE</text>
              <text x="72" y="13" fontSize="2" fill="#8a6b52" opacity="0.7" fontFamily="Archivo">McDOWELL MTNS</text>
              <text x="32" y="85" fontSize="2" fill="#8a6b52" opacity="0.7" fontFamily="Archivo">SOUTH MTN</text>
              <text x="2" y="48" fontSize="1.8" fill="#8a6b52" opacity="0.55" fontFamily="Archivo">I-17</text>
              <text x="53" y="4" fontSize="1.8" fill="#8a6b52" opacity="0.55" fontFamily="Archivo">SR-51</text>
            </svg>

            {/* pins (in absolute overlay so hit areas are easy) */}
            <div className="map-pins">
              {AREAS.map((a,i) => (
                <button
                  key={a.name}
                  className={`pin ${a.primary?'pin--primary':''} ${active===i?'is-active':''}`}
                  style={{ left: `${a.x}%`, top: `${a.y}%` }}
                  onClick={() => setActive(i)}
                  aria-label={a.name}
                >
                  <span className="pin__ring"/>
                  <span className="pin__dot"/>
                  <span className="pin__label">{a.name}</span>
                </button>
              ))}
            </div>

            {/* info card */}
            <div className="map-info">
              <div className="map-info__eye">Currently viewing</div>
              <div className="map-info__name">{current.name}</div>
              <div className="map-info__meta">
                <span><Icon.Pin size={12}/> {current.drive} from shop</span>
                <span>·</span>
                <span>Same-week estimates</span>
              </div>
              <a href={`tel:${PHONE_TEL}`} className="btn btn--dark btn--sm">
                <Icon.Phone size={12}/> Book {current.name}
              </a>
            </div>
          </div>

          {/* area list */}
          <div className="area-list">
            <div className="area-list__eye">All serviced areas</div>
            <ul>
              {AREAS.map((a,i) => (
                <li key={a.name}>
                  <button
                    className={`area-row ${active===i?'is-active':''}`}
                    onClick={()=>setActive(i)}
                  >
                    <span className="area-row__dot"/>
                    <span className="area-row__name">{a.name}</span>
                    <span className="area-row__drive">{a.drive}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ServiceMap = ServiceMap;
