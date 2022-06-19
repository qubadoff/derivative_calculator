function clearArea(Ziel) {
  var input = document.getElementById(Ziel);
  input.value = "";
}
function caretEnd(Ziel) {
	var input = document.getElementById(Ziel);
	var len = input.value.length;
    input.setSelectionRange(len, len);
}
function caretPos1(Ziel) {
	var input = document.getElementById(Ziel);
    input.setSelectionRange(0, 0);
}
function insert(aTag, eTag, Ziel) {
  var input = document.getElementById(Ziel);
  input.focus();
  /* für Internet Explorer */
  if(typeof document.selection != 'undefined') {
    /* Einfügen des Formatierungscodes */
    var range = document.selection.createRange();
    var insText = range.text;
    range.text = aTag + insText + eTag;
    /* Anpassen der Cursorposition */
    range = document.selection.createRange();
    if (insText.length == 0) {
      range.move('character', -eTag.length);
    } else {
      range.moveStart('character', aTag.length + insText.length + eTag.length);      
    }
    range.select();
  }
  /* für neuere auf Gecko basierende Browser */
  else if(typeof input.selectionStart != 'undefined')
  {
    /* Einfügen des Formatierungscodes */
    var start = input.selectionStart;
    var end = input.selectionEnd;
    var insText = input.value.substring(start, end);
    input.value = input.value.substr(0, start) + aTag + insText + eTag + input.value.substr(end);
    /* Anpassen der Cursorposition */
    var pos;
    if (insText.length == 0) {
      pos = start + aTag.length;
    } else {
      pos = start + aTag.length + insText.length + eTag.length;
    }
    input.selectionStart = pos;
    input.selectionEnd = pos;
  }
  /* für die übrigen Browser */
  else
  {
    /* Abfrage der Einfügeposition */
    var pos;
    var re = new RegExp('^[0-9]{0,3}$');
    while(!re.test(pos)) {
      pos = prompt("Einfügen an Position (0.." + input.value.length + "):", "0");
    }
    if(pos > input.value.length) {
      pos = input.value.length;
    }
    /* Einfügen des Formatierungscodes */
    var insText = prompt("Bitte geben Sie den zu formatierenden Text ein:");
    input.value = input.value.substr(0, pos) + aTag + insText + eTag + input.value.substr(pos);
  }
}
function selectFarbe() {
	Gender= parseInt(document.getElementById("SelectColor1").value);
	G1();
}
function selectAlter() {
	Age= parseInt(document.getElementById("SelectAlter1").value);
	G1();
}
function Ausblenden() {
	var text = document.getElementById ("MasterRechts");
	var symbol = document.getElementById ("p_Ausblenden"); 
	if (text.style.display == "") {
		var pstyle = window.getComputedStyle(MasterRechts); 
		text.style.display= pstyle.display;
	}
	if (text.style.display != "block") {
		text.style.display= "block"; 
		symbol.style.color= "black";
	} else {
		text.style.display= "none";
		symbol.style.color= "red";
	}
}
function aktivieren(ele) {
	ele.style.background= "#decdcd";
} 
function deaktivieren(ele) {
	ele.style.background= "transparent";
}
function insRechner(Tag, sel) {
	if (sel==0) {
		clearArea('odeinputf');
	} else if (sel==1) {
		caretEnd('odeinputf');
	} else if (sel==2) {
		caretPos1('odeinputf');
	} else {		
		insert(Tag, '', 'odeinputf');
	}
}
/*
 CookieConsent v2.4.6
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function(){function na(za){function oa(a,b){return a.classList?a.classList.contains(b):!!a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))}function ha(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," ")}function C(a,b){a.classList?a.classList.add(b):oa(a,b)||(a.className+=" "+b)}function Z(a){if("object"===typeof a){var b=[],c=0;for(b[c++]in a);return b}}function I(a,b,c,d){a.addEventListener?d?a.addEventListener(b,c,{passive:!0}):a.addEventListener(b,
c,!1):a.attachEvent("on"+b,c)}function ca(a,b,c){if("one"===b)var d=(d=document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))?c?d.pop():a:"";else if("all"===b)for(a=document.cookie.split(/;\s*/),d=[],b=0;b<a.length;b++)d.push(a[b].split("=")[0]);return d}function pa(){if(qa){var a=document.querySelectorAll("script[data-cookiecategory]"),b=ra,c=JSON.parse(J).level||[],d=function(f,g){if(g<f.length){var k=f[g],l=k.getAttribute("data-cookiecategory");if(-1<M(c,l)){k.type="text/javascript";k.removeAttribute("data-cookiecategory");
l=k.getAttribute("data-src");var h=e("script");h.textContent=k.innerHTML;(function(m,p){for(var w=p.attributes,B=w.length,N=0;N<B;N++)p=w[N],m.setAttribute(p.nodeName,p.nodeValue)})(h,k);l?h.src=l:l=k.src;l&&(b?h.readyState?h.onreadystatechange=function(){if("loaded"===h.readyState||"complete"===h.readyState)h.onreadystatechange=null,d(f,++g)}:h.onload=function(){h.onload=null;d(f,++g)}:l=!1);k.parentNode.replaceChild(h,k);if(l)return}d(f,++g)}};d(a,0)}}function Aa(a){function b(d,f,g,k,l,h,m){h=
h&&h.split(" ")||[];if(-1<M(f,l)&&(C(d,l),-1<M(g,h[0])))for(f=0;f<h.length;f++)C(d,h[f]);-1<M(k,m)&&C(d,m)}if("object"===typeof a){var c=a.consent_modal;a=a.settings_modal;Q&&c&&b(z,["box","bar","cloud"],["top","bottom"],["zoom","slide"],c.layout,c.position,c.transition);a&&b(D,["bar"],["left","right"],["zoom","slide"],a.layout,a.position,a.transition)}}function Ba(){var a=!1,b=!1;I(document,"keydown",function(c){c=c||window.event;"Tab"===c.key&&(t&&(c.shiftKey?document.activeElement===t[0]&&(t[1].focus(),
c.preventDefault()):document.activeElement===t[1]&&(t[0].focus(),c.preventDefault()),b||aa||(b=!0,!a&&c.preventDefault(),c.shiftKey?t[3]?t[2]?t[2].focus():t[0].focus():t[1].focus():t[3]?t[3].focus():t[0].focus())),!b&&(a=!0))});document.contains&&I(L,"click",function(c){c=c||window.event;ia?O.contains(c.target)?aa=!0:(q.hideSettings(0),aa=!1):ba&&z.contains(c.target)&&(aa=!0)},!0)}function e(a){var b=document.createElement(a);"button"===a&&b.setAttribute("type",a);return b}function M(a,b){for(var c=
a.length,d=0;d<c;d++)if(a[d]==b)return d;return-1}function Ca(a,b){if("string"!==typeof a||""==a||document.getElementById("cc--style"))b();else{var c=e("style");c.id="cc--style";var d=new XMLHttpRequest;d.onreadystatechange=function(){4==this.readyState&&200==this.status&&(c.setAttribute("type","text/css"),c.styleSheet?c.styleSheet.cssText=this.responseText:c.appendChild(document.createTextNode(this.responseText)),document.getElementsByTagName("head")[0].appendChild(c),b())};d.open("GET",a);d.send()}}
function da(a,b){var c=document.querySelectorAll(".c-tgl")||[],d="",f=[],g=!1;if(0<c.length){switch(b){case -1:for(b=0;b<c.length;b++)c[b].checked?(d+='"'+c[b].value+'",',E[b]||(f.push(c[b].value),E[b]=!0)):E[b]&&(f.push(c[b].value),E[b]=!1);break;case 0:for(b=0;b<c.length;b++)c[b].disabled?(d+='"'+c[b].value+'",',E[b]=!0):(c[b].checked=!1,E[b]&&(f.push(c[b].value),E[b]=!1));break;case 1:for(b=0;b<c.length;b++)c[b].checked=!0,d+='"'+c[b].value+'",',E[b]||f.push(c[b].value),E[b]=!0}d=d.slice(0,-1);
if(a.autoclear_cookies&&R&&0<f.length){c=a.languages[F].settings_modal.blocks;b=c.length;var k=-1,l=ca("","all"),h=[S,"."+S];if("www."===S.slice(0,4)){var m=S.substr(4);h.push(m);h.push("."+m)}for(m=0;m<b;m++){var p=c[m];if(p.hasOwnProperty("toggle")&&!E[++k]&&p.hasOwnProperty("cookie_table")&&-1<M(f,p.toggle.value)){var w=p.cookie_table,B=Z(a.languages[F].settings_modal.cookie_table_headers[0])[0],N=w.length;"on_disable"===p.toggle.reload&&(g=!0);for(var K=0;K<N;K++){var n=w[K],G=[],u=n[B],v=n.path||
!1;if(n.is_regex)for(n=0;n<l.length;n++)l[n].match(u)&&G.push(l[n]);else u=M(l,u),-1<u&&G.push(l[u]);if(0<G.length){u=h;v=v?v:"/";for(n=0;n<G.length;n++)for(var r=0;r<u.length;r++)document.cookie=G[n]+"=; Path="+v+"; Domain="+u[r]+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";"on_clear"===p.toggle.reload&&(g=!0)}}}}}}J='{"level": ['+d+"]}";if(!R||0<f.length)d=ea,c=J,b=new Date,b.setTime(b.getTime()+864E5*sa),d=d+"="+(c||"")+("; expires="+b.toUTCString())+"; Path="+ta+";",d+=" SameSite="+ua+";",-1<location.hostname.indexOf(".")&&
(d+=" Domain="+S+";"),"https:"===location.protocol&&(d+=" Secure;"),document.cookie=d;pa();if("function"===typeof a.onAccept&&!R)return R=!0,a.onAccept(JSON.parse(J));if("function"===typeof a.onChange&&0<f.length)a.onChange(JSON.parse(J));g&&window.location.reload()}function Da(a,b){L=e("div");L.id="cc--main";L.style.position="fixed";L.style.zIndex="1000000";L.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e';
var c=L.children[0],d=F,f="string"===typeof T.textContent?"textContent":"innerText";if(!a){z=e("div");var g=e("div"),k=e("div"),l=e("div"),h=e("div"),m=e("div"),p=e("button"),w=e("button"),B=e("div");z.id="cm";g.id="c-inr";k.id="c-inr-i";l.id="c-ttl";h.id="c-txt";m.id="c-bns";p.id="c-p-bn";w.id="c-s-bn";B.id="cm-ov";p.className="c-bn";w.className="c-bn c_link";l.setAttribute("role","heading");l.setAttribute("aria-level","2");z.setAttribute("role","dialog");z.setAttribute("aria-modal","true");z.setAttribute("aria-hidden",
"false");z.setAttribute("aria-labelledby","c-ttl");z.setAttribute("aria-describedby","c-txt");z.style.visibility=B.style.visibility="hidden";B.style.opacity=0;l.insertAdjacentHTML("beforeend",b.languages[d].consent_modal.title);h.insertAdjacentHTML("beforeend",b.languages[d].consent_modal.description);p[f]=b.languages[d].consent_modal.primary_btn.text;w[f]=b.languages[d].consent_modal.secondary_btn.text;var N=-1;"accept_all"==b.languages[d].consent_modal.primary_btn.role&&(N=1);I(p,"click",function(){q.hide();
da(b,N)});"accept_necessary"==b.languages[d].consent_modal.secondary_btn.role?I(w,"click",function(){q.hide();da(b,0)}):I(w,"click",function(){q.showSettings(0)});k.appendChild(l);k.appendChild(h);m.appendChild(p);m.appendChild(w);g.appendChild(k);g.appendChild(m);z.appendChild(g);c.appendChild(z);c.appendChild(B)}D=e("div");g=e("div");k=e("div");l=e("div");O=e("div");h=e("div");m=e("div");var K=e("button");p=e("div");w=e("div");B=e("div");D.id="s-cnt";g.id="c-vln";l.id="c-s-in";k.id="cs";h.id="s-ttl";
O.id="s-inr";m.id="s-hdr";w.id="s-bl";K.id="s-c-bn";B.id="cs-ov";p.id="s-c-bnc";K.className="c-bn";K.setAttribute("aria-label",b.languages[d].settings_modal.close_btn_label||"Close");D.setAttribute("role","dialog");D.setAttribute("aria-modal","true");D.setAttribute("aria-hidden","true");D.setAttribute("aria-labelledby","s-ttl");h.setAttribute("role","heading");D.style.visibility=B.style.visibility="hidden";B.style.opacity=0;p.appendChild(K);I(g,"keydown",function(U){U=U||window.event;27==U.keyCode&&
q.hideSettings(0)},!0);I(K,"click",function(){q.hideSettings(0)});d=b.languages[F].settings_modal.blocks;K=d.length;h.insertAdjacentHTML("beforeend",b.languages[F].settings_modal.title);for(var n=0;n<K;++n){var G=e("div"),u=e("div"),v=e("div"),r=e("div");G.className="c-bl";u.className="desc";v.className="p";r.className="title";v.insertAdjacentHTML("beforeend",d[n].description);if("undefined"!==typeof d[n].toggle){var x="c-ac-"+n,P=e("button"),H=e("label"),y=e("input"),A=e("span"),V=e("span"),W=e("span"),
X=e("span");P.className="b-tl";H.className="b-tg";y.className="c-tgl";W.className="on-i";X.className="off-i";A.className="c-tg";V.className="t-lb";P.setAttribute("aria-expanded","false");P.setAttribute("aria-controls",x);y.type="checkbox";A.setAttribute("aria-hidden","true");var va=d[n].toggle.value;y.value=va;V[f]=d[n].title;P.insertAdjacentHTML("beforeend",d[n].title);r.appendChild(P);A.appendChild(W);A.appendChild(X);a?-1<M(JSON.parse(J).level,va)?(y.checked=!0,E.push(!0)):E.push(!1):d[n].toggle.enabled&&
(y.checked=!0);d[n].toggle.readonly&&(y.disabled=!0,y.setAttribute("aria-readonly","true"),C(A,"c-ro"));C(u,"b-acc");C(r,"b-bn");C(G,"b-ex");u.id=x;u.setAttribute("aria-hidden","true");H.appendChild(y);H.appendChild(A);H.appendChild(V);r.appendChild(H);(function(U,ja,wa){I(P,"click",function(){oa(ja,"act")?(ha(ja,"act"),wa.setAttribute("aria-expanded","false"),U.setAttribute("aria-hidden","true")):(C(ja,"act"),wa.setAttribute("aria-expanded","true"),U.setAttribute("aria-hidden","false"))},!1)})(u,
G,P)}else x=e("div"),x.className="b-tl",x.setAttribute("role","heading"),x.setAttribute("aria-level","3"),x.insertAdjacentHTML("beforeend",d[n].title),r.appendChild(x);G.appendChild(r);u.appendChild(v);if(!0!==b.remove_cookie_tables&&"undefined"!==typeof d[n].cookie_table){H=document.createDocumentFragment();v=b.languages[F].settings_modal.cookie_table_headers;for(y=0;y<v.length;++y)A=e("th"),r=v[y],A.setAttribute("scope","col"),r&&(x=r&&Z(r)[0],A[f]=v[y][x],H.appendChild(A));r=e("tr");r.appendChild(H);
x=e("thead");x.appendChild(r);H=e("table");H.appendChild(x);y=document.createDocumentFragment();for(A=0;A<d[n].cookie_table.length;A++){V=e("tr");for(W=0;W<v.length;++W)if(r=v[W])x=Z(r)[0],X=e("td"),X.insertAdjacentHTML("beforeend",d[n].cookie_table[A][x]),X.setAttribute("data-column",r[x]),V.appendChild(X);y.appendChild(V)}v=e("tbody");v.appendChild(y);H.appendChild(v);u.appendChild(H)}G.appendChild(u);w.appendChild(G)}a=e("div");f=e("button");d=e("button");a.id="s-bns";f.id="s-sv-bn";d.id="s-all-bn";
f.className="c-bn";d.className="c-bn";f.insertAdjacentHTML("beforeend",b.languages[F].settings_modal.save_settings_btn);d.insertAdjacentHTML("beforeend",b.languages[F].settings_modal.accept_all_btn);a.appendChild(d);a.appendChild(f);I(f,"click",function(){q.hideSettings();q.hide();da(b,-1)});I(d,"click",function(){q.hideSettings();q.hide();da(b,1)});m.appendChild(h);m.appendChild(p);O.appendChild(m);O.appendChild(w);O.appendChild(a);l.appendChild(O);k.appendChild(l);g.appendChild(k);D.appendChild(g);
c.appendChild(D);c.appendChild(B);(za||document.body).appendChild(L)}function Ea(){function a(c,d){var f=!1,g=!1;try{for(var k=c.querySelectorAll(b.join(':not([tabindex="-1"]), ')),l,h=k.length,m=0;m<h;)l=k[m].getAttribute("data-focus"),g||"1"!==l?"0"===l&&(f=k[m],g||"0"===k[m+1].getAttribute("data-focus")||(g=k[m+1])):g=k[m],m++}catch(p){return c.querySelectorAll(b.join(", "))}d[0]=k[0];d[1]=k[k.length-1];d[2]=f;d[3]=g}var b=["[href]","button","input","details",'[tabindex="0"]'];a(O,Y);Q&&a(z,ka)}
function xa(a,b){if(b.hasOwnProperty(a))return a;if(0<Z(b).length)return b.hasOwnProperty(F)?F:Z(b)[0]}function Fa(){for(var a=document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'),b=0;b<a.length;b++)a[b].setAttribute("aria-haspopup","dialog"),I(a[b],"click",function(c){q.showSettings(0);c.preventDefault?c.preventDefault():c.returnValue=!1})}function Ga(a){"number"===typeof a.cookie_expiration&&(sa=a.cookie_expiration);"boolean"===typeof a.autorun&&(ya=a.autorun);"string"===
typeof a.cookie_domain&&(S=a.cookie_domain);"string"===typeof a.cookie_same_site&&(ua=a.cookie_same_site);"string"===typeof a.cookie_path&&(ta=a.cookie_path);"string"===typeof a.cookie_name&&(ea=a.cookie_name);qa=!0===a.page_scripts;ra=!1!==a.page_scripts_order;if(!0===a.auto_language){var b=navigator.language||navigator.browserLanguage;2<b.length&&(b=b[0]+b[1]);F=xa(b.toLowerCase(),a.languages)}else"string"===typeof a.current_lang&&(F=xa(a.current_lang,a.languages));!0===a.force_consent&&C(T,"force--consent")}
var F="en",ya=!0,ea="cc_cookie",sa=182,S=location.hostname,ta="/",ua="Lax",qa,ra,q={},J,Q=!1,R=!1,ba=!1,ia=!1,aa=!1,t,fa,la,ka=[],Y=[],E=[],T=document.documentElement,L,z,D,O;q.allowedCategory=function(a){return-1<M(JSON.parse(ca(ea,"one",!0)||"{}").level||[],a)};q.run=function(a){if(!L&&(Ga(a),J=ca(ea,"one",!0),Q=""==J,Da(!Q,a),Ca(a.theme_css,function(){Ea();Aa(a.gui_options);Fa();!J&&ya&&q.show(a.delay||0);setTimeout(function(){C(L,"c--anim")},30);setTimeout(function(){Ba()},100)}),J&&(R=!0),R&&
(pa(),"function"===typeof a.onAccept)))a.onAccept(JSON.parse(J||"{}"))};q.showSettings=function(a){setTimeout(function(){C(T,"show--settings");D.setAttribute("aria-hidden","false");ia=!0;ba?la=document.activeElement:fa=document.activeElement;setTimeout(function(){0!==Y.length&&(Y[3]?Y[3].focus():Y[0].focus(),t=Y)},100)},0<a?a:0)};q.loadScript=function(a,b,c){var d="function"===typeof b;if(document.querySelector('script[src="'+a+'"]'))d&&b();else{var f=e("script");if(c&&0<c.length)for(var g=0;g<c.length;++g)c[g]&&
f.setAttribute(c[g].name,c[g].value);d&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=null,b()}:f.onload=b);f.src=a;(document.head?document.head:document.getElementsByTagName("head")[0]).appendChild(f)}};q.show=function(a){Q&&setTimeout(function(){C(T,"show--consent");z.setAttribute("aria-hidden","false");ba=!0;fa=document.activeElement;t=ka},0<a?a:0)};q.hide=function(){Q&&(ha(T,"show--consent"),z.setAttribute("aria-hidden",
"true"),ba=!1,fa.focus(),t=null)};q.hideSettings=function(){ha(T,"show--settings");ia=!1;D.setAttribute("aria-hidden","true");ba?(la&&la.focus(),t=ka):(fa.focus(),t=null);aa=!1};q.validCookie=function(a){return""!=ca(a,"one",!0)};return na=window[ma]=void 0,q}var ma="initCookieConsent";"function"!==typeof window[ma]&&(window[ma]=na)})();

	var cookieconsent = initCookieConsent();
	
    cookieconsent.run({
		force_consent: true,
		auto_language: true,

		languages: {
            en : {
                consent_modal : {
                    title :  "The page uses cookies",
                    description :  'The site uses cookies for the provision of advertisements. We and our partners process and transmit personal data (e.g. identifiers and browser data) for the purposes described below. For this purpose, cookies and other technologies are used for storage and access on your device. We do this to improve and finance our services. In this context, data may be processed outside the EEA and usage profiles may also be formed and enriched with data from other offers. By clicking "Accept All", you voluntarily consent (revocable at any time) to these data processing operations. This also includes your consent to data processing outside the EEA (Art. 49 (1) (a) DSGVO, third country transfer), where the high European level of data protection does not exist. Under "Reject" you can change your information or refuse data processing.',
                    primary_btn: {
                        text: 'Accept all',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Reject',
                        role : 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Cookie settings',
                    save_settings_btn : "Saving the settings",
                    accept_all_btn : "Accept all",
                    close_btn_label: "Close",   
                    blocks : [
                        {
                            title : "Cookie use",
                            description: 'The provision of the site is financed by advertising revenue. The ad providers set cookies for the selection of topic-specific or personalized ads.'
                        },{
                            title : "Necessary cookies",
                            description: 'None are used',
                            toggle : {
                                value : 'necessary',
                                enabled : false,
                                readonly: true
                            }
                        },{
                            title : "Non Personalized Ads",
                            description: 'Non-personalized themed Adsense ads',
                            toggle : {
                                value : 'adsense',
                                enabled : false,
                                readonly: false
                            }
                        },{
                            title : "Personalized ads",
                            description: 'Personalized Adsense ads',
                            toggle : {
                                value : 'adsense-personalisiert',
                                enabled : true,
                                readonly: false
                            }
                        },
                    ]
                }
            },
            it : {
                consent_modal : {
                    title :  "La pagina utilizza i cookie",
                    description :  'Il sito utilizza i cookie per la fornitura di pubblicità. Noi e i nostri partner elaboriamo e trasmettiamo dati personali (ad esempio identificatori e dati del browser) per gli scopi descritti di seguito. A tal fine, vengono utilizzati cookie e altre tecnologie per la memorizzazione e l\'accesso sul vostro dispositivo. Lo facciamo per migliorare e finanziare i nostri servizi. In questo contesto, i dati possono essere elaborati al di fuori del SEE e i profili di utilizzo possono anche essere formati e arricchiti con i dati di altre offerte. Cliccando su "Accetta tutto", acconsenti volontariamente (revocabile in qualsiasi momento) a queste operazioni di trattamento dei dati. Ciò include anche il vostro consenso al trattamento dei dati al di fuori del SEE (art. 49 (1) (a) DSGVO, trasferimento da un paese terzo), dove non esiste l\'elevato livello europeo di protezione dei dati. Alla voce "Rifiuta" potete modificare le vostre informazioni o rifiutare il trattamento dei dati.',
                    primary_btn: {
                        text: 'Accetta tutti',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Rifiuta',
                        role : 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Impostazioni dei cookie',
                    save_settings_btn : "Salvare le impostazioni",
                    accept_all_btn : "Accetta tutti",
                    close_btn_label: "Chiudere",   
                    blocks : [
                        {
                            titolo: "Uso dei cookie",
                            descrizione: 'La fornitura del sito è finanziata dalle entrate pubblicitarie. I fornitori di pubblicità impostano i cookie per la selezione di annunci specifici per argomento o personalizzati.'
                        },{
                            titolo: "Cookie necessari",
                            descrizione: "Non ne vengono utilizzati",
                            toggle : {
                                value : 'necessary',
                                enabled : false,
                                readonly: true
                            }
                        },{
                            titolo: "Annunci non personalizzati",
                            descrizione: "Annunci Adsense a tema non personalizzati",
                            toggle : {
                                value : 'adsense',
                                enabled : false,
                                readonly: false
                            }
                        },{
                            titolo: 'Annunci personalizzati',
                            descrizione: "Annunci Adsense personalizzati",
                            toggle : {
                                value : 'adsense-personalisiert',
                                enabled : true,
                                readonly: false
                            }
                        },
                    ]
                }
            },
            fr : {
                consent_modal : {
                    title :  "La page utilise des cookies",
                    description :  'Le site utilise des cookies pour la fourniture de publicités. Nous et nos partenaires traitons et transmettons des données personnelles (par exemple, des identifiants et des données de navigation) aux fins décrites ci-dessous. À cette fin, des cookies et d\'autres technologies sont utilisés pour le stockage et l\'accès sur votre appareil. Nous procédons ainsi pour améliorer et financer nos services. Dans ce contexte, les données peuvent être traitées en dehors de l\'EEE et les profils d\'utilisation peuvent également être formés et enrichis avec des données provenant d\'autres offres. En cliquant sur " Tout accepter ", vous consentez volontairement (révocable à tout moment) à ces traitements de données. Cela inclut également votre consentement au traitement des données en dehors de l\'EEE (art. 49 (1) (a) DSGVO, transfert vers un pays tiers), où le haut niveau européen de protection des données n\'existe pas. Sous "Rejeter", vous pouvez modifier vos informations ou refuser le traitement des données.',
                    primary_btn: {
                        text: 'Accept all',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Reject',
                        role : 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Paramètres des cookies',
                    save_settings_btn : "Sauvegarder les paramètres",
                    accept_all_btn : "Accepter tous",
                    close_btn_label: "Fermer",   
                    blocks : [
                        {
                            title : "Utilisation des cookies",
                            description: 'La mise à disposition du site est financée par les recettes publicitaires. Les fournisseurs d\'annonces définissent des cookies pour la sélection d\'annonces spécifiques à un sujet ou personnalisées.'
                        },{
                            title : "Cookies nécessaires",
                            description: 'None are used',
                            toggle : {
                                value : 'necessary',
                                enabled : false,
                                readonly: true
                            }
                        },{
                            title : "Annonces non personnalisées",
                            description: 'Non personnalisées Adsense ads',
                            toggle : {
                                value : 'adsense',
                                enabled : false,
                                readonly: false
                            }
                        },{
                            title : "Annonces personnalisées",
                            description: 'Personnalisées Adsense ads',
                            toggle : {
                                value : 'adsense-personalisiert',
                                enabled : true,
                                readonly: false
                            }
                        },
                    ]
                }
            },
            de : {
                consent_modal : {
                    title :  "Die Seite verwendet Cookies",
                    description :  'Die Seite verwendet Cookies für die Bereistellung von Werbeanzeigen. Wir und unsere Partner verarbeiten und übermitteln personenbezogene Daten (z.B. Identifier und Browserdaten) für die nachfolgend beschriebenen Zwecke. Hierzu werden Cookies und andere Technologien zur Speicherung und zum Zugriff auf Ihrem Gerät eingesetzt. Wir tun dies, um unser Angebot zu verbessern und zu finanzieren. In diesem Zusammenhang können Daten außerhalb des EWR verarbeitet werden und auch Nutzungsprofile gebildet und mit Daten von anderen Angeboten angereichert werden. Indem Sie „Alle Akzeptieren“ klicken, stimmen Sie (jederzeit widerruflich) diesen Datenverarbeitungen freiwillig zu. Dies umfasst auch Ihre Einwilligung zur Datenverarbeitung außerhalb des EWR (Art. 49 (1) (a) DSGVO, Drittlandtransfer), wo das hohe europäische Datenschutzniveau nicht besteht. Unter „Ablehnen“ können Sie Ihre Angaben ändern oder Datenverarbeitungen ablehnen.',
                    primary_btn: {
                        text: 'Alle Akzeptieren',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Ablehnen',
                        role : 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Cookie-Einstellungen',
                    save_settings_btn : "Speichern der Einstellungen",
                    accept_all_btn : "Alle akzeptieren",
                    close_btn_label: "Schließen",   
                    blocks : [
                        {
                            title : "Cookie-Verwendung",
                            description: 'Die Bereitstellung der Seite wird durch Werbeeinnahmen finanziert. Die Anzeigenanbieter setzen Cookies für die Auswahl thematischer oder personalisierter Anzeigen.'
                        },{
                            title : "Notwendige Cookies",
                            description: 'Es werden keine verwendet',
                            toggle : {
                                value : 'necessary',
                                enabled : false,
                                readonly: true
                            }
                        },{
                            title : "Nicht Personalisierte Werbeanzeigen",
                            description: 'Nicht personalisierte thematische Adsense Werbeanzeigen',
                            toggle : {
                                value : 'adsense',
                                enabled : false,
                                readonly: false
                            }
                        },{
                            title : "Personalisierte Werbeanzeigen",
                            description: 'Personalisierte Adsense Werbeanzeigen',
                            toggle : {
                                value : 'adsense-personalisiert',
                                enabled : true,
                                readonly: false
                            }
                        },
                    ]
                }
            },
            es : {
                consent_modal : {
                    title :  "El sitio utiliza cookies",
                    description :  'El sitio web utiliza cookies para servir anuncios. Nosotros y nuestros socios procesamos y transmitimos datos personales (por ejemplo, identificadores y datos de navegación) para los fines descritos a continuación. Para ello, se utilizan cookies y otras tecnologías para el almacenamiento y el acceso en su dispositivo. Lo hacemos para mejorar y financiar nuestros servicios. En este contexto, los datos pueden ser procesados fuera del EEE y los perfiles de uso también pueden ser construidos y enriquecidos con datos de otras ofertas. Al hacer clic en "Aceptar todo", usted da su consentimiento voluntario (revocable en cualquier momento) a estas operaciones de tratamiento de datos. Esto incluye también su consentimiento para el tratamiento de datos fuera del EEE (art. 49 (1) (a) DSGVO, transferencia a terceros países), donde no existe el alto nivel europeo de protección de datos. En "Declinación" puede modificar su información o rechazar el tratamiento de datos.',
                    primary_btn: {
                        text: 'Aceptar todo',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Declinación',
                        role : 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : 'Configuración de las cookies',
                    save_settings_btn : "Guardar la configuración",
                    accept_all_btn : "Todos aceptan",
                    close_btn_label: "Cerrar",   
                    blocks : [
                        {
                            title : "Uso de cookies",
                            description: 'La prestación del sitio se financia con los ingresos por publicidad. Los proveedores de anuncios establecen cookies para la selección de anuncios específicos por temas o personalizados.'
                        },{
                            title : "Cookies necesarias",
                            description: 'No se utiliza ninguno',
                            toggle : {
                                value : 'necessary',
                                enabled : false,
                                readonly: true
                            }
                        },{
                            title : "Anuncios no personalizados",
                            description: 'Anuncios temáticos no personalizados de Adsense',
                            toggle : {
                                value : 'adsense',
                                enabled : false,
                                readonly: false
                            }
                        },{
                            title : "Anuncios personalizados",
                            description: 'Anuncios personalizados de Adsense',
                            toggle : {
                                value : 'adsense-personalisiert',
                                enabled : true,
                                readonly: false
                            }
                        },
                    ]
                }
            }
        },
		onAccept: function(){
			if(cookieconsent.allowedCategory('adsense-personalisiert')){
				cookieconsent.loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
				(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=0;
				(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
				(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:'ca-pub-0389469501739329',enable_page_level_ads:true});
				(function() {var cx = '003636206319648317223:vvuu59t9wge'; var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true; gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s); })();
			} else if(cookieconsent.allowedCategory('adsense')){
				cookieconsent.loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
				(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;
				(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
				(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:'ca-pub-0389469501739329',enable_page_level_ads:true});
				(function() {var cx = '003636206319648317223:vvuu59t9wge'; var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true; gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + cx; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s); })();
			} else {
			};
		},
		onChange: function(cookie){
		}
	});
