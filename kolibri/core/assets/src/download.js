/* eslint-disable */
//download.js v4.2, by dandavis; 2008-2016. [CCBY2] see http://danml.com/download.html for tests/usage
(function(r,k){"function"==typeof define&&define.amd?define([],k):"object"==typeof exports?module.exports=k():r.download=k()})(this,function(){return function k(a,b,g){function q(p){var a=p.split(/[:;,]/);p=a[1];var a=("base64"==a[2]?atob:decodeURIComponent)(a.pop()),d=a.length,b=0,c=new Uint8Array(d);for(b;b<d;++b)c[b]=a.charCodeAt(b);return new f([c],{type:p})}function l(a,b){if("download"in d)return d.href=a,d.setAttribute("download",m),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout(function(){d.click(),document.body.removeChild(d),!0===b&&setTimeout(function(){e.URL.revokeObjectURL(d.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return a=a.replace(/^data:([\w\/\-\+]+)/,"application/octet-stream"),!window.open(a)&&confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=a),!0;var c=document.createElement("iframe");document.body.appendChild(c),b||(a="data:"+a.replace(/^data:([\w\/\-\+]+)/,"application/octet-stream")),c.src=a,setTimeout(function(){document.body.removeChild(c)},333)}var e=window,c=g||"application/octet-stream",h=!b&&!g&&a,d=document.createElement("a");g=function(a){return String(a)};var f=e.Blob||e.MozBlob||e.WebKitBlob||g,m=b||"download",f=f.call?f.bind(e):Blob;"true"===String(this)&&(a=[a,c],c=a[0],a=a[1]);if(h&&2048>h.length&&(m=h.split("/").pop().split("?")[0],d.href=h,-1!==d.href.indexOf(h))){var n=new XMLHttpRequest;return n.open("GET",h,!0),n.responseType="blob",n.onload=function(a){k(a.target.response,m,"application/octet-stream")},setTimeout(function(){n.send()},0),n}if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(a)){if(!(2096103.424<a.length&&f!==g))return navigator.msSaveBlob?navigator.msSaveBlob(q(a),m):l(a);a=q(a),c=a.type||"application/octet-stream"}b=a instanceof f?a:new f([a],{type:c});if(navigator.msSaveBlob)return navigator.msSaveBlob(b,m);if(e.URL)l(e.URL.createObjectURL(b),!0);else{if("string"==typeof b||b.constructor===g)try{return l("data:"+c+";base64,"+e.btoa(b))}catch(p){return l("data:"+c+","+encodeURIComponent(b))}c=new FileReader,c.onload=function(a){l(this.result)},c.readAsDataURL(b)}return!0}});