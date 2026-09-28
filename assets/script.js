document.documentElement.classList.add('js');
(function(){
  function classifyViewport(){
    var w=Math.min(window.innerWidth||9999,document.documentElement.clientWidth||9999);
    document.documentElement.classList.toggle('phone-layout',w<700);
    document.documentElement.classList.toggle('compact-layout',w>=700&&w<900);
  }
  classifyViewport();
  window.addEventListener('resize',classifyViewport,{passive:true});
  window.addEventListener('orientationchange',classifyViewport,{passive:true});
  document.addEventListener('DOMContentLoaded',function(){
    classifyViewport();
    var b=document.querySelector('.menu-toggle'),n=document.getElementById('site-nav');
    if(b&&n){b.addEventListener('click',function(){var open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));n.classList.toggle('open',!open);});}
  });
})();