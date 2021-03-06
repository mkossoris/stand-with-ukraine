(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ../../dist/constants.js
  var require_constants = __commonJS({
    "../../dist/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WEBSITE_URL = exports.SWUColors = exports.DonateUrls = void 0;
      exports.DonateUrls = {
        UKRAINE_RED_CROSS: "https://donate.redcrossredcrescent.org/ua/donate/~my-donation?_cv=1",
        GLOBAL_GIVING: "https://www.globalgiving.org/projects/ukraine-crisis-relief-fund/",
        UNHCR: "https://give.unrefugees.org/220224ukr_emer_d_4983/",
        INTERNATIONAL_RESCUE: "https://help.rescue.org/donate-fr/ukraine-crisis?initialms=ws_modl_fy22_ukraine_mmus&ms=ws_modl_fy22_ukraine_mmus"
      };
      exports.SWUColors = {
        PURPLE: "#818ec2",
        TEAL: "#81bcc2",
        BLUE: "#4789da",
        GREEN: "#6cb88e",
        GOLD: "#dab347",
        PINK: "#e48ab0",
        RED: "#dc4a4a"
      };
      exports.WEBSITE_URL = "#";
    }
  });

  // ../../dist/core/banner.js
  var require_banner = __commonJS({
    "../../dist/core/banner.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.mergeOptionsWithDefaults = void 0;
      var constants_1 = require_constants();
      var DEFAULT_BANNER_OPTIONS = {
        bannerColor: "PURPLE",
        text: "We #StandWithUkraine",
        helpLinkText: "Help Provide Aid to Ukraine"
      };
      var mergeOptionsWithDefaults = (options = {}) => {
        const mergedOptions = {
          ...DEFAULT_BANNER_OPTIONS,
          ...options
        };
        console.log({ mergedOptions, options });
        if (constants_1.SWUColors.hasOwnProperty(mergedOptions.bannerColor)) {
          const colorKey = mergedOptions.bannerColor;
          mergedOptions.bannerColor = constants_1.SWUColors[colorKey];
        }
        return mergedOptions;
      };
      exports.mergeOptionsWithDefaults = mergeOptionsWithDefaults;
    }
  });

  // ../../dist/core/createSWUBanner.js
  var require_createSWUBanner = __commonJS({
    "../../dist/core/createSWUBanner.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createSWUBanner = void 0;
      var constants_1 = require_constants();
      var banner_1 = require_banner();
      var _options;
      var _swuBannerElement;
      var createSWUBanner2 = (options) => {
        if (_swuBannerElement) {
          return _swuBannerElement;
        }
        _options = (0, banner_1.mergeOptionsWithDefaults)(options);
        const bannerElement = document.createElement("div");
        bannerElement.classList.add("swu-banner");
        _swuBannerElement = {
          element: bannerElement,
          type: "banner",
          update: updateSWUBanner
        };
        updateSWUBanner(_options);
        if (_options.containerElement) {
          _options.containerElement.prepend(bannerElement);
          _swuBannerElement.containerElement = _options.containerElement;
        } else {
          document.body.prepend(bannerElement);
        }
        return _swuBannerElement;
      };
      exports.createSWUBanner = createSWUBanner2;
      var updateSWUBanner = (options) => {
        _options = {
          ..._options,
          ...options
        };
        const { element } = _swuBannerElement;
        element.innerHTML = "";
        element.style.backgroundColor = _options.darkTheme ? "#222425" : _options.bannerColor;
        const bannerTextElement = document.createElement("span");
        bannerTextElement.className = "swu-banner-text";
        bannerTextElement.textContent = `${_options.text} `;
        element.append(bannerTextElement);
        console.log({ _options });
        if (_options.helpLinkText === false) {
          return;
        }
        const bannerHelpLink = document.createElement("a");
        bannerHelpLink.className = "swu-banner-help";
        bannerHelpLink.textContent = _options.helpLinkText;
        bannerHelpLink.href = constants_1.WEBSITE_URL;
        bannerHelpLink.target = "_blank";
        if (_options.darkTheme) {
          bannerHelpLink.style.color = _options.bannerColor;
          bannerHelpLink.style.textDecoration = "none";
        }
        element.append(bannerHelpLink);
      };
    }
  });

  // ../../dist/core/ribbon.js
  var require_ribbon = __commonJS({
    "../../dist/core/ribbon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.mergeOptionsWithDefaults = void 0;
      var DEFAULT_BANNER_OPTIONS = {
        helpLinkText: "Click to learn more.",
        position: "bottom-left",
        text: "We #StandWithUkraine."
      };
      var mergeOptionsWithDefaults = (options = {}) => {
        const mergedOptions = {
          ...DEFAULT_BANNER_OPTIONS,
          ...options
        };
        if (options.helpLinkText === false) {
          mergedOptions.helpLinkText = "";
        }
        return mergedOptions;
      };
      exports.mergeOptionsWithDefaults = mergeOptionsWithDefaults;
    }
  });

  // ../../dist/core/createSWURibbon.js
  var require_createSWURibbon = __commonJS({
    "../../dist/core/createSWURibbon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createSWURibbon = void 0;
      var constants_1 = require_constants();
      var ribbon_1 = require_ribbon();
      var _options;
      var _swuRibbonElement;
      var createSWURibbon2 = (options) => {
        if (_swuRibbonElement) {
          return _swuRibbonElement;
        }
        _options = (0, ribbon_1.mergeOptionsWithDefaults)(options);
        const ribbonElement = document.createElement("div");
        ribbonElement.onclick = () => window.open(constants_1.WEBSITE_URL, "_blank");
        _swuRibbonElement = {
          element: ribbonElement,
          type: "ribbon",
          update: updateSWURibbon
        };
        updateSWURibbon(_options);
        if (_options.containerElement) {
          _options.containerElement.append(ribbonElement);
          _swuRibbonElement.containerElement = _options.containerElement;
        } else {
          document.body.prepend(ribbonElement);
        }
        return _swuRibbonElement;
      };
      exports.createSWURibbon = createSWURibbon2;
      var updateSWURibbon = (options) => {
        const { element } = _swuRibbonElement;
        _options = {
          ..._options,
          ...options
        };
        element.title = `${_options.text} ${_options.helpLinkText}`;
        element.className = "";
        element.classList.add("swu-ribbon", `swu-ribbon-${_options.position}`);
      };
    }
  });

  // ../../dist/types.js
  var require_types = __commonJS({
    "../../dist/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../dist/core/index.js
  var require_core = __commonJS({
    "../../dist/core/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SWUColors = void 0;
      var constants_1 = require_constants();
      Object.defineProperty(exports, "SWUColors", { enumerable: true, get: function() {
        return constants_1.SWUColors;
      } });
      __exportStar(require_createSWUBanner(), exports);
      __exportStar(require_createSWURibbon(), exports);
      __exportStar(require_types(), exports);
    }
  });

  // ../../dist/index.js
  var require_dist = __commonJS({
    "../../dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_core(), exports);
    }
  });

  // index.ts
  var import_stand_with_ukraine = __toESM(require_dist());
  var banner = (0, import_stand_with_ukraine.createSWUBanner)({
    bannerColor: import_stand_with_ukraine.SWUColors.BLUE,
    containerElement: document.getElementById("header"),
    darkTheme: true,
    helpLinkText: false
  });
  var ribbon = (0, import_stand_with_ukraine.createSWURibbon)({
    position: "bottom-left"
  });
  setTimeout(() => {
    banner.update({ bannerColor: import_stand_with_ukraine.SWUColors.PINK });
    ribbon.update({ position: "bottom-right" });
  }, 2e3);
})();
