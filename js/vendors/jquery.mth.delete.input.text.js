/*
 *  Project: 
 *  Description: 
 *  Author: 
 *  License: 
 */


/*! tether 0.6.5 */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(){return function(){var t,e,o,i,n,s,l,r,h,a,f,p,u,d,g,c,m,b={}.hasOwnProperty,v=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1},y=[].slice;null==this.Tether&&(this.Tether={modules:[]}),f=function(t){var e,o,i,n,s;if(o=getComputedStyle(t).position,"fixed"===o)return t;for(i=void 0,e=t;e=e.parentNode;){try{n=getComputedStyle(e)}catch(l){}if(null==n)return e;if(/(auto|scroll)/.test(n.overflow+n["overflow-y"]+n["overflow-x"])&&("absolute"!==o||"relative"===(s=n.position)||"absolute"===s||"fixed"===s))return e}return document.body},g=function(){var t;return t=0,function(){return t++}}(),m={},h=function(t){var e,i,s,l,r;if(s=t._tetherZeroElement,null==s&&(s=t.createElement("div"),s.setAttribute("data-tether-id",g()),n(s.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(s),t._tetherZeroElement=s),e=s.getAttribute("data-tether-id"),null==m[e]){m[e]={},r=s.getBoundingClientRect();for(i in r)l=r[i],m[e][i]=l;o(function(){return m[e]=void 0})}return m[e]},u=null,l=function(t){var e,o,i,n,s,l,r;t===document?(o=document,t=document.documentElement):o=t.ownerDocument,i=o.documentElement,e={},r=t.getBoundingClientRect();for(n in r)l=r[n],e[n]=l;return s=h(o),e.top-=s.top,e.left-=s.left,null==e.width&&(e.width=document.body.scrollWidth-e.left-e.right),null==e.height&&(e.height=document.body.scrollHeight-e.top-e.bottom),e.top=e.top-i.clientTop,e.left=e.left-i.clientLeft,e.right=o.body.clientWidth-e.width-e.left,e.bottom=o.body.clientHeight-e.height-e.top,e},r=function(t){return t.offsetParent||document.documentElement},a=function(){var t,e,o,i,s;return t=document.createElement("div"),t.style.width="100%",t.style.height="200px",e=document.createElement("div"),n(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e),i=t.offsetWidth,e.style.overflow="scroll",s=t.offsetWidth,i===s&&(s=e.clientWidth),document.body.removeChild(e),o=i-s,{width:o,height:o}},n=function(t){var e,o,i,n,s,l,r;for(null==t&&(t={}),e=[],Array.prototype.push.apply(e,arguments),r=e.slice(1),s=0,l=r.length;l>s;s++)if(i=r[s])for(o in i)b.call(i,o)&&(n=i[o],t[o]=n);return t},d=function(t,e){var o,i,n,s,l;if(null!=t.classList){for(s=e.split(" "),l=[],i=0,n=s.length;n>i;i++)o=s[i],o.trim()&&l.push(t.classList.remove(o));return l}return t.className=t.className.replace(new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},e=function(t,e){var o,i,n,s,l;if(null!=t.classList){for(s=e.split(" "),l=[],i=0,n=s.length;n>i;i++)o=s[i],o.trim()&&l.push(t.classList.add(o));return l}return d(t,e),t.className+=" "+e},p=function(t,e){return null!=t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},c=function(t,o,i){var n,s,l,r,h,a;for(s=0,r=i.length;r>s;s++)n=i[s],v.call(o,n)<0&&p(t,n)&&d(t,n);for(a=[],l=0,h=o.length;h>l;l++)n=o[l],a.push(p(t,n)?void 0:e(t,n));return a},i=[],o=function(t){return i.push(t)},s=function(){var t,e;for(e=[];t=i.pop();)e.push(t());return e},t=function(){function t(){}return t.prototype.on=function(t,e,o,i){var n;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})},t.prototype.once=function(t,e,o){return this.on(t,e,o,!0)},t.prototype.off=function(t,e){var o,i,n;if(null!=(null!=(i=this.bindings)?i[t]:void 0)){if(null==e)return delete this.bindings[t];for(o=0,n=[];o<this.bindings[t].length;)n.push(this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):o++);return n}},t.prototype.trigger=function(){var t,e,o,i,n,s,l,r,h;if(o=arguments[0],t=2<=arguments.length?y.call(arguments,1):[],null!=(l=this.bindings)?l[o]:void 0){for(n=0,h=[];n<this.bindings[o].length;)r=this.bindings[o][n],i=r.handler,e=r.ctx,s=r.once,i.apply(null!=e?e:this,t),h.push(s?this.bindings[o].splice(n,1):n++);return h}},t}(),this.Tether.Utils={getScrollParent:f,getBounds:l,getOffsetParent:r,extend:n,addClass:e,removeClass:d,hasClass:p,updateClasses:c,defer:o,flush:s,uniqueId:g,Evented:t,getScrollBarSize:a}}.call(this),function(){var t,e,o,i,n,s,l,r,h,a,f,p,u,d,g,c,m,b,v,y,w,C,O,T,x,E,W,A,S,M=[].slice,z=function(t,e){return function(){return t.apply(e,arguments)}};if(null==this.Tether)throw new Error("You must include the utils.js file before tether.js");i=this.Tether,S=i.Utils,c=S.getScrollParent,m=S.getSize,d=S.getOuterSize,p=S.getBounds,u=S.getOffsetParent,a=S.extend,n=S.addClass,O=S.removeClass,E=S.updateClasses,h=S.defer,f=S.flush,g=S.getScrollBarSize,W=function(t,e,o){return null==o&&(o=1),t+o>=e&&e>=t-o},x=function(){var t,e,o,i,n;for(t=document.createElement("div"),n=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0,i=n.length;i>o;o++)if(e=n[o],void 0!==t.style[e])return e}(),T=[],C=function(){var t,e,o;for(e=0,o=T.length;o>e;e++)t=T[e],t.position(!1);return f()},b=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?t:+new Date},function(){var t,e,o,i,n,s,l,r,h;for(e=null,o=null,i=null,n=function(){if(null!=o&&o>16)return o=Math.min(o-16,250),void(i=setTimeout(n,250));if(!(null!=e&&b()-e<10))return null!=i&&(clearTimeout(i),i=null),e=b(),C(),o=b()-e},r=["resize","scroll","touchmove"],h=[],s=0,l=r.length;l>s;s++)t=r[s],h.push(window.addEventListener(t,n));return h}(),t={center:"center",left:"right",right:"left"},e={middle:"middle",top:"bottom",bottom:"top"},o={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},r=function(o,i){var n,s;return n=o.left,s=o.top,"auto"===n&&(n=t[i.left]),"auto"===s&&(s=e[i.top]),{left:n,top:s}},l=function(t){var e,i;return{left:null!=(e=o[t.left])?e:t.left,top:null!=(i=o[t.top])?i:t.top}},s=function(){var t,e,o,i,n,s,l;for(e=1<=arguments.length?M.call(arguments,0):[],o={top:0,left:0},n=0,s=e.length;s>n;n++)l=e[n],i=l.top,t=l.left,"string"==typeof i&&(i=parseFloat(i,10)),"string"==typeof t&&(t=parseFloat(t,10)),o.top+=i,o.left+=t;return o},v=function(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t},y=w=function(t){var e,o,i;return i=t.split(" "),o=i[0],e=i[1],{top:o,left:e}},A=function(){function t(t){this.position=z(this.position,this);var e,o,n,s,l;for(T.push(this),this.history=[],this.setOptions(t,!1),s=i.modules,o=0,n=s.length;n>o;o++)e=s[o],null!=(l=e.initialize)&&l.call(this);this.position()}return t.modules=[],t.prototype.getClass=function(t){var e,o;return(null!=(e=this.options.classes)?e[t]:void 0)?this.options.classes[t]:(null!=(o=this.options.classes)?o[t]:void 0)!==!1?this.options.classPrefix?""+this.options.classPrefix+"-"+t:t:""},t.prototype.setOptions=function(t,e){var o,i,s,l,r,h;for(this.options=t,null==e&&(e=!0),o={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},this.options=a(o,this.options),r=this.options,this.element=r.element,this.target=r.target,this.targetModifier=r.targetModifier,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),h=["element","target"],s=0,l=h.length;l>s;s++){if(i=h[s],null==this[i])throw new Error("Tether Error: Both element and target must be defined");null!=this[i].jquery?this[i]=this[i][0]:"string"==typeof this[i]&&(this[i]=document.querySelector(this[i]))}if(n(this.element,this.getClass("element")),n(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");return this.targetAttachment=y(this.options.targetAttachment),this.attachment=y(this.options.attachment),this.offset=w(this.options.offset),this.targetOffset=w(this.options.targetOffset),null!=this.scrollParent&&this.disable(),this.scrollParent="scroll-handle"===this.targetModifier?this.target:c(this.target),this.options.enabled!==!1?this.enable(e):void 0},t.prototype.getTargetBounds=function(){var t,e,o,i,n,s,l,r,h;if(null==this.targetModifier)return p(this.target);switch(this.targetModifier){case"visible":return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:(t=p(this.target),n={height:t.height,width:t.width,top:t.top,left:t.left},n.height=Math.min(n.height,t.height-(pageYOffset-t.top)),n.height=Math.min(n.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),n.height=Math.min(innerHeight,n.height),n.height-=2,n.width=Math.min(n.width,t.width-(pageXOffset-t.left)),n.width=Math.min(n.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),n.width=Math.min(innerWidth,n.width),n.width-=2,n.top<pageYOffset&&(n.top=pageYOffset),n.left<pageXOffset&&(n.left=pageXOffset),n);case"scroll-handle":return h=this.target,h===document.body?(h=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=p(h),r=getComputedStyle(h),o=h.scrollWidth>h.clientWidth||"scroll"===[r.overflow,r.overflowX]||this.target!==document.body,s=0,o&&(s=15),i=t.height-parseFloat(r.borderTopWidth)-parseFloat(r.borderBottomWidth)-s,n={width:15,height:.975*i*(i/h.scrollHeight),left:t.left+t.width-parseFloat(r.borderLeftWidth)-15},e=0,408>i&&this.target===document.body&&(e=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(n.height=Math.max(n.height,24)),l=this.target.scrollTop/(h.scrollHeight-i),n.top=l*(i-n.height-e)+t.top+parseFloat(r.borderTopWidth),this.target===document.body&&(n.height=Math.max(n.height,24)),n}},t.prototype.clearCache=function(){return this._cache={}},t.prototype.cache=function(t,e){return null==this._cache&&(this._cache={}),null==this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]},t.prototype.enable=function(t){return null==t&&(t=!0),n(this.target,this.getClass("enabled")),n(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),t?this.position():void 0},t.prototype.disable=function(){return O(this.target,this.getClass("enabled")),O(this.element,this.getClass("enabled")),this.enabled=!1,null!=this.scrollParent?this.scrollParent.removeEventListener("scroll",this.position):void 0},t.prototype.destroy=function(){var t,e,o,i,n;for(this.disable(),n=[],t=o=0,i=T.length;i>o;t=++o){if(e=T[t],e===this){T.splice(t,1);break}n.push(void 0)}return n},t.prototype.updateAttachClasses=function(t,e){var o,i,n,s,l,r,a,f,p,u=this;for(null==t&&(t=this.attachment),null==e&&(e=this.targetAttachment),s=["left","top","bottom","right","middle","center"],(null!=(p=this._addAttachClasses)?p.length:void 0)&&this._addAttachClasses.splice(0,this._addAttachClasses.length),o=null!=this._addAttachClasses?this._addAttachClasses:this._addAttachClasses=[],t.top&&o.push(""+this.getClass("element-attached")+"-"+t.top),t.left&&o.push(""+this.getClass("element-attached")+"-"+t.left),e.top&&o.push(""+this.getClass("target-attached")+"-"+e.top),e.left&&o.push(""+this.getClass("target-attached")+"-"+e.left),i=[],l=0,a=s.length;a>l;l++)n=s[l],i.push(""+this.getClass("element-attached")+"-"+n);for(r=0,f=s.length;f>r;r++)n=s[r],i.push(""+this.getClass("target-attached")+"-"+n);return h(function(){return null!=u._addAttachClasses?(E(u.element,u._addAttachClasses,i),E(u.target,u._addAttachClasses,i),u._addAttachClasses=void 0):void 0})},t.prototype.position=function(t){var e,o,n,h,a,d,c,m,b,y,w,C,O,T,x,E,W,A,S,M,z,B,P,_,F,L,H,Y,X,N,j,R,U,q,k,D=this;if(null==t&&(t=!0),this.enabled){for(this.clearCache(),M=r(this.targetAttachment,this.attachment),this.updateAttachClasses(this.attachment,M),e=this.cache("element-bounds",function(){return p(D.element)}),F=e.width,n=e.height,0===F&&0===n&&null!=this.lastSize?(N=this.lastSize,F=N.width,n=N.height):this.lastSize={width:F,height:n},P=B=this.cache("target-bounds",function(){return D.getTargetBounds()}),b=v(l(this.attachment),{width:F,height:n}),z=v(l(M),P),a=v(this.offset,{width:F,height:n}),d=v(this.targetOffset,P),b=s(b,a),z=s(z,d),h=B.left+z.left-b.left,_=B.top+z.top-b.top,j=i.modules,L=0,Y=j.length;Y>L;L++)if(c=j[L],x=c.position.call(this,{left:h,top:_,targetAttachment:M,targetPos:B,attachment:this.attachment,elementPos:e,offset:b,targetOffset:z,manualOffset:a,manualTargetOffset:d,scrollbarSize:A}),null!=x&&"object"==typeof x){if(x===!1)return!1;_=x.top,h=x.left}if(m={page:{top:_,left:h},viewport:{top:_-pageYOffset,bottom:pageYOffset-_-n+innerHeight,left:h-pageXOffset,right:pageXOffset-h-F+innerWidth}},document.body.scrollWidth>window.innerWidth&&(A=this.cache("scrollbar-size",g),m.viewport.bottom-=A.height),document.body.scrollHeight>window.innerHeight&&(A=this.cache("scrollbar-size",g),m.viewport.right-=A.width),(""!==(R=document.body.style.position)&&"static"!==R||""!==(U=document.body.parentElement.style.position)&&"static"!==U)&&(m.page.bottom=document.body.scrollHeight-_-n,m.page.right=document.body.scrollWidth-h-F),(null!=(q=this.options.optimizations)?q.moveElement:void 0)!==!1&&null==this.targetModifier){for(w=this.cache("target-offsetparent",function(){return u(D.target)}),T=this.cache("target-offsetparent-bounds",function(){return p(w)}),O=getComputedStyle(w),o=getComputedStyle(this.element),C=T,y={},k=["Top","Left","Bottom","Right"],H=0,X=k.length;X>H;H++)S=k[H],y[S.toLowerCase()]=parseFloat(O["border"+S+"Width"]);T.right=document.body.scrollWidth-T.left-C.width+y.right,T.bottom=document.body.scrollHeight-T.top-C.height+y.bottom,m.page.top>=T.top+y.top&&m.page.bottom>=T.bottom&&m.page.left>=T.left+y.left&&m.page.right>=T.right&&(W=w.scrollTop,E=w.scrollLeft,m.offset={top:m.page.top-T.top+W-y.top,left:m.page.left-T.left+E-y.left})}return this.move(m),this.history.unshift(m),this.history.length>3&&this.history.pop(),t&&f(),!0}},t.prototype.move=function(t){var e,o,i,n,s,l,r,f,p,d,g,c,m,b,v,y,w,C=this;if(null!=this.element.parentNode){f={};for(d in t){f[d]={};for(n in t[d]){for(i=!1,y=this.history,b=0,v=y.length;v>b;b++)if(r=y[b],!W(null!=(w=r[d])?w[n]:void 0,t[d][n])){i=!0;break}i||(f[d][n]=!0)}}e={top:"",left:"",right:"",bottom:""},p=function(t,o){var i,n,s;return(null!=(s=C.options.optimizations)?s.gpu:void 0)===!1?(t.top?e.top=""+o.top+"px":e.bottom=""+o.bottom+"px",t.left?e.left=""+o.left+"px":e.right=""+o.right+"px"):(t.top?(e.top=0,n=o.top):(e.bottom=0,n=-o.bottom),t.left?(e.left=0,i=o.left):(e.right=0,i=-o.right),e[x]="translateX("+Math.round(i)+"px) translateY("+Math.round(n)+"px)","msTransform"!==x?e[x]+=" translateZ(0)":void 0)},s=!1,(f.page.top||f.page.bottom)&&(f.page.left||f.page.right)?(e.position="absolute",p(f.page,t.page)):(f.viewport.top||f.viewport.bottom)&&(f.viewport.left||f.viewport.right)?(e.position="fixed",p(f.viewport,t.viewport)):null!=f.offset&&f.offset.top&&f.offset.left?(e.position="absolute",l=this.cache("target-offsetparent",function(){return u(C.target)}),u(this.element)!==l&&h(function(){return C.element.parentNode.removeChild(C.element),l.appendChild(C.element)}),p(f.offset,t.offset),s=!0):(e.position="absolute",p({top:!0,left:!0},t.page)),s||"BODY"===this.element.parentNode.tagName||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element)),m={},c=!1;for(n in e)g=e[n],o=this.element.style[n],""===o||""===g||"top"!==n&&"left"!==n&&"bottom"!==n&&"right"!==n||(o=parseFloat(o),g=parseFloat(g)),o!==g&&(c=!0,m[n]=e[n]);return c?h(function(){return a(C.element.style,m)}):void 0}},t}(),i.position=C,this.Tether=a(A,i)}.call(this),function(){var t,e,o,i,n,s,l,r,h,a,f=[].indexOf||function(t){for(var e=0,o=this.length;o>e;e++)if(e in this&&this[e]===t)return e;return-1};a=this.Tether.Utils,l=a.getOuterSize,s=a.getBounds,r=a.getSize,i=a.extend,h=a.updateClasses,o=a.defer,e={left:"right",right:"left",top:"bottom",bottom:"top",middle:"middle"},t=["left","top","right","bottom"],n=function(e,o){var i,n,l,r,h,a,f;if("scrollParent"===o?o=e.scrollParent:"window"===o&&(o=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),o===document&&(o=o.documentElement),null!=o.nodeType)for(n=r=s(o),h=getComputedStyle(o),o=[n.left,n.top,r.width+n.left,r.height+n.top],i=a=0,f=t.length;f>a;i=++a)l=t[i],l=l[0].toUpperCase()+l.substr(1),"Top"===l||"Left"===l?o[i]+=parseFloat(h["border"+l+"Width"]):o[i]-=parseFloat(h["border"+l+"Width"]);return o},this.Tether.modules.push({position:function(e){var l,r,a,p,u,d,g,c,m,b,v,y,w,C,O,T,x,E,W,A,S,M,z,B,P,_,F,L,H,Y,X,N,j,R,U,q,k,D,Z,$,I,G,J,K,Q,V,te,ee=this;if(_=e.top,v=e.left,S=e.targetAttachment,!this.options.constraints)return!0;for(E=function(e){var o,i,n,s;for(ee.removeClass(e),s=[],i=0,n=t.length;n>i;i++)o=t[i],s.push(ee.removeClass(""+e+"-"+o));return s},$=this.cache("element-bounds",function(){return s(ee.element)}),b=$.height,F=$.width,0===F&&0===b&&null!=this.lastSize&&(I=this.lastSize,F=I.width,b=I.height),z=this.cache("target-bounds",function(){return ee.getTargetBounds()}),M=z.height,B=z.width,A={},m={},r=[this.getClass("pinned"),this.getClass("out-of-bounds")],G=this.options.constraints,L=0,N=G.length;N>L;L++)c=G[L],c.outOfBoundsClass&&r.push(c.outOfBoundsClass),c.pinnedClass&&r.push(c.pinnedClass);for(H=0,j=r.length;j>H;H++)for(g=r[H],J=["left","top","right","bottom"],Y=0,R=J.length;R>Y;Y++)W=J[Y],r.push(""+g+"-"+W);for(l=[],A=i({},S),m=i({},this.attachment),K=this.options.constraints,X=0,U=K.length;U>X;X++){if(c=K[X],P=c.to,a=c.attachment,O=c.pin,null==a&&(a=""),f.call(a," ")>=0?(Q=a.split(" "),d=Q[0],u=Q[1]):u=d=a,p=n(this,P),("target"===d||"both"===d)&&(_<p[1]&&"top"===A.top&&(_+=M,A.top="bottom"),_+b>p[3]&&"bottom"===A.top&&(_-=M,A.top="top")),"together"===d&&(_<p[1]&&"top"===A.top&&("bottom"===m.top?(_+=M,A.top="bottom",_+=b,m.top="top"):"top"===m.top&&(_+=M,A.top="bottom",_-=b,m.top="bottom")),_+b>p[3]&&"bottom"===A.top&&("top"===m.top?(_-=M,A.top="top",_-=b,m.top="bottom"):"bottom"===m.top&&(_-=M,A.top="top",_+=b,m.top="top")),"middle"===A.top&&(_+b>p[3]&&"top"===m.top?(_-=b,m.top="bottom"):_<p[1]&&"bottom"===m.top&&(_+=b,m.top="top"))),("target"===u||"both"===u)&&(v<p[0]&&"left"===A.left&&(v+=B,A.left="right"),v+F>p[2]&&"right"===A.left&&(v-=B,A.left="left")),"together"===u&&(v<p[0]&&"left"===A.left?"right"===m.left?(v+=B,A.left="right",v+=F,m.left="left"):"left"===m.left&&(v+=B,A.left="right",v-=F,m.left="right"):v+F>p[2]&&"right"===A.left?"left"===m.left?(v-=B,A.left="left",v-=F,m.left="right"):"right"===m.left&&(v-=B,A.left="left",v+=F,m.left="left"):"center"===A.left&&(v+F>p[2]&&"left"===m.left?(v-=F,m.left="right"):v<p[0]&&"right"===m.left&&(v+=F,m.left="left"))),("element"===d||"both"===d)&&(_<p[1]&&"bottom"===m.top&&(_+=b,m.top="top"),_+b>p[3]&&"top"===m.top&&(_-=b,m.top="bottom")),("element"===u||"both"===u)&&(v<p[0]&&"right"===m.left&&(v+=F,m.left="left"),v+F>p[2]&&"left"===m.left&&(v-=F,m.left="right")),"string"==typeof O?O=function(){var t,e,o,i;for(o=O.split(","),i=[],e=0,t=o.length;t>e;e++)C=o[e],i.push(C.trim());return i}():O===!0&&(O=["top","left","right","bottom"]),O||(O=[]),T=[],y=[],_<p[1]&&(f.call(O,"top")>=0?(_=p[1],T.push("top")):y.push("top")),_+b>p[3]&&(f.call(O,"bottom")>=0?(_=p[3]-b,T.push("bottom")):y.push("bottom")),v<p[0]&&(f.call(O,"left")>=0?(v=p[0],T.push("left")):y.push("left")),v+F>p[2]&&(f.call(O,"right")>=0?(v=p[2]-F,T.push("right")):y.push("right")),T.length)for(x=null!=(V=this.options.pinnedClass)?V:this.getClass("pinned"),l.push(x),D=0,q=T.length;q>D;D++)W=T[D],l.push(""+x+"-"+W);if(y.length)for(w=null!=(te=this.options.outOfBoundsClass)?te:this.getClass("out-of-bounds"),l.push(w),Z=0,k=y.length;k>Z;Z++)W=y[Z],l.push(""+w+"-"+W);(f.call(T,"left")>=0||f.call(T,"right")>=0)&&(m.left=A.left=!1),(f.call(T,"top")>=0||f.call(T,"bottom")>=0)&&(m.top=A.top=!1),(A.top!==S.top||A.left!==S.left||m.top!==this.attachment.top||m.left!==this.attachment.left)&&this.updateAttachClasses(m,A)}return o(function(){return h(ee.target,l,r),h(ee.element,l,r)}),{top:_,left:v}}})}.call(this),function(){var t,e,o,i;i=this.Tether.Utils,e=i.getBounds,o=i.updateClasses,t=i.defer,this.Tether.modules.push({position:function(i){var n,s,l,r,h,a,f,p,u,d,g,c,m,b,v,y,w,C,O,T,x,E,W,A,S,M=this;if(g=i.top,a=i.left,x=this.cache("element-bounds",function(){return e(M.element)}),h=x.height,c=x.width,d=this.getTargetBounds(),r=g+h,f=a+c,n=[],g<=d.bottom&&r>=d.top)for(E=["left","right"],m=0,w=E.length;w>m;m++)p=E[m],((W=d[p])===a||W===f)&&n.push(p);if(a<=d.right&&f>=d.left)for(A=["top","bottom"],b=0,C=A.length;C>b;b++)p=A[b],((S=d[p])===g||S===r)&&n.push(p);for(l=[],s=[],u=["left","top","right","bottom"],l.push(this.getClass("abutted")),v=0,O=u.length;O>v;v++)p=u[v],l.push(""+this.getClass("abutted")+"-"+p);for(n.length&&s.push(this.getClass("abutted")),y=0,T=n.length;T>y;y++)p=n[y],s.push(""+this.getClass("abutted")+"-"+p);return t(function(){return o(M.target,s,l),o(M.element,s,l)}),!0}})}.call(this),function(){this.Tether.modules.push({position:function(t){var e,o,i,n,s,l,r;return l=t.top,e=t.left,this.options.shift?(o=function(t){return"function"==typeof t?t.call(this,{top:l,left:e}):t},i=o(this.options.shift),"string"==typeof i?(i=i.split(" "),i[1]||(i[1]=i[0]),s=i[0],n=i[1],s=parseFloat(s,10),n=parseFloat(n,10)):(r=[i.top,i.left],s=r[0],n=r[1]),l+=s,e+=n,{top:l,left:e}):void 0}})}.call(this),this.Tether});


// the semi-colon before function invocation is a safety net against concatenated 
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined ) 
  {
    
    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.
    
    // window is passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = 'deleteInput',
        document = window.document,
		 _debug = function(msg)
		  {
			  if(window.console)
			  {
				console.debug(msg);
			  } 
			  else
			  {
				alert(msg);
			  }
		  };

    // The actual plugin constructor
    function Plugin( element, options )
	{
		this.element = element;

        // jQuery has an extend method which merges the contents of two or 
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {},  $.fn[pluginName].options, options) ;
        
        this._name = pluginName;
		
		//Adding event funtions
		$.each(this.options, function(key, val){
				if(typeof val === "function"){
					$(element).on(key + '.' + pluginName, function(event, obj){
						val(/*starting off with the event and element as a variables of the function but can add whatever you want later*/event, obj);																		
					});					
				};		
		});
	
        this.init();
    }

    Plugin.prototype =
	{
        
		// Place initialization logic here
        // You already have access to the DOM element and the options via the instance, 
        // e.g., this.element and this.options
		init:  function()
		{
			//private functions and variables
			var base = this
				,o =  base.options
				,e = jQuery(this.element)
				,$close = $(o.template)
				,typeList = [
					'email'
					,'month'
					,'number'
					,'password'
					,'search'
					,'tel'
					,'text'
					,'url'
				]
				,inputType = e.attr('type');
				
				if(typeList.indexOf(inputType) === -1){
					_debug('This plugin does not work with this input type');
					return;	
				};
				
				e.on('focus.' + pluginName + ' keyup.'+ pluginName, function(eve){
					if(e.data('theDelete')){
						return;	
					};
					var val = $.trim(e.val());
					if(val !== ''){
						//e.wrap($container);
						e.after($close);
						new Tether({
							element: $close
							,target:e
							,attachment: 'middle right'
							,targetAttachment: 'middle right'
							,targetOffset: '0 -10px'
							
						});
						e.data('theDelete', $close);
						$close.data('theInput', e);
					//end of if	
					}
					
				});
				
				e.on('keyup.' + pluginName, function(eve){
					var val = $.trim(e.val());
					if(val === ''){
						if(e.data('theDelete')){
							e.data('theDelete').remove();
							e.removeData('theDelete');
						};
					//end of if	
					}
				});
				
				e.on('blur.' + pluginName, function(){
					setTimeout(function(){
						if(e.data('theDelete')){
							e.data('theDelete').remove();
							e.removeData('theDelete');
						};
							
					},300);
				});
				
				$('body').on('click.'+ pluginName + ' touchstart.'+ pluginName +' MSPointerDown.'+pluginName, '.mth-the-delete', function(e){
					var theInput = $(this).data('theInput') || null;
					if(theInput === null){
						return;	
					}
					theInput.val('')
						.removeData('theDelete');
					$(this).remove();
					theInput.focus();
				});
				
				
		  //end of init
		}
		
		
		
    };
     // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations and allowing any
    // public function (ie. a function whose name doesn't start
    // with an underscore) to be called via the jQuery plugin,
    // e.g. $(element).defaultPluginName('functionName', arg1, arg2)
	//or  $('#hello').data('plugin_pluginName').foo_public_method();
	// get the value of a property $('#hello').data('pluginName').settings.foo;
  
    $.fn[pluginName] = function ( options ) 
	{
        var args = arguments;
        if (options === undefined || typeof options === 'object')
		{
            return this.each(function ()
									   {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });
        }
    }
	
	
	 $.fn[pluginName].options = 
	{

        template: '<span class="mth-the-delete"><a style="text-decoration:none" href="javascript:void(0);"> <span class="mth-the-hidden-text" style="border: 0 none; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px;">Delete the text in this input box</span><i class="mth-the-x glyphicon glyphicon-remove"></i></a></span> '
    };
	
}(jQuery, window, document));