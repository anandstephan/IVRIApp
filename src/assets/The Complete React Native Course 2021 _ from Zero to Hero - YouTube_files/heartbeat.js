(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var MQa=function(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return(0,g.gMa)("0",Math.max(0,2-b))+a},NQa=function(){return{G:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},U:[{G:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},OQa=function(){return{G:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},U:[{G:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},b6=function(a){"number"===typeof a?(this.date=PQa(a,0,1),a6(this,1)):g.Ma(a)?(this.date=PQa(a.getFullYear(),a.getMonth(),a.getDate()),a6(this,a.getDate())):(this.date=new Date(g.Qa()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),a6(this,a))},PQa=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},a6=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},c6=function(a,b){g.IN.call(this,a,{G:"div",
L:"ytp-reminder-menu",W:{role:"menu",tabindex:"-1"},U:[{G:"div",L:"ytp-reminder-menu-contents",U:[{G:"div",L:"ytp-reminder-menu-items"}]}]},100,!0);this.i=b;this.B=[];this.menuPopupRenderer=void 0;this.items=this.Fa("ytp-reminder-menu-items");this.hide()},RQa=function(a){var b=QQa(a),c=0,d={};
for(c=0;c<b.length;d={rB:d.rB},c++){var e=a.B[c];e||(e=new g.U({G:"div",L:"ytp-reminder-menu-item",W:{role:"menuitem",tabindex:"0"},U:[{G:"div",L:"ytp-reminder-menu-item-icon",va:"{{icon}}"},{G:"div",L:"ytp-reminder-menu-item-label",va:"{{text}}"}]}),d.rB=c,e.Qa("click",function(l){return function(){var m=l.rB;a.Db();m=QQa(a)[m];a.ea("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.Ea(a.items),a.B[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=NQa();break;case "NOTIFICATIONS_NONE":h=OQa();break;case "NOTIFICATIONS_ACTIVE":h=g.aL()}f=f.text?g.uA(f.text):"";e.update({icon:h,text:f})}for(;c<a.B.length;)a.B.pop().dispose();0===c?a.Db():a.fd(a.i)},QQa=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},d6=function(a){g.U.call(this,{G:"div",
U:[{G:"button",Ga:["ytp-offline-slate-button","ytp-button"],U:[{G:"div",L:"ytp-offline-slate-button-icon",va:"{{icon}}"},{G:"div",L:"ytp-offline-slate-button-text",va:"{{text}}"}]}]});this.I=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.i=null;(this.D=this.Fa("ytp-offline-slate-button"))&&this.T(this.D,"click",this.J);this.hide()},SQa=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=b.toggleButtonRenderer:
b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);e6(a)},e6=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.uA(b.toggledText):"";a.update({text:c,icon:f6(b.toggledIcon)})}else c=b.defaultText?g.uA(b.defaultText):"",a.update({text:c,icon:f6(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=TQa(a))?(c=b.text?g.uA(b.text):"",a.update({text:c,icon:f6(b.icon)}),a.show()):a.hide():a.hide()},VQa=function(a,b,c){a.C||(a.C=new g.$x(a.I.V().Tg));
var d={context:g.uv(a.C.config_||g.vv())};g.Iy()&&(d.context.clientScreenNonce=g.Iy());d.params=c;g.wv(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){UQa(a)},
onTimeout:function(){UQa(a)}})},UQa=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,e6(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,e6(a))},f6=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return NQa();case "NOTIFICATIONS_NONE":return OQa();case "NOTIFICATIONS_ACTIVE":return g.aL();default:return null}},TQa=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.r(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},g6=function(a){g.U.call(this,{G:"div",
L:"ytp-offline-slate",U:[{G:"div",L:"ytp-offline-slate-background"},{G:"div",L:"ytp-offline-slate-bar",U:[{G:"span",L:"ytp-offline-slate-icon",U:[{G:"svg",W:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},U:[{G:"path",W:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{G:"circle",W:{cx:"12",cy:"12",r:"3"}}]}]},{G:"span",L:"ytp-offline-slate-messages",U:[{G:"div",L:"ytp-offline-slate-main-text",W:{"aria-label":"{{label}}"},va:"{{mainText}}"},{G:"div",L:"ytp-offline-slate-subtitle-text",va:"{{subtitleText}}"}]},{G:"span",L:"ytp-offline-slate-buttons"}]},{G:"button",Ga:["ytp-offline-slate-close-button","ytp-button"],U:[g.WK()]},{G:"button",Ga:["ytp-offline-slate-open-button","ytp-button"],U:[g.VK()]},{G:"div",L:"ytp-offline-slate-trailer-chip",va:"Trailer"}]});var b=
this;this.api=a;this.i=this.u=null;this.background=this.Fa("ytp-offline-slate-background");this.B=this.Fa("ytp-offline-slate-bar");this.D=new g.M(function(){g.N(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.J=!1;this.C=new g.M(function(){g.N(b.element,"ytp-offline-slate-collapsed")},15E3);
g.J(this,this.C);g.J(this,this.D);this.countdownTimer=new g.M(this.qO,1E3,this);this.T(a,"presentingplayerstatechange",this.tO);this.T(a,"livestatedata",this.Pa);a=this.Fa("ytp-offline-slate-close-button");this.T(a,"click",function(){g.N(b.element,"ytp-offline-slate-collapsed")});
a=this.Fa("ytp-offline-slate-open-button");this.T(a,"click",function(){g.Mq(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Pa(a);a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().Ti;var c=8===this.api.getPresentingPlayerType();g.O(this.element,"ytp-offline-slate-premiere-trailer",a);g.O(this.element,"ytp-offline-slate-hide-background",c)},h6=function(a,b,c){var d,e,f,h;
if(b){var l=null!=b.subtitleText?g.uA(b.subtitleText):"";c=c?c:null!=b.mainText?g.uA(b.mainText):"";b=null!==(h=null===(f=null===(e=null===(d=b.mainText)||void 0===d?void 0:d.accessibility)||void 0===e?void 0:e.accessibilityData)||void 0===f?void 0:f.label)&&void 0!==h?h:c;a.update({mainText:c,subtitleText:l,label:b});g.O(a.element,"ytp-offline-slate-single-text-line",!l);g.O(a.B,"ytp-offline-slate-bar-hidden",!c&&!l)}},i6=function(a,b){var c=(0,g.Q)();
this.trigger=a;this.i=b;this.B=c},k6=function(a){g.ZM.call(this,a);
var b=this;this.K=!1;this.S=0;this.D=!1;this.u=new g.M(function(){var e=b.player.V(),f=b.getVideoData();if(j6(b))if(WQa(b)){var h;null!==(h=b.heartbeatParams)&&void 0!==h&&h.url&&(e=g.pi(b.heartbeatParams.url,{request_id:g.Ay()}),f.La&&(e=g.pi(e,{vvt:f.La}),f.mdxEnvironment&&(e=g.pi(e,{mdx_environment:f.mdxEnvironment}))),f.oauthToken&&(e=g.pi(e,{access_token:f.oauthToken})),XQa(b,f,e))}else YQa(b),ZQa(b,e,f)},0);
this.i=this.heartbeatParams=null;this.C=!1;this.J=new g.ge(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.Y=new g.$x(void 0);this.Z=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new b6).date.getTimezoneOffset();this.B=new g.wD(this);g.J(this,this.u);g.J(this,this.B);YQa(this);$Qa(this);this.B.T(a,"heartbeatparams",this.Bw);this.B.T(a,"presentingplayerstatechange",this.cQ);this.B.T(a,"videoplayerreset",this.dQ);this.B.T(a,g.pA("heartbeat"),this.onCueRangeEnter);this.C&&this.i&&
aRa(this,this.i);var c=new g.nA(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.nA(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.Ed([c,d]);bRa(this)},bRa=function(a){var b=a.getVideoData();
if(b.Kh){var c=b.botguardData;c&&(a=a.player.V().cspNonce,b=(b=b.Aa||"")?"c1b"in g.Fs(b):!1,g.Pta(c,a,b))}},YQa=function(a){var b=a.getVideoData();
if(b.Kh&&(b=new g.Vta(b),g.rM.Yd()||3<=a.sequenceNumber)){var c=null;if(b.videoData.Aa){var d=g.Wta(b);if(d){c={};var e={};d=d.split("&");d=g.r(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=cRa[Number(e.r1c)]);c.challenge=b.videoData.Aa}}a.attestationResponse=c||void 0}},WQa=function(a){var b=a.getVideoData();
if(!g.GG(a.getVideoData())||b.XG)return!1;if(b.useInnertubeDrmService()&&b.J){a="playready"===b.J.flavor&&b.N("html5_innertube_heartbeats_for_playready");var c="widevine"===b.J.flavor&&b.N("html5_innertube_heartbeats_for_widevine");b=g.rE(b.J)&&b.N("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},l6=function(a){if(WQa(a))return!!a.heartbeatParams;
var b=a.player.V(),c=a.getVideoData();return b.N("html5_heartbeat_wait_for_drm_killswitch")||!g.GG(a.getVideoData())||!c.useInnertubeDrmService()||c.Og||c.dD?!!c.heartbeatToken:!1},m6=function(a,b){if(!a.u.isActive()&&a.K){var c=a.getVideoData();
if(l6(a)||c.isLivePlayback){if(void 0===b)if(a.D){var d;b=a.C?7500:(null===(d=a.heartbeatParams)||void 0===d?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().jO||6E4}else b=1E3;a.u.start(b)}}},XQa=function(a,b,c){b.Yi&&(c=g.pi(c,{internalipoverride:b.Yi}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.zb&&(d.kpt=b.zb);c=g.pi(c,d);g.xt(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&j6(a)){a.J.reset();a.sequenceNumber++;e=e.responseText;var f=dRa(e);if(f){a.player.Oa("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(eRa))?"0"===h[1]?0:1:-1;fRa(a,f,e,h)}},
onError:function(e){j6(a)&&n6(a,!0,"net-"+e.status)},
onTimeout:function(){j6(a)&&n6(a,!0,"timeout")},
withCredentials:!0})},j6=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.T(a.player.vb(a.getPlayerType()),4)?!1:l6(a)||b.isLivePlayback?!0:(o6(a),!1)},ZQa=function(a,b,c){var d,e,f={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!==(d=a.ma)&&void 0!==d?d:c.heartbeatServerData};a.Z=a.attestationResponse;c.Kh&&(f.attestationResponse=a.Z);var h=g.WM(c),l=null!==(e=h.client)&&void 0!==e?e:{};l.utcOffsetMinutes=a.utcOffsetMinutes;f.context=h;f.cpn=c.clientPlaybackNonce;if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)l.timeZone=h;l={heartbeatChecks:[]};if(h=c.getPlayerResponse())c.heartbeatToken&&(f.heartbeatToken=c.heartbeatToken),
(h=h.playabilityStatus)&&(h=h.liveStreamability)&&h.liveStreamabilityRenderer&&l.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&l.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");g.yF(b)&&(l.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED"),h=gRa(a),null!==h&&(l.unpluggedParams={clientPlayerPositionUtcMillis:h}));f.heartbeatRequestParams=l;b.N("enable_linear_player_handling")&&c.isLivePlayback&&(b=gRa(a),null!==b&&(f.playbackState||(f.playbackState={}),f.playbackState.playbackPosition=
{utcTimeMillis:b}));b={timeout:3E4,onSuccess:function(m){var n;if(!a.u.isActive()&&j6(a)){var p=a.getVideoData(),q=p.Kh&&null==a.Z;p.Kh=!(null===(n=m.heartbeatAttestationConfig)||void 0===n||!n.requiresAttestation)||q;n=m.playabilityStatus;p=JSON.stringify(n)||"{}";m.authenticationMismatch&&a.player.Ba("authshear","");q=-1;var t=m.playabilityStatus;t&&(a.player.Oa("onHeartbeat",t),"OK"===t.status?q=m.stopHeartbeat?2:0:"UNPLAYABLE"===t.status?q=1:"LIVE_STREAM_OFFLINE"===t.status&&(q=0));a.sequenceNumber&&
-1===q||a.J.reset();a.sequenceNumber++;m.heartbeatServerData&&(a.ma=m.heartbeatServerData);fRa(a,n,p,q)}},
onError:function(m){j6(a)&&n6(a,!0,"net-"+m.status)},
onTimeout:function(){j6(a)&&n6(a,!0,"timeout")}};
c.mf()&&(b.SI="Bearer "+c.mf());g.wv(a.Y,"player/heartbeat",f,b)},fRa=function(a,b,c,d){-1===d?(b="decode "+g.Hc(g.Wa(c),3),n6(a,!1,b)):2===d?(o6(a),a.D=!0):(a.S=0,a.u.stop(),1===d?(a.D=!1,a.player.Hf("heartbeat.stop",a.pe(c)),g.Vv("heartbeatActionPlayerHalted",hRa(b))):(a.D=!0,c=0,a.C&&b&&(c=aRa(a,b),a.player.ea("livestatedata",b)),c?m6(a,c):m6(a)))},aRa=function(a,b){var c,d,e=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,f=!(!e||!e.switchStreamsImmediately),h=iRa(e),l=a.getVideoData(),
m=a.player.vb(a.getPlayerType()),n=m.Ac()&&!g.LG(l)&&!a.player.isAtLiveHead(a.getPlayerType());
if(g.zG(l)){var p=(null===(c=a.player.jd())||void 0===c?void 0:c.Ib())||{};p.status=b.status||"";p.dvr=""+ +n;p["switch"]=""+ +f;p.ended=""+ +!(!e||!e.displayEndscreen);a.player.Ba("heartbeat",g.LD(p))}if(n&&!f)return h;f=e&&e.streamTransitionEndpoint&&e.streamTransitionEndpoint.watchEndpoint;if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(e&&e.transitionTiming))a.getVideoData().mJ=f;else{if(n=f)(n=f&&f.videoId)?(a.player.Nj(n,void 0,void 0,!0,!0,f),a.Fz("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",
b),n=!0):n=!1;if(n)return h}if("OK"===b.status.toUpperCase()){f=e&&e.broadcastId;n=a.i&&a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer&&a.i.liveStreamability.liveStreamabilityRenderer.broadcastId;p=f!==n&&(null!=f||a.player.N("web_player_heartbeat_undefined_killswitch"));if(!l.hlsvp&&!l.eb||p)return e={video_id:l.videoId},l.tF&&(e.is_live_destination="1"),a.player.N("web_player_heartbeat_request_watch_next")||(e.disable_watch_next=!0,e.raw_watch_next_response=l.watchNextResponse),
e.autonav_state=l.autonavState,e.oauth_token=l.oauthToken,e.force_gvi=l.Ug,e.xi=l.xi,8===a.player.getPresentingPlayerType()&&a.player.qo(8),m=void 0,l.hlsvp||l.eb?p&&(m=new i6("broadcastIdChanged",n+","+f),a.Fz("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(f&&(m=new i6("formatsReceived",""+f)),a.Fz("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b)),a.player.loadVideoByPlayerVars(e,void 0,void 0,
void 0,m),h;a.player.Ld("heartbeat",a.getPlayerType())}e&&e.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.J=!0,a.Ab&&a.api.Zs()):g.bK(m)&&(l=(null===(d=a.player.jd())||void 0===d?void 0:d.Ib())||{},a.player.Ba("hbse",g.LD(l),!0),a.player.Zs(),a.player.Oa("onLiveMediaEnded",b)));return h},iRa=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},n6=function(a,b,c){if(!a.u.isActive()){a.u.stop();
a.S++;var d=a.getVideoData();if(d.EO||b&&!g.GG(a.getVideoData())&&!l6(a)&&d.isLivePlayback)var e=!1;else{var f;(null===(e=a.heartbeatParams)||void 0===e?0:e.Xw)?f=a.heartbeatParams.Xw:f=d.CO||5;e=a.S>=f}e?(b?(b="heartbeat.net",e={enforcedPolicyToHaltOnNetworkFailure:!0}):(b="heartbeat.servererror",e=hRa()),g.Vv("heartbeatActionPlayerHalted",e),(e=a.getVideoData())&&e.isLivePlayback?a.player.Hf(b,"Video playback interrupted. Please try again.",c):a.player.Hf(b,"Sorry, there was an error while licensing this video.",
c)):(m6(a,a.J.getValue()),g.he(a.J))}},hRa=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},o6=function(a){a.S=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},$Qa=function(a){var b,c=a.getVideoData(),d=a.player.V();
if(c.isLivePlayback)if(g.zE(d.C)){a.C=!0;a.K=!0;if(!g.mF(d)||g.yF(d))a.offlineSlate=new g6(a.player),g.J(a,a.offlineSlate),g.MM(a.player,a.offlineSlate.element,4);(c=c.getPlayerResponse())&&c.playabilityStatus&&(a.i=c.playabilityStatus);if("UNPLAYABLE"!==(null===(b=a.i)||void 0===b?void 0:b.status)||a.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.i?(c=iRa(a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer))?m6(a,c):m6(a,7500):m6(a,1E3)}else a.player.Hf("html5.unsupportedlive",
"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else!d.N("html5_release_post_live_heartbeat_killswitch")&&g.ub(c.ya,"heartbeat")&&a.player.Ld("heartbeat",a.getPlayerType())},gRa=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},dRa=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},cRa=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],p6={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),
SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),
SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
p6={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["am","pm"],DATEFORMATS:["EEEE, d MMMM y",
"d MMMM y","d MMM y","dd/MM/y"],TIMEFORMATS:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:3};g.k=b6.prototype;g.k.TJ=p6.FIRSTDAYOFWEEK;g.k.UJ=p6.FIRSTWEEKCUTOFFDAY;g.k.clone=function(){var a=new b6(this.date);a.TJ=this.TJ;a.UJ=this.UJ;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.add=function(a){if(a.u||a.i){var b=this.getMonth()+a.i+12*a.u,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(c=this.getFullYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),
this.date.setFullYear(a.getFullYear()+b),this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),a6(this,a.getDate()))};
g.k.toString=function(){return[this.getFullYear(),MQa(this.getMonth()+1),MQa(this.getDate())].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};g.w(c6,g.IN);c6.prototype.hide=function(){this.i&&this.i.removeAttribute("aria-haspopup");g.IN.prototype.hide.call(this)};
c6.prototype.show=function(){this.i&&this.i.setAttribute("aria-haspopup","true");g.IN.prototype.show.call(this)};
c6.prototype.xa=function(){g.pe(this.B);g.IN.prototype.xa.call(this)};g.w(d6,g.U);
d6.prototype.J=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;e6(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.i&&this.i.Ab)this.i.Db();else{var b=TQa(this);b&&this.B(b.serviceEndpoint||b.command);b=g.r(b&&b.command&&b.command.commandExecutorCommand&&b.command.commandExecutorCommand.commands||[]);for(var c=b.next();!c.done;c=b.next())if((c=c.value)&&c.openPopupAction&&
c.openPopupAction.popup&&c.openPopupAction.popup.menuPopupRenderer){a=c.openPopupAction.popup.menuPopupRenderer;break}this.i||(this.i=new c6(this.I,this.D),this.i.Ea(this.element),g.J(this,this.i),this.i.subscribe("reminderMenuItemClicked",this.B,this));b=this.i;b.menuPopupRenderer=a;RQa(b)}};
d6.prototype.B=function(a){if(a&&(a.addUpcomingEventReminderEndpoint||a.removeUpcomingEventReminderEndpoint)){if(a.addUpcomingEventReminderEndpoint){var b=a.addUpcomingEventReminderEndpoint;var c="notification/add_upcoming_event_reminder"}else a.removeUpcomingEventReminderEndpoint&&(b=a.removeUpcomingEventReminderEndpoint,c="notification/remove_upcoming_event_reminder");if(c&&b&&b.params)for(VQa(this,c,b.params),a=g.r(b.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&b.updateUpcomingEventReminderButtonStateCommand){this.u=
b.updateUpcomingEventReminderButtonStateCommand.state;e6(this);break}}};g.w(g6,g.U);g.k=g6.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Pa=function(a){var b,c,d=null===(c=null===(b=null===a||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate;if(d){this.u=a;d=d.liveStreamOfflineSlateRenderer;d.canShowCountdown?this.qO():h6(this,d);var e,f,h,l,m=null===(l=null===(h=null===(f=null===(e=null===a||void 0===a?void 0:a.liveStreamability)||void 0===e?void 0:e.liveStreamabilityRenderer)||void 0===f?void 0:f.offlineSlate)||void 0===h?void 0:h.liveStreamOfflineSlateRenderer)||
void 0===l?void 0:l.thumbnail;if(m){e=0;f=null;m=m.thumbnails;for(h=0;h<m.length;h++)m[h].width>e&&(e=m[h].width||0,f=m[h].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";d.actionButtons||d.reminderButton?(this.i||(this.i=new d6(this.api),this.i.Ea(this.Fa("ytp-offline-slate-buttons")),g.J(this,this.i)),SQa(this.i,d.actionButtons&&d.actionButtons[0],d.reminderButton)):this.i&&SQa(this.i,null,null);this.u=a}else this.u=null;this.tO()};
g.k.tO=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.vb(),d=this.getVideoData();b=d.isLivePlayback&&(g.bK(c)||g.T(c,2)||g.T(c,64));var e=2===d.autonavState&&g.T(c,2);c=c.Ac()&&!g.LG(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.Ab?(null===a||void 0===a?0:g.eI(a,2))&&!this.getVideoData().Ti&&(g.Mq(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.Mq(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.ea("offlineslatestatechange"),
this.J&&this.api.Zs()):this.Ab&&(this.hide(),this.api.ea("offlineslatestatechange"))};
g.k.qO=function(){var a,b,c,d,e=null===(d=null===(c=null===(b=null===(a=this.u)||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate)||void 0===d?void 0:d.liveStreamOfflineSlateRenderer;if(e){var f=Math.floor(g.Qa()/1E3),h=e.canShowCountdown&&Number(e.scheduledStartTime);!h||h<=f?(h6(this,e),this.countdownTimer.stop()):(f=g.ML(h-f),h6(this,e,f),g.Dq(this.countdownTimer))}};
g.k.xa=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.U.prototype.xa.call(this)};i6.prototype.u=function(a){return this.trigger&&a.trigger?this.trigger===a.trigger&&this.i===a.i:!1};
i6.prototype.isExpired=function(){return 6E4<(0,g.Q)()-this.B};
i6.prototype.toString=function(){return"heartbeat:"+this.trigger+":"+this.i};g.w(k6,g.ZM);g.k=k6.prototype;g.k.xa=function(){o6(this);this.player.Ve("heartbeat");g.ZM.prototype.xa.call(this)};
g.k.onCueRangeEnter=function(){this.K=!0;m6(this,2E3)};
g.k.Bw=function(a){this.heartbeatParams=a;m6(this,2E3)};
g.k.cQ=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null===(b=this.i)||void 0===b?void 0:b.status)&&!this.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.T(a.state,2)||g.T(a.state,64)?(o6(this),this.C&&(this.K=!0,m6(this,1E3))):(g.T(a.state,1)||g.T(a.state,8))&&m6(this,2E3))};
g.k.dQ=function(){3!==this.player.getPresentingPlayerType()&&m6(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.Ji=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.Fz=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.Vv("heartbeatActionPlayerTransitioned",a)};
g.k.pe=function(a){var b="LICENSE",c=dRa(a);if(c)return c.reason||g.CN[b]||"";(a=a.match(eRa))&&(a=Number(a[1]))&&(b=g.Lqa(a));return g.CN[b]||""};
g.k.bw=function(){return!!this.offlineSlate&&this.offlineSlate.Ab};
var eRa=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.YM("heartbeat",k6);})(_yt_player);
