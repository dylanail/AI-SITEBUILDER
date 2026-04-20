// ============ PAGE: /blog and /blog/[slug] ============
function BlogIndexPage() {
  const [cat, setCat] = React.useState("All");
  const [q, setQ] = React.useState("");
  const featured = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const filtered = BLOG_POSTS.filter(p =>
    (cat === "All" || p.category === cat) &&
    (q === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))
  ).filter(p => p !== featured || cat !== "All" || q !== "");
  const shown = (cat==="All" && q==="") ? BLOG_POSTS.filter(p=>!p.featured) : filtered;

  return (
    <main id="content">
      <PageHeader eyebrow="◇ The journal" title={<>Paint, desert,<br/><span className="serif-it">and the science between.</span></>} subtitle="Field notes from 16 years painting Phoenix homes."/>

      {featured && cat === "All" && q === "" && (
        <section className="blog-featured">
          <div className="wrap">
            <Link to={`/blog/${featured.slug}`} className="feat-post">
              <div className="feat-post__img"><img src={featured.image} alt={featured.title}/></div>
              <div className="feat-post__body">
                <div style={{display:'flex',gap:8,marginBottom:16}}>
                  <span className="feat-post__cat">Featured · {featured.category}</span>
                </div>
                <h2 className="display feat-post__title">{featured.title}</h2>
                <p className="feat-post__excerpt">{featured.excerpt}</p>
                <div className="feat-post__meta">
                  <span>{featured.author}</span><span>·</span><span>{featured.date}</span><span>·</span><span>{featured.readTime} min read</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="blog-filters">
        <div className="wrap">
          <div className="blog-filter-bar">
            <div className="filters__chips">
              {CATEGORIES.map(c => (
                <button key={c} className={`chip ${cat===c?'is-active':''}`} onClick={()=>setCat(c)}>{c}</button>
              ))}
            </div>
            <div className="blog-search">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the journal"/>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid-wrap">
        <div className="wrap">
          <div className="blog-grid">
            {shown.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="bcard">
                <div className="bcard__img"><img src={p.image} alt={p.title} loading="lazy"/></div>
                <div className="bcard__body">
                  <div className="bcard__cat">{p.category}</div>
                  <h3 className="bcard__title">{p.title}</h3>
                  <p className="bcard__excerpt">{p.excerpt}</p>
                  <div className="bcard__meta">{p.date} · {p.readTime} min</div>
                </div>
              </Link>
            ))}
          </div>
          {shown.length === 0 && <div style={{padding:60,textAlign:'center',opacity:0.5}}>No posts match.</div>}
        </div>
      </section>

      <section className="newsletter">
        <div className="wrap">
          <div className="newsletter__inner">
            <div>
              <div className="eyebrow" style={{color:'var(--clay)'}}>◇ The newsletter</div>
              <h3 className="display" style={{fontSize:'clamp(28px,4vw,48px)',marginTop:16}}>One email a month.<br/><span className="serif-it">No pitches.</span></h3>
              <p style={{marginTop:16,opacity:0.7,maxWidth:460}}>Seasonal maintenance tips, color trends we're seeing in the field, and the occasional before/after we're proud of.</p>
            </div>
            <form className="newsletter__form" onSubmit={e=>e.preventDefault()}>
              <input type="email" placeholder="you@email.com" required/>
              <button className="btn btn--dark" type="submit">Subscribe <Icon.Arrow size={14}/></button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
window.BlogIndexPage = BlogIndexPage;

function BlogPostPage({ slug }) {
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];
  const [progress, setProgress] = React.useState(0);
  const [activeToc, setActiveToc] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('article-body');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const scrolled = Math.max(0, -r.top);
      const total = Math.max(1, el.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, (scrolled/total)*100));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const toc = ["The problem","Why Phoenix is different","The three forces","Our product spec","What to look for","FAQ"];
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <main id="content">
      <div className="reading-bar" style={{width:`${progress}%`}}/>

      <article className="post" id="article-body">
        <div className="wrap" style={{paddingTop:120}}>
          <header className="post__head">
            <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ {post.category}</div>
            <h1 className="display post__h1">{post.title}</h1>
            <div className="post__meta">
              <div className="post__meta-author">
                <div className="quote__avatar" style={{width:40,height:40,fontSize:13,background:'#b5651d'}}>{post.author.split(' ').map(w=>w[0]).join('')}</div>
                <div>
                  <div style={{fontWeight:600,fontSize:14}}>{post.author}</div>
                  <div style={{fontSize:12,opacity:0.6}}>{post.date} · {post.readTime} min read</div>
                </div>
              </div>
              <div className="post__share">
                <span style={{fontSize:11,letterSpacing:'0.15em',textTransform:'uppercase',opacity:0.5,marginRight:8}}>Share</span>
                <button className="share-btn" aria-label="X">X</button>
                <button className="share-btn" aria-label="LinkedIn">in</button>
                <button className="share-btn" aria-label="Copy link">⎘</button>
              </div>
            </div>
          </header>

          <div className="post__hero"><img src={post.image} alt={post.title}/></div>

          <div className="post__layout">
            <aside className="toc">
              <div className="toc__title">Contents</div>
              <ol>
                {toc.map((t,i) => (
                  <li key={i} className={i===activeToc?'is-active':''}>
                    <button onClick={()=>setActiveToc(i)}>{String(i+1).padStart(2,'0')} &nbsp;{t}</button>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="post__body prose">
              <p className="prose-lead">Every exterior coat in Phoenix fights a war on three fronts: ultraviolet radiation, thermal cycling, and monsoon moisture. Most paint fails because it's specified for a climate that isn't this one.</p>

              <h2>The problem</h2>
              <p>Walk any Valley neighborhood built between 1990 and 2010 and you'll see the same pattern: west-facing stucco chalking to the touch, south-facing trim peeling at every joint, and a faint haze of UV-oxidized binder catching the afternoon light. This isn't the paint's fault. It's the spec's fault.</p>

              <blockquote className="pull">"The product that works in Seattle won't work in Scottsdale. Not even close."</blockquote>

              <h2>Why Phoenix is different</h2>
              <p>Three numbers tell the story:</p>
              <ul>
                <li><strong>UV index.</strong> Phoenix averages 9.4 peak annually, versus 6.1 in Seattle. That's not a small difference — it's 54% more UV energy hitting every west elevation.</li>
                <li><strong>Thermal cycling.</strong> A stucco wall can swing 85°F in a single July day. Paint needs elastomeric capacity to move with that expansion.</li>
                <li><strong>Moisture events.</strong> Monsoon storms drive rain sideways at 60 mph. Standard acrylics let that water in; they just don't let it back out.</li>
              </ul>

              <h3>The callout</h3>
              <div className="callout">
                <div className="callout__ic">◆</div>
                <div>
                  <strong>Field note:</strong> We keep moisture-content readings for every job in a running spreadsheet since 2011. West-facing walls are consistently 2–4% wetter than north-facing, year-round.
                </div>
              </div>

              <h2>The three forces</h2>
              <p>Understanding the failure mode determines the fix. We break it down:</p>

              <table className="prose-table">
                <thead><tr><th>Force</th><th>Visible as</th><th>Product fix</th></tr></thead>
                <tbody>
                  <tr><td>UV</td><td>Chalking, fade</td><td>UV-stabilized acrylic</td></tr>
                  <tr><td>Thermal</td><td>Hairline cracks</td><td>Elastomeric bridge</td></tr>
                  <tr><td>Moisture</td><td>Peeling, efflorescence</td><td>Vapor-permeable topcoat</td></tr>
                </tbody>
              </table>

              {/* Mid-article CTA */}
              <aside className="mid-cta">
                <div>
                  <div className="eyebrow" style={{color:'var(--ember)',marginBottom:8}}>◇ Curious about your home?</div>
                  <div className="display" style={{fontSize:28}}>Book a free <span className="serif-it">walkthrough.</span></div>
                  <p style={{marginTop:8,opacity:0.7}}>We'll check your moisture content and substrate for free — no obligation.</p>
                </div>
                <a href={`tel:${SITE.phone.tel}`} className="btn btn--primary"><Icon.Phone size={14}/> {SITE.phone.display}</a>
              </aside>

              <h2>Our product spec</h2>
              <p>For Phoenix homes we default to <Link to="/services/exterior-painting" className="prose-link">Sherwin-Williams Duration</Link> with elastomeric primer on west elevations. For extreme cases — 1950s stucco with visible hairlines — we switch to SW Loxon XP, which bridges cracks up to 1/16".</p>

              <figure>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200" alt="Product application"/>
                <figcaption>Loxon XP application on a west-facing elevation, Arcadia, 2024.</figcaption>
              </figure>

              <h2>What to look for</h2>
              <p>If you're reading this before hiring a painter — three questions to ask any contractor bidding your exterior:</p>
              <ol>
                <li>What's the moisture content on my stucco right now? (If they don't check, they're guessing.)</li>
                <li>What's your elastomeric spec for west elevations? (If they don't differentiate, skip them.)</li>
                <li>How many mils dry film thickness? (Should be 3+ per coat.)</li>
              </ol>

              <h2>FAQ</h2>
              <div className="inline-faq">
                {FAQS_GLOBAL.slice(0,3).map((f,i)=>(
                  <details key={i}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>

              <div className="post__author">
                <div className="quote__avatar" style={{width:64,height:64,fontSize:18,background:'#b5651d'}}>{post.author.split(' ').map(w=>w[0]).join('')}</div>
                <div>
                  <div style={{fontWeight:600,fontSize:16,marginBottom:4}}>{post.author}</div>
                  <div style={{fontSize:13,opacity:0.6,marginBottom:8}}>{TEAM.find(t=>t.name===post.author)?.role || "Saguaro crew"}</div>
                  <p style={{fontSize:14,lineHeight:1.55,opacity:0.8}}>{TEAM.find(t=>t.name===post.author)?.bio || "Writes about Phoenix painting when he isn't on a ladder."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="related-posts">
        <div className="wrap">
          <div className="eyebrow" style={{color:'var(--clay)',marginBottom:16}}>◇ Keep reading</div>
          <h2 className="display" style={{fontSize:'clamp(28px,3.5vw,48px)',marginBottom:32}}>Related <span className="serif-it">journal entries.</span></h2>
          <div className="blog-grid">
            {related.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="bcard">
                <div className="bcard__img"><img src={p.image} alt={p.title}/></div>
                <div className="bcard__body">
                  <div className="bcard__cat">{p.category}</div>
                  <h3 className="bcard__title">{p.title}</h3>
                  <div className="bcard__meta">{p.date} · {p.readTime} min</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStripShared/>
    </main>
  );
}
window.BlogPostPage = BlogPostPage;
