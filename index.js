import{a as d,i as n}from"./assets/vendor-CSuC_abi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function u(s){const r={params:{key:"48866244-bc210103fc5496976cb537971",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}},o=`https://pixabay.com/api/?key=${r.params.key}&q=${r.params.q}&image_type=${r.params.image_type}&orientation=${r.params.orientation}&safesearch=${r.params.safesearch}`;return d.get(o)}function m(s,r){const o=document.querySelector(r);o.innerHTML="";const a=s.map(e=>`<li class="gallery-item">
        <a class='gallery-link' href="${e.largeImageURL}">
          <img class="li-img" src="${e.webformatURL}" alt="${e.tags}" />
          <div class="li-text">
            <table class="table">
              <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</td></tr>
              <tr><td>${e.likes}</td><td>${e.views}</td><td>${e.comments}</td><td>${e.downloads}</td></tr>
            </table>
          </div>
        </a>
      </li>`).join("");o.insertAdjacentHTML("afterbegin",a);const t=new SimpleLightbox(r+" a",{captionsData:"alt",captionDelay:250,close:!0});t.refresh(),o.addEventListener("click",e=>{e.target.tagName==="IMG"&&t.close()})}const c=document.querySelector("#search-form"),f=document.querySelector("#search-input");document.querySelector(".wait-msg");const l=document.querySelector("#loading-message");c.addEventListener("submit",p);function p(s){s.preventDefault();const r=f.value.trim();if(!r){n.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"}),c.reset();return}l.style.display="block",u(r).then(o=>{l.style.display="none",o.data.hits.length===0?n.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:""}):m(o.data.hits,".gallery")}).catch(o=>{l.style.display="none",n.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again"}),console.log(o)}),c.reset()}
//# sourceMappingURL=index.js.map
