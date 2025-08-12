// header-autoload.js — injects /partials/header.html onto any page and wires basic behavior
(async function(){
  try{
    const res = await fetch('/partials/header.html', {cache:'no-cache'});
    if(!res.ok) throw new Error('Header partial not found');
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const header = doc.body.firstElementChild;

    let mount = document.querySelector('header.site-header') || document.getElementById('site-header');
    if(mount){
      mount.replaceWith(header);
    }else{
      document.body.insertAdjacentElement('afterbegin', header);
    }

    // Mobile toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        const shown = nav.style.display === 'block';
        nav.style.display = shown ? 'none' : 'block';
      });
    }

    // Active link highlight
    const here = location.pathname.replace(/\/$/,'') || '/';
    document.querySelectorAll('.nav a').forEach(a=>{
      const path = new URL(a.getAttribute('href'), location.origin).pathname.replace(/\/$/,'') || '/';
      if(path===here){ a.classList.add('active'); }
    });
  }catch(e){
    console.error('Header autoload failed:', e);
  }
})();