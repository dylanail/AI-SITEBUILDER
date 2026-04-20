// Footer with NAP
function Footer() {
  return (
    <footer className="footer" data-screen-label="09 Footer">
      <div className="wrap">
        {/* Oversized wordmark */}
        <div className="footer__mark">
          <span className="footer__mark-txt display">Saguaro &amp; Co.</span>
          <span className="footer__mark-sub serif-it">Exterior painting since 2009</span>
        </div>

        <div className="footer__grid">
          {/* NAP */}
          <address className="footer__nap">
            <div className="footer__eye">Visit the shop</div>
            <div className="footer__addr">
              <div>Saguaro &amp; Co. Exterior Painting</div>
              <div>4422 E Indian School Rd, Suite 12</div>
              <div>Phoenix, Arizona 85018</div>
            </div>
            <div className="footer__line">
              <Icon.Phone size={13}/>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </div>
            <div className="footer__line">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></svg>
              <a href="mailto:hello@saguaroco.paint">hello@saguaroco.paint</a>
            </div>
            <div className="footer__hrs">
              <div>Mon–Fri · 7:00a – 6:00p</div>
              <div>Saturday · 8:00a – 2:00p</div>
              <div>Sunday · by appointment</div>
            </div>
          </address>

          {/* Links */}
          <div className="footer__col">
            <div className="footer__eye">Services</div>
            <ul>
              <li><a href="#">Exterior repaint</a></li>
              <li><a href="#">Stucco repair</a></li>
              <li><a href="#">Trim &amp; fascia</a></li>
              <li><a href="#">HOA color consulting</a></li>
              <li><a href="#">Cool-roof coatings</a></li>
              <li><a href="#">Commercial</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__eye">Neighborhoods</div>
            <ul className="footer__areas">
              <li><a href="#">Paradise Valley</a></li>
              <li><a href="#">Scottsdale</a></li>
              <li><a href="#">Arcadia</a></li>
              <li><a href="#">Biltmore</a></li>
              <li><a href="#">Central Phoenix</a></li>
              <li><a href="#">North Phoenix</a></li>
              <li><a href="#">Ahwatukee</a></li>
              <li><a href="#">Tempe</a></li>
              <li><a href="#">Mesa</a></li>
              <li><a href="#">Chandler</a></li>
              <li><a href="#">Gilbert</a></li>
              <li><a href="#">Fountain Hills</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__eye">Credentials</div>
            <ul className="footer__creds">
              <li>AZ ROC #287-431 (C-34)</li>
              <li>$2M general liability</li>
              <li>$1M workers' comp</li>
              <li>BBB A+ · since 2011</li>
              <li>EPA Lead-Safe certified</li>
              <li>Sherwin-Williams certified</li>
              <li>Dunn-Edwards Pro</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            © 2009–2026 Saguaro &amp; Co. LLC · Licensed, bonded &amp; insured in Arizona
          </div>
          <div className="footer__small">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
            <a href="#">Careers <Icon.ArrowUpRight size={10}/></a>
          </div>
        </div>
      </div>

      {/* horizon illustration */}
      <div className="footer__horizon" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 Q200,60 400,75 T800,78 Q1000,65 1200,82 L1200,120 L0,120 Z" fill="var(--ink)" opacity="0.3"/>
          <path d="M0,95 Q300,82 600,90 T1200,92 L1200,120 L0,120 Z" fill="var(--ink)" opacity="0.6"/>
          <path d="M0,105 Q400,98 800,102 T1200,105 L1200,120 L0,120 Z" fill="var(--ink)"/>
          {/* Saguaros */}
          <g fill="var(--ink)" opacity="0.9">
            <path d="M120,95 L120,75 Q120,70 125,70 Q130,70 130,75 L130,95 Z"/>
            <path d="M128,82 Q138,82 138,75 L140,75 L140,85 Q140,90 135,90 L128,90 Z"/>
            <path d="M280,100 L280,70 Q280,64 286,64 Q292,64 292,70 L292,100 Z"/>
            <path d="M288,80 Q300,80 300,70 L302,70 L302,82 Q302,88 296,88 L288,88 Z"/>
            <path d="M278,85 Q268,85 268,75 L266,75 L266,87 Q266,93 272,93 L278,93 Z"/>
            <path d="M620,103 L620,80 Q620,76 624,76 Q628,76 628,80 L628,103 Z"/>
            <path d="M960,98 L960,72 Q960,67 965,67 Q970,67 970,72 L970,98 Z"/>
            <path d="M968,82 Q978,82 978,75 L980,75 L980,86 Q980,91 975,91 L968,91 Z"/>
          </g>
        </svg>
      </div>
    </footer>
  );
}
window.Footer = Footer;
