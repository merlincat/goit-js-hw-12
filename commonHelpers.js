import{S as w,i as n,a as g}from"./assets/vendor-bad0427b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))y(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&y(h)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function y(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const S=document.querySelector(".search-form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),a=document.querySelector(".js-load-more"),f=new w(".gallery-link",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0,scrollZoom:!1,fadeSpeed:400}),p=()=>{u.style.display="block",u.style.visibility="visible"},m=()=>{u.style.display="none",u.style.visibility="hidden"},M=()=>{const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})},v=s=>s.reduce((e,t)=>e+`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="descr-container">
  <div class="image-descr">Likes
  <span class="image-descr-value">${t.likes}</span>
  </div>
    <div class="image-descr">Views
  <span class="image-descr-value">${t.views}</span>
  </div>
      <div class="image-descr">Comments
  <span class="image-descr-value">${t.comments}</span>
  </div>
        <div class="image-descr">Downloads
  <span class="image-descr-value">${t.downloads}</span>
  </div>
  </div>
</li>`,"");let d=null,i=1;const l=40,L=(s,e,t)=>(g.defaults.baseURL="https://pixabay.com/api",g.get("/?key=41675513-91cb25c2d4155284de80d9ebe",{params:{q:s,page:e,per_page:t,orientation:"horizontal",safesearch:!0}})),q=async s=>{if(s.preventDefault(),a.classList.add("is-hidden"),c.innerHTML="",p(),i=1,d=s.target.elements.search.value.trim(),!d)return m(),a.classList.add("is-hidden"),n.warning({position:"topRight",message:"Empty query"});try{const{data:{hits:e,totalHits:t}}=await L(d,i,l);if(e.length===0)return c.innerHTML="",a.classList.add("is-hidden"),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});n.success({position:"topRight",message:`"Hooray! We found ${t} images. It should be ${Math.ceil(t/l)} pages"`}),c.innerHTML=v(e),f.refresh(),b(Math.ceil(t/l),i)}catch(e){console.log(e)}finally{m()}},b=(s,e)=>{e<s?a.classList.remove("is-hidden"):(a.classList.add("is-hidden"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))},$=async()=>{i+=1,a.classList.add("is-hidden"),p();try{const{data:{hits:s,totalHits:e}}=await L(d,i,l);c.insertAdjacentHTML("beforeend",v(s)),f.refresh(),M(),b(Math.ceil(e/l),i)}catch(s){console.log(s)}finally{m()}};S.addEventListener("submit",q);a.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
