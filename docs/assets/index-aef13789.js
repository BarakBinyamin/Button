(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Pn(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function In(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=oe(r)?Bs(r):In(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(oe(e))return e;if(ne(e))return e}}const ks=/;(?![^(]*\))/g,Fs=/:([^]+)/,js=/\/\*.*?\*\//gs;function Bs(e){const t={};return e.replace(js,"").split(ks).forEach(n=>{if(n){const r=n.split(Fs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Rn(e){let t="";if(oe(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=Rn(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ms="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$s=Pn(Ms);function kr(e){return!!e||e===""}const J={},dt=[],Le=()=>{},Ns=()=>!1,Ds=/^on[^a-z]/,Wt=e=>Ds.test(e),Ln=e=>e.startsWith("onUpdate:"),ce=Object.assign,kn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Us=Object.prototype.hasOwnProperty,D=(e,t)=>Us.call(e,t),B=Array.isArray,wt=e=>zt(e)==="[object Map]",Hs=e=>zt(e)==="[object Set]",M=e=>typeof e=="function",oe=e=>typeof e=="string",Fn=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",Fr=e=>ne(e)&&M(e.then)&&M(e.catch),Vs=Object.prototype.toString,zt=e=>Vs.call(e),Ks=e=>zt(e).slice(8,-1),qs=e=>zt(e)==="[object Object]",jn=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mt=Pn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ws=/-(\w)/g,Ne=Yt(e=>e.replace(Ws,(t,n)=>n?n.toUpperCase():"")),zs=/\B([A-Z])/g,gt=Yt(e=>e.replace(zs,"-$1").toLowerCase()),Jt=Yt(e=>e.charAt(0).toUpperCase()+e.slice(1)),rn=Yt(e=>e?`on${Jt(e)}`:""),Ht=(e,t)=>!Object.is(e,t),sn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Vt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ys=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let er;const Js=()=>er||(er=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class Xs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Qs(e,t=Te){t&&t.active&&t.effects.push(e)}function Gs(){return Te}const Bn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},jr=e=>(e.w&Xe)>0,Br=e=>(e.n&Xe)>0,Zs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Xe},ei=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];jr(s)&&!Br(s)?s.delete(e):t[n++]=s,s.w&=~Xe,s.n&=~Xe}t.length=n}},mn=new WeakMap;let Et=0,Xe=1;const gn=30;let Pe;const ot=Symbol(""),yn=Symbol("");class Mn{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qs(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=Ye;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,Ye=!0,Xe=1<<++Et,Et<=gn?Zs(this):tr(this),this.fn()}finally{Et<=gn&&ei(this),Xe=1<<--Et,Pe=this.parent,Ye=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(tr(this),this.onStop&&this.onStop(),this.active=!1)}}function tr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ye=!0;const Mr=[];function yt(){Mr.push(Ye),Ye=!1}function bt(){const e=Mr.pop();Ye=e===void 0?!0:e}function me(e,t,n){if(Ye&&Pe){let r=mn.get(e);r||mn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Bn()),$r(s)}}function $r(e,t){let n=!1;Et<=gn?Br(e)||(e.n|=Xe,n=!jr(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function Ve(e,t,n,r,s,i){const o=mn.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&B(e)){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p>=u)&&l.push(f)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":B(e)?jn(n)&&l.push(o.get("length")):(l.push(o.get(ot)),wt(e)&&l.push(o.get(yn)));break;case"delete":B(e)||(l.push(o.get(ot)),wt(e)&&l.push(o.get(yn)));break;case"set":wt(e)&&l.push(o.get(ot));break}if(l.length===1)l[0]&&bn(l[0]);else{const u=[];for(const f of l)f&&u.push(...f);bn(Bn(u))}}function bn(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&nr(r);for(const r of n)r.computed||nr(r)}function nr(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ti=Pn("__proto__,__v_isRef,__isVue"),Nr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fn)),ni=$n(),ri=$n(!1,!0),si=$n(!0),rr=ii();function ii(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){yt();const r=V(this)[t].apply(this,n);return bt(),r}}),e}function oi(e){const t=V(this);return me(t,"has",e),t.hasOwnProperty(e)}function $n(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?wi:Kr:t?Vr:Hr).get(r))return r;const o=B(r);if(!e){if(o&&D(rr,s))return Reflect.get(rr,s,i);if(s==="hasOwnProperty")return oi}const l=Reflect.get(r,s,i);return(Fn(s)?Nr.has(s):ti(s))||(e||me(r,"get",s),t)?l:de(l)?o&&jn(s)?l:l.value:ne(l)?e?qr(l):Un(l):l}}const li=Dr(),ci=Dr(!0);function Dr(e=!1){return function(n,r,s,i){let o=n[r];if(St(o)&&de(o)&&!de(s))return!1;if(!e&&(!vn(s)&&!St(s)&&(o=V(o),s=V(s)),!B(n)&&de(o)&&!de(s)))return o.value=s,!0;const l=B(n)&&jn(r)?Number(r)<n.length:D(n,r),u=Reflect.set(n,r,s,i);return n===V(i)&&(l?Ht(s,o)&&Ve(n,"set",r,s):Ve(n,"add",r,s)),u}}function ai(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ve(e,"delete",t,void 0),r}function ui(e,t){const n=Reflect.has(e,t);return(!Fn(t)||!Nr.has(t))&&me(e,"has",t),n}function fi(e){return me(e,"iterate",B(e)?"length":ot),Reflect.ownKeys(e)}const Ur={get:ni,set:li,deleteProperty:ai,has:ui,ownKeys:fi},di={get:si,set(e,t){return!0},deleteProperty(e,t){return!0}},pi=ce({},Ur,{get:ri,set:ci}),Nn=e=>e,Xt=e=>Reflect.getPrototypeOf(e);function Rt(e,t,n=!1,r=!1){e=e.__v_raw;const s=V(e),i=V(t);n||(t!==i&&me(s,"get",t),me(s,"get",i));const{has:o}=Xt(s),l=r?Nn:n?Kn:Vn;if(o.call(s,t))return l(e.get(t));if(o.call(s,i))return l(e.get(i));e!==s&&e.get(t)}function Lt(e,t=!1){const n=this.__v_raw,r=V(n),s=V(e);return t||(e!==s&&me(r,"has",e),me(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function kt(e,t=!1){return e=e.__v_raw,!t&&me(V(e),"iterate",ot),Reflect.get(e,"size",e)}function sr(e){e=V(e);const t=V(this);return Xt(t).has.call(t,e)||(t.add(e),Ve(t,"add",e,e)),this}function ir(e,t){t=V(t);const n=V(this),{has:r,get:s}=Xt(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Ht(t,o)&&Ve(n,"set",e,t):Ve(n,"add",e,t),this}function or(e){const t=V(this),{has:n,get:r}=Xt(t);let s=n.call(t,e);s||(e=V(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&Ve(t,"delete",e,void 0),i}function lr(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Ve(e,"clear",void 0,void 0),n}function Ft(e,t){return function(r,s){const i=this,o=i.__v_raw,l=V(o),u=t?Nn:e?Kn:Vn;return!e&&me(l,"iterate",ot),o.forEach((f,p)=>r.call(s,u(f),u(p),i))}}function jt(e,t,n){return function(...r){const s=this.__v_raw,i=V(s),o=wt(i),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,f=s[e](...r),p=n?Nn:t?Kn:Vn;return!t&&me(i,"iterate",u?yn:ot),{next(){const{value:_,done:v}=f.next();return v?{value:_,done:v}:{value:l?[p(_[0]),p(_[1])]:p(_),done:v}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function hi(){const e={get(i){return Rt(this,i)},get size(){return kt(this)},has:Lt,add:sr,set:ir,delete:or,clear:lr,forEach:Ft(!1,!1)},t={get(i){return Rt(this,i,!1,!0)},get size(){return kt(this)},has:Lt,add:sr,set:ir,delete:or,clear:lr,forEach:Ft(!1,!0)},n={get(i){return Rt(this,i,!0)},get size(){return kt(this,!0)},has(i){return Lt.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Ft(!0,!1)},r={get(i){return Rt(this,i,!0,!0)},get size(){return kt(this,!0)},has(i){return Lt.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Ft(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=jt(i,!1,!1),n[i]=jt(i,!0,!1),t[i]=jt(i,!1,!0),r[i]=jt(i,!0,!0)}),[e,n,t,r]}const[mi,gi,yi,bi]=hi();function Dn(e,t){const n=t?e?bi:yi:e?gi:mi;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(D(n,s)&&s in r?n:r,s,i)}const vi={get:Dn(!1,!1)},_i={get:Dn(!1,!0)},Ei={get:Dn(!0,!1)},Hr=new WeakMap,Vr=new WeakMap,Kr=new WeakMap,wi=new WeakMap;function Ai(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ai(Ks(e))}function Un(e){return St(e)?e:Hn(e,!1,Ur,vi,Hr)}function Si(e){return Hn(e,!1,pi,_i,Vr)}function qr(e){return Hn(e,!0,di,Ei,Kr)}function Hn(e,t,n,r,s){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=xi(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return s.set(e,l),l}function pt(e){return St(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function vn(e){return!!(e&&e.__v_isShallow)}function Wr(e){return pt(e)||St(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function zr(e){return Vt(e,"__v_skip",!0),e}const Vn=e=>ne(e)?Un(e):e,Kn=e=>ne(e)?qr(e):e;function Ci(e){Ye&&Pe&&(e=V(e),$r(e.dep||(e.dep=Bn())))}function Ti(e,t){e=V(e);const n=e.dep;n&&bn(n)}function de(e){return!!(e&&e.__v_isRef===!0)}function Oi(e){return de(e)?e.value:e}const Pi={get:(e,t,n)=>Oi(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Yr(e){return pt(e)?e:new Proxy(e,Pi)}var Jr;class Ii{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Jr]=!1,this._dirty=!0,this.effect=new Mn(t,()=>{this._dirty||(this._dirty=!0,Ti(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=V(this);return Ci(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Jr="__v_isReadonly";function Ri(e,t,n=!1){let r,s;const i=M(e);return i?(r=e,s=Le):(r=e.get,s=e.set),new Ii(r,s,i||!s,n)}function Je(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Qt(i,t,n)}return s}function Ae(e,t,n,r){if(M(e)){const i=Je(e,t,n,r);return i&&Fr(i)&&i.catch(o=>{Qt(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Ae(e[i],t,n,r));return s}function Qt(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,l=n;for(;i;){const f=i.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,o,l)===!1)return}i=i.parent}const u=t.appContext.config.errorHandler;if(u){Je(u,null,10,[e,o,l]);return}}Li(e,n,s,r)}function Li(e,t,n,r=!0){console.error(e)}let Ct=!1,_n=!1;const le=[];let $e=0;const ht=[];let He=null,rt=0;const Xr=Promise.resolve();let qn=null;function ki(e){const t=qn||Xr;return e?t.then(this?e.bind(this):e):t}function Fi(e){let t=$e+1,n=le.length;for(;t<n;){const r=t+n>>>1;Tt(le[r])<e?t=r+1:n=r}return t}function Wn(e){(!le.length||!le.includes(e,Ct&&e.allowRecurse?$e+1:$e))&&(e.id==null?le.push(e):le.splice(Fi(e.id),0,e),Qr())}function Qr(){!Ct&&!_n&&(_n=!0,qn=Xr.then(Zr))}function ji(e){const t=le.indexOf(e);t>$e&&le.splice(t,1)}function Bi(e){B(e)?ht.push(...e):(!He||!He.includes(e,e.allowRecurse?rt+1:rt))&&ht.push(e),Qr()}function cr(e,t=Ct?$e+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function Gr(e){if(ht.length){const t=[...new Set(ht)];if(ht.length=0,He){He.push(...t);return}for(He=t,He.sort((n,r)=>Tt(n)-Tt(r)),rt=0;rt<He.length;rt++)He[rt]();He=null,rt=0}}const Tt=e=>e.id==null?1/0:e.id,Mi=(e,t)=>{const n=Tt(e)-Tt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Zr(e){_n=!1,Ct=!0,le.sort(Mi);const t=Le;try{for($e=0;$e<le.length;$e++){const n=le[$e];n&&n.active!==!1&&Je(n,null,14)}}finally{$e=0,le.length=0,Gr(),Ct=!1,qn=null,(le.length||ht.length)&&Zr()}}function $i(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:_,trim:v}=r[p]||J;v&&(s=n.map(R=>oe(R)?R.trim():R)),_&&(s=n.map(Ys))}let l,u=r[l=rn(t)]||r[l=rn(Ne(t))];!u&&i&&(u=r[l=rn(gt(t))]),u&&Ae(u,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ae(f,e,6,s)}}function es(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},l=!1;if(!M(e)){const u=f=>{const p=es(f,t,!0);p&&(l=!0,ce(o,p))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(ne(e)&&r.set(e,null),null):(B(i)?i.forEach(u=>o[u]=null):ce(o,i),ne(e)&&r.set(e,o),o)}function Gt(e,t){return!e||!Wt(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,gt(t))||D(e,t))}let we=null,ts=null;function Kt(e){const t=we;return we=e,ts=e&&e.type.__scopeId||null,t}function Ni(e,t=we,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&br(-1);const i=Kt(t);let o;try{o=e(...s)}finally{Kt(i),r._d&&br(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function on(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:u,emit:f,render:p,renderCache:_,data:v,setupState:R,ctx:N,inheritAttrs:I}=e;let U,H;const re=Kt(e);try{if(n.shapeFlag&4){const W=s||r;U=Me(p.call(W,W,_,i,R,v,N)),H=u}else{const W=t;U=Me(W.length>1?W(i,{attrs:u,slots:l,emit:f}):W(i,null)),H=t.props?u:Di(u)}}catch(W){xt.length=0,Qt(W,e,1),U=Fe(ke)}let L=U;if(H&&I!==!1){const W=Object.keys(H),{shapeFlag:ee}=L;W.length&&ee&7&&(o&&W.some(Ln)&&(H=Ui(H,o)),L=Qe(L,H))}return n.dirs&&(L=Qe(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),U=L,Kt(re),U}const Di=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wt(n))&&((t||(t={}))[n]=e[n]);return t},Ui=(e,t)=>{const n={};for(const r in e)(!Ln(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Hi(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:l,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?ar(r,o,f):!!o;if(u&8){const p=t.dynamicProps;for(let _=0;_<p.length;_++){const v=p[_];if(o[v]!==r[v]&&!Gt(f,v))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?ar(r,o,f):!0:!!o;return!1}function ar(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Gt(n,i))return!0}return!1}function Vi({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ki=e=>e.__isSuspense;function qi(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Bi(e)}function Wi(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function $t(e,t,n=!1){const r=Z||we;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&M(t)?t.call(r.proxy):t}}const Bt={};function ln(e,t,n){return ns(e,t,n)}function ns(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=J){const l=Gs()===(Z==null?void 0:Z.scope)?Z:null;let u,f=!1,p=!1;if(de(e)?(u=()=>e.value,f=vn(e)):pt(e)?(u=()=>e,r=!0):B(e)?(p=!0,f=e.some(L=>pt(L)||vn(L)),u=()=>e.map(L=>{if(de(L))return L.value;if(pt(L))return ft(L);if(M(L))return Je(L,l,2)})):M(e)?t?u=()=>Je(e,l,2):u=()=>{if(!(l&&l.isUnmounted))return _&&_(),Ae(e,l,3,[v])}:u=Le,t&&r){const L=u;u=()=>ft(L())}let _,v=L=>{_=H.onStop=()=>{Je(L,l,4)}},R;if(Pt)if(v=Le,t?n&&Ae(t,l,3,[u(),p?[]:void 0,v]):u(),s==="sync"){const L=Yo();R=L.__watcherHandles||(L.__watcherHandles=[])}else return Le;let N=p?new Array(e.length).fill(Bt):Bt;const I=()=>{if(H.active)if(t){const L=H.run();(r||f||(p?L.some((W,ee)=>Ht(W,N[ee])):Ht(L,N)))&&(_&&_(),Ae(t,l,3,[L,N===Bt?void 0:p&&N[0]===Bt?[]:N,v]),N=L)}else H.run()};I.allowRecurse=!!t;let U;s==="sync"?U=I:s==="post"?U=()=>he(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),U=()=>Wn(I));const H=new Mn(u,U);t?n?I():N=H.run():s==="post"?he(H.run.bind(H),l&&l.suspense):H.run();const re=()=>{H.stop(),l&&l.scope&&kn(l.scope.effects,H)};return R&&R.push(re),re}function zi(e,t,n){const r=this.proxy,s=oe(e)?e.includes(".")?rs(r,e):()=>r[e]:e.bind(r,r);let i;M(t)?i=t:(i=t.handler,n=t);const o=Z;mt(this);const l=ns(s,i.bind(r),n);return o?mt(o):lt(),l}function rs(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ft(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))ft(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)ft(e[n],t);else if(Hs(e)||wt(e))e.forEach(n=>{ft(n,t)});else if(qs(e))for(const n in e)ft(e[n],t);return e}function Yi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ls(()=>{e.isMounted=!0}),cs(()=>{e.isUnmounting=!0}),e}const Ee=[Function,Array],Ji={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ee,onEnter:Ee,onAfterEnter:Ee,onEnterCancelled:Ee,onBeforeLeave:Ee,onLeave:Ee,onAfterLeave:Ee,onLeaveCancelled:Ee,onBeforeAppear:Ee,onAppear:Ee,onAfterAppear:Ee,onAppearCancelled:Ee},setup(e,{slots:t}){const n=No(),r=Yi();let s;return()=>{const i=t.default&&is(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==ke){o=I;break}}const l=V(e),{mode:u}=l;if(r.isLeaving)return cn(o);const f=ur(o);if(!f)return cn(o);const p=En(f,l,r,n);wn(f,p);const _=n.subTree,v=_&&ur(_);let R=!1;const{getTransitionKey:N}=f.type;if(N){const I=N();s===void 0?s=I:I!==s&&(s=I,R=!0)}if(v&&v.type!==ke&&(!st(f,v)||R)){const I=En(v,l,r,n);if(wn(v,I),u==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},cn(o);u==="in-out"&&f.type!==ke&&(I.delayLeave=(U,H,re)=>{const L=ss(r,v);L[String(v.key)]=v,U._leaveCb=()=>{H(),U._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=re})}return o}}},Xi=Ji;function ss(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function En(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:_,onLeave:v,onAfterLeave:R,onLeaveCancelled:N,onBeforeAppear:I,onAppear:U,onAfterAppear:H,onAppearCancelled:re}=t,L=String(e.key),W=ss(n,e),ee=(j,X)=>{j&&Ae(j,r,9,X)},xe=(j,X)=>{const Y=X[1];ee(j,X),B(j)?j.every(ue=>ue.length<=1)&&Y():j.length<=1&&Y()},ae={mode:i,persisted:o,beforeEnter(j){let X=l;if(!n.isMounted)if(s)X=I||l;else return;j._leaveCb&&j._leaveCb(!0);const Y=W[L];Y&&st(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),ee(X,[j])},enter(j){let X=u,Y=f,ue=p;if(!n.isMounted)if(s)X=U||u,Y=H||f,ue=re||p;else return;let pe=!1;const ge=j._enterCb=De=>{pe||(pe=!0,De?ee(ue,[j]):ee(Y,[j]),ae.delayedLeave&&ae.delayedLeave(),j._enterCb=void 0)};X?xe(X,[j,ge]):ge()},leave(j,X){const Y=String(e.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return X();ee(_,[j]);let ue=!1;const pe=j._leaveCb=ge=>{ue||(ue=!0,X(),ge?ee(N,[j]):ee(R,[j]),j._leaveCb=void 0,W[Y]===e&&delete W[Y])};W[Y]=e,v?xe(v,[j,pe]):pe()},clone(j){return En(j,t,n,r)}};return ae}function cn(e){if(Zt(e))return e=Qe(e),e.children=null,e}function ur(e){return Zt(e)?e.children?e.children[0]:void 0:e}function wn(e,t){e.shapeFlag&6&&e.component?wn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function is(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Oe?(o.patchFlag&128&&s++,r=r.concat(is(o.children,t,l))):(t||o.type!==ke)&&r.push(l!=null?Qe(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const Nt=e=>!!e.type.__asyncLoader,Zt=e=>e.type.__isKeepAlive;function Qi(e,t){os(e,"a",t)}function Gi(e,t){os(e,"da",t)}function os(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(en(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Zt(s.parent.vnode)&&Zi(r,t,n,s),s=s.parent}}function Zi(e,t,n,r){const s=en(t,e,r,!0);as(()=>{kn(r[t],s)},n)}function en(e,t,n=Z,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;yt(),mt(n);const l=Ae(t,n,e,o);return lt(),bt(),l});return r?s.unshift(i):s.push(i),i}}const Ke=e=>(t,n=Z)=>(!Pt||e==="sp")&&en(e,(...r)=>t(...r),n),eo=Ke("bm"),ls=Ke("m"),to=Ke("bu"),no=Ke("u"),cs=Ke("bum"),as=Ke("um"),ro=Ke("sp"),so=Ke("rtg"),io=Ke("rtc");function oo(e,t=Z){en("ec",e,t)}function Ze(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let u=l.dir[r];u&&(yt(),Ae(u,n,8,[e.el,l,e,t]),bt())}}const us="components";function lo(e,t){return ao(us,e,!0,t)||e}const co=Symbol();function ao(e,t,n=!0,r=!1){const s=we||Z;if(s){const i=s.type;if(e===us){const l=Ko(i,!1);if(l&&(l===t||l===Ne(t)||l===Jt(Ne(t))))return i}const o=fr(s[e]||i[e],t)||fr(s.appContext[e],t);return!o&&r?i:o}}function fr(e,t){return e&&(e[t]||e[Ne(t)]||e[Jt(Ne(t))])}const An=e=>e?ws(e)?Xn(e)||e.proxy:An(e.parent):null,At=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>An(e.parent),$root:e=>An(e.root),$emit:e=>e.emit,$options:e=>zn(e),$forceUpdate:e=>e.f||(e.f=()=>Wn(e.update)),$nextTick:e=>e.n||(e.n=ki.bind(e.proxy)),$watch:e=>zi.bind(e)}),an=(e,t)=>e!==J&&!e.__isScriptSetup&&D(e,t),uo={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:u}=e;let f;if(t[0]!=="$"){const R=o[t];if(R!==void 0)switch(R){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(an(r,t))return o[t]=1,r[t];if(s!==J&&D(s,t))return o[t]=2,s[t];if((f=e.propsOptions[0])&&D(f,t))return o[t]=3,i[t];if(n!==J&&D(n,t))return o[t]=4,n[t];xn&&(o[t]=0)}}const p=At[t];let _,v;if(p)return t==="$attrs"&&me(e,"get",t),p(e);if((_=l.__cssModules)&&(_=_[t]))return _;if(n!==J&&D(n,t))return o[t]=4,n[t];if(v=u.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return an(s,t)?(s[t]=n,!0):r!==J&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||e!==J&&D(e,o)||an(t,o)||(l=i[0])&&D(l,o)||D(r,o)||D(At,o)||D(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xn=!0;function fo(e){const t=zn(e),n=e.proxy,r=e.ctx;xn=!1,t.beforeCreate&&dr(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:l,provide:u,inject:f,created:p,beforeMount:_,mounted:v,beforeUpdate:R,updated:N,activated:I,deactivated:U,beforeDestroy:H,beforeUnmount:re,destroyed:L,unmounted:W,render:ee,renderTracked:xe,renderTriggered:ae,errorCaptured:j,serverPrefetch:X,expose:Y,inheritAttrs:ue,components:pe,directives:ge,filters:De}=t;if(f&&po(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const h in o){const S=o[h];M(S)&&(r[h]=S.bind(n))}if(s){const h=s.call(n,n);ne(h)&&(e.data=Un(h))}if(xn=!0,i)for(const h in i){const S=i[h],F=M(S)?S.bind(n,n):M(S.get)?S.get.bind(n,n):Le,T=!M(S)&&M(S.set)?S.set.bind(n):Le,Q=Wo({get:F,set:T});Object.defineProperty(r,h,{enumerable:!0,configurable:!0,get:()=>Q.value,set:se=>Q.value=se})}if(l)for(const h in l)fs(l[h],r,n,h);if(u){const h=M(u)?u.call(n):u;Reflect.ownKeys(h).forEach(S=>{Wi(S,h[S])})}p&&dr(p,e,"c");function y(h,S){B(S)?S.forEach(F=>h(F.bind(n))):S&&h(S.bind(n))}if(y(eo,_),y(ls,v),y(to,R),y(no,N),y(Qi,I),y(Gi,U),y(oo,j),y(io,xe),y(so,ae),y(cs,re),y(as,W),y(ro,X),B(Y))if(Y.length){const h=e.exposed||(e.exposed={});Y.forEach(S=>{Object.defineProperty(h,S,{get:()=>n[S],set:F=>n[S]=F})})}else e.exposed||(e.exposed={});ee&&e.render===Le&&(e.render=ee),ue!=null&&(e.inheritAttrs=ue),pe&&(e.components=pe),ge&&(e.directives=ge)}function po(e,t,n=Le,r=!1){B(e)&&(e=Sn(e));for(const s in e){const i=e[s];let o;ne(i)?"default"in i?o=$t(i.from||s,i.default,!0):o=$t(i.from||s):o=$t(i),de(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):t[s]=o}}function dr(e,t,n){Ae(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fs(e,t,n,r){const s=r.includes(".")?rs(n,r):()=>n[r];if(oe(e)){const i=t[e];M(i)&&ln(s,i)}else if(M(e))ln(s,e.bind(n));else if(ne(e))if(B(e))e.forEach(i=>fs(i,t,n,r));else{const i=M(e.handler)?e.handler.bind(n):t[e.handler];M(i)&&ln(s,i,e)}}function zn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>qt(u,f,o,!0)),qt(u,t,o)),ne(t)&&i.set(t,u),u}function qt(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&qt(e,i,n,!0),s&&s.forEach(o=>qt(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=ho[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const ho={data:pr,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:nt,directives:nt,watch:go,provide:pr,inject:mo};function pr(e,t){return t?e?function(){return ce(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function mo(e,t){return nt(Sn(e),Sn(t))}function Sn(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?ce(ce(Object.create(null),e),t):t}function go(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function yo(e,t,n,r=!1){const s={},i={};Vt(i,nn,1),e.propsDefaults=Object.create(null),ds(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Si(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function bo(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,l=V(s),[u]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=e.vnode.dynamicProps;for(let _=0;_<p.length;_++){let v=p[_];if(Gt(e.emitsOptions,v))continue;const R=t[v];if(u)if(D(i,v))R!==i[v]&&(i[v]=R,f=!0);else{const N=Ne(v);s[N]=Cn(u,l,N,R,e,!1)}else R!==i[v]&&(i[v]=R,f=!0)}}}else{ds(e,t,s,i)&&(f=!0);let p;for(const _ in l)(!t||!D(t,_)&&((p=gt(_))===_||!D(t,p)))&&(u?n&&(n[_]!==void 0||n[p]!==void 0)&&(s[_]=Cn(u,l,_,void 0,e,!0)):delete s[_]);if(i!==l)for(const _ in i)(!t||!D(t,_))&&(delete i[_],f=!0)}f&&Ve(e,"set","$attrs")}function ds(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(Mt(u))continue;const f=t[u];let p;s&&D(s,p=Ne(u))?!i||!i.includes(p)?n[p]=f:(l||(l={}))[p]=f:Gt(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,o=!0)}if(i){const u=V(n),f=l||J;for(let p=0;p<i.length;p++){const _=i[p];n[_]=Cn(s,u,_,f[_],e,!D(f,_))}}return o}function Cn(e,t,n,r,s,i){const o=e[n];if(o!=null){const l=D(o,"default");if(l&&r===void 0){const u=o.default;if(o.type!==Function&&M(u)){const{propsDefaults:f}=s;n in f?r=f[n]:(mt(s),r=f[n]=u.call(null,t),lt())}else r=u}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===gt(n))&&(r=!0))}return r}function ps(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},l=[];let u=!1;if(!M(e)){const p=_=>{u=!0;const[v,R]=ps(_,t,!0);ce(o,v),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!u)return ne(e)&&r.set(e,dt),dt;if(B(i))for(let p=0;p<i.length;p++){const _=Ne(i[p]);hr(_)&&(o[_]=J)}else if(i)for(const p in i){const _=Ne(p);if(hr(_)){const v=i[p],R=o[_]=B(v)||M(v)?{type:v}:Object.assign({},v);if(R){const N=yr(Boolean,R.type),I=yr(String,R.type);R[0]=N>-1,R[1]=I<0||N<I,(N>-1||D(R,"default"))&&l.push(_)}}}const f=[o,l];return ne(e)&&r.set(e,f),f}function hr(e){return e[0]!=="$"}function mr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function gr(e,t){return mr(e)===mr(t)}function yr(e,t){return B(t)?t.findIndex(n=>gr(n,e)):M(t)&&gr(t,e)?0:-1}const hs=e=>e[0]==="_"||e==="$stable",Yn=e=>B(e)?e.map(Me):[Me(e)],vo=(e,t,n)=>{if(t._n)return t;const r=Ni((...s)=>Yn(t(...s)),n);return r._c=!1,r},ms=(e,t,n)=>{const r=e._ctx;for(const s in e){if(hs(s))continue;const i=e[s];if(M(i))t[s]=vo(s,i,r);else if(i!=null){const o=Yn(i);t[s]=()=>o}}},gs=(e,t)=>{const n=Yn(t);e.slots.default=()=>n},_o=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Vt(t,"_",n)):ms(t,e.slots={})}else e.slots={},t&&gs(e,t);Vt(e.slots,nn,1)},Eo=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=J;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(ce(s,t),!n&&l===1&&delete s._):(i=!t.$stable,ms(t,s)),o=t}else t&&(gs(e,t),o={default:1});if(i)for(const l in s)!hs(l)&&!(l in o)&&delete s[l]};function ys(){return{app:null,config:{isNativeTag:Ns,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wo=0;function Ao(e,t){return function(r,s=null){M(r)||(r=Object.assign({},r)),s!=null&&!ne(s)&&(s=null);const i=ys(),o=new Set;let l=!1;const u=i.app={_uid:wo++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jo,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&M(f.install)?(o.add(f),f.install(u,...p)):M(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,_){if(!l){const v=Fe(r,s);return v.appContext=i,p&&t?t(v,f):e(v,f,_),l=!0,u._container=f,f.__vue_app__=u,Xn(v.component)||v.component.proxy}},unmount(){l&&(e(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u}};return u}}function Tn(e,t,n,r,s=!1){if(B(e)){e.forEach((v,R)=>Tn(v,t&&(B(t)?t[R]:t),n,r,s));return}if(Nt(r)&&!s)return;const i=r.shapeFlag&4?Xn(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:u}=e,f=t&&t.r,p=l.refs===J?l.refs={}:l.refs,_=l.setupState;if(f!=null&&f!==u&&(oe(f)?(p[f]=null,D(_,f)&&(_[f]=null)):de(f)&&(f.value=null)),M(u))Je(u,l,12,[o,p]);else{const v=oe(u),R=de(u);if(v||R){const N=()=>{if(e.f){const I=v?D(_,u)?_[u]:p[u]:u.value;s?B(I)&&kn(I,i):B(I)?I.includes(i)||I.push(i):v?(p[u]=[i],D(_,u)&&(_[u]=p[u])):(u.value=[i],e.k&&(p[e.k]=u.value))}else v?(p[u]=o,D(_,u)&&(_[u]=o)):R&&(u.value=o,e.k&&(p[e.k]=o))};o?(N.id=-1,he(N,n)):N()}}}const he=qi;function xo(e){return So(e)}function So(e,t){const n=Js();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:u,setText:f,setElementText:p,parentNode:_,nextSibling:v,setScopeId:R=Le,insertStaticContent:N}=e,I=(c,a,d,g=null,m=null,w=null,x=!1,E=null,A=!!a.dynamicChildren)=>{if(c===a)return;c&&!st(c,a)&&(g=_e(c),se(c,m,w,!0),c=null),a.patchFlag===-2&&(A=!1,a.dynamicChildren=null);const{type:b,ref:O,shapeFlag:C}=a;switch(b){case tn:U(c,a,d,g);break;case ke:H(c,a,d,g);break;case Dt:c==null&&re(a,d,g,x);break;case Oe:pe(c,a,d,g,m,w,x,E,A);break;default:C&1?ee(c,a,d,g,m,w,x,E,A):C&6?ge(c,a,d,g,m,w,x,E,A):(C&64||C&128)&&b.process(c,a,d,g,m,w,x,E,A,ye)}O!=null&&m&&Tn(O,c&&c.ref,w,a||c,!a)},U=(c,a,d,g)=>{if(c==null)r(a.el=l(a.children),d,g);else{const m=a.el=c.el;a.children!==c.children&&f(m,a.children)}},H=(c,a,d,g)=>{c==null?r(a.el=u(a.children||""),d,g):a.el=c.el},re=(c,a,d,g)=>{[c.el,c.anchor]=N(c.children,a,d,g,c.el,c.anchor)},L=({el:c,anchor:a},d,g)=>{let m;for(;c&&c!==a;)m=v(c),r(c,d,g),c=m;r(a,d,g)},W=({el:c,anchor:a})=>{let d;for(;c&&c!==a;)d=v(c),s(c),c=d;s(a)},ee=(c,a,d,g,m,w,x,E,A)=>{x=x||a.type==="svg",c==null?xe(a,d,g,m,w,x,E,A):X(c,a,m,w,x,E,A)},xe=(c,a,d,g,m,w,x,E)=>{let A,b;const{type:O,props:C,shapeFlag:P,transition:k,dirs:$}=c;if(A=c.el=o(c.type,w,C&&C.is,C),P&8?p(A,c.children):P&16&&j(c.children,A,null,g,m,w&&O!=="foreignObject",x,E),$&&Ze(c,null,g,"created"),ae(A,c,c.scopeId,x,g),C){for(const K in C)K!=="value"&&!Mt(K)&&i(A,K,null,C[K],w,c.children,g,m,G);"value"in C&&i(A,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Be(b,g,c)}$&&Ze(c,null,g,"beforeMount");const z=(!m||m&&!m.pendingBranch)&&k&&!k.persisted;z&&k.beforeEnter(A),r(A,a,d),((b=C&&C.onVnodeMounted)||z||$)&&he(()=>{b&&Be(b,g,c),z&&k.enter(A),$&&Ze(c,null,g,"mounted")},m)},ae=(c,a,d,g,m)=>{if(d&&R(c,d),g)for(let w=0;w<g.length;w++)R(c,g[w]);if(m){let w=m.subTree;if(a===w){const x=m.vnode;ae(c,x,x.scopeId,x.slotScopeIds,m.parent)}}},j=(c,a,d,g,m,w,x,E,A=0)=>{for(let b=A;b<c.length;b++){const O=c[b]=E?ze(c[b]):Me(c[b]);I(null,O,a,d,g,m,w,x,E)}},X=(c,a,d,g,m,w,x)=>{const E=a.el=c.el;let{patchFlag:A,dynamicChildren:b,dirs:O}=a;A|=c.patchFlag&16;const C=c.props||J,P=a.props||J;let k;d&&et(d,!1),(k=P.onVnodeBeforeUpdate)&&Be(k,d,a,c),O&&Ze(a,c,d,"beforeUpdate"),d&&et(d,!0);const $=m&&a.type!=="foreignObject";if(b?Y(c.dynamicChildren,b,E,d,g,$,w):x||S(c,a,E,null,d,g,$,w,!1),A>0){if(A&16)ue(E,a,C,P,d,g,m);else if(A&2&&C.class!==P.class&&i(E,"class",null,P.class,m),A&4&&i(E,"style",C.style,P.style,m),A&8){const z=a.dynamicProps;for(let K=0;K<z.length;K++){const te=z[K],Ce=C[te],at=P[te];(at!==Ce||te==="value")&&i(E,te,Ce,at,m,c.children,d,g,G)}}A&1&&c.children!==a.children&&p(E,a.children)}else!x&&b==null&&ue(E,a,C,P,d,g,m);((k=P.onVnodeUpdated)||O)&&he(()=>{k&&Be(k,d,a,c),O&&Ze(a,c,d,"updated")},g)},Y=(c,a,d,g,m,w,x)=>{for(let E=0;E<a.length;E++){const A=c[E],b=a[E],O=A.el&&(A.type===Oe||!st(A,b)||A.shapeFlag&70)?_(A.el):d;I(A,b,O,null,g,m,w,x,!0)}},ue=(c,a,d,g,m,w,x)=>{if(d!==g){if(d!==J)for(const E in d)!Mt(E)&&!(E in g)&&i(c,E,d[E],null,x,a.children,m,w,G);for(const E in g){if(Mt(E))continue;const A=g[E],b=d[E];A!==b&&E!=="value"&&i(c,E,b,A,x,a.children,m,w,G)}"value"in g&&i(c,"value",d.value,g.value)}},pe=(c,a,d,g,m,w,x,E,A)=>{const b=a.el=c?c.el:l(""),O=a.anchor=c?c.anchor:l("");let{patchFlag:C,dynamicChildren:P,slotScopeIds:k}=a;k&&(E=E?E.concat(k):k),c==null?(r(b,d,g),r(O,d,g),j(a.children,d,O,m,w,x,E,A)):C>0&&C&64&&P&&c.dynamicChildren?(Y(c.dynamicChildren,P,d,m,w,x,E),(a.key!=null||m&&a===m.subTree)&&bs(c,a,!0)):S(c,a,d,O,m,w,x,E,A)},ge=(c,a,d,g,m,w,x,E,A)=>{a.slotScopeIds=E,c==null?a.shapeFlag&512?m.ctx.activate(a,d,g,x,A):De(a,d,g,m,w,x,A):vt(c,a,A)},De=(c,a,d,g,m,w,x)=>{const E=c.component=$o(c,g,m);if(Zt(c)&&(E.ctx.renderer=ye),Do(E),E.asyncDep){if(m&&m.registerDep(E,y),!c.el){const A=E.subTree=Fe(ke);H(null,A,a,d)}return}y(E,c,a,d,m,w,x)},vt=(c,a,d)=>{const g=a.component=c.component;if(Hi(c,a,d))if(g.asyncDep&&!g.asyncResolved){h(g,a,d);return}else g.next=a,ji(g.update),g.update();else a.el=c.el,g.vnode=a},y=(c,a,d,g,m,w,x)=>{const E=()=>{if(c.isMounted){let{next:O,bu:C,u:P,parent:k,vnode:$}=c,z=O,K;et(c,!1),O?(O.el=$.el,h(c,O,x)):O=$,C&&sn(C),(K=O.props&&O.props.onVnodeBeforeUpdate)&&Be(K,k,O,$),et(c,!0);const te=on(c),Ce=c.subTree;c.subTree=te,I(Ce,te,_(Ce.el),_e(Ce),c,m,w),O.el=te.el,z===null&&Vi(c,te.el),P&&he(P,m),(K=O.props&&O.props.onVnodeUpdated)&&he(()=>Be(K,k,O,$),m)}else{let O;const{el:C,props:P}=a,{bm:k,m:$,parent:z}=c,K=Nt(a);if(et(c,!1),k&&sn(k),!K&&(O=P&&P.onVnodeBeforeMount)&&Be(O,z,a),et(c,!0),C&&ie){const te=()=>{c.subTree=on(c),ie(C,c.subTree,c,m,null)};K?a.type.__asyncLoader().then(()=>!c.isUnmounted&&te()):te()}else{const te=c.subTree=on(c);I(null,te,d,g,c,m,w),a.el=te.el}if($&&he($,m),!K&&(O=P&&P.onVnodeMounted)){const te=a;he(()=>Be(O,z,te),m)}(a.shapeFlag&256||z&&Nt(z.vnode)&&z.vnode.shapeFlag&256)&&c.a&&he(c.a,m),c.isMounted=!0,a=d=g=null}},A=c.effect=new Mn(E,()=>Wn(b),c.scope),b=c.update=()=>A.run();b.id=c.uid,et(c,!0),b()},h=(c,a,d)=>{a.component=c;const g=c.vnode.props;c.vnode=a,c.next=null,bo(c,a.props,g,d),Eo(c,a.children,d),yt(),cr(),bt()},S=(c,a,d,g,m,w,x,E,A=!1)=>{const b=c&&c.children,O=c?c.shapeFlag:0,C=a.children,{patchFlag:P,shapeFlag:k}=a;if(P>0){if(P&128){T(b,C,d,g,m,w,x,E,A);return}else if(P&256){F(b,C,d,g,m,w,x,E,A);return}}k&8?(O&16&&G(b,m,w),C!==b&&p(d,C)):O&16?k&16?T(b,C,d,g,m,w,x,E,A):G(b,m,w,!0):(O&8&&p(d,""),k&16&&j(C,d,g,m,w,x,E,A))},F=(c,a,d,g,m,w,x,E,A)=>{c=c||dt,a=a||dt;const b=c.length,O=a.length,C=Math.min(b,O);let P;for(P=0;P<C;P++){const k=a[P]=A?ze(a[P]):Me(a[P]);I(c[P],k,d,null,m,w,x,E,A)}b>O?G(c,m,w,!0,!1,C):j(a,d,g,m,w,x,E,A,C)},T=(c,a,d,g,m,w,x,E,A)=>{let b=0;const O=a.length;let C=c.length-1,P=O-1;for(;b<=C&&b<=P;){const k=c[b],$=a[b]=A?ze(a[b]):Me(a[b]);if(st(k,$))I(k,$,d,null,m,w,x,E,A);else break;b++}for(;b<=C&&b<=P;){const k=c[C],$=a[P]=A?ze(a[P]):Me(a[P]);if(st(k,$))I(k,$,d,null,m,w,x,E,A);else break;C--,P--}if(b>C){if(b<=P){const k=P+1,$=k<O?a[k].el:g;for(;b<=P;)I(null,a[b]=A?ze(a[b]):Me(a[b]),d,$,m,w,x,E,A),b++}}else if(b>P)for(;b<=C;)se(c[b],m,w,!0),b++;else{const k=b,$=b,z=new Map;for(b=$;b<=P;b++){const ve=a[b]=A?ze(a[b]):Me(a[b]);ve.key!=null&&z.set(ve.key,b)}let K,te=0;const Ce=P-$+1;let at=!1,Qn=0;const _t=new Array(Ce);for(b=0;b<Ce;b++)_t[b]=0;for(b=k;b<=C;b++){const ve=c[b];if(te>=Ce){se(ve,m,w,!0);continue}let je;if(ve.key!=null)je=z.get(ve.key);else for(K=$;K<=P;K++)if(_t[K-$]===0&&st(ve,a[K])){je=K;break}je===void 0?se(ve,m,w,!0):(_t[je-$]=b+1,je>=Qn?Qn=je:at=!0,I(ve,a[je],d,null,m,w,x,E,A),te++)}const Gn=at?Co(_t):dt;for(K=Gn.length-1,b=Ce-1;b>=0;b--){const ve=$+b,je=a[ve],Zn=ve+1<O?a[ve+1].el:g;_t[b]===0?I(null,je,d,Zn,m,w,x,E,A):at&&(K<0||b!==Gn[K]?Q(je,d,Zn,2):K--)}}},Q=(c,a,d,g,m=null)=>{const{el:w,type:x,transition:E,children:A,shapeFlag:b}=c;if(b&6){Q(c.component.subTree,a,d,g);return}if(b&128){c.suspense.move(a,d,g);return}if(b&64){x.move(c,a,d,ye);return}if(x===Oe){r(w,a,d);for(let C=0;C<A.length;C++)Q(A[C],a,d,g);r(c.anchor,a,d);return}if(x===Dt){L(c,a,d);return}if(g!==2&&b&1&&E)if(g===0)E.beforeEnter(w),r(w,a,d),he(()=>E.enter(w),m);else{const{leave:C,delayLeave:P,afterLeave:k}=E,$=()=>r(w,a,d),z=()=>{C(w,()=>{$(),k&&k()})};P?P(w,$,z):z()}else r(w,a,d)},se=(c,a,d,g=!1,m=!1)=>{const{type:w,props:x,ref:E,children:A,dynamicChildren:b,shapeFlag:O,patchFlag:C,dirs:P}=c;if(E!=null&&Tn(E,null,d,c,!0),O&256){a.ctx.deactivate(c);return}const k=O&1&&P,$=!Nt(c);let z;if($&&(z=x&&x.onVnodeBeforeUnmount)&&Be(z,a,c),O&6)q(c.component,d,g);else{if(O&128){c.suspense.unmount(d,g);return}k&&Ze(c,null,a,"beforeUnmount"),O&64?c.type.remove(c,a,d,m,ye,g):b&&(w!==Oe||C>0&&C&64)?G(b,a,d,!1,!0):(w===Oe&&C&384||!m&&O&16)&&G(A,a,d),g&&Se(c)}($&&(z=x&&x.onVnodeUnmounted)||k)&&he(()=>{z&&Be(z,a,c),k&&Ze(c,null,a,"unmounted")},d)},Se=c=>{const{type:a,el:d,anchor:g,transition:m}=c;if(a===Oe){Ge(d,g);return}if(a===Dt){W(c);return}const w=()=>{s(d),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(c.shapeFlag&1&&m&&!m.persisted){const{leave:x,delayLeave:E}=m,A=()=>x(d,w);E?E(c.el,w,A):A()}else w()},Ge=(c,a)=>{let d;for(;c!==a;)d=v(c),s(c),c=d;s(a)},q=(c,a,d)=>{const{bum:g,scope:m,update:w,subTree:x,um:E}=c;g&&sn(g),m.stop(),w&&(w.active=!1,se(x,c,a,d)),E&&he(E,a),he(()=>{c.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},G=(c,a,d,g=!1,m=!1,w=0)=>{for(let x=w;x<c.length;x++)se(c[x],a,d,g,m)},_e=c=>c.shapeFlag&6?_e(c.component.subTree):c.shapeFlag&128?c.suspense.next():v(c.anchor||c.el),Ue=(c,a,d)=>{c==null?a._vnode&&se(a._vnode,null,null,!0):I(a._vnode||null,c,a,null,null,null,d),cr(),Gr(),a._vnode=c},ye={p:I,um:se,m:Q,r:Se,mt:De,mc:j,pc:S,pbc:Y,n:_e,o:e};let be,ie;return t&&([be,ie]=t(ye)),{render:Ue,hydrate:be,createApp:Ao(Ue,be)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bs(e,t,n=!1){const r=e.children,s=t.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ze(s[i]),l.el=o.el),n||bs(o,l)),l.type===tn&&(l.el=o.el)}}function Co(e){const t=e.slice(),n=[0];let r,s,i,o,l;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<f?i=l+1:o=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const To=e=>e.__isTeleport,Oe=Symbol(void 0),tn=Symbol(void 0),ke=Symbol(void 0),Dt=Symbol(void 0),xt=[];let Ie=null;function We(e=!1){xt.push(Ie=e?null:[])}function Oo(){xt.pop(),Ie=xt[xt.length-1]||null}let Ot=1;function br(e){Ot+=e}function vs(e){return e.dynamicChildren=Ot>0?Ie||dt:null,Oo(),Ot>0&&Ie&&Ie.push(e),e}function tt(e,t,n,r,s,i){return vs(Es(e,t,n,r,s,i,!0))}function Po(e,t,n,r,s){return vs(Fe(e,t,n,r,s,!0))}function Io(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const nn="__vInternal",_s=({key:e})=>e??null,Ut=({ref:e,ref_key:t,ref_for:n})=>e!=null?oe(e)||de(e)||M(e)?{i:we,r:e,k:t,f:!!n}:e:null;function Es(e,t=null,n=null,r=0,s=null,i=e===Oe?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_s(t),ref:t&&Ut(t),scopeId:ts,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:we};return l?(Jn(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=oe(n)?8:16),Ot>0&&!o&&Ie&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ie.push(u),u}const Fe=Ro;function Ro(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===co)&&(e=ke),Io(e)){const l=Qe(e,t,!0);return n&&Jn(l,n),Ot>0&&!i&&Ie&&(l.shapeFlag&6?Ie[Ie.indexOf(e)]=l:Ie.push(l)),l.patchFlag|=-2,l}if(qo(e)&&(e=e.__vccOpts),t){t=Lo(t);let{class:l,style:u}=t;l&&!oe(l)&&(t.class=Rn(l)),ne(u)&&(Wr(u)&&!B(u)&&(u=ce({},u)),t.style=In(u))}const o=oe(e)?1:Ki(e)?128:To(e)?64:ne(e)?4:M(e)?2:0;return Es(e,t,n,r,s,o,i,!0)}function Lo(e){return e?Wr(e)||nn in e?ce({},e):e:null}function Qe(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,l=t?jo(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&_s(l),ref:t&&t.ref?n&&s?B(s)?s.concat(Ut(t)):[s,Ut(t)]:Ut(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qe(e.ssContent),ssFallback:e.ssFallback&&Qe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ko(e=" ",t=0){return Fe(tn,null,e,t)}function Fo(e,t){const n=Fe(Dt,null,e);return n.staticCount=t,n}function vr(e="",t=!1){return t?(We(),Po(ke,null,e)):Fe(ke,null,e)}function Me(e){return e==null||typeof e=="boolean"?Fe(ke):B(e)?Fe(Oe,null,e.slice()):typeof e=="object"?ze(e):Fe(tn,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qe(e)}function Jn(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Jn(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(nn in t)?t._ctx=we:s===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else M(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[ko(t)]):n=8);e.children=t,e.shapeFlag|=n}function jo(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Rn([t.class,r.class]));else if(s==="style")t.style=In([t.style,r.style]);else if(Wt(s)){const i=t[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Be(e,t,n,r=null){Ae(e,t,7,[n,r])}const Bo=ys();let Mo=0;function $o(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Bo,i={uid:Mo++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(r,s),emitsOptions:es(r,s),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=$i.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const No=()=>Z||we,mt=e=>{Z=e,e.scope.on()},lt=()=>{Z&&Z.scope.off(),Z=null};function ws(e){return e.vnode.shapeFlag&4}let Pt=!1;function Do(e,t=!1){Pt=t;const{props:n,children:r}=e.vnode,s=ws(e);yo(e,n,s,t),_o(e,r);const i=s?Uo(e,t):void 0;return Pt=!1,i}function Uo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=zr(new Proxy(e.ctx,uo));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Vo(e):null;mt(e),yt();const i=Je(r,e,0,[e.props,s]);if(bt(),lt(),Fr(i)){if(i.then(lt,lt),t)return i.then(o=>{_r(e,o,t)}).catch(o=>{Qt(o,e,0)});e.asyncDep=i}else _r(e,i,t)}else As(e,t)}function _r(e,t,n){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=Yr(t)),As(e,n)}let Er;function As(e,t,n){const r=e.type;if(!e.render){if(!t&&Er&&!r.render){const s=r.template||zn(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:u}=r,f=ce(ce({isCustomElement:i,delimiters:l},o),u);r.render=Er(s,f)}}e.render=r.render||Le}mt(e),yt(),fo(e),bt(),lt()}function Ho(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function Vo(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ho(e))},slots:e.slots,emit:e.emit,expose:t}}function Xn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yr(zr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in At)return At[n](e)},has(t,n){return n in t||n in At}}))}function Ko(e,t=!0){return M(e)?e.displayName||e.name:e.name||t&&e.__name}function qo(e){return M(e)&&"__vccOpts"in e}const Wo=(e,t)=>Ri(e,t,Pt),zo=Symbol(""),Yo=()=>$t(zo),Jo="3.2.47",Xo="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,wr=it&&it.createElement("template"),Qo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?it.createElementNS(Xo,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wr.innerHTML=r?`<svg>${e}</svg>`:e;const l=wr.content;if(r){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Go(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Zo(e,t,n){const r=e.style,s=oe(n);if(n&&!s){if(t&&!oe(t))for(const i in t)n[i]==null&&On(r,i,"");for(const i in n)On(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ar=/\s*!important$/;function On(e,t,n){if(B(n))n.forEach(r=>On(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=el(e,t);Ar.test(n)?e.setProperty(gt(r),n.replace(Ar,""),"important"):e[r]=n}}const xr=["Webkit","Moz","ms"],un={};function el(e,t){const n=un[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return un[t]=r;r=Jt(r);for(let s=0;s<xr.length;s++){const i=xr[s]+r;if(i in e)return un[t]=i}return t}const Sr="http://www.w3.org/1999/xlink";function tl(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Sr,t.slice(6,t.length)):e.setAttributeNS(Sr,t,n);else{const i=$s(t);n==null||i&&!kr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function nl(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const u=n??"";(e.value!==u||e.tagName==="OPTION")&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=kr(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function rl(e,t,n,r){e.addEventListener(t,n,r)}function sl(e,t,n,r){e.removeEventListener(t,n,r)}function il(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[l,u]=ol(t);if(r){const f=i[t]=al(r,s);rl(e,l,f,u)}else o&&(sl(e,l,o,u),i[t]=void 0)}}const Cr=/(?:Once|Passive|Capture)$/;function ol(e){let t;if(Cr.test(e)){t={};let r;for(;r=e.match(Cr);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let fn=0;const ll=Promise.resolve(),cl=()=>fn||(ll.then(()=>fn=0),fn=Date.now());function al(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(ul(r,n.value),t,5,[r])};return n.value=e,n.attached=cl(),n}function ul(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Tr=/^on[a-z]/,fl=(e,t,n,r,s=!1,i,o,l,u)=>{t==="class"?Go(e,r,s):t==="style"?Zo(e,n,r):Wt(t)?Ln(t)||il(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):dl(e,t,r,s))?nl(e,t,r,i,o,l,u):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),tl(e,t,r,s))};function dl(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Tr.test(t)&&M(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Tr.test(t)&&oe(n)?!1:t in e}const pl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xi.props;const hl=ce({patchProp:fl},Qo);let Or;function ml(){return Or||(Or=xo(hl))}const gl=(...e)=>{const t=ml().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yl(r);if(!s)return;const i=t._component;!M(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function yl(e){return oe(e)?document.querySelector(e):e}var ut={};const bl="@vue-stripe/vue-stripe",vl="4.5.0",_l="Stripe Checkout & Elements for Vue.js",El="jofftiquez@gmail.com",wl={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},Al="dist/index.js",xl="dist",Sl={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},Cl={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},Tl={url:"https://github.com/vue-stripe/vue-stripe/issues"},Ol={"pre-commit":"lint-staged"},Pl="https://github.com/vue-stripe/vue-stripe#readme",Il=["vue","vuejs","stripe","checkout","payment"],Rl="MIT",Ll={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},kl="typings/index.d.ts",Fl={name:bl,version:vl,description:_l,author:El,scripts:wl,main:Al,module:xl,dependencies:Sl,devDependencies:Cl,bugs:Tl,gitHooks:Ol,homepage:Pl,keywords:Il,license:Rl,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:Ll,typings:kl};var xs;Object.defineProperty(ut,"__esModule",{value:!0});var dn="auto",jl=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],Bl=["auto","book","donate","pay"],Ml=["required","auto"],$l={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},Nl=Fl.version,It={name:"vue-stripe",version:Nl,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},Dl={install:function(e,t){var n=t.pk,r=t.stripeAccount,s=t.apiVersion,i=t.locale,o=window.Stripe(n,{stripeAccount:r,apiVersion:s,locale:i});o.registerAppInfo(It),e.prototype.$stripe=o}};function Ul(e,t){return e(t={exports:{}},t.exports),t.exports}var Hl=Ul(function(e){var t=function(n){var r,s=Object.prototype,i=s.hasOwnProperty,o=typeof Symbol=="function"?Symbol:{},l=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",f=o.toStringTag||"@@toStringTag";function p(y,h,S,F){var T=h&&h.prototype instanceof H?h:H,Q=Object.create(T.prototype),se=new ge(F||[]);return Q._invoke=function(Se,Ge,q){var G=v;return function(_e,Ue){if(G===N)throw new Error("Generator is already running");if(G===I){if(_e==="throw")throw Ue;return vt()}for(q.method=_e,q.arg=Ue;;){var ye=q.delegate;if(ye){var be=Y(ye,q);if(be){if(be===U)continue;return be}}if(q.method==="next")q.sent=q._sent=q.arg;else if(q.method==="throw"){if(G===v)throw G=I,q.arg;q.dispatchException(q.arg)}else q.method==="return"&&q.abrupt("return",q.arg);G=N;var ie=_(Se,Ge,q);if(ie.type==="normal"){if(G=q.done?I:R,ie.arg===U)continue;return{value:ie.arg,done:q.done}}ie.type==="throw"&&(G=I,q.method="throw",q.arg=ie.arg)}}}(y,S,se),Q}function _(y,h,S){try{return{type:"normal",arg:y.call(h,S)}}catch(F){return{type:"throw",arg:F}}}n.wrap=p;var v="suspendedStart",R="suspendedYield",N="executing",I="completed",U={};function H(){}function re(){}function L(){}var W={};W[l]=function(){return this};var ee=Object.getPrototypeOf,xe=ee&&ee(ee(De([])));xe&&xe!==s&&i.call(xe,l)&&(W=xe);var ae=L.prototype=H.prototype=Object.create(W);function j(y){["next","throw","return"].forEach(function(h){y[h]=function(S){return this._invoke(h,S)}})}function X(y){var h;this._invoke=function(S,F){function T(){return new Promise(function(Q,se){(function Se(Ge,q,G,_e){var Ue=_(y[Ge],y,q);if(Ue.type!=="throw"){var ye=Ue.arg,be=ye.value;return be&&typeof be=="object"&&i.call(be,"__await")?Promise.resolve(be.__await).then(function(ie){Se("next",ie,G,_e)},function(ie){Se("throw",ie,G,_e)}):Promise.resolve(be).then(function(ie){ye.value=ie,G(ye)},function(ie){return Se("throw",ie,G,_e)})}_e(Ue.arg)})(S,F,Q,se)})}return h=h?h.then(T,T):T()}}function Y(y,h){var S=y.iterator[h.method];if(S===r){if(h.delegate=null,h.method==="throw"){if(y.iterator.return&&(h.method="return",h.arg=r,Y(y,h),h.method==="throw"))return U;h.method="throw",h.arg=new TypeError("The iterator does not provide a 'throw' method")}return U}var F=_(S,y.iterator,h.arg);if(F.type==="throw")return h.method="throw",h.arg=F.arg,h.delegate=null,U;var T=F.arg;return T?T.done?(h[y.resultName]=T.value,h.next=y.nextLoc,h.method!=="return"&&(h.method="next",h.arg=r),h.delegate=null,U):T:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,U)}function ue(y){var h={tryLoc:y[0]};1 in y&&(h.catchLoc=y[1]),2 in y&&(h.finallyLoc=y[2],h.afterLoc=y[3]),this.tryEntries.push(h)}function pe(y){var h=y.completion||{};h.type="normal",delete h.arg,y.completion=h}function ge(y){this.tryEntries=[{tryLoc:"root"}],y.forEach(ue,this),this.reset(!0)}function De(y){if(y){var h=y[l];if(h)return h.call(y);if(typeof y.next=="function")return y;if(!isNaN(y.length)){var S=-1,F=function T(){for(;++S<y.length;)if(i.call(y,S))return T.value=y[S],T.done=!1,T;return T.value=r,T.done=!0,T};return F.next=F}}return{next:vt}}function vt(){return{value:r,done:!0}}return re.prototype=ae.constructor=L,L.constructor=re,L[f]=re.displayName="GeneratorFunction",n.isGeneratorFunction=function(y){var h=typeof y=="function"&&y.constructor;return!!h&&(h===re||(h.displayName||h.name)==="GeneratorFunction")},n.mark=function(y){return Object.setPrototypeOf?Object.setPrototypeOf(y,L):(y.__proto__=L,f in y||(y[f]="GeneratorFunction")),y.prototype=Object.create(ae),y},n.awrap=function(y){return{__await:y}},j(X.prototype),X.prototype[u]=function(){return this},n.AsyncIterator=X,n.async=function(y,h,S,F){var T=new X(p(y,h,S,F));return n.isGeneratorFunction(h)?T:T.next().then(function(Q){return Q.done?Q.value:T.next()})},j(ae),ae[f]="Generator",ae[l]=function(){return this},ae.toString=function(){return"[object Generator]"},n.keys=function(y){var h=[];for(var S in y)h.push(S);return h.reverse(),function F(){for(;h.length;){var T=h.pop();if(T in y)return F.value=T,F.done=!1,F}return F.done=!0,F}},n.values=De,ge.prototype={constructor:ge,reset:function(y){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(pe),!y)for(var h in this)h.charAt(0)==="t"&&i.call(this,h)&&!isNaN(+h.slice(1))&&(this[h]=r)},stop:function(){this.done=!0;var y=this.tryEntries[0].completion;if(y.type==="throw")throw y.arg;return this.rval},dispatchException:function(y){if(this.done)throw y;var h=this;function S(Ge,q){return Q.type="throw",Q.arg=y,h.next=Ge,q&&(h.method="next",h.arg=r),!!q}for(var F=this.tryEntries.length-1;F>=0;--F){var T=this.tryEntries[F],Q=T.completion;if(T.tryLoc==="root")return S("end");if(T.tryLoc<=this.prev){var se=i.call(T,"catchLoc"),Se=i.call(T,"finallyLoc");if(se&&Se){if(this.prev<T.catchLoc)return S(T.catchLoc,!0);if(this.prev<T.finallyLoc)return S(T.finallyLoc)}else if(se){if(this.prev<T.catchLoc)return S(T.catchLoc,!0)}else{if(!Se)throw new Error("try statement without catch or finally");if(this.prev<T.finallyLoc)return S(T.finallyLoc)}}}},abrupt:function(y,h){for(var S=this.tryEntries.length-1;S>=0;--S){var F=this.tryEntries[S];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var T=F;break}}T&&(y==="break"||y==="continue")&&T.tryLoc<=h&&h<=T.finallyLoc&&(T=null);var Q=T?T.completion:{};return Q.type=y,Q.arg=h,T?(this.method="next",this.next=T.finallyLoc,U):this.complete(Q)},complete:function(y,h){if(y.type==="throw")throw y.arg;return y.type==="break"||y.type==="continue"?this.next=y.arg:y.type==="return"?(this.rval=this.arg=y.arg,this.method="return",this.next="end"):y.type==="normal"&&h&&(this.next=h),U},finish:function(y){for(var h=this.tryEntries.length-1;h>=0;--h){var S=this.tryEntries[h];if(S.finallyLoc===y)return this.complete(S.completion,S.afterLoc),pe(S),U}},catch:function(y){for(var h=this.tryEntries.length-1;h>=0;--h){var S=this.tryEntries[h];if(S.tryLoc===y){var F=S.completion;if(F.type==="throw"){var T=F.arg;pe(S)}return T}}throw new Error("illegal catch attempt")},delegateYield:function(y,h,S){return this.delegate={iterator:De(y),resultName:h,nextLoc:S},this.method==="next"&&(this.arg=r),U}},n}(e.exports);try{regeneratorRuntime=t}catch{Function("r","regeneratorRuntime = r")(t)}}),Re=Hl;function Ss(e){return(Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var Cs,Ts="https://js.stripe.com/v3",Vl=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Pr="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Kl=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Ts,'"]')),t=0;t<e.length;t++){var n=e[t];if(Vl.test(n.src))return n}return null},ql=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(Ts).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},Wl=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:t})},pn=null,zl=function(e){return pn!==null?pn:pn=new Promise(function(t,n){if(typeof window<"u")if(window.Stripe&&e&&console.warn(Pr),window.Stripe)t(window.Stripe);else try{var r=Kl();r&&e?console.warn(Pr):r||(r=ql(e)),r.addEventListener("load",function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}),r.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(s){return void n(s)}else t(null)})},Yl=function(e,t,n){if(e===null)return null;var r=e.apply(void 0,t);return Wl(r,n),r},Jl=function(e){var t=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||Ss(e)!=="object")throw new Error(t);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(t)},Os=!1,ct=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Os=!0;var r=Date.now();return zl(Cs).then(function(s){return Yl(s,t,r)})};ct.setLoadParameters=function(e){if(Os)throw new Error("You cannot change load parameters after calling loadStripe");Cs=Jl(e)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var Xl={beforeCreate:function(){var e=this.$options.props;e&&(this._$coertions=Object.keys(e).filter(function(t){return e[t].coerce}).map(function(t){return[t,e[t].coerce]}))},computed:{$coerced:function(){var e=this;return this._$coertions.reduce(function(t,n){var r=n[0],s=n[1];return t[r]=s.call(e,e.$props[r]),t},{})}}},Ql={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return Bl.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return Ml.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:dn,coerce:function(e){return jl.includes(e)?e:(console.warn("VueStripe Warning: '".concat(e,"' is not supported by Stripe yet. Falling back to default '").concat(dn,"'.")),dn)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},Gl={props:Ql,mixins:[Xl],render:function(e){return e},methods:{redirectToCheckout:function(){var e,t,n;return Re.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&ct.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},r.next=6,Re.awrap(ct(this.pk,e));case 6:if((t=r.sent).registerAppInfo(It),!this.sessionId){r.next=11;break}return t.redirectToCheckout({sessionId:this.sessionId}),r.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){r.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),r.abrupt("return");case 14:return n={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},r.abrupt("return",t.redirectToCheckout(n));case 18:r.prev=18,r.t0=r.catch(0),console.error(r.t0),this.$emit("error",r.t0);case 22:case"end":return r.stop()}},null,this,[[0,18]])}}};function Zl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ec=Zl;function Ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function tc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ir(Object(n),!0).forEach(function(r){ec(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ir(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var nc="card",rc={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return $l}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e,t,n=this;return Re.async(function(r){for(;;)switch(r.prev=r.next){case 0:return this.disableAdvancedFraudDetection&&ct.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},r.next=5,Re.awrap(ct(this.pk,e));case 5:this.stripe=r.sent,this.stripe.registerAppInfo(It),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(nc,t),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(s){var i=document.getElementById("stripe-element-errors");s.error?i.textContent=s.error.message:i.textContent="",n.onChange(s)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(s){var i,o,l,u;return Re.async(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,n.$emit("loading",!0),s.preventDefault(),i=tc({},n.element),n.amount&&(i.amount=n.amount),f.next=7,Re.awrap(n.stripe.createToken(i,n.tokenData));case 7:if(o=f.sent,l=o.token,!(u=o.error)){f.next=15;break}return document.getElementById("stripe-element-errors").textContent=u.message,n.$emit("error",u),f.abrupt("return");case 15:n.$emit("token",l),f.next=22;break;case 18:f.prev=18,f.t0=f.catch(0),console.error(f.t0),n.$emit("error",f.t0);case 22:return f.prev=22,n.$emit("loading",!1),f.finish(22);case 25:case"end":return f.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return r.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function Ps(e,t,n,r,s,i,o,l,u,f){typeof o!="boolean"&&(u=l,l=o,o=!1);const p=typeof n=="function"?n.options:n;let _;if(e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),r&&(p._scopeId=r),i?(_=function(v){(v=v||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(v=__VUE_SSR_CONTEXT__),t&&t.call(this,u(v)),v&&v._registeredComponents&&v._registeredComponents.add(i)},p._ssrRegister=_):t&&(_=o?function(v){t.call(this,f(v,this.$root.$options.shadowRoot))}:function(v){t.call(this,l(v))}),_)if(p.functional){const v=p.render;p.render=function(R,N){return _.call(N),v(R,N)}}else{const v=p.beforeCreate;p.beforeCreate=v?[].concat(v,_):[_]}return n}const sc=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Is(e){return(t,n)=>ic(t,n)}let hn;const Rr={};function ic(e,t){const n=sc?t.media||"default":e,r=Rr[n]||(Rr[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let s=t.source;if(t.map&&(s+=`
/*# sourceURL=`+t.map.sources[0]+" */",s+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),hn===void 0&&(hn=document.head||document.getElementsByTagName("head")[0]),hn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(s),r.element.styleSheet.cssText=r.styles.filter(Boolean).join(`
`);else{const i=r.ids.size-1,o=document.createTextNode(s),l=r.element.childNodes;l[i]&&r.element.removeChild(l[i]),l.length?r.element.insertBefore(o,l[i]):r.element.appendChild(o)}}}const oc=rc;var Rs=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"stripe-element-form"}},[t("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[t("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},lc=[];Rs._withStripped=!0;const cc=function(e){e&&e("data-v-4dd8360e_0",{source:`





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`]},media:void 0})},ac="data-v-4dd8360e",uc=Ps({render:Rs,staticRenderFns:lc},cc,oc,ac,!1,void 0,!1,Is,void 0,void 0);var fc="payment",dc={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var e,t=this;return Re.async(function(n){for(;;)switch(n.prev=n.next){case 0:return this.disableAdvancedFraudDetection&&ct.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n.next=4,Re.awrap(ct(this.pk,e));case 4:this.stripe=n.sent,this.stripe.registerAppInfo(It),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(fc,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(r){var s=document.getElementById("stripe-payment-element-errors");r.error?s.textContent=r.error.message:s.textContent="",t.onChange(r)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(r){var s,i,o;return Re.async(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,t.$emit("loading",!0),r.preventDefault(),l.next=5,Re.awrap(t.stripe.confirmPayment({elements:t.elements,confirmParams:t.confirmParams,redirect:t.redirect}));case 5:if(s=l.sent,i=s.error,o=s.paymentIntent,!i){l.next=15;break}return document.getElementById("stripe-payment-element-errors").textContent=i.message,t.$emit("error",i),l.abrupt("return");case 15:o&&t.$emit("confirmed",o);case 16:l.next=22;break;case 18:l.prev=18,l.t0=l.catch(0),console.error(l.t0),t.$emit("error",l.t0);case 22:return l.prev=22,t.$emit("loading",!1),l.finish(22);case 25:case"end":return l.stop()}},null,null,[[0,18,22,25]])});case 16:case"end":return n.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};const pc=dc;var Ls=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"stripe-payment-element-form"}},[t("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[t("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},hc=[];Ls._withStripped=!0;const mc=function(e){e&&e("data-v-171d7aec_0",{source:`












































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-171d7aec] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6QA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error, paymentIntent } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });

        // if the response is an error
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        } else if (paymentIntent) {
          // if the user has passed prop redirect="if_required"
          // and the payment confirmation was successful
          // and the payment method is not forced to redirect
          // then stripe.confirmPayment resolves with a paymentIntent
          // so we sould pass it back up to the caller for consumption
          // https://stripe.com/docs/js/payment_intents/confirm_payment?type=pii#confirm_payment_intent-options-redirect
          this.$emit('confirmed', paymentIntent);
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`]},media:void 0})},gc=Ps({render:Ls,staticRenderFns:hc},mc,pc,"data-v-171d7aec",!1,void 0,!1,Is,void 0,void 0);var yc={install:function(e,t){var n,r,s,i,o,l,u;return Re.async(function(f){for(;;)switch(f.prev=f.next){case 0:n=t.pk,r=t.stripeAccount,s=t.apiVersion,i=t.locale,o=t.elementsOptions,(l=window.Stripe(n,{stripeAccount:r,apiVersion:s,locale:i})).registerAppInfo(It),u=l.elements(o),e.prototype.$stripe=l,e.prototype.$stripeElements=u;case 6:case"end":return f.stop()}})}};xs=ut.StripeCheckout=Gl,ut.StripeElementCard=uc,ut.StripeElementPayment=gc,ut.StripeElementsPlugin=yc,ut.StripePlugin=Dl;const bc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},vc="https://github.com/BarakBinyamin/Button/archive/refs/heads/main.zip",Lr="17baface-7b1c-4b5a-9f19-db3d2401070b",_c={components:{StripeCheckout:xs},data(){return{public_key:"pk_live_51MnGvpE4Sr7PmQRtfjprJAOfOJqR274kiclk6fOqsiBVtJ54IToc5yHotr3lRSWP3zptk3RBjkiy2WSVFhu6Eo7H00mDvqUxK8",product_price_id:"price_1Mnt4aE4Sr7PmQRtYMS5LNzT",lineitems:[{price:this.product_price_id,quantity:1}],cancelURL:`${window.location.origin}${window.location.pathname}?success=false`,succuessURL:`${window.location.origin}${window.location.pathname}?success=${Lr}`,paramExists:"",success:""}},mounted(){let e=new URLSearchParams(window.location.search);this.paramExists=e.has("success"),this.success=e.get("success")===Lr;let t=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${t}px`),window.addEventListener("resize",()=>{let n=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${n}px`)})},methods:{submit(){this.$refs.checkoutRef.redirectToCheckout()},download(){window.open(vc)}}},Ec={key:0},wc={key:0,class:"title"},Ac={key:1,class:"title"},xc={key:2},Sc=Fo('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 16L12 8" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1),Cc=[Sc];function Tc(e,t,n,r,s,i){const o=lo("stripe-checkout");return We(),tt(Oe,null,[s.paramExists?(We(),tt("div",Ec,[s.success?(We(),tt("div",wc,"Transaction succeeded!")):(We(),tt("div",Ac,"Transaction failed, try again...")),s.success?(We(),tt("div",xc,Cc)):vr("",!0)])):vr("",!0),!s.paramExists||!s.success?(We(),tt("div",{key:1,class:"button",onClick:t[0]||(t[0]=(...l)=>i.submit&&i.submit(...l))},"Buy this button")):(We(),tt("div",{key:2,class:"button",onClick:t[1]||(t[1]=(...l)=>i.download&&i.download(...l))},"Download the code!")),Fe(o,{ref:"checkoutRef",mode:"payment",pk:s.public_key,"line-items":[{price:s.product_price_id,quantity:1}],"success-url":s.succuessURL,"cancel-url":s.cancelURL,onLoading:t[2]||(t[2]=l=>e.loading=l)},null,8,["pk","line-items","success-url","cancel-url"])],64)}const Oc=bc(_c,[["render",Tc]]),Pc=gl(Oc);Pc.mount("#app");
