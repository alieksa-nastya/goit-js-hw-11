import{i,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();function l(n){let{hits:t}=n;const o=document.querySelector(".gallery");if(t.length===0){i.show({messageColor:"#fafafb",messageSize:"16px",backgroundColor:"background: #ef4040",transitionIn:"bounceInLeft",position:"topRight",closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please try again!"}),o.innerHTML="";return}const s=t.map(e=>` <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
            <div class="gallery-div">
                <p>Likes</p>
                <p>Views</p>
                <p>Comment</p>
                <p>Downloads</p>
                <span>${e.likes}</span>
                <span>${e.views}</span>
                <span>${e.comments}</span>
                <span>${e.downloads}</span>
            </div>
        </a>
    </li>`).join(" ");o.innerHTML=s,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const u="49077241-9df32fcc53d001f958141ccb6";function p(n){const t=document.querySelector(".gallery"),o=encodeURIComponent(n),r=`https://pixabay.com/api/?${new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>l(e)).catch(e=>{console.error(e),t.innerHTML="",i.show({messageColor:"#fafafb",messageSize:"16px",backgroundColor:"background: #ef4040",transitionIn:"bounceInLeft",position:"topRight",closeOnClick:!0,message:"Sorry, an error happened. Try again"})})}document.querySelector(".input-list").addEventListener("submit",n=>{const t=document.querySelector(".input").value.trim(),o=document.querySelector(".gallery");if(n.preventDefault(),!t){i.show({messageColor:"#fafafb",messageSize:"16px",backgroundColor:"background: #ef4040",transitionIn:"bounceInLeft",position:"topRight",closeOnClick:!0,message:"Please enter the search query"});return}o.innerHTML='<p>Wait, the image is loaded</p><span class = "loader"></span>',p(t)});
//# sourceMappingURL=index.js.map
