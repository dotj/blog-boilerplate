(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{132:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(143),i=n(141);e.default=function(){return a.createElement(r.a,null,a.createElement(i.a,{title:"404: Not found"}),a.createElement("h1",null,"NOT FOUND"),a.createElement("p",null,"You just hit a route that doesn't exist. :("))}},137:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(136),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(138),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(28);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},138:function(t,e,n){var a;t.exports=(a=n(139))&&a.default||a},139:function(t,e,n){"use strict";n.r(e);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(46),c=n(2),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},140:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Typescript Starter Blog"}}}}},141:function(t,e,n){"use strict";var a=n(142),r=n(137),i=n(0),o=n(144),u=n.n(o),c=function(t){var e=t.description,n=t.lang,o=t.meta,c=t.keywords,l=t.title;return i.createElement(r.StaticQuery,{query:s,render:function(t){var a=e||t.site.siteMetadata.description;return i.createElement(u.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{content:a,name:"description"},{content:l,property:"og:title"},{content:a,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:t.site.siteMetadata.author,name:"twitter:creator"},{content:l,name:"twitter:title"},{content:a,name:"twitter:description"}].concat(c.length>0?{content:c.join(", "),name:"keywords"}:[]).concat(o)})},data:a})};c.defaultProps={keywords:[],lang:"en",meta:[]},e.a=c;var s="1025518380"},142:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Typescript Starter Blog",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},143:function(t,e,n){"use strict";var a=n(140),r=n(137),i=n(0),o=function(t){var e=t.siteTitle;return i.createElement("div",null,i.createElement("div",{style:{margin:"0 auto",maxWidth:"40rem",padding:"1.45rem 1.0875rem"}},i.createElement("h1",{style:{margin:0}},i.createElement(r.Link,{to:"/blog-boilerplate",style:{textDecoration:"none"}},e))))};o.defaultProps={siteTitle:""};var u=o;e.a=function(t){var e=t.children;return i.createElement(r.StaticQuery,{query:"755544856",render:function(t){return i.createElement("div",{style:{width:"100%",paddingTop:"2rem"}},i.createElement(u,{siteTitle:t.site.siteMetadata.title}),i.createElement("div",{style:{margin:"0 auto",maxWidth:"40rem",padding:"0px 1.0875rem 1.45rem"}},e))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-747deaefb630b6cf94cd.js.map