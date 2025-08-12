// site.js — minimal progressive enhancement
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const shown = nav.style.display === 'block';
      nav.style.display = shown ? 'none' : 'block';
    });
  }
  // Active link highlighting
  const here = location.pathname.replace(/\/$/,'') || '/';
  document.querySelectorAll('.nav a').forEach(a=>{
    const path = new URL(a.getAttribute('href'), location.origin).pathname.replace(/\/$/,'') || '/';
    if(path===here){ a.classList.add('active'); }
  });
})();