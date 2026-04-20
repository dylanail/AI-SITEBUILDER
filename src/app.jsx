// App root with hash-based routing across all template pages
const defaultsRaw = document.getElementById('tweaks-defaults').textContent;
const m = defaultsRaw.match(/EDITMODE-BEGIN\*\/([\s\S]*?)\/\*EDITMODE-END/);
const TWEAK_DEFAULTS = JSON.parse(m[1]);

function parseRoute(route) {
  const segments = route.split('/').filter(Boolean);
  if (segments.length === 0) return { page: 'home' };
  const [first, ...rest] = segments;
  if (first === 'services') {
    if (rest.length === 0) return { page: 'services-index' };
    if (rest.length === 1) return { page: 'service-detail', slug: rest[0] };
    if (rest.length === 2) return { page: 'location', serviceSlug: rest[0], locSlug: rest[1] };
  }
  if (first === 'locations' && rest.length === 1) return { page: 'location', serviceSlug: 'interior-painting', locSlug: rest[0] };
  if (first === 'work') return { page: 'work' };
  if (first === 'about') return { page: 'about' };
  if (first === 'contact') return { page: 'contact' };
  if (first === 'thanks') return { page: 'thanks' };
  if (first === 'blog') {
    if (rest.length === 0) return { page: 'blog-index' };
    return { page: 'blog-post', slug: rest[0] };
  }
  if (first === 'privacy') return { page: 'legal', kind: 'privacy' };
  if (first === 'terms') return { page: 'legal', kind: 'terms' };
  return { page: '404' };
}

function Homepage() {
  // Inline composition of homepage sections
  return (
    <>
      <Hero/>
      <Marquee items={[
        "Paradise Valley","Scottsdale","Arcadia","Biltmore","Central Phoenix",
        "Ahwatukee","Tempe","Mesa","Chandler","Gilbert","Fountain Hills","North Phoenix"
      ]}/>
      <Services/>
      <Process/>
      <Gallery/>
      <CtaStrip/>
      <ServiceMap/>
      <Testimonials/>
      <FAQ/>
    </>
  );
}

function App() {
  const [state, setState] = React.useState(TWEAK_DEFAULTS);
  const [route] = useRoute();
  const parsed = parseRoute(route);

  React.useEffect(() => {
    const a = ACCENTS[state.accent] || ACCENTS.sunset;
    const r = document.documentElement;
    r.style.setProperty('--clay', a.clay);
    r.style.setProperty('--clay-2', a.clay2);
    r.style.setProperty('--ember', a.ember);
    r.style.setProperty('--sun', a.sun);
    r.dataset.density = state.density;
  }, [state.accent, state.density]);

  const upd = (p) => setState(s => ({ ...s, ...p }));

  // Nav variant: dark for pages with dark hero, light for light-bg pages
  const darkHeroPages = ['home','service-detail','location','contact','thanks','404'];
  const navVariant = darkHeroPages.includes(parsed.page) ? 'dark' : 'dark';
  // Homepage has its own built-in nav in Hero; suppress the site nav there
  const showSiteNav = parsed.page !== 'home';

  let content;
  switch (parsed.page) {
    case 'home':           content = <Homepage/>; break;
    case 'services-index': content = <ServicesIndexPage/>; break;
    case 'service-detail': content = <ServiceDetailPage slug={parsed.slug}/>; break;
    case 'location':       content = <LocationPage serviceSlug={parsed.serviceSlug} locSlug={parsed.locSlug}/>; break;
    case 'work':           content = <WorkPage/>; break;
    case 'about':          content = <AboutPage/>; break;
    case 'contact':        content = <ContactPage/>; break;
    case 'thanks':         content = <ThanksPage/>; break;
    case 'blog-index':     content = <BlogIndexPage/>; break;
    case 'blog-post':      content = <BlogPostPage slug={parsed.slug}/>; break;
    case 'legal':          content = <LegalPage kind={parsed.kind}/>; break;
    case '404':            content = <NotFoundPage/>; break;
    default:               content = <NotFoundPage/>;
  }

  return (
    <>
      {showSiteNav && <SiteNav variant={navVariant}/>}
      {content}
      {parsed.page !== 'home' && <SiteFooter/>}
      {parsed.page === 'home' && <Footer/>}
      <TweaksPanel state={state} onChange={upd}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
