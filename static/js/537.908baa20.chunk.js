"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[537],{1537:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var r=t(1413),a=t(2392),i=t(8208),s=t(5442),l=t(2435),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},o=t(9434),u=t(3634),d=t(5705),m=t(184),x={name:"",number:""},f=function(){var e=(0,o.I0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d.J9,{initialValues:x,onSubmit:function(n,t){var a=t.resetForm;e((0,u.addNewContact)((0,r.Z)((0,r.Z)({},n),{},{id:c()}))),a()},children:function(e){return(0,m.jsxs)(d.l0,{children:[(0,m.jsx)(d.gN,{name:"name",children:function(e){var n=e.field;e.form;return(0,m.jsxs)(a.NI,{children:[(0,m.jsx)(i.l,{children:"Name"}),(0,m.jsx)(s.I,(0,r.Z)((0,r.Z)({},n),{},{type:"text",placeholder:"Enter name"}))]})}}),(0,m.jsx)(d.gN,{name:"number",children:function(e){var n=e.field;return(0,m.jsxs)(a.NI,{children:[(0,m.jsx)(i.l,{children:"Number"}),(0,m.jsx)(s.I,(0,r.Z)((0,r.Z)({},n),{},{type:"tel",placeholder:"Enter phone"}))]})}}),(0,m.jsx)(l.z,{mt:4,colorScheme:"teal",type:"submit",sx:{"@media screen and (max-width: 480px)":{h:"var(--chakra-sizes-8)"}},children:"Add contact"})]})}})})},h=t(2347),p=t(4942),g=t(4925),y=t(9439),j=t(4363),v=t(9886),Z=t(2791);var b=t(7872),S=t(9219),C=t(2996),N=t(2503),I=["children","styleType","stylePosition","spacing"],_=["as"],k=["as"],T=(0,v.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),w=(0,y.Z)(T,2),L=w[0],A=w[1],G=(0,b.G)((function(e,n){var t=(0,S.jC)("List",e),a=(0,C.Lr)(e),i=a.children,s=a.styleType,l=void 0===s?"none":s,c=a.stylePosition,o=a.spacing,u=(0,g.Z)(a,I),d=function(e){return Z.Children.toArray(e).filter((function(e){return(0,Z.isValidElement)(e)}))}(i),x=o?(0,p.Z)({},"& > *:not(style) ~ *:not(style)",{mt:o}):{};return(0,m.jsx)(L,{value:t,children:(0,m.jsx)(N.m.ul,(0,r.Z)((0,r.Z)({ref:n,listStyleType:l,listStylePosition:c,role:"list",__css:(0,r.Z)((0,r.Z)({},t.container),x)},u),{},{children:d}))})}));G.displayName="List",(0,b.G)((function(e,n){e.as;var t=(0,g.Z)(e,_);return(0,m.jsx)(G,(0,r.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,b.G)((function(e,n){e.as;var t=(0,g.Z)(e,k);return(0,m.jsx)(G,(0,r.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var z=(0,b.G)((function(e,n){var t=A();return(0,m.jsx)(N.m.li,(0,r.Z)((0,r.Z)({ref:n},e),{},{__css:t.item}))}));z.displayName="ListItem",(0,b.G)((function(e,n){var t=A();return(0,m.jsx)(j.J,(0,r.Z)((0,r.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon";var E=["isDisabled","children"],F=(0,v.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),J=(0,y.Z)(F,2),B=J[0],D=J[1],M=(0,b.G)((function(e,n){var t=(0,S.jC)("Tag",e),a=(0,C.Lr)(e),i=(0,r.Z)({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},t.container);return(0,m.jsx)(B,{value:t,children:(0,m.jsx)(N.m.span,(0,r.Z)((0,r.Z)({ref:n},a),{},{__css:i}))})}));M.displayName="Tag";var P=(0,b.G)((function(e,n){var t=D();return(0,m.jsx)(N.m.span,(0,r.Z)((0,r.Z)({ref:n,noOfLines:1},e),{},{__css:t.label}))}));P.displayName="TagLabel",(0,b.G)((function(e,n){return(0,m.jsx)(j.J,(0,r.Z)({ref:n,verticalAlign:"top",marginEnd:"0.5rem"},e))})).displayName="TagLeftIcon",(0,b.G)((function(e,n){return(0,m.jsx)(j.J,(0,r.Z)({ref:n,verticalAlign:"top",marginStart:"0.5rem"},e))})).displayName="TagRightIcon";var R=function(e){return(0,m.jsx)(j.J,(0,r.Z)((0,r.Z)({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),{},{children:(0,m.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})}))};R.displayName="TagCloseIcon",(0,b.G)((function(e,n){var t=e.isDisabled,a=e.children,i=(0,g.Z)(e,E),s=D(),l=(0,r.Z)({display:"flex",alignItems:"center",justifyContent:"center",outline:"0"},s.closeButton);return(0,m.jsx)(N.m.button,(0,r.Z)((0,r.Z)({ref:n,"aria-label":"close"},i),{},{type:"button",disabled:t,__css:l,children:a||(0,m.jsx)(R,{})}))})).displayName="TagCloseButton";var U=t(1175),V=function(e){var n=e.name,t=e.number,r=e.id,a=(0,o.I0)();return(0,m.jsxs)(z,{display:"flex",alignItems:"center",sx:{"@media screen and (max-width: 480px)":{fontSize:"var(--chakra-fontSizes-md)"}},children:[(0,m.jsxs)(M,{size:"lg",colorScheme:"green",borderRadius:"full",children:[(0,m.jsx)(U.q,{w:"30px",h:"30px",mr:"10px",name:n,src:"https://bit.ly/broken-link",sx:{"@media screen and (max-width: 480px)":{w:"25px",h:"25px"}}}),(0,m.jsxs)(P,{children:[n,":"]})]}),(0,m.jsx)(h.x,{ml:"10px",children:t})," ",(0,m.jsx)(l.z,{color:"var(--chakra-colors-teal-500)",height:"var(--chakra-sizes-6)",ml:"auto",type:"button",onClick:function(){return a((0,u.deleteContacts)(r))},children:"Delete"})]},r)},O=t(1331),q=function(){var e=(0,o.I0)();return(0,m.jsxs)(i.l,{m:"20px 0",textAlign:"center",children:["Find contacts by name",(0,m.jsx)(s.I,{placeholder:"Enter name",type:"text",name:"name",onChange:function(n){return e((0,O.s)(n.target.value))}})]})},W=t(9759),H=function(){var e=(0,W.g)().contacts;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.x,{fontSize:"3xl",textAlign:"center",children:"Contacts"}),(0,m.jsx)(q,{}),0!==e.length&&(0,m.jsx)(G,{spacing:3,children:e.map((function(e){var n=e.name,t=e.number,r=e.id;return(0,m.jsx)(V,{name:n,number:t,id:r},r)}))})]})},K=function(){var e=(0,o.I0)();return(0,Z.useEffect)((function(){e((0,u.fetchContacts)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{}),(0,m.jsx)(H,{})]})}}}]);
//# sourceMappingURL=537.908baa20.chunk.js.map