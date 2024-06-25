"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[519],{6760:(e,s,n)=>{n.d(s,{A:()=>i});n(5043);var l=n(579);const i=()=>(0,l.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})},5560:(e,s,n)=>{n.d(s,{A:()=>r});n(5043);var l=n(5369),i=n(9776),t=n(5475),o=n(579);const r=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.Vq,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(l.ok6,{})})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(l.Vk6,{})})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(l.ao$,{})})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,o.jsx)("a",{href:"#",target:"_blank",rel:"noreferrer",children:"Nisha Gupta"})," ","\xa9 ",(new Date).getFullYear()]})]})})},8114:(e,s,n)=>{n.d(s,{A:()=>x});var l=n(5043),i=n(3216),t=n(5475),o=n(9776),r=n(9456),a=n(5089),c=n(1009),d=n(5922),h=n(7070),m=n(579);const x=()=>{const[e,s]=(0,l.useState)(!1),n=(0,r.wA)(),x=(0,i.Zp)(),[j,u]=(0,l.useState)(localStorage.getItem("token")||""),[p,v]=(0,l.useState)(localStorage.getItem("token")?(0,h.A)(localStorage.getItem("token")):"");return(0,m.jsxs)("header",{children:[(0,m.jsxs)("nav",{className:e?"nav-active":"",children:[(0,m.jsx)("h2",{className:"nav-logo",children:(0,m.jsx)(t.k2,{to:"/",children:"HealthBooker"})}),(0,m.jsxs)("ul",{className:"nav-links",children:[(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{to:"/",children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),j&&p.isAdmin&&(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{to:"/dashboard/users",children:"Dashboard"})}),j&&!p.isAdmin&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.Vq,{to:"/#contact",children:"Contact Us"})}),(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{to:"/profile",children:"Profile"})})]}),j?(0,m.jsx)("li",{children:(0,m.jsx)("span",{className:"btn",onClick:()=>{n((0,a.iA)({})),localStorage.removeItem("token"),x("/login")},children:"Logout"})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{className:"btn",to:"/login",children:"Login"})}),(0,m.jsx)("li",{children:(0,m.jsx)(t.k2,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,m.jsxs)("div",{className:"menu-icons",children:[!e&&(0,m.jsx)(c.ND1,{className:"menu-open",onClick:()=>{s(!0)}}),e&&(0,m.jsx)(d.clO,{className:"menu-close",onClick:()=>{s(!1)}})]})]})}},6519:(e,s,n)=>{n.r(s),n.d(s,{default:()=>v});var l=n(5043),i=n(6213),t=n(2339),o=n(4960),r=n(579);const a=e=>{let{setModalOpen:s,ele:n}=e;const[a,c]=(0,l.useState)({date:"",time:""}),d=e=>{const{name:s,value:n}=e.target;return c({...a,[s]:n})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"modal flex-center",children:(0,r.jsxs)("div",{className:"modal__content",children:[(0,r.jsx)("h2",{className:"page-heading",children:"Book Appointment"}),(0,r.jsx)(o.WQq,{onClick:()=>{s(!1)},className:"close-btn"}),(0,r.jsx)("div",{className:"register-container flex-center book",children:(0,r.jsxs)("form",{className:"register-form",children:[(0,r.jsx)("input",{type:"date",name:"date",className:"form-input",value:a.date,onChange:d}),(0,r.jsx)("input",{type:"time",name:"time",className:"form-input",value:a.time,onChange:d}),(0,r.jsx)("button",{type:"submit",className:"btn form-btn",onClick:async e=>{e.preventDefault();try{var l,o,r;await t.Ay.promise(i.A.post("/appointment/bookappointment",{doctorId:null===n||void 0===n||null===(l=n.userId)||void 0===l?void 0:l._id,date:a.date,time:a.time,doctorname:"".concat(null===n||void 0===n||null===(o=n.userId)||void 0===o?void 0:o.firstname," ").concat(null===n||void 0===n||null===(r=n.userId)||void 0===r?void 0:r.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."}),s(!1)}catch(c){return c}},children:"book"})]})})]})})})},c=e=>{var s,n,i,o;let{ele:c}=e;const[d,h]=(0,l.useState)(!1),[m,x]=(0,l.useState)(localStorage.getItem("token")||"");return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card-img flex-center",children:(0,r.jsx)("img",{src:(null===c||void 0===c||null===(s=c.userId)||void 0===s?void 0:s.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:"profile"})}),(0,r.jsxs)("h3",{className:"card-name",children:["Dr. ",(null===c||void 0===c||null===(n=c.userId)||void 0===n?void 0:n.firstname)+" "+(null===c||void 0===c||null===(i=c.userId)||void 0===i?void 0:i.lastname)]}),(0,r.jsxs)("p",{className:"specialization",children:[(0,r.jsx)("strong",{children:"Specialization: "}),null===c||void 0===c?void 0:c.specialization]}),(0,r.jsxs)("p",{className:"experience",children:[(0,r.jsx)("strong",{children:"Experience: "}),null===c||void 0===c?void 0:c.experience,"yrs"]}),(0,r.jsxs)("p",{className:"fees",children:[(0,r.jsx)("strong",{children:"Fees per consultation: "}),"Rs ",null===c||void 0===c?void 0:c.fees]}),(0,r.jsxs)("p",{className:"phone",children:[(0,r.jsx)("strong",{children:"Phone: "}),null===c||void 0===c||null===(o=c.userId)||void 0===o?void 0:o.mobile]}),(0,r.jsx)("button",{className:"btn appointment-btn",onClick:()=>{if(""===m)return t.oR.error("You must log in first");h(!0)},children:"Book Appointment"}),d&&(0,r.jsx)(a,{setModalOpen:h,ele:c})]})};var d=n(5560),h=n(8114),m=n(5789),x=n(8271),j=n(9456),u=n(5089),p=n(6760);const v=()=>{const[e,s]=(0,l.useState)([]),n=(0,j.wA)(),{loading:i}=(0,j.d4)((e=>e.root));return(0,l.useEffect)((()=>{(async()=>{n((0,u.r1)(!0));const e=await(0,m.A)("/doctor/getalldoctors");s(e),n((0,u.r1)(!1))})()}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.A,{}),i&&(0,r.jsx)(x.A,{}),!i&&(0,r.jsxs)("section",{className:"container doctors",children:[(0,r.jsx)("h2",{className:"page-heading",children:"Our Doctors"}),e.length>0?(0,r.jsx)("div",{className:"doctors-card-container",children:e.map((e=>(0,r.jsx)(c,{ele:e},e._id)))}):(0,r.jsx)(p.A,{})]}),(0,r.jsx)(d.A,{})]})}}}]);
//# sourceMappingURL=519.8794ba58.chunk.js.map