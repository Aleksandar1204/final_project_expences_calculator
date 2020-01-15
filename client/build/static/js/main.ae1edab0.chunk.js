(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){},47:function(e,t,a){e.exports=a(78)},73:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),s=a(16),i=a(10),o=a(11),u=a(13),d=a(12),p=a(14),m=function(e){return{type:"GET_PRODUCTS",payload:e}},h=a(9),f=a(19),E=a(6),b=a.n(E),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveProduct=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.addNewProduct=function(e){""===a.state.name||""===a.state.description||""===a.state.type||""===a.state.date||""===a.state.price?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.name&&""===a.state.description&&""===a.state.type&&""===a.state.date&&""===a.state.price||b.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/products/",{name:a.state.name,description:a.state.description,type:a.state.type,date:a.state.date,price:a.state.price,_created:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={name:"",description:"",type:"",date:"",price:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"new-container"},l.a.createElement("div",{class:"first-container"},l.a.createElement("div",{id:"new-product"},l.a.createElement("form",null,l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"name"},"Product Name"),l.a.createElement("input",{type:"text",name:"name",class:"text-field",id:"name",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"description"},"Product Description"),l.a.createElement("input",{type:"text",name:"description",class:"text-field",id:"description",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"type"},"Product Type"),l.a.createElement("input",{type:"text",name:"type",class:"text-field",id:"type",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"date"},"Purchase Date"),l.a.createElement("input",{type:"date",name:"date",class:"text-field",id:"date",onChange:this.saveProduct})),l.a.createElement("p",{class:"input-container"},l.a.createElement("label",{class:"text-field-input",for:"price"},"Product Price"),l.a.createElement("input",{type:"text",name:"price",class:"text-field",id:"price",onChange:this.saveProduct})),l.a.createElement(h.b,{to:"/products"},l.a.createElement("button",{onClick:this.addNewProduct,class:"primary-button",type:"submit"},"CREATE PRODUCT"))))),l.a.createElement("div",{class:"second-container"},l.a.createElement("div",{class:"products-add"},l.a.createElement("i",{class:"fas fa-plus-circle fa-3x"}),l.a.createElement("p",null,"You are creating a new product")))))}}]),t}(l.a.Component);var g=Object(f.b)((function(e){return{}}))(v),y=a(20),O=a(45),j=a.n(O),N=a(46),x=a(22),w={products:[],tableUpdated:!1};var _=Object(y.c)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(x.a)({},e,{products:t.payload});case"SAVE_PRODUCT":return Object(x.a)({},e,{products:[].concat(Object(N.a)(e.products),[t.payload])});case"DELETE_PRODUCT":var a=e.products.filter((function(e){return t.payload._id!==e._id}));return Object(x.a)({},e,{products:a});case"TABLE_UPDATED":return Object(x.a)({},e,{tableUpdated:t.tableUpdated});default:return e}}}),P=Object(y.d)(_,Object(y.a)(j.a));console.log(P.getState());var C=P,I=(a(73),a(30)),D=a(25),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){C.dispatch(m(e.data))})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){this.props.tableUpdated&&b.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){C.dispatch(m(e.data)),C.dispatch({type:"TABLE_UPDATED",tableUpdated:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=null;return this.props.products&&(e=this.props.products.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.description),l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.price),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-secondary",id:"edit"},l.a.createElement(I.a,{icon:D.a})),l.a.createElement("button",{className:"btn btn-danger",id:"delete"},l.a.createElement(I.a,{icon:D.b}))))}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-container"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Product Name"),l.a.createElement("th",null,"Product Type"),l.a.createElement("th",null,"Product Description"),l.a.createElement("th",null,"Purchase Date"),l.a.createElement("th",null,"Product Price"))),l.a.createElement("tbody",null,e))))}}]),t}(l.a.Component);var k=Object(f.b)((function(e){return{products:e.productReducer.products,tableUpdated:e.productReducer.tableUpdated}}))(S),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).filterHandler=function(e){a.setState({filterOption:e.target.value})},a.state={filterOption:null,showProducts:!0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){null!==this.state.filterOption&&b.a.get("https://stark-island-29614.herokuapp.com/app/v1/products/?sort=".concat(this.state.filterOption),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){C.dispatch(m(e.data))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-div"},l.a.createElement("h3",null,"Products"),l.a.createElement("label",{htmlFor:"sort"},"Filter by:",l.a.createElement("select",{name:"filterOption",id:"sort",onChange:this.filterHandler},l.a.createElement("option",{value:"date:desc"},"Last Purchase"),l.a.createElement("option",{value:"date:asc"},"First Purchase"),l.a.createElement("option",{value:"price:desc"},"Highest Price"),l.a.createElement("option",{value:"price:asc"},"Lowest Price")))),l.a.createElement(k,{showProducts:this.state.showProducts}))}}]),t}(l.a.Component),F=a(17),U=(a(76),a(42),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(F.a,{to:"/products"})},a.logIn=function(e){""===a.state.email||""===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.email&&""===a.state.password||(e.preventDefault(),b.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",e.data.first_name),localStorage.setItem("last_name",e.data.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)})))},a.state={email:"",password:"",isAuthenticated:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{id:"login"},l.a.createElement("div",{className:"box-container"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"email"},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",name:"email",id:"email",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",name:"password",id:"password",className:"text-field"})),l.a.createElement("button",{className:"primary-button",type:"submit",onClick:this.logIn},"SIGN IN"))),l.a.createElement("div",{className:"aditional-info"},l.a.createElement("p",null,"Or if you don't have an account.",l.a.createElement(h.b,{to:"/register"},"Register")))))}}]),t}(l.a.Component)),A=(a(77),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(F.a,{to:"/products"})},a.registerUser=function(e){null===a.state.first_name||null===a.state.last_name||null===a.state.email||null===a.state.date_of_birth||null===a.state.telephone||null===a.state.country||null===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):null==a.state.first_name&&null==a.state.last_name&&null==a.state.email&&null==a.state.date_of_birth&&null==a.state.telephone&&null==a.state.country&&null==a.state.password||(e.preventDefault(),b.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/register",{first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,date_of_birth:a.state.date_of_birth,telephone:a.state.telephone,country:a.state.country,password:a.state.password,_created:new Date}).then((function(e){console.log(e),b.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("name",a.state.first_name),localStorage.setItem("lastName",a.state.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},a.state={first_name:null,last_name:null,email:null,date_of_birth:null,telephone:null,country:null,password:null,isAuthenticated:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{id:"register"},l.a.createElement("div",{className:"box-container"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"First Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"first_name",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Last Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"last_name",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",id:"email",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Date of Birth"),l.a.createElement("input",{onChange:this.saveInputValue,type:"date",id:"date_of_birth",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Telephone"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"telephone",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Country"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"country",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",id:"password",className:"text-field"})),l.a.createElement("button",{onClick:this.registerUser,type:"submit",className:"primary-button"},"REGISTER"))),l.a.createElement("div",{className:"aditional-info"},l.a.createElement("p",null,"Or if you don't have an account.",l.a.createElement(h.b,{to:"/"}," Sign in")))))}}]),t}(l.a.Component)),R=document.getElementById("root");c.a.render(l.a.createElement(f.a,{store:C},l.a.createElement((function(){return l.a.createElement(h.a,null,l.a.createElement(F.d,null,l.a.createElement(F.b,{exact:!0,path:"/",component:U}),l.a.createElement(F.b,{exact:!0,path:"/register",component:A}),l.a.createElement(F.b,{exact:!0,path:"/newproduct",render:function(){return l.a.createElement(g,{component:g})}}),l.a.createElement(F.b,{exact:!0,path:"/products",render:function(){return l.a.createElement(T,{component:T})}})))}),null)),R)}},[[47,1,2]]]);
//# sourceMappingURL=main.ae1edab0.chunk.js.map