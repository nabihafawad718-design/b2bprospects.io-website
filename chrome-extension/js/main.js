const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
if(toggle&&nav){
  toggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded",open?"true":"false");
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const id=a.getAttribute("href");
  if(id.length>1){
    const el=document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:"smooth",block:"start"});
    }
  }
}));

// Published Chrome Web Store listing: send CTA buttons directly to the live extension.
const CHROME_STORE_URL="https://chromewebstore.google.com/detail/mnpdkbcgcdhegdmcjgfeiidcdmdfjkcg";
document.querySelectorAll('a.btn[href="/chrome-extension/"], a.nav-cta[href="/chrome-extension/"]').forEach(a=>{
  a.href=CHROME_STORE_URL;
  a.target="_blank";
  a.rel="noopener noreferrer";
});
