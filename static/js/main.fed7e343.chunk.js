(this.webpackJsonppuzzle=this.webpackJsonppuzzle||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/default.ef2b6dff.jpg"},19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),u=n.n(i),c=(n(24),n(25),n(1)),o=n(5),s=n(2),l="LOAD_IMG",p="CHANGE_SIZE",h="START",d="RESET",f="CLOCK_START",m="CLOCK_STOP",v="CLOCK_PAUSE",y="STEPS_SHOW",g="STEPS_COUNT",w=function(e,t){for(var n in e)if(e[n]!==t[n])return!1;return e.length===t.length},S=function(e){for(var t=[],n=1;n<e;n++)t.push(n);var r=1,a=e;for(a=0===(1&e)?a+1:e;r<a;){var i=Math.floor(Math.random()*(e-1)),u=Math.floor(Math.random()*(e-1));if(i!==u){var c=t[i];t[i]=t[u],t[u]=c,r++}}return t},b={picture:n(14),size:3,startArr:[],resetToggle:0};var k={displayStatus:!1,pauseStatus:!1};var E={displayStatus:!1,steps:0};var O=Object(o.b)({puzzleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)({},e,{picture:t.picture});case p:return Object(s.a)({},e,{size:t.size});case h:var n=e.size,r=S(Math.pow(n,2));return Object(s.a)({},e,{startArr:r});case d:var a=e.resetToggle;return Object(s.a)({},e,{startArr:[],resetToggle:~a});default:return e}},clockReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;switch((arguments.length>1?arguments[1]:void 0).type){case f:return Object(s.a)({},e,{displayStatus:!0});case m:return Object(s.a)({},e,{displayStatus:!1});case v:var t=e.pauseStatus;return Object(s.a)({},e,{pauseStatus:!t});default:return e}},stepsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=e.displayStatus,r=e.steps;switch(t.type){case y:var a=t.isShow,i="undefined"===typeof a?!n:a,u=i?r:0;return Object(s.a)({},e,{displayStatus:i,steps:u});case g:var c=r;return c=e.displayStatus?++c:0,Object(s.a)({},e,{steps:c});default:return e}}}),j=n(7),z=n(8),x=n(11),R=n(10),D=n(12),I=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(x.a)(this,Object(R.a)(t).call(this,e))).state={hour:0,minute:0,second:0},n}return Object(D.a)(t,e),Object(z.a)(t,[{key:"tick",value:function(){var e=this.state,t=e.hour,n=e.minute,r=e.second;++r>59&&(n++,r=0),n>59&&(t++,n=0),t>24&&clearInterval(this.timerID),this.setState({hour:t,minute:n,second:r})}},{key:"start",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"stop",value:function(){clearInterval(this.timerID),this.clear()}},{key:"clear",value:function(){this.setState({hour:0,minute:0,second:0})}},{key:"pause",value:function(){clearInterval(this.timerID)}},{key:"componentDidUnMount",value:function(){clearInterval(this.timerID)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.displayStatus,r=t.pauseStatus;e.displayStatus!==n&&(n?this.start():this.stop()),e.pauseStatus!==r&&this.pause()}},{key:"render",value:function(){var e=this.state,t=e.hour,n=e.minute,r=e.second,i=this.props.displayStatus;return a.a.createElement("div",null,i?a.a.createElement("h2",null,t>9?t:"0".concat(t),":",n>9?n:"0".concat(n),":",r>9?r:"0".concat(r)):"")}}]),t}(r.Component),C=Object(c.b)((function(e){return{displayStatus:e.clockReducer.displayStatus,pauseStatus:e.clockReducer.pauseStatus}}),null)(I),A=(n(31),function(e){var t=e.onStart,n=e.onReset,r=e.onSteps;return a.a.createElement("div",{className:"controller"},a.a.createElement("button",{onClick:t}," \u5f00\u59cb "),a.a.createElement("button",{onClick:n}," \u91cd\u7f6e "),a.a.createElement("button",{onClick:r}," \u6b65\u6570 "),a.a.createElement("button",null," \u81ea\u52a8 "),a.a.createElement(C,null))}),T=function(e){return{type:l,picture:e}},U=function(e){return{type:p,size:e}},L=function(){return{type:h}},M=function(){return{type:d}},N=function(){return{type:f}},W=function(){return{type:m}},K=function(){return{type:v}},F=function(e){return{type:y,isShow:e}},P=function(){return{type:g}},B=Object(c.b)(null,(function(e,t){return{onStart:function(t){e(L()),e(N()),e(F(!0))},onReset:function(t){e(M()),e(W()),e(F(!1))},onSteps:function(t){e(F())}}}))(A),_=n(14),H=n.n(_),G=(n(32),function(e){var t=e.choosePicture;return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"chooser-file"},a.a.createElement("input",{id:"input-file",type:"file",accept:"image/*",capture:"camera",onChange:t}),a.a.createElement("label",{htmlFor:"input-file"},"\u9009\u62e9\u56fe\u7247")),a.a.createElement("p",null,a.a.createElement("img",{id:"show-img",draggable:"true",src:H.a,className:"chooser-preview",alt:"preview"})))}),J=function(e,t){var n=document.createElement("CANVAS");return n.width=e,n.height=t,n},q=Object(c.b)(null,(function(e,t){return{choosePicture:function(t){var n=document.querySelectorAll("#show-img");(function(e){return new Promise((function(t,n){var r=e.target.files[0];if(!window.FileReader){var a=(window.url||window.webkitURL).createObjectURL(r);return t(a)}var i=new FileReader;i.readAsDataURL(r),i.onloadend=function(e){return t(e.target.result)}}))})(t).then((function(t){n.forEach((function(e){return e.src=t})),e(T(t))}))}}}))(G),V=["\u7b80\u5355","\u4e2d\u7b49","\u56f0\u96be"],Y=function(e){var t=e.chooseMode;return a.a.createElement(r.Fragment,null,V.map((function(e,n){return a.a.createElement("label",{htmlFor:"M".concat(n),key:n},e,a.a.createElement("input",{id:n,type:"radio",name:"modeRadios",defaultChecked:0===n,onKeyDown:function(e){return e.preventDefault()},onChange:t}))})))},Z=Object(c.b)(null,(function(e,t){return{chooseMode:function(t){var n=t.target.id;e(U("1"===n?6:"2"===n?9:3)),e(W())}}}))(Y),$=n(9),Q=(n(33),function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(x.a)(this,Object(R.a)(t).call(this,e))).state={pieces:[],count:0,origin:[]},n.handleKeyDown=n.handleKeyDown.bind(Object($.a)(n)),n}return Object(D.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.clipImg()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(e,t,n){var r,a;e.picture===this.props.picture&&e.size===this.props.size||(this.clipImg(),this.props.displaySteps()),r=e.startArr,a=this.props.startArr,!w(r,a)&&this.isStarting()&&this.start(),e.resetToggle!==this.props.resetToggle&&this.reset()}},{key:"clipImg",value:function(){var e=this,t=this.props,n=t.picture,r=t.size;(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return new Promise((function(n,r){var a=new Image;a.crossOrigin="Anonymous",a.src=e,a.onload=function(){var e=J(this.naturalWidth,this.naturalHeight),r=e.getContext("2d");r.drawImage(this,0,0);for(var a=J(this.naturalWidth/t,this.naturalHeight/t),i=a.getContext("2d"),u=a.width,c=a.height,o=[],s=0;s<t;s++)for(var l=0;l<t;l++){var p=r.getImageData(l*u,s*c,u,c);i.putImageData(p,0,0),o.push({id:s*t+l+1,x:l,y:s,data:a.toDataURL()})}return e=null,a=null,n(o)},a.onerror=function(){r(new Error("could not load image!"))}}))})(n,r).then((function(t){var n=[];t.forEach((function(e){return n.push([e.x,e.y])})),e.setState({pieces:t,count:Math.pow(r,2),origin:n})}))}},{key:"handleKeyDown",value:function(e){var t=this.state,n=t.pieces,r=t.count,a=n;switch(window.event?e.keyCode:e.which){case 37:a=this.moveLeft(n,r);break;case 38:a=this.moveUp(n,r);break;case 39:a=this.moveRight(n,r);break;case 40:a=this.moveDown(n,r)}a!==n&&(this.setState({pieces:a}),this.props.countSteps(),this.isWinner()&&this.isStarting()&&(alert("YOU WIN!"),this.props.stopClock()))}},{key:"moveRight",value:function(e,t){var n=e.find((function(e){return e.id===t})),r=e.find((function(e){return e.y===n.y&&e.x===n.x-1}));return r?(this.swapBlock(r,n),e.slice()):e}},{key:"moveLeft",value:function(e,t){var n=e.find((function(e){return e.id===t})),r=e.find((function(e){return e.y===n.y&&e.x===n.x+1}));return r&&(this.swapBlock(r,n),e=e.slice()),e}},{key:"moveUp",value:function(e,t){var n=e.find((function(e){return e.id===t})),r=e.find((function(e){return e.x===n.x&&e.y===n.y+1}));return r&&(this.swapBlock(r,n),e=e.slice()),e}},{key:"moveDown",value:function(e,t){var n=e.find((function(e){return e.id===t})),r=e.find((function(e){return e.x===n.x&&e.y===n.y-1}));return r&&(this.swapBlock(r,n),e=e.slice()),e}},{key:"swapBlock",value:function(e,t){e.x^=t.x,t.x^=e.x,e.x^=t.x,e.y^=t.y,t.y^=e.y,e.y^=t.y}},{key:"isStarting",value:function(){return!w([],this.props.startArr)}},{key:"start",value:function(){this.reset();for(var e=this.state,t=e.pieces,n=e.origin,r=this.props.startArr,a=0;a<t.length-1;a++){var i=n[r[a]-1];t[a].x=i[0],t[a].y=i[1]}this.setState({pieces:t})}},{key:"reset",value:function(){var e=this.state,t=e.pieces,n=e.origin;t.forEach((function(e,t){e.x=n[t][0],e.y=n[t][1]})),this.setState({pieces:t})}},{key:"isWinner",value:function(){var e=this.state,t=e.pieces,n=e.origin,r=!0;return t.forEach((function(e,t){e.x===n[t][0]&&e.y===n[t][1]||(r=!1)})),r}},{key:"render",value:function(){var e=this.state,t=e.pieces,n=e.count,i=this.props.size;return a.a.createElement(r.Fragment,null,t.map((function(e,r){return e.id!==n?a.a.createElement("div",{id:"img-".concat(e.id),key:e.id,className:"puzzle-div",style:{width:"".concat(100/i,"%"),height:"".concat(100/i,"%"),transform:"translate3d(".concat(100*e.x,"%, ").concat(100*e.y,"%, 0)"),WebkitTransform:"translate3d(".concat(100*e.x,"%, ").concat(100*e.y,"%, 0)")}},a.a.createElement("img",{draggable:"true",src:e.data,className:"puzzle-img",alt:"showImg",style:{zIndex:t.length-r}})):null})))}}]),t}(r.Component)),X=Object(c.b)((function(e){return{picture:e.puzzleReducer.picture,size:e.puzzleReducer.size,startArr:e.puzzleReducer.startArr,resetToggle:e.puzzleReducer.resetToggle}}),(function(e,t){return{countSteps:function(){e(P())},displaySteps:function(){e(F(!1))},stopClock:function(){e(K())}}}))(Q),ee=Object(c.b)((function(e){return{displayStatus:e.stepsReducer.displayStatus,steps:e.stepsReducer.steps}}),null)((function(e){var t=e.displayStatus,n=e.steps;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement("p",null,"\u6b65\u6570: ",n):null)})),te=Object(o.c)(O),ne=function(){return a.a.createElement(c.a,{store:te},a.a.createElement("article",{className:"App"},a.a.createElement("section",null,a.a.createElement(X,null)),a.a.createElement("aside",null,a.a.createElement(q,null),a.a.createElement(Z,null),a.a.createElement("p",null),a.a.createElement(B,null),a.a.createElement(ee,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.fed7e343.chunk.js.map