(function(){
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var topbar = document.getElementById('topbar');
  var clock = document.getElementById('clock-date');
  if(clock){ clock.textContent = new Date().toLocaleDateString('en-IN', { year:'numeric', month:'short', day:'2-digit' }); }
  function onScroll(){ if(window.scrollY > 40){ topbar.classList.add('scrolled'); } else { topbar.classList.remove('scrolled'); } }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var counters = new Map();
  document.querySelectorAll('[data-reveal]').forEach(function(el){
    var key = el.parentElement;
    var n = counters.get(key) || 0;
    el.style.setProperty('--delay', Math.min(n * 60, 360) + 'ms');
    counters.set(key, n + 1);
  });

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -6% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function(el){ el.classList.add('is-visible'); });
  }

  if(!reduced){
    var pEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    var ticking = false;
    function updateParallax(){
      var y = window.scrollY;
      pEls.forEach(function(el){
        var factor = parseFloat(el.getAttribute('data-parallax')) || 0.1;
        el.style.transform = 'translateY(' + (y * factor) + 'px)';
      });
      ticking = false;
    }
    document.addEventListener('scroll', function(){
      if(!ticking){ window.requestAnimationFrame(updateParallax); ticking = true; }
    }, { passive:true });
    updateParallax();
  }
})();
