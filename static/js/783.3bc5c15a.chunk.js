"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[783],{783:function(n,e,r){r.r(e);var t=r(377),i=r(791),o=r(434),c=r(437),a=r(96),l=r(329);e.default=function(){var n=(0,o.I0)(),e=(0,o.v9)((function(n){return n.cars.formData})),r=(0,o.v9)((function(n){return n.cars.loading})),s=(0,o.v9)((function(n){return n.cars.favorite})),d=(0,o.v9)((function(n){return n.cars.filteredCars})),u=(0,o.v9)((function(n){return n.cars.currentPage})),h=(0,o.v9)((function(n){return n.cars.perPage}));(0,i.useEffect)((function(){n((0,a.t)())}),[n]);var v=h*u,f=s.slice(0,v),x=d.slice(0,v),j=function(){n((0,c.fz)(u+1)),console.log("load more now")},m=function(e){n((0,c.u5)(e)),console.log("add to favorite carlist",e)},g=function(e){console.log("id: ",e),n((0,c.v5)(e)),console.log("remove on favorite list",e)},b=function(){console.log("click \u0434\u043b\u044f \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u044f \u043c\u043e\u0434\u0430\u043b\u043a\u0438")},p=s.reduce((function(n,e){return n.push(e.id),n}),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:0===d.length&&""===e?(0,l.jsx)(t.Z,{cars:f,loading:r,handleLearnMoreClick:b,handleFavorite:m,handleRemoveFavorite:g,favoriteIds:p}):(0,l.jsx)(t.Z,{cars:x,loading:r,handleLearnMoreClick:b,handleFavorite:m,handleRemoveFavorite:g,favoriteIds:p})}),0===d.length&&""===e?s.length>f.length?(0,l.jsx)("button",{type:"button",onClick:j,children:"Load more"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{disabled:!0,children:"Load more"}),(0,l.jsx)("p",{children:"this is all cars to review"})]}):d.length>f.length?(0,l.jsx)("button",{type:"button",onClick:j,children:"Load more"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{disabled:!0,children:"Load more"}),(0,l.jsx)("p",{children:"this is all cars to review"})]})]})}},377:function(n,e,r){r.d(e,{Z:function(){return c}});r(791);var t=r(521),i=r(329),o=function(n){var e=n.car,r=n.handleLearnMoreClick,t=n.handleFavorite,o=n.favoriteIds,c=n.handleRemoveFavorite,a=e.img,l=e.make,s=e.model,d=e.year,u=e.rentalPrice,h=e.address,v=e.rentalCompany,f=e.description,x=e.type,j=e.id,m=e.accessories;return(0,i.jsxs)("div",{width:275,children:[o.includes(e.id)?(0,i.jsx)("button",{type:"button",onClick:function(){return c(e.id)},children:"\u043f\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u0437 \u043e\u0431\u0440\u0430\u043d\u0438\u0445"}):(0,i.jsx)("button",{type:"button",onClick:function(){return t(e)},children:"\u0434\u043e \u043e\u0431\u0440\u0430\u043d\u0438\u0445"}),(0,i.jsx)("img",{alt:"".concat(l," ").concat(s," ").concat(x),src:a,width:274}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("b",{children:[l,(0,i.jsx)("span",{children:s}),d]}),(0,i.jsx)("b",{children:u})]}),(0,i.jsx)("div",{children:"".concat(h,"|").concat(v,"|").concat(function(n){return n.includes("lux")||n.includes("premium")?"Premium":""}(f))}),(0,i.jsx)("div",{children:"".concat(x,"|").concat(l,"|").concat(j,"|").concat(m[1])}),(0,i.jsx)("button",{type:"button",onClick:r,children:"Learn more"})]})},c=function(n){var e=n.cars,r=n.loading,c=n.handleLearnMoreClick,a=n.handleFavorite,l=n.favoriteIds,s=n.handleRemoveFavorite;return r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"loading..."}),(0,i.jsx)(t.c,{})]}):(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:e.map((function(n){return(0,i.jsx)(o,{car:n,handleLearnMoreClick:c,handleFavorite:a,favoriteIds:l,handleRemoveFavorite:s},n.id)}))})})}}}]);
//# sourceMappingURL=783.3bc5c15a.chunk.js.map