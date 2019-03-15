(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],h=0,f=[];h<o.length;h++)i=o[h],a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-100 d-flex flex-column",attrs:{id:"app"}},[r("TheNavbar",{staticClass:"flex-shrink-0"}),r("router-view",{staticClass:"flex-grow-1"}),r("TheInfoModal")],1)},s=[],i=(r("28a5"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column"},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.settingsModal",modifiers:{settingsModal:!0}}],attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-cog"})]),r("b-modal",{attrs:{id:"settingsModal",title:"Settings",centered:"","ok-only":""}},[t.$store.state.lockControls?r("p",{staticClass:"text-danger"},[t._v("*Please wait for playback to finish before changing settings")]):t._e(),r("b-card",[r("b-form-group",{attrs:{label:"Listening Duration (seconds)"}},[r("VueSlider",{attrs:{min:5,max:20,disabled:t.$store.state.lockControls},model:{value:t.listeningDuration,callback:function(e){t.listeningDuration=e},expression:"listeningDuration"}})],1),r("b-form-group",{attrs:{label:"Number of Choices"}},[r("VueSlider",{attrs:{min:2,max:10,disabled:t.$store.state.lockControls},model:{value:t.numberOfChoices,callback:function(e){t.numberOfChoices=e},expression:"numberOfChoices"}})],1)],1)],1)],1)}),o=[],c=r("4971"),u=r.n(c),l=(r("24df"),{name:"SettingsBox",computed:{numberOfChoices:{get:function(){return this.$store.state.numberOfChoices},set:function(t){this.$store.commit("updateNumberOfChoices",t)}},listeningDuration:{get:function(){return Math.floor(this.$store.state.listeningDuration/1e3)},set:function(t){this.$store.commit("updateListeningDuration",1e3*t)}}},components:{VueSlider:u.a}}),h=l,f=r("2877"),p=Object(f["a"])(h,i,o,!1,null,"8e2e663c",null),d=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"lg",variant:"primary"}},[r("b-navbar-brand",[t._v("Trivialize!")]),r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-button-group",[r("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.$store.commit("updateInfoModalOpen",!0)}}},[r("i",{staticClass:"far fa-question-circle"})]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.settingsModal",modifiers:{settingsModal:!0}}],attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-cog"})])],1)],1)],1),r("b-modal",{attrs:{id:"settingsModal",title:"Settings",centered:"","ok-only":""}},[t.$store.state.lockControls?r("p",{staticClass:"text-danger"},[t._v("*Please wait for playback to finish before changing settings")]):t._e(),r("b-card",[r("b-form-group",{attrs:{label:"Listening Duration (seconds)"}},[r("VueSlider",{attrs:{min:5,max:20,disabled:t.$store.state.lockControls},model:{value:t.listeningDuration,callback:function(e){t.listeningDuration=e},expression:"listeningDuration"}})],1),r("b-form-group",{attrs:{label:"Number of Choices"}},[r("VueSlider",{attrs:{min:2,max:10,disabled:t.$store.state.lockControls},model:{value:t.numberOfChoices,callback:function(e){t.numberOfChoices=e},expression:"numberOfChoices"}})],1)],1)],1)],1)},b=[],g=(r("3e39"),{name:"TheNavbar",computed:{numberOfChoices:{get:function(){return this.$store.state.numberOfChoices},set:function(t){this.$store.commit("updateNumberOfChoices",t)}},listeningDuration:{get:function(){return Math.floor(this.$store.state.listeningDuration/1e3)},set:function(t){this.$store.commit("updateListeningDuration",1e3*t)}}},components:{VueSlider:u.a}}),k=g,v=Object(f["a"])(k,m,b,!1,null,"4761730b",null),y=v.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{staticClass:"text-left",attrs:{title:"Help",centered:"","ok-only":""},model:{value:t.infoModalOpen,callback:function(e){t.infoModalOpen=e},expression:"infoModalOpen"}},[r("h6",[t._v("1. Open Spotify on any device")]),r("h6",[t._v("2. In the track player, select 'Devices Available'")]),r("h6",[t._v("3. Connect to the device titled 'Trivialize'. Trivialize should automatically start up in the browser")])])},C=[],O={name:"TheInfoModal",computed:{infoModalOpen:{get:function(){return this.$store.state.infoModalOpen},set:function(t){this.$store.commit("updateInfoModalOpen",t)}}}},w=O,_=Object(f["a"])(w,T,C,!1,null,"2e766a1e",null),x=_.exports,$={components:{TheInfoModal:x,TheNavbar:y,SettingsBox:d},created:function(){if(window.location.hash){var t=window.location.hash.substring(1),e=t.split("=")[1];this.$store.commit("updateAccessToken",e)}}},R=$,S=(r("5c0b"),Object(f["a"])(R,a,s,!1,null,null,null)),j=S.exports,M=r("8c4f"),I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center align-items-center h-100"},[t.$store.state.accessToken?r("b-card",{attrs:{title:"Waiting For Spotify Device"}},[r("b-spinner",{attrs:{label:"Spinning"}})],1):r("b-card",{attrs:{title:"Welcome to Trivialize!","sub-title":"Click the button below to connect your account and get started"}},[r("b-button",{staticStyle:{color:"green","background-color":"black"},attrs:{size:"lg"},on:{click:t.redirectToSpotify}},[r("i",{staticClass:"fab fa-spotify"})])],1)],1)},D=[],P="995e9615284a4438b14c3a472177df80",L="https://kmdiogo.github.io/Trivialize-GitPage",U="http://accounts.spotify.com/authorize?client_id=".concat(P,"&response_type=token&redirect_uri=").concat(L,"&scope=playlist-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing streaming user-read-birthdate user-read-email user-read-private"),N={name:"home",computed:{accessToken:function(){return this.$store.state.accessToken},numberOfChoices:{get:function(){return this.$store.state.numberOfChoices},set:function(t){this.$store.commit("updateNumberOfChoices",t)}}},created:function(){this.accessToken&&(this.startSpotifyWebPlayer(),this.$store.commit("updateInfoModalOpen",!0))},methods:{redirectToSpotify:function(){window.location.href=U},startSpotifyWebPlayer:function(){var t=this;window.onSpotifyWebPlaybackSDKReady=function(){t.$store.state.player=new Spotify.Player({name:"Web Playback SDK Quick Start Player",getOAuthToken:function(e){e(t.$store.state.accessToken)}}),t.$store.state.player.addListener("initialization_error",function(t){var e=t.message;console.error(e)}),t.$store.state.player.addListener("authentication_error",function(t){var e=t.message;console.error(e)}),t.$store.state.player.addListener("account_error",function(t){var e=t.message;console.error(e)}),t.$store.state.player.addListener("playback_error",function(t){var e=t.message;console.error(e)}),t.$store.state.player.addListener("player_state_changed",function(e){t.$store.state.playerActive||(t.$store.commit("updatePlayerActive",!0),t.$store.commit("updateInfoModalOpen",!1),t.$router.push("/play"))}),t.$store.state.player.addListener("ready",function(e){var r=e.device_id;t.$store.state.player.setName("Trivialize"),console.log("Ready with Device ID",r)}),t.$store.state.player.addListener("not_ready",function(t){var e=t.device_id;console.log("Device ID has gone offline",e)}),t.$store.state.player.connect()}}}},z=N,A=Object(f["a"])(z,I,D,!1,null,null,null),F=A.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center align-items-center h-100 flex-column"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[t.tracks?t.gameOver?r("b-card",[r("h3",[t._v("You got "+t._s(t.numberOfCorrect)+" / "+t._s(Object.keys(t.tracks).length)+" songs correct!")]),t.incorrectSongs.length>0?r("h5",[t._v("You missed these songs: ")]):t._e(),r("b-table",{attrs:{items:t.incorrectSongs,fields:["artist","name"]},scopedSlots:t._u([{key:"artist",fn:function(e){return[t._v("\n                    "+t._s(e.item.artists[0].name)+"\n                ")]}}])})],1):r("b-card",{staticClass:"overflow-auto h-50"},[r("h5",[t._v("Songs left: "+t._s(Object.keys(t.remainingTracks).length))]),t._l(t.choices,function(e){return r("b-button",{key:e.uri,attrs:{block:"",variant:t.buttonVariant(e.uri),disabled:t.selectionMade},on:{click:function(r){return t.onChoiceClick(e.uri)}}},[t._v("\n                "+t._s(e.artists[0].name)+" - "+t._s(e.name)+"\n            ")])})],2):r("b-card",{staticClass:"overflow-auto h-50",attrs:{title:"Select the Playlist currently active"}},[r("hr"),t.playLists?r("b-table",{staticClass:"overflow-auto",attrs:{items:t.playLists,fields:t.playlistTableFields,outlined:"",reponsive:"",hover:"","thead-class":"d-none"},scopedSlots:t._u([{key:"images",fn:function(t){return[r("b-img",{attrs:{width:"100px",height:"100px",src:t.item.images[0].url,fluid:""}})]}},{key:"select",fn:function(e){return[r("b-button",{on:{click:function(r){return t.onPlaylistClick(e)}}},[t._v("Select")])]}}],null,!1,1266630215)}):t._e()],1)],1),r("div",{staticClass:"d-flex flex-column"},[t.gameOver?t._e():r("b-card",[r("b-button-group",[r("b-button",{attrs:{variant:"secondary",disabled:t.$store.state.lockControls},on:{click:t.replayTrack}},[r("i",{staticClass:"fas fa-undo"})])],1)],1),r("b-card",[r("b-button",{attrs:{variant:"primary"},on:{click:t.loadPlaylists}},[t._v("Choose New Playlist")])],1)],1)],1)},V=[],W=r("795b"),B=r.n(W),G=r("a4bb"),J=r.n(G),K=(r("ac6a"),r("96cf"),r("3b8d")),Y=r("bc3a"),q=r.n(Y),H=r("d225"),Q=r("b0b4"),X=function(){function t(e){Object(H["a"])(this,t),this.token=e,this.http=q.a.create({baseURL:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer ".concat(e)}})}return Object(Q["a"])(t,[{key:"getCurrentTrack",value:function(){return this.http.get("player/currently-playing")}},{key:"getUserPlaylists",value:function(){return this.http.get("/playlists?limit=50")}},{key:"setShuffle",value:function(t){return this.http.put("player/shuffle?state=".concat(t))}}]),t}(),Z=r("2ef0"),tt={name:"Play",data:function(){return{playlistTableFields:["name","images","select"],playLists:null,tracks:null,remainingTracks:{},choices:[],calculatedTrackStart:null,currentTrackDuration:null,incorrectSongs:[],numberOfCorrect:0,gameOver:!1,showFeedback:!1,userChoiceURI:null,currentTrackURI:null,selectionMade:!1}},computed:{currentTrackId:function(){return this.$store.state.currentTrackId},http:function(){var t={baseURL:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}};return q.a.create(t)},spotifyController:function(){return new X(this.$store.state.accessToken)}},beforeRouteEnter:function(t,e,r){r(function(t){t.$store.state.accessToken?t.spotifyController.getUserPlaylists().then(function(e){t.playLists=e.data.items}):t.$router.push("/")})},methods:{loadPlaylists:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.spotifyController.getUserPlaylists();case 2:e=t.sent,this.playLists=e.data.items,this.resetGame();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),resetGame:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("pause");case 2:this.gameOver=!1,this.remainingTracks={},this.tracks=null,this.choices=[],this.numberOfCorrect=0,this.incorrectSongs=[],this.selectionMade=!1;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onPlaylistClick:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.spotifyController.setShuffle(!0);case 2:return t.next=4,this.http.get(e.item.tracks.href+"?market=from_token&fields=items(track(uri,name,is_playable,id,duration_ms,artists))");case 4:r=t.sent,n={},r.data.items.forEach(function(t){t.track.is_playable&&(n[t.track.uri]=Object(Z["cloneDeep"])(t.track))}),this.tracks=Object(Z["cloneDeep"])(n),this.remainingTracks=Object(Z["cloneDeep"])(n),this.playNextTrack();case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),playNextTrack:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=J()(this.remainingTracks),r=Math.floor(Math.random()*e.length),this.currentTrackURI=e[r],t.next=5,this.updateChoices();case 5:this.selectionMade=!1,this.replayTrack();case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),replayTrack:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.showFeedback=!1,this.$store.commit("updateLockControls",!0),t.next=4,this.http.put("player/play",{uris:[this.currentTrackURI],position_ms:this.calculatedTrackStart});case 4:return e=this.$store.state.listeningDuration,e>=this.tracks[this.currentTrackURI].duration_ms&&(e=this.tracks[this.currentTrackURI].duration_ms-1e3),r=this.currentTrackURI,t.next=9,this.waitForTrackPlay();case 9:setTimeout(Object(K["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.spotifyController.getCurrentTrack();case 2:if(r!==this.currentTrackURI){t.next=6;break}return t.next=5,this.$store.dispatch("pause");case 5:this.$store.commit("updateLockControls",!1);case 6:case"end":return t.stop()}},t,this)})).bind(this),e);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updateChoices:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(){var e,r,n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(this.choices=[],this.choices.push(Object(Z["cloneDeep"])(this.remainingTracks[this.currentTrackURI])),delete this.remainingTracks[this.currentTrackURI],e=this.$store.state.numberOfChoices-1,J()(this.remainingTracks).length<e&&(e=J()(this.remainingTracks).length),r=Object(Z["shuffle"])(J()(this.remainingTracks)),n=0;n<e;n++)this.choices.push(this.remainingTracks[r[n]]);this.choices=Object(Z["shuffle"])(this.choices),a=this.$store.state.listeningDuration,s=this.tracks[this.currentTrackURI].duration_ms,a>=s&&(a=s-1e3),this.tracks[this.currentTrackURI].duration_ms<=2e4?this.calculatedTrackStart=0:this.calculatedTrackStart=Math.floor(Math.random()*this.tracks[this.currentTrackURI].duration_ms-a);case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onChoiceClick:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(e){var r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.selectionMade=!0,t.next=3,this.$store.dispatch("pause");case 3:this.userChoiceURI=e,this.showFeedback=!0,this.$store.commit("updateLockControls",!0),e===this.currentTrackURI?this.numberOfCorrect+=1:this.incorrectSongs.push(Object(Z["cloneDeep"])(this.tracks[this.currentTrackURI])),setTimeout(Object(K["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==J()(r.remainingTracks).length){t.next=5;break}return r.gameOver=!0,t.abrupt("return",!1);case 5:r.playNextTrack();case 6:case"end":return t.stop()}},t)})),2e3);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),buttonVariant:function(t){return this.showFeedback&&t===this.currentTrackURI?"success":this.showFeedback&&t===this.userChoiceURI?"danger":"outline-primary"},waitForTrackPlay:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new B.a(function(t){var r=0,n=setInterval(Object(K["a"])(regeneratorRuntime.mark(function a(){var s;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r+=500,a.next=3,e.spotifyController.getCurrentTrack();case 3:s=a.sent,s.data.is_playing?(clearInterval(n),t(n)):r>1e4&&(clearInterval(n),t(n));case 5:case"end":return a.stop()}},a)})),500)}));case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},et=tt,rt=Object(f["a"])(et,E,V,!1,null,"0130427e",null),nt=rt.exports;n["default"].use(M["a"]);var at=new M["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/play",component:nt}]}),st=r("2f62");n["default"].use(st["a"]);var it=new st["a"].Store({state:{listeningDuration:5e3,numberOfChoices:5,accessToken:"",playerActive:!1,player:null,lockControls:!1,infoModalOpen:!1},mutations:{updateAccessToken:function(t,e){t.accessToken=e},updatePlayerActive:function(t,e){t.playerActive=e},updatePlayer:function(t,e){t.player=e},updateListeningDuration:function(t,e){t.listeningDuration=e},updateNumberOfChoices:function(t,e){t.numberOfChoices=e},updateLockControls:function(t,e){t.lockControls=e},updateInfoModalOpen:function(t,e){t.infoModalOpen=e}},actions:{pause:function(t){return t.state.player.pause()},resume:function(t){return t.state.player.resume()},seek:function(t,e){return t.state.player.seek(e)},nextTrack:function(t){return t.state.player.nextTrack()}}}),ot=r("9f7b"),ct=r.n(ot);n["default"].config.productionTip=!1,n["default"].use(ct.a),new n["default"]({router:at,store:it,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){}});
//# sourceMappingURL=app.4ecd66cf.js.map