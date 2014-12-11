
// Browser Detection Javascript
// Copyright 2014, by Jaydon Reap, Ficus Technologies

function whichBrs() {
var agt=navigator.userAgent.toLowerCase();
if (agt.indexOf("opera") != -1) return 'Opera';
if (agt.indexOf("firefox") != -1) return 'Firefox';
if (agt.indexOf("safari") != -1) return 'Safari';
if (agt.indexOf("msie") != -1) return 'Internet Explorer';
if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
if (agt.indexOf('\/') != -1) {
if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') {
return navigator.userAgent.substr(0,agt.indexOf('\/'));}
else return 'Netscape';} else if (agt.indexOf(' ') != -1)
return navigator.userAgent.substr(0,agt.indexOf(' '));
else return navigator.userAgent;
}
