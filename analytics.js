// Google tag (gtag.js)
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-FZFENY30PW');function gtag(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config', 'G-FZFENY30PW');
// dataLayer.push('event', 'pageview');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga1');ga1('create','UA-28183338-1', 'auto');ga1('send', 'pageview');
(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"17215313"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '2618888198240466');fbq('track', 'PageView');

// Google tag (gtag.js)
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject4']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.googletagmanager.com/gtag/js?id=G-FZFENY30PW','gtag');gtag('js',new Date());gtag('config', 'G-FZFENY30PW');

function ga(a,b,c,d,e) {
	ga1(a,b,c,d,e);
	if(e.indexOf("si@") !== -1) {
		var Newlabel = e;
		var objArr = {};
		Newlabel.split("#").forEach(function(x,i) {
			if(i == 0) {
				objArr['buy_url'] = x;
			}else {
				objArr[x.split("=")[0]] = x.split("=")[1];
			}
		})
		objArr['event_action'] = d;
		objArr['event_label'] = e;
		objArr['lang'] = PDCheckout.lang;
		gtag(b,c, objArr);
	} else {
		gtag(b,c, {'event_action':d, 'event_label':e});
	}
}

function setCookie(c_name, value, expiredays) {	
		var exdate = new Date()
		exdate.setDate(exdate.getDate() + expiredays)
		document.cookie = c_name + "=" + escape(value) +
			((expiredays == null) ? "" : ";expires=" + exdate.toGMTString() + ";path=/;domain=imobie.com");
	}
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=")
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
				if (c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
		}
		return "";
	}
function getCurrentUrl() {
	var crturl = window.location.href;
	if(crturl.length === 0) {
		return false;
	}
	crturl = crturl.substring(crturl.indexOf("imobie"));
	crturl = crturl.substring(crturl.indexOf("/"))

	if(crturl.indexOf(".htm") > 0) {
		crturl = crturl.substring(0, crturl.indexOf(".htm"))
	} else {
		crturl = crturl + "index"
	}
	if(window.location.hostname === "anyget.imobie.com") {
		crturl = "anygetweb" + crturl;
	} else if(window.location.hostname === "anytrans.imobie.com") {
		crturl = "anytransweb" + crturl;
	} else if(window.location.hostname === "heic.imobie.com") {
		crturl = "heicweb" + crturl;
	}
	return crturl;
}

function langding() {
	var crturl = getCurrentUrl(),
		expiredays = 30;
	if(crturl.indexOf("/fr/") !==-1) {
		cookieName = "ldfr";
	}else if(crturl.indexOf("/de/") !==-1) {
		cookieName = "ldde";
	}
	else if(crturl.indexOf("/es/") !==-1) {
		cookieName = "ldes";
	}
	else if(crturl.indexOf("/ar/") !==-1) {
		cookieName = "ldar";
	}else if(crturl.indexOf("/it/") !==-1) {
		cookieName = "ldit";
	}else if(crturl.indexOf("/br/") !==-1) {
		cookieName = "ldbr";
	}else{
		cookieName = "lden";
	}

	if(getCookie(cookieName) !== "") {
		return false;
	}
	setCookie(cookieName, crturl, expiredays);
}
function getPar(name) {
	var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return "";
}

function getutm() {
var expiredays=30,
	utmsource=getPar("utm_source"),
	utmmedium=getPar("utm_medium"),
	utmcampaign=getPar("utm_campaign"),
	sourcecookie=getCookie("utm_source"),
	mediumcookie=getCookie("utm_medium"),
	campaigncookie=getCookie("utm_campaign");
	(utmsource!=="" && sourcecookie ==="")?setCookie("utm_source",utmsource,expiredays):"";
	(utmmedium!=="" && mediumcookie ==="")?setCookie("utm_medium",utmmedium,expiredays):"";
	(utmcampaign!=="" && campaigncookie ==="")?setCookie("utm_campaign",utmcampaign,expiredays):"";
}
getutm();
langding();


if(getPar("AFFILIATE") !== ""){
	var crturl = window.location.href,
			affiliate = crturl.substring(crturl.indexOf("?")+1);
	setCookie("affiliate", affiliate, 1);
	if(getCookie("impact") !== ""){
		setCookie("impact", "", -1);
	}
}
if(getPar("irgwc") !== ""){
	var crturl = window.location.href,
			impact = crturl.substring(crturl.indexOf("?")+1),
			irclickid = impact.split("&")[0].split("=")[1];
	setCookie("impact", impact, 1);
	setCookie("irclickid", irclickid, 1);
	if(getCookie("affiliate") !== ""){
		setCookie("affiliate", "", -1);
		setCookie("ecommerce", "", -1);
	}
}
if(getPar("affkey") !== ""){
	var affkey = getPar("affkey");
	setCookie("affkey", affkey, 1);
}