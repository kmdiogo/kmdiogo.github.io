(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],h=0,p=[];h<o.length;h++)i=o[h],n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-100 d-flex flex-column",attrs:{id:"app"}},[r("TheNavbar",{staticClass:"flex-shrink-0"}),r("router-view",{staticClass:"flex-grow-1"})],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"md",variant:"primary"}},[r("b-navbar-brand",[t._v("Trivialize!")]),r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-button",{staticClass:"mr-1",attrs:{variant:"info"},on:{click:function(e){return t.$store.commit("updateInfoModalOpen",!0)}}},[r("i",{staticClass:"far fa-question-circle"})]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.TheSettingsModal",modifiers:{TheSettingsModal:!0}}],staticClass:"ml-1",attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-cog"})])],1)],1),r("TheSettingsModal"),r("TheInfoModal")],1)},o=[],c=(r("3e39"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{attrs:{id:"TheSettingsModal",title:"Settings",centered:"","ok-only":""}},[t.$store.state.lockControls?r("p",{staticClass:"text-danger"},[t._v("*Please wait for playback to finish before changing settings")]):t._e(),r("b-card",[r("b-form-group",{attrs:{label:"Listening Duration (seconds)"}},[r("VueSlider",{attrs:{min:5,max:20,disabled:t.$store.state.lockControls},model:{value:t.listeningDuration,callback:function(e){t.listeningDuration=e},expression:"listeningDuration"}})],1),r("b-form-group",{attrs:{label:"Number of Choices"}},[r("VueSlider",{attrs:{min:2,max:10,disabled:t.$store.state.lockControls},model:{value:t.numberOfChoices,callback:function(e){t.numberOfChoices=e},expression:"numberOfChoices"}})],1)],1)],1)}),l=[],u=r("4971"),h=r.n(u),p=(r("24df"),{name:"TheSettingsModal",computed:{numberOfChoices:{get:function(){return this.$store.state.settings.numberOfChoices},set:function(t){this.$store.commit("updateNumberOfChoices",t)}},listeningDuration:{get:function(){return Math.floor(this.$store.state.settings.listeningDuration/1e3)},set:function(t){this.$store.commit("updateListeningDuration",1e3*t)}}},components:{VueSlider:h.a}}),f=p,d=r("2877"),m=Object(d["a"])(f,c,l,!1,null,"c99434c2",null),b=m.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{staticClass:"text-left",attrs:{title:"Help",centered:"","ok-only":""},model:{value:t.infoModalOpen,callback:function(e){t.infoModalOpen=e},expression:"infoModalOpen"}},[r("h6",[t._v("1. Open Spotify on any device")]),r("h6",[t._v("2. In the track player, select 'Devices Available'")]),r("h6",[t._v("3. Connect to the device titled 'Trivialize'. Trivialize should automatically start up in the browser")])])},g=[],k={name:"TheInfoModal",computed:{infoModalOpen:{get:function(){return this.$store.state.settings.infoModalOpen},set:function(t){this.$store.commit("updateInfoModalOpen",t)}}}},v=k,w=Object(d["a"])(v,y,g,!1,null,"191963b8",null),T=w.exports,O={name:"TheNavbar",components:{TheInfoModal:T,TheSettingsModal:b}},P=O,x=Object(d["a"])(P,i,o,!1,null,"331baa3f",null),C=x.exports,$={components:{TheNavbar:C}},_=$,L=(r("5c0b"),Object(d["a"])(_,n,s,!1,null,null,null)),S=L.exports,j=r("8c4f"),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center align-items-center h-100"},[t.$store.state.accessToken?r("b-card",{attrs:{title:"Waiting For Spotify Device"}},[r("b-spinner",{attrs:{label:"Spinning"}})],1):r("b-card",{attrs:{title:"Welcome to Trivialize!","sub-title":"Click the button below to connect your account and get started"}},[r("b-button",{staticStyle:{color:"green","background-color":"black"},attrs:{size:"lg"},on:{click:t.redirectToSpotify}},[r("i",{staticClass:"fab fa-spotify"})])],1),r("TheWebPlayback"),r("b-modal",{staticClass:"text-left",attrs:{title:"Trivialize Lite",centered:"","ok-only":"",size:"lg"},on:{ok:function(e){return t.$router.push("/play")}},model:{value:t.$store.state.isPlayliteModalOpen,callback:function(e){t.$set(t.$store.state,"isPlayliteModalOpen",e)},expression:"$store.state.isPlayliteModalOpen"}},[r("h3",{staticClass:"text-center"},[t._v("Before you Play...")]),r("h6",[t._v("\n            It looks like either your Spotify account isn't premium or your browser doesn't support Trivialize.\n            Regardless, you'll still be able to take advantage of most of Trivialize's features, but\n            this means you won't be able to link up a Spotify device to Trivialize.\n        ")]),r("h6",[t._v("\n            Because of this, the songs that are played are from Spotify's 30 second previews clips.\n            This can mean that some songs in your playlists won't available (if Spotify doesn't have a preview available) and tracks will play\n            from the same 30 second preview clip (which can get boring once you've memorized that specific track clip)\n        ")]),r("h6",[t._v("You're still welcome to use the rest of the features Trivialize has to offer. Have fun!")])])],1)},R=[],I=(r("28a5"),r("96cf"),r("3b8d")),D="995e9615284a4438b14c3a472177df80",z="https://kmdiogo.github.io",E="http://accounts.spotify.com/authorize?client_id=".concat(D,"&response_type=token&redirect_uri=").concat(z,"&scope=playlist-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing streaming user-read-birthdate user-read-email user-read-private"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-none",attrs:{id:"web-playback"}})},N=[],A={name:"TheWebPlayback",created:function(){},computed:{isPremium:function(){return this.$store.state.isPremium}},watch:{isPremium:function(){this.isPremium&&this.startSpotifyWebPlayer()}},methods:{startSpotifyWebPlayer:function(){var t=this,e=document.createElement("script");e.setAttribute("src","https://sdk.scdn.co/spotify-player.js"),document.head.appendChild(e),window.onSpotifyWebPlaybackSDKReady=function(){t.$store.state.webPlayback.player=new Spotify.Player({name:"Trivialize",getOAuthToken:function(e){e(t.$store.state.accessToken)}}),t.$store.state.webPlayback.player.addListener("initialization_error",function(e){var r=e.message;console.log("Error Initializing Playback"),console.error(r),t.$store.commit("updateIsPremium",!1),t.$store.commit("updateIsPlayliteModalOpen",!0),t.$store.commit("updateInfoModalOpen",!1)}),t.$store.state.webPlayback.player.addListener("authentication_error",function(t){var e=t.message;console.error(e)}),t.$store.state.webPlayback.player.addListener("account_error",function(t){var e=t.message;console.error(e)}),t.$store.state.webPlayback.player.addListener("playback_error",function(t){var e=t.message;console.error(e)}),t.$store.state.webPlayback.player.addListener("player_state_changed",function(e){t.$store.state.webPlayback.active||(t.$store.commit("updatePlayerActive",!0),t.$store.commit("updateInfoModalOpen",!1),t.$router.push("/choosePlaylist"))}),t.$store.state.webPlayback.player.addListener("ready",function(t){var e=t.device_id;console.log("Ready with Device ID",e)}),t.$store.state.webPlayback.player.addListener("not_ready",function(t){var e=t.device_id;console.log("Device ID has gone offline",e)}),t.$store.state.webPlayback.player.connect()}}}},U=A,W=Object(d["a"])(U,F,N,!1,null,"e5d77762",null),G=W.exports,K=r("d225"),H=r("b0b4"),B=r("bc3a"),V=r.n(B),Y=function(){function t(e){Object(K["a"])(this,t),this.token=e,this.http=V.a.create({baseURL:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer ".concat(e)}})}return Object(H["a"])(t,[{key:"getCurrentTrack",value:function(){return this.http.get("player/currently-playing")}},{key:"getUserPlaylists",value:function(){return this.http.get("/playlists?limit=50")}},{key:"setShuffle",value:function(t){return this.http.put("player/shuffle?state=".concat(t))}},{key:"getUserProfile",value:function(){return this.http.get("")}},{key:"searchPlaylist",value:function(t){return this.http.get("https://api.spotify.com/v1/search?q=".concat(t,"&type=playlist"))}}]),t}(),J={name:"home",components:{TheWebPlayback:G},created:function(){window.location.hash&&this.getTokenFromURL()},methods:{getTokenFromURL:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=window.location.hash.substring(1),r=e.split("=")[1],this.$store.commit("updateAccessToken",r),t.next=5,new Y(this.$store.state.accessToken).getUserProfile();case 5:a=t.sent,"premium"===a.data.product?(this.$store.commit("updateIsPremium",!0),this.$store.commit("updateInfoModalOpen",!0)):this.$store.commit("isPlayliteModalOpen",!0);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),redirectToSpotify:function(){window.location.href=E}}},q=J,X=Object(d["a"])(q,M,R,!1,null,null,null),Q=X.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center align-items-center h-100 flex-colum position-relative"},[r("b-button",{staticStyle:{position:"absolute",top:"10px",left:"10px"},attrs:{variant:"secondary",disabled:t.selectionMade||!t.tracks},on:{click:t.goToPlaylists}},[t._v("Choose New Playlist")]),r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center h-100 w-100"},[r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center h-75 w-75"},[t.gameOver?r("b-card",{staticClass:"shadow-lg",attrs:{"header-tag":"h3",header:t.gameOverHeader,"body-class":"overflow-auto"}},[0===t.incorrectSongs.length?r("div",[r("h5",[t._v("100%! Nice Job!")])]):r("div",[r("h5",[t._v("You missed these songs: ")]),r("b-table",{attrs:{items:t.incorrectSongs,fields:["artist","name"]},scopedSlots:t._u([{key:"artist",fn:function(e){return[t._v("\n                            "+t._s(e.item.artists[0].name)+"\n                        ")]}}],null,!1,4063761573)})],1),r("b-button",{attrs:{variant:"primary"},on:{click:t.goToPlaylists}},[t._v("Play Again?")])],1):r("b-card",{staticClass:"overflow-auto shadow-lg w-100 h-100",attrs:{header:t.songsLeftsHeader,"header-tag":"h3","body-class":"overflow-auto"}},t._l(t.choices,function(e){return r("b-button",{key:e.uri,attrs:{block:"",variant:t.buttonVariant(e.uri),disabled:t.selectionMade},on:{click:function(r){return t.onChoiceClick(e.uri)}}},[t._v("\n                    "+t._s(e.artists[0].name)+" - "+t._s(e.name)+"\n                ")])}),1),!t.gameOver&&t.tracks?r("b-card",{staticClass:"w-100 shadow-lg",attrs:{"body-class":"p-2","body-bg-variant":"dark"}},[r("b-button",{attrs:{variant:"secondary",disabled:t.$store.state.lockControls},on:{click:t.replayTrack}},[r("i",{staticClass:"fas fa-undo"})]),r("b-progress",{staticClass:"mt-2",attrs:{max:t.$store.state.settings.listeningDuration-800}},[r("b-progress-bar",{attrs:{value:t.progress,variant:"primary"}})],1)],1):t._e()],1)])],1)},tt=[],et=r("795b"),rt=r.n(et),at=(r("ac6a"),r("a4bb")),nt=r.n(at),st=r("2ef0"),it={name:"Play",data:function(){return{tracks:null,remainingTracks:{},choices:[],calculatedTrackStart:null,incorrectSongs:[],numberOfCorrect:0,gameOver:!1,showFeedback:!1,userChoiceURI:null,currentTrack:null,selectionMade:!1,progress:0,remainingTracksLength:0,NEXT_SONG_DELAY:2e3}},computed:{http:function(){var t={baseURL:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}};return V.a.create(t)},spotifyController:function(){return new Y(this.$store.state.accessToken)},songsLeftsHeader:function(){return"Songs Left: ".concat(this.remainingTracksLength)},gameOverHeader:function(){return"You got ".concat(this.numberOfCorrect," / ").concat(nt()(this.tracks).length," songs correct!")}},beforeRouteEnter:function(t,e,r){r(function(t){t.$store.state.accessToken?t.$store.state.gameState.tracks?t.startGame():t.$router.push("/choosePlaylist"):t.$router.push("/")})},methods:{goToPlaylists:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.resetGame(),this.$router.push("/choosePlaylist");case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),resetGame:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$store.state.isPremium){t.next=3;break}return t.next=3,this.$store.dispatch("pause");case 3:this.gameOver=!1,this.remainingTracks={},this.tracks=null,this.choices=[],this.numberOfCorrect=0,this.incorrectSongs=[],this.selectionMade=!1,this.progress=0,this.remainingTracksLength=0,this.currentTrack=null;case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),startGame:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.resetGame();case 2:e={},this.$store.state.gameState.tracks.forEach(function(t){r.$store.state.isPremium?t.track.is_playable&&(e[t.track.uri]=Object(st["cloneDeep"])(t.track)):t.track.preview_url&&(e[t.track.uri]=Object(st["cloneDeep"])(t.track))}),this.tracks=Object(st["cloneDeep"])(e),this.remainingTracks=Object(st["cloneDeep"])(e),this.remainingTracksLength=nt()(this.remainingTracks).length,this.playNextTrack();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),playNextTrack:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=nt()(this.remainingTracks),r=Math.floor(Math.random()*e.length),this.currentTrack=this.remainingTracks[e[r]],this.updateChoices(),this.selectionMade=!1,this.replayTrack();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),replayTrack:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.showFeedback=!1,this.$store.commit("updateLockControls",!0),this.$store.state.isPremium?this.replayTrackPremium():this.replayTrackLite();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),replayTrackLite:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,r,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=new Audio(this.currentTrack.preview_url),e.play(),r=setInterval(function(){a.progress+=100,a.progress!==a.$store.state.settings.listeningDuration&&!a.selectionMade&&a.tracks||(e.pause(),a.progress=0,a.selectionMade&&a.tracks||a.$store.commit("updateLockControls",!1),clearInterval(r))},100);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),replayTrackPremium:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,r,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.http.put("player/play",{uris:[this.currentTrack.uri],position_ms:this.calculatedTrackStart});case 2:return e=this.currentTrack.uri,t.next=5,this.waitForTrackPlay();case 5:r=setInterval(Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a.progress+=100,a.progress!==a.$store.state.settings.listeningDuration&&!a.selectionMade&&a.tracks||(clearInterval(r),a.progress=0);case 2:case"end":return t.stop()}},t)})),100),setTimeout(Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.spotifyController.getCurrentTrack();case 2:if(e!==this.currentTrack.uri){t.next=6;break}return t.next=5,this.$store.dispatch("pause");case 5:this.$store.commit("updateLockControls",!1);case 6:case"end":return t.stop()}},t,this)})).bind(this),this.$store.state.settings.listeningDuration);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updateChoices:function(){this.choices=[],this.choices.push(Object(st["cloneDeep"])(this.remainingTracks[this.currentTrack.uri])),delete this.remainingTracks[this.currentTrack.uri],this.remainingTracksLength-=1;var t=this.$store.state.settings.numberOfChoices-1;nt()(this.remainingTracks).length<t&&(t=nt()(this.remainingTracks).length);for(var e=Object(st["shuffle"])(nt()(this.remainingTracks)),r=0;r<t;r++)this.choices.push(this.remainingTracks[e[r]]);this.choices=Object(st["shuffle"])(this.choices),this.tracks[this.currentTrack.uri].duration_ms<=3e4?this.calculatedTrackStart=0:this.calculatedTrackStart=Math.floor(Math.random()*(this.tracks[this.currentTrack.uri].duration_ms-3e4))},onChoiceClick:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){var r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.selectionMade=!0,!this.$store.state.isPremium){t.next=4;break}return t.next=4,this.$store.dispatch("pause");case 4:this.userChoiceURI=e,this.showFeedback=!0,this.$store.commit("updateLockControls",!0),e===this.currentTrack.uri?this.numberOfCorrect+=1:this.incorrectSongs.push(Object(st["cloneDeep"])(this.tracks[this.currentTrack.uri])),setTimeout(Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==nt()(r.remainingTracks).length){t.next=5;break}return r.gameOver=!0,t.abrupt("return",!1);case 5:r.playNextTrack();case 6:case"end":return t.stop()}},t)})),this.NEXT_SONG_DELAY);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),buttonVariant:function(t){return this.showFeedback&&t===this.currentTrack.uri?"success":this.showFeedback&&t===this.userChoiceURI?"danger":"outline-primary"},waitForTrackPlay:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new rt.a(function(t){var r=0,a=setInterval(Object(I["a"])(regeneratorRuntime.mark(function n(){var s;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return r+=500,n.next=3,e.spotifyController.getCurrentTrack();case 3:s=n.sent,s.data.is_playing?(clearInterval(a),t(a)):r>1e4&&(clearInterval(a),t(a));case 5:case"end":return n.stop()}},n)})),500)}));case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},ot=it,ct=Object(d["a"])(ot,Z,tt,!1,null,"3876fb9a",null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center align-items-center h-100 flex-colum position-relative"},[r("b-card",{staticClass:"h-75 w-75 shadow-lg",attrs:{header:"Select a Playlist","header-tag":"h3","body-class":"overflow-auto p-4","no-body":""}},[r("b-tabs",{staticClass:"overflow-auto",attrs:{card:""}},[r("b-tab",{attrs:{title:"My Playlists"}},[t.playLists?r("b-table",{staticClass:"overflow-auto",attrs:{items:t.playLists,fields:t.playlistTableFields,outlined:"",reponsive:"",hover:"","thead-class":"d-none",busy:t.isLoading},scopedSlots:t._u([{key:"images",fn:function(e){return[r("b-img",{attrs:{width:"100px",height:"100px",src:t.noImageFallback(e.item),fluid:""}})]}},{key:"select",fn:function(e){return[r("b-button",{on:{click:function(r){return t.onPlaylistClick(e)}}},[t._v("Select")])]}}],null,!1,2727554309)},[r("template",{staticClass:"text-center text-primary my-2",slot:"table-busy"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[t._v("Loading...")])],1)],2):t._e()],1),r("b-tab",{attrs:{title:"Search Playlist"}},[r("b-form-group",{attrs:{"label-cols-md":3,label:"Search Keyword: "}},[r("b-input",{attrs:{size:"sm"},on:{input:t.debounceInput}})],1),t.searchPlayLists?r("b-table",{staticClass:"overflow-auto",attrs:{items:t.searchPlayLists,fields:t.playlistTableFields,outlined:"",reponsive:"",hover:"","thead-class":"d-none",busy:t.searchIsLoading},scopedSlots:t._u([{key:"images",fn:function(e){return[r("b-img",{attrs:{width:"100px",height:"100px",src:t.noImageFallback(e.item),fluid:""}})]}},{key:"select",fn:function(e){return[r("b-button",{on:{click:function(r){return t.onPlaylistClick(e)}}},[t._v("Select")])]}}],null,!1,2727554309)},[r("template",{staticClass:"text-center text-primary my-2",slot:"table-busy"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[t._v("Loading...")])],1)],2):t._e()],1)],1)],1)],1)},ht=[],pt={name:"ChoosePlaylist",beforeRouteEnter:function(t,e,r){r(function(t){t.$store.state.accessToken?t.loadPlaylists():t.$router.push("/")})},data:function(){return{playLists:[],searchPlayLists:[],playlistTableFields:["name","images","select"],isLoading:!1,searchKeyword:"",searchIsLoading:!1}},watch:{searchKeyword:function(){this.searchKeyword.length>0&&this.searchPlaylists()}},computed:{http:function(){var t={baseURL:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer ".concat(this.$store.state.accessToken)}};return V.a.create(t)},spotifyController:function(){return new Y(this.$store.state.accessToken)},playList:{get:function(){return this.$store.state.gameState.playList},set:function(t){this.$store.commit("updatePlayList",t)}},tracks:{get:function(){return this.$store.state.gameState.tracks},set:function(t){this.$store.commit("updateTracks",t)}}},methods:{loadPlaylists:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.spotifyController.getUserPlaylists();case 3:e=t.sent,this.playLists=[],e.data.items.forEach(function(t){t.tracks.total>0&&r.playLists.push(t)}),this.isLoading=!1;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onPlaylistClick:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.playList=e.item,t.next=3,this.http.get(e.item.tracks.href+"?market=from_token&fields=items(track(uri,name,is_playable,id,duration_ms,artists,preview_url))");case 3:r=t.sent,this.tracks=Object(st["cloneDeep"])(r.data.items),this.$router.push("/play");case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),noImageFallback:function(t){return t.images[0]?t.images[0].url:""},searchPlaylists:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.searchIsLoading=!0,t.next=3,this.spotifyController.searchPlaylist(this.searchKeyword);case 3:e=t.sent,this.searchPlayLists=[],e.data.playlists.items.forEach(function(t){t.tracks.total>0&&r.searchPlayLists.push(t)}),this.searchIsLoading=!1;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),debounceInput:Object(st["debounce"])(function(t){this.searchKeyword=t},500)}},ft=pt,dt=Object(d["a"])(ft,ut,ht,!1,null,"dbd55690",null),mt=dt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},yt=[],gt={name:"PlayLite"},kt=gt,vt=Object(d["a"])(kt,bt,yt,!1,null,"7cdffd85",null),wt=vt.exports;a["default"].use(j["a"]);var Tt=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Q},{path:"/choosePlaylist",component:mt},{path:"/play",component:lt},{path:"/playLite",component:wt}]}),Ot=r("2f62"),Pt={state:{active:!1,player:null},mutations:{updatePlayerActive:function(t,e){t.active=e},updatePlayer:function(t,e){t.player=e}},actions:{pause:function(t){return t.state.player.pause()},resume:function(t){return t.state.player.resume()},seek:function(t,e){return t.state.player.seek(e)},nextTrack:function(t){return t.state.player.nextTrack()}}},xt={state:{listeningDuration:5e3,numberOfChoices:5,infoModalOpen:!1},mutations:{updateListeningDuration:function(t,e){t.listeningDuration=e},updateNumberOfChoices:function(t,e){t.numberOfChoices=e},updateInfoModalOpen:function(t,e){t.infoModalOpen=e}}},Ct={state:{playList:null,tracks:null},mutations:{updatePlayList:function(t,e){t.playList=e},updateTracks:function(t,e){t.tracks=e}}};a["default"].use(Ot["a"]);var $t=new Ot["a"].Store({modules:{webPlayback:Pt,settings:xt,gameState:Ct},state:{accessToken:"",lockControls:!1,isPremium:!1,isPlayliteModalOpen:!1},mutations:{updateAccessToken:function(t,e){t.accessToken=e},updateLockControls:function(t,e){t.lockControls=e},updateIsPremium:function(t,e){t.isPremium=e},updateIsPlayliteModalOpen:function(t,e){t.isPlayliteModalOpen=e}}}),_t=r("9f7b"),Lt=r.n(_t);a["default"].config.productionTip=!1,a["default"].use(Lt.a),new a["default"]({router:Tt,store:$t,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),n=r.n(a);n.a},"5e27":function(t,e,r){}});
//# sourceMappingURL=app.e7d1dd33.js.map