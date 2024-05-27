// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"80HYy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "710c6a17e668ad24";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3LleC":[function(require,module,exports) {
// URLs pointing to primitive images
var _imageUrlsJs = require("./imageUrls.js");
const colors = {
    babyBlue: "#89CFF0",
    electricBlue: "#7DF9FF",
    aqua: "#00FFFF"
};
/* Grid */ const grid = {
    symOrder: 8,
    divisions: 12,
    radialInc: 10,
    orientation: 0,
    draw (canvas) {
        const context = canvas.getContext("2d");
        const { width, height } = canvas;
        context.save();
        context.translate(width / 2, height / 2);
        // draw concentric circles
        for(let i = 0; i < width / 2; i += this.radialInc){
            context.save();
            context.strokeStyle = colors.aqua;
            context.beginPath();
            context.arc(0, 0, i, 0, toRad(360));
            context.closePath();
            context.stroke();
            context.restore();
        }
        // minor axes
        for(let i = 0; i < this.symOrder * this.divisions; i++){
            context.save();
            context.rotate(toRad(this.orientation) + toRad(i * (360 / (this.symOrder * this.divisions))));
            context.strokeStyle = colors.electricBlue;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        // major axes
        for(let i = 0; i < this.symOrder; i++){
            context.save();
            context.rotate(toRad(this.orientation) + toRad(i * (360 / this.symOrder)));
            context.strokeStyle = colors.babyBlue;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        context.restore();
    }
};
/* Image */ function transparentIfNotBlack({ r, g, b, a }) {
    if (r != 0 || g != 0 || b != 0) return {
        r,
        g,
        b,
        a: 0
    };
    else return {
        r,
        g,
        b,
        a: 255
    };
}
function prepareImage(loadedImage) {
    const offCanvas = document.createElement("canvas");
    const context = offCanvas.getContext("2d");
    offCanvas.width = loadedImage.width;
    offCanvas.height = loadedImage.height;
    context.drawImage(loadedImage, 0, 0);
    // make pixels transparent where needed
    // calculate the centroid too while at it
    // let sumCoords = { x: 0, y: 0 };
    // let count     = 0;
    let imageData = context.getImageData(0, 0, offCanvas.width, offCanvas.height);
    for(let y = 0; y < imageData.height; ++y)for(let x = 0; x < imageData.width; ++x){
        let index = y * imageData.width * 4 + x * 4;
        let [r, g, b] = imageData.data.slice(index, index + 3);
        // let isWhite = r == 255 && g == 255 && b == 255;
        /*
      if (!isWhite) {
        ++count;
        sumCoords.x += x;
        sumCoords.y += y;
      }
      */ imageData.data[index + 3] = 255 - (r + g + b) / 3;
    }
    context.putImageData(imageData, 0, 0);
    let preparedImage = {
        loaded: false,
        // centroid: { x: sumCoords.x / count, y: sumCoords.y / count },
        data: new Image()
    };
    preparedImage.data.addEventListener("load", ()=>{
        preparedImage.loaded = true;
    });
    preparedImage.data.src = offCanvas.toDataURL();
    // console.log(preparedImage.centroid);
    return preparedImage;
}
let tempImage = null;
let sourceImage = new Image();
sourceImage.addEventListener("load", ()=>{
    tempImage = prepareImage(sourceImage);
});
sourceImage.src = (0, _imageUrlsJs.imageURLs)[11];
let params = {
    distance: 0,
    angle: 0,
    rotation: 0,
    scale: 0.25
};
function drawPreparedImage(canvas, preparedImage, { distance, angle, rotation, scale }, order) {
    if (!preparedImage || !preparedImage.loaded) return;
    const context = canvas.getContext("2d");
    for(let i = 0; i < order; ++i){
        context.save();
        let nextAngle = 360 / order * i;
        console.log(angle + nextAngle);
        context.translate(canvas.width / 2, canvas.height / 2); // translate to center
        context.rotate(toRad(angle + nextAngle)); // rotate about the center (of the canvas)
        context.translate(distance, 0); // move given distance away from the center
        context.rotate(toRad(rotation)); // rotate about the new center (of the object)
        context.scale(scale, scale); // perform scaling
        context.translate(-preparedImage.data.width / 2, -preparedImage.data.height / 2); // offset so that image is drawn at center
        context.drawImage(preparedImage.data, 0, 0);
        context.restore();
    }
}
/* Clear the canvas */ function clear(canvas) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
/* Events */ const controlDist = document.querySelector("#control-dist");
const valueDist = document.querySelector("#value-dist");
controlDist.addEventListener("change", (ev)=>{
    params.distance = +ev.target.value;
    valueDist.innerHTML = ev.target.value;
});
const controlAngle = document.querySelector("#control-angle");
const valueAngle = document.querySelector("#value-angle");
controlAngle.addEventListener("change", (ev)=>{
    params.angle = +ev.target.value;
    valueAngle.innerHTML = ev.target.value;
});
const controlScale = document.querySelector("#control-scale");
const valueScale = document.querySelector("#value-scale");
controlScale.addEventListener("change", (ev)=>{
    params.scale = +ev.target.value;
    valueScale.innerHTML = ev.target.value;
});
const controlRot = document.querySelector("#control-rot");
const valueRot = document.querySelector("#value-rot");
controlRot.addEventListener("change", (ev)=>{
    params.rotation = +ev.target.value;
    valueRot.innerHTML = ev.target.value;
});
/* Top-level drawing function */ let tick = 0;
function draw() {
    window.requestAnimationFrame(draw);
    const canvas = document.querySelector("#main-canvas");
    clear(canvas);
    grid.draw(canvas);
    drawPreparedImage(canvas, tempImage, params, grid.symOrder);
}
window.onload = function() {
    window.requestAnimationFrame(draw);
};
/* Helpers */ function toRad(deg) {
    return Math.PI * deg / 180;
}

},{"./imageUrls.js":"7WJg4"}],"7WJg4":[function(require,module,exports) {
// Need to hard-code image URLs as simple strings because
// parcel won't understand anything else during compile time
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "imageURLs", ()=>imageURLs);
const imageURLs = {};
imageURLs[1] = new URL(require("c2eef0de058c740d"));
imageURLs[2] = new URL(require("52a7a861fda9f30b"));
imageURLs[3] = new URL(require("9c18ef670372a950"));
imageURLs[4] = new URL(require("9cb9b835c8aecf1e"));
imageURLs[5] = new URL(require("4e7685da53edcdb2"));
imageURLs[6] = new URL(require("7dfad34e076d902a"));
imageURLs[7] = new URL(require("e6b69140c90bc1ac"));
imageURLs[8] = new URL(require("8d0f2d7300b372dc"));
imageURLs[9] = new URL(require("b6486eecfa6dd0c"));
imageURLs[10] = new URL(require("9c484782eeeb396f"));
imageURLs[11] = new URL(require("92e2dcdb599e0e86"));
imageURLs[12] = new URL(require("d52baa4075fb2b3"));
imageURLs[13] = new URL(require("6062f456d781d0cb"));
imageURLs[14] = new URL(require("5ed07d784ed75992"));
imageURLs[15] = new URL(require("1a62b5c043c2fad6"));
imageURLs[16] = new URL(require("99101774e61f2692"));
imageURLs[17] = new URL(require("4861c5c899050042"));
imageURLs[18] = new URL(require("28a2665c49a6300"));
imageURLs[19] = new URL(require("11b8569b0e6d4678"));
imageURLs[20] = new URL(require("921e796bcaa4ce5d"));
imageURLs[21] = new URL(require("5b48a9e2d2dc19f7"));
imageURLs[22] = new URL(require("c9ef71e630295927"));
imageURLs[23] = new URL(require("8f33d966f5fbb7ac"));
imageURLs[24] = new URL(require("eb88667065e3cf00"));
imageURLs[25] = new URL(require("36aafb8798b994a2"));
imageURLs[26] = new URL(require("c02b5382e379fe35"));
imageURLs[27] = new URL(require("a28f62b1ecb9edad"));
imageURLs[28] = new URL(require("d8294d38c186241f"));
imageURLs[29] = new URL(require("77d67807a0769154"));
imageURLs[30] = new URL(require("69a7031e495f7be0"));
imageURLs[31] = new URL(require("ca5bd563d3e72b8d"));
imageURLs[32] = new URL(require("a811b18f1c0bb33a"));
imageURLs[33] = new URL(require("88e40d88b661dd4b"));
imageURLs[34] = new URL(require("9bf4dae99eaef48c"));
imageURLs[35] = new URL(require("4be596869190e41b"));
imageURLs[36] = new URL(require("e73aafba07ea7b67"));
imageURLs[37] = new URL(require("94ff87e1c79456f"));
imageURLs[39] = new URL(require("98420d767ed21275"));
imageURLs[40] = new URL(require("c7de6fb8246c75a9"));
imageURLs[41] = new URL(require("df791106f119ec62"));
imageURLs[42] = new URL(require("9736b820bbd18588"));
imageURLs[43] = new URL(require("ad45e95ea0806af9"));

},{"c2eef0de058c740d":"dO0ic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","52a7a861fda9f30b":"3u0Uw","9c18ef670372a950":"bz58y","9cb9b835c8aecf1e":"9CTBo","4e7685da53edcdb2":"c21Hc","7dfad34e076d902a":"da1aP","e6b69140c90bc1ac":"brheT","8d0f2d7300b372dc":"duqBx","b6486eecfa6dd0c":"9NAKT","9c484782eeeb396f":"lXVmi","92e2dcdb599e0e86":"cSVjI","d52baa4075fb2b3":"fEgU7","6062f456d781d0cb":"1A2bj","5ed07d784ed75992":"igT91","1a62b5c043c2fad6":"cEVa7","99101774e61f2692":"ja5bj","4861c5c899050042":"1vVzo","28a2665c49a6300":"asq85","11b8569b0e6d4678":"2Ilri","921e796bcaa4ce5d":"hM8xj","5b48a9e2d2dc19f7":"gS5T6","c9ef71e630295927":"2fNFE","8f33d966f5fbb7ac":"5ou4J","eb88667065e3cf00":"7ucle","36aafb8798b994a2":"60VWP","c02b5382e379fe35":"hFvsv","a28f62b1ecb9edad":"hppRe","d8294d38c186241f":"3LH5i","77d67807a0769154":"uSHgh","69a7031e495f7be0":"epMIa","ca5bd563d3e72b8d":"7wMVF","a811b18f1c0bb33a":"5prQs","88e40d88b661dd4b":"dPEJF","9bf4dae99eaef48c":"6cicA","4be596869190e41b":"7viC4","e73aafba07ea7b67":"1vUHs","94ff87e1c79456f":"iG25G","98420d767ed21275":"a94OQ","c7de6fb8246c75a9":"ikhdU","df791106f119ec62":"7yTDU","9736b820bbd18588":"444C7","ad45e95ea0806af9":"IsRLM"}],"dO0ic":[function(require,module,exports) {
module.exports = require("10cad7457214eac8").getBundleURL("9HKMd") + "primitive_1.0d76476d.png" + "?" + Date.now();

},{"10cad7457214eac8":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3u0Uw":[function(require,module,exports) {
module.exports = require("e91c8dd37bac8907").getBundleURL("9HKMd") + "primitive_2.4f2cd23b.png" + "?" + Date.now();

},{"e91c8dd37bac8907":"lgJ39"}],"bz58y":[function(require,module,exports) {
module.exports = require("c855907e96e2ff37").getBundleURL("9HKMd") + "primitive_3.d5d63ab3.png" + "?" + Date.now();

},{"c855907e96e2ff37":"lgJ39"}],"9CTBo":[function(require,module,exports) {
module.exports = require("1bd8fd0add02f8de").getBundleURL("9HKMd") + "primitive_4.a515d11f.png" + "?" + Date.now();

},{"1bd8fd0add02f8de":"lgJ39"}],"c21Hc":[function(require,module,exports) {
module.exports = require("870924ae92711f47").getBundleURL("9HKMd") + "primitive_5.99ec732d.png" + "?" + Date.now();

},{"870924ae92711f47":"lgJ39"}],"da1aP":[function(require,module,exports) {
module.exports = require("1271d91cbd1860d6").getBundleURL("9HKMd") + "primitive_6.d34d7944.png" + "?" + Date.now();

},{"1271d91cbd1860d6":"lgJ39"}],"brheT":[function(require,module,exports) {
module.exports = require("e1e29f665d486183").getBundleURL("9HKMd") + "primitive_7.a1168d2e.png" + "?" + Date.now();

},{"e1e29f665d486183":"lgJ39"}],"duqBx":[function(require,module,exports) {
module.exports = require("1d712b1aec561534").getBundleURL("9HKMd") + "primitive_8.50d17dc5.png" + "?" + Date.now();

},{"1d712b1aec561534":"lgJ39"}],"9NAKT":[function(require,module,exports) {
module.exports = require("ca9bc7d1fe411c66").getBundleURL("9HKMd") + "primitive_9.13087161.png" + "?" + Date.now();

},{"ca9bc7d1fe411c66":"lgJ39"}],"lXVmi":[function(require,module,exports) {
module.exports = require("43bbe2a757c74c51").getBundleURL("9HKMd") + "primitive_10.6714895f.png" + "?" + Date.now();

},{"43bbe2a757c74c51":"lgJ39"}],"cSVjI":[function(require,module,exports) {
module.exports = require("9579ec2cf43546f6").getBundleURL("9HKMd") + "primitive_11.1cf009c2.png" + "?" + Date.now();

},{"9579ec2cf43546f6":"lgJ39"}],"fEgU7":[function(require,module,exports) {
module.exports = require("a8c7ca113b719209").getBundleURL("9HKMd") + "primitive_12.f416b66f.png" + "?" + Date.now();

},{"a8c7ca113b719209":"lgJ39"}],"1A2bj":[function(require,module,exports) {
module.exports = require("bac24b2d1b4a7ccb").getBundleURL("9HKMd") + "primitive_13.36ab5b39.png" + "?" + Date.now();

},{"bac24b2d1b4a7ccb":"lgJ39"}],"igT91":[function(require,module,exports) {
module.exports = require("81613d5254c76d7").getBundleURL("9HKMd") + "primitive_14.5629ec0d.png" + "?" + Date.now();

},{"81613d5254c76d7":"lgJ39"}],"cEVa7":[function(require,module,exports) {
module.exports = require("732654e5f57ccf33").getBundleURL("9HKMd") + "primitive_15.a346c158.png" + "?" + Date.now();

},{"732654e5f57ccf33":"lgJ39"}],"ja5bj":[function(require,module,exports) {
module.exports = require("d5630854ddd5f37f").getBundleURL("9HKMd") + "primitive_16.45bbbbe2.png" + "?" + Date.now();

},{"d5630854ddd5f37f":"lgJ39"}],"1vVzo":[function(require,module,exports) {
module.exports = require("e005635cb2bbafc2").getBundleURL("9HKMd") + "primitive_17.029f35f3.png" + "?" + Date.now();

},{"e005635cb2bbafc2":"lgJ39"}],"asq85":[function(require,module,exports) {
module.exports = require("8a25532d2f4352f6").getBundleURL("9HKMd") + "primitive_18.423d2641.png" + "?" + Date.now();

},{"8a25532d2f4352f6":"lgJ39"}],"2Ilri":[function(require,module,exports) {
module.exports = require("46d168ce1e4f8ed1").getBundleURL("9HKMd") + "primitive_19.92654cf8.png" + "?" + Date.now();

},{"46d168ce1e4f8ed1":"lgJ39"}],"hM8xj":[function(require,module,exports) {
module.exports = require("c89e5f96f270ec53").getBundleURL("9HKMd") + "primitive_20.f41994a2.png" + "?" + Date.now();

},{"c89e5f96f270ec53":"lgJ39"}],"gS5T6":[function(require,module,exports) {
module.exports = require("5bfc9f0a7c07553d").getBundleURL("9HKMd") + "primitive_21.22437a3c.png" + "?" + Date.now();

},{"5bfc9f0a7c07553d":"lgJ39"}],"2fNFE":[function(require,module,exports) {
module.exports = require("9846b0dd4ef2d2a").getBundleURL("9HKMd") + "primitive_22.2c78e259.png" + "?" + Date.now();

},{"9846b0dd4ef2d2a":"lgJ39"}],"5ou4J":[function(require,module,exports) {
module.exports = require("54bbb760f958449b").getBundleURL("9HKMd") + "primitive_23.268877f7.png" + "?" + Date.now();

},{"54bbb760f958449b":"lgJ39"}],"7ucle":[function(require,module,exports) {
module.exports = require("be826be8e921320f").getBundleURL("9HKMd") + "primitive_24.714eecd2.png" + "?" + Date.now();

},{"be826be8e921320f":"lgJ39"}],"60VWP":[function(require,module,exports) {
module.exports = require("9adee96382595b01").getBundleURL("9HKMd") + "primitive_25.df274f1f.png" + "?" + Date.now();

},{"9adee96382595b01":"lgJ39"}],"hFvsv":[function(require,module,exports) {
module.exports = require("f36ffc15327040a8").getBundleURL("9HKMd") + "primitive_26.5e56619a.png" + "?" + Date.now();

},{"f36ffc15327040a8":"lgJ39"}],"hppRe":[function(require,module,exports) {
module.exports = require("73bcb10c1dba07bb").getBundleURL("9HKMd") + "primitive_27.14e1cb49.png" + "?" + Date.now();

},{"73bcb10c1dba07bb":"lgJ39"}],"3LH5i":[function(require,module,exports) {
module.exports = require("95471208d577b59b").getBundleURL("9HKMd") + "primitive_28.9a895720.png" + "?" + Date.now();

},{"95471208d577b59b":"lgJ39"}],"uSHgh":[function(require,module,exports) {
module.exports = require("644abd6261f54b45").getBundleURL("9HKMd") + "primitive_29.9ad269ac.png" + "?" + Date.now();

},{"644abd6261f54b45":"lgJ39"}],"epMIa":[function(require,module,exports) {
module.exports = require("85681ff433c328e3").getBundleURL("9HKMd") + "primitive_30.514f3932.png" + "?" + Date.now();

},{"85681ff433c328e3":"lgJ39"}],"7wMVF":[function(require,module,exports) {
module.exports = require("44a132066bf8c7a2").getBundleURL("9HKMd") + "primitive_31.033ce8af.png" + "?" + Date.now();

},{"44a132066bf8c7a2":"lgJ39"}],"5prQs":[function(require,module,exports) {
module.exports = require("71e358fe3a2e622a").getBundleURL("9HKMd") + "primitive_32.7ca91c26.png" + "?" + Date.now();

},{"71e358fe3a2e622a":"lgJ39"}],"dPEJF":[function(require,module,exports) {
module.exports = require("79509be6eb1476c2").getBundleURL("9HKMd") + "primitive_33.915eaeaf.png" + "?" + Date.now();

},{"79509be6eb1476c2":"lgJ39"}],"6cicA":[function(require,module,exports) {
module.exports = require("2553723f1cb8ed73").getBundleURL("9HKMd") + "primitive_34.ea5aec13.png" + "?" + Date.now();

},{"2553723f1cb8ed73":"lgJ39"}],"7viC4":[function(require,module,exports) {
module.exports = require("a853838bff32360f").getBundleURL("9HKMd") + "primitive_35.2d474a24.png" + "?" + Date.now();

},{"a853838bff32360f":"lgJ39"}],"1vUHs":[function(require,module,exports) {
module.exports = require("540b4897701d53df").getBundleURL("9HKMd") + "primitive_36.900d50af.png" + "?" + Date.now();

},{"540b4897701d53df":"lgJ39"}],"iG25G":[function(require,module,exports) {
module.exports = require("f2be496841dad4c").getBundleURL("9HKMd") + "primitive_37.0e409ad1.png" + "?" + Date.now();

},{"f2be496841dad4c":"lgJ39"}],"a94OQ":[function(require,module,exports) {
module.exports = require("ac76a3c554733870").getBundleURL("9HKMd") + "primitive_39.e4807f02.png" + "?" + Date.now();

},{"ac76a3c554733870":"lgJ39"}],"ikhdU":[function(require,module,exports) {
module.exports = require("37b3854374217bdc").getBundleURL("9HKMd") + "primitive_40.b3f93179.png" + "?" + Date.now();

},{"37b3854374217bdc":"lgJ39"}],"7yTDU":[function(require,module,exports) {
module.exports = require("9d8e244dd8d67667").getBundleURL("9HKMd") + "primitive_41.7ae3ebea.png" + "?" + Date.now();

},{"9d8e244dd8d67667":"lgJ39"}],"444C7":[function(require,module,exports) {
module.exports = require("ffefa9a26566c253").getBundleURL("9HKMd") + "primitive_42.a7f02f01.png" + "?" + Date.now();

},{"ffefa9a26566c253":"lgJ39"}],"IsRLM":[function(require,module,exports) {
module.exports = require("c19a85d730a5b220").getBundleURL("9HKMd") + "primitive_43.1d5b1894.png" + "?" + Date.now();

},{"c19a85d730a5b220":"lgJ39"}]},["80HYy","3LleC"], "3LleC", "parcelRequiref046")

//# sourceMappingURL=index.e668ad24.js.map
