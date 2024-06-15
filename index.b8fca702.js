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
/* Setup state */ const order = 8;
const parameters = [
    {
        name: "distance",
        min: "0",
        max: "1",
        step: "0.001",
        initial: "0.5"
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
        initial: "0.1"
    },
    {
        name: "multiplicity",
        min: "1",
        max: "24",
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
const mandalaState = new (0, _stateJs.MandalaState)();
const grid = new (0, _gridJsDefault.default)();
grid.draw();
/* Image */ /* Clear the canvas */ function clear(canvas) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
/* Events */ /* Top-level drawing function */ let tick = 0;
function draw() {
    clear(mainCanvas);
    grid.drawImageTo(mainCanvas, 0, 0);
    mandalaState.drawImageTo(mainCanvas);
}
/* Setup UI when the page has loaded */ window.onload = function() {
    window.requestAnimationFrame(draw);
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
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = "mandala.png";
            downloadLink.classList.add("hidden");
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });
    for(const id in 0, _primitivesJsDefault.default){
        function clickHandler() {
            const symbol = Symbol();
            mandalaState.addPrimitive(symbol, (0, _primitivesJsDefault.default)[id], {
                order
            });
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
    }
    requestAnimationFrame(draw);
}

},{"./grid.js":"7Jpqy","./primitives.js":"9GoLL","./state.js":"2DgWL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./ui.js":"aaZ0V"}],"7Jpqy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("./helpers.js");
class Grid {
    constructor(symOrder = 8, divisions = 12, radialInc = 10, orientation = 0, hue = 0, { canvasWidth = 800, canvasHeight = 800 } = {}){
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
        this.visible = false;
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
            context.rotate((0, _helpersJs.toRad)(this.orientation) + (0, _helpersJs.toRad)(i * (360 / (this.symOrder * this.divisions))));
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
            context.rotate((0, _helpersJs.toRad)(this.orientation) + (0, _helpersJs.toRad)(i * (360 / this.symOrder)));
            context.strokeStyle = `hwb(${this.hue} 0% 0%)`;
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
    constructor(id){
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
    draw(canvas, { distance, angle, rotation, scale, order, multiplicity, flip }) {
        if (!this.ready) return;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        const totalOrder = order * multiplicity;
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
console.log((0, _imageUrlsDefault.default));
for(const id in 0, _imageUrlsDefault.default){
    primitives[id] = new Primitive(id);
    console.log(id);
}
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
imageURLs["primitives-1-100dpi-001"] = new URL(require("7b5c8aec72525cee"));
imageURLs["primitives-1-100dpi-002"] = new URL(require("607ccc0d6f9c9abb"));
imageURLs["primitives-1-100dpi-003"] = new URL(require("1b32caa41e0f6577"));
imageURLs["primitives-1-100dpi-004"] = new URL(require("2d7d84a335812f1"));
imageURLs["primitives-1-100dpi-005"] = new URL(require("5799805c371b5d87"));
imageURLs["primitives-1-100dpi-006"] = new URL(require("573225369e2773d"));
imageURLs["primitives-1-100dpi-007"] = new URL(require("1ec50ab038cc735e"));
imageURLs["primitives-1-100dpi-008"] = new URL(require("4b9f4f0fc50194e0"));
imageURLs["primitives-1-100dpi-009"] = new URL(require("84a0aadb15bc67aa"));
imageURLs["primitives-1-100dpi-010"] = new URL(require("209300ede3fc1eed"));
imageURLs["primitives-1-100dpi-011"] = new URL(require("4a8265315ad7548"));
imageURLs["primitives-1-100dpi-012"] = new URL(require("468d63721d0dc4c4"));
imageURLs["primitives-1-100dpi-013"] = new URL(require("6a4a87679b6896dd"));
imageURLs["primitives-1-100dpi-014"] = new URL(require("65e64b9263edad05"));
imageURLs["primitives-1-100dpi-015"] = new URL(require("52e6f81be1a471c5"));
imageURLs["primitives-1-100dpi-016"] = new URL(require("fb9f4659004ff5d5"));
imageURLs["primitives-1-100dpi-017"] = new URL(require("d30d35e71a85209"));
imageURLs["primitives-1-100dpi-018"] = new URL(require("68b7e1bebf2097ae"));
imageURLs["primitives-1-100dpi-019"] = new URL(require("a685d680f598422b"));
imageURLs["primitives-1-100dpi-020"] = new URL(require("31000596897051de"));
imageURLs["primitives-1-100dpi-021"] = new URL(require("95752395992dddd6"));
imageURLs["primitives-1-100dpi-022"] = new URL(require("11e1a1f996ad7e2f"));
imageURLs["primitives-1-100dpi-023"] = new URL(require("532099c0c308747"));
imageURLs["primitives-1-100dpi-024"] = new URL(require("b3dc15c3f22de212"));
imageURLs["primitives-1-100dpi-025"] = new URL(require("a7346ac7f8e2cc03"));
imageURLs["primitives-1-100dpi-026"] = new URL(require("2829f0dbb2a2777d"));
imageURLs["primitives-1-100dpi-027"] = new URL(require("21d5815bd90aa016"));
imageURLs["primitives-1-100dpi-028"] = new URL(require("55788031b6a6375f"));
imageURLs["primitives-1-100dpi-029"] = new URL(require("885a4f5857f7f7ab"));
imageURLs["primitives-1-100dpi-030"] = new URL(require("d73aebd27393f307"));
imageURLs["primitives-1-100dpi-031"] = new URL(require("29677a704976100b"));
imageURLs["primitives-1-100dpi-032"] = new URL(require("6ad2f3a73ad99f72"));
imageURLs["primitives-1-100dpi-033"] = new URL(require("1e7735de066ba088"));
imageURLs["primitives-1-100dpi-034"] = new URL(require("565b47e862b7490b"));
imageURLs["primitives-1-100dpi-035"] = new URL(require("e894bf06f0f7eff0"));
imageURLs["primitives-1-100dpi-036"] = new URL(require("a4e82a569a826175"));
imageURLs["primitives-1-100dpi-037"] = new URL(require("345ac8a0644bb523"));
imageURLs["primitives-1-100dpi-038"] = new URL(require("93fc3d9d354e6d29"));
imageURLs["primitives-1-100dpi-039"] = new URL(require("7716d785ce14c8ab"));
imageURLs["primitives-1-100dpi-040"] = new URL(require("6ac9ba8795e143db"));
imageURLs["primitives-1-100dpi-041"] = new URL(require("922abc82b2b7e96"));
imageURLs["primitives-1-100dpi-042"] = new URL(require("fcace8deb1937e44"));
imageURLs["primitives-1-100dpi-043"] = new URL(require("7d86031227543e9a"));
imageURLs["primitives-1-100dpi-044"] = new URL(require("b2c861539e25799d"));
imageURLs["primitives-1-100dpi-045"] = new URL(require("be43a89cc5fd54dd"));
imageURLs["primitives-1-100dpi-046"] = new URL(require("8f3cff687936ea88"));
imageURLs["primitives-1-100dpi-047"] = new URL(require("5e6da069fd9f5bfb"));
imageURLs["primitives-1-100dpi-048"] = new URL(require("59abab5b8ddc20cf"));
imageURLs["primitives-1-100dpi-049"] = new URL(require("7d50eb0b0567ebe5"));
imageURLs["primitives-1-100dpi-050"] = new URL(require("f992c19d0b44969b"));
imageURLs["primitives-1-100dpi-051"] = new URL(require("506f5c8e3cda1ae9"));
imageURLs["primitives-1-100dpi-052"] = new URL(require("6f1425e38daddcd2"));
imageURLs["primitives-1-100dpi-053"] = new URL(require("95b5496854977a97"));
imageURLs["primitives-1-100dpi-054"] = new URL(require("2c861e4d984de5f4"));
imageURLs["primitives-1-100dpi-055"] = new URL(require("94924a1c3d9e026b"));
imageURLs["primitives-1-100dpi-056"] = new URL(require("52c0daa1072b057d"));
imageURLs["primitives-1-100dpi-057"] = new URL(require("3de92f22a2bcb400"));
imageURLs["primitives-1-100dpi-058"] = new URL(require("a0fc874eba68ac64"));
imageURLs["primitives-1-100dpi-059"] = new URL(require("94337850aab88138"));
imageURLs["primitives-1-100dpi-060"] = new URL(require("a45fb3ba009b2008"));
imageURLs["primitives-1-100dpi-061"] = new URL(require("54caf452294a8469"));
imageURLs["primitives-1-100dpi-062"] = new URL(require("885e4f058d714077"));
imageURLs["primitives-1-100dpi-063"] = new URL(require("5b4e830d37807187"));
imageURLs["primitives-1-100dpi-064"] = new URL(require("e4a33b80a5420176"));
imageURLs["primitives-1-100dpi-065"] = new URL(require("d8158b49ad8aedfb"));
imageURLs["primitives-1-100dpi-066"] = new URL(require("6a92cbf28e84c958"));
imageURLs["primitives-1-100dpi-067"] = new URL(require("7ff49150aacea561"));
imageURLs["primitives-1-100dpi-068"] = new URL(require("b382a06638f9aebe"));
imageURLs["primitives-1-100dpi-069"] = new URL(require("3c6022a2163b5c7"));
imageURLs["primitives-1-100dpi-070"] = new URL(require("d9e697e4afd54faa"));
imageURLs["primitives-1-100dpi-071"] = new URL(require("6fed1e9d81c47666"));
imageURLs["primitives-1-100dpi-072"] = new URL(require("920998b7669d477e"));
imageURLs["primitives-1-100dpi-073"] = new URL(require("834f792d9b829eab"));
imageURLs["primitives-1-100dpi-074"] = new URL(require("3eaad3ec6c786425"));
imageURLs["primitives-1-100dpi-075"] = new URL(require("3994b10cc0acf36f"));
imageURLs["primitives-1-100dpi-076"] = new URL(require("53fdf971d1aecf2d"));
imageURLs["primitives-1-100dpi-077"] = new URL(require("e92f7f900995c96b"));
imageURLs["primitives-1-100dpi-078"] = new URL(require("7a241e6a4b0008c4"));
imageURLs["primitives-1-100dpi-079"] = new URL(require("674da81f6164ba63"));
imageURLs["primitives-1-100dpi-080"] = new URL(require("8795b4d2f4424fc6"));
imageURLs["primitives-1-100dpi-081"] = new URL(require("c5551f44f03fb58c"));
imageURLs["primitives-1-100dpi-082"] = new URL(require("bd5d5a5a9e46911b"));
imageURLs["primitives-1-100dpi-083"] = new URL(require("3381657559ee58cb"));
imageURLs["primitives-1-100dpi-084"] = new URL(require("aead84aa3075fb9e"));
imageURLs["primitives-1-100dpi-085"] = new URL(require("df7ea6e72a001022"));
imageURLs["primitives-1-100dpi-086"] = new URL(require("a0c56fa4bd592df5"));
imageURLs["primitives-1-100dpi-087"] = new URL(require("db86e1b83fd2e867"));
imageURLs["primitives-1-100dpi-088"] = new URL(require("646dd6aa3e7baec7"));
imageURLs["primitives-1-100dpi-089"] = new URL(require("de8301d1469110c8"));
imageURLs["primitives-1-100dpi-090"] = new URL(require("28b823a4382966c2"));
imageURLs["primitives-1-100dpi-091"] = new URL(require("82710c054670a0be"));
imageURLs["primitives-1-100dpi-092"] = new URL(require("ffdbbe618b7d7ff7"));
imageURLs["primitives-1-100dpi-093"] = new URL(require("a3b674069d6ad29e"));
imageURLs["primitives-1-100dpi-094"] = new URL(require("62968e1769b1b799"));
imageURLs["primitives-1-100dpi-095"] = new URL(require("867b70692f378d44"));
imageURLs["primitives-1-100dpi-096"] = new URL(require("28b30b0a3e6f2a33"));
imageURLs["primitives-1-100dpi-097"] = new URL(require("91f6e08b1cb0a3ca"));
imageURLs["primitives-1-100dpi-098"] = new URL(require("b9922aaf7194ffd0"));
imageURLs["primitives-1-100dpi-099"] = new URL(require("edf13e035baa2608"));
imageURLs["primitives-1-100dpi-100"] = new URL(require("81fa6c02edc52e80"));
imageURLs["primitives-1-100dpi-101"] = new URL(require("66b639cab4122cb4"));
imageURLs["primitives-1-100dpi-102"] = new URL(require("3aa39433380e1f5f"));
imageURLs["primitives-1-100dpi-103"] = new URL(require("4c6f5485682c6913"));
imageURLs["primitives-1-100dpi-104"] = new URL(require("4786bf7064742c34"));
imageURLs["primitives-1-100dpi-105"] = new URL(require("bbe5f6b09bbe4704"));
imageURLs["primitives-1-100dpi-106"] = new URL(require("b0936c07c9988a10"));
imageURLs["primitives-1-100dpi-107"] = new URL(require("88a631e80de1136f"));
imageURLs["primitives-1-100dpi-108"] = new URL(require("1c8672376f85595e"));
imageURLs["primitives-1-100dpi-109"] = new URL(require("eec0d72e05df8a33"));
imageURLs["primitives-1-100dpi-110"] = new URL(require("7f8143bf2596c95a"));
imageURLs["primitives-1-100dpi-111"] = new URL(require("681de2fe4a7d923f"));
imageURLs["primitives-1-100dpi-112"] = new URL(require("ef06d35ce265ff23"));
imageURLs["primitives-1-200dpi-001"] = new URL(require("30c6de8fa1fecc0b"));
imageURLs["primitives-1-200dpi-002"] = new URL(require("bafe541ec365225c"));
imageURLs["primitives-1-200dpi-003"] = new URL(require("cff05e59db924060"));
imageURLs["primitives-1-200dpi-004"] = new URL(require("3a8cc801f8c1d2ee"));
imageURLs["primitives-1-200dpi-005"] = new URL(require("7ecbaaf7194f0045"));
imageURLs["primitives-1-200dpi-006"] = new URL(require("ce26ae55a6744c3e"));
imageURLs["primitives-1-200dpi-007"] = new URL(require("2431a175942b6667"));
imageURLs["primitives-1-200dpi-008"] = new URL(require("a9ff8fceb3524652"));
imageURLs["primitives-1-200dpi-009"] = new URL(require("f60b68308f4b2bcd"));
imageURLs["primitives-1-200dpi-010"] = new URL(require("100aff03ec986ad5"));
imageURLs["primitives-1-200dpi-011"] = new URL(require("50aa393a8745a07f"));
imageURLs["primitives-1-200dpi-012"] = new URL(require("c2d89054b403e252"));
imageURLs["primitives-1-200dpi-013"] = new URL(require("722c92207506dba"));
imageURLs["primitives-1-200dpi-014"] = new URL(require("28d2a7906c6eed94"));
imageURLs["primitives-1-200dpi-015"] = new URL(require("cdf9f93266e742e9"));
imageURLs["primitives-1-200dpi-016"] = new URL(require("acb302a5f4ac94a3"));
imageURLs["primitives-1-200dpi-017"] = new URL(require("2ebfc16fc029c8a9"));
imageURLs["primitives-1-200dpi-018"] = new URL(require("f2aa3c03fe0e38b8"));
imageURLs["primitives-1-200dpi-019"] = new URL(require("cf9aa864210a4260"));
imageURLs["primitives-1-200dpi-020"] = new URL(require("985379eceb35b227"));
imageURLs["primitives-1-200dpi-021"] = new URL(require("bc899fbcf0f6e17b"));
imageURLs["primitives-1-200dpi-022"] = new URL(require("a643d9403f702d57"));
imageURLs["primitives-1-200dpi-023"] = new URL(require("ed2db28b7030edbf"));
imageURLs["primitives-1-200dpi-024"] = new URL(require("5b41449549c79c75"));
imageURLs["primitives-1-200dpi-025"] = new URL(require("c71a410daf3af573"));
imageURLs["primitives-1-200dpi-026"] = new URL(require("cddab6519a804e71"));
imageURLs["primitives-1-200dpi-027"] = new URL(require("b6052f627b473778"));
imageURLs["primitives-1-200dpi-028"] = new URL(require("bde3b85fb9e0502d"));
imageURLs["primitives-1-200dpi-029"] = new URL(require("cf36f44df6af09a0"));
imageURLs["primitives-1-200dpi-030"] = new URL(require("4374ac740a453988"));
imageURLs["primitives-1-200dpi-031"] = new URL(require("8d0cedf73e7c307b"));
imageURLs["primitives-1-200dpi-032"] = new URL(require("97824d66207b692"));
imageURLs["primitives-1-200dpi-033"] = new URL(require("5025bbc6d623a81c"));
imageURLs["primitives-1-200dpi-034"] = new URL(require("a4c75c71e96d7469"));
imageURLs["primitives-1-200dpi-035"] = new URL(require("a143e519aac4d6d"));
imageURLs["primitives-1-200dpi-036"] = new URL(require("f83d98da60fa2c8"));
imageURLs["primitives-1-200dpi-037"] = new URL(require("2cea9fc3b1b789d7"));
imageURLs["primitives-1-200dpi-038"] = new URL(require("16f7e1b0f8bc093a"));
imageURLs["primitives-1-200dpi-039"] = new URL(require("d814e76f8316a997"));
imageURLs["primitives-1-200dpi-040"] = new URL(require("af8f5a26c1cac6be"));
imageURLs["primitives-1-200dpi-041"] = new URL(require("6fd3ecd777fdf28a"));
imageURLs["primitives-1-200dpi-042"] = new URL(require("729df83a0ccdf708"));
imageURLs["primitives-1-200dpi-043"] = new URL(require("6ede79164ed9da91"));
imageURLs["primitives-1-200dpi-044"] = new URL(require("ae19d92e06b30f6f"));
imageURLs["primitives-1-200dpi-045"] = new URL(require("f681b36bc40d6185"));
imageURLs["primitives-1-200dpi-046"] = new URL(require("66fc0b8c97d7ce17"));
imageURLs["primitives-1-200dpi-047"] = new URL(require("c2b9faff52f7447d"));
imageURLs["primitives-1-200dpi-048"] = new URL(require("763cdd4072dc1291"));
imageURLs["primitives-1-200dpi-049"] = new URL(require("efc8b2c39b86b990"));
imageURLs["primitives-1-200dpi-050"] = new URL(require("ac0b474a504e368"));
imageURLs["primitives-1-200dpi-051"] = new URL(require("46a3873f4dcb964b"));
imageURLs["primitives-1-200dpi-052"] = new URL(require("18ccd9a4055d737a"));
imageURLs["primitives-1-200dpi-053"] = new URL(require("26e0620317f2fdee"));
imageURLs["primitives-1-200dpi-054"] = new URL(require("c2d8668ffe19b716"));
imageURLs["primitives-1-200dpi-055"] = new URL(require("fdfd44b0766f09fc"));
imageURLs["primitives-1-200dpi-056"] = new URL(require("7acbc2970f06846"));
imageURLs["primitives-1-200dpi-057"] = new URL(require("a35854409849d46d"));
imageURLs["primitives-1-200dpi-058"] = new URL(require("a4c49d97018f08c6"));
imageURLs["primitives-1-200dpi-059"] = new URL(require("87d0788bd37a941a"));
imageURLs["primitives-1-200dpi-060"] = new URL(require("453b84f73dd0453a"));
imageURLs["primitives-1-200dpi-061"] = new URL(require("2f3375b442b11103"));
imageURLs["primitives-1-200dpi-062"] = new URL(require("329fe1650e112ec5"));
imageURLs["primitives-1-200dpi-063"] = new URL(require("9a34b26171e0a017"));
imageURLs["primitives-1-200dpi-064"] = new URL(require("d4731c1d340b36ac"));
imageURLs["primitives-1-200dpi-065"] = new URL(require("a0b7f50323f622de"));
imageURLs["primitives-1-200dpi-066"] = new URL(require("757732cb4eb22041"));
imageURLs["primitives-1-200dpi-067"] = new URL(require("7931b9f7297da826"));
imageURLs["primitives-1-200dpi-068"] = new URL(require("e8196ab019965448"));
imageURLs["primitives-1-200dpi-069"] = new URL(require("d296fba4337c2a7d"));
imageURLs["primitives-1-200dpi-070"] = new URL(require("25743f6902fad5b8"));
imageURLs["primitives-1-200dpi-071"] = new URL(require("7a8e70042902dccd"));
imageURLs["primitives-1-200dpi-072"] = new URL(require("bde84ddb008e7aa4"));
imageURLs["primitives-1-200dpi-073"] = new URL(require("72d25daa86df433b"));
imageURLs["primitives-1-200dpi-074"] = new URL(require("c5027268993a02ef"));
imageURLs["primitives-1-200dpi-075"] = new URL(require("3beebbd243a915b0"));
imageURLs["primitives-1-200dpi-076"] = new URL(require("a48f5367a2151afb"));
imageURLs["primitives-1-200dpi-077"] = new URL(require("712d26844454e128"));
imageURLs["primitives-1-200dpi-078"] = new URL(require("780533361caec4ed"));
imageURLs["primitives-1-200dpi-079"] = new URL(require("bc81179020faecd4"));
imageURLs["primitives-1-200dpi-080"] = new URL(require("3ec01779b7633abe"));
imageURLs["primitives-1-200dpi-081"] = new URL(require("e23aec1ea381438b"));
imageURLs["primitives-1-200dpi-082"] = new URL(require("5afc535c62e6a858"));
imageURLs["primitives-1-200dpi-083"] = new URL(require("e2117a52dcc28b49"));
imageURLs["primitives-1-200dpi-084"] = new URL(require("cb398273c151af85"));
imageURLs["primitives-1-200dpi-085"] = new URL(require("18cb9b9f38830e54"));
imageURLs["primitives-1-200dpi-086"] = new URL(require("e8533f25105f0a43"));
imageURLs["primitives-1-200dpi-087"] = new URL(require("2e9240cb5d01af32"));
imageURLs["primitives-1-200dpi-088"] = new URL(require("7b80801e44b3b3d5"));
imageURLs["primitives-1-200dpi-089"] = new URL(require("92abbc43caf7c04a"));
imageURLs["primitives-1-200dpi-090"] = new URL(require("1c00dbeaea7307fd"));
imageURLs["primitives-1-200dpi-091"] = new URL(require("6a3beaf5608bd22b"));
imageURLs["primitives-1-200dpi-092"] = new URL(require("cb8feffa10787639"));
imageURLs["primitives-1-200dpi-093"] = new URL(require("766838f12026891f"));
imageURLs["primitives-1-200dpi-094"] = new URL(require("131b120e5137f1e5"));
imageURLs["primitives-1-200dpi-095"] = new URL(require("2bb497fdeff039f0"));
imageURLs["primitives-1-200dpi-096"] = new URL(require("1268857b22a22d8d"));
imageURLs["primitives-1-200dpi-097"] = new URL(require("62d7866fdbce2cb8"));
imageURLs["primitives-1-200dpi-098"] = new URL(require("93b835812b002b8a"));
imageURLs["primitives-1-200dpi-099"] = new URL(require("e093d84a6d854739"));
imageURLs["primitives-1-200dpi-100"] = new URL(require("fb1086b1c1fb7d07"));
imageURLs["primitives-1-200dpi-101"] = new URL(require("fcfa8aca296367b6"));
imageURLs["primitives-1-200dpi-102"] = new URL(require("f8dad7c713202cb7"));
imageURLs["primitives-1-200dpi-103"] = new URL(require("cbad521356a72fd1"));
imageURLs["primitives-1-200dpi-104"] = new URL(require("5020f4d397f42e97"));
imageURLs["primitives-1-200dpi-105"] = new URL(require("8cabc14142e57f44"));
imageURLs["primitives-1-200dpi-106"] = new URL(require("6e0f0cb453d53df6"));
imageURLs["primitives-1-200dpi-107"] = new URL(require("c1c70cb961a2071b"));
imageURLs["primitives-1-200dpi-108"] = new URL(require("44856f1d6205ca08"));
imageURLs["primitives-1-200dpi-109"] = new URL(require("7226e15bfa204769"));
imageURLs["primitives-1-200dpi-110"] = new URL(require("fc9e872d764f9e83"));
imageURLs["primitives-1-200dpi-111"] = new URL(require("46248a57324d64fd"));
imageURLs["primitives-1-200dpi-112"] = new URL(require("e0d8cb8ab0bae05a"));
exports.default = imageURLs;

},{"c2eef0de058c740d":"ktZio","52a7a861fda9f30b":"9Fn32","9c18ef670372a950":"lntzS","9cb9b835c8aecf1e":"9oiBz","4e7685da53edcdb2":"1yZFC","7dfad34e076d902a":"6hxnK","e6b69140c90bc1ac":"3vWjy","8d0f2d7300b372dc":"5lvAO","b6486eecfa6dd0c":"1AkEW","9c484782eeeb396f":"5Fmvm","92e2dcdb599e0e86":"51gt3","d52baa4075fb2b3":"j7mVh","6062f456d781d0cb":"gPXyp","5ed07d784ed75992":"cy53r","1a62b5c043c2fad6":"8d9iE","99101774e61f2692":"zkT15","4861c5c899050042":"jdQW4","28a2665c49a6300":"gLqya","11b8569b0e6d4678":"53YdD","921e796bcaa4ce5d":"6TA6M","5b48a9e2d2dc19f7":"7nXkt","c9ef71e630295927":"l8JVV","8f33d966f5fbb7ac":"b113l","eb88667065e3cf00":"490db","36aafb8798b994a2":"9Hf0e","c02b5382e379fe35":"03c6w","a28f62b1ecb9edad":"bvPn8","d8294d38c186241f":"fbvQi","77d67807a0769154":"8gdpg","69a7031e495f7be0":"2XGnd","ca5bd563d3e72b8d":"aALF3","a811b18f1c0bb33a":"cESoG","88e40d88b661dd4b":"155B0","9bf4dae99eaef48c":"7T72P","4be596869190e41b":"1R46k","e73aafba07ea7b67":"lJEl9","94ff87e1c79456f":"bktKl","98420d767ed21275":"4XWSL","c7de6fb8246c75a9":"9aQVx","df791106f119ec62":"2szZH","9736b820bbd18588":"lyMtb","ad45e95ea0806af9":"45JRd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","7b5c8aec72525cee":"lKxjm","607ccc0d6f9c9abb":"9T3Vb","1b32caa41e0f6577":"4HQoo","2d7d84a335812f1":"5YiBG","5799805c371b5d87":"k5ySQ","573225369e2773d":"fDoMT","1ec50ab038cc735e":"9KR83","4b9f4f0fc50194e0":"jWDdN","84a0aadb15bc67aa":"aVA6M","209300ede3fc1eed":"44CBM","4a8265315ad7548":"4cYMm","468d63721d0dc4c4":"aiWbD","6a4a87679b6896dd":"ae1BM","65e64b9263edad05":"bSCL0","52e6f81be1a471c5":"f1dRX","fb9f4659004ff5d5":"b90gY","d30d35e71a85209":"813Mq","68b7e1bebf2097ae":"jRzxg","a685d680f598422b":"c559Y","31000596897051de":"eMPIR","95752395992dddd6":"aqsBX","11e1a1f996ad7e2f":"5IhGw","532099c0c308747":"64z3Z","b3dc15c3f22de212":"cfEVk","a7346ac7f8e2cc03":"4Y2qt","2829f0dbb2a2777d":"giEEI","21d5815bd90aa016":"kz9MO","55788031b6a6375f":"92n2k","885a4f5857f7f7ab":"ejDyj","d73aebd27393f307":"eSAOk","29677a704976100b":"i5vLQ","6ad2f3a73ad99f72":"2UCH0","1e7735de066ba088":"uMKYV","565b47e862b7490b":"6iLbi","e894bf06f0f7eff0":"ggJuJ","a4e82a569a826175":"ggYro","345ac8a0644bb523":"311bi","93fc3d9d354e6d29":"lrDLL","7716d785ce14c8ab":"dHUja","6ac9ba8795e143db":"ietKq","922abc82b2b7e96":"3ZtWx","fcace8deb1937e44":"iMgqk","7d86031227543e9a":"fnfHD","b2c861539e25799d":"kKzE3","be43a89cc5fd54dd":"jwYgS","8f3cff687936ea88":"fnyHL","5e6da069fd9f5bfb":"2aHUI","59abab5b8ddc20cf":"882Su","7d50eb0b0567ebe5":"6dOJg","f992c19d0b44969b":"fX88e","506f5c8e3cda1ae9":"2clTZ","6f1425e38daddcd2":"2OufW","95b5496854977a97":"euTmI","2c861e4d984de5f4":"bc5nx","94924a1c3d9e026b":"jLhPb","52c0daa1072b057d":"kqFre","3de92f22a2bcb400":"dOJhs","a0fc874eba68ac64":"333SJ","94337850aab88138":"fvopj","a45fb3ba009b2008":"2SwWr","54caf452294a8469":"8JWUX","885e4f058d714077":"4fCkG","5b4e830d37807187":"42ROn","e4a33b80a5420176":"2fo8e","d8158b49ad8aedfb":"54cCw","6a92cbf28e84c958":"i2D09","7ff49150aacea561":"4uJKO","b382a06638f9aebe":"h9CXL","3c6022a2163b5c7":"d1xSb","d9e697e4afd54faa":"3l0SP","6fed1e9d81c47666":"dOlLM","920998b7669d477e":"ijHmo","834f792d9b829eab":"1F47Q","3eaad3ec6c786425":"3UiV4","3994b10cc0acf36f":"i2QIR","53fdf971d1aecf2d":"ezKa1","e92f7f900995c96b":"cmdAX","7a241e6a4b0008c4":"eEpoU","674da81f6164ba63":"9Kesr","8795b4d2f4424fc6":"kZH8D","c5551f44f03fb58c":"itVCV","bd5d5a5a9e46911b":"4wfFN","3381657559ee58cb":"8TcZT","aead84aa3075fb9e":"fY6fO","df7ea6e72a001022":"9BLds","a0c56fa4bd592df5":"iFJ12","db86e1b83fd2e867":"1q8W8","646dd6aa3e7baec7":"5Fnhr","de8301d1469110c8":"73ZsY","28b823a4382966c2":"lVjhQ","82710c054670a0be":"6F0IV","ffdbbe618b7d7ff7":"1WuBT","a3b674069d6ad29e":"53Fti","62968e1769b1b799":"jFs8w","867b70692f378d44":"b3GVW","28b30b0a3e6f2a33":"giX9P","91f6e08b1cb0a3ca":"cWO9a","b9922aaf7194ffd0":"aqvZv","edf13e035baa2608":"fg2az","81fa6c02edc52e80":"dsVMf","66b639cab4122cb4":"hU8Gm","3aa39433380e1f5f":"30pMd","4c6f5485682c6913":"gibFn","4786bf7064742c34":"5ERz2","bbe5f6b09bbe4704":"2iJ6n","b0936c07c9988a10":"aKg4i","88a631e80de1136f":"cEMCX","1c8672376f85595e":"lgyUm","eec0d72e05df8a33":"3GSXC","7f8143bf2596c95a":"bexko","681de2fe4a7d923f":"hcdrv","ef06d35ce265ff23":"katKz","30c6de8fa1fecc0b":"4hCW7","bafe541ec365225c":"hVaET","cff05e59db924060":"aKgmu","3a8cc801f8c1d2ee":"oAiGH","7ecbaaf7194f0045":"76Ino","ce26ae55a6744c3e":"gu2Pz","2431a175942b6667":"1VjYq","a9ff8fceb3524652":"fh762","f60b68308f4b2bcd":"bw3eS","100aff03ec986ad5":"ZlZyh","50aa393a8745a07f":"acvI9","c2d89054b403e252":"gW2pU","722c92207506dba":"aOO7U","28d2a7906c6eed94":"btwrv","cdf9f93266e742e9":"akPYT","acb302a5f4ac94a3":"asLiA","2ebfc16fc029c8a9":"hwSKI","f2aa3c03fe0e38b8":"le49Q","cf9aa864210a4260":"5cs9H","985379eceb35b227":"fPcjM","bc899fbcf0f6e17b":"4xe5q","a643d9403f702d57":"alEwJ","ed2db28b7030edbf":"cbOs1","5b41449549c79c75":"fyEuZ","c71a410daf3af573":"5Plcq","cddab6519a804e71":"eTSDw","b6052f627b473778":"7HhQO","bde3b85fb9e0502d":"dRMtY","cf36f44df6af09a0":"5rNow","4374ac740a453988":"12nHg","8d0cedf73e7c307b":"8ADhh","97824d66207b692":"3lP7p","5025bbc6d623a81c":"fBwTk","a4c75c71e96d7469":"9XNYt","a143e519aac4d6d":"fpYmx","f83d98da60fa2c8":"3NhYs","2cea9fc3b1b789d7":"eUWzj","16f7e1b0f8bc093a":"7vgs1","d814e76f8316a997":"loUuu","af8f5a26c1cac6be":"eTzA7","6fd3ecd777fdf28a":"2RCI4","729df83a0ccdf708":"2guue","6ede79164ed9da91":"8b7ls","ae19d92e06b30f6f":"cjCKk","f681b36bc40d6185":"go11u","66fc0b8c97d7ce17":"LvTT3","c2b9faff52f7447d":"c8c97","763cdd4072dc1291":"hdokk","efc8b2c39b86b990":"leIee","ac0b474a504e368":"b8ySs","46a3873f4dcb964b":"AOvPs","18ccd9a4055d737a":"jF1oF","26e0620317f2fdee":"iGs1p","c2d8668ffe19b716":"bURi2","fdfd44b0766f09fc":"8a1Dn","7acbc2970f06846":"gSnJf","a35854409849d46d":"1BR44","a4c49d97018f08c6":"au1T0","87d0788bd37a941a":"hdcca","453b84f73dd0453a":"7s9DZ","2f3375b442b11103":"fUSgp","329fe1650e112ec5":"9jLWv","9a34b26171e0a017":"2aGjb","d4731c1d340b36ac":"i5Bol","a0b7f50323f622de":"hrLHq","757732cb4eb22041":"a0G0X","7931b9f7297da826":"3w2pg","e8196ab019965448":"j3Eri","d296fba4337c2a7d":"hDAIh","25743f6902fad5b8":"8pxs7","7a8e70042902dccd":"7iIsD","bde84ddb008e7aa4":"tQeiP","72d25daa86df433b":"YtH8I","c5027268993a02ef":"2uaUf","3beebbd243a915b0":"4Dc2V","a48f5367a2151afb":"7gERm","712d26844454e128":"ejCkq","780533361caec4ed":"9aWtV","bc81179020faecd4":"c09dd","3ec01779b7633abe":"dJGXW","e23aec1ea381438b":"8OZF7","5afc535c62e6a858":"ikUrd","e2117a52dcc28b49":"8Yfd0","cb398273c151af85":"8uZkL","18cb9b9f38830e54":"3pnGf","e8533f25105f0a43":"k3bNd","2e9240cb5d01af32":"7YOwE","7b80801e44b3b3d5":"aJR03","92abbc43caf7c04a":"2zgvP","1c00dbeaea7307fd":"6VcoD","6a3beaf5608bd22b":"74q0W","cb8feffa10787639":"5ClHE","766838f12026891f":"hFfcP","131b120e5137f1e5":"7ob3J","2bb497fdeff039f0":"cOjKo","1268857b22a22d8d":"1qas8","62d7866fdbce2cb8":"lt8x8","93b835812b002b8a":"8d43S","e093d84a6d854739":"i3usb","fb1086b1c1fb7d07":"95kF7","fcfa8aca296367b6":"iRvfi","f8dad7c713202cb7":"7Dy1V","cbad521356a72fd1":"8BbIG","5020f4d397f42e97":"kYtdN","8cabc14142e57f44":"hxcdJ","6e0f0cb453d53df6":"dhdbO","c1c70cb961a2071b":"fJr8z","44856f1d6205ca08":"18fxD","7226e15bfa204769":"l2Y8i","fc9e872d764f9e83":"l1iu5","46248a57324d64fd":"5spXf","e0d8cb8ab0bae05a":"gs2NL"}],"ktZio":[function(require,module,exports) {
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

},{"f088a40761b9750d":"lgJ39"}],"lKxjm":[function(require,module,exports) {
module.exports = require("2b0f06968feb34b6").getBundleURL("7JE76") + "primitives-1-100dpi-001.4b79e458.png" + "?" + Date.now();

},{"2b0f06968feb34b6":"lgJ39"}],"9T3Vb":[function(require,module,exports) {
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

},{"3f134c90360ac54f":"lgJ39"}],"4hCW7":[function(require,module,exports) {
module.exports = require("b594b4631c7096d8").getBundleURL("7JE76") + "primitives-1-200dpi-001.87528d3d.png" + "?" + Date.now();

},{"b594b4631c7096d8":"lgJ39"}],"hVaET":[function(require,module,exports) {
module.exports = require("96ba95e30cb86043").getBundleURL("7JE76") + "primitives-1-200dpi-002.0ab4d6b1.png" + "?" + Date.now();

},{"96ba95e30cb86043":"lgJ39"}],"aKgmu":[function(require,module,exports) {
module.exports = require("ec3851dffc070942").getBundleURL("7JE76") + "primitives-1-200dpi-003.bd53fa20.png" + "?" + Date.now();

},{"ec3851dffc070942":"lgJ39"}],"oAiGH":[function(require,module,exports) {
module.exports = require("37196fba58d600b2").getBundleURL("7JE76") + "primitives-1-200dpi-004.e2ab9c40.png" + "?" + Date.now();

},{"37196fba58d600b2":"lgJ39"}],"76Ino":[function(require,module,exports) {
module.exports = require("fdc691564c7b2147").getBundleURL("7JE76") + "primitives-1-200dpi-005.6fb5fa5f.png" + "?" + Date.now();

},{"fdc691564c7b2147":"lgJ39"}],"gu2Pz":[function(require,module,exports) {
module.exports = require("768127acf5af1295").getBundleURL("7JE76") + "primitives-1-200dpi-006.87f83ae1.png" + "?" + Date.now();

},{"768127acf5af1295":"lgJ39"}],"1VjYq":[function(require,module,exports) {
module.exports = require("208a342cc5fb1342").getBundleURL("7JE76") + "primitives-1-200dpi-007.654ab5e9.png" + "?" + Date.now();

},{"208a342cc5fb1342":"lgJ39"}],"fh762":[function(require,module,exports) {
module.exports = require("dc70683a2a2f3089").getBundleURL("7JE76") + "primitives-1-200dpi-008.84e2b0fb.png" + "?" + Date.now();

},{"dc70683a2a2f3089":"lgJ39"}],"bw3eS":[function(require,module,exports) {
module.exports = require("178193ac32030d57").getBundleURL("7JE76") + "primitives-1-200dpi-009.cf26b8cf.png" + "?" + Date.now();

},{"178193ac32030d57":"lgJ39"}],"ZlZyh":[function(require,module,exports) {
module.exports = require("891e2ab4ebddaf62").getBundleURL("7JE76") + "primitives-1-200dpi-010.f7848ede.png" + "?" + Date.now();

},{"891e2ab4ebddaf62":"lgJ39"}],"acvI9":[function(require,module,exports) {
module.exports = require("da47ee33518258e8").getBundleURL("7JE76") + "primitives-1-200dpi-011.d393f003.png" + "?" + Date.now();

},{"da47ee33518258e8":"lgJ39"}],"gW2pU":[function(require,module,exports) {
module.exports = require("d984f30a9ac2b1ff").getBundleURL("7JE76") + "primitives-1-200dpi-012.3d783f00.png" + "?" + Date.now();

},{"d984f30a9ac2b1ff":"lgJ39"}],"aOO7U":[function(require,module,exports) {
module.exports = require("dd8dd0c7ec01d7f").getBundleURL("7JE76") + "primitives-1-200dpi-013.48fb69cd.png" + "?" + Date.now();

},{"dd8dd0c7ec01d7f":"lgJ39"}],"btwrv":[function(require,module,exports) {
module.exports = require("58c535ac8cd70d23").getBundleURL("7JE76") + "primitives-1-200dpi-014.8f9d3933.png" + "?" + Date.now();

},{"58c535ac8cd70d23":"lgJ39"}],"akPYT":[function(require,module,exports) {
module.exports = require("eab48ec6493dc3ba").getBundleURL("7JE76") + "primitives-1-200dpi-015.5357b826.png" + "?" + Date.now();

},{"eab48ec6493dc3ba":"lgJ39"}],"asLiA":[function(require,module,exports) {
module.exports = require("3f9e651daded0a13").getBundleURL("7JE76") + "primitives-1-200dpi-016.d4ed2a70.png" + "?" + Date.now();

},{"3f9e651daded0a13":"lgJ39"}],"hwSKI":[function(require,module,exports) {
module.exports = require("eb14a343db965e2e").getBundleURL("7JE76") + "primitives-1-200dpi-017.a04e2e3a.png" + "?" + Date.now();

},{"eb14a343db965e2e":"lgJ39"}],"le49Q":[function(require,module,exports) {
module.exports = require("606330d6f57ead1").getBundleURL("7JE76") + "primitives-1-200dpi-018.c0a392fb.png" + "?" + Date.now();

},{"606330d6f57ead1":"lgJ39"}],"5cs9H":[function(require,module,exports) {
module.exports = require("3dd5384f819a6464").getBundleURL("7JE76") + "primitives-1-200dpi-019.4262c043.png" + "?" + Date.now();

},{"3dd5384f819a6464":"lgJ39"}],"fPcjM":[function(require,module,exports) {
module.exports = require("49437e5fe1f29cee").getBundleURL("7JE76") + "primitives-1-200dpi-020.402e4894.png" + "?" + Date.now();

},{"49437e5fe1f29cee":"lgJ39"}],"4xe5q":[function(require,module,exports) {
module.exports = require("f5d31e1300bc3d95").getBundleURL("7JE76") + "primitives-1-200dpi-021.c73e66fa.png" + "?" + Date.now();

},{"f5d31e1300bc3d95":"lgJ39"}],"alEwJ":[function(require,module,exports) {
module.exports = require("c6b4c08d29e24ce0").getBundleURL("7JE76") + "primitives-1-200dpi-022.da27df5b.png" + "?" + Date.now();

},{"c6b4c08d29e24ce0":"lgJ39"}],"cbOs1":[function(require,module,exports) {
module.exports = require("8159535984a0dfc9").getBundleURL("7JE76") + "primitives-1-200dpi-023.5e15dac9.png" + "?" + Date.now();

},{"8159535984a0dfc9":"lgJ39"}],"fyEuZ":[function(require,module,exports) {
module.exports = require("a96fcc348eea4087").getBundleURL("7JE76") + "primitives-1-200dpi-024.4a7e5e57.png" + "?" + Date.now();

},{"a96fcc348eea4087":"lgJ39"}],"5Plcq":[function(require,module,exports) {
module.exports = require("97174bc49e8715aa").getBundleURL("7JE76") + "primitives-1-200dpi-025.a37f24e1.png" + "?" + Date.now();

},{"97174bc49e8715aa":"lgJ39"}],"eTSDw":[function(require,module,exports) {
module.exports = require("1205da366f86378a").getBundleURL("7JE76") + "primitives-1-200dpi-026.76853bcc.png" + "?" + Date.now();

},{"1205da366f86378a":"lgJ39"}],"7HhQO":[function(require,module,exports) {
module.exports = require("e0060e6b015d0383").getBundleURL("7JE76") + "primitives-1-200dpi-027.1181af98.png" + "?" + Date.now();

},{"e0060e6b015d0383":"lgJ39"}],"dRMtY":[function(require,module,exports) {
module.exports = require("b675d4872fd379b5").getBundleURL("7JE76") + "primitives-1-200dpi-028.0437cba8.png" + "?" + Date.now();

},{"b675d4872fd379b5":"lgJ39"}],"5rNow":[function(require,module,exports) {
module.exports = require("81a59db84b38f470").getBundleURL("7JE76") + "primitives-1-200dpi-029.9301baf8.png" + "?" + Date.now();

},{"81a59db84b38f470":"lgJ39"}],"12nHg":[function(require,module,exports) {
module.exports = require("3f87f33eac3b0f81").getBundleURL("7JE76") + "primitives-1-200dpi-030.6e5ace27.png" + "?" + Date.now();

},{"3f87f33eac3b0f81":"lgJ39"}],"8ADhh":[function(require,module,exports) {
module.exports = require("f920aba1598697e3").getBundleURL("7JE76") + "primitives-1-200dpi-031.55260a33.png" + "?" + Date.now();

},{"f920aba1598697e3":"lgJ39"}],"3lP7p":[function(require,module,exports) {
module.exports = require("c2c3acddf6eff2ac").getBundleURL("7JE76") + "primitives-1-200dpi-032.101cf58b.png" + "?" + Date.now();

},{"c2c3acddf6eff2ac":"lgJ39"}],"fBwTk":[function(require,module,exports) {
module.exports = require("514eb331f6fbf4d5").getBundleURL("7JE76") + "primitives-1-200dpi-033.17d81932.png" + "?" + Date.now();

},{"514eb331f6fbf4d5":"lgJ39"}],"9XNYt":[function(require,module,exports) {
module.exports = require("c2856d5f51deccfd").getBundleURL("7JE76") + "primitives-1-200dpi-034.2f7f8935.png" + "?" + Date.now();

},{"c2856d5f51deccfd":"lgJ39"}],"fpYmx":[function(require,module,exports) {
module.exports = require("83d086d18f435329").getBundleURL("7JE76") + "primitives-1-200dpi-035.4e536f06.png" + "?" + Date.now();

},{"83d086d18f435329":"lgJ39"}],"3NhYs":[function(require,module,exports) {
module.exports = require("e0a41f74a11a884b").getBundleURL("7JE76") + "primitives-1-200dpi-036.32d5033e.png" + "?" + Date.now();

},{"e0a41f74a11a884b":"lgJ39"}],"eUWzj":[function(require,module,exports) {
module.exports = require("ab785c9ac314c461").getBundleURL("7JE76") + "primitives-1-200dpi-037.80c76d17.png" + "?" + Date.now();

},{"ab785c9ac314c461":"lgJ39"}],"7vgs1":[function(require,module,exports) {
module.exports = require("2f4e20634cccfe66").getBundleURL("7JE76") + "primitives-1-200dpi-038.4a2aa8ff.png" + "?" + Date.now();

},{"2f4e20634cccfe66":"lgJ39"}],"loUuu":[function(require,module,exports) {
module.exports = require("db5046dc3206b419").getBundleURL("7JE76") + "primitives-1-200dpi-039.27076f09.png" + "?" + Date.now();

},{"db5046dc3206b419":"lgJ39"}],"eTzA7":[function(require,module,exports) {
module.exports = require("679790a660588a37").getBundleURL("7JE76") + "primitives-1-200dpi-040.7d1ba928.png" + "?" + Date.now();

},{"679790a660588a37":"lgJ39"}],"2RCI4":[function(require,module,exports) {
module.exports = require("c90511e010343948").getBundleURL("7JE76") + "primitives-1-200dpi-041.25bb4566.png" + "?" + Date.now();

},{"c90511e010343948":"lgJ39"}],"2guue":[function(require,module,exports) {
module.exports = require("16613cbef8b25252").getBundleURL("7JE76") + "primitives-1-200dpi-042.7ee1261c.png" + "?" + Date.now();

},{"16613cbef8b25252":"lgJ39"}],"8b7ls":[function(require,module,exports) {
module.exports = require("86ea7055745c2b84").getBundleURL("7JE76") + "primitives-1-200dpi-043.d6bb2b30.png" + "?" + Date.now();

},{"86ea7055745c2b84":"lgJ39"}],"cjCKk":[function(require,module,exports) {
module.exports = require("e6fae9d219242a9").getBundleURL("7JE76") + "primitives-1-200dpi-044.28060a88.png" + "?" + Date.now();

},{"e6fae9d219242a9":"lgJ39"}],"go11u":[function(require,module,exports) {
module.exports = require("a5f9e94aa8308cd6").getBundleURL("7JE76") + "primitives-1-200dpi-045.74c69a80.png" + "?" + Date.now();

},{"a5f9e94aa8308cd6":"lgJ39"}],"LvTT3":[function(require,module,exports) {
module.exports = require("fc002c2897833155").getBundleURL("7JE76") + "primitives-1-200dpi-046.168d9482.png" + "?" + Date.now();

},{"fc002c2897833155":"lgJ39"}],"c8c97":[function(require,module,exports) {
module.exports = require("d8efc165615021d6").getBundleURL("7JE76") + "primitives-1-200dpi-047.1b3a2d75.png" + "?" + Date.now();

},{"d8efc165615021d6":"lgJ39"}],"hdokk":[function(require,module,exports) {
module.exports = require("d6515de6f2b42e48").getBundleURL("7JE76") + "primitives-1-200dpi-048.dd84b7af.png" + "?" + Date.now();

},{"d6515de6f2b42e48":"lgJ39"}],"leIee":[function(require,module,exports) {
module.exports = require("d4809535daf8d69c").getBundleURL("7JE76") + "primitives-1-200dpi-049.4b0f4a07.png" + "?" + Date.now();

},{"d4809535daf8d69c":"lgJ39"}],"b8ySs":[function(require,module,exports) {
module.exports = require("bf567029eb7e118f").getBundleURL("7JE76") + "primitives-1-200dpi-050.1e891b8b.png" + "?" + Date.now();

},{"bf567029eb7e118f":"lgJ39"}],"AOvPs":[function(require,module,exports) {
module.exports = require("78537883e9c0caa5").getBundleURL("7JE76") + "primitives-1-200dpi-051.dd2770d3.png" + "?" + Date.now();

},{"78537883e9c0caa5":"lgJ39"}],"jF1oF":[function(require,module,exports) {
module.exports = require("2a6b9ea97e8b7417").getBundleURL("7JE76") + "primitives-1-200dpi-052.2bdf0d65.png" + "?" + Date.now();

},{"2a6b9ea97e8b7417":"lgJ39"}],"iGs1p":[function(require,module,exports) {
module.exports = require("7ab5b66b2bb46a50").getBundleURL("7JE76") + "primitives-1-200dpi-053.1288170b.png" + "?" + Date.now();

},{"7ab5b66b2bb46a50":"lgJ39"}],"bURi2":[function(require,module,exports) {
module.exports = require("a5c5907e16682f6e").getBundleURL("7JE76") + "primitives-1-200dpi-054.5e164a93.png" + "?" + Date.now();

},{"a5c5907e16682f6e":"lgJ39"}],"8a1Dn":[function(require,module,exports) {
module.exports = require("556b7529d6cee16").getBundleURL("7JE76") + "primitives-1-200dpi-055.3d4d6525.png" + "?" + Date.now();

},{"556b7529d6cee16":"lgJ39"}],"gSnJf":[function(require,module,exports) {
module.exports = require("f8eb02d9a4ef1b85").getBundleURL("7JE76") + "primitives-1-200dpi-056.23cda8d6.png" + "?" + Date.now();

},{"f8eb02d9a4ef1b85":"lgJ39"}],"1BR44":[function(require,module,exports) {
module.exports = require("1f453e0de9bad09a").getBundleURL("7JE76") + "primitives-1-200dpi-057.15489dfa.png" + "?" + Date.now();

},{"1f453e0de9bad09a":"lgJ39"}],"au1T0":[function(require,module,exports) {
module.exports = require("429611f2f4473ceb").getBundleURL("7JE76") + "primitives-1-200dpi-058.75db37f7.png" + "?" + Date.now();

},{"429611f2f4473ceb":"lgJ39"}],"hdcca":[function(require,module,exports) {
module.exports = require("685098a1e812677d").getBundleURL("7JE76") + "primitives-1-200dpi-059.e7e77326.png" + "?" + Date.now();

},{"685098a1e812677d":"lgJ39"}],"7s9DZ":[function(require,module,exports) {
module.exports = require("966a12b931a32166").getBundleURL("7JE76") + "primitives-1-200dpi-060.f464889f.png" + "?" + Date.now();

},{"966a12b931a32166":"lgJ39"}],"fUSgp":[function(require,module,exports) {
module.exports = require("f9f5d2859d8b4f2e").getBundleURL("7JE76") + "primitives-1-200dpi-061.1b6436e2.png" + "?" + Date.now();

},{"f9f5d2859d8b4f2e":"lgJ39"}],"9jLWv":[function(require,module,exports) {
module.exports = require("5c79bc93b41f6728").getBundleURL("7JE76") + "primitives-1-200dpi-062.5f0de8c4.png" + "?" + Date.now();

},{"5c79bc93b41f6728":"lgJ39"}],"2aGjb":[function(require,module,exports) {
module.exports = require("b8db54fd7f955123").getBundleURL("7JE76") + "primitives-1-200dpi-063.e42a1ecc.png" + "?" + Date.now();

},{"b8db54fd7f955123":"lgJ39"}],"i5Bol":[function(require,module,exports) {
module.exports = require("3c4f93a4dd9ae400").getBundleURL("7JE76") + "primitives-1-200dpi-064.8d62288b.png" + "?" + Date.now();

},{"3c4f93a4dd9ae400":"lgJ39"}],"hrLHq":[function(require,module,exports) {
module.exports = require("2c8262a7bc9c57b5").getBundleURL("7JE76") + "primitives-1-200dpi-065.783b546e.png" + "?" + Date.now();

},{"2c8262a7bc9c57b5":"lgJ39"}],"a0G0X":[function(require,module,exports) {
module.exports = require("3dc81e4d5732b57a").getBundleURL("7JE76") + "primitives-1-200dpi-066.f38e7969.png" + "?" + Date.now();

},{"3dc81e4d5732b57a":"lgJ39"}],"3w2pg":[function(require,module,exports) {
module.exports = require("cf6e27d62fc733b4").getBundleURL("7JE76") + "primitives-1-200dpi-067.b738d76d.png" + "?" + Date.now();

},{"cf6e27d62fc733b4":"lgJ39"}],"j3Eri":[function(require,module,exports) {
module.exports = require("5371c55dee206cd4").getBundleURL("7JE76") + "primitives-1-200dpi-068.d618da81.png" + "?" + Date.now();

},{"5371c55dee206cd4":"lgJ39"}],"hDAIh":[function(require,module,exports) {
module.exports = require("4c241192c4f91219").getBundleURL("7JE76") + "primitives-1-200dpi-069.b246e48e.png" + "?" + Date.now();

},{"4c241192c4f91219":"lgJ39"}],"8pxs7":[function(require,module,exports) {
module.exports = require("639ad21c042a0af1").getBundleURL("7JE76") + "primitives-1-200dpi-070.c503bb99.png" + "?" + Date.now();

},{"639ad21c042a0af1":"lgJ39"}],"7iIsD":[function(require,module,exports) {
module.exports = require("f3077972d96b4d2d").getBundleURL("7JE76") + "primitives-1-200dpi-071.71e5bd06.png" + "?" + Date.now();

},{"f3077972d96b4d2d":"lgJ39"}],"tQeiP":[function(require,module,exports) {
module.exports = require("a15bc56619d31501").getBundleURL("7JE76") + "primitives-1-200dpi-072.8dd14fb4.png" + "?" + Date.now();

},{"a15bc56619d31501":"lgJ39"}],"YtH8I":[function(require,module,exports) {
module.exports = require("6b19f19f8a69ae6c").getBundleURL("7JE76") + "primitives-1-200dpi-073.d8ce71a1.png" + "?" + Date.now();

},{"6b19f19f8a69ae6c":"lgJ39"}],"2uaUf":[function(require,module,exports) {
module.exports = require("9306c6490a8b6b22").getBundleURL("7JE76") + "primitives-1-200dpi-074.253c4945.png" + "?" + Date.now();

},{"9306c6490a8b6b22":"lgJ39"}],"4Dc2V":[function(require,module,exports) {
module.exports = require("1331b1848d9bd2ad").getBundleURL("7JE76") + "primitives-1-200dpi-075.954f1662.png" + "?" + Date.now();

},{"1331b1848d9bd2ad":"lgJ39"}],"7gERm":[function(require,module,exports) {
module.exports = require("a58ca7eb60c6679a").getBundleURL("7JE76") + "primitives-1-200dpi-076.1f238475.png" + "?" + Date.now();

},{"a58ca7eb60c6679a":"lgJ39"}],"ejCkq":[function(require,module,exports) {
module.exports = require("8f7b8aab862fa9d7").getBundleURL("7JE76") + "primitives-1-200dpi-077.c8ae2511.png" + "?" + Date.now();

},{"8f7b8aab862fa9d7":"lgJ39"}],"9aWtV":[function(require,module,exports) {
module.exports = require("fc1cf3dd86564927").getBundleURL("7JE76") + "primitives-1-200dpi-078.8dad3f95.png" + "?" + Date.now();

},{"fc1cf3dd86564927":"lgJ39"}],"c09dd":[function(require,module,exports) {
module.exports = require("4f44865282dba122").getBundleURL("7JE76") + "primitives-1-200dpi-079.0676e4f9.png" + "?" + Date.now();

},{"4f44865282dba122":"lgJ39"}],"dJGXW":[function(require,module,exports) {
module.exports = require("e13454dcaf2b99e9").getBundleURL("7JE76") + "primitives-1-200dpi-080.b774843c.png" + "?" + Date.now();

},{"e13454dcaf2b99e9":"lgJ39"}],"8OZF7":[function(require,module,exports) {
module.exports = require("fe9cc1e83740fe71").getBundleURL("7JE76") + "primitives-1-200dpi-081.ad17be87.png" + "?" + Date.now();

},{"fe9cc1e83740fe71":"lgJ39"}],"ikUrd":[function(require,module,exports) {
module.exports = require("2199c70dfa1ae16c").getBundleURL("7JE76") + "primitives-1-200dpi-082.c22012ba.png" + "?" + Date.now();

},{"2199c70dfa1ae16c":"lgJ39"}],"8Yfd0":[function(require,module,exports) {
module.exports = require("f4ed83b3368e7b4e").getBundleURL("7JE76") + "primitives-1-200dpi-083.3691d218.png" + "?" + Date.now();

},{"f4ed83b3368e7b4e":"lgJ39"}],"8uZkL":[function(require,module,exports) {
module.exports = require("50a539079f8d57a2").getBundleURL("7JE76") + "primitives-1-200dpi-084.dad285dd.png" + "?" + Date.now();

},{"50a539079f8d57a2":"lgJ39"}],"3pnGf":[function(require,module,exports) {
module.exports = require("b4557adfbb39010").getBundleURL("7JE76") + "primitives-1-200dpi-085.6b7275ed.png" + "?" + Date.now();

},{"b4557adfbb39010":"lgJ39"}],"k3bNd":[function(require,module,exports) {
module.exports = require("3e89dfe08fee83b7").getBundleURL("7JE76") + "primitives-1-200dpi-086.5ebb8471.png" + "?" + Date.now();

},{"3e89dfe08fee83b7":"lgJ39"}],"7YOwE":[function(require,module,exports) {
module.exports = require("38a22646448668a9").getBundleURL("7JE76") + "primitives-1-200dpi-087.92011ab1.png" + "?" + Date.now();

},{"38a22646448668a9":"lgJ39"}],"aJR03":[function(require,module,exports) {
module.exports = require("27d9df5409874b24").getBundleURL("7JE76") + "primitives-1-200dpi-088.193019b6.png" + "?" + Date.now();

},{"27d9df5409874b24":"lgJ39"}],"2zgvP":[function(require,module,exports) {
module.exports = require("9f5da4b19b9ce097").getBundleURL("7JE76") + "primitives-1-200dpi-089.5a795c3d.png" + "?" + Date.now();

},{"9f5da4b19b9ce097":"lgJ39"}],"6VcoD":[function(require,module,exports) {
module.exports = require("51fa94812d266f86").getBundleURL("7JE76") + "primitives-1-200dpi-090.e0eae675.png" + "?" + Date.now();

},{"51fa94812d266f86":"lgJ39"}],"74q0W":[function(require,module,exports) {
module.exports = require("4fb06821a99ab020").getBundleURL("7JE76") + "primitives-1-200dpi-091.2ddf90d1.png" + "?" + Date.now();

},{"4fb06821a99ab020":"lgJ39"}],"5ClHE":[function(require,module,exports) {
module.exports = require("fba37d84f7c23c67").getBundleURL("7JE76") + "primitives-1-200dpi-092.ae5ae212.png" + "?" + Date.now();

},{"fba37d84f7c23c67":"lgJ39"}],"hFfcP":[function(require,module,exports) {
module.exports = require("4e969934771ef4fe").getBundleURL("7JE76") + "primitives-1-200dpi-093.26b5f1cc.png" + "?" + Date.now();

},{"4e969934771ef4fe":"lgJ39"}],"7ob3J":[function(require,module,exports) {
module.exports = require("f03374fb749bb5a5").getBundleURL("7JE76") + "primitives-1-200dpi-094.5381c889.png" + "?" + Date.now();

},{"f03374fb749bb5a5":"lgJ39"}],"cOjKo":[function(require,module,exports) {
module.exports = require("2f1d9546630e1add").getBundleURL("7JE76") + "primitives-1-200dpi-095.9b792b78.png" + "?" + Date.now();

},{"2f1d9546630e1add":"lgJ39"}],"1qas8":[function(require,module,exports) {
module.exports = require("a89c3180aba694c8").getBundleURL("7JE76") + "primitives-1-200dpi-096.e2884318.png" + "?" + Date.now();

},{"a89c3180aba694c8":"lgJ39"}],"lt8x8":[function(require,module,exports) {
module.exports = require("af53d3783ee517b7").getBundleURL("7JE76") + "primitives-1-200dpi-097.5990ed26.png" + "?" + Date.now();

},{"af53d3783ee517b7":"lgJ39"}],"8d43S":[function(require,module,exports) {
module.exports = require("21b9cc7e51b4e299").getBundleURL("7JE76") + "primitives-1-200dpi-098.8c5346ec.png" + "?" + Date.now();

},{"21b9cc7e51b4e299":"lgJ39"}],"i3usb":[function(require,module,exports) {
module.exports = require("184babe92bdb2833").getBundleURL("7JE76") + "primitives-1-200dpi-099.3f97c261.png" + "?" + Date.now();

},{"184babe92bdb2833":"lgJ39"}],"95kF7":[function(require,module,exports) {
module.exports = require("e60145517b7e89d1").getBundleURL("7JE76") + "primitives-1-200dpi-100.5a959284.png" + "?" + Date.now();

},{"e60145517b7e89d1":"lgJ39"}],"iRvfi":[function(require,module,exports) {
module.exports = require("57433b79cecb8d41").getBundleURL("7JE76") + "primitives-1-200dpi-101.0f6757a2.png" + "?" + Date.now();

},{"57433b79cecb8d41":"lgJ39"}],"7Dy1V":[function(require,module,exports) {
module.exports = require("a1ce588d0dca7fd6").getBundleURL("7JE76") + "primitives-1-200dpi-102.0739cfd2.png" + "?" + Date.now();

},{"a1ce588d0dca7fd6":"lgJ39"}],"8BbIG":[function(require,module,exports) {
module.exports = require("c12a22177b9233ed").getBundleURL("7JE76") + "primitives-1-200dpi-103.37a2b4ff.png" + "?" + Date.now();

},{"c12a22177b9233ed":"lgJ39"}],"kYtdN":[function(require,module,exports) {
module.exports = require("bd3cdb465d39bb74").getBundleURL("7JE76") + "primitives-1-200dpi-104.c148e755.png" + "?" + Date.now();

},{"bd3cdb465d39bb74":"lgJ39"}],"hxcdJ":[function(require,module,exports) {
module.exports = require("82f521c8e2757b82").getBundleURL("7JE76") + "primitives-1-200dpi-105.294685e5.png" + "?" + Date.now();

},{"82f521c8e2757b82":"lgJ39"}],"dhdbO":[function(require,module,exports) {
module.exports = require("4dff64810b1bd383").getBundleURL("7JE76") + "primitives-1-200dpi-106.efe72b5a.png" + "?" + Date.now();

},{"4dff64810b1bd383":"lgJ39"}],"fJr8z":[function(require,module,exports) {
module.exports = require("885daaa3ae43b07e").getBundleURL("7JE76") + "primitives-1-200dpi-107.0961bccc.png" + "?" + Date.now();

},{"885daaa3ae43b07e":"lgJ39"}],"18fxD":[function(require,module,exports) {
module.exports = require("923fbf4c9e751520").getBundleURL("7JE76") + "primitives-1-200dpi-108.9bf03b20.png" + "?" + Date.now();

},{"923fbf4c9e751520":"lgJ39"}],"l2Y8i":[function(require,module,exports) {
module.exports = require("3344b9b3dc1cb634").getBundleURL("7JE76") + "primitives-1-200dpi-109.ed2744b4.png" + "?" + Date.now();

},{"3344b9b3dc1cb634":"lgJ39"}],"l1iu5":[function(require,module,exports) {
module.exports = require("de0748530f28f3ee").getBundleURL("7JE76") + "primitives-1-200dpi-110.4f9a47d6.png" + "?" + Date.now();

},{"de0748530f28f3ee":"lgJ39"}],"5spXf":[function(require,module,exports) {
module.exports = require("4e8b0c8e763acb").getBundleURL("7JE76") + "primitives-1-200dpi-111.43bf4a64.png" + "?" + Date.now();

},{"4e8b0c8e763acb":"lgJ39"}],"gs2NL":[function(require,module,exports) {
module.exports = require("fc1fd2d493d360a7").getBundleURL("7JE76") + "primitives-1-200dpi-112.46a01378.png" + "?" + Date.now();

},{"fc1fd2d493d360a7":"lgJ39"}],"2DgWL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SelectionState", ()=>SelectionState);
parcelHelpers.export(exports, "MandalaState", ()=>MandalaState);
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
    constructor({ canvasWidth = 800, canvasHeight = 800 } = {}){
        this.primitiveGroup = new Map();
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    addPrimitive(symbol, primitive, { distance = 0.5, angle = 0, rotation = 0, scale = 0.1, order = 1, multiplicity = 1, flip = false } = {}) {
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
                order,
                multiplicity,
                flip
            },
            offCanvas
        });
        drawPrimitive(this.primitiveGroup, symbol);
    }
    removePrimitive(symbol) {
        return this.primitiveGroup.delete(symbol);
    }
    getPrimitiveState(symbol) {
        return this.primitiveGroup.get(symbol);
    }
    updatePrimitiveState(symbol, { distance, angle, rotation, scale, order, multiplicity, flip } = {}) {
        const oldProps = this.primitiveGroup.get(symbol).props;
        const newProps = {};
        newProps.distance = distance ?? oldProps.distance;
        newProps.angle = angle ?? oldProps.angle;
        newProps.rotation = rotation ?? oldProps.rotation;
        newProps.scale = scale ?? oldProps.scale;
        newProps.order = order ?? oldProps.order;
        newProps.multiplicity = multiplicity ?? oldProps.multiplicity;
        newProps.flip = flip ?? oldProps.flip;
        this.primitiveGroup.get(symbol).props = newProps;
        drawPrimitive(this.primitiveGroup, symbol);
    }
    drawImageTo(canvas) {
        const context = canvas.getContext("2d");
        this.primitiveGroup.forEach(({ offCanvas })=>{
            context.drawImage(offCanvas, 0, 0);
        });
    }
}
function drawPrimitive(primitives, symbol) {
    const { primitive, props, offCanvas } = primitives.get(symbol);
    primitive.draw(offCanvas, props);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aaZ0V":[function(require,module,exports) {
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
}
/* Used Primitives */ function addUsedPrimitive(primitive, symbol, selectHandler, deleteHandler) {
    const usedPrimitivesBox = document.querySelector("#prim-used-box");
    const primitiveEntry = document.createElement("div");
    const primitiveIcon = document.createElement("img");
    primitiveIcon.classList.add("image-icon");
    primitiveIcon.src = primitive.url;
    primitiveEntry.appendChild(primitiveIcon);
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
    console.log(flag);
    flipCheckbox.checked = flag;
}

},{"./primitives.js":"9GoLL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequiref046")

//# sourceMappingURL=index.b8fca702.js.map
