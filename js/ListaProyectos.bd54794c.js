"use strict";(self["webpackChunkweb_prac2"]=self["webpackChunkweb_prac2"]||[]).push([[540],{2931:function(t,e,a){a.r(e),a.d(e,{default:function(){return i}});var r=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contacte"},[e("h1",{staticClass:"titol1"},[t._v("Contacte")]),e("div",{staticClass:"form"},[e("form",{attrs:{action:"action_page.php",method:"POST"}},[e("label",{attrs:{for:"fname"}},[t._v("Nom")]),e("input",{attrs:{type:"text",id:"fname",name:"firstname",placeholder:"Nom.."}}),e("label",{attrs:{for:"lname"}},[t._v("Cognoms")]),e("input",{attrs:{type:"text",id:"lname",name:"lastname",placeholder:"Cognoms.."}}),e("label",{attrs:{for:"correu"}},[t._v("Correu electrònic")]),e("input",{attrs:{type:"text",id:"correu",name:"correu",placeholder:"exemple@gmail.com"}}),e("label",{attrs:{for:"telefon"}},[t._v("Telèfon")]),e("input",{attrs:{type:"text",id:"telefon",name:"telefon",placeholder:"000000000"}}),e("label",{attrs:{for:"subject"}},[t._v("Comentari")]),e("textarea",{staticStyle:{height:"200px"},attrs:{id:"subject",name:"subject",placeholder:"Escriu.."}}),e("input",{attrs:{type:"submit",value:"Enviar"}})])])])}],n=a(1001),s={},c=(0,n.Z)(s,r,o,!1,null,"0b88fb1c",null),i=c.exports},6237:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"titol1"},[e("icons",{attrs:{icon:["fas","award"]}}),t._v(" Alumnes premiats "),e("icons",{attrs:{icon:["fas","award"]}})],1),e("div",{staticClass:"container-md"},[e("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return e("div",{key:t.id,attrs:{columns:""}},[e("Card2",{attrs:{nom:t.nom,srcimg:t.srcimg,alt:t.alt,premi:t.premi,competicio:t.competicio}})],1)})),0)],1)])},o=[],n=a(301);const s="https://raw.githubusercontent.com/angelsbampton/urbangroove3/main/proyectosWD2021.json";var c={props:{name:{type:String,default:"premiats"}},components:{Card2:n.Z},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){try{const t=await fetch(s),e=await t.json();this.proyectos=e,console.log(e)}catch(t){console.error("Error en obtenir les dades dels projectes:",t)}}}},i=c,l=a(1001),u=(0,l.Z)(i,r,o,!1,null,"6c209738",null),p=u.exports}}]);
//# sourceMappingURL=ListaProyectos.bd54794c.js.map