(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Te1":function(e,a,t){"use strict";var r=t("wx14"),l=t("zLVn"),n=t("q1tI"),s=t.n(n),c=t("TSYQ"),i=t.n(c),u=t("33Jr"),o=function(e){var a=e.className,t=e.cssModule,n=e.color,c=e.innerRef,o=e.pill,m=e.tag,g=Object(l.a)(e,["className","cssModule","color","innerRef","pill","tag"]),d=Object(u.e)(i()(a,"badge","badge-"+n,!!o&&"badge-pill"),t);return g.href&&"span"===m&&(m="a"),s.a.createElement(m,Object(r.a)({},g,{className:d,ref:c}))};o.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=o},CZVI:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("BLzl"),s=t("/kxI"),c=t("ChEw"),i=t("x863"),u=t("wx14"),o=t("zLVn"),m=t("TSYQ"),g=t.n(m),d=t("33Jr"),p=function(e){var a=e.className,t=e.cssModule,r=e.tag,n=Object(o.a)(e,["className","cssModule","tag"]),s=Object(d.e)(g()(a,"card-text"),t);return l.a.createElement(r,Object(u.a)({},n,{className:s}))};p.defaultProps={tag:"p"};var f=p,b=t("2Te1"),E=t("Wbzz"),v=t("9eSz"),N=t.n(v),y=t("b+5I");a.a=function(e){var a=e.title,t=e.author,r=e.slug,u=e.date,o=e.body,m=e.fluid,g=e.tags;return l.a.createElement(n.a,null,l.a.createElement(E.Link,{to:"/"+r+"/"},l.a.createElement(N.a,{className:"card-image-top",fluid:m})),l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement(E.Link,{to:"/"+r+"/"},a)),l.a.createElement(i.a,null,l.a.createElement("span",{className:"text-info"},u)," by"," ",l.a.createElement("span",{className:"text-info"},t)),l.a.createElement(f,null,o),l.a.createElement("ul",{className:"post-tags"},g.map((function(e){return l.a.createElement("li",{key:e},l.a.createElement(E.Link,{to:"/tag/"+Object(y.slugify)(e)},l.a.createElement(b.a,{color:"primary",className:"text-uppercase"},e)))}))),l.a.createElement(E.Link,{to:"/"+r+"/",className:"btn btn-outline-primary float-right text-uppercase"},"Read more")))}},Co3s:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("wx14"),s=t("zLVn"),c=t("TSYQ"),i=t.n(c),u=t("33Jr"),o=function(e){var a,t=e.className,r=e.listClassName,c=e.cssModule,o=e.size,m=e.tag,g=e.listTag,d=e["aria-label"],p=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(u.e)(i()(t),c),b=Object(u.e)(i()(r,"pagination",((a={})["pagination-"+o]=!!o,a)),c);return l.a.createElement(m,{className:f,"aria-label":d},l.a.createElement(g,Object(n.a)({},p,{className:b})))};o.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var m=o,g=function(e){var a=e.active,t=e.className,r=e.cssModule,c=e.disabled,o=e.tag,m=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),g=Object(u.e)(i()(t,"page-item",{active:a,disabled:c}),r);return l.a.createElement(o,Object(n.a)({},m,{className:g}))};g.defaultProps={tag:"li"};var d=g,p=function(e){var a,t=e.className,r=e.cssModule,c=e.next,o=e.previous,m=e.first,g=e.last,d=e.tag,p=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=Object(u.e)(i()(t,"page-link"),r);o?a="Previous":c?a="Next":m?a="First":g&&(a="Last");var b,E=e["aria-label"]||a;o?b="‹":c?b="›":m?b="«":g&&(b="»");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),p.href||"a"!==d||(d="button"),(o||c||m||g)&&(v=[l.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||b),l.a.createElement("span",{className:"sr-only",key:"sr"},E)]),l.a.createElement(d,Object(n.a)({},p,{className:f,"aria-label":E}),v)};p.defaultProps={tag:"a"};var f=p;a.a=function(e){var a=e.currentPage,t=e.numberOfPages,r=1===a,n=a===t,s=a-1==1?"/":"/page/"+(a-1).toString(),c="/page/"+(a+1).toString();return l.a.createElement(m,{"aria-label":"Page navigation example"},r?l.a.createElement(d,{disabled:!0},l.a.createElement(f,{previous:!0,href:"/"})):l.a.createElement(d,null,l.a.createElement(f,{previous:!0,href:s})),Array.from({length:t},(function(e,t){return a===t+1?l.a.createElement(d,{active:!0,key:"page-number"+(t+1)},l.a.createElement(f,{href:"/"+(0===t?"":"page/"+(t+1))},t+1)):l.a.createElement(d,{key:"page-number"+(t+1)},l.a.createElement(f,{href:"/"+(0===t?"":"page/"+(t+1))},t+1))})),n?l.a.createElement(d,{disabled:!0},l.a.createElement(f,{next:!0,href:c})):l.a.createElement(d,null,l.a.createElement(f,{next:!0,href:c})))}},UV5A:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),l=t.n(r),n=t("Bl7J"),s=t("vrFN"),c=t("Wbzz"),i=t("CZVI"),u=t("Co3s"),o="1696504045";a.default=function(){var e;return l.a.createElement(n.a,{pageTitle:"Events"},l.a.createElement(s.a,{title:"Events",keywords:["gatsby","application","react"]}),l.a.createElement(c.StaticQuery,{query:o,render:function(a){return e=Math.ceil(a.allMarkdownRemark.totalCount/2),l.a.createElement("div",null,a.allMarkdownRemark.edges.map((function(e){var a=e.node;return l.a.createElement(i.a,{key:a.id,title:a.frontmatter.title,slug:a.fields.slug,author:a.frontmatter.author,body:a.excerpt,date:a.frontmatter.date,fluid:a.frontmatter.image.childImageSharp.fluid,tags:a.frontmatter.tags})})),l.a.createElement(u.a,{currentPage:1,numberOfPages:e}))}}))}},"b+5I":function(e,a){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},x863:function(e,a,t){"use strict";var r=t("wx14"),l=t("zLVn"),n=t("q1tI"),s=t.n(n),c=t("TSYQ"),i=t.n(c),u=t("33Jr"),o=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),o=Object(u.e)(i()(a,"card-subtitle"),t);return s.a.createElement(n,Object(r.a)({},c,{className:o}))};o.defaultProps={tag:"div"},a.a=o}}]);
//# sourceMappingURL=component---src-pages-events-js-0585144a435fc140bed5.js.map