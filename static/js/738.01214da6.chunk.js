"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[738],{738:function(n,e,r){r.r(e);var t=r(791),o=r(377),c=r(434),i=r(96),a=r(437),l=r(329);e.default=function(){var n=(0,c.I0)(),e=(0,c.v9)((function(n){return n.cars.formData})),r=(0,c.v9)((function(n){return n.cars.loading})),s=(0,c.v9)((function(n){return n.cars.cars})),d=(0,c.v9)((function(n){return n.cars.filteredCars})),u=(0,c.v9)((function(n){return n.cars.currentPage})),h=(0,c.v9)((function(n){return n.cars.perPage})),v=(0,c.v9)((function(n){return n.cars.favorite})).reduce((function(n,e){return n.push(e.id),n}),[]);(0,t.useEffect)((function(){s&&s.length>0||n((0,i.t)())}),[s,n]);var f=h*u,x=s.slice(0,f),j=d.slice(0,f);console.log("currentCarsOnPage: ",x);var g=function(){n((0,a.fz)(u+1)),console.log("load more DOWN")},m=function(e){console.log("car: ",e),n((0,a.u5)(e)),console.log("add to favorite",e)},p=function(e){console.log("id this car on: ",e),n((0,a.v5)(e)),console.log("remove on favorite",e)},b=function(){console.log("click open modal")};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:0===d.length&&""===e?(0,l.jsx)(o.Z,{cars:x,loading:r,handleLearnMoreClick:b,handleFavorite:m,handleRemoveFavorite:p,favoriteIds:v}):(0,l.jsx)(o.Z,{cars:j,loading:r,handleLearnMoreClick:b,handleFavorite:m,handleRemoveOnFavorite:p,favoriteIds:v})}),0===d.length&&""===e?s.length>x.length?(0,l.jsx)("button",{type:"button",onClick:g,children:"Load more"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{disabled:!0,children:"Load more"}),(0,l.jsx)("p",{children:"this is all cars to review"})]}):d.length>x.length?(0,l.jsx)("button",{type:"button",onClick:g,children:"Load more"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{disabled:!0,children:"Load more"}),(0,l.jsx)("p",{children:"this is all cars to review"})]})]})}},377:function(n,e,r){r.d(e,{Z:function(){return i}});r(791);var t=r(521),o=r(329),c=function(n){var e=n.car,r=n.handleLearnMoreClick,t=n.handleFavorite,c=n.favoriteIds,i=n.handleRemoveFavorite,a=e.img,l=e.make,s=e.model,d=e.year,u=e.rentalPrice,h=e.address,v=e.rentalCompany,f=e.description,x=e.type,j=e.id,g=e.accessories;return(0,o.jsxs)("div",{width:275,children:[c.includes(e.id)?(0,o.jsx)("button",{type:"button",onClick:function(){return i(e.id)},children:"\u043f\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u0437 \u043e\u0431\u0440\u0430\u043d\u0438\u0445"}):(0,o.jsx)("button",{type:"button",onClick:function(){return t(e)},children:"\u0434\u043e \u043e\u0431\u0440\u0430\u043d\u0438\u0445"}),(0,o.jsx)("img",{alt:"".concat(l," ").concat(s," ").concat(x),src:a,width:274}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("b",{children:[l,(0,o.jsx)("span",{children:s}),d]}),(0,o.jsx)("b",{children:u})]}),(0,o.jsx)("div",{children:"".concat(h,"|").concat(v,"|").concat(function(n){return n.includes("lux")||n.includes("premium")?"Premium":""}(f))}),(0,o.jsx)("div",{children:"".concat(x,"|").concat(l,"|").concat(j,"|").concat(g[1])}),(0,o.jsx)("button",{type:"button",onClick:r,children:"Learn more"})]})},i=function(n){var e=n.cars,r=n.loading,i=n.handleLearnMoreClick,a=n.handleFavorite,l=n.favoriteIds,s=n.handleRemoveFavorite;return r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"loading..."}),(0,o.jsx)(t.c,{})]}):(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:e.map((function(n){return(0,o.jsx)(c,{car:n,handleLearnMoreClick:i,handleFavorite:a,favoriteIds:l,handleRemoveFavorite:s},n.id)}))})})}}}]);
//# sourceMappingURL=738.01214da6.chunk.js.map