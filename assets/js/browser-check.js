//Note: userAgent in FF2.0.0.13 WinXP returns: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13
// userAgent in FF35 Win7 returns: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0
var goodbrowser = false;
if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
    var ffversion = new Number(RegExp.$1) // capture x.x portion and store as a number
    if (ffversion >= 31) { goodbrowser = true };
}
    
if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { //test for Chrome/x.x or Chrome x.x (ignoring remaining digits);
    var chromeversion = new Number(RegExp.$1) // capture x.x portion and store as a number
    if (chromeversion >= 36) { goodbrowser = true };
}
if (!goodbrowser) { 
    r = confirm("You are using an unsupported browser. Many features of this application will not work. Please press OK to visit ServiceNow and request 'Google Chrome' or 'Firefox'. You may need to update this browser.");
        if (r == true) { window.location.replace("https://regeneron.service-now.com/navpage.do"); }
        else { alert("Don't say I didn't warn you..."); }
};
