(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Te1":function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),r=t("q1tI"),c=t.n(r),s=t("TSYQ"),u=t.n(s),m=t("33Jr"),o=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.innerRef,o=e.pill,i=e.tag,d=Object(l.a)(e,["className","cssModule","color","innerRef","pill","tag"]),E=Object(m.e)(u()(a,"badge","badge-"+r,!!o&&"badge-pill"),t);return d.href&&"span"===i&&(i="a"),c.a.createElement(i,Object(n.a)({},d,{className:E,ref:s}))};o.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=o},CZVI:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("BLzl"),s=t("/kxI"),u=t("ChEw"),m=t("x863"),o=t("wx14"),i=t("zLVn"),d=t("TSYQ"),E=t.n(d),f=t("33Jr"),p=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(i.a)(e,["className","cssModule","tag"]),c=Object(f.e)(E()(a,"card-text"),t);return l.a.createElement(n,Object(o.a)({},r,{className:c}))};p.defaultProps={tag:"p"};var b=p,g=t("2Te1"),v=t("9eSz"),N=t.n(v),w=t("b+5I");a.a=function(e){var a=e.title,t=e.author,n=e.slug,o=e.date,i=e.body,d=e.fluid,E=e.tags;return l.a.createElement(c.a,null,l.a.createElement(r.Link,{to:n},l.a.createElement(N.a,{className:"card-image-top",fluid:d})),l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(r.Link,{to:n},a)),l.a.createElement(m.a,null,l.a.createElement("span",{className:"text-info"},o)," by "," ",l.a.createElement("span",{className:"text-info"},t)),l.a.createElement(b,null,i),l.a.createElement("ul",{className:"post-tags"},E.map((function(e){return l.a.createElement("li",{key:e},l.a.createElement(r.Link,{to:"/tag/"+Object(w.slugify)(e)},l.a.createElement(g.a,{color:"primary"},e)))}))),l.a.createElement(r.Link,{to:n,className:"btn btn-outline-primary float-right"},"Read More")))}},G1dn:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("CZVI"),s=t("ok1R"),u=t("rhny"),m=t("HrbO"),o=t("Bl7J"),i=t("vrFN"),d="4168118523";a.default=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{title:"Home"}),l.a.createElement("h1",null,"Domain Page"),l.a.createElement(s.a,null,l.a.createElement(u.a,{md:"2"}),l.a.createElement(u.a,{md:"6"},l.a.createElement(r.StaticQuery,{query:d,render:function(e){return l.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var a=e.node;return l.a.createElement(c.a,{key:a.id,title:a.frontmatter.title,author:a.frontmatter.author,slug:a.fields.slug,tags:a.frontmatter.tags,date:a.frontmatter.date,body:a.excerpt,fluid:a.frontmatter.image.childImageSharp.fluid})})))}})),l.a.createElement(u.a,{md:"4"},l.a.createElement("div",null,l.a.createElement(m.a,null)))))}},HrbO:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("BLzl"),c=t("/kxI"),s=t("ChEw");a.a=function(){return l.a.createElement("div",null,l.a.createElement(r.a,null,l.a.createElement(c.a,null,l.a.createElement(s.a,{className:"text-center text-uppercase mb-3"},"Calender",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))))}},"b+5I":function(e,a){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},x863:function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),r=t("q1tI"),c=t.n(r),s=t("TSYQ"),u=t.n(s),m=t("33Jr"),o=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),o=Object(m.e)(u()(a,"card-subtitle"),t);return c.a.createElement(r,Object(n.a)({},s,{className:o}))};o.defaultProps={tag:"div"},a.a=o}}]);
//# sourceMappingURL=component---src-pages-domain-js-e805859f61f8f9f452f1.js.map