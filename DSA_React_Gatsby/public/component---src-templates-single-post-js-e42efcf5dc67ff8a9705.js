(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2Te1":function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),c=n("TSYQ"),u=n.n(c),s=n("33Jr"),l=function(e){var t=e.className,n=e.cssModule,a=e.color,c=e.innerRef,l=e.pill,f=e.tag,d=Object(o.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(s.e)(u()(t,"badge","badge-"+a,!!l&&"badge-pill"),n);return d.href&&"span"===f&&(f="a"),i.a.createElement(f,Object(r.a)({},d,{className:p,ref:c}))};l.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=l},"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return a.DiscussionEmbed}}),t.default=void 0;var r=n("UZsz"),o=n("Bp/N"),a=n("HhXV"),i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=a(n("q1tI")),o=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,o,a=l(i);function i(){return c(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&u(t.prototype,n),o&&u(t,o),i}(r.default.Component);t.CommentEmbed=p,p.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},p.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9")),a=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,o,i=d(c);function c(){return s(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),b.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",u({},this.props,{id:"disqus_thread"}))}}])&&l(t.prototype,n),o&&l(t,o),c}(r.default.Component);t.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=i(n("q1tI")),o=i(n("17x9")),a=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o,i=f(c);function c(){return u(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?m():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(t.prototype,n),o&&s(t,o),c}(r.default.Component);t.CommentCount=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},c=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),c&&e.apply(o,a)}},t.isReactElement=c,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var u=r.value;if("object"===a(t[u])){if(e(t[u],n[u]))return!0}else if(t[u]!==n[u]&&!c(t[u]))return!0}}catch(s){o.e(s)}finally{o.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},"b+5I":function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},desn:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",(function(){return v}));var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("ynlL"),c=n("Wbzz"),u=n("vrFN"),s=n("ok1R"),l=n("rhny"),f=n("BLzl"),d=n("/kxI"),p=n("x863"),m=n("2Te1"),b=n("9eSz"),y=n.n(b),h=n("b+5I"),g=n("7evw"),v="1106205886";t.default=function(e){var t=e.data,n=e.pageContext,r=t.markdownRemark.frontmatter,b={identifier:t.markdownRemark.id,title:r.title,url:"https://dsablog.com/"+n.slug};return o.a.createElement(a.a,null,o.a.createElement(u.a,{title:r.title}),o.a.createElement("h1",null,r.title),o.a.createElement(s.a,null,o.a.createElement(l.a,{md:"8"},o.a.createElement(f.a,null,o.a.createElement(y.a,{className:"card-image-top",fluid:r.image.childImageSharp.fluid}),o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement("span",{className:"text-info"},r.date)," by","",o.a.createElement("span",{className:"text-info"},r.author)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),o.a.createElement("ul",{className:"post-tags"},r.tags.map((function(e){return o.a.createElement("li",{key:e},o.a.createElement(c.Link,{to:"/tag/"+Object(h.slugify)(e)}),o.a.createElement(m.a,{color:"primary"},e))}))))),o.a.createElement(g.DiscussionEmbed,{shortname:"dsa-blog-1",config:b})),o.a.createElement(l.a,{md:"4"},o.a.createElement(i.a,null))))}},sOKU:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("JX7q"),i=n("dI71"),c=n("q1tI"),u=n.n(c),s=n("TSYQ"),l=n.n(s),f=n("33Jr"),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],a=e.block,i=e.className,c=e.close,s=e.cssModule,d=e.color,p=e.outline,m=e.size,b=e.tag,y=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&void 0===h.children&&(h.children=u.a.createElement("span",{"aria-hidden":!0},"×"));var g="btn"+(p?"-outline":"")+"-"+d,v=Object(f.e)(l()(i,{close:c},c||"btn",c||g,!!m&&"btn-"+m,!!a&&"btn-block",{active:t,disabled:this.props.disabled}),s);h.href&&"button"===b&&(b="a");var w=c?"Close":null;return u.a.createElement(b,Object(r.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:v,ref:y,onClick:this.onClick,"aria-label":n||w}))},t}(u.a.Component);d.defaultProps={color:"secondary",tag:"button"},t.a=d},x863:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),c=n("TSYQ"),u=n.n(c),s=n("33Jr"),l=function(e){var t=e.className,n=e.cssModule,a=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),l=Object(s.e)(u()(t,"card-subtitle"),n);return i.a.createElement(a,Object(r.a)({},c,{className:l}))};l.defaultProps={tag:"div"},t.a=l},ynlL:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("BLzl"),i=n("/kxI"),c=n("ChEw"),u=n("wx14"),s=n("zLVn"),l=n("JX7q"),f=n("dI71"),d=n("TSYQ"),p=n.n(d),m=n("33Jr"),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(l.a)(n)),n.submit=n.submit.bind(Object(l.a)(n)),n}Object(f.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.inline,a=e.tag,i=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),l=Object(m.e)(p()(t,!!r&&"form-inline"),n);return o.a.createElement(a,Object(u.a)({},c,{ref:i,className:l}))},t}(r.Component);b.defaultProps={tag:"form"};var y=b,h=function(e){var t=e.className,n=e.cssModule,r=e.row,a=e.disabled,i=e.check,c=e.inline,l=e.tag,f=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),d=Object(m.e)(p()(t,!!r&&"row",i?"form-check":"form-group",!(!i||!c)&&"form-check-inline",!(!i||!a)&&"disabled"),n);return"fieldset"===l&&(f.disabled=a),o.a.createElement(l,Object(u.a)({},f,{className:d}))};h.defaultProps={tag:"div"};var g=h,v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(l.a)(n)),n.focus=n.focus.bind(Object(l.a)(n)),n}Object(f.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,a=e.bsSize,i=e.valid,c=e.invalid,l=e.tag,f=e.addon,d=e.plaintext,b=e.innerRef,y=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,g=new RegExp("\\D","g"),v=l||("select"===r||"textarea"===r?r:"input"),w="form-control";d?(w+="-plaintext",v=l||"input"):"file"===r?w+="-file":"range"===r?w+="-range":h&&(w=f?null:"form-check-input"),y.size&&g.test(y.size)&&(Object(m.h)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),a=y.size,delete y.size);var E=Object(m.e)(p()(t,c&&"is-invalid",i&&"is-valid",!!a&&"form-control-"+a,w),n);return("input"===v||l&&"function"==typeof l)&&(y.type=r),y.children&&!d&&"select"!==r&&"string"==typeof v&&"select"!==v&&(Object(m.h)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete y.children),o.a.createElement(v,Object(u.a)({},y,{ref:b,className:E,"aria-invalid":c}))},t}(o.a.Component);v.defaultProps={type:"text"};var w=v,E=n("sOKU"),S=n("Wbzz"),O=n("9eSz"),j=n.n(O),C="979176408";t.a=function(){return o.a.createElement("div",null,o.a.createElement(a.a,null,o.a.createElement(i.a,null,o.a.createElement(c.a,{className:"text-center text-uppercase mb-3"},"Newsletter"),o.a.createElement(y,{className:"text-center"},o.a.createElement(g,null,o.a.createElement(w,{type:"email",name:"email",placeholder:"Your email address here..."})),o.a.createElement(E.a,{outline:!0,color:"primary",className:"btn text-uppercase"},"Subscribe")))),o.a.createElement(a.a,null,o.a.createElement(i.a,null,o.a.createElement(c.a,{className:"text-center text-uppercase mb-3"}),"Recent Posts"),o.a.createElement(S.StaticQuery,{query:C,render:function(e){return o.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return o.a.createElement(a.a,{key:t.id},o.a.createElement(S.Link,{to:t.fields.slug},o.a.createElement(j.a,{className:"card-image-top",fluid:t.frontmatter.image.childImageSharp.fluid})),o.a.createElement(i.a,null,o.a.createElement(c.a,null,o.a.createElement(S.Link,{to:t.fields.slug},t.frontmatter.title))))})))}})))}}}]);
//# sourceMappingURL=component---src-templates-single-post-js-e42efcf5dc67ff8a9705.js.map