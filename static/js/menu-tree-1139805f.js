import{d as _,r as u,a2 as E,af as V,A as D,ag as b,ah as B,h as n,e as N,i as I,j as a,g as l,k as r,l as d,b as o,Z as T,ai as m}from"./index-982b6cac.js";import{u as w}from"./hooks-25393761.js";const M={class:"card-header"},R={class:"font-medium"},q=_({name:"MenuTree"}),U=_({...q,setup(z){const c=u(""),f=u({value:"uniqueId",children:"children"}),p=u(),h=E(V().wholeMenus),i=D(()=>b(h)),x=B(i.value),k=e=>{p.value.filter(e)},v=(e,t)=>m(t.meta.title).indexOf(e)!==-1;return(e,t)=>{const F=n("el-link"),g=n("el-input"),y=n("el-tree-v2"),C=n("el-card");return N(),I(C,null,{header:a(()=>[l("div",M,[l("span",R,[r(" \u83DC\u5355\u6811\u7ED3\u6784\uFF08\u91C7\u7528element-plus\u7684 "),d(F,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:o(w)("node-tree"),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:a(()=>[r(" Tree V2 ")]),_:1},8,["icon"]),r(" \u7EC4\u4EF6\u5E76\u652F\u6301\u56FD\u9645\u5316\uFF09 ")])])]),default:a(()=>[d(g,{class:"mb-4",modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=s=>c.value=s),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u627E",clearable:"",onInput:k},null,8,["modelValue"]),d(y,{ref_key:"treeRef",ref:p,data:o(i),props:f.value,"show-checkbox":"",height:500,"filter-method":v,"default-expanded-keys":o(x)},{default:a(({data:s})=>[l("span",null,T(o(m)(s.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{U as default};
