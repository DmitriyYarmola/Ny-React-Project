(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[8],{317:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(320),r=n(0),o=n.n(r),i=(n(319),n(420)),c=n(419),l=n(314),u=n(145),m=function(e){var t=e.meta,n=e.children,a=t.touched&&t.error;return o.a.createElement("div",{className:"form-control ".concat(a?"error":"")},n,a&&o.a.createElement("span",null,t.error))},f=function(e){var t=e.input,n=Object(a.a)(e,["input"]);return o.a.createElement(m,e,o.a.createElement(i.a,Object.assign({className:"field",id:"input-with-icon-textfield"},t,n,{InputProps:n.visible?{startAdornment:o.a.createElement(c.a,{position:"start"},o.a.createElement(l.a,null))}:void 0})))};function s(e,t,n,a,r,i,c){return o.a.createElement("div",null,o.a.createElement(u.a,{validate:e,className:t,autoComplete:"off",placeholder:n,type:a,name:r,label:i,component:f,visible:c}))}},318:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=function(e){if(!e)return"Field is required"},r=function(e){if(!e)return""},o=function(e){return function(t){if(t&&t.length>e)return"Max Length ".concat(e," symbols")}},i=function(e){return function(t){if(t&&t.length<e)return"Min Length ".concat(e," symbols")}}},319:function(e,t,n){},412:function(e,t,n){},425:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),i=n(317),c=n(145),l=n(146),u=n(318),m=(n(412),Object(u.a)(30)),f=Object(u.b)(1),s=Object(l.a)({form:"profileEdit"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error;console.log(n);var o,l=[],u=n.contacts;for(var s in u)u[s]&&l.push(s);return o=l.map((function(e){return r.a.createElement("div",{key:e,className:"profile-edit-form_contact-".concat(e)},r.a.createElement("b",null,e,":"),Object(i.a)([m,f],"profile-edit-form_input-".concat(e),"contacts.".concat(e),"text","contacts.".concat(e),null,!1))})),r.a.createElement("form",{onSubmit:t,className:"profile-edit-form"},r.a.createElement("div",{className:"profile-edit-form_content"},r.a.createElement("div",{className:"profile-edit-form_nameUser"},r.a.createElement("b",null,"Your Name:"),Object(i.a)([m,f],"profile-edit-form_input-userName","fullName","text","fullName",null,!1)),r.a.createElement("b",null,"About me: "),Object(i.a)([m,f],"profile-edit-form_input-about","aboutMe","text","aboutMe",null,!1)),r.a.createElement("div",{className:"profile-edit-form_lookingForJob"},r.a.createElement("b",null,"looking Job:"),r.a.createElement(c.a,{validate:[m,f],placeholder:void 0,name:"lookingForAJob",component:"input",type:"checkbox",className:"profile-edit-form_input-lookingJob",autoComplete:"off"})),r.a.createElement("div",{className:"profile-edit-form_jobDescription"},r.a.createElement("b",null,"Job Description:"),Object(i.a)([m,f],"profile-edit-form_input-jobDescription","lookingForAJobDescription","text","lookingForAJobDescription",null,!1)),r.a.createElement("div",{className:"profile-edit-form_contacts"},r.a.createElement("b",null,"My contacts")," ",o),a&&r.a.createElement("div",{className:"form-summary_error"},a),r.a.createElement("button",{type:"submit"},"Save"))})),p=n(79),b=n(35);t.default=function(e){var t=Object(o.d)((function(e){return e.profilePage.profileMe})),n=Object(o.c)(),i=Object(a.useCallback)((function(e){n(Object(p.f)(e))}),[n]);return t?r.a.createElement(s,Object.assign({},e,{profile:t,initialValues:t,onSubmit:function(e){i(e)}})):r.a.createElement(b.a,{to:"/profile"})}}}]);
//# sourceMappingURL=8.ce5ee1a6.chunk.js.map