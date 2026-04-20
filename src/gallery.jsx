// Before/After gallery with drag slider
const GALLERY = [
  {
    title: "1952 Ranch, Arcadia",
    location: "Arcadia",
    completed: "Mar 2026",
    days: 6,
    before: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    colors: ["#d9c9a8", "#4a3c30", "#2b1f18"],
  },
  {
    title: "Territorial Revival, Paradise Valley",
    location: "Paradise Valley",
    completed: "Feb 2026",
    days: 9,
    before: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop",
    colors: ["#b5651d", "#e8dcc4", "#1a1512"],
  },
  {
    title: "Contemporary Stucco, North Scottsdale",
    location: "Scottsdale",
    completed: "Jan 2026",
    days: 5,
    before: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    colors: ["#f5e8d6", "#c87138", "#3d2d22"],
  },
  {
    title: "Spanish Colonial, Biltmore",
    location: "Biltmore",
    completed: "Dec 2025",
    days: 7,
    before: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    colors: ["#ecdcc4", "#8a4a2c", "#2e221b"],
  },
  {
    title: "Mid-Century, Central Phoenix",
    location: "Central Phoenix",
    completed: "Nov 2025",
    days: 5,
    before: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    colors: ["#3d3028", "#c87853", "#e8dcc4"],
  },
  {
    title: "Desert Modern New-Build, Cave Creek",
    location: "Cave Creek",
    completed: "Oct 2025",
    days: 8,
    before: "https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    colors: ["#2b2520", "#d9c9a8", "#b5651d"],
  },
];

function BeforeAfter({ before, after, init = 50 }) {
  const [pos, setPos] = React.useState(init);
  const [dragging, setDragging] = React.useState(false);
  const ref = React.useRef(null);

  const moveTo = React.useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(p);
  }, []);

  React.useEffect(() => {
    if (!dragging) return;
    const mm = (e) => moveTo(e.touches ? e.touches[0].clientX : e.clientX);
    const mu = () => setDragging(false);
    window.addEventListener('mousemove', mm);
    window.addEventListener('mouseup', mu);
    window.addEventListener('touchmove', mm);
    window.addEventListener('touchend', mu);
    return () => {
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('mouseup', mu);
      window.removeEventListener('touchmove', mm);
      window.removeEventListener('touchend', mu);
    };
  }, [dragging, moveTo]);

  return (
    <div
      className="ba"
      ref={ref}
      onMouseDown={(e)=>{ setDragging(true); moveTo(e.clientX); }}
      onTouchStart={(e)=>{ setDragging(true); moveTo(e.touches[0].clientX); }}
    >
      <div className="ba__img ba__img--after">
        <img src={after} alt="After" draggable="false"/>
        <div className="ba__tag ba__tag--after">AFTER</div>
      </div>
      <div className="ba__img ba__img--before" style={{ clipPath: `inset(0 ${100-pos}% 0 0)` }}>
        <img src={before} alt="Before" draggable="false"/>
        <div className="ba__tag ba__tag--before">BEFORE</div>
      </div>
      <div className="ba__handle" style={{ left: `${pos}%` }}>
        <div className="ba__line"/>
        <div className="ba__knob">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [idx, setIdx] = React.useState(0);
  const item = GALLERY[idx];

  return (
    <section id="work" className="gallery" data-screen-label="05 Before & After">
      <div className="wrap">
        <div className="section-head section-head--light">
          <div className="section-head__left">
            <div className="eyebrow" style={{color:'var(--clay)'}}>◇ Before / after</div>
            <h2 className="display section-head__title">
              Drag to see<br/>the <span className="serif-it">difference.</span>
            </h2>
          </div>
          <div className="section-head__right">
            <p>
              No photo filters, no stock photography. Every home shown was painted by
              our crews in the last twelve months. Drag the handle left and right.
            </p>
          </div>
        </div>

        <div className="gallery__stage">
          <BeforeAfter before={item.before} after={item.after} key={idx}/>

          <div className="gallery__meta">
            <div className="gallery__count">
              <span className="gallery__cur">{String(idx+1).padStart(2,'0')}</span>
              <span className="gallery__total">/ {String(GALLERY.length).padStart(2,'0')}</span>
            </div>
            <div className="gallery__info">
              <div className="gallery__title">{item.title}</div>
              <div className="gallery__subline">
                <Icon.Pin size={12}/> {item.location} · Completed {item.completed} · {item.days}-day project
              </div>
              <div className="gallery__palette">
                <span className="gallery__palette-lbl">Palette</span>
                {item.colors.map((c,i)=>(
                  <span key={i} className="gallery__swatch" style={{background:c}}/>
                ))}
              </div>
            </div>
            <div className="gallery__nav">
              <button
                className="icon-btn"
                onClick={()=>setIdx((idx - 1 + GALLERY.length) % GALLERY.length)}
                aria-label="Previous"
              >
                <Icon.Arrow size={16} style={{transform:'rotate(180deg)'}}/>
              </button>
              <button
                className="icon-btn"
                onClick={()=>setIdx((idx + 1) % GALLERY.length)}
                aria-label="Next"
              >
                <Icon.Arrow size={16}/>
              </button>
            </div>
          </div>

          <div className="gallery__thumbs">
            {GALLERY.map((g,i) => (
              <button
                key={i}
                className={`thumb ${i===idx?'is-active':''}`}
                onClick={()=>setIdx(i)}
              >
                <img src={g.after} alt=""/>
                <span className="thumb__num">{String(i+1).padStart(2,'0')}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Gallery = Gallery;
