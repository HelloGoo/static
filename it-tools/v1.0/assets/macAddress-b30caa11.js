import{q as s}from"./index-2e588a01.js";const r=[{message:"MAC地址无效",validator:a=>a.trim().match(/^([0-9A-Fa-f]{2}[:-]){2,5}([0-9A-Fa-f]{2})$/)}];function e(a){return s({source:a,rules:r})}const t=[{message:"部分MAC地址无效",validator:a=>a.trim().match(/^([0-9a-f]{2}[:\-. ]){0,5}([0-9a-f]{0,2})$/i)}];function o(a){return s({source:a,rules:t})}export{r as a,e as m,o as u};