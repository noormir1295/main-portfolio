(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s(8),i=s.n(n),r=(s(15),s(2)),l=s(3),o=s(5),j=s(4),d=s(9),h=s.n(d),b=(s(16),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,a=this.props.data.address.city,n=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsxs)("header",{id:"home",children:[Object(c.jsxs)("nav",{id:"nav-wrap",children:[Object(c.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(c.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(c.jsxs)("ul",{id:"nav",className:"nav",children:[Object(c.jsx)("li",{className:"current",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(c.jsx)("div",{className:"row banner",children:Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsx)("h1",{className:"responsive-headline",children:e}),Object(c.jsxs)("h3",{children:["I am a ",a," based ",Object(c.jsx)("span",{children:t}),". ",s,"."]}),Object(c.jsx)("hr",{}),Object(c.jsx)("ul",{className:"social",children:n})]})}),Object(c.jsx)("p",{className:"scrolldown",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(c.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component)),m=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"twelve columns",children:[Object(c.jsx)("ul",{className:"social-links",children:e}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:"Thank you for visiting my Website "})}),Object(c.jsx)("ul",{className:"copyright",children:Object(c.jsxs)("li",{children:["Design by ",Object(c.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})})]}),Object(c.jsx)("div",{id:"go-top",children:Object(c.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(c.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),u=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.phone,n=this.props.data.email;return Object(c.jsx)("section",{id:"about",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"three columns",children:Object(c.jsx)("img",{className:"profile-pic",src:t,alt:"Noor Mir Profile Pic"})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:s}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"columns contact-details",children:[Object(c.jsx)("h2",{children:"Contact Details"}),Object(c.jsxs)("p",{className:"address",children:[Object(c.jsx)("span",{children:e}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:a}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:n})]})]})})]})]})})}}]),s}(a.Component),O=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.school}),Object(c.jsxs)("p",{className:"info",children:[e.degree," ",Object(c.jsx)("span",{children:"\u2022"}),Object(c.jsx)("em",{className:"date",children:e.graduated})]}),Object(c.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.company}),Object(c.jsxs)("p",{className:"info",children:[e.title,Object(c.jsx)("span",{children:"\u2022"})," ",Object(c.jsx)("em",{className:"date",children:e.years})]}),Object(c.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{width:e.level},className:t}),Object(c.jsx)("em",{children:e.name})]},e.name)}));return Object(c.jsxs)("section",{id:"resume",children:[Object(c.jsxs)("div",{className:"row education",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Education"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:Object(c.jsx)("div",{className:"row item",children:Object(c.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(c.jsxs)("div",{className:"row work",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Work"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(c.jsxs)("div",{className:"row skill",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Skills"})})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("div",{className:"bars",children:Object(c.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),s}(a.Component),x=s(6),p=function(e){var t=e.data,s=Object(a.useState)("noormir1295@gmail.com?subject=subject&body=body"),n=Object(x.a)(s,2),i=(n[0],n[1],Object(a.useState)("")),r=Object(x.a)(i,2),l=r[0],o=r[1],j=Object(a.useState)(""),d=Object(x.a)(j,2),h=d[0],b=d[1],m=Object(a.useState)(""),u=Object(x.a)(m,2),O=u[0],p=u[1],v=Object(a.useState)(""),f=Object(x.a)(v,2),N=f[0],g=f[1];console.log(t);return Object(c.jsxs)("section",{id:"contact",children:[Object(c.jsxs)("div",{className:"row section-head",children:[Object(c.jsx)("div",{className:"two columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Get In Touch."})})}),Object(c.jsx)("div",{className:"ten columns",children:Object(c.jsx)("p",{className:"lead",children:null===t||void 0===t?void 0:t.contactmessage})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"eight columns",children:[Object(c.jsx)("form",{id:"contactForm",name:"contactForm",children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{value:l,type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:function(e){return o(e.target.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{value:O,type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return p(e.target.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(c.jsx)("input",{value:h,type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return b(e.target.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("textarea",{value:N,onChange:function(e){return g(e.target.value)},cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),window.open("mailto:".concat(O,"?subject=").concat(h,"&body=").concat(l,": ").concat(N))},className:"submit",children:"Submit"}),Object(c.jsx)("span",{id:"image-loader",children:Object(c.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(c.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(c.jsxs)("div",{id:"message-success",children:[Object(c.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(c.jsx)("br",{})]})]}),Object(c.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(c.jsxs)("div",{className:"widget widget_contact",children:[Object(c.jsx)("h4",{children:"Address and Phone"}),Object(c.jsxs)("p",{className:"address",children:[null===t||void 0===t?void 0:t.name,Object(c.jsx)("br",{}),null===t||void 0===t?void 0:t.address.street," ",Object(c.jsx)("br",{}),null===t||void 0===t?void 0:t.address.city,", ",null===t||void 0===t?void 0:t.address.state," ",null===t||void 0===t?void 0:t.address.zip,Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:null===t||void 0===t?void 0:t.phone})]})]}),Object(c.jsx)("div",{className:"widget widget_tweets"})]})]})]})},v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(c.jsx)("div",{className:"columns portfolio-item",children:Object(c.jsx)("div",{className:"item-wrap",children:Object(c.jsxs)("a",{href:e.url,title:e.title,children:[Object(c.jsx)("img",{alt:e.title,src:t}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"portfolio-item-meta",children:[Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.category})]})}),Object(c.jsx)("div",{className:"link-icon",children:Object(c.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(c.jsx)("section",{id:"portfolio",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"twelve columns collapsed",children:[Object(c.jsx)("h1",{children:"Recent Works"}),Object(c.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},c}return Object(l.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{data:this.state.resumeData.main}),Object(c.jsx)(u,{data:this.state.resumeData.main}),Object(c.jsx)(O,{data:this.state.resumeData.resume}),Object(c.jsx)(v,{data:this.state.resumeData.portfolio}),Object(c.jsx)(p,{data:this.state.resumeData.main}),Object(c.jsx)(m,{data:this.state.resumeData.main})]})}}]),s}(a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(c.jsx)(f,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/main-portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/main-portfolio","/service-worker.js");N?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):g(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.dc004540.chunk.js.map