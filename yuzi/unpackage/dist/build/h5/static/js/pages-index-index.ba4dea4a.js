(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"04fd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.swiperBox[data-v-0b1df010]{margin:%?0?% 0 %?0?%;position:relative;display:flex;align-items:center}.swiperBox-wrapper[data-v-0b1df010]{width:100%}.swiperBox-swiper[data-v-0b1df010]{height:%?750?%}.swiperBox-swiper__item[data-v-0b1df010]{width:100%;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center}.swiperBox-swiper__item uni-image[data-v-0b1df010]{width:100%}.bottom[data-v-0b1df010]{position:fixed;bottom:0;width:100%;background:#fff;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.bottom .left[data-v-0b1df010]{font-size:%?28?%;color:pink;padding-left:%?40?%;background:linear-gradient(90deg,rgba(240,45,30,.5294117647058824),#ffc1cc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:text-slide-data-v-0b1df010 5s ease-in-out infinite;animation:text-slide-data-v-0b1df010 5s ease-in-out infinite\r\n  /* 接下来定义动画效果 */}@-webkit-keyframes text-slide-data-v-0b1df010{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}@keyframes text-slide-data-v-0b1df010{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}.bottom .right[data-v-0b1df010]{background:pink;padding:%?20?% %?40?%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;font-size:%?28?%;color:#fff}.bottom .right uni-image[data-v-0b1df010]{width:%?60?%;height:%?60?%;margin-right:%?20?%}.middel[data-v-0b1df010]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.middel-top[data-v-0b1df010]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:90%;margin:auto}.middel-item[data-v-0b1df010]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;background:#fff;border-radius:%?20?%;padding:%?20?%;width:100%;margin-top:%?20?%}.middel-item uni-image[data-v-0b1df010]{width:%?70?%;height:%?70?%;margin-right:%?20?%}.middel-item .itemBox[data-v-0b1df010]{border-left:1px solid #eee;padding-left:%?20?%}.middel-item .itemBox .title[data-v-0b1df010]{font-size:%?30?%;font-weight:700;color:#000}.middel-item .itemBox .tips[data-v-0b1df010]{font-size:%?24?%;color:#999;margin-top:%?15?%}',""]),t.exports=e},"07ef":function(t,e,i){"use strict";i.r(e);var n=i("0d91"),o=i("8fbb");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("0903");var r=i("f0c5"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"0b1df010",null,!1,n["a"],void 0);e["default"]=d.exports},"0903":function(t,e,i){"use strict";var n=i("098c"),o=i.n(n);o.a},"098c":function(t,e,i){var n=i("04fd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7b25f62e",n,!0,{sourceMap:!1,shadowMode:!1})},"0d91":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniSwiperDot:i("819e").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{},[n("uni-swiper-dot",{attrs:{info:t.info,current:t.current,mode:"false"}},[n("v-uni-view",{staticClass:"swiperBox"},[n("v-uni-view",{staticClass:"swiperBox-wrapper"},[n("v-uni-swiper",{staticClass:"swiperBox-swiper",attrs:{"indicator-dots":!1,autoplay:!0,interval:2500,duration:1e3,circular:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},t._l(t.info,(function(t,e){return n("v-uni-swiper-item",{key:e,staticClass:"swiperBox-swiper__item"},[n("v-uni-image",{attrs:{src:t,mode:"widthFix"}})],1)})),1)],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"middel"},[n("v-uni-view",{staticClass:"middel-top"},[n("v-uni-view",{staticClass:"middel-item",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.call("18589041101")}}},[n("v-uni-image",{attrs:{src:i("aa3e"),mode:""}}),n("v-uni-view",{staticClass:"itemBox"},[n("v-uni-view",{staticClass:"title"},[t._v("24小时服务热线")]),n("v-uni-view",{staticClass:"tips"},[t._v("185xxxx1101")])],1)],1),n("v-uni-view",{staticClass:"middel-item",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.$tools.jump("./code")}}},[n("v-uni-image",{attrs:{src:i("5eef"),mode:""}}),n("v-uni-view",{staticClass:"itemBox"},[n("v-uni-view",{staticClass:"title"},[t._v("官方微信")]),n("v-uni-view",{staticClass:"tips"},[t._v("识别二维码，关注官方微信")])],1)],1),n("v-uni-view",{staticClass:"middel-item",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getUrl()}}},[n("v-uni-image",{attrs:{src:i("2060"),mode:""}}),n("v-uni-view",{staticClass:"itemBox"},[n("v-uni-view",{staticClass:"title"},[t._v("服务网点")]),n("v-uni-view",{staticClass:"tips"},[t._v("看看距离服务网点有多远")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"left"},[t._v("联系电话：185xxxx1101")]),n("v-uni-view",{staticClass:"right",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.call("18589041101")}}},[n("v-uni-image",{attrs:{src:i("0ed3"),mode:""}}),t._v("联系我们")],1)],1)],1)},s=[]},"0ed3":function(t,e,i){t.exports=i.p+"static/img/phone.525bf1b0.png"},2060:function(t,e,i){t.exports=i.p+"static/img/address.bc8e255f.png"},"564a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-swiper__warp[data-v-108cde48]{display:flex;flex:1;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-108cde48]{position:absolute;bottom:10px;left:0;right:0;display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center}.uni-swiper__dots-item[data-v-108cde48]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4)}.uni-swiper__dots-item[data-v-108cde48]:first-child{margin:0}.uni-swiper__dots-default[data-v-108cde48]{border-radius:100px}.uni-swiper__dots-long[data-v-108cde48]{border-radius:50px}.uni-swiper__dots-bar[data-v-108cde48]{border-radius:50px}.uni-swiper__dots-nav[data-v-108cde48]{bottom:0;height:40px;display:flex;flex:1;flex-direction:row;justify-content:flex-start;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-108cde48]{\r\n  /* overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap; */font-size:14px;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-108cde48]{display:flex;justify-content:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-108cde48]{color:#fff;font-size:12px}',""]),t.exports=e},"5eef":function(t,e,i){t.exports=i.p+"static/img/wechat.203d0701.png"},"819e":function(t,e,i){"use strict";i.r(e);var n=i("b635"),o=i("881c");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("ae82");var r=i("f0c5"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"108cde48",null,!1,n["a"],void 0);e["default"]=d.exports},"881c":function(t,e,i){"use strict";i.r(e);var n=i("9529"),o=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},"8fbb":function(t,e,i){"use strict";i.r(e);var n=i("c473"),o=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},9529:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=n},aa3e:function(t,e,i){t.exports=i.p+"static/img/service.8b827236.png"},ae82:function(t,e,i){"use strict";var n=i("e98f"),o=i.n(n);o.a},b635:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?i("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(n===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}})})),1):t._e(),"dot"===t.mode?i("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"round"===t.mode?i("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item ",class:[n===t.current&&"uni-swiper__dots-long"],style:{width:(n===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"nav"===t.mode?i("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[i("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?i("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:n===t.current?t.dots.selectedColor:t.dots.color,"background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}},[i("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(n+1))])],1)})),1):t._e()],2)},o=[]},c473:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{info:["../../static/1.png","../../static/2.png","../../static/3.png"],current:0,longitude:"",latitude:""}},onLoad:function(){},onShow:function(){this.getWei()},methods:{getUrl:function(){uni.openLocation({longitude:114.78826,latitude:25.68058,scale:18,name:"SMART公寓",address:"江西省赣州市南康区文峰大道SMART公寓"})},getWei:function(){var t=this;uni.getLocation({type:"wgs84",success:function(e){console.log("当前位置的经度："+e.longitude),console.log("当前位置的纬度："+e.latitude),t.longitude=e.longitude,t.latitude=e.latitude},fail:function(t){console.log(t,"eee")}})},call:function(t){console.log(t),uni.makePhoneCall({phoneNumber:t})},changeSwiper:function(t){this.current=t.detail.current}}};e.default=n},e98f:function(t,e,i){var n=i("564a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1dfd77cf",n,!0,{sourceMap:!1,shadowMode:!1})}}]);