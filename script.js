/* ---------- Firefly particles ---------- */
const ffWrap = document.getElementById('fireflies');
for(let i=0;i<22;i++){
  const f = document.createElement('div');
  f.className='firefly';
  f.style.left = Math.random()*100+'vw';
  f.style.top = Math.random()*100+'vh';
  f.style.animationDelay = (Math.random()*8)+'s';
  f.style.animationDuration = (6+Math.random()*6)+'s';
  ffWrap.appendChild(f);
}

/* ---------- Map pins (drawn along the trail path) ---------- */
const pinsData = [
  {id:'about', n:1, label:'ABOUT', note:'Bio & journey note', x:60, y:40},
  {id:'education', n:2, label:'EDUCATION', note:'Academic milestones', x:340, y:150},
  {id:'certifications', n:3, label:'CERTIFICATES', note:'Verified skill growth', x:600, y:160},
  {id:'cv', n:4, label:'RESUME', note:'Career summary', x:340, y:300},
  {id:'projects', n:5, label:'PROJECTS', note:'Live web showcases', x:90, y:360},
  {id:'experience', n:6, label:'EXPERIENCE', note:'Roles & impact', x:460, y:410},
  {id:'skills', n:7, label:'SKILLS', note:'Tools & strengths', x:840, y:420},
];
const pinsGroup = document.getElementById('pinsGroup');
pinsData.forEach(p=>{
  const g = document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('class','map-pin');
  g.setAttribute('data-target', p.id);
  g.innerHTML = `
    <circle class="pin-glow" cx="${p.x}" cy="${p.y}" r="22"></circle>
    <circle class="pin-outer" cx="${p.x}" cy="${p.y}" r="15"></circle>
    <text x="${p.x}" y="${p.y+5}">${p.n}</text>
    <text class="pin-label" x="${p.x}" y="${p.y+32}">${p.label}</text>
    <text class="pin-note" x="${p.x}" y="${p.y+46}">${p.note}</text>
  `;
  g.addEventListener('click', ()=>{
    document.getElementById(p.id).scrollIntoView({behavior:'smooth'});
  });
  pinsGroup.appendChild(g);
});

/* ---------- Scrollspy: highlight pin + nav + reveal vines ---------- */
const sections = document.querySelectorAll('.clearing');
const navLinks = document.querySelectorAll('#navLinks .nav-link');
const mapPins = document.querySelectorAll('.map-pin');
const visited = new Set();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = entry.target.id;
    if(entry.isIntersecting){
      mapPins.forEach(p=>p.classList.toggle('active', p.dataset.target===id));
      navLinks.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+id));
      visited.add(id);
      mapPins.forEach(p=>{ if(visited.has(p.dataset.target)) p.classList.add('visited'); });
      if(id==='skills'){
        document.querySelectorAll('.vine-fill').forEach(v=>{ v.style.width = v.dataset.w+'%'; });
      }
    }
  });
},{threshold:0.35});
sections.forEach(s=>observer.observe(s));

/* ---------- Projects data + cards + modal ---------- */
const projects = [
  {
    title:'Vedic Astrology Consultation Platform',
    dates:'Feb 2026 – Mar 2026',
    summary:'A responsive web platform for astrology and Vastu consultancy services.',
    image:'./vedic astro.png',
    url:'https://vedic-astro-ruby.vercel.app/',
    details:[
      'Developed a responsive web platform for astrology and Vastu consultancy services using HTML5, CSS3, JavaScript, and Bootstrap.',
      'Implemented service listings, tiered pricing plans, client testimonials, product catalog, and course modules.'
    ],
    stack:['HTML5','CSS3','JavaScript','Bootstrap']
  },
  {
    title:'EKlorix — EdTech &amp; Career Consultancy Platform',
    dates:'Dec 2025 – Feb 2026',
    summary:'An EdTech platform integrating career development services.',
    image:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    url:'https://1234hars.github.io/edutech/index.html',
    details:[
      'Built an EdTech platform integrating career development services with HTML5, CSS3, JavaScript, and Bootstrap.',
      'Designed an AI-powered resume builder, job matching engine, and career assessment modules to improve user engagement.'
    ],
    stack:['HTML5','CSS3','JavaScript','Bootstrap','AI Resume Builder']
  },
  {
    title:'LPU EVS — E-Rickshaw Booking Platform',
    dates:'Aug 2024 – Nov 2024',
    summary:'A full-stack e-rickshaw booking platform with real-time seat tracking.',
    image:'./Screenshot 2026-07-29 104426.png',
    url:'https://1234hars.github.io/LPU-Ride-campus/',
    details:[
      'Developed a full-stack e-rickshaw booking platform with real-time seat availability tracking.',
      'Implemented backend logic and database using PHP, MySQL, and XAMPP, with a responsive frontend built in HTML5, CSS3, Bootstrap, and JavaScript.'
    ],
    stack:['PHP','MySQL','XAMPP','HTML5','CSS3','Bootstrap','JavaScript']
  },
  {
    title:'OCR-to-Document Converter',
    dates:'Jan 2023 – Mar 2023',
    summary:'A text-to-handwriting converter with custom fonts and QR sharing.',
    image:'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    details:[
      'Built a text-to-handwriting converter with custom font rendering and QR code sharing using Python, OpenCV, and Pillow.',
      'Developed the user interface with JavaScript and Bootstrap for an end-to-end document conversion workflow.'
    ],
    stack:['Python','OpenCV','Pillow','JavaScript','Bootstrap']
  },
  {
    title:'Home Interior Design Website',
    dates:'Jan 2022 – Feb 2023',
    summary:'A booking platform for customized room and office interior design services.',
    image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    url:'https://1234hars.github.io/Hari-Homes-Decor/',
    details:[
      'Developed a booking platform for customized room and office interior design services using HTML, CSS, JavaScript, and Bootstrap.',
      'Enabled direct communication workflows between clients and design teams.'
    ],
    stack:['HTML','CSS','JavaScript','Bootstrap']
  }
  ,{
    title:'STING — Energy Drink Demo Website',
    dates:'Jul 2026',
    summary:'A promotional demo website for STING energy drink featuring product pages, responsive hero, and purchase CTAs.',
    image:'./Screenshot 2026-07-29 125238.png',
    imgPosition:'center right',
    url:'https://1234hars.github.io/STING-energy-drink-demo-web/',
    details:[
      'Designed a promotional demo site for STING energy drink with an emphasis on hero visuals, flavor pages and clear CTAs.',
      'Implemented mobile-first responsive layouts and lightweight animations using HTML5, CSS3 and vanilla JavaScript.'
    ],
    stack:['HTML5','CSS3','JavaScript','Responsive Design']  },
  {
    title:'chai pi lo — goodness in every sip',
    dates:'Jul 2026',
    summary:'A brand launch landing page for chai pi lo, highlighting six signature blends and immersive storytelling.',
    image:'./Screenshot 2026-08-01 024344.png',
    url:'https://1234hars.github.io/chai-pi-lo/#story',
    details:[
      'Built a polished landing experience for chai pi lo with bold imagery, flavor cards, and Hindi-English branding cues.',
      'Added a clear “Tap to view” CTA and direct navigation link to the full story section for user discovery.'
    ],
    stack:['HTML5','CSS3','JavaScript','Responsive Design','Brand Story']  }
];

const grid = document.getElementById('projectGrid');
projects.forEach((p, idx)=>{
  const col = document.createElement('div');
  col.className='col-md-6 col-lg-4';
  col.innerHTML = `
    <div class="project-card" data-idx="${idx}">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" style="${p.imgPosition ? 'object-position:'+p.imgPosition+';' : ''}">
        ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="tap-hint">Tap to view</a>` : `<span class="tap-hint">Tap to view</span>`}
      </div>
      <div class="card-body-inner">
        <h4>${p.title}</h4>
        <div class="dates">${p.dates}</div>
        <p>${p.summary}</p>
        <div class="stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
      </div>
    </div>`;
  grid.appendChild(col);
});

const modalEl = document.getElementById('projectModal');
const modal = new bootstrap.Modal(modalEl);
document.getElementById('projectGrid').addEventListener('click', (e)=>{
  const card = e.target.closest('.project-card');
  if(!card) return;
  const p = projects[card.dataset.idx];
  document.getElementById('modalTitle').innerHTML = p.title;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-thumb">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
    </div>
    <div class="label-font mb-3" style="color:var(--trail-gold-soft);">${p.dates}</div>
    <ul>${p.details.map(d=>`<li class="mb-2">${d}</li>`).join('')}</ul>
    ${p.url ? `<div class="mb-3"><a href="${p.url}" target="_blank" rel="noopener" class="btn btn-outline-gold">Visit Live Project</a></div>` : ''}
    <div class="stack mt-3">${p.stack.map(s=>`<span>${s}</span>`).join(' ')}</div>
  `;
  modal.show();
});
