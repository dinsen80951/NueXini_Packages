import{r as F}from"./vendor.38e754a4.js";function A(){return A=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},A.apply(this,arguments)}function it(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}function P(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function nt(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(n[r]!==t[r])return!1;return!0}function D(n,t){t===void 0&&(t=nt);var r,i=[],a,s=!1;function c(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return s&&r===this&&t(u,i)||(a=n.apply(this,u),s=!0,r=this,i=u),a}return c}function $(n,t){if(n==null)return{};var r={},i=Object.keys(n),a,s;for(s=0;s<i.length;s++)a=i[s],!(t.indexOf(a)>=0)&&(r[a]=n[a]);return r}var at=typeof performance=="object"&&typeof performance.now=="function",q=at?function(){return performance.now()}:function(){return Date.now()};function j(n){cancelAnimationFrame(n.id)}function ot(n,t){var r=q();function i(){q()-r>=t?n.call(null):a.id=requestAnimationFrame(i)}var a={id:requestAnimationFrame(i)};return a}var C=null;function H(n){if(n===void 0&&(n=!1),C===null||n){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),a=i.style;return a.width="100px",a.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?C="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?C="negative":C="positive-ascending"),document.body.removeChild(t),C}return C}var st=150,lt=function(t,r){return t};function K(n){var t,r,i=n.getItemOffset,a=n.getEstimatedTotalSize,s=n.getItemSize,c=n.getOffsetForIndexAndAlignment,u=n.getStartIndexForOffset,v=n.getStopIndexForStartIndex,O=n.initInstanceProps,S=n.shouldResetStyleCacheOnItemSizeChange,M=n.validateProps;return r=t=function(g){it(x,g);function x(f){var e;return e=g.call(this,f)||this,e._instanceProps=O(e.props,P(P(e))),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:P(P(e)),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=D(function(o,l,d,m){return e.props.onItemsRendered({overscanStartIndex:o,overscanStopIndex:l,visibleStartIndex:d,visibleStopIndex:m})}),e._callOnScroll=void 0,e._callOnScroll=D(function(o,l,d){return e.props.onScroll({scrollDirection:o,scrollOffset:l,scrollUpdateWasRequested:d})}),e._getItemStyle=void 0,e._getItemStyle=function(o){var l=e.props,d=l.direction,m=l.itemSize,z=l.layout,h=e._getItemStyleCache(S&&m,S&&z,S&&d),I;if(h.hasOwnProperty(o))I=h[o];else{var y=i(e.props,o,e._instanceProps),T=s(e.props,o,e._instanceProps),_=d==="horizontal"||z==="horizontal",b=d==="rtl",E=_?y:0;h[o]=I={position:"absolute",left:b?void 0:E,right:b?E:void 0,top:_?0:y,height:_?"100%":T,width:_?T:"100%"}}return I},e._getItemStyleCache=void 0,e._getItemStyleCache=D(function(o,l,d){return{}}),e._onScrollHorizontal=function(o){var l=o.currentTarget,d=l.clientWidth,m=l.scrollLeft,z=l.scrollWidth;e.setState(function(h){if(h.scrollOffset===m)return null;var I=e.props.direction,y=m;if(I==="rtl")switch(H()){case"negative":y=-m;break;case"positive-descending":y=z-d-m;break}return y=Math.max(0,Math.min(y,z-d)),{isScrolling:!0,scrollDirection:h.scrollOffset<m?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(o){var l=o.currentTarget,d=l.clientHeight,m=l.scrollHeight,z=l.scrollTop;e.setState(function(h){if(h.scrollOffset===z)return null;var I=Math.max(0,Math.min(z,m-d));return{isScrolling:!0,scrollDirection:h.scrollOffset<I?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(o){var l=e.props.outerRef;e._outerRef=o,typeof l=="function"?l(o):l!=null&&typeof l=="object"&&l.hasOwnProperty("current")&&(l.current=o)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&j(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=ot(e._resetIsScrolling,st)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}x.getDerivedStateFromProps=function(e,o){return ct(e,o),M(e),null};var p=x.prototype;return p.scrollTo=function(e){e=Math.max(0,e),this.setState(function(o){return o.scrollOffset===e?null:{scrollDirection:o.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},p.scrollToItem=function(e,o){o===void 0&&(o="auto");var l=this.props.itemCount,d=this.state.scrollOffset;e=Math.max(0,Math.min(e,l-1)),this.scrollTo(c(this.props,e,o,d,this._instanceProps))},p.componentDidMount=function(){var e=this.props,o=e.direction,l=e.initialScrollOffset,d=e.layout;if(typeof l=="number"&&this._outerRef!=null){var m=this._outerRef;o==="horizontal"||d==="horizontal"?m.scrollLeft=l:m.scrollTop=l}this._callPropsCallbacks()},p.componentDidUpdate=function(){var e=this.props,o=e.direction,l=e.layout,d=this.state,m=d.scrollOffset,z=d.scrollUpdateWasRequested;if(z&&this._outerRef!=null){var h=this._outerRef;if(o==="horizontal"||l==="horizontal")if(o==="rtl")switch(H()){case"negative":h.scrollLeft=-m;break;case"positive-ascending":h.scrollLeft=m;break;default:var I=h.clientWidth,y=h.scrollWidth;h.scrollLeft=y-I-m;break}else h.scrollLeft=m;else h.scrollTop=m}this._callPropsCallbacks()},p.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&j(this._resetIsScrollingTimeoutId)},p.render=function(){var e=this.props,o=e.children,l=e.className,d=e.direction,m=e.height,z=e.innerRef,h=e.innerElementType,I=e.innerTagName,y=e.itemCount,T=e.itemData,_=e.itemKey,b=_===void 0?lt:_,E=e.layout,Z=e.outerElementType,J=e.outerTagName,Q=e.style,X=e.useIsScrolling,Y=e.width,N=this.state.isScrolling,L=d==="horizontal"||E==="horizontal",tt=L?this._onScrollHorizontal:this._onScrollVertical,W=this._getRangeToRender(),et=W[0],rt=W[1],k=[];if(y>0)for(var R=et;R<=rt;R++)k.push(F.exports.createElement(o,{data:T,key:b(R,T),index:R,isScrolling:X?N:void 0,style:this._getItemStyle(R)}));var U=a(this.props,this._instanceProps);return F.exports.createElement(Z||J||"div",{className:l,onScroll:tt,ref:this._outerRefSetter,style:A({position:"relative",height:m,width:Y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:d},Q)},F.exports.createElement(h||I||"div",{children:k,ref:z,style:{height:L?"100%":U,pointerEvents:N?"none":void 0,width:L?U:"100%"}}))},p._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var o=this._getRangeToRender(),l=o[0],d=o[1],m=o[2],z=o[3];this._callOnItemsRendered(l,d,m,z)}}if(typeof this.props.onScroll=="function"){var h=this.state,I=h.scrollDirection,y=h.scrollOffset,T=h.scrollUpdateWasRequested;this._callOnScroll(I,y,T)}},p._getRangeToRender=function(){var e=this.props,o=e.itemCount,l=e.overscanCount,d=this.state,m=d.isScrolling,z=d.scrollDirection,h=d.scrollOffset;if(o===0)return[0,0,0,0];var I=u(this.props,h,this._instanceProps),y=v(this.props,I,h,this._instanceProps),T=!m||z==="backward"?Math.max(1,l):1,_=!m||z==="forward"?Math.max(1,l):1;return[Math.max(0,I-T),Math.max(0,Math.min(o-1,y+_)),I,y]},x}(F.exports.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},r}var ct=function(t,r){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,r.instance},ut=50,w=function(t,r,i){var a=t,s=a.itemSize,c=i.itemMetadataMap,u=i.lastMeasuredIndex;if(r>u){var v=0;if(u>=0){var O=c[u];v=O.offset+O.size}for(var S=u+1;S<=r;S++){var M=s(S);c[S]={offset:v,size:M},v+=M}i.lastMeasuredIndex=r}return c[r]},ft=function(t,r,i){var a=r.itemMetadataMap,s=r.lastMeasuredIndex,c=s>0?a[s].offset:0;return c>=i?V(t,r,s,0,i):dt(t,r,Math.max(0,s),i)},V=function(t,r,i,a,s){for(;a<=i;){var c=a+Math.floor((i-a)/2),u=w(t,c,r).offset;if(u===s)return c;u<s?a=c+1:u>s&&(i=c-1)}return a>0?a-1:0},dt=function(t,r,i,a){for(var s=t.itemCount,c=1;i<s&&w(t,i,r).offset<a;)i+=c,c*=2;return V(t,r,Math.min(i,s-1),Math.floor(i/2),a)},B=function(t,r){var i=t.itemCount,a=r.itemMetadataMap,s=r.estimatedItemSize,c=r.lastMeasuredIndex,u=0;if(c>=i&&(c=i-1),c>=0){var v=a[c];u=v.offset+v.size}var O=i-c-1,S=O*s;return u+S},ht=K({getItemOffset:function(t,r,i){return w(t,r,i).offset},getItemSize:function(t,r,i){return i.itemMetadataMap[r].size},getEstimatedTotalSize:B,getOffsetForIndexAndAlignment:function(t,r,i,a,s){var c=t.direction,u=t.height,v=t.layout,O=t.width,S=c==="horizontal"||v==="horizontal",M=S?O:u,g=w(t,r,s),x=B(t,s),p=Math.max(0,Math.min(x-M,g.offset)),f=Math.max(0,g.offset-M+g.size);switch(i==="smart"&&(a>=f-M&&a<=p+M?i="auto":i="center"),i){case"start":return p;case"end":return f;case"center":return Math.round(f+(p-f)/2);case"auto":default:return a>=f&&a<=p?a:a<f?f:p}},getStartIndexForOffset:function(t,r,i){return ft(t,i,r)},getStopIndexForStartIndex:function(t,r,i,a){for(var s=t.direction,c=t.height,u=t.itemCount,v=t.layout,O=t.width,S=s==="horizontal"||v==="horizontal",M=S?O:c,g=w(t,r,a),x=i+M,p=g.offset+g.size,f=r;f<u-1&&p<x;)f++,p+=w(t,f,a).size;return f},initInstanceProps:function(t,r){var i=t,a=i.estimatedItemSize,s={itemMetadataMap:{},estimatedItemSize:a||ut,lastMeasuredIndex:-1};return r.resetAfterIndex=function(c,u){u===void 0&&(u=!0),s.lastMeasuredIndex=Math.min(s.lastMeasuredIndex,c-1),r._getItemStyleCache(-1),u&&r.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),vt=K({getItemOffset:function(t,r){var i=t.itemSize;return r*i},getItemSize:function(t,r){var i=t.itemSize;return i},getEstimatedTotalSize:function(t){var r=t.itemCount,i=t.itemSize;return i*r},getOffsetForIndexAndAlignment:function(t,r,i,a){var s=t.direction,c=t.height,u=t.itemCount,v=t.itemSize,O=t.layout,S=t.width,M=s==="horizontal"||O==="horizontal",g=M?S:c,x=Math.max(0,u*v-g),p=Math.min(x,r*v),f=Math.max(0,r*v-g+v);switch(i==="smart"&&(a>=f-g&&a<=p+g?i="auto":i="center"),i){case"start":return p;case"end":return f;case"center":{var e=Math.round(f+(p-f)/2);return e<Math.ceil(g/2)?0:e>x+Math.floor(g/2)?x:e}case"auto":default:return a>=f&&a<=p?a:a<f?f:p}},getStartIndexForOffset:function(t,r){var i=t.itemCount,a=t.itemSize;return Math.max(0,Math.min(i-1,Math.floor(r/a)))},getStopIndexForStartIndex:function(t,r,i){var a=t.direction,s=t.height,c=t.itemCount,u=t.itemSize,v=t.layout,O=t.width,S=a==="horizontal"||v==="horizontal",M=r*u,g=S?O:s,x=Math.ceil((g+i-M)/u);return Math.max(0,Math.min(c-1,r+x-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function G(n,t){for(var r in n)if(!(r in t))return!0;for(var i in t)if(n[i]!==t[i])return!0;return!1}function pt(n,t){var r=n.style,i=$(n,["style"]),a=t.style,s=$(t,["style"]);return!G(r,a)&&!G(i,s)}export{vt as F,ht as V,pt as a};
