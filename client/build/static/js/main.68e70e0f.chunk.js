(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/small_profile.cee72d8c.png"},49:function(e,t,a){e.exports=a(83)},54:function(e,t,a){},55:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=a(18),i=a(5),s=a(6),d=a(9),u=a(7),p=a(10),m=(a(54),a(55),a(3)),h=(a(33),function(e){return l.a.createElement("div",{className:"main-alert"},l.a.createElement("div",{className:"footer"}),l.a.createElement("div",{className:"alert-box"},l.a.createElement("p",{className:"p-header"},"You are signing out"),l.a.createElement("p",null,"You are about to sign out. Are you sure ?"),l.a.createElement("div",{className:"alert-buttons"},l.a.createElement("button",{className:"cancel-button",id:"close",onClick:e.hide},"CANCEL"),l.a.createElement("button",{className:"delete-button",onClick:e.signOutAccepted},"SIGN OUT"))))}),E=function(e){return{type:"GET_PRODUCTS",payload:e}},f=function(e){return{type:"GET_TOTAL_PRICE",payload:e}},g=function(e,t){return{type:"EDIT_PRODUCT",product:e,editProductClicked:t}},y=function(e){return{type:"EDIT_PRODUCT_CLICKED",editProductClicked:e}},v=function(e){return{type:"EXPENSES_CLICKED",expensesClicked:e}},b=function(e){return{type:"TABLE_UPDATED",tableUpdated:e}},N=function(e){return{type:"SAVE_USER_NAME",userName:e}},C=a(22),P=a(45),S=a.n(P),k=a(17),O={products:[],tableUpdated:!1,totalPrice:"",productToEdit:"",editProductClicked:"",expensesClicked:!1,userName:""};var w=Object(C.c)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(k.a)({},e,{products:t.payload});case"EDIT_PRODUCT":return Object(k.a)({},e,{productToEdit:t.product});case"EDIT_PRODUCT_CLICKED":return Object(k.a)({},e,{editProductClicked:t.editProductClicked});case"EXPENSES_CLICKED":return Object(k.a)({},e,{expensesClicked:t.expensesClicked});case"DELETE_PRODUCT":return Object(k.a)({},e,{products:e.products.filter((function(e){return e._id!==t.payload}))});case"GET_TOTAL_PRICE":return Object(k.a)({},e,{totalPrice:t.payload});case"TABLE_UPDATED":return Object(k.a)({},e,{tableUpdated:t.tableUpdated});case"SAVE_USER_NAME":return Object(k.a)({},e,{userName:t.userName});default:return e}}}),_=Object(C.d)(w,Object(C.a)(S.a)),j=a(19),D=a(8),T=a(47),x=a.n(T),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).expensesClicked=function(){_.dispatch(v(!a.state.expensesClicked))},a.productsClicked=function(){_.dispatch(v(a.state.expensesClicked))},a.signOutClicked=function(){a.setState({signOutClicked:!0})},a.hideSignOut=function(){a.setState({signOutClicked:!1})},a.signOutAccepted=function(){localStorage.clear(),localStorage.removeItem("jwt"),a.setState({signOut:!0})},a.state={expensesClicked:!1,signOut:!1,signOutClicked:!1,name:a.props.userName},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("first_name")+" "+localStorage.getItem("last_name");this.setState({name:e})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,localStorage.getItem("jwt")?null:l.a.createElement(j.a,{to:"/"}),l.a.createElement("header",null,l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"buttons"},l.a.createElement(m.c,{to:"/products",className:"btn-links",onClick:this.productsClicked}," Products"),l.a.createElement(m.c,{to:"/expences",className:"btn-links",onClick:this.expensesClicked}," Expenses")),l.a.createElement("div",{className:"right-side"},l.a.createElement("img",{id:"profile-image",src:x.a,alt:"profile"}),l.a.createElement("p",{id:"name-p"},this.state.name),l.a.createElement("p",{className:"sign-out"},l.a.createElement(m.b,{to:"#",onClick:this.signOutClicked},"Sign Out"))))),this.state.signOutClicked?l.a.createElement(h,{hide:this.hideSignOut,signOutAccepted:this.signOutAccepted}):null)}}]),t}(l.a.Component);var A=Object(D.b)((function(e){return{userName:e.productReducer.userName}}),(function(e){return{saveUserName:function(t){return e(N(t))}}}))(I),U=a(21),R=a(24),F=a(4),M=a.n(F),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).saveProduct=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.addNewProduct=function(e){""===a.state.name||""===a.state.description||""===a.state.type||""===a.state.date||""===a.state.price?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.name&&""===a.state.description&&""===a.state.type&&""===a.state.date&&""===a.state.price||M.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/products/",{name:a.state.name,description:a.state.description,type:a.state.type,date:a.state.date,price:a.state.price,_created:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.editProduct=function(e){""===a.state.name||""===a.state.type||""===a.state.description||""===a.state.date||""===a.state.price?(alert("Please fill in the required fields:"),e.preventDefault()):(_.dispatch(b(!a.state.tableUpdated)),M.a.put("https://hidden-everglades-59214.herokuapp.com/app/v1/products/".concat(a.props.productToEdit._id),{name:a.state.name,type:a.state.type,description:a.state.description,date:a.state.date,price:a.state.price,_modified:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})))},a.state={name:a.props.editProductClicked?a.props.productToEdit.name:"",type:a.props.editProductClicked?a.props.productToEdit.type:"",description:a.props.editProductClicked?a.props.productToEdit.description:"",date:a.props.editProductClicked?a.props.productToEdit.date:"",price:a.props.editProductClicked?a.props.productToEdit.price:"",tableUpdated:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),this.props.editProductClicked?l.a.createElement("h1",{id:"new-products-h3"},"Edit Product"):l.a.createElement("h1",{id:"new-products-h3"},"New Product"),l.a.createElement("div",{className:"new-container"},l.a.createElement("div",{className:"first-container"},l.a.createElement("div",{id:"new-product"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"name"},"Product Name"),l.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.name:"",type:"text",name:"name",className:"text-field",id:"name",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"description"},"Product Description"),l.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.description:"",type:"text",name:"description",className:"text-field",id:"description",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"type"},"Product Type"),l.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.type:"",type:"text",name:"type",className:"text-field",id:"type",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"date"},"Purchase Date"),l.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.date.toString().slice(0,10):"",type:"date",name:"date",className:"text-field",id:"date",onChange:this.saveProduct})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"price"},"Product Price"),l.a.createElement("input",{defaultValue:this.props.editProductClicked?Number(this.props.productToEdit.price):"",type:"text",name:"price",className:"text-field",id:"price",onChange:this.saveProduct})),l.a.createElement(m.b,{to:"/products"},this.props.editProductClicked?l.a.createElement("button",{onClick:this.editProduct,id:"primary-button",className:"primary-button",type:"submit"},"EDIT PRODUCT"):l.a.createElement("button",{onClick:this.addNewProduct,className:"primary-button",type:"submit"},"CREATE PRODUCT"))))),l.a.createElement("div",{className:"second-container"},l.a.createElement("div",{className:"products-add"},l.a.createElement(R.a,{icon:U.b,style:{color:"#8D8D8D"},size:"3x"}),this.props.editProductClicked?l.a.createElement("p",null,"You are editing a product"):l.a.createElement("p",null,"You are creating a new product")))))}}]),t}(l.a.Component);var V=Object(D.b)((function(e){return{productToEdit:e.productReducer.productToEdit,editProductClicked:e.productReducer.editProductClicked,tableUpdated:e.productReducer.tableUpdated}}))(L),z=(a(43),a(79),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).deleteProduct=function(e){M.a.delete("https://hidden-everglades-59214.herokuapp.com/app/v1/products/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){console.log(t),_.dispatch({type:"DELETE_PRODUCT",payload:e}),a.setState({showModal:null})})).catch((function(e){console.log(e)}))},a.showAlert=function(e){a.setState({showModal:l.a.createElement("div",{className:"main-alert"},l.a.createElement("div",{className:"footer"}),l.a.createElement("div",{className:"alert-box"},l.a.createElement("p",{className:"p-header"},"Delete Product"),l.a.createElement("p",null,"You are about to delete this product. Are you sure you wish to continue? "),l.a.createElement("div",{className:"alert-buttons"},l.a.createElement("button",{onClick:function(){return a.setState({showModal:null})},className:"cancel-button",id:"close"},"CANCEL"),l.a.createElement("button",{onClick:function(){return a.deleteProduct(e)},className:"delete-button"},"DELETE"))))})},a.editProduct=function(e){var t=!a.state.editProductClicked;_.dispatch(g(e)),_.dispatch(y(t))},a.state={editProductClicked:!1,showModal:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.props.products&&(t=this.props.products.map((function(t){return l.a.createElement("tr",{key:t._id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.type),l.a.createElement("td",null,t.description),l.a.createElement("td",null,t.date.toString().slice(0,10)),l.a.createElement("td",null,t.price),e.props.showProducts?l.a.createElement("td",null,l.a.createElement(m.b,{to:"/edit-product"},l.a.createElement("button",{className:"btn-secondary",title:"Edit this product",id:"edit",onClick:function(){return e.editProduct(t)}},l.a.createElement(R.a,{icon:U.a}))),l.a.createElement("button",{className:"btn-danger",title:"Delete this product",id:"delete",onClick:function(){return e.showAlert(t._id)}},l.a.createElement(R.a,{icon:U.c}))):null)}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-container"},this.state.showModal,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Product Name"),l.a.createElement("th",null,"Product Type"),l.a.createElement("th",null,"Product Description"),l.a.createElement("th",null,"Purchase Date"),l.a.createElement("th",null,"Product Price"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t))))}}]),t}(l.a.Component));var B=Object(D.b)((function(e){return{products:e.productReducer.products,editProductClicked:e.productReducer.editProductClicked}}))(z),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).filterHandler=function(e){a.setState({didUpdate:!0,filterOption:e.target.value}),console.log(e.target.value)},a.newProductHandler=function(){a.setState({clicked:!0}),_.dispatch(y(a.state.clicked)),a.props.editProduct(a.state.product)},a.state={filterOption:null,didUpdate:!1,showProducts:!0,clicked:!1,product:null,loading:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.products&&(this.setState({loading:!0}),M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){e.setState({loading:!1}),_.dispatch(E(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){console.log(e)})))}},{key:"componentDidUpdate",value:function(){!0===this.state.didUpdate&&(null==this.state.filterOption?(M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){_.dispatch(E(e.data)),_.dispatch(b(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1})):null!==this.state.filterOption&&(M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=".concat(this.state.filterOption),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){_.dispatch(E(e.data)),_.dispatch(b(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1,filterOption:null})))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement("div",{className:"main-select-div"},l.a.createElement("div",{className:"select-div-header"},l.a.createElement("h1",null,"Products"),l.a.createElement("label",{htmlFor:"sort"},"Filter by:",l.a.createElement("select",{name:"filterOption",id:"sort",onChange:this.filterHandler},l.a.createElement("option",{value:"date:desc"},"Last Purchase"),l.a.createElement("option",{value:"date:asc"},"First Purchase"),l.a.createElement("option",{value:"price:desc"},"Highest Price"),l.a.createElement("option",{value:"price:asc"},"Lowest Price")))),l.a.createElement(B,{showProducts:this.state.showProducts})),l.a.createElement(m.b,{to:"/newproduct"},l.a.createElement("button",{id:"new-btn",onClick:this.newProductHandler},"NEW PRODUCT")),this.state.loading&&l.a.createElement("div",{style:{color:"grey",fontSize:"50px",textAlign:"center"}},"LOADING..."))}}]),t}(l.a.Component);var H=Object(D.b)((function(e){return{products:e.productReducer.products,tableUpdated:e.productReducer.tableUpdated}}),(function(e){return{getTotalPrice:function(t){return e(f(t))},editProduct:function(t){return e(g(t))}}}))(G),Y=(a(80),a(44),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(j.a,{to:"/products"})},a.logIn=function(e){e.preventDefault(),M.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",e.data.first_name),localStorage.setItem("last_name",e.data.last_name),a.setState({isAuthenticated:!0,error:!1});var t=localStorage.getItem("first_name")+" "+localStorage.getItem("last_name");a.props.saveUserName(t)})).catch((function(e){a.setState({error:!0}),console.log(e)}))},a.state={email:"",password:"",isAuthenticated:!1,error:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.clear()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{id:"login"},l.a.createElement("div",{className:"box-container"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"email"},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",name:"email",id:"email",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",name:"password",id:"password",className:"text-field"})),this.state.error&&l.a.createElement("div",{style:{color:"red",textAlign:"center"}},"Wrong email or password."),l.a.createElement("button",{className:"primary-button",type:"submit",onClick:this.logIn},"SIGN IN"))),l.a.createElement("div",{className:"aditional-info"},l.a.createElement("p",null,"Or if you don't have an account.",l.a.createElement(m.b,{to:"/register"},"Register")))))}}]),t}(l.a.Component));var J=Object(D.b)((function(e){return{userName:e.productReducer.userName}}),(function(e){return{saveUserName:function(t){return e(N(t))}}}))(Y),K=(a(81),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return l.a.createElement(j.a,{to:"/products"})},a.registerUser=function(e){null===a.state.first_name||null===a.state.last_name||null===a.state.email||null===a.state.date_of_birth||null===a.state.telephone||null===a.state.country||null===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):null==a.state.first_name&&null==a.state.last_name&&null==a.state.email&&null==a.state.date_of_birth&&null==a.state.telephone&&null==a.state.country&&null==a.state.password||(e.preventDefault(),M.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/register",{first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,date_of_birth:a.state.date_of_birth,telephone:a.state.telephone,country:a.state.country,password:a.state.password,_created:new Date}).then((function(e){setTimeout((function(){M.a.post("https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",a.state.first_name),localStorage.setItem("last_name",a.state.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)}))}),1e3)})).catch((function(e){console.log(e)})))},a.state={first_name:null,last_name:null,email:null,date_of_birth:null,telephone:null,country:null,password:null,isAuthenticated:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.clear()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.redirectToMain(),l.a.createElement("div",{id:"register"},l.a.createElement("div",{className:"box-container"},l.a.createElement("form",null,l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"first_name"},"First Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"first_name",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"last_name"},"Last Name"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"last_name",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"email"},"E-mail"),l.a.createElement("input",{onChange:this.saveInputValue,type:"email",id:"email",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"date_of_birth"},"Date of Birth"),l.a.createElement("input",{onChange:this.saveInputValue,type:"date",id:"date_of_birth",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"telephone"},"Telephone"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"telephone",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"country"},"Country"),l.a.createElement("input",{onChange:this.saveInputValue,type:"text",id:"country",className:"text-field"})),l.a.createElement("p",{className:"input-container"},l.a.createElement("label",{className:"text-field-input",htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:this.saveInputValue,type:"password",id:"password",className:"text-field"})),l.a.createElement("button",{onClick:this.registerUser,type:"submit",className:"primary-button"},"REGISTER"))),l.a.createElement("div",{className:"aditional-info"},l.a.createElement("p",null,"Or if you already have an account.",l.a.createElement(m.b,{to:"/"}," Sign in")))))}}]),t}(l.a.Component)),q=(a(82),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).yearlySelect=function(){a.setState({monthlyDisplay:!1,yearlyDisplay:!0,active:!1,yearlySelected:"all",monthlySelected:null})},a.monthlySelect=function(){a.setState({yearlyDisplay:!1,monthlyDisplay:!0,active:!0,monthlySelected:"months",yearlySelected:null})},a.yearlySelectHandler=function(e){a.setState({yearlySelected:e.target.value})},a.monthlySelectHandler=function(e){a.setState({monthlySelected:e.target.value})},a.state={monthlyDisplay:!1,yearlyDisplay:!0,active:!1,monthlySelected:null,yearlySelected:null},a.year=(new Date).getFullYear()-20,a.years=Array.from(new Array(21),(function(e,t){return t+a.year})),a.months=["January","February","March","April","May","June","July","August","September","October","November","December"],a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){e.setState({loading:!1}),_.dispatch(E(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a),console.log("didMount")})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){var e=this;if("all"===this.state.yearlySelected)M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){_.dispatch(E(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){console.log(e)}));else if(null==this.state.yearlySelected||4!==this.state.yearlySelected.length||this.state.monthlyDisplay){if("months"===this.state.monthlySelected)M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){_.dispatch(E(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){console.log(e)}));else if(null!=this.state.monthlySelected&&null!=this.state.yearlySelected&&this.state.monthlyDisplay){var t;console.log("Vleze");for(var a=0;a<this.months.length;a++)this.state.monthlySelected===this.months[a]&&(t=a+1,1===a.toString().length&&(t="0"+t.toString()));console.log(t+"Month is");var n=new Date("".concat(this.state.yearlySelected,"-").concat(t,"-01 00:00:00.000")).getTime();console.log(t+"Month is");var l=new Date("".concat(this.state.yearlySelected,"-").concat(t,"-31 23:59:59.000")).getTime();console.log(n+" "+l),console.log(t+"Month is"),M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?date_from=".concat(n,"&date_to=").concat(l),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){_.dispatch(E(t.data));for(var a=0,c=0;c<t.data.length;c++)a+=parseInt(t.data[c].price);e.props.getTotalPrice(a),console.log(n+" "+l)})).catch((function(e){return console.log(e)}))}}else{var c=new Date("".concat(this.state.yearlySelected,"-01-01 00:00:00.000")).getTime(),r=new Date("".concat(this.state.yearlySelected,"-12-31 23:59:59.000")).getTime();console.log(c+" "+r),M.a.get("https://hidden-everglades-59214.herokuapp.com/app/v1/products/?date_from=".concat(c,"&date_to=").concat(r),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){_.dispatch(E(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){return console.log(e)}))}}},{key:"render",value:function(){var e=l.a.createElement("select",{name:"year-select",className:"month-select",onChange:this.yearlySelectHandler},l.a.createElement("option",{defaultChecked:!0,value:"all"}," ALL"),this.years.map((function(e,t){return l.a.createElement("option",{key:"year".concat(t),value:e},e)}))),t=l.a.createElement("select",{name:"month-select",className:"month-select",onChange:this.monthlySelectHandler},l.a.createElement("option",{defaultChecked:!0,value:"months"},"Month"),this.months.map((function(e,t){return l.a.createElement("option",{key:"month".concat(t),value:e},e)}))),a=l.a.createElement("div",{className:"yearMonthly-div"},t,e);return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement("div",{className:"main-select-div"},l.a.createElement("h1",{id:"expenses-h1"},"Expenses"),l.a.createElement("div",{className:"expenses-div"},l.a.createElement(m.b,{to:"#"},l.a.createElement("button",{className:this.state.active?"select-btn":"active-btn select-btn",onClick:this.yearlySelect},"Yearly")),l.a.createElement(m.b,{to:"#"},l.a.createElement("button",{className:this.state.active?"active-btn select-btn":"select-btn",onClick:this.monthlySelect},"Monthly")),l.a.createElement("div",{className:"select-div"},this.state.monthlyDisplay?l.a.createElement("label",{htmlFor:"month-select"},"Choose month and year:"):l.a.createElement("label",{htmlFor:"year-select"},"Choose year:"),this.state.monthlyDisplay?a:e)),l.a.createElement(B,null)),l.a.createElement("div",{className:"transparent-div"},l.a.createElement("p",null,"Total spent:",l.a.createElement("span",null,this.props.totalPrice)," den.")),this.state.loading&&l.a.createElement("div",{style:{color:"grey",fontSize:"50px",textAlign:"center"}},"LOADING..."))}}]),t}(l.a.Component));var W=Object(D.b)((function(e){return{totalPrice:e.productReducer.totalPrice}}),(function(e){return{getTotalPrice:function(t){return e(f(t))}}}))(q),X=document.getElementById("root");r.a.render(l.a.createElement(D.a,{store:_},l.a.createElement((function(){return l.a.createElement(m.a,null,l.a.createElement(j.d,null,l.a.createElement(j.b,{exact:!0,path:"/",component:J}),l.a.createElement(j.b,{exact:!0,path:"/register",component:K}),l.a.createElement(j.b,{exact:!0,path:"/newproduct",render:function(){return l.a.createElement(V,null)}}),l.a.createElement(j.b,{exact:!0,path:"/products",render:function(){return l.a.createElement(H,null)}}),l.a.createElement(j.b,{exact:!0,path:"/edit-product",render:function(){return l.a.createElement(V,null)}}),l.a.createElement(j.b,{exact:!0,path:"/expences",render:function(){return l.a.createElement(W,null)}})))}),null)),X)}},[[49,1,2]]]);
//# sourceMappingURL=main.68e70e0f.chunk.js.map