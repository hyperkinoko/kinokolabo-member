(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd966"],{"2d42":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h2",[e._v("受講生さま")]),a("student-form")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"studentForm",staticStyle:{width:"700px"},attrs:{model:e.studentForm,rules:e.rules,"label-width":"200px"}},[a("p",[a("el-checkbox",{on:{change:e.fetchMemberId},model:{value:e.sameAs,callback:function(t){e.sameAs=t},expression:"sameAs"}},[e._v("ご本人")])],1),e.sameAs?e._e():a("div",[a("el-form-item",{attrs:{label:"お名前",prop:"name"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.studentForm.name,callback:function(t){e.$set(e.studentForm,"name",t)},expression:"studentForm.name"}})],1),a("el-form-item",{attrs:{label:"フリガナ",prop:"nameKana"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.studentForm.nameKana,callback:function(t){e.$set(e.studentForm,"nameKana",t)},expression:"studentForm.nameKana"}})],1),a("el-form-item",{attrs:{label:"郵便番号",prop:"zip"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.studentForm.zip,callback:function(t){e.$set(e.studentForm,"zip",t)},expression:"studentForm.zip"}})],1),a("el-form-item",{attrs:{label:"都道府県",prop:"pref"}},[a("el-select",{attrs:{placeholder:"Select"},model:{value:e.studentForm.pref,callback:function(t){e.$set(e.studentForm,"pref",t)},expression:"studentForm.pref"}},e._l(e.prefs,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}),1)],1),a("el-form-item",{attrs:{label:"住所",prop:"addr"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.studentForm.addr,callback:function(t){e.$set(e.studentForm,"addr",t)},expression:"studentForm.addr"}})],1),a("el-form-item",{attrs:{label:"電話番号",prop:"tel"}},[a("el-input",{attrs:{type:"tel","auto-complete":"off"},model:{value:e.studentForm.tel,callback:function(t){e.$set(e.studentForm,"tel",t)},expression:"studentForm.tel"}})],1),a("el-form-item",{attrs:{label:"メールアドレス",prop:"mail"}},[a("el-input",{attrs:{type:"mail","auto-complete":"off"},model:{value:e.studentForm.mail,callback:function(t){e.$set(e.studentForm,"mail",t)},expression:"studentForm.mail"}})],1),a("el-form-item",[e.sameAs?e._e():a("el-checkbox",{model:{value:e.studentForm.notice,callback:function(t){e.$set(e.studentForm,"notice",t)},expression:"studentForm.notice"}},[e._v("入退室を保護者さまに通知する")])],1)],1),a("el-form-item",{attrs:{label:"生年月日",prop:"bDay"}},[a("el-select",{staticClass:"col-3",staticStyle:{width:"8em"},on:{change:e.fetchDay},model:{value:e.studentForm.bYear,callback:function(t){e.$set(e.studentForm,"bYear",t)},expression:"studentForm.bYear"}},e._l(e.getYears(),function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})}),1),e._v("年\n            "),a("el-select",{staticClass:"col-3",staticStyle:{width:"8em"},on:{change:e.fetchDay},model:{value:e.studentForm.bMonth,callback:function(t){e.$set(e.studentForm,"bMonth",t)},expression:"studentForm.bMonth"}},e._l(e.getMonths(),function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})}),1),e._v("月\n            "),a("el-select",{staticClass:"col-3",staticStyle:{width:"8em"},attrs:{disabled:""===e.studentForm.bYear||""===e.studentForm.bMonth},model:{value:e.studentForm.bDay,callback:function(t){e.$set(e.studentForm,"bDay",t)},expression:"studentForm.bDay"}},e._l(e.getDays(e.studentForm.bYear,e.studentForm.bMonth),function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})}),1),e._v("日\n        ")],1),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.regist}},[e._v("登録")])],1)},s=[],l=a("bc3a"),m=a.n(l),u={name:"StudentForm",data:function(){return{sameAs:!1,studentForm:{guardianId:this.$route.query.guardian,memberId:0,id:0,name:"",nameKana:"",zip:"",pref:0,addr:"",tel1:"",tel2:"",mail:"",notice:!0,bYear:"",bMonth:"",bDay:""},years:[],prefs:[{code:0,name:"選択してください"},{code:1,name:"北海道"},{code:2,name:"青森県"},{code:3,name:"岩手県"},{code:4,name:"宮城県"},{code:5,name:"秋田県"},{code:6,name:"山形県"},{code:7,name:"福島県"},{code:8,name:"茨城県"},{code:9,name:"栃木県"},{code:10,name:"群馬県"},{code:11,name:"埼玉県"},{code:12,name:"千葉県"},{code:13,name:"東京都"},{code:14,name:"神奈川県"},{code:15,name:"新潟県"},{code:16,name:"富山県"},{code:17,name:"石川県"},{code:18,name:"福井県"},{code:19,name:"山梨県"},{code:20,name:"長野県"},{code:21,name:"岐阜県"},{code:22,name:"静岡県"},{code:23,name:"愛知県"},{code:24,name:"三重県"},{code:25,name:"滋賀県"},{code:26,name:"京都府"},{code:27,name:"大阪府"},{code:28,name:"兵庫県"},{code:29,name:"奈良県"},{code:30,name:"和歌山県"},{code:31,name:"鳥取県"},{code:32,name:"島根県"},{code:33,name:"岡山県"},{code:34,name:"広島県"},{code:35,name:"山口県"},{code:36,name:"徳島県"},{code:37,name:"香川県"},{code:38,name:"愛媛県"},{code:39,name:"高知県"},{code:40,name:"福岡県"},{code:41,name:"佐賀県"},{code:42,name:"長崎県"},{code:43,name:"熊本県"},{code:44,name:"大分県"},{code:45,name:"宮崎県"},{code:46,name:"鹿児島県"},{code:47,name:"沖縄県"}],rules:{name:[{required:!0,message:"入力必須です",trigger:"blur"}],nameKana:[{required:!0,message:"入力必須です",trigger:"blur"},{pattern:/^[ァ-ヶー　 ]*$/,message:"全角カタカナで",trigger:"blur"}],zip:[{required:!0,message:"入力必須です",trigger:"blur"},{pattern:/^[0-9]{7}$/,message:"半角数字7桁",trigger:"blur"}],pref:[{required:!0,message:"入力必須です",trigger:"blur"},{type:"number",min:1,message:"選択してください",trigger:"change"}],addr:[{required:!0,message:"入力必須です",trigger:"blur"}],tel:[{pattern:/^[0-9]{10}$|^[0-9]{11}$/,message:"半角数字で入力してください",trigger:"blur"}],mail:[{type:"email",message:"メールアドレスが間違っています",trigger:"blur"}],bYear:[{required:!0,message:"入力必須です",trigger:" blur"}],bMonth:[{required:!0,message:"入力必須です",trigger:" blur"}],bDay:[{required:!0,message:"入力必須です",trigger:" blur"}]}}},methods:{fetchMemberId:function(){this.sameAs?(this.studentForm.memberId=this.$route.query.guardian,this.studentForm.notice=!1):(this.studentForm.memberId=0,this.studentForm.notice=!0)},fetchDay:function(){var e=this.studentForm.bYear,t=this.studentForm.bMonth,a=this.studentForm.bDay;if(""!==e&&""!==t&&""!==a){var n=new Date(e,t,0).getDate();a>n&&(this.studentForm.bDay=1)}},getYears:function(){for(var e=new Array,t=(new Date).getFullYear(),a=1920;a<t;a++)e.push({value:a});return e},getMonths:function(){for(var e=new Array,t=1;t<=12;t++)e.push({value:t});return e},getDays:function(e,t){for(var a=new Array,n=new Date(e,t,0).getDate(),r=1;r<=n;r++)a.push({value:r});return a},regist:function(){var e=this;this.$refs["studentForm"].validate(function(t){t&&m.a.post("https://kinokolabo.herokuapp.com/student/regist",e.studentForm).then(function(t){console.log("登録完了 idは"+t.data+"です"),e.$router.push("/qrcode?id="+t.data)}).catch(function(e){alert("エラー発生:"+e)})})}}},d=u,c=a("2877"),i=Object(c["a"])(d,o,s,!1,null,"188e05b9",null),p=i.exports,b={name:"RegistStudent",components:{StudentForm:p}},f=b,g=Object(c["a"])(f,n,r,!1,null,"79baa2c2",null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0bd966.53baa4e0.js.map