(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){},47:function(e,t,a){e.exports=a(79)},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),s=a(16),i=a(10),o=a(11),u=a(13),d=a(12),m=a(14),p=a(20),h=a(23),E=function(e){return{type:"GET_PRODUCTS",payload:e}},f=function(e){return{type:"TABLE_UPDATED",tableUpdated:e}},b=a(6),v=a(17),g=a(8),N=a.n(g),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveProduct=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.addNewProduct=function(e){""===a.state.name||""===a.state.description||""===a.state.type||""===a.state.date||""===a.state.price?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.name&&""===a.state.description&&""===a.state.type&&""===a.state.date&&""===a.state.price||N.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/products/",{name:a.state.name,description:a.state.description,type:a.state.type,date:a.state.date,price:a.state.price,_created:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={name:"",description:"",type:"",date:"",price:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"products"},l.a.createElement("div",{className:"new-container"},l.a.createElement("div",{className:"first-container"},l.a.createElement("div",{id:"new-product"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"name"},"Product Name"),l.a.createElement("input",{type:"text",name:"name",className:"text-field",id:"name",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"description"},"Product Description"),l.a.createElement("input",{type:"text",name:"description",className:"text-field",id:"description",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"type"},"Product Type"),l.a.createElement("input",{type:"text",name:"type",className:"text-field",id:"type",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"date"},"Purchase Date"),l.a.createElement("input",{type:"date",name:"date",className:"text-field",id:"date",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"price"},"Product Price"),l.a.createElement("input",{type:"text",name:"price",className:"text-field",id:"price",onChange:this.saveProduct})),l.a.createElement(b.b,{to:"/products"},l.a.createElement("button",{onClick:this.addNewProduct,class:"primary-button",type:"submit"},"CREATE PRODUCT"))))),l.a.createElement("div",{className:"second-container"},l.a.createElement("div",{className:"products-add"},l.a.createElement(h.a,{icon:p.b}),l.a.createElement("p",null,"You are creating a new product"))))))}}]),t}(l.a.Component);var O=Object(v.b)((function(e){return{}}))(y),j=(a(75),a(21)),_=a(45),x=a.n(_),w=a(46),P=a(22),C={products:[],tableUpdated:!1,totalPrice:""};var I=Object(j.c)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(P.a)({},e,{products:t.payload});case"SAVE_PRODUCT":return Object(P.a)({},e,{products:[].concat(Object(w.a)(e.products),[t.payload])});case"DELETE_PRODUCT":var a=e.products.filter((function(e){return t.payload._id!==e._id}));return Object(P.a)({},e,{products:a});case"GET_TOTAL_PRICE":return Object(P.a)({},e,{totalPrice:t.payload});case"TABLE_UPDATED":return Object(P.a)({},e,{tableUpdated:t.tableUpdated});default:return e}}}),T=Object(j.d)(I,Object(j.a)(x.a));console.log(T.getState());var S=T,D=(a(76),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;return this.props.products&&(e=this.props.products.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.description),l.a.createElement("td",null,e.date.toString().slice(0,10)),l.a.createElement("td",null,e.price),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-secondary",id:"edit"},l.a.createElement(h.a,{icon:p.a})),l.a.createElement("button",{className:"btn btn-danger",id:"delete"},l.a.createElement(h.a,{icon:p.c}))))}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-container"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Product Name"),l.a.createElement("th",null,"Product Type"),l.a.createElement("th",null,"Product Description"),l.a.createElement("th",null,"Purchase Date"),l.a.createElement("th",null,"Product Price"))),l.a.createElement("tbody",null,e))))}}]),t}(l.a.Component));var F=Object(v.b)((function(e){return{products:e.productReducer.products}}))(D),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).filterHandler=function(e){a.setState({didUpdate:!0,filterOption:e.target.value})},a.state={filterOption:null,didUpdate:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.products&&N.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){S.dispatch(E(e.data));for(var t=0,a=0;a<e.data.length;a++)t+=parseInt(e.data[a].price);S.dispatch({type:"GET_TOTAL_PRICE",payload:t})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){!0===this.state.didUpdate&&(null==this.state.filterOption?(N.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){S.dispatch(E(e.data)),S.dispatch(f(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1})):null!==this.state.filterOption&&(N.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=".concat(this.state.filterOption),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){S.dispatch(E(e.data)),S.dispatch(f(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1,filterOption:null})))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-div"},l.a.createElement("h3",null,"Products"),l.a.createElement("label",{htmlFor:"sort"},"Filter by:",l.a.createElement("select",{name:"filterOption",id:"sort",onChange:this.filterHandler},l.a.createElement("option",{value:"date:desc"},"Last Purchase"),l.a.createElement("option",{value:"date:asc"},"First Purchase"),l.a.createElement("option",{value:"price:desc"},"Highest Price"),l.a.createElement("option",{value:"price:asc"},"Lowest Price")))),l.a.createElement(F,null),l.a.createElement(b.b,{to:"/newproduct"},l.a.createElement("button",{id:"new-btn"},"NEW PRODUCT")))}}]),t}(l.a.Component);var k=Object(v.b)((function(e){return{products:e.productReducer.products,tableUpdated:e.productReducer.tableUpdated}}))(U),A=a(18),R=(a(77),a(42),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(A.a,{to:"/products"})},a.logIn=function(e){""===a.state.email||""===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.email&&""===a.state.password||(e.preventDefault(),N.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",e.data.first_name),localStorage.setItem("last_name",e.data.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)})))},a.state={email:"",password:"",isAuthenticated:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{id:"login"},l.a.createElement("div",{className:"box-container"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"email"},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",name:"email",id:"email",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",name:"password",id:"password",className:"text-field"})),l.a.createElement("button",{className:"primary-button",type:"submit",onClick:this.logIn},"SIGN IN"))),l.a.createElement("div",{className:"aditional-info"},l.a.createElement("p",null,"Or if you don't have an account.",l.a.createElement(b.b,{to:"/register"},"Register")))))}}]),t}(l.a.Component)),V=(a(78),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(A.a,{to:"/products"})},a.registerUser=function(e){null===a.state.first_name||null===a.state.last_name||null===a.state.email||null===a.state.date_of_birth||null===a.state.telephone||null===a.state.country||null===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):null==a.state.first_name&&null==a.state.last_name&&null==a.state.email&&null==a.state.date_of_birth&&null==a.state.telephone&&null==a.state.country&&null==a.state.password||(e.preventDefault(),N.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/register",{first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,date_of_birth:a.state.date_of_birth,telephone:a.state.telephone,country:a.state.country,password:a.state.password,_created:new Date}).then((function(e){console.log(e),N.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("name",a.state.first_name),localStorage.setItem("lastName",a.state.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))},a.state={first_name:null,last_name:null,email:null,date_of_birth:null,telephone:null,country:null,password:null,isAuthenticated:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{id:"register"},l.a.createElement("div",{className:"box-container"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"First Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"first_name",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Last Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"last_name",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",id:"email",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Date of Birth"),l.a.createElement("input",{onChange:this.saveInputValue,type:"date",id:"date_of_birth",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Telephone"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"telephone",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Country"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"country",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:""},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",id:"password",className:"text-field"})),l.a.createElement("button",{onClick:this.registerUser,type:"submit",className:"primary-button"},"REGISTER"))),l.a.createElement("div",{className:"aditional-info"},l.a.createElement("p",null,"Or if you don't have an account.",l.a.createElement(b.b,{to:"/"}," Sign in")))))}}]),t}(l.a.Component)),B=document.getElementById("root");c.a.render(l.a.createElement(v.a,{store:S},l.a.createElement((function(){return l.a.createElement(b.a,null,l.a.createElement(A.d,null,l.a.createElement(A.b,{exact:!0,path:"/",component:R}),l.a.createElement(A.b,{exact:!0,path:"/register",component:V}),l.a.createElement(A.b,{exact:!0,path:"/newproduct",render:function(){return l.a.createElement(O,{component:O})}}),l.a.createElement(A.b,{exact:!0,path:"/products",render:function(){return l.a.createElement(k,{table:F})}})))}),null)),B)}},[[47,1,2]]]);
//# sourceMappingURL=main.064a082d.chunk.js.map