import{_ as m}from"./InputCopyable.vue_vue_type_script_setup_true_lang-85d4c60e.js";import{o as a,e as l,f as p,d,p as f,b as h,h as t,g as r,y as g,z as v}from"./index-2e588a01.js";const x={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},w=p("path",{fill:"currentColor",d:"M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z"},null,-1),y=[w];function z(n,e){return a(),l("svg",x,[...y])}const $={name:"mdi-arrow-down",render:z};function b(n){const e=n.length;return e<=3?n:`${n.at(0)}${e-2}${n.at(-1)}`}const B={flex:"","flex-col":"","items-center":"","gap-4":""},C=d({__name:"numeronym-generator",setup(n){const e=f(""),s=h(()=>b(e.value));return(L,o)=>{const _=v,c=$,i=m;return a(),l("div",B,[t(_,{value:r(e),"onUpdate:value":o[0]||(o[0]=u=>g(e)?e.value=u:null),placeholder:"Enter a word, e.g. 'internationalization'",size:"large",clearable:"","test-id":"word-input"},null,8,["value"]),t(c,{"text-30px":""}),t(i,{value:r(s),size:"large",readonly:"",placeholder:"Your numeronym will be here, e.g. 'i18n'","test-id":"numeronym"},null,8,["value"])])}}});export{C as default};