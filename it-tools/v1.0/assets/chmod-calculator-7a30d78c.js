import{m as u,d as V,D as C,p as S,b as h,e as d,h as _,w as B,f as t,t as m,g as a,H as G,o as f,F as x,r as b,E as I,G as P,B as j}from"./index-2e588a01.js";import{_ as D}from"./InputCopyable.vue_vue_type_script_setup_true_lang-85d4c60e.js";import{_ as E}from"./Checkbox-17d0c49f.js";import{_ as F}from"./Table-a39030ba.js";import"./use-form-item-6311a236.js";function N({permissions:e}){const r={read:4,write:2,execute:1},o=n=>u.reduce(n,(s,c,l)=>s+(c?u.get(r,l,0):0),0);return[o(e.owner),o(e.group),o(e.public)].join("")}function O({permissions:e}){const r={read:"r",write:"w",execute:"x"},o=n=>u.reduce(n,(s,c,l)=>s+(c?u.get(r,l,""):"-"),"");return[o(e.owner),o(e.group),o(e.public)].join("")}const R=e=>(I("data-v-7e90684f"),e=e(),P(),e),U=R(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-center",scope:"col"}),t("th",{class:"text-center",scope:"col"}," Owner 所有者 "),t("th",{class:"text-center",scope:"col"}," Group 组 "),t("th",{class:"text-center",scope:"col"}," Public 公共 ")])],-1)),$={class:"line-header"},z={class:"octal-result"},H={class:"octal-result"},L=V({__name:"chmod-calculator",setup(e){G(g=>({"3149ebee":a(r).primaryColor}));const r=C(),o=[{scope:"read",title:"读取 (4)"},{scope:"write",title:"写入 (2)"},{scope:"execute",title:"执行 (1)"}],n=["owner","group","public"],s=S({owner:{read:!1,write:!1,execute:!1},group:{read:!1,write:!1,execute:!1},public:{read:!1,write:!1,execute:!1}}),c=h(()=>N({permissions:s.value})),l=h(()=>O({permissions:s.value}));return(g,T)=>{const w=E,v=F;return f(),d("div",null,[_(v,{bordered:!1,"bottom-bordered":!1,"single-column":"",class:"permission-table"},{default:B(()=>[U,t("tbody",null,[(f(),d(x,null,b(o,({scope:i,title:y})=>t("tr",{key:i},[t("td",$,m(y),1),(f(),d(x,null,b(n,p=>t("td",{key:p,class:"text-center"},[_(w,{checked:a(s)[p][i],"onUpdate:checked":k=>a(s)[p][i]=k,size:"large"},null,8,["checked","onUpdate:checked"])])),64))])),64))])]),_:1}),t("div",z,m(a(c)),1),t("div",H,m(a(l)),1),_(D,{value:`chmod ${a(c)} path`,readonly:""},null,8,["value"])])}}});const Q=j(L,[["__scopeId","data-v-7e90684f"]]);export{Q as default};