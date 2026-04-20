// ============ SITE DATA — all template-driven content in one place ============
// In a Next.js port, this becomes site.config.ts + a CMS
const SITE = {
  name: "Saguaro & Co.",
  tagline: "Exterior painting since 2009",
  phone: { display: "(480) 555-5555", tel: "4805555555" },
  email: "hello@saguaroco.paint",
  address: {
    line1: "4422 E Indian School Rd, Suite 12",
    city: "Phoenix", state: "Arizona", zip: "85018",
  },
  hours: [
    ["Mon–Fri", "7:00a – 6:00p"],
    ["Saturday", "8:00a – 2:00p"],
    ["Sunday", "by appointment"],
  ],
  founded: 2009,
  reviews: { google: { rating: 4.9, count: 312 }, bbb: "A+" },
  roc: "AZ ROC #287-431 (C-34)",
  insurance: ["$2M general liability", "$1M workers' comp"],
  certs: ["EPA Lead-Safe certified", "Sherwin-Williams certified", "Dunn-Edwards Pro"],
  social: { instagram: "@saguaroco.paint", facebook: "saguaroco" },
};

const SERVICES_DATA = [
  { slug:"exterior-painting",  name:"Exterior Painting",     icon:"Paint",    blurb:"Heat-cured acrylic systems engineered for 115°F summers.", tags:["Stucco","Block","Siding"], priceFrom:"$6,800", duration:"5–7 days" },
  { slug:"interior-painting",  name:"Interior Painting",     icon:"Palette",  blurb:"Low-VOC finishes and dust-controlled prep. Move back in tomorrow.", tags:["Low-VOC","Dust-controlled","Same-day"], priceFrom:"$2,400", duration:"2–4 days" },
  { slug:"stucco-repair",      name:"Stucco & Masonry",      icon:"Brick",    blurb:"Hairline to structural. Patched, re-textured, color-blended.", tags:["Patch","Texture","Color-match"], priceFrom:"$850", duration:"1–3 days" },
  { slug:"trim-fascia",        name:"Trim, Fascia & Eaves",  icon:"Trim",     blurb:"Fine-line cutting, rot replacement, high-build enamel.", tags:["Wood repair","Enamel","Caulking"], priceFrom:"$1,800", duration:"2–3 days" },
  { slug:"cabinet-painting",   name:"Cabinet Refinishing",   icon:"Building", blurb:"Factory-finish spray lacquer for kitchens and built-ins.", tags:["Spray booth","Conversion varnish","2-week turnaround"], priceFrom:"$3,200", duration:"7–10 days" },
  { slug:"hoa-consulting",     name:"HOA Color Consulting",  icon:"Palette",  blurb:"Pre-approved palettes + photorealistic renderings.", tags:["Renderings","Paperwork","Approvals"], priceFrom:"Free with project", duration:"48hr" },
  { slug:"cool-roof-coatings", name:"Cool-Roof Coatings",    icon:"Roof",     blurb:"Reflective elastomeric drops rooftop temps 30–50°F.", tags:["Reflective","ENERGY STAR","10-yr"], priceFrom:"$4,200", duration:"2–3 days" },
  { slug:"commercial",         name:"Commercial & Multi-Family", icon:"Building", blurb:"After-hours crews, dust control, traffic management.", tags:["After-hours","Bonded","Scheduled"], priceFrom:"Quote", duration:"Varies" },
];

const LOCATIONS = [
  { slug:"paradise-valley",  name:"Paradise Valley",  drive:"12 min", primary:true,  pop:"12,820", homes:"4,300" },
  { slug:"scottsdale",       name:"Scottsdale",       drive:"15 min", primary:true,  pop:"258k",   homes:"118k" },
  { slug:"arcadia",          name:"Arcadia",          drive:"10 min", primary:true,  pop:"14,500", homes:"5,600" },
  { slug:"biltmore",         name:"Biltmore",         drive:"8 min",  primary:true,  pop:"9,800",  homes:"3,900" },
  { slug:"central-phoenix",  name:"Central Phoenix",  drive:"12 min", primary:false, pop:"52k",    homes:"22k" },
  { slug:"north-phoenix",    name:"North Phoenix",    drive:"20 min", primary:false, pop:"68k",    homes:"28k" },
  { slug:"ahwatukee",        name:"Ahwatukee",        drive:"25 min", primary:false, pop:"78k",    homes:"32k" },
  { slug:"tempe",            name:"Tempe",            drive:"18 min", primary:false, pop:"195k",   homes:"78k" },
  { slug:"mesa",             name:"Mesa",             drive:"22 min", primary:false, pop:"504k",   homes:"198k" },
  { slug:"chandler",         name:"Chandler",         drive:"28 min", primary:false, pop:"278k",   homes:"108k" },
  { slug:"gilbert",          name:"Gilbert",          drive:"26 min", primary:false, pop:"268k",   homes:"98k" },
  { slug:"fountain-hills",   name:"Fountain Hills",   drive:"28 min", primary:false, pop:"24k",    homes:"12k" },
];

const PROJECTS = [
  { id:1, title:"1952 Ranch Repaint", service:"exterior-painting", location:"arcadia", completed:"Mar 2026", days:6,
    before:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    colors:["#d9c9a8","#4a3c30","#2b1f18"] },
  { id:2, title:"Territorial Revival", service:"exterior-painting", location:"paradise-valley", completed:"Feb 2026", days:9,
    before:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop",
    colors:["#b5651d","#e8dcc4","#1a1512"] },
  { id:3, title:"Contemporary Stucco", service:"exterior-painting", location:"scottsdale", completed:"Jan 2026", days:5,
    before:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    colors:["#f5e8d6","#c87138","#3d2d22"] },
  { id:4, title:"Spanish Colonial", service:"exterior-painting", location:"biltmore", completed:"Dec 2025", days:7,
    before:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    colors:["#ecdcc4","#8a4a2c","#2e221b"] },
  { id:5, title:"Open-Plan Interior", service:"interior-painting", location:"arcadia", completed:"Mar 2026", days:3,
    before:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop",
    colors:["#faf4ea","#8a6b52","#2b1f18"] },
  { id:6, title:"Kitchen Cabinets, White Oak", service:"cabinet-painting", location:"scottsdale", completed:"Feb 2026", days:10,
    before:"https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1556909114-44e3e9399a2f?q=80&w=1600&auto=format&fit=crop",
    colors:["#f5e8d6","#c87138","#1a1512"] },
  { id:7, title:"Master Suite Refresh", service:"interior-painting", location:"paradise-valley", completed:"Jan 2026", days:2,
    before:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop",
    colors:["#f5e8d6","#8a6b52","#241b16"] },
  { id:8, title:"Mid-Century Repaint", service:"exterior-painting", location:"central-phoenix", completed:"Nov 2025", days:5,
    before:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    colors:["#3d3028","#c87853","#e8dcc4"] },
  { id:9, title:"Commercial Office Block", service:"commercial", location:"tempe", completed:"Oct 2025", days:14,
    before:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    after:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    colors:["#faf4ea","#2d4a3e","#1a1512"] },
];

const REVIEWS_DATA = [
  { quote:"We interviewed four painters for our Paradise Valley home. Saguaro was the only crew who talked about prep before price. A year in and not one hairline crack has opened up.", name:"Elena R.", detail:"Paradise Valley · 3,800 sqft", rating:5, source:"Google", date:"Mar 2026", color:"#c87138", service:"exterior-painting", location:"paradise-valley" },
  { quote:"Our HOA palette approval was months of headache until Javier walked it through for us. They handled paperwork, did color mockups, nailed the matte finish first try.", name:"Michael T.", detail:"Scottsdale (Gainey Ranch)", rating:5, source:"Google", date:"Feb 2026", color:"#8a4a2c", service:"hoa-consulting", location:"scottsdale" },
  { quote:"Old stucco, lots of hairlines, west-facing — the worst case. They brought in an elastomeric system I'd never heard of. The west wall looks like a new build.", name:"Ann-Marie K.", detail:"Arcadia · 1958 ranch", rating:5, source:"Google", date:"Feb 2026", color:"#b5651d", service:"stucco-repair", location:"arcadia" },
  { quote:"Two full days of prep before a drop of paint. Neighbors asked who we used before we were halfway done. Worth every dollar.", name:"David & Sara L.", detail:"Biltmore · Spanish Colonial", rating:5, source:"Google", date:"Jan 2026", color:"#e07a3b", service:"exterior-painting", location:"biltmore" },
  { quote:"Third time we've used them across two homes. The 10-year warranty is real — they came back on year four for a sun-faded trim piece, no argument.", name:"Priya S.", detail:"North Scottsdale", rating:5, source:"Google", date:"Dec 2025", color:"#8a6b52", service:"exterior-painting", location:"scottsdale" },
  { quote:"We moved back into the house the same day. Dust barriers, low-VOC paint, and the bedrooms smelled like nothing. You could eat off the drop cloths.", name:"Jordan M.", detail:"Arcadia · whole-house interior", rating:5, source:"Google", date:"Mar 2026", color:"#5a6b4a", service:"interior-painting", location:"arcadia" },
  { quote:"The cabinet refinish saved us $40k versus new. Factory-grade finish. I still can't find a brush mark.", name:"Rebecca O.", detail:"Scottsdale · Kitchen", rating:5, source:"Houzz", date:"Feb 2026", color:"#c87138", service:"cabinet-painting", location:"scottsdale" },
];

const TEAM = [
  { name:"Javier Ruiz",      role:"Founder & Lead Estimator",  years:17, bio:"Third-generation painter. Started the company out of his truck in 2009.", initials:"JR", color:"#b5651d" },
  { name:"Marisol Peña",     role:"Operations Manager",         years:9,  bio:"Runs scheduling, HOA paperwork, and warranty callbacks. Your first call.", initials:"MP", color:"#8a4a2c" },
  { name:"Daniel 'Dano' Coe", role:"Crew Lead · Exteriors",      years:12, bio:"Spray-gun whisperer. Has painted every zip code from 85003 to 85259.", initials:"DC", color:"#c87138" },
  { name:"Teresa Vega",      role:"Crew Lead · Interiors",      years:8,  bio:"OCD about clean edges. Refuses to leave until trim is perfect.", initials:"TV", color:"#e07a3b" },
  { name:"Marco Fuentes",    role:"Color & HOA Consultant",     years:6,  bio:"Former architect. Renders your home in three palettes before you choose.", initials:"MF", color:"#8a6b52" },
  { name:"Kelsey Nguyen",    role:"Client Coordinator",         years:4,  bio:"The voice on the other end of (480) 555-5555. Non-negotiably cheerful.", initials:"KN", color:"#5a6b4a" },
];

const BLOG_POSTS = [
  { slug:"phoenix-exterior-paint-colors-2026", title:"The 12 Exterior Paint Colors Defining Phoenix in 2026", excerpt:"From muted desert greige to deep saguaro greens — the palettes Phoenix architects are specifying this year.", category:"Color", date:"April 12, 2026", readTime:8, author:"Marco Fuentes", featured:true,
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" },
  { slug:"stucco-hairline-cracks", title:"Hairline Cracks in Stucco: When to Worry, When to Ignore", excerpt:"A field guide to diagnosing stucco cracks in Phoenix homes, with photos of the five most common patterns.", category:"Maintenance", date:"April 3, 2026", readTime:6, author:"Javier Ruiz",
    image:"https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1600&auto=format&fit=crop" },
  { slug:"paint-fails-phoenix-sun", title:"Why Most Paint Fails in the Phoenix Sun (and How to Stop It)", excerpt:"UV, thermal cycling, and monsoon moisture. The three forces that destroy exterior paint — and the product specs that resist them.", category:"Science", date:"March 24, 2026", readTime:11, author:"Javier Ruiz",
    image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop" },
  { slug:"hoa-color-approval-guide", title:"Every Phoenix HOA Color-Approval Guide, Summarized", excerpt:"Palette restrictions for 40+ Valley HOAs — Desert Mountain to Ocotillo, Gainey Ranch to Eagle Mountain.", category:"HOA", date:"March 15, 2026", readTime:14, author:"Marco Fuentes",
    image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop" },
  { slug:"interior-vs-exterior-paint", title:"Interior vs Exterior Paint: What Actually Changes", excerpt:"Beyond the marketing — the actual resin, pigment, and additive differences between the two.", category:"Science", date:"March 2, 2026", readTime:5, author:"Teresa Vega",
    image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop" },
  { slug:"when-to-repaint-phoenix", title:"When to Repaint in Phoenix (It's Not Every 5 Years)", excerpt:"The real indicators to watch, by elevation, substrate, and neighborhood.", category:"Maintenance", date:"February 22, 2026", readTime:7, author:"Javier Ruiz",
    image:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop" },
  { slug:"cabinet-refinish-vs-replace", title:"Cabinet Refinishing vs Replacement: The $40,000 Question", excerpt:"A frank accounting of when refinishing beats replacement — and when it doesn't.", category:"Cabinets", date:"February 10, 2026", readTime:9, author:"Teresa Vega",
    image:"https://images.unsplash.com/photo-1556909114-44e3e9399a2f?q=80&w=1600&auto=format&fit=crop" },
  { slug:"cool-roof-coatings-explained", title:"Cool-Roof Coatings, Explained Without the Sales Pitch", excerpt:"What they are, what they're not, and the actual temperature numbers from our Arcadia test roof.", category:"Science", date:"January 28, 2026", readTime:10, author:"Javier Ruiz",
    image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop" },
];

const CATEGORIES = ["All","Color","Maintenance","Science","HOA","Cabinets"];

const FAQS_GLOBAL = [
  { q:"What does a full exterior repaint actually cost in Phoenix?", a:"Most single-family homes run $6,800–$14,500 depending on square footage, stucco condition, and trim complexity. HOA color renderings and our 10-year workmanship warranty are included at every tier." },
  { q:"How long does an exterior job take?", a:"A standard 2,500–3,500 sqft home is 5–7 working days. We staff one crew per home so your timeline is predictable." },
  { q:"Do you handle HOA approvals and color renderings?", a:"Yes. We're pre-familiar with palette guidelines for every major Valley HOA and generate photorealistic renderings before you commit." },
  { q:"What paint brands do you use?", a:"Sherwin-Williams Duration, Emerald Rain Refresh, and Dunn-Edwards Evershield as standard. Elastomeric upgrades for west-facing walls." },
  { q:"Do you offer a warranty?", a:"A 10-year written workmanship warranty plus manufacturer's paint warranty. We've honored warranty calls on homes painted in 2012." },
  { q:"Are you licensed, bonded, and insured?", a:"AZ ROC #287-431 (C-34), $2M general liability, $1M workers' comp, BBB A+ since 2011. Certificates emailed before walkthrough." },
  { q:"How soon can you start?", a:"On-site estimates within 2–4 business days. Current start dates are 3–5 weeks out; expedited slots are sometimes available." },
  { q:"Do you paint during monsoon season?", a:"Yes, scheduled around humidity. July–August jobs add 1–2 buffer days. We never paint on stucco above 16% moisture." },
];

const FAQS_BY_SERVICE = {
  "interior-painting": [
    { q:"How long will I be out of the house?", a:"Most single-room jobs don't require you to leave at all. Whole-house interiors are typically 2–4 days with dust barriers; you can stay in unaffected rooms." },
    { q:"Do you move furniture?", a:"Yes — we move everything under 50 lbs and cover the rest in place with dust barriers. Pianos and gun safes stay put." },
    { q:"Is the paint low-VOC?", a:"Standard. Benjamin Moore Aura and Sherwin-Williams Emerald are both zero-VOC. We specify zero-VOC by default for any occupied home." },
    { q:"Can you match a color I can't find?", a:"Yes. We scan an existing swatch or chip and match to any brand. For heirloom colors, our color consultant formulates a custom match." },
    { q:"How soon can we hang art back up?", a:"Same day for zero-VOC. 24 hours for cure. Full cure (hardest against scuffs) is 14 days." },
  ],
  "exterior-painting": [
    { q:"Do you power wash before painting?", a:"Always. 3,000-PSI wash with a mild biocide, followed by a 24-hour dry-out before any primer." },
    { q:"What happens if it rains?", a:"We monitor NOAA hour-by-hour. If we paint and it rains inside 4 hours, we re-coat at no charge. Never happened in 16 years." },
    { q:"Will you re-caulk existing gaps?", a:"Yes. Every transition — stucco-to-wood, wood-to-wood, penetrations — gets re-caulked with paintable sealant before prime." },
  ],
  "cabinet-painting": [
    { q:"Is this better than new cabinets?", a:"For solid-wood cabinets under 30 years old, almost always. We spray in a dust-free booth so the finish is factory-grade." },
    { q:"How long does my kitchen stay out of commission?", a:"7–10 days. Doors go to our shop; boxes are sprayed in place with dust barriers. You can cook on day 3." },
    { q:"What finish durability can I expect?", a:"Conversion varnish or post-cat lacquer. 10–15 years with normal kitchen wear." },
  ],
};

window.SITE = SITE;
window.SERVICES_DATA = SERVICES_DATA;
window.LOCATIONS = LOCATIONS;
window.PROJECTS = PROJECTS;
window.REVIEWS_DATA = REVIEWS_DATA;
window.TEAM = TEAM;
window.BLOG_POSTS = BLOG_POSTS;
window.CATEGORIES = CATEGORIES;
window.FAQS_GLOBAL = FAQS_GLOBAL;
window.FAQS_BY_SERVICE = FAQS_BY_SERVICE;
