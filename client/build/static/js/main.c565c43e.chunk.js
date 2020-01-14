(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t){},43:function(e,t,a){e.exports=a(70)},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(20),r=a.n(s),c=a(10),i=a(13),o=a(14),u=a(16),p=a(15),d=a(17),m=a(8),f=a(22),h=a(12),E=a.n(h),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).saveProduct=function(e){a.setState(Object(c.a)({},e.target.id,e.target.value))},a.addNewProduct=function(e){""===a.state.name||""===a.state.description||""===a.state.type||""===a.state.date||""===a.state.price?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.name&&""===a.state.description&&""===a.state.type&&""===a.state.date&&""===a.state.price||E.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/products/",{name:a.state.name,description:a.state.description,type:a.state.type,date:a.state.date,price:a.state.price,_created:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={name:"",description:"",type:"",date:"",price:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"new-container"},l.a.createElement("div",{class:"first-container"},l.a.createElement("div",{id:"new-product"},l.a.createElement("form",null,l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"name"},"Product Name"),l.a.createElement("input",{type:"text",name:"name",class:"text-field",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"description"},"Product Description"),l.a.createElement("input",{type:"text",name:"description",class:"text-field",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"type"},"Product Type"),l.a.createElement("input",{type:"text",name:"type",class:"text-field",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"date"},"Purchase Date"),l.a.createElement("input",{type:"date",name:"date",class:"text-field",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"price"},"Product Price"),l.a.createElement("input",{type:"text",name:"price",class:"text-field",onChange:this.saveProduct})),l.a.createElement(m.b,{to:"/products"},l.a.createElement("button",{onClick:this.addNewProduct,class:"primary-button",type:"submit"},"CREATE PRODUCT"))))),l.a.createElement("div",{class:"second-container"},l.a.createElement("div",{class:"products-add"},l.a.createElement("i",{class:"fas fa-plus-circle fa-3x"}),l.a.createElement("p",null,"You are creating a new product")))))}}]),t}(l.a.Component);var g=Object(f.b)((function(e){return{}}))(b),v=a(29),x=a.n(v),y=a(11),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(c.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(y.a,{to:"/products"})},a.logIn=function(e){""===a.state.email||""===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.email&&""===a.state.password||(e.preventDefault(),E.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",e.data.first_name),localStorage.setItem("last_name",e.data.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)})))},a.state={email:"",password:"",isAuthenticated:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{id:"login"},l.a.createElement("div",{class:"box-container"},l.a.createElement("form",null,l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"email"},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",name:"email",id:"email",class:"text-field"})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"password"},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",name:"password",id:"password",class:"text-field"})),l.a.createElement("button",{class:"primary-button",type:"submit",onClick:this.logIn},"SIGN IN"))),l.a.createElement("div",{class:"textDiv"},l.a.createElement("p",null,"Or if you don't have an account.",l.a.createElement(m.b,{to:"/register",class:"additional-info"},"Register")))))}}]),t}(l.a.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(c.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(y.a,{to:"/products"})},a.registerUser=function(e){null===a.state.first_name||null===a.state.last_name||null===a.state.email||null===a.state.date_of_birth||null===a.state.telephone||null===a.state.country||null===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):null==a.state.first_name&&null==a.state.last_name&&null==a.state.email&&null==a.state.date_of_birth&&null==a.state.telephone&&null==a.state.country&&null==a.state.password||(e.preventDefault(),E.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/register",{first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,date_of_birth:a.state.date_of_birth,telephone:a.state.telephone,country:a.state.country,password:a.state.password,_created:new Date}).then((function(e){console.log(e),E.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("name",a.state.first_name),localStorage.setItem("lastName",a.state.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},a.state={first_name:null,last_name:null,email:null,date_of_birth:null,telephone:null,country:null,password:null,isAuthenticated:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{class:"box-container",id:"register"},l.a.createElement("form",null,l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:""},"First Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",class:"text-field"})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:""},"Last Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",class:"text-field"})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:""},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",class:"text-field"})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:""},"Date of Birth"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",class:"text-field"})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:""},"Telephone"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",class:"text-field"})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:""},"Country"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",class:"text-field"})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:""},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",class:"text-field"})),l.a.createElement("button",{onClick:this.registerUser,type:"submit",class:"primary-button"},"REGISTER"))),l.a.createElement("div",{class:"aditional-info"},l.a.createElement("p",null,"Or if you don't have an account.",l.a.createElement(m.b,{to:"/",className:"additional-info"}," Sign in"))))}}]),t}(l.a.Component),O=a(18),j=a(41),C=a.n(j),I=a(42),P=a(23),S={products:[]};var D=Object(O.c)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(P.a)({},e,{products:t.payload});case"SAVE_PRODUCT":return Object(P.a)({},e,{products:[].concat(Object(I.a)(e.products),[t.payload])});case"DELETE_PRODUCT":var a=e.products.filter((function(e){return t.payload._id!==e._id}));return Object(P.a)({},e,{products:a});default:return e}}}),T=Object(O.d)(D,Object(O.a)(C.a));console.log(T.getState());var k=T,V=document.getElementById("root");r.a.render(l.a.createElement(f.a,{store:k},l.a.createElement((function(){return l.a.createElement(m.a,null,l.a.createElement(y.d,null,l.a.createElement(y.b,{exact:!0,path:"/",component:w}),l.a.createElement(y.b,{exact:!0,path:"/register",component:_}),l.a.createElement(y.b,{exact:!0,path:"/newproduct",render:function(){return l.a.createElement(g,{component:g})}}),l.a.createElement(y.b,{exact:!0,path:"/products",render:function(){return l.a.createElement(x.a,{component:x.a})}})))}),null)),V)}},[[43,1,2]]]);
//# sourceMappingURL=main.c565c43e.chunk.js.map