function isChromeOrEdge() {
  return navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
}

function isFirefox() {
  return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}

function isSafari() {
  return navigator.userAgent.toLowerCase().indexOf("safari") > -1;
}

function isIE11Plus() {
  return document.documentMode && document.documentMode >= 11;
}
