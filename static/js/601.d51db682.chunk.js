"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[601],{310:function(n,e,r){r.d(e,{E:function(){return u}});var t=r(439),i=r(791),c=r(434),a=r(765),o=r(68),s=r(184),u=function(n){var e=n.car,r=e.img,u=e.make,l=e.rentalPrice,d=e.address,h=e.rentalCompany,f=e.type,x=e.model,j=e.year,v=e.mileage,m=e.functionalities,p=(0,c.I0)(),g=(0,c.v9)(o.Tc).favorites,b=(0,i.useState)(g.some((function(n){return n.id===e.id}))),k=(0,t.Z)(b,2),M=k[0],C=k[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:M?function(){p((0,a.zm)(e)),C(!1)}:function(){p((0,a.Lo)(e)),C(!0)},type:"button",children:M?"Remove from favorites":"Add to favorites"}),(0,s.jsx)("img",{src:r,alt:u}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"".concat(u," ").concat(x,", ").concat(j)}),(0,s.jsx)("span",{children:l}),(0,s.jsx)("p",{children:d}),(0,s.jsx)("p",{children:h}),(0,s.jsx)("p",{children:f}),(0,s.jsx)("p",{children:x}),(0,s.jsx)("p",{children:v}),(0,s.jsx)("p",{children:m[0]})]})]})}},601:function(n,e,r){r.r(e),r.d(e,{CatalogPage:function(){return v},default:function(){return m}});var t=r(310),i=r(434),c=r(68),a=r(184),o=function(){var n=(0,i.v9)(c.Wz);return(0,a.jsx)(a.Fragment,{children:n.length>0&&(0,a.jsx)("ul",{children:n.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)(t.E,{car:n})},n.id)}))})})},s=r(65),u=r(565),l=function(){var n=(0,i.v9)(c.B$).currentPage,e=(0,i.I0)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{type:"button",onClick:function(){var r=n+1;e((0,u.D)(r)),e((0,s.c)({page:r}))},children:"Load more"})})},d=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]'),h=r(705),f=function(){var n=(0,i.I0)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(h.J9,{initialValues:{selectedMark:"Enter some text"},onSubmit:function(e,r){var t=e.selectedMark;"Enter some text"!==t&&(n((0,s.c)({value:t})),r.resetForm())},children:function(n){var e=n.values;return(0,a.jsxs)(h.l0,{children:[(0,a.jsxs)("label",{children:["Car brand",(0,a.jsxs)(h.gN,{name:"selectedMark",as:"select",children:[(0,a.jsx)("option",{value:"Enter some text"===e.selectedMark,children:"Enter some text"}),d.map((function(n){return(0,a.jsx)("option",{value:n,children:n},n)}))]})]}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})}})})},x=r(294),j=r(791),v=function(){var n=(0,i.I0)(),e=(0,i.v9)(c.Wz),r=(0,i.v9)(c.NH),t=(0,i.v9)(c.zh),u=(0,i.v9)(c.B$).currentPage;return(0,j.useEffect)((function(){n((0,s.c)({page:1}))}),[n]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(x.$,{children:[r&&!t&&(0,a.jsx)("p",{children:"Loading..."}),(0,a.jsx)(f,{}),(0,a.jsx)(o,{}),e.length>0&&!r&&u<3&&(0,a.jsx)(l,{})]})})},m=v},68:function(n,e,r){r.d(e,{B$:function(){return a},NH:function(){return i},Tc:function(){return o},Wz:function(){return t},zh:function(){return c}});var t=function(n){return n.cars.cars},i=function(n){return n.cars.isLoading},c=function(n){return n.cars.error},a=function(n){return n.pagination},o=function(n){return n.favorites}}}]);
//# sourceMappingURL=601.d51db682.chunk.js.map