(function(e){function t(t){for(var n,a,u=t[0],i=t[1],p=t[2],c=0,f=[];c<u.length;c++)a=u[c],o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return l.push.apply(l,p||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var s=i;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"0bcc":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("874b")}}),n("Home")],1)},l=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Wordpress utils")]),r("p",[e._v("\n    A collection of utils for people who work with wordpress\n  ")]),r("DatabaseUrlReplace")],1)},u=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("1) Wordpress base URL database replace")]),r("p",[e._v("Change and Update WordPress URLS in Database When Site is Moved to new Host")]),r("div",[r("label",{attrs:{for:"prefix"}},[e._v(" Table Prefix ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.prefix,expression:"prefix"}],attrs:{id:"prefix",type:"text"},domProps:{value:e.prefix},on:{input:function(t){t.target.composing||(e.prefix=t.target.value)}}}),r("label",{attrs:{for:"orldurl"}},[e._v(" Old URL ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.oldurl,expression:"oldurl"}],attrs:{id:"oldurl",type:"text"},domProps:{value:e.oldurl},on:{input:function(t){t.target.composing||(e.oldurl=t.target.value)}}}),r("label",{attrs:{for:"newurl"}},[e._v(" New URL ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newurl,expression:"newurl"}],attrs:{id:"newurl",type:"text"},domProps:{value:e.newurl},on:{input:function(t){t.target.composing||(e.newurl=t.target.value)}}})]),r("div",[r("br"),r("pre",[e._v("UPDATE "+e._s(e.prefix)+"options SET option_value = replace(option_value, '"+e._s(e.oldurl)+"', '"+e._s(e.newurl)+"') WHERE option_name = 'home' OR option_name = 'siteurl';\nUPDATE "+e._s(e.prefix)+"posts SET guid = replace(guid, '"+e._s(e.oldurl)+"','"+e._s(e.newurl)+"');\nUPDATE "+e._s(e.prefix)+"posts SET post_content = replace(post_content, '"+e._s(e.oldurl)+"', '"+e._s(e.newurl)+"');\nUPDATE "+e._s(e.prefix)+"postmeta SET meta_value = replace(meta_value,'"+e._s(e.oldurl)+"','"+e._s(e.newurl)+"');\n            ")])])])},p=[],s={name:"databaseUrlReplace",data:function(){return{prefix:"wp_",oldurl:"http://orl.url",newurl:"http://new.url"}}},c=s,f=(r("d02b"),r("2877")),d=Object(f["a"])(c,i,p,!1,null,null,null);d.options.__file="DatabaseUrlReplace.vue";var v=d.exports,_={name:"Home",components:{DatabaseUrlReplace:v}},m=_,b=(r("cc2d"),Object(f["a"])(m,a,u,!1,null,"7d8637e8",null));b.options.__file="Home.vue";var w=b.exports,g={name:"app",components:{Home:w}},x=g,h=(r("034f"),Object(f["a"])(x,o,l,!1,null,null,null));h.options.__file="App.vue";var y=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,r){},"65c5":function(e,t,r){},"874b":function(e,t,r){e.exports=r.p+"img/wu-logo.c3fe05b4.png"},cc2d:function(e,t,r){"use strict";var n=r("0bcc"),o=r.n(n);o.a},d02b:function(e,t,r){"use strict";var n=r("65c5"),o=r.n(n);o.a}});
//# sourceMappingURL=app.bcb7eb05.js.map