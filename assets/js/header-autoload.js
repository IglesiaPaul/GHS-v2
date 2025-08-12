// header-autoload.js — drop this on any page to replace its header with /partials/header.html
(function(){
  function replaceHeader(html){
    var tmp = document.createElement('div'); tmp.innerHTML = html.trim();
    var newHeader = tmp.firstElementChild;
    var oldHeader = document.querySelector('header.site-header') || document.getElementById('site-header');
    if(oldHeader){
      oldHeader.replaceWith(newHeader);
      // also bring over the inline script that came with the header
      var scripts = tmp.querySelectorAll('script');
      scripts.forEach(function(s){
        var tag = document.createElement('script');
        if(s.src){ tag.src = s.src; } else { tag.textContent = s.textContent; }
        document.body.appendChild(tag);
      });
    } else {
      // if no header found, insert at top of body
      document.body.insertAdjacentHTML('afterbegin', html);
    }
  }

  fetch('/partials/header.html', {cache:'no-store'}).then(function(r){
    if(!r.ok) throw new Error('Header not found');
    return r.text();
  }).then(replaceHeader).catch(function(err){
    console.warn('Header autoload failed:', err.message);
  });
})();
