// Print user agent string
function browserDetect() {
    "use strict";
    
    var txt;
    
    txt = "<p><b>Browser Codename:</b> " + navigator.appCodeName + "</p>";
    txt += "<p><b>Browser Name:</b> " + navigator.appName + "</p>";
    txt += "<p><b>Browser Version:</b> " + navigator.appVersion + "</p>";
    
    if (navigator.cookieEnabled) {
        txt += "<p><b>Cookies Enabled:</b> Yes</p>";
    } else {
        txt += "<p><b>Cookies Enabled:</b> No</p>";
    }
    
    txt += "<p><b>Platform:</b> " + navigator.platform + "</p>";
    txt += "<p><b>User-agent header:</b> " + navigator.userAgent + "</p>";
    txt += "<p><b>User-agent language:</b> " + navigator.systemLanguage + "</p>";
    
    document.getElementById("browserdetect").innerHTML = txt;
}
