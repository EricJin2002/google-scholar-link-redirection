// ==UserScript==
// @name         Google Scholar Link Redirection
// @namespace    https://github.com/EricJin2002/google-scholar-link-redirection
// @version      0.3
// @description  replace every google scholar link with its mirror site
// @author       Lazybird
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACYElEQVR4AWIY0gBQfDkAyRGEUXiLQRmxy4rtnMqxUYxt23ZSim3btm2ercHu9PW9m//Mrt7pubuueuve902/NwIQQCoXc8OLqasuePU5u74aSRqbXpZbXfF/PD82bKehBSzX0Gr0A/Rf8kr7Ga6fBVC5tM1rv/zNPndbrxtkngNACpj82Hz0IeEHgAalZd7p9AuWGLRSSyPjwgCk1mMe8p2X/qUACHbVXPdiDOWdY1oSQI6oF8k6m+d63pIAol4o5C0PIOiFYt6SAIJeKOYtCSDshVLeCgDiXojzVgYQ9wJAwJkXLFmctwKAuBcBmQCX3rCk4JUakzEcsM3EjCMW5hxnmHnUAmnOMR+m7U9Gz8WfpADajn2QdvxuRDJ550bw/j//1GOjXmL5QlZqWYa2+YwSRN9NP5CC9hMel2geNOWJ/vxL0vecCAqUMCKJHx6z10wtznzOcTKR0+xjJtoVAzFk+ZvU/9HGGeHByWth1PYbvgJ7wqyj0uY5opUoYL5433ddN/kc2QNRx4tvWCL1YiBl7gCA5vRY9Altxj5glLffJygA9d6H8i+zj1lcbCbQwWRu5/2V/svp+WDQ8WdI2fsAcKJjT9NTAAxUORvO2v8IPqcAB+y5AGaqAEw9oA4wWQWg/4nnSHYKQHMB9FUBqPbkJ0ynAE9/wQRQ1aMyYlLwYO9DcH/NaY49954bl2VNH/+A7i+AvXI6gEYeNwbjmHL5HTRZc/qtxTHB4+awOCbTSojioO9oywXmynE0sXO9T+Wihu9/BItEr+kzyhxA47K4Patqq5+tydnqq9D28h0Zey1R75tnUSAAAAAASUVORK5CYII=

// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @grant GM_setValue
// @grant GM_getValue
// @require https://greasyfork.org/scripts/411512-gm-createmenu/code/GM_createMenu.js?version=851631

// @license      MIT
// ==/UserScript==

'use strict';
const mirror = "xs.typicalgame.com";

// 思路一：替换目标链接
// 缺点：非通用
var replace_url = function () {
    var n = 0;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.includes("scholar.google.com")) {
            links[i].href = links[i].href.replace("scholar.google.com", mirror);
            n++;
        }
    }

    alert("成功替换了" + n + "个链接（￣︶￣）↗\n镜像站点：" + mirror)
}

// 思路二：监听点击事件
var catch_url = () => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.href.includes("scholar.google.com")) {
                // 阻止默认的跳转行为
                event.preventDefault();

                link.href = link.href.replace("scholar.google.com", mirror);
                // 手动跳转到超链接地址
                window.location.href = link.href;
            } else {
                return true;
            }
        });
    });
}

// GM_createMenu.add([
//     {
//         name: "替换目标链接",
//         callback: replace_url
//     },
//     {
//         name: "监听点击事件",
//         callback: catch_url
//     }
// ]);
// GM_createMenu.create({ storage: true });

// 思路三：自动跳转
if (
    window.location.href.startsWith("https://scholar.google.com/") ||
    window.location.href.startsWith("http://scholar.google.com/")
) {
    window.location.href = window.location.href.replace("scholar.google.com", mirror);
}
if (
    window.location.href.startsWith("https://scholar.google.com.hk/") ||
    window.location.href.startsWith("http://scholar.google.com.hk/")
) {
    window.location.href = window.location.href.replace("scholar.google.com.hk", mirror);
}
