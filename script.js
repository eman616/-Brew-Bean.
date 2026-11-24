const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');toggle.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.querySelectorAll('.gallery-card,.menu-card').forEach(card=>{card.addEventListener('mousemove',e=>{if(window.innerWidth<700)return;const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(800px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});
// Gentle reveal as sections enter the viewport.
document.querySelectorAll('.feature,.gallery-card,.menu-card,.visit-card,.coffee-feature-photo,.coffee-feature-copy').forEach(el=>el.classList.add('reveal'));
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
