!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o={male:{avatar:n.p+"assets/image-john.5253a557aa7d00d8466fa35893d925e9.jpg",caption:"“If you want to lay the best foundation possible I’d recommend taking this course. \n    The depth the instructors go into is incredible. I now feel so confident about \n    starting up as a professional developer.”",name:"John Tarkpor",position:"Junior Front-end Developer"},famale:{avatar:n.p+"assets/image-tanya.f54c06576a4cdc26109973453bed5c3d.jpg",caption:"“I’ve been interested in coding for a while but never taken the jump, until now. \n    I couldn’t recommend this course enough. I’m now in the job of my dreams and so \n    excited about the future.”",name:"Tanya Sinclair",position:"UX Engineer"}},r=document.getElementById("nextButton"),a=document.getElementById("prevButton"),i=document.getElementById("clientImg"),u=document.getElementById("captionText"),c=document.getElementById("name"),l=document.getElementById("position");r.onclick=function(){i.setAttribute("src",o.male.avatar),u.innerText=o.male.caption,c.innerText=o.male.name,l.innerText=o.male.position},a.onclick=function(){i.setAttribute("src",o.famale.avatar),u.innerText=o.famale.caption,c.innerText=o.famale.name,l.innerText=o.famale.position}}]);