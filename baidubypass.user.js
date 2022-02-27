 // ==UserScript==
// @name        baidubypass
// @namespace   cs.rin.ru
// @match       https://cs.rin.ru/forum/viewtopic.php*
// @grant       none
// @version     1.0
// @author      crackhub213
// @description 24/02/2022, 23:00:23
// ==/UserScript==
document.querySelectorAll('a').forEach(a => {if(a.host == "pan.baidu.com"){a.href = a.innerHTML =  a.href.replace("pan.baidu.com", "baidu.crackhub.site").replace("?pwd=9999", "")}})
