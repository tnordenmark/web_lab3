// Print user agent information
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

window.addEventListener("load", browserDetect, false);

// Fleet image gallery
var fleetpath = "img/fleet/";

var fleetarray = new Array (
fleetpath + "Airbus-A319-L-L_01.jpg",
fleetpath + "Airbus-A320-L-L_01.jpg",
fleetpath + "Airbus-A321-L-L.jpg",
fleetpath + "Airbus-A330-300-L-L_01.jpg"
)

function showFleetImg(arrayno) {
    var fleethtml = "";
       
    for(var i = 0; i < fleetarray.length; i++) {
        fleethtml = fleethtml + "<a href = '#' onclick = 'showFleetImg(" + i + "); return false; '><img src='" + fleetarray[i] + "' /></a>";
    }
        
    fleetimage.src = fleetarray[arrayno];
    document.getElementById("fleetthumbs").innerHTML= fleethtml;
}

function showFirstFleetImg(imgnum) {
    showFleetImg(0);    
}

window.addEventListener("load", showFirstFleetImg, false);

// Staff image gallery
var staffpath = "img/staff/";

var staffarray = new Array (
staffpath + "bosse_boss.jpg",
staffpath + "pudwab_pilot.jpg",
staffpath + "snyggve_lugg.jpg",
staffpath + "sigurd_skiftnyckel.jpg"
)

var stafftitle = new Array (
"<p class='stafftitle'>Bosse Boss - VD</p>",
"<p class='stafftitle'>Pudwab Maharatjantan - Pilot</p>",
"<p class='stafftitle'>Snyggve Lugg - Ekonomi</p>",
"<p class='stafftitle'>Sigurd Skiftnyckel - Mekaniker</p>"
)

function showStaffImg(arrayno) {
    var staffhtml = "";
    var caption = document.getElementById("stafftitle");
    
    for(var i = 0; i < staffarray.length; i++) {
        staffhtml = staffhtml + "<a href = '#' onclick = 'showStaffImg(" + i + "); return false; '><img src='" + staffarray[i] + "' /></a>"
        }
    
    staffimage.src = staffarray[arrayno];
    caption.innerHTML = stafftitle[arrayno];
    
    document.getElementById("staffthumbs").innerHTML= staffhtml;
}

function showFirstStaffImg(imgnum) {
    showStaffImg(0);    
}

window.addEventListener("load", showFirstStaffImg, false);