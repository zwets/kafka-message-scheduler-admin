(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{124:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(122),a=t(78),c=t(232),i=t(233),o=t(53),u=t(120);function s(e,n,t,r){var a,c=(a=e,Object(o.d)(null===a||void 0===a?void 0:a.length)?e.length:e);return void 0===c||0===c||1===c||void 0===t?r?r(n):n:r?r(t):t}function l(e,n){return r.a.changeLanguage(e,n)}function d(){switch(localStorage.getItem("i18nextLng")||null){case"fr-FR":return u.fr;case"en-US":return u.enUS;default:return u.enGB}}r.a.use(i.a).use(c.a).use(a.e).init({fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});r.a},154:function(e,n,t){"use strict";var r=t(50),a=t(155),c=t(17),i=(t(1),t(45)),o=(t(868),t(2));n.a=function(e){var n=e.name,t=e.isLeft,u=e.isRight,s=e.isSmall,l=e.className,d=e.rotated,f=e.size,b=e.style,h=e.marginRight,p=e.marginLeft,j=Object(a.a)(e,["name","isLeft","isRight","isSmall","className","rotated","size","style","marginRight","marginLeft"]),v={};return d&&(v["data-fa-transform"]="rotate-".concat(d)),Object(o.jsx)("span",Object(r.a)(Object(r.a)({className:Object(c.a)("icon defaultSize",t?"is-left":"",u?"is-right":"",s?"is-small":"",l),style:Object(i.e)({borderBottomStyle:"none"},b,{marginLeft:p},{marginRight:h})},j),{},{children:Object(o.jsx)("i",Object(r.a)({className:Object(c.a)("fas fa-".concat(n),f?"fa-".concat(f):"")},v))}),n+l+d+f)}},156:function(e,n,t){"use strict";t.d(n,"b",(function(){return m})),t.d(n,"h",(function(){return O})),t.d(n,"i",(function(){return x})),t.d(n,"g",(function(){return g})),t.d(n,"f",(function(){return y})),t.d(n,"e",(function(){return w})),t.d(n,"d",(function(){return N})),t.d(n,"c",(function(){return k}));var r=t(15),a=t.n(r),c=t(25),i=t(157),o="",u="",s="",l="",d="",f="",b="",h="",p="";function j(){return(j=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)("/configuration.json");case 2:n=e.sent,o=n["api-root"],p=n.stats,u=n.schedulers,s=n.schedules,l=n["schedule-detail"],d=n["live-schedules"],f=n["live-schedule-detail"],b=n["history-schedules"],h=n["history-schedule-detail"];case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return null===o||void 0===o?"":o}function m(){return v()+p}function O(){return v()+u}function x(e){return v()+s.replace("{name}",e)}function g(e,n){return v()+l.replace("{name}",e).replace("{id}",n)}function y(e){return v()+d.replace("{name}",e)}function w(e,n){return v()+f.replace("{name}",e).replace("{id}",n)}function N(e){return v()+b.replace("{name}",e)}function k(e,n){return v()+h.replace("{name}",e).replace("{id}",n)}n.a=function(){return j.apply(this,arguments)}},157:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(15),a=t.n(r),c=t(25),i={"Content-Type":"application/json",Accept:"application/json"},o="Bad response from server",u=function(){var e=Object(c.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"GET",headers:t||i});case 2:if(!((r=e.sent).status>=400)){e.next=5;break}throw new Error(o);case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},158:function(e,n,t){"use strict";var r=t(36),a=t(1);n.a=function(){var e=Object(a.useState)(0),n=Object(r.a)(e,2),t=n[0],c=n[1];return[Object(a.useCallback)((function(){c((function(e){return e+1}))}),[]),t]}},159:function(e,n,t){"use strict";var r=t(15),a=t.n(r),c=t(25),i=t(239),o="80%",u=new function e(){var n=this;Object(i.a)(this,e),this.modalProviderHandler=void 0,this.closeTopModal=void 0,this.t=void 0,this.setModalProvider=function(e,t,r){n.modalProviderHandler=e,n.closeTopModal=t,n.t=r},this.open=function(e){return n.modalProviderHandler&&n.modalProviderHandler({width:e.width||o,title:e.title||"",saveLabel:e.saveLabel,cancelLabel:e.cancelLabel,content:e.content,onSave:e.onSave||function(){return Promise.resolve(!0)},onCancel:e.onCancel||function(){return Promise.resolve(!0)},focused:e.focused,showSaveButton:e.showSaveButton,showCancelButton:e.showCancelButton})},this.closeTop=function(){return n.closeTopModal&&n.closeTopModal()},this.confirm=function(e){var t=e.title,r=e.message,i=e.saveLabel,u=e.cancelLabel,s=e.width,l=e.focused;return new Promise((function(e){return n.modalProviderHandler&&n.modalProviderHandler({width:s||o,title:t||"",saveLabel:i||n.t&&n.t("Confirm"),cancelLabel:u,content:r,onSave:function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!0),n.abrupt("return",Promise.resolve(!0));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),onCancel:function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!1),n.abrupt("return",Promise.resolve(!0));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),focused:l})}))},this.message=function(e){var t=e.title,r=e.message,i=e.width;return new Promise((function(e){return n.modalProviderHandler&&n.modalProviderHandler({width:i||o,title:t||"",showSaveButton:!1,cancelLabel:n.t&&n.t("Close-button"),content:r,onSave:function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!0),n.abrupt("return",Promise.resolve(!0));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),onCancel:function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!1),n.abrupt("return",Promise.resolve(!0));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),focused:"cancel"})}))}};n.a=u},231:function(e,n,t){e.exports={AppContainer:"App_AppContainer__1v91Q"}},442:function(e,n,t){},443:function(e,n,t){},45:function(e,n,t){"use strict";t.d(n,"d",(function(){return u})),t.d(n,"f",(function(){return s})),t.d(n,"c",(function(){return l})),t.d(n,"e",(function(){return d})),t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return b}));var r=t(50),a=t(15),c=t.n(a),i=t(25),o=t(53);function u(e,n,t){return e.replace(new RegExp(n.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),t)}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e&&e.length>n?e.substring(0,n-t.length)+t:e}var l=function(){var e=Object(i.a)(c.a.mark((function e(){var n,t=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:10,e.abrupt("return",new Promise((function(e){return setTimeout(e,n)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function d(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n?n.reduce((function(e,n){if(void 0===n||null===n)return e;if(Object(o.b)(n)){var t=Object.keys(n).filter((function(e){return null!==n[e]&&void 0!==n[e]})).reduce((function(e,t){return e[t]=n[t],e}),{});return Object(r.a)(Object(r.a)({},e),t)}if(Object(o.f)(n)){var a=n.split(":",1);return e[a[0]]=a[1],e}return Object(o.c)(n)?Object(r.a)(Object(r.a)({},e),d(n())):e}),{}):{}}function f(e,n){for(var t,r,a,c=e.replace(/[^A-Za-z0-9+/]/g,""),i=c.length,o=n?Math.ceil((3*i+1>>2)/n)*n:3*i+1>>2,u=new Uint8Array(o),s=0,l=0,d=0;d<i;d++)if(r=3&d,s|=((a=c.charCodeAt(d))>64&&a<91?a-65:a>96&&a<123?a-71:a>47&&a<58?a+4:43===a?62:47===a?63:0)<<18-6*r,3===r||i-d===1){for(t=0;t<3&&l<o;t++,l++)u[l]=s>>>(16>>>t&24)&255;s=0}return u}function b(e){for(var n,t="",r=e.length,a=0;a<r;a++)n=e[a],t+=String.fromCharCode(n>251&&n<254&&a+5<r?1073741824*(n-252)+(e[++a]-128<<24)+(e[++a]-128<<18)+(e[++a]-128<<12)+(e[++a]-128<<6)+e[++a]-128:n>247&&n<252&&a+4<r?(n-248<<24)+(e[++a]-128<<18)+(e[++a]-128<<12)+(e[++a]-128<<6)+e[++a]-128:n>239&&n<248&&a+3<r?(n-240<<18)+(e[++a]-128<<12)+(e[++a]-128<<6)+e[++a]-128:n>223&&n<240&&a+2<r?(n-224<<12)+(e[++a]-128<<6)+e[++a]-128:n>191&&n<224&&a+1<r?(n-192<<6)+e[++a]-128:n);return t}},49:function(e,n,t){e.exports={Nav:"AppNavbar_Nav__3L3Mk",Brand:"AppNavbar_Brand__229Df",BrandTitle:"AppNavbar_BrandTitle__1EHeg",NavbarMenu:"AppNavbar_NavbarMenu__1qLDQ",NavbarLink:"AppNavbar_NavbarLink__1RfQr",NavbarDropdown:"AppNavbar_NavbarDropdown__2bIh1"}},53:function(e,n,t){"use strict";function r(e){return"function"===typeof e}function a(e){return"string"===typeof e}function c(e){return"number"===typeof e}function i(e){return a(e)||c(e)||function(e){return"boolean"===typeof e||e instanceof Boolean||e===Boolean}(e)}function o(e){return null!==e&&"object"===typeof e}t.d(n,"c",(function(){return r})),t.d(n,"f",(function(){return a})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return u})),t.d(n,"g",(function(){return s}));function u(e){return Array.isArray(e)}function s(e,n){return function(t){return i(t)?t===n:!!o(t)&&t[e]===n}}},60:function(e,n,t){"use strict";t.d(n,"c",(function(){return h})),t.d(n,"e",(function(){return p})),t.d(n,"f",(function(){return j})),t.d(n,"a",(function(){return v})),t.d(n,"g",(function(){return m})),t.d(n,"d",(function(){return O})),t.d(n,"i",(function(){return x})),t.d(n,"b",(function(){return g})),t.d(n,"h",(function(){return y})),t.d(n,"k",(function(){return w})),t.d(n,"l",(function(){return N})),t.d(n,"m",(function(){return S}));var r=t(77),a=t(45),c=t(1),i=Object(c.lazy)((function(){return t.e(12).then(t.bind(null,881))})),o=Object(c.lazy)((function(){return t.e(13).then(t.bind(null,874))})),u=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,882))})),s=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,883))})),l=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(16)]).then(t.bind(null,875))})),d=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,876))})),f=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,877))})),b=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,878))})),h="/",p="/scheduler",j="/scheduler/detail/:schedulerName",v="/all",m="/all/detail/:schedulerName/:scheduleId",O="/live",x="/live/detail/:schedulerName/:scheduleId",g="/history",y="/history/detail/:schedulerName/:scheduleId",w=function(e){switch(e){case"live":return x;case"history":return y;default:return m}},N=function(e,n){return e.indexOf(":")>-1&&Object.keys(n).forEach((function(t){e=Object(a.d)(e,":"+t,n[t])})),e},k=[{path:"/about",key:"about",component:o,exact:!0},{path:O,key:"live",component:l,exact:!0,menu:{label:"Menu-schedules-live",icon:"bolt",position:2}},{path:g,key:"history",component:Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(15)]).then(t.bind(null,879))})),exact:!0,menu:{label:"Menu-schedules-history",icon:"history",position:4}},{path:v,key:"all",component:d,exact:!0,menu:{label:"Menu-schedules-all",icon:"calendar-alt",position:3}},{path:x,key:"schedule",component:b,exact:!0},{path:m,key:"schedule",component:f,exact:!0},{path:y,key:"schedule",component:Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,880))})),exact:!0},{path:p,key:"schedulers",component:u,exact:!0,menu:{label:"Menu-schedulers",icon:"stopwatch",position:5}},{path:j,key:"scheduler-detail",component:s,exact:!0},{path:h,key:"home",component:i,exact:!1,menu:{label:"Menu-home",icon:"home",position:1}}],S=Object(r.a)(k.filter((function(e){return e.menu})));S.sort((function(e,n){var t,r;return e.menu&&n.menu&&(null===(t=e.menu)||void 0===t?void 0:t.position)-(null===(r=n.menu)||void 0===r?void 0:r.position)||0})),n.j=k},868:function(e,n,t){},873:function(e,n,t){"use strict";t.r(n);t(244),t(254);var r=t(1),a=t.n(r),c=t(224),i=t.n(c),o=(t(441),t(442),t(443),t(231)),u=t.n(o),s=t(98),l=t(20),d=t(60),f=t(36),b=t(17),h=t(884),p=t(124),j=t(49),v=t.n(j),m=t(2),O=function(e,n){var t=e.charAt(0),r=e.substring(1);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{style:{color:n},children:t}),r]})},x=function(){var e=Object(h.a)().t,n=Object(r.useState)(!1),t=Object(f.a)(n,2),a=t[0],c=t[1],i=function(e){Object(p.a)(e)},o=function(e){switch(e){case"en-US":return"Menu-Display-In-English";case"fr-FR":return"Menu-Display-In-French";default:return"Menu-Display-In-English"}};return Object(m.jsx)("nav",{className:Object(b.a)("navbar",v.a.Nav),children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"navbar-brand",children:Object(m.jsxs)("span",{role:"button",className:Object(b.a)("navbar-burger burger white",a?"is-active":null,v.a.NavbarMenu),"aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",onClick:function(){return c((function(e){return!e}))},children:[Object(m.jsx)("span",{"aria-hidden":"true"}),Object(m.jsx)("span",{"aria-hidden":"true"}),Object(m.jsx)("span",{"aria-hidden":"true"})]})}),Object(m.jsxs)("div",{id:"navbarMenu",className:Object(b.a)("navbar-menu",v.a.NavbarMenu,a?"is-active":null),children:[Object(m.jsx)("div",{className:"navbar-start",children:Object(m.jsx)("span",{className:Object(b.a)("navbar-item",v.a.Brand),children:Object(m.jsx)("a",{className:Object(b.a)("button is-white",v.a.NavbarLink),href:d.c,children:Object(m.jsx)("span",{className:v.a.BrandTitle,children:O(e("App-title"),"#00b89c")})})})}),Object(m.jsxs)("div",{className:"navbar-end",children:[Object(m.jsx)("span",{className:Object(b.a)("navbar-item"),children:Object(m.jsxs)("a",{className:Object(b.a)("button is-white is-outlined",v.a.NavbarLink),target:"_blank",rel:"noreferrer",href:"https://github.com/etf1/kafka-message-scheduler-admin",style:{color:"gray"},children:[Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{className:"fab fa-github"})}),Object(m.jsx)("span",{children:e("Menu-Source")})]})}),Object(m.jsxs)("div",{className:Object(b.a)("navbar-item has-dropdown is-hoverable",v.a.NavbarDropdown),children:[Object(m.jsx)("label",{className:Object(b.a)("navbar-link",v.a.NavbarLink),style:{color:"#5d5d5d !important"},children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{className:"fa fa-flag"})})}),Object(m.jsxs)("div",{className:"navbar-dropdown",children:[Object(m.jsx)("span",{onClick:function(){return i("en-US")},className:Object(b.a)("navbar-item","has-tooltip-left"),style:{cursor:"pointer",paddingRight:30},"data-tooltip":e(o("en-US")),children:Object(m.jsx)("img",{src:"/asset/english_flag.svg",width:"32",alt:e(o("en-US"))})}),Object(m.jsx)("span",{onClick:function(){return i("fr-FR")},className:Object(b.a)("navbar-item","has-tooltip-left"),style:{cursor:"pointer",paddingRight:30},"data-tooltip":e(o("fr-FR")),children:Object(m.jsx)("img",{src:"/asset/french_flag.svg",width:"32",alt:e(o("fr-FR"))})})]})]})]})]})]})})},g=t(154),y=t(96),w=t.n(y),N=function(e,n){var t=window.location.pathname,r=0;return!!t.startsWith(n)&&(r=n.length,!e.find((function(e){return t.startsWith(e)&&e.length>r})))},k=function(){var e=Object(h.a)().t,n=d.m.map((function(e){return e.path}));return Object(m.jsx)("div",{className:Object(b.a)("menu",w.a.Container),children:d.m.map((function(t){var r=t.path,a=t.key,c=t.menu;return Object(m.jsx)(s.b,{"data-key":"menu-item",to:r,children:Object(m.jsx)("div",{className:Object(b.a)(w.a.MenuItem,N(n,r)?w.a.MenuItemSelected:null),children:Object(m.jsx)(g.a,{name:(null===c||void 0===c?void 0:c.icon)||"",size:"lg",className:Object(b.a)("has-tooltip-right",w.a.Icon),"data-tooltip":e((null===c||void 0===c?void 0:c.label)||"")})})},a)}))})},S=t(15),L=t.n(S),_=t(25),C=t(77),M=t(53),P=t(158);function A(e){var n=Object(P.a)(),t=Object(f.a)(n,1)[0],a=Object(r.useRef)(Object(M.c)(e)?e():e);return Object(r.useMemo)((function(){return[function(){return a.current},function(e){a.current=Object(M.c)(e)?e(a.current):e,t()}]}),[])}var B=t(159),I=t(45),z=function(){var e=Object(r.useRef)(null);return[e,function(){Object(I.c)().then((function(){return e.current&&e.current.focus()}))}]},R=function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(r.useEffect)((function(){var r=function(r){e(r)&&(t&&(r.preventDefault(),r.stopPropagation()),Object(I.c)().then((function(){return n(r)})))};return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}}),[e,n,t])},T=function(e){var n=e.width,t=e.height,a=e.zIndex,c=e.isActive,i=e.title,o=e.children,u=e.saveLabel,s=e.cancelLabel,l=e.isOnTop,d=e.onSave,p=e.onCancel,j=e.focused,v=void 0===j?"none":j,O=e.showSaveButton,x=void 0===O||O,g=e.showCancelButton,y=void 0===g||g,w=e.disabled,N=void 0!==w&&w,k=Object(h.a)().t,S=40*a,L=z(),_=Object(f.a)(L,2),C=_[0],M=_[1],P=z(),A=Object(f.a)(P,2),B=A[0],T=A[1],E={width:"string"===typeof n?n:n+S,paddingLeft:S,paddingTop:S};return Object(r.useEffect)((function(){"save"===v?Object(I.c)().then(M):"cancel"===v&&Object(I.c)().then(T)}),[v]),R(Object(r.useCallback)((function(e){return l&&"Escape"===e.key}),[l]),p,!0),Object(m.jsxs)("div",{className:Object(b.a)("modal",c&&"is-active"),children:[Object(m.jsx)("div",{className:"modal-background"}),Object(m.jsxs)("div",{className:"modal-card",style:E,children:[Object(m.jsxs)("header",{className:"modal-card-head",style:{padding:16},children:[Object(m.jsx)("p",{className:"modal-card-title",style:{fontSize:"1.2rem"},children:i}),Object(m.jsx)("button",{className:"delete","aria-label":"close",onClick:p,type:"button"})]}),Object(m.jsx)("pre",{className:"modal-card-body",style:{minHeight:t||"20vh",display:"grid",alignItems:"center"},children:o}),Object(m.jsxs)("footer",{className:"modal-card-foot",style:{padding:16,justifyContent:"flex-end"},children:[x&&Object(m.jsx)("button",{className:"button is-success",onClick:d,ref:C,disabled:N,type:"button",children:u||k("Save")}),y&&Object(m.jsx)("button",{className:Object(b.a)("button"),onClick:p,ref:B,disabled:N,type:"button",children:s||k("Cancel")})]})]})]})},E=a.a.memo(T),D=function(){var e=Object(h.a)().t,n=A([]),t=Object(f.a)(n,2),a=t[0],c=t[1],i=A(!1),o=Object(f.a)(i,2),u=o[0],s=o[1],l=function(){a().length>0&&c((function(e){return e.pop(),Object(C.a)(e)}))},d=function(e){c((function(n){var t=n.indexOf(e);return n.splice(t,1),Object(C.a)(n)}))};Object(r.useEffect)((function(){return B.a.setModalProvider((function(e){c((function(n){return[].concat(Object(C.a)(n),[e])}))}),l,e)}),[]);var b=a(),p=b.map((function(e,n){var t=function(){var n=Object(_.a)(L.a.mark((function n(t){var r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.next=3,e.onSave(t);case 3:r=n.sent,s(!1),r&&d(e);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),r=function(){var n=Object(_.a)(L.a.mark((function n(t){var r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.next=3,e.onCancel(t);case 3:r=n.sent,s(!1),r&&d(e);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(m.jsx)(E,{onSave:t,onCancel:r,isActive:!0,zIndex:n,width:e.width,title:e.title,saveLabel:e.saveLabel,cancelLabel:e.cancelLabel,isOnTop:n===b.length-1,focused:e.focused,disabled:u(),showSaveButton:e.showSaveButton,showCancelButton:e.showCancelButton,children:e.content},"".concat(n).concat(e.title,".").concat(e.width))}));return Object(m.jsx)(m.Fragment,{children:p})};var H=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{children:Object(m.jsx)(l.c,{children:d.j.map((function(e){return Object(m.jsxs)(l.a,{exact:e.exact,path:e.path,children:[Object(m.jsx)(k,{}),Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:u.a.AppContainer,children:Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)("div",{}),children:Object(m.jsx)(e.component,{})})})]},e.key)}))})}),Object(m.jsx)(D,{})]})},F=t(156);Object(F.a)().then((function(){i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)("div",{}),children:Object(m.jsx)(H,{})})}),document.getElementById("root"))}))},96:function(e,n,t){e.exports={Container:"AppLeftSidebar_Container__RUNhc",MenuItem:"AppLeftSidebar_MenuItem__1stkD",MenuItemSelected:"AppLeftSidebar_MenuItemSelected__YQTQS",Icon:"AppLeftSidebar_Icon__1giic"}}},[[873,5,6]]]);
//# sourceMappingURL=main.31eee6e1.chunk.js.map