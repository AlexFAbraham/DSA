(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function O(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=c.default.createElement(L,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,i(r),l):l})),L=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,j=e.draggable,N=g||h;if(!N)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,o.default)({opacity:z?1:0,transition:I?"opacity "+v+"ms":"none"},l),C="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&P,l,f),H={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:E},T=this.state.isHydrated?p(N):N[0];if(g)return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),C&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&P)}),T.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:N,generateSources:R}),T.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:N,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,O(N),c.default.createElement(L,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:S},T,{imageVariants:N}))}}));if(h){var q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete q.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},C&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},I&&P)}),T.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:N,generateSources:R}),T.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:N,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,O(N),c.default.createElement(L,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:S},T,{imageVariants:N}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),M=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:I,sizes:M,fixed:C(d.default.oneOfType([I,d.default.arrayOf(I)])),fluid:C(d.default.oneOfType([M,d.default.arrayOf(M)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=z;t.default=P},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("wx14"),l=a("zLVn"),o=a("TSYQ"),c=a.n(o),d=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,r=e.color,n=e.body,o=e.inverse,u=e.outline,f=e.tag,m=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.e)(c()(t,"card",!!o&&"text-white",!!n&&"card-body",!!r&&(u?"border":"bg")+"-"+r),a);return i.a.createElement(f,Object(s.a)({},p,{className:g,ref:m}))};u.defaultProps={tag:"div"};var f=u,m=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,n=e.tag,o=Object(l.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.e)(c()(t,"card-body"),a);return i.a.createElement(n,Object(s.a)({},o,{className:u,ref:r}))};m.defaultProps={tag:"div"};var p=m,g=function(e){var t=e.className,a=e.cssModule,r=e.tag,n=Object(l.a)(e,["className","cssModule","tag"]),o=Object(d.e)(c()(t,"card-title"),a);return i.a.createElement(r,Object(s.a)({},n,{className:o}))};g.defaultProps={tag:"div"};var h=g,b=function(e){var t=e.className,a=e.cssModule,r=e.tag,n=Object(l.a)(e,["className","cssModule","tag"]),o=Object(d.e)(c()(t,"card-subtitle"),a);return i.a.createElement(r,Object(s.a)({},n,{className:o}))};b.defaultProps={tag:"div"};var v=b,y=function(e){var t=e.className,a=e.cssModule,r=e.tag,n=Object(l.a)(e,["className","cssModule","tag"]),o=Object(d.e)(c()(t,"card-text"),a);return i.a.createElement(r,Object(s.a)({},n,{className:o}))};y.defaultProps={tag:"p"};var E=y,O=function(e){var t=e.className,a=e.cssModule,r=e.color,n=e.innerRef,o=e.pill,u=e.tag,f=Object(l.a)(e,["className","cssModule","color","innerRef","pill","tag"]),m=Object(d.e)(c()(t,"badge","badge-"+r,!!o&&"badge-pill"),a);return f.href&&"span"===u&&(u="a"),i.a.createElement(u,Object(s.a)({},f,{className:m,ref:n}))};O.defaultProps={color:"secondary",pill:!1,tag:"span"};var S=O,w=a("9eSz"),R=a.n(w),j=a("b+5I"),N=function(e){var t=e.title,a=e.author,r=e.path,s=e.date,l=e.body,o=e.fluid,c=e.tags;return i.a.createElement(f,null,i.a.createElement(n.Link,{to:r},i.a.createElement(R.a,{className:"card-image-top",fluid:o})),i.a.createElement(p,null,i.a.createElement(h,null,i.a.createElement(n.Link,{to:r},t)),i.a.createElement(v,null,i.a.createElement("span",{className:"text-info"},s)," by "," ",i.a.createElement("span",{className:"text-info"},a)),i.a.createElement(E,null,l),i.a.createElement("ul",{className:"post-tags"},c.map((function(e){return i.a.createElement("li",null,i.a.createElement(n.Link,{to:"/tag/"+Object(j.slugify)(e)},i.a.createElement(S,{color:"primary"},e)))}))),i.a.createElement(n.Link,{to:r,className:"btn btn-outline-primary float-right"},"Read More")))},x=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,n=e.tag,o=e.form,u=e.widths,f=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];u.forEach((function(t,a){var r=e[t];if(delete f[t],r){var i=!a;m.push(i?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var p=Object(d.e)(c()(t,r?"no-gutters":null,o?"form-row":"row",m),a);return i.a.createElement(n,Object(s.a)({},f,{className:p}))};x.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var k=x,L=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},z=function(e){var t=e.className,a=e.cssModule,r=e.widths,n=e.tag,o=Object(l.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach((function(t,r){var i=e[t];if(delete o[t],i||""===i){var n=!r;if(Object(d.d)(i)){var s,l=n?"-":"-"+t+"-",f=L(n,t,i.size);u.push(Object(d.e)(c()(((s={})[f]=i.size||""===i.size,s["order"+l+i.order]=i.order||0===i.order,s["offset"+l+i.offset]=i.offset||0===i.offset,s)),a))}else{var m=L(n,t,i);u.push(m)}}})),u.length||u.push("col");var f=Object(d.e)(c()(t,u),a);return i.a.createElement(n,Object(s.a)({},o,{className:f}))};z.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var I=z,M=a("JX7q"),C=a("dI71"),P=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(M.a)(a)),a.submit=a.submit.bind(Object(M.a)(a)),a}Object(C.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,n=e.tag,o=e.innerRef,u=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),f=Object(d.e)(c()(t,!!r&&"form-inline"),a);return i.a.createElement(n,Object(s.a)({},u,{ref:o,className:f}))},t}(r.Component);P.defaultProps={tag:"form"};var V=P,H=function(e){var t=e.className,a=e.cssModule,r=e.row,n=e.disabled,o=e.check,u=e.inline,f=e.tag,m=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.e)(c()(t,!!r&&"row",o?"form-check":"form-group",!(!o||!u)&&"form-check-inline",!(!o||!n)&&"disabled"),a);return"fieldset"===f&&(m.disabled=n),i.a.createElement(f,Object(s.a)({},m,{className:p}))};H.defaultProps={tag:"div"};var T=H,q=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(M.a)(a)),a.focus=a.focus.bind(Object(M.a)(a)),a}Object(C.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,n=e.bsSize,o=e.valid,u=e.invalid,f=e.tag,m=e.addon,p=e.plaintext,g=e.innerRef,h=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),y=f||("select"===r||"textarea"===r?r:"input"),E="form-control";p?(E+="-plaintext",y=f||"input"):"file"===r?E+="-file":"range"===r?E+="-range":b&&(E=m?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(d.h)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),n=h.size,delete h.size);var O=Object(d.e)(c()(t,u&&"is-invalid",o&&"is-valid",!!n&&"form-control-"+n,E),a);return("input"===y||f&&"function"==typeof f)&&(h.type=r),h.children&&!p&&"select"!==r&&"string"==typeof y&&"select"!==y&&(Object(d.h)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(y,Object(s.a)({},h,{ref:g,className:O,"aria-invalid":u}))},t}(i.a.Component);q.defaultProps={type:"text"};var W=q,G=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(M.a)(a)),a}Object(C.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,n=e.className,o=e.close,u=e.cssModule,f=e.color,m=e.outline,p=e.size,g=e.tag,h=e.innerRef,b=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&void 0===b.children&&(b.children=i.a.createElement("span",{"aria-hidden":!0},"×"));var v="btn"+(m?"-outline":"")+"-"+f,y=Object(d.e)(c()(n,{close:o},o||"btn",o||v,!!p&&"btn-"+p,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),u);b.href&&"button"===g&&(g="a");var E=o?"Close":null;return i.a.createElement(g,Object(s.a)({type:"button"===g&&b.onClick?"button":void 0},b,{className:y,ref:h,onClick:this.onClick,"aria-label":a||E}))},t}(i.a.Component);G.defaultProps={color:"secondary",tag:"button"};var J=G,B="2065698166",F=function(){return i.a.createElement("div",null,i.a.createElement(f,null,i.a.createElement(p,null,i.a.createElement(h,{className:"text-center text-uppercase mb-3"},"Newsletter"),i.a.createElement(V,{className:"text-center"},i.a.createElement(T,null,i.a.createElement(W,{type:"email",name:"email",placeholder:"Your email address here..."})),i.a.createElement(J,{outline:!0,color:"primary",className:"btn text-uppercase"},"Subscribe")))),i.a.createElement(f,null,i.a.createElement(p,null,i.a.createElement(h,{className:"text-center text-uppercase mb-3"}),"Recent Posts"),i.a.createElement(n.StaticQuery,{query:B,render:function(e){return i.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return i.a.createElement(f,{key:t.id},i.a.createElement(n.Link,{to:t.frontmatter.path},i.a.createElement(R.a,{className:"card-image-top",fluid:t.frontmatter.image.childImageSharp.fluid})),i.a.createElement(p,null,i.a.createElement(h,null,i.a.createElement(n.Link,{to:t.frontmatter.path},t.frontmatter.title))))})))}})))},_=a("Bl7J"),D=a("vrFN"),Q="2471110978";t.default=function(){return i.a.createElement(_.a,null,i.a.createElement(D.a,{title:"Home"}),i.a.createElement("h1",null,"Blog Page"),i.a.createElement(k,null,i.a.createElement(I,{md:"2"}),i.a.createElement(I,{md:"6"},i.a.createElement(n.StaticQuery,{query:Q,render:function(e){return i.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return i.a.createElement(N,{title:t.frontmatter.title,author:t.frontmatter.author,path:t.frontmatter.path,tags:t.frontmatter.tags,date:t.frontmatter.date,body:t.excerpt,fluid:t.frontmatter.image.childImageSharp.fluid})})))}})),i.a.createElement(I,{md:"3"},i.a.createElement("div",null,i.a.createElement(F,null)))))}},"b+5I":function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b4ec0fd20dca66ef9f15.js.map