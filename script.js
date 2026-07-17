const qs=(s,scope=document)=>scope.querySelector(s);const qsa=(s,scope=document)=>[...scope.querySelectorAll(s)];
qs('#year').textContent=new Date().getFullYear();
const roles=['SwiftUI craftsman','Architecture modernizer','Performance optimizer','Team leader','AI-assisted engineer'];let roleIndex=0;setInterval(()=>{roleIndex=(roleIndex+1)%roles.length;const el=qs('.role-rotator');el.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-8px)'},{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:520,easing:'ease'});setTimeout(()=>el.textContent=roles[roleIndex],260)},2800);
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.14});qsa('.reveal').forEach(el=>revealObserver.observe(el));
const countObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const target=+el.dataset.count;const suffix=el.dataset.suffix||'+';let start=0;const duration=1300;const t0=performance.now();function tick(t){const p=Math.min((t-t0)/duration,1);const eased=1-Math.pow(1-p,3);el.textContent=Math.round(start+(target-start)*eased)+(target===6?'+':suffix);if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);countObserver.unobserve(el)}),{threshold:.7});qsa('[data-count]').forEach(el=>countObserver.observe(el));
const glow=qs('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
qsa('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*5}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='perspective(900px) rotateX(0) rotateY(0)')});
qsa('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});el.addEventListener('pointerleave',()=>el.style.transform='translate(0,0)')});
window.addEventListener('scroll',()=>{const y=window.scrollY;qs('.orb-one').style.transform=`translateY(${y*.08}px)`;qs('.orb-two').style.transform=`translateY(${-y*.05}px)`},{passive:true});


// Persistent light/dark theme toggle.
const themeToggle = qs('#theme-toggle');
const themeMeta = qs('meta[name="theme-color"]');

function applyTheme(theme, persist = true) {
  const next = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  if (persist) localStorage.setItem('portfolio-theme', next);

  if (themeToggle) {
    const isLight = next === 'light';
    themeToggle.setAttribute('aria-checked', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    themeToggle.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  }
  if (themeMeta) themeMeta.setAttribute('content', next === 'light' ? '#f4f8f7' : '#030b0a');
}

const initialTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
applyTheme(initialTheme, false);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
