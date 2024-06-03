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
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
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

},{}],"3cYfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gridJs = require("./grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _primitivesJs = require("./primitives.js");
var _primitivesJsDefault = parcelHelpers.interopDefault(_primitivesJs);
var _stateJs = require("./state.js");
const grid = new (0, _gridJsDefault.default)();
/* Dynamic UI */ const primitiveOptionBox = document.querySelector("#prim-option-box");
for(const id in 0, _primitivesJsDefault.default)addPrimitiveButton(primitiveOptionBox, id);
const controls = {
    distance: document.querySelector("#control-distance"),
    angle: document.querySelector("#control-angle"),
    rotation: document.querySelector("#control-rotation"),
    scale: document.querySelector("#control-scale")
};
const valueLabels = {
    distance: document.querySelector("#control-distance + span"),
    angle: document.querySelector("#control-angle + span"),
    rotation: document.querySelector("#control-rotation + span"),
    scale: document.querySelector("#control-scale + span")
};
controls.distance.min = "0";
controls.distance.max = "1";
controls.distance.step = "0.01";
controls.distance.addEventListener("input", (ev)=>{
    (0, _stateJs.mandalaState).update((0, _stateJs.appState).selectedPrimitive, {
        distance: +ev.target.value
    });
    valueLabels.distance.textContent = +ev.target.value;
});
controls.angle.min = "0";
controls.angle.max = "359";
controls.angle.addEventListener("input", (ev)=>{
    (0, _stateJs.mandalaState).update((0, _stateJs.appState).selectedPrimitive, {
        angle: +ev.target.value
    });
    valueLabels.angle.textContent = +ev.target.value;
});
controls.rotation.min = "0";
controls.rotation.max = "359";
controls.rotation.addEventListener("input", (ev)=>{
    (0, _stateJs.mandalaState).update((0, _stateJs.appState).selectedPrimitive, {
        rotation: +ev.target.value
    });
    valueLabels.rotation.textContent = +ev.target.value;
});
controls.scale.min = "0";
controls.scale.max = "1";
controls.scale.step = "0.01";
controls.scale.addEventListener("input", (ev)=>{
    (0, _stateJs.mandalaState).update((0, _stateJs.appState).selectedPrimitive, {
        scale: +ev.target.value
    });
    valueLabels.scale.textContent = +ev.target.value;
});
/*
const primitiveOptionBox = document.querySelector('#prim-option-box');
const usedPrimitivesBox  = document.querySelector('#prim-used-box');

for (const id in primitives) {
  const primitiveButton     = document.createElement('button');
  
  const primitiveButtonIcon = document.createElement('img');

  primitiveButtonIcon.src = imageURLs[id];
  primitiveButtonIcon.classList.add('image-icon');

  primitiveButton.appendChild(primitiveButtonIcon);

  primitiveButton.classList.add('image-button');
  
  primitiveButton.addEventListener('click', () => {
    mandalaState.add(primitives[id], { order: grid.symOrder });

    const usedPrimitiveEntry = document.createElement('div');

    const usedPrimitiveIcon = document.createElement('img');

    usedPrimitiveIcon.src = imageURLs[id];
    usedPrimitiveIcon.classList.add('image-icon');

    usedPrimitiveEntry.appendChild(usedPrimitiveIcon);

    const primitiveDeleteButton = document.createElement('button');

    primitiveDeleteButton.textContent = 'Delete';
    primitiveDeleteButton.classList.add('prim-delete');

    usedPrimitiveEntry.appendChild(primitiveDeleteButton);

    usedPrimitiveEntry.classList.add('prim-entry');

    usedPrimitiveEntry.addEventListener('click', () => {

    });

    usedPrimitivesBox.appendChild(usedPrimitiveEntry);
  });

  primitiveOptionBox.appendChild(primitiveButton);
}
*/ /* Image */ /* Clear the canvas */ function clear(canvas) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
/* Events */ /* Top-level drawing function */ let tick = 0;
function draw() {
    window.requestAnimationFrame(draw);
    const canvas = document.querySelector("#main-canvas");
    clear(canvas);
    grid.draw(canvas);
    (0, _stateJs.mandalaState).primitives.forEach(({ primitive, props })=>{
        primitive.draw(canvas, props);
    });
}
window.onload = function() {
    window.requestAnimationFrame(draw);
};
/* Helpers */ function addPrimitiveButton(parentNode, primitiveID) {
    const primitiveButton = document.createElement("button");
    const primitiveIcon = document.createElement("img");
    primitiveIcon.classList.add("image-icon");
    primitiveIcon.src = (0, _primitivesJsDefault.default)[primitiveID].url;
    primitiveButton.appendChild(primitiveIcon);
    primitiveButton.classList.add("image-button");
    primitiveButton.addEventListener("click", ()=>{
        const usedPrimitiveBox = document.querySelector("#prim-used-box");
        const symbol = Symbol();
        (0, _stateJs.mandalaState).add(symbol, (0, _primitivesJsDefault.default)[primitiveID], {
            order: 8
        });
        changeState(symbol);
        addUsedPrimitive(usedPrimitiveBox, primitiveID, symbol);
    });
    parentNode.appendChild(primitiveButton);
}
function addUsedPrimitive(parentNode, primitiveID, symbol) {
    const primitiveEntry = document.createElement("div");
    const primitiveIcon = document.createElement("img");
    primitiveIcon.classList.add("image-icon");
    primitiveIcon.src = (0, _primitivesJsDefault.default)[primitiveID].url;
    primitiveEntry.appendChild(primitiveIcon);
    const primitiveDeleteButton = document.createElement("button");
    primitiveDeleteButton.textContent = "Delete";
    primitiveDeleteButton.addEventListener("click", (ev)=>{
        ev.stopPropagation();
        (0, _stateJs.mandalaState).remove(symbol);
        changeState(null);
        primitiveEntry.remove();
    });
    primitiveEntry.appendChild(primitiveDeleteButton);
    primitiveEntry.classList.add("prim-entry");
    primitiveEntry.addEventListener("click", ()=>{
        changeState(symbol);
    });
    parentNode.appendChild(primitiveEntry);
}
function changeState(symbol) {
    (0, _stateJs.appState).selectedPrimitive = symbol;
    const controlsSet = document.querySelector("#controls-set");
    if (symbol === null) controlsSet.classList.add("hidden");
    else {
        controlsSet.classList.remove("hidden");
        const props = (0, _stateJs.mandalaState).primitives.get(symbol).props;
        controls.distance.value = `${props.distance}`;
        controls.angle.value = `${props.angle}`;
        controls.rotation.value = `${props.rotation}`;
        controls.scale.value = `${props.scale}`;
        valueLabels.distance.textContent = `${props.distance}`;
        valueLabels.angle.textContent = `${props.angle}`;
        valueLabels.rotation.textContent = `${props.rotation}`;
        valueLabels.scale.textContent = `${props.scale}`;
    }
}

},{"./grid.js":"7Jpqy","./primitives.js":"9GoLL","./state.js":"2DgWL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Jpqy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("./helpers.js");
const defaults = {
    symOrder: 8,
    divisions: 12,
    radialGap: 10,
    orientation: 0,
    hue: 0
};
class Grid {
    constructor(symOrder = defaults.symOrder, divisions = defaults.divisions, radialInc = defaults.radialGap, orientation = defaults.orientation, hue = defaults.hue){
        this.symOrder = symOrder; // order of symmetry
        this.divisions = divisions; // no. of divisions in a symmetric sector
        this.radialInc = radialInc; // difference in radii of concentric circles
        this.orientation = orientation; // orientation of the grid itself
        this.hue = hue; // base color of grid
    }
    draw(canvas) {
        const context = canvas.getContext("2d");
        context.save();
        // move origin to center of canvas
        context.translate(canvas.width / 2, canvas.height / 2);
        // draw concentric circles
        for(let r = 0; r < canvas.width / 2; r += this.radialInc){
            context.save();
            context.strokeStyle = `hwb(${this.hue} 75% 0%)`;
            context.beginPath();
            context.arc(0, 0, r, 0, (0, _helpersJs.toRad)(360));
            context.closePath();
            context.stroke();
            context.restore();
        }
        // minor axes
        for(let i = 0; i < this.symOrder * this.divisions; i++){
            context.save();
            context.rotate((0, _helpersJs.toRad)(this.orientation) + (0, _helpersJs.toRad)(i * (360 / (this.symOrder * this.divisions))));
            context.strokeStyle = `hwb(${this.hue} 50% 0%)`;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(canvas.width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        // major axes
        for(let i = 0; i < this.symOrder; i++){
            context.save();
            context.rotate((0, _helpersJs.toRad)(this.orientation) + (0, _helpersJs.toRad)(i * (360 / this.symOrder)));
            context.strokeStyle = `hwb(${this.hue} 0% 0%)`;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(canvas.width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        context.restore();
    }
}
exports.default = Grid;

},{"./helpers.js":"luDvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"luDvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toRad", ()=>toRad);
function toRad(deg) {
    return deg / 180 * Math.PI;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"9GoLL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageUrls = require("./imageUrls");
var _imageUrlsDefault = parcelHelpers.interopDefault(_imageUrls);
var _helpers = require("./helpers");
class Primitive {
    constructor(id = 1){
        this.ready = false;
        this.url = (0, _imageUrlsDefault.default)[id];
        this.rawData = new Image();
        this.rawData.src = this.url;
        this.rawData.addEventListener("load", ()=>{
            this.imageData = new Image();
            this.imageData.src = processImage(this.rawData);
            this.imageData.addEventListener("load", ()=>{
                this.ready = true;
            });
        });
    }
    draw(canvas, { distance, angle, rotation, scale, order }) {
        if (!this.ready) return;
        const context = canvas.getContext("2d");
        for(let i = 0; i < order; ++i){
            let nextAngle = angle + i * 360 / order;
            context.save();
            context.translate(canvas.width / 2, canvas.height / 2); // translate to center
            context.rotate((0, _helpers.toRad)(-90 + nextAngle)); // rotate about the center (of the canvas)
            context.translate(distance * canvas.width / 2, 0); // move given distance away from the center
            context.rotate((0, _helpers.toRad)(90 + rotation)); // rotate about the new center (of the object)
            context.scale(scale, scale); // perform scaling
            context.translate(-this.imageData.width / 2, -this.imageData.height / 2); // offset so that image is drawn at center
            context.drawImage(this.imageData, 0, 0);
            context.restore();
        }
    }
}
function processImage(image) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for(let y = 0; y < imageData.height; ++y)for(let x = 0; x < imageData.width; ++x){
        let index = y * imageData.width * 4 + x * 4;
        let [r, g, b] = imageData.data.slice(index, index + 3);
        imageData.data[index + 3] = 255 - (r + g + b) / 3;
    }
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}
const primitives = {};
for(const id in 0, _imageUrlsDefault.default)primitives[id] = new Primitive(id);
exports.default = primitives;

},{"./imageUrls":"7WJg4","./helpers":"luDvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7WJg4":[function(require,module,exports) {
// Need to hard-code image URLs as simple strings because
// parcel won't understand anything else during compile time
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = imageURLs;

},{"c2eef0de058c740d":"ktZio","52a7a861fda9f30b":"9Fn32","9c18ef670372a950":"lntzS","9cb9b835c8aecf1e":"9oiBz","4e7685da53edcdb2":"1yZFC","7dfad34e076d902a":"6hxnK","e6b69140c90bc1ac":"3vWjy","8d0f2d7300b372dc":"5lvAO","b6486eecfa6dd0c":"1AkEW","9c484782eeeb396f":"5Fmvm","92e2dcdb599e0e86":"51gt3","d52baa4075fb2b3":"j7mVh","6062f456d781d0cb":"gPXyp","5ed07d784ed75992":"cy53r","1a62b5c043c2fad6":"8d9iE","99101774e61f2692":"zkT15","4861c5c899050042":"jdQW4","28a2665c49a6300":"gLqya","11b8569b0e6d4678":"53YdD","921e796bcaa4ce5d":"6TA6M","5b48a9e2d2dc19f7":"7nXkt","c9ef71e630295927":"l8JVV","8f33d966f5fbb7ac":"b113l","eb88667065e3cf00":"490db","36aafb8798b994a2":"9Hf0e","c02b5382e379fe35":"03c6w","a28f62b1ecb9edad":"bvPn8","d8294d38c186241f":"fbvQi","77d67807a0769154":"8gdpg","69a7031e495f7be0":"2XGnd","ca5bd563d3e72b8d":"aALF3","a811b18f1c0bb33a":"cESoG","88e40d88b661dd4b":"155B0","9bf4dae99eaef48c":"7T72P","4be596869190e41b":"1R46k","e73aafba07ea7b67":"lJEl9","94ff87e1c79456f":"bktKl","98420d767ed21275":"4XWSL","c7de6fb8246c75a9":"9aQVx","df791106f119ec62":"2szZH","9736b820bbd18588":"lyMtb","ad45e95ea0806af9":"45JRd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktZio":[function(require,module,exports) {
module.exports = require("e267610c9b1f5ea4").getBundleURL("7JE76") + "primitive_1.0d76476d.png" + "?" + Date.now();

},{"e267610c9b1f5ea4":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"9Fn32":[function(require,module,exports) {
module.exports = require("c898a46da2d73edb").getBundleURL("7JE76") + "primitive_2.4f2cd23b.png" + "?" + Date.now();

},{"c898a46da2d73edb":"lgJ39"}],"lntzS":[function(require,module,exports) {
module.exports = require("65770dcaf165d216").getBundleURL("7JE76") + "primitive_3.d5d63ab3.png" + "?" + Date.now();

},{"65770dcaf165d216":"lgJ39"}],"9oiBz":[function(require,module,exports) {
module.exports = require("9a7a7a266fb6ef67").getBundleURL("7JE76") + "primitive_4.a515d11f.png" + "?" + Date.now();

},{"9a7a7a266fb6ef67":"lgJ39"}],"1yZFC":[function(require,module,exports) {
module.exports = require("d22245b640558c5f").getBundleURL("7JE76") + "primitive_5.99ec732d.png" + "?" + Date.now();

},{"d22245b640558c5f":"lgJ39"}],"6hxnK":[function(require,module,exports) {
module.exports = require("53dc179bf4aaf6ce").getBundleURL("7JE76") + "primitive_6.d34d7944.png" + "?" + Date.now();

},{"53dc179bf4aaf6ce":"lgJ39"}],"3vWjy":[function(require,module,exports) {
module.exports = require("7af64e5fa92eba3d").getBundleURL("7JE76") + "primitive_7.a1168d2e.png" + "?" + Date.now();

},{"7af64e5fa92eba3d":"lgJ39"}],"5lvAO":[function(require,module,exports) {
module.exports = require("a532b73ffbbabd59").getBundleURL("7JE76") + "primitive_8.50d17dc5.png" + "?" + Date.now();

},{"a532b73ffbbabd59":"lgJ39"}],"1AkEW":[function(require,module,exports) {
module.exports = require("366e016f59b89097").getBundleURL("7JE76") + "primitive_9.13087161.png" + "?" + Date.now();

},{"366e016f59b89097":"lgJ39"}],"5Fmvm":[function(require,module,exports) {
module.exports = require("9aee9442130672b5").getBundleURL("7JE76") + "primitive_10.6714895f.png" + "?" + Date.now();

},{"9aee9442130672b5":"lgJ39"}],"51gt3":[function(require,module,exports) {
module.exports = require("b9daf99e43b3c09e").getBundleURL("7JE76") + "primitive_11.1cf009c2.png" + "?" + Date.now();

},{"b9daf99e43b3c09e":"lgJ39"}],"j7mVh":[function(require,module,exports) {
module.exports = require("3ed4e84c171d8752").getBundleURL("7JE76") + "primitive_12.f416b66f.png" + "?" + Date.now();

},{"3ed4e84c171d8752":"lgJ39"}],"gPXyp":[function(require,module,exports) {
module.exports = require("16880abfa61c8d28").getBundleURL("7JE76") + "primitive_13.36ab5b39.png" + "?" + Date.now();

},{"16880abfa61c8d28":"lgJ39"}],"cy53r":[function(require,module,exports) {
module.exports = require("46203c241584ad42").getBundleURL("7JE76") + "primitive_14.5629ec0d.png" + "?" + Date.now();

},{"46203c241584ad42":"lgJ39"}],"8d9iE":[function(require,module,exports) {
module.exports = require("ba06dfc818314b52").getBundleURL("7JE76") + "primitive_15.a346c158.png" + "?" + Date.now();

},{"ba06dfc818314b52":"lgJ39"}],"zkT15":[function(require,module,exports) {
module.exports = require("f7315754b1861a0b").getBundleURL("7JE76") + "primitive_16.45bbbbe2.png" + "?" + Date.now();

},{"f7315754b1861a0b":"lgJ39"}],"jdQW4":[function(require,module,exports) {
module.exports = require("4f48aa4b08e5985").getBundleURL("7JE76") + "primitive_17.029f35f3.png" + "?" + Date.now();

},{"4f48aa4b08e5985":"lgJ39"}],"gLqya":[function(require,module,exports) {
module.exports = require("d40b20b01207e54c").getBundleURL("7JE76") + "primitive_18.423d2641.png" + "?" + Date.now();

},{"d40b20b01207e54c":"lgJ39"}],"53YdD":[function(require,module,exports) {
module.exports = require("2c69c6ee89ae0c0e").getBundleURL("7JE76") + "primitive_19.92654cf8.png" + "?" + Date.now();

},{"2c69c6ee89ae0c0e":"lgJ39"}],"6TA6M":[function(require,module,exports) {
module.exports = require("1bddab87c1c51e36").getBundleURL("7JE76") + "primitive_20.f41994a2.png" + "?" + Date.now();

},{"1bddab87c1c51e36":"lgJ39"}],"7nXkt":[function(require,module,exports) {
module.exports = require("4114e651df7ea87e").getBundleURL("7JE76") + "primitive_21.22437a3c.png" + "?" + Date.now();

},{"4114e651df7ea87e":"lgJ39"}],"l8JVV":[function(require,module,exports) {
module.exports = require("93cf55e25ecf89a7").getBundleURL("7JE76") + "primitive_22.2c78e259.png" + "?" + Date.now();

},{"93cf55e25ecf89a7":"lgJ39"}],"b113l":[function(require,module,exports) {
module.exports = require("1998e8f81a24faea").getBundleURL("7JE76") + "primitive_23.268877f7.png" + "?" + Date.now();

},{"1998e8f81a24faea":"lgJ39"}],"490db":[function(require,module,exports) {
module.exports = require("1f468ca1e4186505").getBundleURL("7JE76") + "primitive_24.714eecd2.png" + "?" + Date.now();

},{"1f468ca1e4186505":"lgJ39"}],"9Hf0e":[function(require,module,exports) {
module.exports = require("84ab088afab5a2c9").getBundleURL("7JE76") + "primitive_25.df274f1f.png" + "?" + Date.now();

},{"84ab088afab5a2c9":"lgJ39"}],"03c6w":[function(require,module,exports) {
module.exports = require("876ecae6a69f4012").getBundleURL("7JE76") + "primitive_26.5e56619a.png" + "?" + Date.now();

},{"876ecae6a69f4012":"lgJ39"}],"bvPn8":[function(require,module,exports) {
module.exports = require("d51fcf1de5167d8e").getBundleURL("7JE76") + "primitive_27.14e1cb49.png" + "?" + Date.now();

},{"d51fcf1de5167d8e":"lgJ39"}],"fbvQi":[function(require,module,exports) {
module.exports = require("39e2440b188c61a2").getBundleURL("7JE76") + "primitive_28.9a895720.png" + "?" + Date.now();

},{"39e2440b188c61a2":"lgJ39"}],"8gdpg":[function(require,module,exports) {
module.exports = require("af493d9e1023ea4f").getBundleURL("7JE76") + "primitive_29.9ad269ac.png" + "?" + Date.now();

},{"af493d9e1023ea4f":"lgJ39"}],"2XGnd":[function(require,module,exports) {
module.exports = require("e9aad5e57a508dd3").getBundleURL("7JE76") + "primitive_30.514f3932.png" + "?" + Date.now();

},{"e9aad5e57a508dd3":"lgJ39"}],"aALF3":[function(require,module,exports) {
module.exports = require("97a0876e65d414a").getBundleURL("7JE76") + "primitive_31.033ce8af.png" + "?" + Date.now();

},{"97a0876e65d414a":"lgJ39"}],"cESoG":[function(require,module,exports) {
module.exports = require("f601cadbb7837264").getBundleURL("7JE76") + "primitive_32.7ca91c26.png" + "?" + Date.now();

},{"f601cadbb7837264":"lgJ39"}],"155B0":[function(require,module,exports) {
module.exports = require("9c69fefee004ad83").getBundleURL("7JE76") + "primitive_33.915eaeaf.png" + "?" + Date.now();

},{"9c69fefee004ad83":"lgJ39"}],"7T72P":[function(require,module,exports) {
module.exports = require("802196a98ff7caf5").getBundleURL("7JE76") + "primitive_34.ea5aec13.png" + "?" + Date.now();

},{"802196a98ff7caf5":"lgJ39"}],"1R46k":[function(require,module,exports) {
module.exports = require("56e0fcc97c244606").getBundleURL("7JE76") + "primitive_35.2d474a24.png" + "?" + Date.now();

},{"56e0fcc97c244606":"lgJ39"}],"lJEl9":[function(require,module,exports) {
module.exports = require("67a4bd9d9815c194").getBundleURL("7JE76") + "primitive_36.900d50af.png" + "?" + Date.now();

},{"67a4bd9d9815c194":"lgJ39"}],"bktKl":[function(require,module,exports) {
module.exports = require("335637ea35c999b").getBundleURL("7JE76") + "primitive_37.0e409ad1.png" + "?" + Date.now();

},{"335637ea35c999b":"lgJ39"}],"4XWSL":[function(require,module,exports) {
module.exports = require("a4632997302ad01c").getBundleURL("7JE76") + "primitive_39.e4807f02.png" + "?" + Date.now();

},{"a4632997302ad01c":"lgJ39"}],"9aQVx":[function(require,module,exports) {
module.exports = require("8e112188adacdc6d").getBundleURL("7JE76") + "primitive_40.b3f93179.png" + "?" + Date.now();

},{"8e112188adacdc6d":"lgJ39"}],"2szZH":[function(require,module,exports) {
module.exports = require("807787e665cccde5").getBundleURL("7JE76") + "primitive_41.7ae3ebea.png" + "?" + Date.now();

},{"807787e665cccde5":"lgJ39"}],"lyMtb":[function(require,module,exports) {
module.exports = require("56b13dff47e66366").getBundleURL("7JE76") + "primitive_42.a7f02f01.png" + "?" + Date.now();

},{"56b13dff47e66366":"lgJ39"}],"45JRd":[function(require,module,exports) {
module.exports = require("f088a40761b9750d").getBundleURL("7JE76") + "primitive_43.1d5b1894.png" + "?" + Date.now();

},{"f088a40761b9750d":"lgJ39"}],"2DgWL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "appState", ()=>appState);
parcelHelpers.export(exports, "mandalaState", ()=>mandalaState);
var _primitives = require("./primitives");
var _primitivesDefault = parcelHelpers.interopDefault(_primitives);
const appState = {
    selectedPrimitive: null
};
const mandalaState = {
    primitives: new Map(),
    add (symbol, primitive, { distance = 0.5, angle = 0, rotation = 0, scale = 0.1, order = 1 } = {}) {
        this.primitives.set(symbol, {
            primitive,
            props: {
                distance,
                angle,
                rotation,
                scale,
                order
            }
        });
    },
    remove (symbol) {
        this.primitives.delete(symbol);
    },
    update (symbol, { distance, angle, rotation, scale, order }) {
        const oldProps = this.primitives.get(symbol).props;
        const newProps = {};
        newProps.distance = distance === undefined ? oldProps.distance : distance;
        newProps.angle = angle === undefined ? oldProps.angle : angle;
        newProps.rotation = rotation === undefined ? oldProps.rotation : rotation;
        newProps.scale = scale === undefined ? oldProps.scale : scale;
        newProps.order = order === undefined ? oldProps.order : order;
        this.primitives.get(symbol).props = newProps;
    }
};

},{"./primitives":"9GoLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequiref046")

//# sourceMappingURL=index.b8fca702.js.map
