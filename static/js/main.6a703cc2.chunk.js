(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),c=a.n(l),r=a(5),i=a(6),s=a(8),u=a(7),m=a(9),h=a(10),d=(a(28),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"album",onClick:function(){e.props.openAlbum()}},o.a.createElement("span",null," ",this.props.children))}}]),t}(o.a.Component)),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).openAlbum=function(e){a.props.history.push("/album/"+e,a.state.data)},a.state={gallery:[],isLoaded:!1},a.openAlbum=a.openAlbum.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/photos").then(function(e){return e.json()}).then(function(t){e.setState({gallery:t,isLoaded:!0})})}},{key:"render",value:function(){var e=this,t=this.state.isLoaded,a=this.state.gallery,n=1;return t?o.a.createElement("div",null,Object.keys(a).map(function(t,l){if(a[l].albumId===n)return n++,o.a.createElement(d,{albumId:a[l].albumId,key:a[l].albumId,albums:a,openAlbum:e.openAlbum.bind(null,a[l].albumId)},"Album number ",a[l].albumId)},this)):o.a.createElement("div",{className:"loading"}," Loading gallery ")}}]),t}(o.a.Component),b=(a(29),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"photo"},o.a.createElement("span",{className:"addTag",onClick:function(){e.props.addTagToImg()}},"+"),this.props.children)}}]),t}(o.a.Component)),f=a(13),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addTagToImg=function(e){console.log(e)},a.searchImgByName=function(e){var t=e.target.value.toLowerCase(),n=a.state.photoAlbumState.filter(function(e){return-1!==e.title.toLowerCase().indexOf(t)});a.setState({photoAlbum:n}),console.log(n)},a.state={photoAlbum:[],photoAlbumState:[],isLoaded:!1},a.addTagToImg=a.addTagToImg.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=parseInt(this.props.location.pathname.slice(7)),a=[];fetch("http://jsonplaceholder.typicode.com/photos").then(function(e){return e.json()}).then(function(n){n.map(function(e,o){n[o].albumId===t&&(a[o]=e)}),e.setState({photoAlbum:a,photoAlbumState:a,isLoaded:!0})})}},{key:"render",value:function(){var e=this;return this.state.isLoaded?o.a.createElement("div",null,o.a.createElement(f.b,{to:"/gallery",className:"return"},"\u2190Return to Gallery"),o.a.createElement("div",{className:"search-block"},o.a.createElement("span",null,"Search img by name"),o.a.createElement("input",{type:"text",className:"search-field",onChange:this.searchImgByName})),o.a.createElement("div",null,Object.keys(this.state.photoAlbum).map(function(t,a){return o.a.createElement(b,{key:e.state.photoAlbum[t].id,photo:e.state.photoAlbum[t].id,addTagToImg:e.addTagToImg.bind(null,e.state.photoAlbum[t].id)},o.a.createElement("img",{src:e.state.photoAlbum[t].thumbnailUrl,title:e.state.photoAlbum[t].title,alt:e.state.photoAlbum[t].title}))},this))):o.a.createElement("div",{className:"loading"}," Loading photos")}}]),t}(o.a.Component),j=a(11),O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{basename:"/"},o.a.createElement(j.a,{path:"/gallery",component:p}),o.a.createElement(j.a,{path:"/album",component:g}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.6a703cc2.chunk.js.map