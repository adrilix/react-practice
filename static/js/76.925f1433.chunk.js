"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[76],{76:function(n,r,c){c.r(r),c.d(r,{default:function(){return u}});var e=c(791),i=c(521),t=c(329),a=function(n){var r=n.car,c=n.handleLearnMoreClick,e=r.img,i=r.make,a=r.model,o=r.year,s=r.rentalPrice,l=r.address,d=r.rentalCompany,u=r.description,h=r.type,x=r.id,j=r.accessories;return(0,t.jsxs)("div",{width:275,children:[(0,t.jsx)("img",{alt:"".concat(i," ").concat(a," ").concat(h),src:e,width:274}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("b",{children:[i,(0,t.jsx)("span",{children:a}),o]}),(0,t.jsx)("b",{children:s})]}),(0,t.jsx)("div",{children:"".concat(l,"|").concat(d,"|").concat(function(n){return n.includes("lux")||n.includes("premium")?"Premium":""}(u))}),(0,t.jsx)("div",{children:"".concat(h,"|").concat(i,"|").concat(x,"|").concat(j[1])}),(0,t.jsx)("button",{type:"button",onClick:c,children:"Learn more"})]})},o=function(n){var r=n.cars,c=n.loading,e=n.handleLearnMoreClick;return c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:"loading..."}),(0,t.jsx)(i.c,{})]}):(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:r.map((function(n){return(0,t.jsx)(a,{car:n,handleLearnMoreClick:e},n.id)}))})})},s=c(434),l=c(96),d=c(437),u=function(){var n=(0,s.I0)(),r=(0,s.v9)((function(n){return n.cars.loading})),c=(0,s.v9)((function(n){return n.cars.cars})),i=(0,s.v9)((function(n){return n.cars.currentPage})),a=(0,s.v9)((function(n){return n.cars.perPage}));(0,e.useEffect)((function(){n((0,l.t)())}),[n]);var u=a*i,h=c.slice(0,u);console.log("currentCarsOnPage: ",h);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)(o,{cars:h,loading:r,handleLearnMoreClick:function(){console.log("click \u0434\u043b\u044f \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u044f \u043c\u043e\u0434\u0430\u043b\u043a\u0438")}})}),c.length>h.length?(0,t.jsx)("button",{type:"button",onClick:function(){n((0,d.fz)(i+1)),console.log("load more")},children:"Load more"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{disabled:!0,children:"Load more"}),(0,t.jsx)("p",{children:"this is all cars to review"})]})]})}}}]);
//# sourceMappingURL=76.925f1433.chunk.js.map