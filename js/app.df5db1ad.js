(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],h=0,p=[];h<o.length;h++)i=o[h],a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-100 d-flex flex-column",attrs:{id:"app"}},[r("TheNavbar",{staticClass:"flex-shrink-0"}),r("router-view",{staticClass:"flex-grow-1"})],1)},s=[],i=(r("28a5"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{toggleable:"md",variant:"primary"}},[r("b-navbar-brand",[e._v("Trivialize!")]),r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-button",{staticClass:"mr-1",attrs:{variant:"info"},on:{click:function(t){return e.$store.commit("updateInfoModalOpen",!0)}}},[r("i",{staticClass:"far fa-question-circle"})]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.TheSettingsModal",modifiers:{TheSettingsModal:!0}}],staticClass:"ml-1",attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-cog"})])],1)],1),r("TheSettingsModal"),r("TheInfoModal")],1)}),o=[],c=(r("3e39"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{id:"TheSettingsModal",title:"Settings",centered:"","ok-only":""}},[e.$store.state.lockControls?r("p",{staticClass:"text-danger"},[e._v("*Please wait for playback to finish before changing settings")]):e._e(),r("b-card",[r("b-form-group",{attrs:{label:"Listening Duration (seconds)"}},[r("VueSlider",{attrs:{min:5,max:20},model:{value:e.listeningDuration,callback:function(t){e.listeningDuration=t},expression:"listeningDuration"}})],1),r("b-form-group",{attrs:{label:"Number of Choices"}},[r("VueSlider",{attrs:{min:2,max:10},model:{value:e.numberOfChoices,callback:function(t){e.numberOfChoices=t},expression:"numberOfChoices"}})],1)],1)],1)}),l=[],u=r("4971"),h=r.n(u),p=(r("24df"),{name:"TheSettingsModal",computed:{numberOfChoices:{get:function(){return this.$store.state.settings.numberOfChoices},set:function(e){this.$store.commit("updateNumberOfChoices",e)}},listeningDuration:{get:function(){return Math.floor(this.$store.state.settings.listeningDuration/1e3)},set:function(e){this.$store.commit("updateListeningDuration",1e3*e)}}},components:{VueSlider:h.a}}),f=p,d=r("2877"),m=Object(d["a"])(f,c,l,!1,null,"751a83df",null),b=m.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{staticClass:"text-left",attrs:{title:"Help",centered:"","ok-only":""},model:{value:e.infoModalOpen,callback:function(t){e.infoModalOpen=t},expression:"infoModalOpen"}},[r("h6",[e._v("1. Open Spotify on any device")]),r("h6",[e._v("2. In the track player, select 'Devices Available'")]),r("h6",[e._v("3. Connect to the device titled 'Trivialize'. Trivialize should automatically start up in the browser")])])},y=[],k={name:"TheInfoModal",computed:{infoModalOpen:{get:function(){return this.$store.state.settings.infoModalOpen},set:function(e){this.$store.commit("updateInfoModalOpen",e)}}}},v=k,w=Object(d["a"])(v,g,y,!1,null,"191963b8",null),T=w.exports,O={name:"TheNavbar",components:{TheInfoModal:T,TheSettingsModal:b}},C=O,x=Object(d["a"])(C,i,o,!1,null,"331baa3f",null),_=x.exports,$={components:{TheNavbar:_},created:function(){window.location.hash&&this.getTokenFromURL()},methods:{getTokenFromURL:function(){var e=window.location.hash.substring(1),t=e.split("=")[1];this.$store.commit("updateAccessToken",t)}}},R=$,S=(r("5c0b"),Object(d["a"])(R,a,s,!1,null,null,null)),P=S.exports,j=r("8c4f"),M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center align-items-center h-100"},[e.$store.state.accessToken?r("b-card",{attrs:{title:"Waiting For Spotify Device"}},[r("b-spinner",{attrs:{label:"Spinning"}})],1):r("b-card",{attrs:{title:"Welcome to Trivialize!","sub-title":"Click the button below to connect your account and get started"}},[r("b-button",{staticStyle:{color:"green","background-color":"black"},attrs:{size:"lg"},on:{click:e.redirectToSpotify}},[r("i",{staticClass:"fab fa-spotify"})])],1),r("TheWebPlayback")],1)},I=[],D="995e9615284a4438b14c3a472177df80",L="https://kmdiogo.github.io",U="http://accounts.spotify.com/authorize?client_id=".concat(D,"&response_type=token&redirect_uri=").concat(L,"&scope=playlist-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing streaming user-read-birthdate user-read-email user-read-private"),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-none",attrs:{id:"web-playback"}})},N=[],z={name:"TheWebPlayback",created:function(){this.$store.state.accessToken&&(this.startSpotifyWebPlayer(),this.$store.commit("updateInfoModalOpen",!0))},methods:{startSpotifyWebPlayer:function(){var e=this;window.onSpotifyWebPlaybackSDKReady=function(){e.$store.state.webPlayback.player=new Spotify.Player({name:"Trivialize",getOAuthToken:function(t){t(e.$store.state.accessToken)}}),e.$store.state.webPlayback.player.addListener("initialization_error",function(e){var t=e.message;console.error(t)}),e.$store.state.webPlayback.player.addListener("authentication_error",function(e){var t=e.message;console.error(t)}),e.$store.state.webPlayback.player.addListener("account_error",function(e){var t=e.message;console.error(t)}),e.$store.state.webPlayback.player.addListener("playback_error",function(e){var t=e.message;console.error(t)}),e.$store.state.webPlayback.player.addListener("player_state_changed",function(t){e.$store.state.webPlayback.active||(e.$store.commit("updatePlayerActive",!0),e.$store.commit("updateInfoModalOpen",!1),e.$router.push("/play"))}),e.$store.state.webPlayback.player.addListener("ready",function(e){var t=e.device_id;console.log("Ready with Device ID",t)}),e.$store.state.webPlayback.player.addListener("not_ready",function(e){var t=e.device_id;console.log("Device ID has gone offline",t)}),e.$store.state.webPlayback.player.connect()}}}},A=z,E=Object(d["a"])(A,F,N,!1,null,"2a9229ae",null),W=E.exports,H={name:"home",components:{TheWebPlayback:W},methods:{redirectToSpotify:function(){window.location.href=U}}},V=H,J=Object(d["a"])(V,M,I,!1,null,null,null),B=J.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center align-items-center h-100 flex-colum position-relative"},[r("b-button",{staticStyle:{position:"absolute",top:"10px",left:"10px"},attrs:{variant:"secondary",disabled:e.selectionMade||!e.tracks},on:{click:e.loadPlaylists}},[e._v("Choose New Playlist")]),r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.tracks?e.gameOver?r("b-card",{staticClass:"shadow-lg",attrs:{"header-tag":"h3",header:e.gameOverHeader,"body-class":"overflow-auto"}},[0===e.incorrectSongs.length?r("div",[r("h5",[e._v("100%! Nice Job!")])]):r("div",[r("h5",[e._v("You missed these songs: ")]),r("b-table",{attrs:{items:e.incorrectSongs,fields:["artist","name"]},scopedSlots:e._u([{key:"artist",fn:function(t){return[e._v("\n                            "+e._s(t.item.artists[0].name)+"\n                        ")]}}])})],1),r("b-button",{attrs:{variant:"primary"},on:{click:e.loadPlaylists}},[e._v("Play Again?")])],1):r("b-card",{staticClass:"overflow-auto h-50 shadow-lg",attrs:{header:e.songsLeftsHeader,"header-tag":"h3","body-class":"overflow-auto"}},e._l(e.choices,function(t){return r("b-button",{key:t.uri,attrs:{block:"",variant:e.buttonVariant(t.uri),disabled:e.selectionMade},on:{click:function(r){return e.onChoiceClick(t.uri)}}},[e._v("\n                    "+e._s(t.artists[0].name)+" - "+e._s(t.name)+"\n                ")])}),1):r("b-card",{staticClass:"h-50 shadow-lg",attrs:{header:"Select a Playlist","header-tag":"h3","body-class":"overflow-auto p-4"}},[e.playLists?r("b-table",{staticClass:"overflow-auto",attrs:{items:e.playLists,fields:e.playlistTableFields,outlined:"",reponsive:"",hover:"","thead-class":"d-none"},scopedSlots:e._u([{key:"images",fn:function(e){return[r("b-img",{attrs:{width:"100px",height:"100px",src:e.item.images[0].url,fluid:""}})]}},{key:"select",fn:function(t){return[r("b-button",{on:{click:function(r){return e.onPlaylistClick(t)}}},[e._v("Select")])]}}],null,!1,1266630215)}):e._e()],1)],1),!e.gameOver&&e.tracks?r("b-card",{staticClass:"w-100 shadow-lg",attrs:{"body-class":"p-2","body-bg-variant":"dark"}},[r("b-button",{attrs:{variant:"secondary",disabled:e.$store.state.lockControls},on:{click:e.replayTrack}},[r("i",{staticClass:"fas fa-undo"})]),r("b-progress",{staticClass:"mt-2",attrs:{max:e.$store.state.settings.listeningDuration-800}},[r("b-progress-bar",{attrs:{value:e.progress,variant:"primary"}})],1)],1):e._e()],1)],1)},Y=[],q=r("795b"),K=r.n(q),Q=(r("ac6a"),r("96cf"),r("3b8d")),X=r("a4bb"),Z=r.n(X),ee=r("bc3a"),te=r.n(ee),re=r("d225"),ne=r("b0b4"),ae=function(){function e(t){Object(re["a"])(this,e),this.token=t,this.http=te.a.create({baseURL:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer ".concat(t)}})}return Object(ne["a"])(e,[{key:"getCurrentTrack",value:function(){return this.http.get("player/currently-playing")}},{key:"getUserPlaylists",value:function(){return this.http.get("/playlists?limit=50")}},{key:"setShuffle",value:function(e){return this.http.put("player/shuffle?state=".concat(e))}}]),e}(),se=r("2ef0"),ie={name:"Play",data:function(){return{playlistTableFields:["name","images","select"],playLists:null,tracks:null,remainingTracks:{},choices:[],calculatedTrackStart:null,currentTrackDuration:null,incorrectSongs:[],numberOfCorrect:0,gameOver:!1,showFeedback:!1,userChoiceURI:null,currentTrackURI:null,selectionMade:!1,progress:0}},computed:{http:function(){var e={baseURL:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}};return te.a.create(e)},spotifyController:function(){return new ae(this.$store.state.accessToken)},songsLeftsHeader:function(){return"Songs Left: ".concat(Z()(this.remainingTracks).length)},gameOverHeader:function(){return"You got ".concat(this.numberOfCorrect," / ").concat(Z()(this.tracks).length," songs correct!")}},beforeRouteEnter:function(e,t,r){r(function(e){e.$store.state.accessToken?e.loadPlaylists():e.$router.push("/")})},methods:{loadPlaylists:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.spotifyController.getUserPlaylists();case 2:t=e.sent,this.playLists=t.data.items,this.resetGame();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetGame:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("pause");case 2:this.gameOver=!1,this.remainingTracks={},this.tracks=null,this.choices=[],this.numberOfCorrect=0,this.incorrectSongs=[],this.selectionMade=!1,this.progress=0;case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onPlaylistClick:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.spotifyController.setShuffle(!0);case 2:return e.next=4,this.http.get(t.item.tracks.href+"?market=from_token&fields=items(track(uri,name,is_playable,id,duration_ms,artists))");case 4:r=e.sent,n={},r.data.items.forEach(function(e){e.track.is_playable&&(n[e.track.uri]=Object(se["cloneDeep"])(e.track))}),this.tracks=Object(se["cloneDeep"])(n),this.remainingTracks=Object(se["cloneDeep"])(n),this.playNextTrack();case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),playNextTrack:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=Z()(this.remainingTracks),r=Math.floor(Math.random()*t.length),this.currentTrackURI=t[r],e.next=5,this.updateChoices();case 5:this.selectionMade=!1,this.replayTrack();case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),replayTrack:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.showFeedback=!1,this.$store.commit("updateLockControls",!0),e.next=4,this.http.put("player/play",{uris:[this.currentTrackURI],position_ms:this.calculatedTrackStart});case 4:return t=this.currentTrackURI,e.next=7,this.waitForTrackPlay();case 7:r=setInterval(Object(Q["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n.progress+=100,(n.progress===n.$store.state.settings.listeningDuration||n.selectionMade)&&(clearInterval(r),n.progress=0);case 2:case"end":return e.stop()}},e)})),100),setTimeout(Object(Q["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.spotifyController.getCurrentTrack();case 2:if(t!==this.currentTrackURI){e.next=6;break}return e.next=5,this.$store.dispatch("pause");case 5:this.$store.commit("updateLockControls",!1);case 6:case"end":return e.stop()}},e,this)})).bind(this),this.$store.state.settings.listeningDuration);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),updateChoices:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(this.choices=[],this.choices.push(Object(se["cloneDeep"])(this.remainingTracks[this.currentTrackURI])),delete this.remainingTracks[this.currentTrackURI],t=this.$store.state.settings.numberOfChoices-1,Z()(this.remainingTracks).length<t&&(t=Z()(this.remainingTracks).length),r=Object(se["shuffle"])(Z()(this.remainingTracks)),n=0;n<t;n++)this.choices.push(this.remainingTracks[r[n]]);this.choices=Object(se["shuffle"])(this.choices),this.tracks[this.currentTrackURI].duration_ms<=3e4?this.calculatedTrackStart=0:this.calculatedTrackStart=Math.floor(Math.random()*this.tracks[this.currentTrackURI].duration_ms-3e4);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onChoiceClick:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(t){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.selectionMade=!0,e.next=3,this.$store.dispatch("pause");case 3:this.userChoiceURI=t,this.showFeedback=!0,this.$store.commit("updateLockControls",!0),t===this.currentTrackURI?this.numberOfCorrect+=1:this.incorrectSongs.push(Object(se["cloneDeep"])(this.tracks[this.currentTrackURI])),setTimeout(Object(Q["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==Z()(r.remainingTracks).length){e.next=5;break}return r.gameOver=!0,e.abrupt("return",!1);case 5:r.playNextTrack();case 6:case"end":return e.stop()}},e)})),2e3);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),buttonVariant:function(e){return this.showFeedback&&e===this.currentTrackURI?"success":this.showFeedback&&e===this.userChoiceURI?"danger":"outline-primary"},waitForTrackPlay:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new K.a(function(e){var r=0,n=setInterval(Object(Q["a"])(regeneratorRuntime.mark(function a(){var s;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r+=500,a.next=3,t.spotifyController.getCurrentTrack();case 3:s=a.sent,s.data.is_playing?(clearInterval(n),e(n)):r>1e4&&(clearInterval(n),e(n));case 5:case"end":return a.stop()}},a)})),500)}));case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}},oe=ie,ce=Object(d["a"])(oe,G,Y,!1,null,"43a053c7",null),le=ce.exports;n["default"].use(j["a"]);var ue=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:B},{path:"/play",component:le}]}),he=r("2f62"),pe={state:{active:!1,player:null},mutations:{updatePlayerActive:function(e,t){e.active=t},updatePlayer:function(e,t){e.player=t}},actions:{pause:function(e){return e.state.player.pause()},resume:function(e){return e.state.player.resume()},seek:function(e,t){return e.state.player.seek(t)},nextTrack:function(e){return e.state.player.nextTrack()}}},fe={state:{listeningDuration:5e3,numberOfChoices:5,infoModalOpen:!1},mutations:{updateListeningDuration:function(e,t){e.listeningDuration=t},updateNumberOfChoices:function(e,t){e.numberOfChoices=t},updateInfoModalOpen:function(e,t){e.infoModalOpen=t}}};n["default"].use(he["a"]);var de=new he["a"].Store({modules:{webPlayback:pe,settings:fe},state:{accessToken:"",lockControls:!1},mutations:{updateAccessToken:function(e,t){e.accessToken=t},updateLockControls:function(e,t){e.lockControls=t}}}),me=r("9f7b"),be=r.n(me);n["default"].config.productionTip=!1,n["default"].use(be.a),new n["default"]({router:ue,store:de,render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(e,t,r){}});
//# sourceMappingURL=app.df5db1ad.js.map