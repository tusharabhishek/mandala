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
var _uiJs = require("./ui.js");
var _helpersJs = require("./helpers.js");
/* Setup state */ let order = 8;
let invert = false;
let showIDs = false;
const parameters = [
    {
        name: "distance",
        min: "0",
        max: "1",
        step: "0.001",
        initial: "0.9"
    },
    {
        name: "angle",
        min: "-180",
        max: "180",
        step: "0.001",
        initial: "0"
    },
    {
        name: "rotation",
        min: "0",
        max: "360",
        step: "0.001",
        initial: "0"
    },
    {
        name: "scale",
        min: "0",
        max: "1",
        step: "0.001",
        initial: "0.25"
    },
    {
        name: "multiplicity",
        min: "0",
        max: "1024",
        step: "1",
        initial: "1"
    }
];
const [canvasWidth, canvasHeight] = [
    800,
    800
];
const mainCanvas = document.querySelector("#main-canvas");
[mainCanvas.width, mainCanvas.height] = [
    canvasWidth,
    canvasHeight
];
const selectionState = new (0, _stateJs.SelectionState)();
let mandalaState = new (0, _stateJs.MandalaState)();
const getID = (0, _helpersJs.createSerialIDGenerator)();
let grid = new (0, _gridJsDefault.default)();
grid.draw();
/* Image */ /* Clear the canvas */ function clear(canvas) {
    const context = canvas.getContext("2d");
    context.fillStyle = invert ? "black" : "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
/* Events */ /* Top-level drawing function */ let tick = 0;
function draw() {
    clear(mainCanvas, invert);
    grid.drawImageTo(mainCanvas);
    mandalaState.drawImageTo(mainCanvas, invert);
}
/* Setup UI when the page has loaded */ window.onload = function() {
    window.requestAnimationFrame(draw);
    _uiJs.setupGridOrderControl((gridOrder)=>{
        const answer = confirm("This will erase the existing mandala on the canvas. Do you want to continue?");
        if (answer) {
            const prevVisible = grid.visible;
            grid = new (0, _gridJsDefault.default)(gridOrder, prevVisible);
            order = gridOrder;
            mandalaState = new (0, _stateJs.MandalaState)(gridOrder);
            _uiJs.clearUsedPrimitives();
            _uiJs.showControls(false);
            requestAnimationFrame(draw);
        }
    });
    _uiJs.setupGridToggle((flag)=>{
        grid.visible = flag;
        requestAnimationFrame(draw);
    });
    _uiJs.setupSaveButton(()=>{
        const saveCanvas = document.createElement("canvas");
        saveCanvas.width = canvasWidth;
        saveCanvas.height = canvasHeight;
        mandalaState.drawImageTo(saveCanvas);
        saveCanvas.toBlob((blob)=>{
            const downloadLink = document.createElement("a");
            const downloadURL = URL.createObjectURL(blob);
            downloadLink.href = downloadURL;
            downloadLink.download = "mandala.png";
            downloadLink.classList.add("hidden");
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(downloadURL);
        });
    });
    _uiJs.setupSaveSerialButton(()=>{
        const blob = new Blob([
            mandalaState.getPrimitiveStateAsJSON()
        ], {
            type: "application/json",
            endings: "native"
        });
        const downloadLink = document.createElement("a");
        const downloadURL = URL.createObjectURL(blob);
        downloadLink.href = downloadURL;
        downloadLink.download = "mandala.json";
        downloadLink.classList.add("hidden");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadURL);
    });
    _uiJs.setupInvertControl((status)=>{
        invert = status;
        mandalaState.invertColor(status);
        requestAnimationFrame(draw);
    });
    _uiJs.setupIDCheckbox((status)=>{
        showIDs = status;
        mandalaState.showIDs(status);
        requestAnimationFrame(draw);
    });
    for(const id in 0, _primitivesJsDefault.default){
        function clickHandler() {
            const symbol = getID();
            mandalaState.addPrimitive(symbol, (0, _primitivesJsDefault.default)[id]);
            changeSelection(symbol);
            return symbol;
        }
        function selectHandler(symbol) {
            changeSelection(symbol);
        }
        function deleteHandler(symbol) {
            mandalaState.removePrimitive(symbol);
            changeSelection(null);
        }
        _uiJs.addPrimitiveButton((0, _primitivesJsDefault.default)[id], clickHandler, selectHandler, deleteHandler);
    }
    parameters.forEach(({ name, min, max, step, initial })=>{
        function inputHandler(value) {
            const props = {};
            props[name] = value;
            mandalaState.updatePrimitiveState(selectionState.getState(), props);
            _uiJs.updateControlsFor(name, value);
            requestAnimationFrame(draw);
        }
        _uiJs.setupControlsFor(name, {
            min,
            max,
            step,
            initial
        }, inputHandler);
    });
    _uiJs.setupFlipToggle((flag)=>{
        mandalaState.updatePrimitiveState(selectionState.getState(), {
            flip: flag
        });
        _uiJs.updateFlipToggle(flag);
        requestAnimationFrame(draw);
    });
    _uiJs.setupInvertToggle((flag)=>{
        mandalaState.updatePrimitiveState(selectionState.getState(), {
            invert: flag
        });
        _uiJs.updateInvertToggle(flag);
        requestAnimationFrame(draw);
    });
};
/* Helpers */ function changeSelection(symbol) {
    selectionState.changeState(symbol);
    _uiJs.showControls(symbol !== null);
    if (symbol !== null) {
        const props = mandalaState.getPrimitiveState(symbol).props;
        parameters.forEach((parameter)=>{
            _uiJs.updateControlsFor(parameter.name, props[parameter.name]);
        });
        _uiJs.updateFlipToggle(props.flip);
        _uiJs.updateInvertToggle(props.invert);
    }
    requestAnimationFrame(draw);
}

},{"./grid.js":"7Jpqy","./primitives.js":"9GoLL","./state.js":"2DgWL","./ui.js":"aaZ0V","./helpers.js":"luDvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Jpqy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("./helpers.js");
class Grid {
    constructor(symOrder = 8, visible = false, divisions = 12, radialInc = 10, orientation = 0, hue = 0, { canvasWidth = 800, canvasHeight = 800 } = {}){
        this.symOrder = symOrder; // order of symmetry
        this.divisions = divisions; // no. of divisions in a symmetric sector
        this.radialInc = radialInc; // difference in radii of concentric circles
        this.orientation = orientation; // orientation of the grid itself
        this.hue = hue; // base color of grid
        this.canvasWidth = canvasWidth; // dimensions of canvas that will have grid drawn on
        this.canvasHeight = canvasHeight;
        this.canvas = document.createElement("canvas");
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.visible = visible;
        this.draw();
    }
    toggle(state) {
        if (state === undefined) this.visible = !this.visible;
        else this.visible = state;
    }
    draw() {
        const context = this.canvas.getContext("2d");
        context.save();
        // move origin to center of canvas
        context.translate(this.canvas.width / 2, this.canvas.height / 2);
        // draw concentric circles
        for(let r = 0; r < this.canvas.width / 2; r += this.radialInc){
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
            context.rotate((0, _helpersJs.toRad)(this.orientation - 90) + (0, _helpersJs.toRad)(i * (360 / (this.symOrder * this.divisions))));
            context.strokeStyle = `hwb(${this.hue} 50% 0%)`;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(this.canvas.width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        // major axes
        for(let i = 0; i < this.symOrder; i++){
            context.save();
            context.rotate((0, _helpersJs.toRad)(this.orientation - 90) + (0, _helpersJs.toRad)(i * (360 / this.symOrder)));
            context.strokeStyle = `hwb(${this.hue} 0% 50%)`;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(this.canvas.width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        context.restore();
    }
    drawImageTo(canvas) {
        if (!this.visible) return;
        const context = canvas.getContext("2d");
        context.drawImage(this.canvas, 0, 0);
    }
}
exports.default = Grid;

},{"./helpers.js":"luDvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"luDvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toRad", ()=>toRad);
parcelHelpers.export(exports, "logicalXOR", ()=>logicalXOR);
parcelHelpers.export(exports, "createSerialIDGenerator", ()=>createSerialIDGenerator);
function toRad(deg) {
    return deg / 180 * Math.PI;
}
function logicalXOR(A, B) {
    return A && !B || !A && B;
}
function createSerialIDGenerator(start = 1) {
    let id = start;
    return function() {
        return id++;
    };
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
    constructor(id){
        this.ready = false;
        this.id = id;
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
    draw(canvas, { distance, angle, rotation, scale, order, multiplicity, flip, invert }, globalInvert, showIDs, symbol) {
        if (!this.ready) return;
        const context = canvas.getContext("2d");
        if ((0, _helpers.logicalXOR)(invert, globalInvert)) context.filter = "invert(1)";
        else context.filter = "none";
        context.clearRect(0, 0, canvas.width, canvas.height);
        const totalOrder = Math.max(order * multiplicity, 1);
        for(let i = 0; i < totalOrder; ++i){
            let nextAngle = angle + i * 360 / totalOrder;
            context.save();
            context.translate(canvas.width / 2, canvas.height / 2); // translate to center
            context.rotate((0, _helpers.toRad)(-90 + nextAngle)); // rotate about the center (of the canvas)
            context.translate(distance * canvas.width / 2, 0); // move given distance away from the center
            context.rotate((0, _helpers.toRad)(90 + rotation)); // rotate about the new center (of the object)
            if (flip) context.scale(-scale, scale);
            else context.scale(scale, scale);
            context.translate(-this.imageData.width / 2, -this.imageData.height / 2); // offset so that image is drawn at center
            context.drawImage(this.imageData, 0, 0);
            context.restore();
            if (showIDs) {
                context.font = "bold 16px sans-serif";
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillStyle = "red";
                context.shadowColor = "white";
                context.shadowBlur = 8;
                context.save();
                context.translate(canvas.width / 2, canvas.height / 2); // translate to center
                context.rotate((0, _helpers.toRad)(-90 + nextAngle)); // rotate about the center (of the canvas)
                context.translate(distance * canvas.width / 2, 0); // move given distance away from the center
                context.rotate((0, _helpers.toRad)(90 - nextAngle)); // rotate about the new center (of the object)
                context.fillText(symbol, 0, 0);
                context.restore();
                context.shadowBlur = 0;
            }
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
imageURLs[1] = new URL(require("7b5c8aec72525cee"));
imageURLs[2] = new URL(require("607ccc0d6f9c9abb"));
imageURLs[3] = new URL(require("1b32caa41e0f6577"));
imageURLs[4] = new URL(require("2d7d84a335812f1"));
imageURLs[5] = new URL(require("5799805c371b5d87"));
imageURLs[6] = new URL(require("573225369e2773d"));
imageURLs[7] = new URL(require("1ec50ab038cc735e"));
imageURLs[8] = new URL(require("4b9f4f0fc50194e0"));
imageURLs[9] = new URL(require("84a0aadb15bc67aa"));
imageURLs[10] = new URL(require("209300ede3fc1eed"));
imageURLs[11] = new URL(require("4a8265315ad7548"));
imageURLs[12] = new URL(require("468d63721d0dc4c4"));
imageURLs[13] = new URL(require("6a4a87679b6896dd"));
imageURLs[14] = new URL(require("65e64b9263edad05"));
imageURLs[15] = new URL(require("52e6f81be1a471c5"));
imageURLs[16] = new URL(require("fb9f4659004ff5d5"));
imageURLs[17] = new URL(require("d30d35e71a85209"));
imageURLs[18] = new URL(require("68b7e1bebf2097ae"));
imageURLs[19] = new URL(require("a685d680f598422b"));
imageURLs[20] = new URL(require("31000596897051de"));
imageURLs[21] = new URL(require("95752395992dddd6"));
imageURLs[22] = new URL(require("11e1a1f996ad7e2f"));
imageURLs[23] = new URL(require("532099c0c308747"));
imageURLs[24] = new URL(require("b3dc15c3f22de212"));
imageURLs[25] = new URL(require("a7346ac7f8e2cc03"));
imageURLs[26] = new URL(require("2829f0dbb2a2777d"));
imageURLs[27] = new URL(require("21d5815bd90aa016"));
imageURLs[28] = new URL(require("55788031b6a6375f"));
imageURLs[29] = new URL(require("885a4f5857f7f7ab"));
imageURLs[30] = new URL(require("d73aebd27393f307"));
imageURLs[31] = new URL(require("29677a704976100b"));
imageURLs[32] = new URL(require("6ad2f3a73ad99f72"));
imageURLs[33] = new URL(require("1e7735de066ba088"));
imageURLs[34] = new URL(require("565b47e862b7490b"));
imageURLs[35] = new URL(require("e894bf06f0f7eff0"));
imageURLs[36] = new URL(require("a4e82a569a826175"));
imageURLs[37] = new URL(require("345ac8a0644bb523"));
imageURLs[38] = new URL(require("93fc3d9d354e6d29"));
imageURLs[39] = new URL(require("7716d785ce14c8ab"));
imageURLs[40] = new URL(require("6ac9ba8795e143db"));
imageURLs[41] = new URL(require("922abc82b2b7e96"));
imageURLs[42] = new URL(require("fcace8deb1937e44"));
imageURLs[43] = new URL(require("7d86031227543e9a"));
imageURLs[44] = new URL(require("b2c861539e25799d"));
imageURLs[45] = new URL(require("be43a89cc5fd54dd"));
imageURLs[46] = new URL(require("8f3cff687936ea88"));
imageURLs[47] = new URL(require("5e6da069fd9f5bfb"));
imageURLs[48] = new URL(require("59abab5b8ddc20cf"));
imageURLs[49] = new URL(require("7d50eb0b0567ebe5"));
imageURLs[50] = new URL(require("f992c19d0b44969b"));
imageURLs[51] = new URL(require("506f5c8e3cda1ae9"));
imageURLs[52] = new URL(require("6f1425e38daddcd2"));
imageURLs[53] = new URL(require("95b5496854977a97"));
imageURLs[54] = new URL(require("2c861e4d984de5f4"));
imageURLs[55] = new URL(require("94924a1c3d9e026b"));
imageURLs[56] = new URL(require("52c0daa1072b057d"));
imageURLs[57] = new URL(require("3de92f22a2bcb400"));
imageURLs[58] = new URL(require("a0fc874eba68ac64"));
imageURLs[59] = new URL(require("94337850aab88138"));
imageURLs[60] = new URL(require("a45fb3ba009b2008"));
imageURLs[61] = new URL(require("54caf452294a8469"));
imageURLs[62] = new URL(require("885e4f058d714077"));
imageURLs[63] = new URL(require("5b4e830d37807187"));
imageURLs[64] = new URL(require("e4a33b80a5420176"));
imageURLs[65] = new URL(require("d8158b49ad8aedfb"));
imageURLs[66] = new URL(require("6a92cbf28e84c958"));
imageURLs[67] = new URL(require("7ff49150aacea561"));
imageURLs[68] = new URL(require("b382a06638f9aebe"));
imageURLs[69] = new URL(require("3c6022a2163b5c7"));
imageURLs[70] = new URL(require("d9e697e4afd54faa"));
imageURLs[71] = new URL(require("6fed1e9d81c47666"));
imageURLs[72] = new URL(require("920998b7669d477e"));
imageURLs[73] = new URL(require("834f792d9b829eab"));
imageURLs[74] = new URL(require("3eaad3ec6c786425"));
imageURLs[75] = new URL(require("3994b10cc0acf36f"));
imageURLs[76] = new URL(require("53fdf971d1aecf2d"));
imageURLs[77] = new URL(require("e92f7f900995c96b"));
imageURLs[78] = new URL(require("7a241e6a4b0008c4"));
imageURLs[79] = new URL(require("674da81f6164ba63"));
imageURLs[80] = new URL(require("8795b4d2f4424fc6"));
imageURLs[81] = new URL(require("c5551f44f03fb58c"));
imageURLs[82] = new URL(require("bd5d5a5a9e46911b"));
imageURLs[83] = new URL(require("3381657559ee58cb"));
imageURLs[84] = new URL(require("aead84aa3075fb9e"));
imageURLs[85] = new URL(require("df7ea6e72a001022"));
imageURLs[86] = new URL(require("a0c56fa4bd592df5"));
imageURLs[87] = new URL(require("db86e1b83fd2e867"));
imageURLs[88] = new URL(require("646dd6aa3e7baec7"));
imageURLs[89] = new URL(require("de8301d1469110c8"));
imageURLs[90] = new URL(require("28b823a4382966c2"));
imageURLs[91] = new URL(require("82710c054670a0be"));
imageURLs[92] = new URL(require("ffdbbe618b7d7ff7"));
imageURLs[93] = new URL(require("a3b674069d6ad29e"));
imageURLs[94] = new URL(require("62968e1769b1b799"));
imageURLs[95] = new URL(require("867b70692f378d44"));
imageURLs[96] = new URL(require("28b30b0a3e6f2a33"));
imageURLs[97] = new URL(require("91f6e08b1cb0a3ca"));
imageURLs[98] = new URL(require("b9922aaf7194ffd0"));
imageURLs[99] = new URL(require("edf13e035baa2608"));
imageURLs[100] = new URL(require("81fa6c02edc52e80"));
imageURLs[101] = new URL(require("66b639cab4122cb4"));
imageURLs[102] = new URL(require("3aa39433380e1f5f"));
imageURLs[103] = new URL(require("4c6f5485682c6913"));
imageURLs[104] = new URL(require("4786bf7064742c34"));
imageURLs[105] = new URL(require("bbe5f6b09bbe4704"));
imageURLs[106] = new URL(require("b0936c07c9988a10"));
imageURLs[107] = new URL(require("88a631e80de1136f"));
imageURLs[108] = new URL(require("1c8672376f85595e"));
imageURLs[109] = new URL(require("eec0d72e05df8a33"));
imageURLs[110] = new URL(require("7f8143bf2596c95a"));
imageURLs[111] = new URL(require("681de2fe4a7d923f"));
imageURLs[112] = new URL(require("ef06d35ce265ff23"));
exports.default = imageURLs;

},{"7b5c8aec72525cee":"lKxjm","607ccc0d6f9c9abb":"9T3Vb","1b32caa41e0f6577":"4HQoo","2d7d84a335812f1":"5YiBG","5799805c371b5d87":"k5ySQ","573225369e2773d":"fDoMT","1ec50ab038cc735e":"9KR83","4b9f4f0fc50194e0":"jWDdN","84a0aadb15bc67aa":"aVA6M","209300ede3fc1eed":"44CBM","4a8265315ad7548":"4cYMm","468d63721d0dc4c4":"aiWbD","6a4a87679b6896dd":"ae1BM","65e64b9263edad05":"bSCL0","52e6f81be1a471c5":"f1dRX","fb9f4659004ff5d5":"b90gY","d30d35e71a85209":"813Mq","68b7e1bebf2097ae":"jRzxg","a685d680f598422b":"c559Y","31000596897051de":"eMPIR","95752395992dddd6":"aqsBX","11e1a1f996ad7e2f":"5IhGw","532099c0c308747":"64z3Z","b3dc15c3f22de212":"cfEVk","a7346ac7f8e2cc03":"4Y2qt","2829f0dbb2a2777d":"giEEI","21d5815bd90aa016":"kz9MO","55788031b6a6375f":"92n2k","885a4f5857f7f7ab":"ejDyj","d73aebd27393f307":"eSAOk","29677a704976100b":"i5vLQ","6ad2f3a73ad99f72":"2UCH0","1e7735de066ba088":"uMKYV","565b47e862b7490b":"6iLbi","e894bf06f0f7eff0":"ggJuJ","a4e82a569a826175":"ggYro","345ac8a0644bb523":"311bi","93fc3d9d354e6d29":"lrDLL","7716d785ce14c8ab":"dHUja","6ac9ba8795e143db":"ietKq","922abc82b2b7e96":"3ZtWx","fcace8deb1937e44":"iMgqk","7d86031227543e9a":"fnfHD","b2c861539e25799d":"kKzE3","be43a89cc5fd54dd":"jwYgS","8f3cff687936ea88":"fnyHL","5e6da069fd9f5bfb":"2aHUI","59abab5b8ddc20cf":"882Su","7d50eb0b0567ebe5":"6dOJg","f992c19d0b44969b":"fX88e","506f5c8e3cda1ae9":"2clTZ","6f1425e38daddcd2":"2OufW","95b5496854977a97":"euTmI","2c861e4d984de5f4":"bc5nx","94924a1c3d9e026b":"jLhPb","52c0daa1072b057d":"kqFre","3de92f22a2bcb400":"dOJhs","a0fc874eba68ac64":"333SJ","94337850aab88138":"fvopj","a45fb3ba009b2008":"2SwWr","54caf452294a8469":"8JWUX","885e4f058d714077":"4fCkG","5b4e830d37807187":"42ROn","e4a33b80a5420176":"2fo8e","d8158b49ad8aedfb":"54cCw","6a92cbf28e84c958":"i2D09","7ff49150aacea561":"4uJKO","b382a06638f9aebe":"h9CXL","3c6022a2163b5c7":"d1xSb","d9e697e4afd54faa":"3l0SP","6fed1e9d81c47666":"dOlLM","920998b7669d477e":"ijHmo","834f792d9b829eab":"1F47Q","3eaad3ec6c786425":"3UiV4","3994b10cc0acf36f":"i2QIR","53fdf971d1aecf2d":"ezKa1","e92f7f900995c96b":"cmdAX","7a241e6a4b0008c4":"eEpoU","674da81f6164ba63":"9Kesr","8795b4d2f4424fc6":"kZH8D","c5551f44f03fb58c":"itVCV","bd5d5a5a9e46911b":"4wfFN","3381657559ee58cb":"8TcZT","aead84aa3075fb9e":"fY6fO","df7ea6e72a001022":"9BLds","a0c56fa4bd592df5":"iFJ12","db86e1b83fd2e867":"1q8W8","646dd6aa3e7baec7":"5Fnhr","de8301d1469110c8":"73ZsY","28b823a4382966c2":"lVjhQ","82710c054670a0be":"6F0IV","ffdbbe618b7d7ff7":"1WuBT","a3b674069d6ad29e":"53Fti","62968e1769b1b799":"jFs8w","867b70692f378d44":"b3GVW","28b30b0a3e6f2a33":"giX9P","91f6e08b1cb0a3ca":"cWO9a","b9922aaf7194ffd0":"aqvZv","edf13e035baa2608":"fg2az","81fa6c02edc52e80":"dsVMf","66b639cab4122cb4":"hU8Gm","3aa39433380e1f5f":"30pMd","4c6f5485682c6913":"gibFn","4786bf7064742c34":"5ERz2","bbe5f6b09bbe4704":"2iJ6n","b0936c07c9988a10":"aKg4i","88a631e80de1136f":"cEMCX","1c8672376f85595e":"lgyUm","eec0d72e05df8a33":"3GSXC","7f8143bf2596c95a":"bexko","681de2fe4a7d923f":"hcdrv","ef06d35ce265ff23":"katKz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKxjm":[function(require,module,exports) {
module.exports = require("2b0f06968feb34b6").getBundleURL("7JE76") + "primitives-1-100dpi-001.4b79e458.png" + "?" + Date.now();

},{"2b0f06968feb34b6":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"9T3Vb":[function(require,module,exports) {
module.exports = require("bfcf4f2334350f17").getBundleURL("7JE76") + "primitives-1-100dpi-002.1d041e32.png" + "?" + Date.now();

},{"bfcf4f2334350f17":"lgJ39"}],"4HQoo":[function(require,module,exports) {
module.exports = require("296f9ab3ffde2b92").getBundleURL("7JE76") + "primitives-1-100dpi-003.400e0634.png" + "?" + Date.now();

},{"296f9ab3ffde2b92":"lgJ39"}],"5YiBG":[function(require,module,exports) {
module.exports = require("4ee02be0d9b872e8").getBundleURL("7JE76") + "primitives-1-100dpi-004.64726c09.png" + "?" + Date.now();

},{"4ee02be0d9b872e8":"lgJ39"}],"k5ySQ":[function(require,module,exports) {
module.exports = require("fab69e9eb2960b4c").getBundleURL("7JE76") + "primitives-1-100dpi-005.1ac5cbbc.png" + "?" + Date.now();

},{"fab69e9eb2960b4c":"lgJ39"}],"fDoMT":[function(require,module,exports) {
module.exports = require("6b101c6019d2c2de").getBundleURL("7JE76") + "primitives-1-100dpi-006.aff3dfc8.png" + "?" + Date.now();

},{"6b101c6019d2c2de":"lgJ39"}],"9KR83":[function(require,module,exports) {
module.exports = require("84a8524b325d8e54").getBundleURL("7JE76") + "primitives-1-100dpi-007.b08dbd95.png" + "?" + Date.now();

},{"84a8524b325d8e54":"lgJ39"}],"jWDdN":[function(require,module,exports) {
module.exports = require("19b4b5bb9207154b").getBundleURL("7JE76") + "primitives-1-100dpi-008.a1c44251.png" + "?" + Date.now();

},{"19b4b5bb9207154b":"lgJ39"}],"aVA6M":[function(require,module,exports) {
module.exports = require("15f138ba824cda35").getBundleURL("7JE76") + "primitives-1-100dpi-009.3a17dec1.png" + "?" + Date.now();

},{"15f138ba824cda35":"lgJ39"}],"44CBM":[function(require,module,exports) {
module.exports = require("8042aed60d781eb2").getBundleURL("7JE76") + "primitives-1-100dpi-010.8ba75ad1.png" + "?" + Date.now();

},{"8042aed60d781eb2":"lgJ39"}],"4cYMm":[function(require,module,exports) {
module.exports = require("756c51aaa8f8b072").getBundleURL("7JE76") + "primitives-1-100dpi-011.75e1ee44.png" + "?" + Date.now();

},{"756c51aaa8f8b072":"lgJ39"}],"aiWbD":[function(require,module,exports) {
module.exports = require("9e1cfbe3b7c7ef17").getBundleURL("7JE76") + "primitives-1-100dpi-012.5c18ed26.png" + "?" + Date.now();

},{"9e1cfbe3b7c7ef17":"lgJ39"}],"ae1BM":[function(require,module,exports) {
module.exports = require("2225e1cf9d2b93b").getBundleURL("7JE76") + "primitives-1-100dpi-013.18e95c7a.png" + "?" + Date.now();

},{"2225e1cf9d2b93b":"lgJ39"}],"bSCL0":[function(require,module,exports) {
module.exports = require("f87888918c72234a").getBundleURL("7JE76") + "primitives-1-100dpi-014.ad07539a.png" + "?" + Date.now();

},{"f87888918c72234a":"lgJ39"}],"f1dRX":[function(require,module,exports) {
module.exports = require("1f752f6d5c43497a").getBundleURL("7JE76") + "primitives-1-100dpi-015.dba70fd0.png" + "?" + Date.now();

},{"1f752f6d5c43497a":"lgJ39"}],"b90gY":[function(require,module,exports) {
module.exports = require("3335e124c7f05603").getBundleURL("7JE76") + "primitives-1-100dpi-016.0b502220.png" + "?" + Date.now();

},{"3335e124c7f05603":"lgJ39"}],"813Mq":[function(require,module,exports) {
module.exports = require("b1c25f199ae5abd0").getBundleURL("7JE76") + "primitives-1-100dpi-017.8e1f3c77.png" + "?" + Date.now();

},{"b1c25f199ae5abd0":"lgJ39"}],"jRzxg":[function(require,module,exports) {
module.exports = require("a5d6be3734621cde").getBundleURL("7JE76") + "primitives-1-100dpi-018.79b4ef50.png" + "?" + Date.now();

},{"a5d6be3734621cde":"lgJ39"}],"c559Y":[function(require,module,exports) {
module.exports = require("7ea7802798b0be6d").getBundleURL("7JE76") + "primitives-1-100dpi-019.b3165e9c.png" + "?" + Date.now();

},{"7ea7802798b0be6d":"lgJ39"}],"eMPIR":[function(require,module,exports) {
module.exports = require("fa9e6a5baaed45e3").getBundleURL("7JE76") + "primitives-1-100dpi-020.facdedbe.png" + "?" + Date.now();

},{"fa9e6a5baaed45e3":"lgJ39"}],"aqsBX":[function(require,module,exports) {
module.exports = require("46a2773822fb05e8").getBundleURL("7JE76") + "primitives-1-100dpi-021.51baf1a6.png" + "?" + Date.now();

},{"46a2773822fb05e8":"lgJ39"}],"5IhGw":[function(require,module,exports) {
module.exports = require("66662588f4f1f0e3").getBundleURL("7JE76") + "primitives-1-100dpi-022.13cc3b29.png" + "?" + Date.now();

},{"66662588f4f1f0e3":"lgJ39"}],"64z3Z":[function(require,module,exports) {
module.exports = require("cd468325d67ec542").getBundleURL("7JE76") + "primitives-1-100dpi-023.2894ad87.png" + "?" + Date.now();

},{"cd468325d67ec542":"lgJ39"}],"cfEVk":[function(require,module,exports) {
module.exports = require("1eaca9d198a70abe").getBundleURL("7JE76") + "primitives-1-100dpi-024.c771b59b.png" + "?" + Date.now();

},{"1eaca9d198a70abe":"lgJ39"}],"4Y2qt":[function(require,module,exports) {
module.exports = require("86a77c8299278e3").getBundleURL("7JE76") + "primitives-1-100dpi-025.9708ca35.png" + "?" + Date.now();

},{"86a77c8299278e3":"lgJ39"}],"giEEI":[function(require,module,exports) {
module.exports = require("b9e3800e54712e29").getBundleURL("7JE76") + "primitives-1-100dpi-026.bb21e34f.png" + "?" + Date.now();

},{"b9e3800e54712e29":"lgJ39"}],"kz9MO":[function(require,module,exports) {
module.exports = require("20303ec0832ef595").getBundleURL("7JE76") + "primitives-1-100dpi-027.4cbc54cd.png" + "?" + Date.now();

},{"20303ec0832ef595":"lgJ39"}],"92n2k":[function(require,module,exports) {
module.exports = require("b749716af8b5eedf").getBundleURL("7JE76") + "primitives-1-100dpi-028.21cb5cb5.png" + "?" + Date.now();

},{"b749716af8b5eedf":"lgJ39"}],"ejDyj":[function(require,module,exports) {
module.exports = require("567dfc2ab79848c1").getBundleURL("7JE76") + "primitives-1-100dpi-029.43518c3b.png" + "?" + Date.now();

},{"567dfc2ab79848c1":"lgJ39"}],"eSAOk":[function(require,module,exports) {
module.exports = require("bce2b1bf06d3049f").getBundleURL("7JE76") + "primitives-1-100dpi-030.8b42740f.png" + "?" + Date.now();

},{"bce2b1bf06d3049f":"lgJ39"}],"i5vLQ":[function(require,module,exports) {
module.exports = require("e43e52a58699584b").getBundleURL("7JE76") + "primitives-1-100dpi-031.c8b62c0a.png" + "?" + Date.now();

},{"e43e52a58699584b":"lgJ39"}],"2UCH0":[function(require,module,exports) {
module.exports = require("fad8efbe0fff8f15").getBundleURL("7JE76") + "primitives-1-100dpi-032.1383aced.png" + "?" + Date.now();

},{"fad8efbe0fff8f15":"lgJ39"}],"uMKYV":[function(require,module,exports) {
module.exports = require("cc0f68b714f55d73").getBundleURL("7JE76") + "primitives-1-100dpi-033.9de1ddba.png" + "?" + Date.now();

},{"cc0f68b714f55d73":"lgJ39"}],"6iLbi":[function(require,module,exports) {
module.exports = require("acd675b2a384ef88").getBundleURL("7JE76") + "primitives-1-100dpi-034.34feefaf.png" + "?" + Date.now();

},{"acd675b2a384ef88":"lgJ39"}],"ggJuJ":[function(require,module,exports) {
module.exports = require("b66d4f9e71cad82").getBundleURL("7JE76") + "primitives-1-100dpi-035.8ee86f75.png" + "?" + Date.now();

},{"b66d4f9e71cad82":"lgJ39"}],"ggYro":[function(require,module,exports) {
module.exports = require("d122315e555ad0ff").getBundleURL("7JE76") + "primitives-1-100dpi-036.4ad25e93.png" + "?" + Date.now();

},{"d122315e555ad0ff":"lgJ39"}],"311bi":[function(require,module,exports) {
module.exports = require("3459887e67583deb").getBundleURL("7JE76") + "primitives-1-100dpi-037.c741a739.png" + "?" + Date.now();

},{"3459887e67583deb":"lgJ39"}],"lrDLL":[function(require,module,exports) {
module.exports = require("b004179a64c523a7").getBundleURL("7JE76") + "primitives-1-100dpi-038.f7a31126.png" + "?" + Date.now();

},{"b004179a64c523a7":"lgJ39"}],"dHUja":[function(require,module,exports) {
module.exports = require("338d77f3f1065f47").getBundleURL("7JE76") + "primitives-1-100dpi-039.813c61cc.png" + "?" + Date.now();

},{"338d77f3f1065f47":"lgJ39"}],"ietKq":[function(require,module,exports) {
module.exports = require("100db23ae946b6a2").getBundleURL("7JE76") + "primitives-1-100dpi-040.29d1f18e.png" + "?" + Date.now();

},{"100db23ae946b6a2":"lgJ39"}],"3ZtWx":[function(require,module,exports) {
module.exports = require("f6c6ddd04925914").getBundleURL("7JE76") + "primitives-1-100dpi-041.6532e273.png" + "?" + Date.now();

},{"f6c6ddd04925914":"lgJ39"}],"iMgqk":[function(require,module,exports) {
module.exports = require("564f036e0ce3b376").getBundleURL("7JE76") + "primitives-1-100dpi-042.e5f54cef.png" + "?" + Date.now();

},{"564f036e0ce3b376":"lgJ39"}],"fnfHD":[function(require,module,exports) {
module.exports = require("5f765d05db26422b").getBundleURL("7JE76") + "primitives-1-100dpi-043.43867db7.png" + "?" + Date.now();

},{"5f765d05db26422b":"lgJ39"}],"kKzE3":[function(require,module,exports) {
module.exports = require("da4073d583962deb").getBundleURL("7JE76") + "primitives-1-100dpi-044.3b3f36b1.png" + "?" + Date.now();

},{"da4073d583962deb":"lgJ39"}],"jwYgS":[function(require,module,exports) {
module.exports = require("e74ea65af8eaa04c").getBundleURL("7JE76") + "primitives-1-100dpi-045.07d46378.png" + "?" + Date.now();

},{"e74ea65af8eaa04c":"lgJ39"}],"fnyHL":[function(require,module,exports) {
module.exports = require("e68c1a7a83d98623").getBundleURL("7JE76") + "primitives-1-100dpi-046.c6c3dbdc.png" + "?" + Date.now();

},{"e68c1a7a83d98623":"lgJ39"}],"2aHUI":[function(require,module,exports) {
module.exports = require("e9e392da9151db12").getBundleURL("7JE76") + "primitives-1-100dpi-047.e10c8eef.png" + "?" + Date.now();

},{"e9e392da9151db12":"lgJ39"}],"882Su":[function(require,module,exports) {
module.exports = require("782b3c0f82c1fe10").getBundleURL("7JE76") + "primitives-1-100dpi-048.043ae1cc.png" + "?" + Date.now();

},{"782b3c0f82c1fe10":"lgJ39"}],"6dOJg":[function(require,module,exports) {
module.exports = require("7c12d1ea03ec2842").getBundleURL("7JE76") + "primitives-1-100dpi-049.f60b9dd1.png" + "?" + Date.now();

},{"7c12d1ea03ec2842":"lgJ39"}],"fX88e":[function(require,module,exports) {
module.exports = require("a31dc7418bbc8b87").getBundleURL("7JE76") + "primitives-1-100dpi-050.d0968d65.png" + "?" + Date.now();

},{"a31dc7418bbc8b87":"lgJ39"}],"2clTZ":[function(require,module,exports) {
module.exports = require("9491d0686180f7c9").getBundleURL("7JE76") + "primitives-1-100dpi-051.035b1fd9.png" + "?" + Date.now();

},{"9491d0686180f7c9":"lgJ39"}],"2OufW":[function(require,module,exports) {
module.exports = require("17580cbc2569c0e1").getBundleURL("7JE76") + "primitives-1-100dpi-052.b62e66a8.png" + "?" + Date.now();

},{"17580cbc2569c0e1":"lgJ39"}],"euTmI":[function(require,module,exports) {
module.exports = require("37f63f6cea4f404c").getBundleURL("7JE76") + "primitives-1-100dpi-053.3c99b05e.png" + "?" + Date.now();

},{"37f63f6cea4f404c":"lgJ39"}],"bc5nx":[function(require,module,exports) {
module.exports = require("d5a586b6c68bd947").getBundleURL("7JE76") + "primitives-1-100dpi-054.3e62f102.png" + "?" + Date.now();

},{"d5a586b6c68bd947":"lgJ39"}],"jLhPb":[function(require,module,exports) {
module.exports = require("22fe9f6eeea52260").getBundleURL("7JE76") + "primitives-1-100dpi-055.d1509b2b.png" + "?" + Date.now();

},{"22fe9f6eeea52260":"lgJ39"}],"kqFre":[function(require,module,exports) {
module.exports = require("8671b4bd35ba1ebc").getBundleURL("7JE76") + "primitives-1-100dpi-056.21e82c11.png" + "?" + Date.now();

},{"8671b4bd35ba1ebc":"lgJ39"}],"dOJhs":[function(require,module,exports) {
module.exports = require("4caf441d139e7e35").getBundleURL("7JE76") + "primitives-1-100dpi-057.a5e8fca4.png" + "?" + Date.now();

},{"4caf441d139e7e35":"lgJ39"}],"333SJ":[function(require,module,exports) {
module.exports = require("305701b0216baee9").getBundleURL("7JE76") + "primitives-1-100dpi-058.15f98abf.png" + "?" + Date.now();

},{"305701b0216baee9":"lgJ39"}],"fvopj":[function(require,module,exports) {
module.exports = require("245f3031546d8a57").getBundleURL("7JE76") + "primitives-1-100dpi-059.6b597636.png" + "?" + Date.now();

},{"245f3031546d8a57":"lgJ39"}],"2SwWr":[function(require,module,exports) {
module.exports = require("ecbdf2770828b14d").getBundleURL("7JE76") + "primitives-1-100dpi-060.4a379369.png" + "?" + Date.now();

},{"ecbdf2770828b14d":"lgJ39"}],"8JWUX":[function(require,module,exports) {
module.exports = require("b1e6f601968c423f").getBundleURL("7JE76") + "primitives-1-100dpi-061.9d2e4b5c.png" + "?" + Date.now();

},{"b1e6f601968c423f":"lgJ39"}],"4fCkG":[function(require,module,exports) {
module.exports = require("9192c5b327f96dd5").getBundleURL("7JE76") + "primitives-1-100dpi-062.855e14b9.png" + "?" + Date.now();

},{"9192c5b327f96dd5":"lgJ39"}],"42ROn":[function(require,module,exports) {
module.exports = require("ec5313838d838b66").getBundleURL("7JE76") + "primitives-1-100dpi-063.d77d129f.png" + "?" + Date.now();

},{"ec5313838d838b66":"lgJ39"}],"2fo8e":[function(require,module,exports) {
module.exports = require("b4cf027c882cc91a").getBundleURL("7JE76") + "primitives-1-100dpi-064.6f4cb0fc.png" + "?" + Date.now();

},{"b4cf027c882cc91a":"lgJ39"}],"54cCw":[function(require,module,exports) {
module.exports = require("e3197d9c71dc5267").getBundleURL("7JE76") + "primitives-1-100dpi-065.02d5dca0.png" + "?" + Date.now();

},{"e3197d9c71dc5267":"lgJ39"}],"i2D09":[function(require,module,exports) {
module.exports = require("9fe0758e4b9b9c04").getBundleURL("7JE76") + "primitives-1-100dpi-066.349e4916.png" + "?" + Date.now();

},{"9fe0758e4b9b9c04":"lgJ39"}],"4uJKO":[function(require,module,exports) {
module.exports = require("1c535a9c83b93e5b").getBundleURL("7JE76") + "primitives-1-100dpi-067.b277877e.png" + "?" + Date.now();

},{"1c535a9c83b93e5b":"lgJ39"}],"h9CXL":[function(require,module,exports) {
module.exports = require("ea8b11fbec50d4e5").getBundleURL("7JE76") + "primitives-1-100dpi-068.fa581153.png" + "?" + Date.now();

},{"ea8b11fbec50d4e5":"lgJ39"}],"d1xSb":[function(require,module,exports) {
module.exports = require("2cb06a763d8a996f").getBundleURL("7JE76") + "primitives-1-100dpi-069.65e09e44.png" + "?" + Date.now();

},{"2cb06a763d8a996f":"lgJ39"}],"3l0SP":[function(require,module,exports) {
module.exports = require("d5bff5eeb76f4604").getBundleURL("7JE76") + "primitives-1-100dpi-070.2f56dea7.png" + "?" + Date.now();

},{"d5bff5eeb76f4604":"lgJ39"}],"dOlLM":[function(require,module,exports) {
module.exports = require("63d67ab99b16d954").getBundleURL("7JE76") + "primitives-1-100dpi-071.390b53fb.png" + "?" + Date.now();

},{"63d67ab99b16d954":"lgJ39"}],"ijHmo":[function(require,module,exports) {
module.exports = require("1576cd4cb24d9f94").getBundleURL("7JE76") + "primitives-1-100dpi-072.a847f5f4.png" + "?" + Date.now();

},{"1576cd4cb24d9f94":"lgJ39"}],"1F47Q":[function(require,module,exports) {
module.exports = require("6c8f520a2a0bd6f6").getBundleURL("7JE76") + "primitives-1-100dpi-073.854ea820.png" + "?" + Date.now();

},{"6c8f520a2a0bd6f6":"lgJ39"}],"3UiV4":[function(require,module,exports) {
module.exports = require("be887ae90bf9a0a").getBundleURL("7JE76") + "primitives-1-100dpi-074.3a5b2cf2.png" + "?" + Date.now();

},{"be887ae90bf9a0a":"lgJ39"}],"i2QIR":[function(require,module,exports) {
module.exports = require("8d2b0471e7773fc1").getBundleURL("7JE76") + "primitives-1-100dpi-075.0093dade.png" + "?" + Date.now();

},{"8d2b0471e7773fc1":"lgJ39"}],"ezKa1":[function(require,module,exports) {
module.exports = require("4f86d01878dae1f5").getBundleURL("7JE76") + "primitives-1-100dpi-076.68c1a1a7.png" + "?" + Date.now();

},{"4f86d01878dae1f5":"lgJ39"}],"cmdAX":[function(require,module,exports) {
module.exports = require("59788d6b038803bc").getBundleURL("7JE76") + "primitives-1-100dpi-077.2adcdad0.png" + "?" + Date.now();

},{"59788d6b038803bc":"lgJ39"}],"eEpoU":[function(require,module,exports) {
module.exports = require("7e0a2046dd6013eb").getBundleURL("7JE76") + "primitives-1-100dpi-078.16aeaec1.png" + "?" + Date.now();

},{"7e0a2046dd6013eb":"lgJ39"}],"9Kesr":[function(require,module,exports) {
module.exports = require("b810778cf395c7cf").getBundleURL("7JE76") + "primitives-1-100dpi-079.e4378223.png" + "?" + Date.now();

},{"b810778cf395c7cf":"lgJ39"}],"kZH8D":[function(require,module,exports) {
module.exports = require("24d6a5fbc3a70e65").getBundleURL("7JE76") + "primitives-1-100dpi-080.f93a2012.png" + "?" + Date.now();

},{"24d6a5fbc3a70e65":"lgJ39"}],"itVCV":[function(require,module,exports) {
module.exports = require("77718771815359a5").getBundleURL("7JE76") + "primitives-1-100dpi-081.88220b7a.png" + "?" + Date.now();

},{"77718771815359a5":"lgJ39"}],"4wfFN":[function(require,module,exports) {
module.exports = require("609a9c1b59138478").getBundleURL("7JE76") + "primitives-1-100dpi-082.225008b6.png" + "?" + Date.now();

},{"609a9c1b59138478":"lgJ39"}],"8TcZT":[function(require,module,exports) {
module.exports = require("117ebe09b07f1f18").getBundleURL("7JE76") + "primitives-1-100dpi-083.fa5c82d0.png" + "?" + Date.now();

},{"117ebe09b07f1f18":"lgJ39"}],"fY6fO":[function(require,module,exports) {
module.exports = require("8c3c396a853aa7c").getBundleURL("7JE76") + "primitives-1-100dpi-084.47c8161a.png" + "?" + Date.now();

},{"8c3c396a853aa7c":"lgJ39"}],"9BLds":[function(require,module,exports) {
module.exports = require("2a2c021c3b7ee069").getBundleURL("7JE76") + "primitives-1-100dpi-085.462b1b90.png" + "?" + Date.now();

},{"2a2c021c3b7ee069":"lgJ39"}],"iFJ12":[function(require,module,exports) {
module.exports = require("db72d4b30cc2618f").getBundleURL("7JE76") + "primitives-1-100dpi-086.86b0f72c.png" + "?" + Date.now();

},{"db72d4b30cc2618f":"lgJ39"}],"1q8W8":[function(require,module,exports) {
module.exports = require("80722624002a5a08").getBundleURL("7JE76") + "primitives-1-100dpi-087.69cfd682.png" + "?" + Date.now();

},{"80722624002a5a08":"lgJ39"}],"5Fnhr":[function(require,module,exports) {
module.exports = require("dd9edaa47c2fe914").getBundleURL("7JE76") + "primitives-1-100dpi-088.a6cdb5a5.png" + "?" + Date.now();

},{"dd9edaa47c2fe914":"lgJ39"}],"73ZsY":[function(require,module,exports) {
module.exports = require("d8964ab2c1ea57ef").getBundleURL("7JE76") + "primitives-1-100dpi-089.608e9ed9.png" + "?" + Date.now();

},{"d8964ab2c1ea57ef":"lgJ39"}],"lVjhQ":[function(require,module,exports) {
module.exports = require("764acdc78a0c1e61").getBundleURL("7JE76") + "primitives-1-100dpi-090.cff67c97.png" + "?" + Date.now();

},{"764acdc78a0c1e61":"lgJ39"}],"6F0IV":[function(require,module,exports) {
module.exports = require("9599a686bf494267").getBundleURL("7JE76") + "primitives-1-100dpi-091.6e94cc48.png" + "?" + Date.now();

},{"9599a686bf494267":"lgJ39"}],"1WuBT":[function(require,module,exports) {
module.exports = require("3e7e6ab5ca9a780e").getBundleURL("7JE76") + "primitives-1-100dpi-092.9fa06b20.png" + "?" + Date.now();

},{"3e7e6ab5ca9a780e":"lgJ39"}],"53Fti":[function(require,module,exports) {
module.exports = require("32daf557e9eefbd3").getBundleURL("7JE76") + "primitives-1-100dpi-093.c47e5f1a.png" + "?" + Date.now();

},{"32daf557e9eefbd3":"lgJ39"}],"jFs8w":[function(require,module,exports) {
module.exports = require("974be7538f3ba046").getBundleURL("7JE76") + "primitives-1-100dpi-094.8a851754.png" + "?" + Date.now();

},{"974be7538f3ba046":"lgJ39"}],"b3GVW":[function(require,module,exports) {
module.exports = require("d1bad9c44e58c332").getBundleURL("7JE76") + "primitives-1-100dpi-095.efcc033d.png" + "?" + Date.now();

},{"d1bad9c44e58c332":"lgJ39"}],"giX9P":[function(require,module,exports) {
module.exports = require("fc2bbcff0e13b663").getBundleURL("7JE76") + "primitives-1-100dpi-096.a95d026d.png" + "?" + Date.now();

},{"fc2bbcff0e13b663":"lgJ39"}],"cWO9a":[function(require,module,exports) {
module.exports = require("b83111ac90473ae9").getBundleURL("7JE76") + "primitives-1-100dpi-097.5b3f9c39.png" + "?" + Date.now();

},{"b83111ac90473ae9":"lgJ39"}],"aqvZv":[function(require,module,exports) {
module.exports = require("14c5225f2ac306f3").getBundleURL("7JE76") + "primitives-1-100dpi-098.f883bbbd.png" + "?" + Date.now();

},{"14c5225f2ac306f3":"lgJ39"}],"fg2az":[function(require,module,exports) {
module.exports = require("4867fb853f4a6d32").getBundleURL("7JE76") + "primitives-1-100dpi-099.ab95fc45.png" + "?" + Date.now();

},{"4867fb853f4a6d32":"lgJ39"}],"dsVMf":[function(require,module,exports) {
module.exports = require("bb38925fdf0bffea").getBundleURL("7JE76") + "primitives-1-100dpi-100.02034bad.png" + "?" + Date.now();

},{"bb38925fdf0bffea":"lgJ39"}],"hU8Gm":[function(require,module,exports) {
module.exports = require("d9170e3434f5c7de").getBundleURL("7JE76") + "primitives-1-100dpi-101.73f5d550.png" + "?" + Date.now();

},{"d9170e3434f5c7de":"lgJ39"}],"30pMd":[function(require,module,exports) {
module.exports = require("1e535c3d6da8cf03").getBundleURL("7JE76") + "primitives-1-100dpi-102.a4a199da.png" + "?" + Date.now();

},{"1e535c3d6da8cf03":"lgJ39"}],"gibFn":[function(require,module,exports) {
module.exports = require("205a4a3ecec8084d").getBundleURL("7JE76") + "primitives-1-100dpi-103.6de4119c.png" + "?" + Date.now();

},{"205a4a3ecec8084d":"lgJ39"}],"5ERz2":[function(require,module,exports) {
module.exports = require("3238b3eb49391b19").getBundleURL("7JE76") + "primitives-1-100dpi-104.1ee28bcc.png" + "?" + Date.now();

},{"3238b3eb49391b19":"lgJ39"}],"2iJ6n":[function(require,module,exports) {
module.exports = require("61de3f6aa7a8afbb").getBundleURL("7JE76") + "primitives-1-100dpi-105.05f18d62.png" + "?" + Date.now();

},{"61de3f6aa7a8afbb":"lgJ39"}],"aKg4i":[function(require,module,exports) {
module.exports = require("b259e147b68b6d8b").getBundleURL("7JE76") + "primitives-1-100dpi-106.7bf5ce60.png" + "?" + Date.now();

},{"b259e147b68b6d8b":"lgJ39"}],"cEMCX":[function(require,module,exports) {
module.exports = require("fc2152de7e9c50ac").getBundleURL("7JE76") + "primitives-1-100dpi-107.11bfdb02.png" + "?" + Date.now();

},{"fc2152de7e9c50ac":"lgJ39"}],"lgyUm":[function(require,module,exports) {
module.exports = require("f74bd563f86ddb35").getBundleURL("7JE76") + "primitives-1-100dpi-108.2bec6690.png" + "?" + Date.now();

},{"f74bd563f86ddb35":"lgJ39"}],"3GSXC":[function(require,module,exports) {
module.exports = require("89a65b08193148ef").getBundleURL("7JE76") + "primitives-1-100dpi-109.4ce272ed.png" + "?" + Date.now();

},{"89a65b08193148ef":"lgJ39"}],"bexko":[function(require,module,exports) {
module.exports = require("c474d06925944069").getBundleURL("7JE76") + "primitives-1-100dpi-110.f628cb47.png" + "?" + Date.now();

},{"c474d06925944069":"lgJ39"}],"hcdrv":[function(require,module,exports) {
module.exports = require("df16f29c68dcad81").getBundleURL("7JE76") + "primitives-1-100dpi-111.80cdee96.png" + "?" + Date.now();

},{"df16f29c68dcad81":"lgJ39"}],"katKz":[function(require,module,exports) {
module.exports = require("3f134c90360ac54f").getBundleURL("7JE76") + "primitives-1-100dpi-112.98d3b266.png" + "?" + Date.now();

},{"3f134c90360ac54f":"lgJ39"}],"2DgWL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SelectionState", ()=>SelectionState);
parcelHelpers.export(exports, "MandalaState", ()=>MandalaState);
var _grid = require("./grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _helpers = require("./helpers");
class SelectionState {
    constructor(){
        this.selectedPrimitive = null;
    }
    getState() {
        return this.selectedPrimitive;
    }
    changeState(symbol) {
        this.selectedPrimitive = symbol;
    }
}
class MandalaState {
    constructor(order = 8, { canvasWidth = 800, canvasHeight = 800 } = {}){
        this.primitiveGroup = new Map();
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.mandalaCanvas = document.querySelector("canvas");
        this.mandalaCanvas.width = canvasWidth;
        this.mandalaCanvas.height = canvasHeight;
        this.symmetryOrder = order;
        this.globalInvert = false;
        this.IDsVisible = false;
    }
    addPrimitive(symbol, primitive, { distance = 0.9, angle = 0, rotation = 0, scale = 0.25, multiplicity = 1, flip = false, invert = false } = {}) {
        const offCanvas = document.createElement("canvas");
        offCanvas.width = this.canvasWidth;
        offCanvas.height = this.canvasHeight;
        this.primitiveGroup.set(symbol, {
            primitive,
            props: {
                distance,
                angle,
                rotation,
                scale,
                order: this.symmetryOrder,
                multiplicity,
                flip,
                invert,
                id: symbol
            },
            offCanvas
        });
        drawPrimitive(this.primitiveGroup, symbol, this.globalInvert, this.IDsVisible);
    }
    removePrimitive(symbol) {
        return this.primitiveGroup.delete(symbol);
    }
    getPrimitiveState(symbol) {
        return this.primitiveGroup.get(symbol);
    }
    updatePrimitiveState(symbol, { distance, angle, rotation, scale, multiplicity, flip, invert } = {}) {
        const oldProps = this.primitiveGroup.get(symbol).props;
        const newProps = {};
        newProps.distance = distance ?? oldProps.distance;
        newProps.angle = angle ?? oldProps.angle;
        newProps.rotation = rotation ?? oldProps.rotation;
        newProps.scale = scale ?? oldProps.scale;
        newProps.order = oldProps.order;
        newProps.multiplicity = multiplicity ?? oldProps.multiplicity;
        newProps.flip = flip ?? oldProps.flip;
        newProps.invert = invert ?? oldProps.invert;
        this.primitiveGroup.get(symbol).props = newProps;
        drawPrimitive(this.primitiveGroup, symbol, this.globalInvert, this.IDsVisible);
    }
    invertColor(status) {
        this.globalInvert = status;
        this.primitiveGroup.forEach((val, key)=>{
            drawPrimitive(this.primitiveGroup, key, this.globalInvert, this.IDsVisible);
        });
    }
    showIDs(status) {
        this.IDsVisible = status;
        this.primitiveGroup.forEach((val, key)=>{
            drawPrimitive(this.primitiveGroup, key, this.globalInvert, this.IDsVisible);
        });
    }
    reset() {
        this.primitiveGroup = new Map();
    }
    drawImageTo(canvas) {
        const context = canvas.getContext("2d");
        this.primitiveGroup.forEach(({ offCanvas })=>{
            context.drawImage(offCanvas, 0, 0);
        });
    }
    getPrimitiveStateAsJSON() {
        const usedPrimitives = Array.from(this.primitiveGroup.entries());
        const primitiveList = usedPrimitives.map(([key, { primitive, props }])=>{
            const obj = {
                id: primitive.id,
                polarRadius: props.distance,
                polarAngle: props.angle,
                selfRotation: props.rotation,
                size: props.scale,
                multiplicity: props.multiplicity,
                flip: props.flip,
                invert: (0, _helpers.logicalXOR)(props.invert, this.globalInvert)
            };
            return obj;
        });
        return JSON.stringify({
            order: this.symmetryOrder,
            primitiveList
        }, null, 2);
    }
}
function drawPrimitive(primitives, symbol, globalInvert, showIDs) {
    const { primitive, props, offCanvas } = primitives.get(symbol);
    primitive.draw(offCanvas, props, globalInvert, showIDs, symbol);
}
class AppState {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.grid = new (0, _gridDefault.default)();
        this.gridVisibility = false;
        this.invertCanvas = false;
        this.selection = null;
        this.primitiveGroup = new Map();
    }
    getSelection() {
        return this.selection;
    }
    changeSelection(symbol) {
        this.selection = symbol;
    }
    getInvertStatus() {
        return this.invertCanvas;
    }
    changeInvertStatus(status) {
        this.invertCanvas = status;
    }
    addPrimitive(symbol, primitive, props = {}) {
        const offCanvas = document.createElement("canvas");
        [offCanvas.width, offCanvas.height] = [
            this.canvasWidth,
            this.canvasHeight
        ];
        props.polarRadius ??= 0.9;
        props.polarAngle ??= 0;
        props.selfRotation ??= 0;
        props.size ??= 0.1;
        props.multiplicity ??= 1;
        props.flip ??= false;
        props.invertColor ??= false;
        this.primitiveGroup.set(symbol, {
            primitive,
            props,
            offCanvas
        });
        drawPrimitive(this.primitiveGroup, symbol);
    }
    updatePrimitive(symbol, props = {}) {
        const oldProps = this.primitiveGroup.get(symbol).props;
        props.polarRadius ??= oldProps.polarRadius;
        props.polarAngle ??= oldProps.polarAngle;
        props.selfRotation ??= oldProps.selfRotation;
        props.size ??= oldProps.size;
        props.multiplicity ??= oldProps.multiplicity;
        props.flip ??= oldProps.flip;
        props.invertColor ??= oldProps.invertColor;
        this.primitiveGroup.get(symbol).props = props;
        drawPrimitive(this.primitiveGroup, symbol);
    }
    removePrimitive(symbol) {
        return this.primitiveGroup.delete(symbol);
    }
    draw(canvas, invert) {
        const context = canvas.getContext("2d");
        this.primitiveGroup.forEach(({ offCanvas })=>{
            context.drawImage(offCanvas, 0, 0);
        });
    }
}

},{"./grid":"7Jpqy","./helpers":"luDvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aaZ0V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupGridToggle", ()=>setupGridToggle);
parcelHelpers.export(exports, "setupSaveButton", ()=>setupSaveButton);
parcelHelpers.export(exports, "addPrimitiveButton", ()=>addPrimitiveButton);
parcelHelpers.export(exports, "setupControlsFor", ()=>setupControlsFor);
parcelHelpers.export(exports, "setupFlipToggle", ()=>setupFlipToggle);
parcelHelpers.export(exports, "updateControlsFor", ()=>updateControlsFor);
parcelHelpers.export(exports, "updateFlipToggle", ()=>updateFlipToggle);
parcelHelpers.export(exports, "showControls", ()=>showControls);
parcelHelpers.export(exports, "setupInvertToggle", ()=>setupInvertToggle);
parcelHelpers.export(exports, "updateInvertToggle", ()=>updateInvertToggle);
parcelHelpers.export(exports, "setupGridOrderControl", ()=>setupGridOrderControl);
parcelHelpers.export(exports, "clearUsedPrimitives", ()=>clearUsedPrimitives);
parcelHelpers.export(exports, "setupInvertControl", ()=>setupInvertControl);
parcelHelpers.export(exports, "setupIDCheckbox", ()=>setupIDCheckbox);
parcelHelpers.export(exports, "setupSaveSerialButton", ()=>setupSaveSerialButton);
var _primitivesJs = require("./primitives.js");
var _primitivesJsDefault = parcelHelpers.interopDefault(_primitivesJs);
/* Misc Controls */ function setupGridToggle(handler) {
    const gridToggle = document.querySelector("#grid-toggle");
    gridToggle.checked = false;
    gridToggle.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function setupSaveButton(handler) {
    const saveButton = document.querySelector("#save-button");
    saveButton.addEventListener("click", (ev)=>{
        handler();
    });
}
function setupSaveSerialButton(handler) {
    const saveSerialButton = document.querySelector("#save-button-serial");
    saveSerialButton.addEventListener("click", (ev)=>{
        handler();
    });
}
function setupGridOrderControl(handler) {
    const orderButton = document.querySelector("#order-button");
    orderButton.addEventListener("click", (ev)=>{
        const orderSelect = document.querySelector("#grid-order");
        const order = +orderSelect.value;
        handler(order);
    });
}
function setupInvertControl(handler) {
    const invertToggle = document.querySelector("#invert-toggle");
    invertToggle.checked = false;
    invertToggle.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function setupIDCheckbox(handler) {
    const showIDToggle = document.querySelector("#checkbox-show-id");
    showIDToggle.checked = false;
    showIDToggle.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
/* Add Primitives */ function addPrimitiveButton(primitive, clickHandler, selectionHandler, deletionHandler) {
    const primitiveOptionBox = document.querySelector("#prim-option-box");
    const primitiveButton = document.createElement("button");
    const primitiveIcon = document.createElement("img");
    primitiveIcon.classList.add("image-icon");
    primitiveIcon.src = primitive.url;
    primitiveButton.appendChild(primitiveIcon);
    primitiveButton.classList.add("image-button");
    primitiveButton.addEventListener("click", ()=>{
        const symbol = clickHandler();
        addUsedPrimitive(primitive, symbol, selectionHandler, deletionHandler);
    });
    primitiveOptionBox.appendChild(primitiveButton);
    return primitiveButton;
}
/* Used Primitives */ function addUsedPrimitive(primitive, symbol, selectHandler, deleteHandler) {
    const usedPrimitivesBox = document.querySelector("#prim-used-box");
    const primitiveEntry = document.createElement("div");
    const primitiveIcon = document.createElement("img");
    primitiveIcon.classList.add("image-icon");
    primitiveIcon.src = primitive.url;
    primitiveEntry.appendChild(primitiveIcon);
    const symbolSpan = document.createElement("span");
    symbolSpan.textContent = `ID: ${symbol}`;
    primitiveEntry.appendChild(symbolSpan);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (ev)=>{
        ev.stopPropagation();
        deleteHandler(symbol);
        primitiveEntry.remove();
    });
    primitiveEntry.appendChild(deleteButton);
    primitiveEntry.classList.add("prim-entry");
    primitiveEntry.addEventListener("click", ()=>{
        selectHandler(symbol);
    });
    usedPrimitivesBox.appendChild(primitiveEntry);
}
function clearUsedPrimitives() {
    const usedPrimitivesBox = document.querySelector("#prim-used-box");
    const length = usedPrimitivesBox.children.length;
    for(let i = 0; i < length; i++)usedPrimitivesBox.children.item(0).remove();
}
/* Parameters */ function getControls() {
    const sliderControls = {
        distance: document.querySelector("#slider-distance"),
        angle: document.querySelector("#slider-angle"),
        rotation: document.querySelector("#slider-rotation"),
        scale: document.querySelector("#slider-scale"),
        multiplicity: document.querySelector("#slider-multiplicity")
    };
    const numberControls = {
        distance: document.querySelector("#number-distance"),
        angle: document.querySelector("#number-angle"),
        rotation: document.querySelector("#number-rotation"),
        scale: document.querySelector("#number-scale"),
        multiplicity: document.querySelector("#number-multiplicity")
    };
    return [
        sliderControls,
        numberControls
    ];
}
function setupControlsFor(parameter, { min, max, step, initial }, inputHandler) {
    const [sliderControls, numberControls] = getControls();
    [
        sliderControls,
        numberControls
    ].forEach((controls)=>{
        controls[parameter].min = min;
        controls[parameter].max = max;
        controls[parameter].step = step;
        controls[parameter].value = initial;
    });
    sliderControls[parameter].addEventListener("input", (ev)=>{
        inputHandler(+ev.target.value);
    });
    numberControls[parameter].addEventListener("input", (ev)=>{
        ev.target.classList.remove("invalid");
    });
    numberControls[parameter].addEventListener("change", (ev)=>{
        const value = parameter == "multiplicity" ? Number.parseInt(ev.target.value) : Number.parseFloat(ev.target.value);
        if (Number.isFinite(value) && value >= min & value <= max) inputHandler(value);
        else ev.target.classList.add("invalid");
    });
}
function setupFlipToggle(handler) {
    const flipCheckbox = document.querySelector("#checkbox-flip");
    flipCheckbox.checked = false;
    flipCheckbox.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function showControls(flag = true) {
    const controlSet = document.querySelector("#fieldset-controls");
    if (flag) controlSet.classList.remove("hidden");
    else controlSet.classList.add("hidden");
}
function updateControlsFor(parameterName, newValue) {
    getControls().forEach((controls)=>{
        controls[parameterName].value = newValue;
    });
}
function updateFlipToggle(flag) {
    const flipCheckbox = document.querySelector("#checkbox-flip");
    flipCheckbox.checked = flag;
}
function setupInvertToggle(handler) {
    const invertCheckbox = document.querySelector("#checkbox-invert");
    invertCheckbox.checked = false;
    invertCheckbox.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function updateInvertToggle(flag) {
    const invertCheckbox = document.querySelector("#checkbox-invert");
    invertCheckbox.checked = flag;
}

},{"./primitives.js":"9GoLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequiref046")

//# sourceMappingURL=index.b8fca702.js.map
