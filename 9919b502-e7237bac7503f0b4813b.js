"use strict";(self.webpackChunkcreative_cloud_libraries=self.webpackChunkcreative_cloud_libraries||[]).push([[488],{34899:function(e,t,a){a.d(t,{k:function(){return f}});var i=a(87462),n=a(15785),s=a(15007),l=a(1597),r=a(44264),o=a(95223),d=a(75900),c=a.n(d),m=a(77158),u=a(22222),p=a(63184);var v={name:"18ajqm7",styles:"box-sizing:border-box;padding:var(--spectrum-global-dimension-size-400);overflow:auto;height:calc(100vh - var(--spectrum-global-dimension-size-800))"},g={name:"v90p7h",styles:"&:not(.is-expanded) .spectrum-SideNav{display:none;}&:first-of-type .spectrum-SideNav-heading{margin-top:0;}"},h={name:"v90p7h",styles:"&:not(.is-expanded) .spectrum-SideNav{display:none;}&:first-of-type .spectrum-SideNav-heading{margin-top:0;}"};const f=e=>{let{versions:t,mainNavPages:a,selectedPages:d,selectedSubPages:f,setShowSideNav:b,location:N}=e;const{0:Z,1:S}=(0,s.useState)([]),{0:x,1:k}=(0,s.useState)([]),{0:w,1:z}=(0,s.useState)(!1),{0:y,1:L}=(0,s.useState)(!1),{0:C,1:E}=(0,s.useState)({}),P=f.some((e=>e.header)),U=f.some((e=>{var t;return(null==e||null===(t=e.pages)||void 0===t?void 0:t.length)>0})),_=(0,s.useRef)(null),A=e=>{_.current&&!_.current.contains(e.target)&&z(!1)};(0,s.useEffect)((()=>(document.addEventListener("click",A,!0),()=>{document.removeEventListener("click",A,!0)})),[]),(0,s.useEffect)((()=>{const e=((e,t)=>{const a=(0,r.A6)(e.pathname),i=(0,r.Gh)(t);let n=i.indexOf((0,r.Yx)(a,i)),s=a.split("/"),l=s.indexOf("use-cases");if(-1===n&&l>-1){s[l+1]="agreements-and-contracts",s[l+2]="sales-proposals-and-contracts",null==s[l+3]&&s.push("");let e=s.join("/");n=i.indexOf((0,r.Yx)(e,i))}return-1===n&&(n=0),n})(N,a),t=(0,r.A6)(N.pathname);E((0,r.xH)(t,a[e]))}),[N.pathname]),(0,s.useEffect)((()=>{window.innerWidth<=1280?L(!0):L(!1),window.addEventListener("resize",(()=>{window.innerWidth<=1280?L(!0):L(!1)}))}),[]);const G=(e,t)=>e.filter((e=>e.title)).map(((e,a)=>{const s=d.find((t=>t===e)),p=(0,m.ZP)(),v=e.href?e.href:e.menu[0].href;return!s||w||Z.includes(v)||S((e=>[].concat((0,n.Z)(e),[v]))),(0,o.tZ)("li",{key:a,role:"treeitem","aria-level":t,"aria-expanded":e.header||Z.includes(v),css:h,className:c()(["spectrum-SideNav-item",{"is-expanded":e.header||Z.includes(v)},{"is-selected":d[d.length-1]===e&&s}])},e.header?(0,o.tZ)("h2",{className:"spectrum-SideNav-heading",id:p},e.title):(0,r.Bm)(v)?(0,o.tZ)("a",(0,i.Z)({},(0,r.U3)(v),{href:v,className:"spectrum-SideNav-itemLink"}),e.title):(0,o.tZ)(l.rU,{onClick:()=>{var t;z(!0),null!=e&&null!==(t=e.pages)&&void 0!==t&&t.length&&!e.header?Z.includes(v)?S((e=>e.filter((e=>e!==v)))):S([].concat((0,n.Z)(Z),[v])):b(!1)},to:v,className:"spectrum-SideNav-itemLink"},e.title,e.pages&&e.pages.length>0?(0,o.tZ)(u.ChevronRight,{css:(0,o.iv)("position:absolute;right:0px;width:var(--spectrum-global-dimension-size-125)!important;height:var(--spectrum-global-dimension-size-125)!important;margin-left:var(--spectrum-global-dimension-size-100);transition:transform var(--spectrum-global-animation-duration-100) ease-in-out;",Z.includes(v)&&"transform: rotate(90deg);",";","")}):null),e.pages&&(0,o.tZ)("ul",(0,i.Z)({className:"spectrum-SideNav",role:"group",css:(0,o.iv)(t>1?"\n                    & > li > a {\n                      padding-left: calc("+(t+1)+" * var(--spectrum-global-dimension-size-150)) !important;\n                    }\n                  ":"",";","")},e.heading?{"aria-labelledby":p}:{}),G(e.pages,t+1)))})),O=(e,t)=>e.filter((e=>e.title)).map(((e,a)=>{const s=d.find((t=>t===e)),p=(0,m.ZP)(),v=e.href?e.href:"#"+e.title.toLowerCase();return!s||w||x.includes(v)||k((e=>[].concat((0,n.Z)(e),[v]))),(0,o.tZ)("li",{key:a,role:"treeitem","aria-level":t,"aria-expanded":e.header||x.includes(v),css:g,className:c()(["spectrum-SideNav-item",{"is-expanded":e.header||x.includes(v)},{"is-selected":d[d.length-1]===e&&s}])},e.header?(0,o.tZ)("h2",{className:"spectrum-SideNav-heading",id:p},e.title):(0,r.Bm)(v)?(0,o.tZ)("a",(0,i.Z)({},(0,r.U3)(v),{href:v,className:"spectrum-SideNav-itemLink"}),e.title):(0,o.tZ)(l.rU,{onClick:()=>{var t;z(!0),null!=e&&null!==(t=e.menu)&&void 0!==t&&t.length&&!e.header?x.includes(v)?k((e=>e.filter((e=>e!==v)))):k([].concat((0,n.Z)(x),[v])):b(!1)},to:v,className:"spectrum-SideNav-itemLink"},C===e&&(0,o.tZ)(u.CheckMark,null),e.title,e.menu&&e.menu.length>0?(0,o.tZ)(u.ChevronRight,{css:(0,o.iv)("position:absolute;right:0px;width:var(--spectrum-global-dimension-size-125)!important;height:var(--spectrum-global-dimension-size-125)!important;margin-left:var(--spectrum-global-dimension-size-100);transition:transform var(--spectrum-global-animation-duration-100) ease-in-out;",x.includes(v)&&"transform: rotate(90deg);",";","")}):null),e.menu&&(0,o.tZ)("ul",(0,i.Z)({className:"spectrum-SideNav",role:"group",css:(0,o.iv)(t>1?"\n                    & > li > a {\n                      padding-left: calc("+(t+1)+" * var(--spectrum-global-dimension-size-150)) !important;\n                    }\n                  ":"",";","")},e.heading?{"aria-labelledby":p}:{}),O(e.menu,t+1)))}));return(0,o.tZ)("nav",{ref:_,id:"side-menu",role:"navigation","aria-label":"Primary",css:(0,o.iv)("margin-top:var(--spectrum-global-dimension-size-800);@media screen and (max-width: ",r.q9,"){margin-top:var(--spectrum-global-dimension-size-400);}","")},(0,o.tZ)("div",{css:v},y&&(0,o.tZ)(s.default.Fragment,null,(0,o.tZ)("p",null,"Global Navigation"),(0,o.tZ)("ul",{role:"tree","aria-label":"Global Navigation",className:c()("spectrum-SideNav","spectrum-SideNav--multiLevel")},t&&O([{title:"Versions",menu:t}],1),O(a,1),(0,o.tZ)(p.A,{variant:"primary",href:"/console",id:"consoleId",tabIndex:"0"},"Console")),f.length>0&&(0,o.tZ)(s.default.Fragment,null,(0,o.tZ)("hr",null),(0,o.tZ)("p",null,"Table of contents"))),f.length>0&&(0,o.tZ)("ul",{role:"tree","aria-label":"Table of contents",className:c()("spectrum-SideNav",{"spectrum-SideNav--multiLevel":U&&!P})},G(f,1))))}}}]);
//# sourceMappingURL=9919b502-e7237bac7503f0b4813b.js.map