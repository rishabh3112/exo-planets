(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f285:function(t,a,s){},f4c1:function(t,a,s){"use strict";var e=s("f285"),i=s.n(e);i.a},f820:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return this.$route.params.id>-1&&this.$route.params.id<2133?s("div",{staticClass:"about"},[t.data?s("div",[s("router-link",{attrs:{to:"/"}},[s("md-button",{staticClass:"md-icon-button md-primary md-raised"},[s("md-icon",[t._v("home")])],1)],1),s("br"),s("hr"),s("div",{staticClass:"title"},[s("p",{staticClass:"md-display-1"},[t._v(t._s(t.data.PlanetIdentifier))])]),s("br"),s("div",{staticClass:"md-layout md-gutter md-alignment-top-center"},[s("md-card",{staticClass:"md-layout-item md-small-size-50 md-xsmall-size-100"},[s("md-card-media",[s("img",{attrs:{src:t.data.imageURL,alt:"An image of "+t.data.PlanetIdentifier}})]),s("md-card-header",[s("span",{staticClass:"md-body1"},[t._v(t._s(t.data.imageDescription))]),s("br"),s("span",{staticClass:"md-caption"},[t._v("Image from Wikipedia")])])],1),s("md-card",{staticClass:"description md-layout md-gutter md-alignment-top"},[s("md-card-media",[s("span",{staticClass:"md-headline"},[t._v(" Top Wikipedia Results ")]),s("br"),s("span",{staticClass:"md-caption"},[t._v(" Results for keyword "),s("i",[t._v(t._s(t.data.PlanetIdentifier))])])]),s("md-card-content",[t._l(t.data.description,function(a,e){return a?s("div",{key:a,staticClass:"results"},[s("center",[t._v(t._s(a))]),s("br"),s("md-button",{staticClass:"md-ripple md-dense",attrs:{href:t.data.wikipediaURL[e]}},[t._v("\n            Read more \n          ")])],1):t._e()}),t.data.description[0]?t._e():s("div",{staticClass:"results"},[s("br"),t._v("\n          Nothing found on Wikipedia !!\n          "),s("md-button",{staticClass:"md-ripple md-primary",attrs:{href:"https://www.google.com/search?q="+t.data.PlanetIdentifier}},[t._v("Try Google Results")])],1)],2)],1),s("br"),t._m(0),s("div",{staticClass:"horizontal-scroll-container"},t._l(t.data,function(a,e){return e.includes("Unnamed")||e.includes("wikipedia")||e.includes("image")||e.includes("description")?t._e():s("md-card",{key:e},[s("md-card-header",[s("div",{staticClass:"md-title"},[t._v(t._s(e))])]),s("md-card-content",{staticClass:"md-subheading"},[t._v("\n              "+t._s(a)+"\n            ")])],1)}))],1)],1):s("div",[s("router-link",{attrs:{to:"/"}},[s("md-button",{staticClass:"md-icon-button md-primary md-raised"},[s("md-icon",[t._v("home")])],1)],1),s("md-progress-bar",{attrs:{"md-mode":"indeterminate"}})],1)]):s("div",{staticClass:"about"},[s("router-link",{attrs:{to:"/"}},[s("md-button",{staticClass:"md-icon-button"},[s("md-icon",[t._v("home")])],1)],1),t._m(1)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"md-title data"},[t._v(" Data Values "),s("br"),s("span",{staticClass:"md-caption"},[t._v(" From cleaned data ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("h1",{staticClass:"md-display"},[t._v(" No Exoplanet Here !! ")])])}],d=(s("cadf"),s("551c"),s("097d"),s("2f62")),n={name:"about",computed:Object(d["c"])({data:function(t){var a=this.$route.params.id;return t.planet[a]?t.planet[a]:(this.getPlanet(a),t.planet[a])}}),methods:Object(d["b"])(["getPlanet"])},r=n,c=(s("f4c1"),s("2877")),o=Object(c["a"])(r,e,i,!1,null,"b87e9f78",null);o.options.__file="About.vue";a["default"]=o.exports}}]);
//# sourceMappingURL=about.2887eb9f.js.map