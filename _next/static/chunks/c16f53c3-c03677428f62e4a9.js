"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{7325:function(e,n,t){t.d(n,{YF:function(){return k}});var r,u=t(4090),l=t(9707),f=t(4261);t(9542);let o={...r||(r=t.t(u,2))},c=o.useInsertionEffect||(e=>e());var s="undefined"!=typeof document?u.useLayoutEffect:u.useEffect;let i=!1,a=0,d=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+a++,m=o.useId||function(){let[e,n]=u.useState(()=>i?d():void 0);return s(()=>{null==e&&n(d())},[]),u.useEffect(()=>{i=!0},[]),e},g=u.createContext(null),v=u.createContext(null),C=()=>{var e;return(null==(e=u.useContext(g))?void 0:e.id)||null},R=()=>u.useContext(v);function k(e){void 0===e&&(e={});let{nodeId:n}=e,t=function(e){let{open:n=!1,onOpenChange:t,elements:r}=e,l=m(),f=u.useRef({}),[o]=u.useState(()=>(function(){let e=new Map;return{emit(n,t){var r;null==(r=e.get(n))||r.forEach(e=>e(t))},on(n,t){e.set(n,[...e.get(n)||[],t])},off(n,t){var r;e.set(n,(null==(r=e.get(n))?void 0:r.filter(e=>e!==t))||[])}}})()),s=null!=C(),[i,a]=u.useState(r.reference),d=function(e){let n=u.useRef(()=>{});return c(()=>{n.current=e}),u.useCallback(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)},[])}((e,n,r)=>{f.current.openEvent=e?n:void 0,o.emit("openchange",{open:e,event:n,reason:r,nested:s}),null==t||t(e,n,r)}),g=u.useMemo(()=>({setPositionReference:a}),[]),v=u.useMemo(()=>({reference:i||r.reference||null,floating:r.floating||null,domReference:r.reference}),[i,r.reference,r.floating]);return u.useMemo(()=>({dataRef:f,open:n,onOpenChange:d,elements:v,events:o,floatingId:l,refs:g}),[n,d,v,o,l,g])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||t,o=r.elements,[i,a]=u.useState(null),[d,g]=u.useState(null),v=(null==o?void 0:o.reference)||i,k=u.useRef(null),E=R();s(()=>{v&&(k.current=v)},[v]);let M=(0,l.YF)({...e,elements:{...o,...d&&{reference:d}}}),h=u.useCallback(e=>{let n=(0,f.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;g(n),M.refs.setReference(n)},[M.refs]),p=u.useCallback(e=>{((0,f.kK)(e)||null===e)&&(k.current=e,a(e)),((0,f.kK)(M.refs.reference.current)||null===M.refs.reference.current||null!==e&&!(0,f.kK)(e))&&M.refs.setReference(e)},[M.refs]),x=u.useMemo(()=>({...M.refs,setReference:p,setPositionReference:h,domReference:k}),[M.refs,p,h]),S=u.useMemo(()=>({...M.elements,domReference:v}),[M.elements,v]),b=u.useMemo(()=>({...M,...r,refs:x,elements:S,nodeId:n}),[M,x,S,n,r]);return s(()=>{r.dataRef.current.floatingContext=b;let e=null==E?void 0:E.nodesRef.current.find(e=>e.id===n);e&&(e.context=b)}),u.useMemo(()=>({...M,context:b,refs:x,elements:S}),[M,x,S,b])}}}]);