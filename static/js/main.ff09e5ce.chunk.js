(this.webpackJsonptrade=this.webpackJsonptrade||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),s=(n(56),n(57),n(26)),d=n.n(s),l=(n(69),n(70),n(21)),o=Object(l.a)([function(e){return e.layout}],(function(e){return e.components})),h=n(22),j=n(0),b={global:{},layout:{type:"row",weight:100,children:[{type:"row",weight:50,children:[{type:"tabset",weight:50,selected:0,children:[{type:"tab",name:"\u0110\u1ed3 th\u1ecb n\u1ebfn"}]},{type:"tabset",weight:50,selected:0,children:[{type:"tab",name:"\u0110\u1ed3 th\u1ecb v\xf9ng"}]}]},{type:"row",weight:50,children:[{type:"tabset",weight:50,selected:0,children:[{type:"tab",name:"\u0110\u1ed3 th\u1ecb mi\u1ec1n"}]},{type:"tabset",weight:50,selected:0,children:[{type:"tab",name:"B\u1ea3ng bi\u1ec3u 2"}]}]}]}},x=c.a.forwardRef((function(e,t){Object(a.useImperativeHandle)(t,(function(){return{onAddLayout:s}}),[]);var n=e.data,r={model:d.a.Model.fromJson(b)},i=c.a.createRef(),s=function(e){i.current.addTabWithDragAndDrop("Th\xeam v\xf9ng hi\u1ec3n th\u1ecb<br>(Di chu\u1ed9t \u0111\u1ebfn khu v\u1ef1c c\u1ea7n th\xeam)",{name:e},null)};return Object(j.jsx)("div",{className:"home-app",children:Object(j.jsx)(d.a.Layout,{model:r.model,factory:function(e){console.log(e);var t=e.getName();console.log(t);var a=n.find((function(e){return e.name===t}));return a?a.component:"View khong ton tai"},ref:i})})})),u=Object(l.b)({data:o}),m=Object(h.b)(u,null,null,{forwardRef:!0})(x),O=(n(76),function(){return Object(j.jsx)("div",{className:"header-container",children:Object(j.jsxs)("div",{className:"header-item",children:[Object(j.jsx)("div",{className:"header-title",children:"Header"}),Object(j.jsx)("div",{className:"header-subtitle",children:"Ch\u1ecdn d\u1eef li\u1ec7u b\xean menu tr\xe1i v\xe0 di chu\u1ed9t \u0111\u1ebfn khu v\u1ef1c c\u1ea7n hi\u1ec3n th\u1ecb"})]})})}),y=n(30),g=(n(77),n(37)),p=n(9),w=Object(l.b)({data:o}),f=Object(h.b)(w,null,null,{forwardRef:!0})((function(e){var t=e.data,n=Object(a.useState)(!1),c=Object(y.a)(n,2),r=c[0],i=c[1],s=function(){i(!r)};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"sidebar-container",children:[Object(j.jsx)(g.a,{icon:p.a,className:"sidebar-icon menu-icon",title:"Ch\u1ee9c n\u0103ng",onMouseEnter:s}),t.map((function(t){return Object(j.jsx)(g.a,{icon:t.icon,onClick:function(){e.addLayout(t.name)},className:"sidebar-icon",title:t.name},t.name)}))]}),Object(j.jsx)("div",{onMouseLeave:s,children:r?Object(j.jsx)("div",{className:"sidebar-submenu",children:[{name:"Th\u1ecb tr\u01b0\u1eddng",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!0},{name:"Top t\u0103ng gi\xe1",layoutName:"\u0110\u1ed3 th\u1ecb \u0111\u01b0\u1eddng",header:!1},{name:"Top gi\u1ea3m gi\xe1",layoutName:"\u0110\u1ed3 th\u1ecb \u0111\u01b0\u1eddng",header:!1},{name:"Top v\u01b0\u1ee3t \u0111\u1ec9nh",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!1},{name:"Top th\u1ee7ng \u0111\xe1y",layoutName:"B\u1ea3ng bi\u1ec3u 2",header:!1},{name:"Link s\u1ef1 ki\u1ec7n",layoutName:"B\u1ea3ng bi\u1ec3u 1",header:!1},{name:"Xu h\u01b0\u1edbng d\xf2ng ti\u1ec1n",layoutName:"\u0110\u1ed3 th\u1ecb v\xf9ng",header:!1},{name:"Gi\xe1",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!0},{name:"Time & Sale",layoutName:"B\u1ea3ng bi\u1ec3u 1",header:!1},{name:"Chi ti\u1ebft b\u01b0\u1edbc gi\xe1",layoutName:"\u0110\u1ed3 th\u1ecb mi\u1ec1n",header:!1},{name:"Th\u1ed1ng k\xea gi\xe1",layoutName:"\u0110\u1ed3 th\u1ecb v\xf9ng",header:!1},{name:"PT k\u1ef9 thu\u1eadt",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!0},{name:"Bi\u1ec3u \u0111\u1ed3 k\u1ef9 thu\u1eadt",layoutName:"\u0110\u1ed3 th\u1ecb v\xf9ng",header:!1},{name:"T\xedn hi\u1ec7u k\u1ef9 thu\u1eadt",layoutName:"\u0110\u1ed3 th\u1ecb mi\u1ec1n",header:!1},{name:"C\xf4ng c\u1ee5 \u0111\u1ea7u t\u01b0",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!0},{name:"C\u1ea3nh b\xe1o",layoutName:"\u0110\u1ed3 th\u1ecb mi\u1ec1n",header:!1},{name:"B\u1ed9 l\u1ecdc c\u1ed5 phi\u1ebfu",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!1},{name:"M\xf4 h\xecnh \u0111\u1ecbnh gi\xe1",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!1},{name:"Chi\u1ebfn l\u01b0\u1ee3c \u0111\u1ea7u t\u01b0",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!0},{name:"X\u1ebfp h\u1ea1ng c\u1ed5 phi\u1ebfu",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!1},{name:"Chi\u1ebfn l\u01b0\u1ee3c",layoutName:"\u0110\u1ed3 th\u1ecb n\u1ebfn",header:!1}].map((function(t){return Object(j.jsx)("div",{className:"submenu-item",style:{color:t.header?"white":"",fontWeight:t.header?"bold":"",fontSize:t.header?"15px":""},onClick:function(){e.addLayout(t.layoutName)},children:t.name})}))}):null})]})})),D=n(38),v=(n(84),function(){var e=c.a.useRef();return Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)(D.NotificationContainer,{}),Object(j.jsx)(O,{}),Object(j.jsx)(f,{addLayout:function(t){var n;null===(n=e.current)||void 0===n||n.onAddLayout(t),D.NotificationManager.info("Di chu\u1ed9t \u0111\u1ebfn khu v\u1ef1c c\u1ea7n th\xeam, nh\u1ea5n ESC \u0111\u1ec3 tho\xe1t","Th\xeam giao di\u1ec7n")}}),Object(j.jsx)(m,{ref:e})]})}),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},N=n(17),k=n(50),M=n.n(k),T=n(12),B=n(13),A=n(15),F=n(14),S=n(3),L=n.n(S),z=(n(86),function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).state={series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}],options:{theme:{mode:"dark"},chart:{type:"candlestick",height:350,width:"100%"},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:["straight","smooth","smooth"]},fill:{type:"linear"}}},a}return Object(B.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"candlestick-chart",children:[Object(j.jsx)("br",{}),Object(j.jsx)(L.a,{options:this.state.options,series:this.state.series,type:"candlestick",height:"300",width:"100%"})]})}}]),n}(c.a.Component)),E=function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(e){var a;function c(e,t,n){for(var a=0,c=[];a<t;){var r=e,i=Math.floor(Math.random()*(n.max-n.min+1))+n.min;c.push([r,i]),e+=864e5,a++}return console.log(1,c),c}return Object(T.a)(this,n),(a=t.call(this,e)).state={series:[{data:c(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})}],options:{theme:{mode:"dark"},chart:{id:"fb",group:"social",type:"line",height:160},colors:["#008FFB"],yaxis:{labels:{minWidth:40}}},seriesLine2:[{data:c(new Date("11 Feb 2017").getTime(),20,{min:10,max:30})}],optionsLine2:{theme:{mode:"dark"},chart:{id:"tw",group:"social",type:"line",height:160},colors:["#546E7A"],yaxis:{labels:{minWidth:40}}},seriesArea:[{data:c(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})}],optionsArea:{theme:{mode:"dark"},chart:{id:"yt",group:"social",type:"area",height:160},colors:["#00E396"],yaxis:{labels:{minWidth:40}}}},a}return Object(B.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"mixed-chart",children:Object(j.jsx)(L.a,{options:this.state.options,series:this.state.series,type:"line",height:"180"})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"mixed-chart",children:Object(j.jsx)(L.a,{options:this.state.optionsLine2,series:this.state.seriesLine2,type:"line",height:"180"})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"mixed-chart",children:Object(j.jsx)(L.a,{options:this.state.optionsArea,series:this.state.seriesArea,type:"area",height:"180"})})})]})}}]),n}(c.a.Component),I=(n(87),function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).state={series:[{data:[[13273596e5,30.95],[1327446e6,31.34],[13275324e5,31.18],[13276188e5,31.05],[1327878e6,31],[13279644e5,30.95],[13280508e5,31.24],[13281372e5,31.29],[13282236e5,31.85],[13284828e5,31.86],[13285692e5,32.28],[13286556e5,32.1],[1328742e6,32.65],[13288284e5,32.21],[13290876e5,32.35],[1329174e6,32.44],[13292604e5,32.46],[13293468e5,32.86],[13294332e5,32.75],[13297788e5,32.54],[13298652e5,32.33],[13299516e5,32.97],[1330038e6,33.41],[13302972e5,33.27],[13303836e5,33.27],[133047e7,32.89],[13305564e5,33.1],[13306428e5,33.73],[1330902e6,33.22],[13309884e5,31.99],[13310748e5,32.41],[13311612e5,33.05],[13312476e5,33.64],[13315068e5,33.56],[13315932e5,34.22],[13316796e5,33.77],[1331766e6,34.17],[13318524e5,33.82],[13321116e5,34.51],[1332198e6,33.16],[13322844e5,33.56],[13323708e5,33.71],[13324572e5,33.81],[13327128e5,34.4],[13327992e5,34.63],[13328856e5,34.46],[1332972e6,34.48],[13330584e5,34.31],[13333176e5,34.7],[1333404e6,34.31],[13334904e5,33.46],[13335768e5,33.59],[13339224e5,33.22],[13340088e5,32.61],[13340952e5,33.01],[13341816e5,33.55],[1334268e6,33.18],[13345272e5,32.84],[13346136e5,33.84],[13347e8,33.39],[13347864e5,32.91],[13348728e5,33.06],[1335132e6,32.62],[13352184e5,32.4],[13353048e5,33.13],[13353912e5,33.26],[13354776e5,33.58],[13357368e5,33.55],[13358232e5,33.77],[13359096e5,33.76],[1335996e6,33.32],[13360824e5,32.61],[13363416e5,32.52],[1336428e6,32.67],[13365144e5,32.52],[13366008e5,31.92],[13366872e5,32.2],[13369464e5,32.23],[13370328e5,32.33],[13371192e5,32.36],[13372056e5,32.01],[1337292e6,31.31],[13375512e5,32.01],[13376376e5,32.01],[1337724e6,32.18],[13378104e5,31.54],[13378968e5,31.6],[13382424e5,32.05],[13383288e5,31.29],[13384152e5,31.05],[13385016e5,29.82],[13387608e5,30.31],[13388472e5,30.7],[13389336e5,31.69],[133902e7,31.32],[13391064e5,31.65],[13393656e5,31.13],[1339452e6,31.77],[13395384e5,31.79],[13396248e5,31.67],[13397112e5,32.39],[13399704e5,32.63],[13400568e5,32.89],[13401432e5,31.99],[13402296e5,31.23],[1340316e6,31.57],[13405752e5,30.84],[13406616e5,31.07],[1340748e6,31.41],[13408344e5,31.17],[13409208e5,32.37],[134118e7,32.19],[13412664e5,32.51],[13414392e5,32.53],[13415256e5,31.37],[13417848e5,30.43],[13418712e5,30.44],[13419576e5,30.2],[1342044e6,30.14],[13421304e5,30.65],[13423896e5,30.4],[1342476e6,30.65],[13425624e5,31.43],[13426488e5,31.89],[13427352e5,31.38],[13429944e5,30.64],[13430808e5,30.02],[13431672e5,30.33],[13432536e5,30.95],[134334e7,31.89],[13435992e5,31.01],[13436856e5,30.88],[1343772e6,30.69],[13438584e5,30.58],[13439448e5,32.02],[1344204e6,32.14],[13442904e5,32.37],[13443768e5,32.51],[13444632e5,32.65],[13445496e5,32.64],[13448088e5,32.27],[13448952e5,32.1],[13449816e5,32.91],[1345068e6,33.65],[13451544e5,33.8],[13454136e5,33.92],[13455e8,33.75],[13455864e5,33.84],[13456728e5,33.5],[13457592e5,32.26],[13460184e5,32.32],[13461048e5,32.06],[13461912e5,31.96],[13462776e5,31.46],[1346364e6,31.27],[13467096e5,31.43],[1346796e6,32.26],[13468824e5,32.79],[13469688e5,32.46],[1347228e6,32.13],[13473144e5,32.43],[13474008e5,32.42],[13474872e5,32.81],[13475736e5,33.34],[13478328e5,33.41],[13479192e5,32.57],[13480056e5,33.12],[1348092e6,34.53],[13481784e5,33.83],[13484376e5,33.41],[1348524e6,32.9],[13486104e5,32.53],[13486968e5,32.8],[13487832e5,32.44],[13490424e5,32.62],[13491288e5,32.57],[13492152e5,32.6],[13493016e5,32.68],[1349388e6,32.47],[13496472e5,32.23],[13497336e5,31.68],[134982e7,31.51],[13499064e5,31.78],[13499928e5,31.94],[1350252e6,32.33],[13503384e5,33.24],[13504248e5,33.44],[13505112e5,33.48],[13505976e5,33.24],[13508568e5,33.49],[13509432e5,33.31],[13510296e5,33.36],[1351116e6,33.4],[13512024e5,34.01],[1351638e6,34.02],[13517244e5,34.36],[13518108e5,34.39],[135207e7,34.24],[13521564e5,34.39],[13522428e5,33.47],[13523292e5,32.98],[13524156e5,32.9],[13526748e5,32.7],[13527612e5,32.54],[13528476e5,32.23],[1352934e6,32.64],[13530204e5,32.65],[13532796e5,32.92],[1353366e6,32.64],[13534524e5,32.84],[13536252e5,33.4],[13538844e5,33.3],[13539708e5,33.18],[13540572e5,33.88],[13541436e5,34.09],[135423e7,34.61],[13544892e5,34.7],[13545756e5,35.3],[1354662e6,35.4],[13547484e5,35.14],[13548348e5,35.48],[1355094e6,35.75],[13551804e5,35.54],[13552668e5,35.96],[13553532e5,35.53],[13554396e5,37.56],[13556988e5,37.42],[13557852e5,37.49],[13558716e5,38.09],[1355958e6,37.87],[13560444e5,37.71],[13563036e5,37.53],[13564764e5,37.55],[13565628e5,37.3],[13566492e5,36.9],[13569084e5,37.68],[13570812e5,38.34],[13571676e5,37.75],[1357254e6,38.13],[13575132e5,37.94],[13575996e5,38.14],[1357686e6,38.66],[13577724e5,38.62],[13578588e5,38.09],[1358118e6,38.16],[13582044e5,38.15],[13582908e5,37.88],[13583772e5,37.73],[13584636e5,37.98],[13588092e5,37.95],[13588956e5,38.25],[1358982e6,38.1],[13590684e5,38.32],[13593276e5,38.24],[1359414e6,38.52],[13595004e5,37.94],[13595868e5,37.83],[13596732e5,38.34],[13599324e5,38.1],[13600188e5,38.51],[13601052e5,38.4],[13601916e5,38.07],[1360278e6,39.12],[13605372e5,38.64],[13606236e5,38.89],[136071e7,38.81],[13607964e5,38.61],[13608828e5,38.63],[13612284e5,38.99],[13613148e5,38.77],[13614012e5,38.34],[13614876e5,38.55],[13617468e5,38.11],[13618332e5,38.59],[13619196e5,39.6]]}],options:{theme:{mode:"dark"},chart:{id:"area-datetime",type:"area",height:350,zoom:{autoScaleYaxis:!0}},annotations:{yaxis:[{y:30,borderColor:"#999",label:{show:!0,text:"Support",style:{color:"#fff",background:"#00E396"}}}],xaxis:[{x:new Date("14 Nov 2012").getTime(),borderColor:"#999",yAxisIndex:0,label:{show:!0,text:"Rally",style:{color:"#fff",background:"#775DD0"}}}]},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},xaxis:{type:"datetime",min:new Date("01 Mar 2012").getTime(),tickAmount:6},tooltip:{x:{format:"dd MMM yyyy"}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}}},selection:"one_year"},a}return Object(B.a)(n,[{key:"updateData",value:function(e){switch(this.setState({selection:e}),e){case"one_month":S.ApexCharts.exec("area-datetime","zoomX",new Date("28 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"six_months":S.ApexCharts.exec("area-datetime","zoomX",new Date("27 Sep 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"one_year":S.ApexCharts.exec("area-datetime","zoomX",new Date("27 Feb 2012").getTime(),new Date("27 Feb 2013").getTime());break;case"ytd":S.ApexCharts.exec("area-datetime","zoomX",new Date("01 Jan 2013").getTime(),new Date("27 Feb 2013").getTime());break;case"all":S.ApexCharts.exec("area-datetime","zoomX",new Date("23 Jan 2012").getTime(),new Date("27 Feb 2013").getTime())}}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"area-chart",children:[Object(j.jsx)("br",{}),Object(j.jsx)(L.a,{options:this.state.options,series:this.state.series,type:"area",height:"300"})]})}}]),n}(c.a.Component)),R=(n(88),function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).state={series:[{data:[{x:"New Delhi",y:218},{x:"Kolkata",y:149},{x:"Mumbai",y:184},{x:"Ahmedabad",y:55},{x:"Bangaluru",y:84},{x:"Pune",y:31},{x:"Chennai",y:70},{x:"Jaipur",y:30},{x:"Surat",y:44},{x:"Hyderabad",y:68},{x:"Lucknow",y:28},{x:"Indore",y:19},{x:"Kanpur",y:29}]}],options:{legend:{show:!1},chart:{height:350,type:"treemap"},title:{text:"Distibuted Treemap (different color for each cell)",align:"center"},theme:{mode:"dark"},colors:["#3B93A5","#F7B844","#ADD8C7","#EC3C65","#CDD7B6","#C1F666","#D43F97","#1E5D8C","#421243","#7F94B0","#EF6537","#C0ADDB"],plotOptions:{treemap:{distributed:!0,enableShades:!1}}}},a}return Object(B.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"treemap-chart",children:[Object(j.jsx)("br",{}),Object(j.jsx)(L.a,{options:this.state.options,series:this.state.series,type:"treemap",height:"350"})]})}}]),n}(c.a.Component)),K=(n(89),function(){return Object(j.jsx)("div",{className:"table1",children:Object(j.jsxs)("table",{id:"customers",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Company"}),Object(j.jsx)("th",{children:"Contact"}),Object(j.jsx)("th",{children:"Country"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Alfreds Futterkiste"}),Object(j.jsx)("td",{children:"Maria Anders"}),Object(j.jsx)("td",{children:"Germany"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Berglunds snabbk\xf6p"}),Object(j.jsx)("td",{children:"Christina Berglund"}),Object(j.jsx)("td",{children:"Sweden"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Centro comercial Moctezuma"}),Object(j.jsx)("td",{children:"Francisco Chang"}),Object(j.jsx)("td",{children:"Mexico"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Ernst Handel"}),Object(j.jsx)("td",{children:"Roland Mendel"}),Object(j.jsx)("td",{children:"Austria"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Island Trading"}),Object(j.jsx)("td",{children:"Helen Bennett"}),Object(j.jsx)("td",{children:"UK"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"K\xf6niglich Essen"}),Object(j.jsx)("td",{children:"Philip Cramer"}),Object(j.jsx)("td",{children:"Germany"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Laughing Bacchus Winecellars"}),Object(j.jsx)("td",{children:"Yoshi Tannamuri"}),Object(j.jsx)("td",{children:"Canada"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Magazzini Alimentari Riuniti"}),Object(j.jsx)("td",{children:"Giovanni Rovelli"}),Object(j.jsx)("td",{children:"Italy"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"North/South"}),Object(j.jsx)("td",{children:"Simon Crowther"}),Object(j.jsx)("td",{children:"UK"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Paris sp\xe9cialit\xe9s"}),Object(j.jsx)("td",{children:"Marie Bertrand"}),Object(j.jsx)("td",{children:"France"})]})]})})}),G=(n(90),function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=(t[0],t[1]),c=[{value:Math.floor(80*Math.random()),color:""},{value:Math.floor(70*Math.random()),color:""},{value:Math.floor(90*Math.random()),color:""}],r=Object(a.useRef)(c);return Object(a.useEffect)((function(){var e=setInterval((function(){var e=Math.floor(90*Math.random()),t=Math.floor(80*Math.random()),a=Math.floor(70*Math.random()),c=[{value:e,color:e>=r.current[0].value?"#28B463":"#E74C3C"},{value:t,color:t>=r.current[1].value?"#28B463":"#E74C3C"},{value:a,color:a>=r.current[2].value?"#28B463":"#E74C3C"}];r.current=c,n(e)}),2e3);return function(){clearInterval(e)}}),[]),Object(j.jsxs)("div",{className:"table2",children:[Object(j.jsxs)("table",{className:"customer",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Company"}),Object(j.jsx)("th",{children:"Contact"}),Object(j.jsx)("th",{children:"Country"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Alfreds"}),Object(j.jsx)("td",{children:"Maria "}),Object(j.jsx)("td",{children:"Germany"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Berglunds "}),Object(j.jsx)("td",{children:"Christina "}),Object(j.jsx)("td",{style:{backgroundColor:r.current[0].color},children:r.current[0].value})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Centro "}),Object(j.jsx)("td",{style:{backgroundColor:r.current[1].color},children:r.current[1].value}),Object(j.jsx)("td",{children:"Mexico"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{style:{backgroundColor:r.current[2].color},children:r.current[2].value}),Object(j.jsx)("td",{children:"Roland "}),Object(j.jsx)("td",{children:"Austria"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Island "}),Object(j.jsx)("td",{children:"Helen "}),Object(j.jsx)("td",{children:"UK"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"K\xf6niglich "}),Object(j.jsx)("td",{children:"232"}),Object(j.jsx)("td",{children:"15"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Laughing "}),Object(j.jsx)("td",{children:"Yoshi "}),Object(j.jsx)("td",{children:"Canada"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Magazzini "}),Object(j.jsx)("td",{children:"Giovanni "}),Object(j.jsx)("td",{style:{backgroundColor:r.current[0].color},children:r.current[0].value})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"North/South"}),Object(j.jsx)("td",{children:"Simon "}),Object(j.jsx)("td",{children:"UK"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Paris "}),Object(j.jsx)("td",{children:"Marie "}),Object(j.jsx)("td",{children:"France"})]})]}),Object(j.jsxs)("table",{className:"customer",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Company"}),Object(j.jsx)("th",{children:"Contact"}),Object(j.jsx)("th",{children:"Country"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Alfreds "}),Object(j.jsx)("td",{children:"Maria "}),Object(j.jsx)("td",{children:"Germany"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Berglunds "}),Object(j.jsx)("td",{children:" Berglund"}),Object(j.jsx)("td",{children:"Sweden"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:" Moctezuma"}),Object(j.jsx)("td",{children:"Francisco "}),Object(j.jsx)("td",{children:"Mexico"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:" Handel"}),Object(j.jsx)("td",{children:" Mendel"}),Object(j.jsx)("td",{children:"Austria"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:" Trading"}),Object(j.jsx)("td",{children:" Bennett"}),Object(j.jsx)("td",{children:"UK"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:" Essen"}),Object(j.jsx)("td",{style:{backgroundColor:r.current[2].color},children:r.current[2].value}),Object(j.jsx)("td",{children:"Germany"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Laughing "}),Object(j.jsx)("td",{children:"Yoshi"}),Object(j.jsx)("td",{children:"Canada"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Magazzini "}),Object(j.jsx)("td",{children:"Giovanni"}),Object(j.jsx)("td",{children:"Italy"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"North/South"}),Object(j.jsx)("td",{children:"Simon"}),Object(j.jsx)("td",{children:"UK"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Paris "}),Object(j.jsx)("td",{children:"Marie"}),Object(j.jsx)("td",{style:{backgroundColor:r.current[0].color},children:r.current[0].value})]})]})]})}),P={components:[{name:"\u0110\u1ed3 th\u1ecb n\u1ebfn",component:Object(j.jsx)(z,{}),icon:p.b},{name:"\u0110\u1ed3 th\u1ecb \u0111\u01b0\u1eddng",component:Object(j.jsx)(E,{}),icon:p.d},{name:"\u0110\u1ed3 th\u1ecb mi\u1ec1n",component:Object(j.jsx)(I,{}),icon:p.c},{name:"\u0110\u1ed3 th\u1ecb v\xf9ng",component:Object(j.jsx)(R,{}),icon:p.e},{name:"B\u1ea3ng bi\u1ec3u 1",component:Object(j.jsx)(K,{}),icon:p.f},{name:"B\u1ea3ng bi\u1ec3u 2",component:Object(j.jsx)(G,{}),icon:p.f}]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return t.type,e},J=Object(N.c)({layout:H}),X=[M.a],U=Object(N.d)(J,N.a.apply(void 0,X));i.a.render(Object(j.jsx)(h.a,{store:U,children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})})}),document.getElementById("root")),C()}},[[92,1,2]]]);
//# sourceMappingURL=main.ff09e5ce.chunk.js.map