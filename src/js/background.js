"use strict";

chrome.webRequest.onBeforeRequest.addListener(function (d) {
        return {cancel: true};
    }, {urls: ["https://unpkg.com/gpu.js@latest/dist/gpu-browser.min.js"]},
    ["blocking"]);
