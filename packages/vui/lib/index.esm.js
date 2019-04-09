import Vue from 'vue';
import { isStyleUnit, deepCopy } from '@mobov/es-helper';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vueClassComponent_common = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue$1 = _interopDefault(Vue);

var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue$1.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (process.env.NODE_ENV !== 'production') {
        if (!(Component.prototype instanceof Vue$1) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue$1
        ? superProto.constructor
        : Vue$1;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (process.env.NODE_ENV !== 'production' &&
            reservedPropertyNames.indexOf(key) >= 0) {
            warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                'conflicts with reserved property name of Vue internal. ' +
                'It may cause unexpected behavior of the component. Consider renaming the property.');
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

exports.default = Component;
exports.createDecorator = createDecorator;
exports.mixins = mixins;
});

var Component = unwrapExports(vueClassComponent_common);
var vueClassComponent_common_1 = vueClassComponent_common.createDecorator;
var vueClassComponent_common_2 = vueClassComponent_common.mixins;

/** vue-property-decorator verson 7.3.0 MIT LICENSE copyright 2018 kaorun343 */
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return vueClassComponent_common_1(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return vueClassComponent_common_1(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return vueClassComponent_common_1(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return vueClassComponent_common_1(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

var MApp =
/*#__PURE__*/
function (_Vue) {
  _inherits(MApp, _Vue);

  function MApp() {
    _classCallCheck(this, MApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MApp).apply(this, arguments));
  }

  _createClass(MApp, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var $slots = this.$slots;
      return h("div", {
        "staticClass": "m-app"
      }, [$slots.default]);
    }
  }]);

  return MApp;
}(Vue);

MApp = __decorate([Component], MApp);
var MApp$1 = MApp;

/* istanbul ignore next */

MApp$1.install = function (Vue) {
  Vue.component('MApp', MApp$1);
};

/* eslint-disable */
var Buffer =
/*#__PURE__*/
function () {
  function Buffer() {
    _classCallCheck(this, Buffer);

    this.docStylesVal = false;
  }
  /**
   * 根文档样式表
   * @return {{}}
   */


  _createClass(Buffer, [{
    key: "docStyles",
    get: function get() {
      if (!this.docStylesVal) {
        var $dom = document.documentElement;
        this.docStylesVal = getComputedStyle($dom);
      }

      return this.docStylesVal;
    }
  }]);

  return Buffer;
}();

new Buffer();

var Elevation = ['none', '(0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12))', '(0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12))', '(0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12))', '(0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12))', '(0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12))', '(0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12))', '(0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12))', '(0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12))', '(0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12))', '(0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12))', '(0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12))', '(0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12))', '(0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12))', '(0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12))', '(0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12))', '(0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12))', '(0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12))', '(0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12))', '(0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12))', '(0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12))', '(0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12))', '(0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12))', '(0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12))', '(0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12))'];

var Palette = {
  red_50: '#ffebee',
  red_100: '#ffcdd2',
  red_200: '#ef9a9a',
  red_300: '#e57373',
  red_400: '#ef5350',
  red_500: '#f44336',
  red_600: '#e53935',
  red_700: '#d32f2f',
  red_800: '#c62828',
  red_900: '#b71c1c',
  pink_50: '#fce4ec',
  pink_100: '#f8bbd0',
  pink_200: '#f48fb1',
  pink_300: '#f06292',
  pink_400: '#ec407a',
  pink_500: '#e91e63',
  pink_600: '#d81b60',
  pink_700: '#c2185b',
  pink_800: '#ad1457',
  pink_900: '#880e4f',
  pink_A100: '#ff80ab',
  pink_A200: '#ff4081',
  pink_A400: '#f50057',
  pink_A700: '#c51162',
  purple_50: '#f3e5f5',
  purple_100: '#e1bee7',
  purple_200: '#ce93d8',
  purple_300: '#ba68c8',
  purple_400: '#ab47bc',
  purple_500: '#9c27b0',
  purple_600: '#8e24aa',
  purple_700: '#7b1fa2',
  purple_800: '#6a1b9a',
  purple_900: '#4a148c',
  purple_A100: '#ea80fc',
  purple_A200: '#e040fb',
  purple_A400: '#d500f9',
  purple_A700: '#aa00ff',
  deeppurple_50: '#ede7f6',
  deeppurple_100: '#d1c4e9',
  deeppurple_200: '#b39ddb',
  deeppurple_300: '#9575cd',
  deeppurple_400: '#7e57c2',
  deeppurple_500: '#673ab7',
  deeppurple_600: '#5e35b1',
  deeppurple_700: '#512da8',
  deeppurple_800: '#4527a0',
  deeppurple_900: '#311b92',
  deeppurple_A100: '#b388ff',
  deeppurple_A200: '#7c4dff',
  deeppurple_A400: '#651fff',
  deeppurple_A700: '#6200ea',
  blue_50: '#e3f2fd',
  blue_100: '#bbdefb',
  blue_200: '#90caf9',
  blue_300: '#64b5f6',
  blue_400: '#42a5f5',
  blue_500: '#2196f3',
  blue_600: '#1e88e5',
  blue_700: '#1976d2',
  blue_800: '#1565c0',
  blue_900: '#0d47a1',
  blue_A100: '#82b1ff',
  blue_A200: '#448aff',
  blue_A400: '#2979ff',
  blue_A700: '#2962ff',
  lightblue_50: '#e1f5fe',
  lightblue_100: '#b3e5fc',
  lightblue_200: '#81d4fa',
  lightblue_300: '#4fc3f7',
  lightblue_400: '#29b6f6',
  lightblue_500: '#03a9f4',
  lightblue_600: '#039be5',
  lightblue_700: '#0288d1',
  lightblue_800: '#0277bd',
  lightblue_900: '#01579b',
  lightblue_A100: '#80d8ff',
  lightblue_A200: '#40c4ff',
  lightblue_A400: '#00b0ff',
  lightblue_A700: '#0091ea',
  cyan_50: '#e0f7fa',
  cyan_100: '#b2ebf2',
  cyan_200: '#80deea',
  cyan_300: '#4dd0e1',
  cyan_400: '#26c6da',
  cyan_500: '#00bcd4',
  cyan_600: '#00acc1',
  cyan_700: '#0097a7',
  cyan_800: '#00838f',
  cyan_900: '#006064',
  cyan_A100: '#84ffff',
  cyan_A200: '#18ffff',
  cyan_A400: '#00e5ff',
  cyan_A700: '#00b8d4',
  teal_50: '#e0f2f1',
  teal_100: '#b2dfdb',
  teal_200: '#80cbc4',
  teal_300: '#4db6ac',
  teal_400: '#26a69a',
  teal_500: '#009688',
  teal_600: '#00897b',
  teal_700: '#00796b',
  teal_800: '#00695c',
  teal_900: '#004d40',
  teal_A100: '#a7ffeb',
  teal_A200: '#64ffda',
  teal_A400: '#1de9b6',
  teal_A700: '#00bfa5',
  green_50: '#e8f5e9',
  green_100: '#c8e6c9',
  green_200: '#a5d6a7',
  green_300: '#81c784',
  green_400: '#66bb6a',
  green_500: '#4caf50',
  green_600: '#43a047',
  green_700: '#388e3c',
  green_800: '#2e7d32',
  green_900: '#1b5e20',
  green_A100: '#b9f6ca',
  green_A200: '#69f0ae',
  green_A400: '#00e676',
  green_A700: '#00c853',
  lightgreen_50: '#f1f8e9',
  lightgreen_100: '#dcedc8',
  lightgreen_200: '#c5e1a5',
  lightgreen_300: '#aed581',
  lightgreen_400: '#9ccc65',
  lightgreen_500: '#8bc34a',
  lightgreen_600: '#7cb342',
  lightgreen_700: '#689f38',
  lightgreen_800: '#558b2f',
  lightgreen_900: '#33691e',
  lightgreen_A100: '#ccff90',
  lightgreen_A200: '#b2ff59',
  lightgreen_A400: '#76ff03',
  lightgreen_A700: '#64dd17',
  lime_50: '#f9fbe7',
  lime_100: '#f0f4c3',
  lime_200: '#e6ee9c',
  lime_300: '#dce775',
  lime_400: '#d4e157',
  lime_500: '#cddc39',
  lime_600: '#c0ca33',
  lime_700: '#afb42b',
  lime_800: '#9e9d24',
  lime_900: '#827717',
  lime_A100: '#f4ff81',
  lime_A200: '#eeff41',
  lime_A400: '#c6ff00',
  lime_A700: '#aeea00',
  yellow_50: '#fffde7',
  yellow_100: '#fff9c4',
  yellow_200: '#fff59d',
  yellow_300: '#fff176',
  yellow_400: '#ffee58',
  yellow_500: '#ffeb3b',
  yellow_600: '#fdd835',
  yellow_700: '#fbc02d',
  yellow_800: '#f9a825',
  yellow_900: '#f57f17',
  yellow_A100: '#ffff8d',
  yellow_A200: '#ffff00',
  yellow_A400: '#ffea00',
  yellow_A700: '#ffd600',
  amber_50: '#fff8e1',
  amber_100: '#ffecb3',
  amber_200: '#ffe082',
  amber_300: '#ffd54f',
  amber_400: '#ffca28',
  amber_500: '#ffc107',
  amber_600: '#ffb300',
  amber_700: '#ffa000',
  amber_800: '#ff8f00',
  amber_900: '#ff6f00',
  amber_A100: '#ffe57f',
  amber_A200: '#ffd740',
  amber_A400: '#ffc400',
  amber_A700: '#ffab00',
  orange_50: '#fff3e0',
  orange_100: '#ffe0b2',
  orange_200: '#ffcc80',
  orange_300: '#ffb74d',
  orange_400: '#ffa726',
  orange_500: '#ff9800',
  orange_600: '#f57c00',
  orange_700: '#f57c00',
  orange_800: '#ef6c00',
  orange_900: '#e65100',
  orange_A100: '#ffd180',
  orange_A200: '#ffab40',
  orange_A400: '#ff9100',
  orange_A700: '#ff6d00',
  deeporange_50: '#fbe9e7',
  deeporange_100: '#ffccbc',
  deeporange_200: '#ffab91',
  deeporange_300: '#ff8a65',
  deeporange_400: '#ff7043',
  deeporange_500: '#ff5722',
  deeporange_600: '#f4511e',
  deeporange_700: '#e64a19',
  deeporange_800: '#d84315',
  deeporange_900: '#bf360c',
  deeporange_A100: '#ff9e80',
  deeporange_A200: '#ff6e40',
  deeporange_A400: '#ff3d00',
  deeporange_A700: '#dd2c00',
  brown_50: '#efebe9',
  brown_100: '#d7ccc8',
  brown_200: '#bcaaa4',
  brown_300: '#a1887f',
  brown_400: '#8d6e63',
  brown_500: '#795548',
  brown_600: '#6d4c41',
  brown_700: '#5d4037',
  brown_800: '#4e342e',
  brown_900: '#3e2723',
  brown_A100: '#d7ccc8',
  brown_A200: '#bcaaa4',
  brown_A400: '#8d6e63',
  brown_A700: '#5d4037',
  grey_50: '#fafafa',
  grey_100: '#f5f5f5',
  grey_200: '#eeeeee',
  grey_300: '#e0e0e0',
  grey_400: '#bdbdbd',
  grey_500: '#9e9e9e',
  grey_600: '#757575',
  grey_700: '#616161',
  grey_800: '#424242',
  grey_900: '#212121',
  grey_A100: '#ffffff',
  grey_A200: '#000000',
  grey_A400: '#303030',
  grey_A700: '#616161',
  bluegrey_50: '#eceff1',
  bluegrey_100: '#cfd8dc',
  bluegrey_200: '#b0bec5',
  bluegrey_300: '#90a4ae',
  bluegrey_400: '#78909c',
  bluegrey_500: '#607d8b',
  bluegrey_600: '#546e7a',
  bluegrey_700: '#455a64',
  bluegrey_800: '#37474f',
  bluegrey_900: '#263238',
  bluegrey_A100: '#cfd8dc',
  bluegrey_A200: '#b0bec5',
  bluegrey_A400: '#78909c',
  bluegrey_A700: '#455a64'
};

var ELEVATION = Elevation.map(function (item, index) {
  return index;
});
var Status;

(function (Status) {
  Status[Status["success"] = 0] = "success";
  Status[Status["pending"] = 1] = "pending";
  Status[Status["failure"] = 2] = "failure";
})(Status || (Status = {}));

var Breakpoint;

(function (Breakpoint) {
  Breakpoint[Breakpoint["xs"] = 0] = "xs";
  Breakpoint[Breakpoint["sm"] = 576] = "sm";
  Breakpoint[Breakpoint["md"] = 768] = "md";
  Breakpoint[Breakpoint["lg"] = 992] = "lg";
  Breakpoint[Breakpoint["xl"] = 1200] = "xl";
})(Breakpoint || (Breakpoint = {}));

var BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl'];
var Size;

(function (Size) {
  Size["xs"] = "xs";
  Size["sm"] = "sm";
  Size["md"] = "md";
  Size["lg"] = "lg";
  Size["xl"] = "xl";
})(Size || (Size = {}));

var SIZE = Object.keys(Size);
var Variety;

(function (Variety) {
  Variety["default"] = "default";
  Variety["flat"] = "flat";
  Variety["outline"] = "outline";
})(Variety || (Variety = {}));

var VARIETY = Object.keys(Variety);
var Shape;

(function (Shape) {
  Shape["circle"] = "circle";
  Shape["round"] = "round";
  Shape["corner"] = "corner";
  Shape["square"] = "square";
})(Shape || (Shape = {}));

var SHAPE = Object.keys(Shape);
var Color;

(function (Color) {
  Color["primary"] = "primary";
  Color["error"] = "error";
  Color["success"] = "success";
  Color["warning"] = "warning";
  Color["default"] = "default";
})(Color || (Color = {}));

var COLOR = Object.keys(Color);
var Mode;

(function (Mode) {
  Mode["day"] = "day";
  Mode["night"] = "night";
})(Mode || (Mode = {}));

var Fill;

(function (Fill) {
  Fill["left"] = "left";
  Fill["both"] = "both";
  Fill["right"] = "right";
  Fill["none"] = "none";
})(Fill || (Fill = {}));

var FILL = Object.keys(Fill);
var FlexJustify;

(function (FlexJustify) {
  FlexJustify["start"] = "start";
  FlexJustify["center"] = "center";
  FlexJustify["end"] = "end";
  FlexJustify["between"] = "between";
  FlexJustify["around"] = "around";
  FlexJustify["evenly"] = "evenly";
  FlexJustify["none"] = "none";
})(FlexJustify || (FlexJustify = {}));

var FLEX_JUSTIFY = Object.keys(FlexJustify);
var FlexWrap;

(function (FlexWrap) {
  FlexWrap["normal"] = "normal";
  FlexWrap["reverse"] = "reverse";
  FlexWrap["none"] = "none";
})(FlexWrap || (FlexWrap = {}));

var FLEX_WRAP = Object.keys(FlexWrap);
var FlexAlign;

(function (FlexAlign) {
  FlexAlign["start"] = "start";
  FlexAlign["center"] = "center";
  FlexAlign["end"] = "end";
  FlexAlign["stretch"] = "stretch";
})(FlexAlign || (FlexAlign = {}));

var FLEX_ALIGN = Object.keys(FlexAlign);
var Align;

(function (Align) {
  Align["left"] = "left";
  Align["center"] = "center";
  Align["right"] = "right";
})(Align || (Align = {}));

var ALIGN = Object.keys(Align);
var DateValueFormat;

(function (DateValueFormat) {
  DateValueFormat["timestamp"] = "timestamp";
  DateValueFormat["Date"] = "Date";
})(DateValueFormat || (DateValueFormat = {}));

var DatePickerType;

(function (DatePickerType) {
  DatePickerType["datetime"] = "datetime";
  DatePickerType["date"] = "date";
  DatePickerType["year"] = "year";
  DatePickerType["month"] = "month";
  DatePickerType["time"] = "time";
})(DatePickerType || (DatePickerType = {}));

var DateValueType;

(function (DateValueType) {
  DateValueType["year"] = "year";
  DateValueType["month"] = "month";
  DateValueType["week"] = "week";
  DateValueType["date"] = "date";
  DateValueType["time"] = "time";
  DateValueType["hours"] = "hours";
  DateValueType["minutes"] = "minutes";
})(DateValueType || (DateValueType = {}));

var DateTimeValueType;

(function (DateTimeValueType) {
  DateTimeValueType["time"] = "time";
  DateTimeValueType["hours"] = "hours";
  DateTimeValueType["minutes"] = "minutes";
})(DateTimeValueType || (DateTimeValueType = {}));

var constant = /*#__PURE__*/Object.freeze({
    Elevation: Elevation,
    Palette: Palette,
    ELEVATION: ELEVATION,
    get Status () { return Status; },
    get Breakpoint () { return Breakpoint; },
    BREAKPOINT: BREAKPOINT,
    get Size () { return Size; },
    SIZE: SIZE,
    get Variety () { return Variety; },
    VARIETY: VARIETY,
    get Shape () { return Shape; },
    SHAPE: SHAPE,
    get Color () { return Color; },
    COLOR: COLOR,
    get Mode () { return Mode; },
    get Fill () { return Fill; },
    FILL: FILL,
    get FlexJustify () { return FlexJustify; },
    FLEX_JUSTIFY: FLEX_JUSTIFY,
    get FlexWrap () { return FlexWrap; },
    FLEX_WRAP: FLEX_WRAP,
    get FlexAlign () { return FlexAlign; },
    FLEX_ALIGN: FLEX_ALIGN,
    get Align () { return Align; },
    ALIGN: ALIGN,
    get DateValueFormat () { return DateValueFormat; },
    get DatePickerType () { return DatePickerType; },
    get DateValueType () { return DateValueType; },
    get DateTimeValueType () { return DateTimeValueType; }
});

/**
 * 获取真实渲染样式尺寸
 * @param value
 * @return {string}
 */

function getStyleSize(value) {
  return typeof value !== 'number' && isStyleUnit(value) ? value : "".concat(value, "px");
}
/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */


function genColor() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (COLOR.includes(val)) {
      styles["--".concat(compName, "-color")] = "var(--m-color-".concat(val, ")");
    } else {
      styles["--".concat(compName, "-color")] = "".concat(val);
    }
  }
}
/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */

function genFontColor() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (COLOR.includes(val)) {
      styles["--".concat(compName, "-font-color")] = "var(--m-color-".concat(val, ")");
    } else {
      styles["--".concat(compName, "-font-color")] = "".concat(val);
    }
  }
}
/**
 * 计算尺寸样式值
 * @param styles
 * @param compName
 * @param val
 */

function genSize() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (typeof val === 'number') {
      styles["--".concat(compName, "-size")] = "".concat(val, "px");
    } else if (SIZE.includes(val)) {
      styles["--".concat(compName, "-size")] = "var(--".concat(compName, "-size-").concat(val, ")");
    } else {
      styles["--".concat(compName, "-size")] = "".concat(val);
    }
  }
}
/**
 * 计算阴影
 * @param styles
 * @param compName
 * @param val
 */

function genElevation() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (ELEVATION.includes(val)) {
      styles["--".concat(compName, "-elevation")] = "var(--m-elevation-".concat(val, ")");
    }
  }
}
/**
 *
 * @param styles
 * @param compName
 * @param val
 */

function genSpace(styles, compName, val) {
  if (val !== undefined) {
    if (typeof val === 'number') {
      styles["--".concat(compName, "-space")] = "".concat(val, "px");
    } else if (BREAKPOINT.includes(val)) {
      styles["--".concat(compName, "-space")] = "var(--m-space-".concat(val, ")");
    } else {
      styles["--".concat(compName, "-space")] = "".concat(val);
    }
  }
}
/**
 * 计算形状
 * @param classes
 * @param val
 */

function genShape() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var val = arguments.length > 1 ? arguments[1] : undefined;

  if (val !== undefined) {
    if (SHAPE.includes(val)) {
      classes["m-shape-".concat(val)] = true;
    }
  }
}
/**
 * 计算形态
 * @param classes
 * @param val
 */

function genVariety() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var val = arguments.length > 1 ? arguments[1] : undefined;

  if (val !== undefined) {
    if (VARIETY.includes(val)) {
      classes["m-variety-".concat(val)] = true;
    }
  }
}
//   return ''
// } else {
//   let result = val
//
//   if (HoverColor.exist(val)) {
//     result = HoverColor.getItem(val)
//   } else {
//     const realVal = getCSSVal(val)
//     const colorObj = Color(realVal)
//
//     result = colorObj.isDark()
//       ? colorObj.lighten(0.3)
//       : colorObj.darken(0.1)
//     HoverColor.setItem(val, result)
//   }
//   return `--${compName}-hover-color: ${val})`
// }

/***
 * 通用样式
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */

function genStaticStyles(styles, compName, property, val) {
  if (val !== undefined) {
    styles["--".concat(compName, "-").concat(property)] = val;
  }
}

var compName = 'm-view';

var MView =
/*#__PURE__*/
function (_Vue) {
  _inherits(MView, _Vue);

  function MView() {
    var _this;

    _classCallCheck(this, MView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MView).apply(this, arguments));
    _this.isHeader = false;
    _this.isFooter = false;
    _this.isLeft = false;
    _this.isRight = false;
    return _this;
  }

  _createClass(MView, [{
    key: "RHeader",
    value: function RHeader() {
      var h = this.$createElement;
      return h("transition", {
        "attrs": {
          "name": "m-transition-slide-down"
        }
      }, [this.isHeader ? h("div", {
        "staticClass": "".concat(compName, "-header")
      }, [this.$slots.header]) : undefined]);
    }
  }, {
    key: "RFooter",
    value: function RFooter() {
      var h = this.$createElement;
      return h("transition", {
        "attrs": {
          "name": "m-transition-slide-up"
        }
      }, [this.isFooter ? h("div", {
        "staticClass": "".concat(compName, "-footer")
      }, [this.$slots.footer]) : undefined]);
    }
  }, {
    key: "RLeft",
    value: function RLeft() {
      var h = this.$createElement;
      return h("transition", {
        "attrs": {
          "name": "m-transition-slide-left"
        }
      }, [this.isLeft ? h("div", {
        "staticClass": "".concat(compName, "-left")
      }, [this.$slots.left]) : undefined]);
    }
  }, {
    key: "RRight",
    value: function RRight() {
      var h = this.$createElement;
      return h("transition", {
        "attrs": {
          "name": "m-transition-slide-right"
        }
      }, [this.isRight ? h("div", {
        "staticClass": "".concat(compName, "-right")
      }, [this.$slots.right]) : undefined]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var $slots = this.$slots,
          styles = this.styles,
          classes = this.classes,
          RHeader = this.RHeader,
          RFooter = this.RFooter,
          RLeft = this.RLeft,
          RRight = this.RRight;
      this.isHeader = $slots.header !== undefined;
      this.isFooter = $slots.footer !== undefined;
      this.isLeft = $slots.left !== undefined;
      this.isRight = $slots.right !== undefined;
      console.log(styles);
      return h("div", {
        "staticClass": compName,
        "style": styles,
        "class": classes
      }, [h("section", {
        "staticClass": "".concat(compName, "-main")
      }, [$slots.default]), RHeader(), RFooter(), RLeft(), RRight()]);
    }
  }, {
    key: "classes",
    get: function get() {
      var _ref;

      var fillHeader = this.fillHeader,
          fillFooter = this.fillFooter,
          isHeader = this.isHeader,
          isFooter = this.isFooter,
          isLeft = this.isLeft,
          isRight = this.isRight;
      return _ref = {
        'm--with-header': isHeader,
        'm--with-footer': isFooter,
        'm--with-left': isLeft,
        'm--with-right': isRight
      }, _defineProperty(_ref, "m--fill-header-".concat(fillHeader), true), _defineProperty(_ref, "m--fill-footer-".concat(fillFooter), true), _ref;
    }
  }, {
    key: "styles",
    get: function get() {
      var isHeader = this.isHeader,
          isFooter = this.isFooter,
          isLeft = this.isLeft,
          isRight = this.isRight,
          headerSize = this.headerSize,
          footerSize = this.footerSize,
          leftSize = this.leftSize,
          rightSize = this.rightSize;
      var styles = {};

      if (isHeader) {
        genSize(styles, "".concat(compName, "-header"), headerSize);
      }

      if (isFooter) {
        genSize(styles, "".concat(compName, "-footer"), footerSize);
      }

      if (isLeft) {
        genSize(styles, "".concat(compName, "-left"), leftSize);
      }

      if (isRight) {
        genSize(styles, "".concat(compName, "-right"), rightSize);
      }

      return styles;
    }
  }]);

  return MView;
}(Vue);

__decorate([Prop({
  type: String,
  default: Fill.both
}), __metadata("design:type", String)], MView.prototype, "fillHeader", void 0);

__decorate([Prop({
  type: String,
  default: Fill.both
}), __metadata("design:type", String)], MView.prototype, "fillFooter", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "headerSize", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "footerSize", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "leftSize", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "rightSize", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MView.prototype, "headerIndex", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", Number)], MView.prototype, "footerIndex", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", Number)], MView.prototype, "leftIndex", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", Number)], MView.prototype, "rightIndex", void 0);

MView = __decorate([Component], MView);
var MView$1 = MView;

/* istanbul ignore next */

MView$1.install = function (Vue) {
  Vue.component('MView', MView$1);
};

var compName$1 = 'm-icon';
var SIZE$1 = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 50
};
var Icons = {};
function register() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var item in data) {
    if (data.hasOwnProperty(item)) {
      var icon = data[item];

      if (icon.d) {
        if (!icon.paths) {
          icon.paths = [];
        }

        icon.paths.push({
          d: icon.d
        });
      }

      if (icon.points) {
        if (!icon.polygons) {
          icon.polygons = [];
        }

        icon.polygons.push({
          points: icon.points
        });
      }

      Icons[item] = icon;
    }
  }
}

var MIcon =
/*#__PURE__*/
function (_Vue) {
  _inherits(MIcon, _Vue);

  function MIcon() {
    _classCallCheck(this, MIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(MIcon).apply(this, arguments));
  }

  _createClass(MIcon, [{
    key: "render",
    value: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children,
          listeners = _ref.listeners;
      var name = props.name;
      var icon = Icons[props.name];

      if (icon === undefined) {
        console.error("\u5B58\u5728\u672A\u6CE8\u518C\u7684\u56FE\u6807".concat(name));
        return h("span");
      }

      var height = SIZE$1[props.size] ? SIZE$1[props.size] : props.size;
      var width = height * (icon.height / icon.width);
      var staticClasses = data.staticClass !== undefined ? data.staticClass : '';
      var classes = data.class !== undefined ? data.class : '';
      var styles = Object.assign({
        fill: 'currentColor'
      }, data.style, data.staticStyle);

      var _click = listeners.click || 'javascript(0)';

      return h("svg", {
        "attrs": {
          "xmlns": 'http://www.w3.org/2000/svg',
          "version": '1.1',
          "height": height,
          "width": width,
          "viewBox": icon.viewBox
        },
        "staticClass": "".concat(compName$1, " ").concat(compName$1, "__").concat(name, " ").concat(staticClasses),
        "class": classes,
        "style": styles,
        "on": {
          "click": function click() {
            return _click;
          }
        }
      }, [icon.paths ? icon.paths.map(function (path) {
        return h("path", {
          "attrs": {
            "d": path
          }
        });
      }) : h("span"), icon.polygons ? icon.polygons.map(function (path) {
        return h("polygon", {
          "attrs": {
            "points": path
          }
        });
      }) : h("span")]);
    }
  }]);

  return MIcon;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MIcon.prototype, "name", void 0);

__decorate([Prop({
  type: [String, Number],
  default: Size.sm
}), __metadata("design:type", Object)], MIcon.prototype, "size", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MIcon.prototype, "color", void 0);

MIcon = __decorate([Component({
  functional: true
})], MIcon);
var MIcon$1 = MIcon;

MIcon$1.install = function (Vue) {
  Vue.component('MIcon', MIcon$1);
};

var compName$2 = 'm-container';

var MContainer =
/*#__PURE__*/
function (_Vue) {
  _inherits(MContainer, _Vue);

  function MContainer() {
    _classCallCheck(this, MContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MContainer).apply(this, arguments));
  }

  _createClass(MContainer, [{
    key: "render",
    value: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      var staticClass = data.staticClass ? data.staticClass : '';
      data.staticClass = "".concat(compName$2, " ").concat(staticClass);

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }
  }]);

  return MContainer;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MContainer.prototype, "id", void 0);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MContainer.prototype, "tag", void 0);

MContainer = __decorate([Component({
  functional: true
})], MContainer);
var MContainer$1 = MContainer;

var compName$3 = 'm-row';

var MRow =
/*#__PURE__*/
function (_Vue) {
  _inherits(MRow, _Vue);

  function MRow() {
    _classCallCheck(this, MRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(MRow).apply(this, arguments));
  }

  _createClass(MRow, [{
    key: "render",
    value: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      var staticClass = data.staticClass ? data.staticClass : '';
      data.staticClass = "".concat(compName$3, " ").concat(staticClass);
      data.staticStyle = data.staticStyle ? data.staticStyle : {};
      genStaticStyles(data.staticStyle, compName$3, 'cols', props.cols);
      genSize(data.staticStyle, "".concat(compName$3, "-gutter"), props.gutter);
      console.log(data);

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }
  }]);

  return MRow;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MRow.prototype, "id", void 0);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MRow.prototype, "tag", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MRow.prototype, "gutter", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MRow.prototype, "cols", void 0);

MRow = __decorate([Component({
  functional: true
})], MRow);
var MRow$1 = MRow;

var compName$4 = 'm-col';

var MCol =
/*#__PURE__*/
function (_Vue) {
  _inherits(MCol, _Vue);

  function MCol() {
    _classCallCheck(this, MCol);

    return _possibleConstructorReturn(this, _getPrototypeOf(MCol).apply(this, arguments));
  }

  _createClass(MCol, [{
    key: "render",
    value: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      var staticClass = data.staticClass ? data.staticClass : '';
      data.staticClass = "".concat(compName$4, " ").concat(staticClass);
      data.staticStyle = data.staticStyle ? data.staticStyle : {};
      genSpace(data.staticStyle, compName$4, props.space);
      BREAKPOINT.forEach(function (breakpoint) {
        if (props[breakpoint]) {
          genStaticStyles(data.staticStyle, compName$4, "span-".concat(breakpoint), props[breakpoint]);
        }
      });

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }
  }]);

  return MCol;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MCol.prototype, "id", void 0);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MCol.prototype, "tag", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "xs", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "sm", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "md", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "lg", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "xl", void 0);

MCol = __decorate([Component({
  functional: true
})], MCol);
var MCol$1 = MCol;

var compName$5 = 'm-flex';

var MFlex =
/*#__PURE__*/
function (_Vue) {
  _inherits(MFlex, _Vue);

  function MFlex() {
    _classCallCheck(this, MFlex);

    return _possibleConstructorReturn(this, _getPrototypeOf(MFlex).apply(this, arguments));
  }

  _createClass(MFlex, [{
    key: "render",
    value: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      var staticClass = data.staticClass ? data.staticClass : '';
      data.staticClass = "".concat(compName$5, " m--wrap-").concat(props.wrap, " m--justify-").concat(props.justify, " m--align-").concat(props.align, " ").concat(staticClass, " ");
      data.staticClass += props.inline ? 'm--inline' : '';
      data.staticClass = data.staticClass.trim();
      data.staticStyle = data.staticStyle ? data.staticStyle : {};
      genStaticStyles(data.staticStyle, compName$5, 'cols', props.cols);

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }
  }]);

  return MFlex;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MFlex.prototype, "id", void 0);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MFlex.prototype, "tag", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MFlex.prototype, "inline", void 0);

__decorate([Prop({
  type: String,
  default: FlexWrap.normal
}), __metadata("design:type", String)], MFlex.prototype, "wrap", void 0);

__decorate([Prop({
  type: String,
  default: FlexJustify.start
}), __metadata("design:type", String)], MFlex.prototype, "justify", void 0);

__decorate([Prop({
  type: String,
  default: FlexAlign.stretch
}), __metadata("design:type", String)], MFlex.prototype, "align", void 0);

MFlex = __decorate([Component({
  functional: true
})], MFlex);
var MFlex$1 = MFlex;

var compName$6 = 'm-flex-filler';

var MFlexFiller =
/*#__PURE__*/
function (_Vue) {
  _inherits(MFlexFiller, _Vue);

  function MFlexFiller() {
    _classCallCheck(this, MFlexFiller);

    return _possibleConstructorReturn(this, _getPrototypeOf(MFlexFiller).apply(this, arguments));
  }

  _createClass(MFlexFiller, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": compName$6
      });
    }
  }]);

  return MFlexFiller;
}(Vue);

MFlexFiller = __decorate([Component({
  functional: true
})], MFlexFiller);
var MFlexFiller$1 = MFlexFiller;

MContainer$1.install = function (Vue) {
  Vue.component('MContainer', MContainer$1);
};

MRow$1.install = function (Vue) {
  Vue.component('MRow', MRow$1);
};

MCol$1.install = function (Vue) {
  Vue.component('MCol', MCol$1);
};

MFlex$1.install = function (Vue) {
  Vue.component('MFlex', MFlex$1);
};

MFlexFiller$1.install = function (Vue) {
  Vue.component('MFlexFiller', MFlexFiller$1);
};

var colorable =
/*#__PURE__*/
function (_Vue) {
  _inherits(colorable, _Vue);

  function colorable() {
    _classCallCheck(this, colorable);

    return _possibleConstructorReturn(this, _getPrototypeOf(colorable).apply(this, arguments));
  }

  return colorable;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", Object)], colorable.prototype, "fontColor", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", Object)], colorable.prototype, "color", void 0);

colorable = __decorate([Component], colorable);
var colorable$1 = colorable;

var sizeable =
/*#__PURE__*/
function (_Vue) {
  _inherits(sizeable, _Vue);

  function sizeable() {
    _classCallCheck(this, sizeable);

    return _possibleConstructorReturn(this, _getPrototypeOf(sizeable).apply(this, arguments));
  }

  return sizeable;
}(Vue);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], sizeable.prototype, "size", void 0);

sizeable = __decorate([Component], sizeable);
var sizeable$1 = sizeable;

var elevated =
/*#__PURE__*/
function (_Vue) {
  _inherits(elevated, _Vue);

  function elevated() {
    _classCallCheck(this, elevated);

    return _possibleConstructorReturn(this, _getPrototypeOf(elevated).apply(this, arguments));
  }

  return elevated;
}(Vue);

__decorate([Prop({
  type: Number,
  validator: function validator(value) {
    return ELEVATION.includes(value);
  }
}), __metadata("design:type", Object)], elevated.prototype, "elevation", void 0);

elevated = __decorate([Component], elevated);
var elevated$1 = elevated;

var variable =
/*#__PURE__*/
function (_Vue) {
  _inherits(variable, _Vue);

  function variable() {
    _classCallCheck(this, variable);

    return _possibleConstructorReturn(this, _getPrototypeOf(variable).apply(this, arguments));
  }

  return variable;
}(Vue);

__decorate([Prop({
  type: String,
  validator: function validator(value) {
    return VARIETY.includes(value);
  }
}), __metadata("design:type", Object)], variable.prototype, "variety", void 0);

variable = __decorate([Component], variable);
var variable$1 = variable;

var compName$7 = 'm-app-bar';

var MAppBar =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MAppBar, _Mixins);

  function MAppBar() {
    _classCallCheck(this, MAppBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(MAppBar).apply(this, arguments));
  }

  _createClass(MAppBar, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var $slots = this.$slots,
          classes = this.classes,
          styles = this.styles;
      return h("div", {
        "staticClass": compName$7,
        "style": styles,
        "class": classes
      }, [$slots.default]);
    }
  }, {
    key: "styles",
    get: function get() {
      var fontColor = this.fontColor,
          size = this.size,
          color = this.color,
          elevation = this.elevation;
      var styles = {};
      genFontColor(styles, compName$7, fontColor);
      genColor(styles, compName$7, color);
      genElevation(styles, compName$7, elevation);
      genSize(styles, compName$7, size);
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      var variety = this.variety;
      var classes = {};
      genVariety(classes, variety);
      return classes;
    }
  }]);

  return MAppBar;
}(vueClassComponent_common_2(colorable$1, elevated$1, sizeable$1, variable$1));

MAppBar = __decorate([Component], MAppBar);
var MAppBar$1 = MAppBar;

MAppBar$1.install = function (Vue) {
  Vue.component('MAppBar', MAppBar$1);
};

var shapeable =
/*#__PURE__*/
function (_Vue) {
  _inherits(shapeable, _Vue);

  function shapeable() {
    _classCallCheck(this, shapeable);

    return _possibleConstructorReturn(this, _getPrototypeOf(shapeable).apply(this, arguments));
  }

  return shapeable;
}(Vue);

__decorate([Prop({
  type: String,
  validator: function validator(value) {
    return SHAPE.includes(value);
  }
}), __metadata("design:type", Object)], shapeable.prototype, "shape", void 0);

shapeable = __decorate([Component], shapeable);
var shapeable$1 = shapeable;

var compName$8 = 'm-button';

var MButton =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MButton, _Mixins);

  function MButton() {
    _classCallCheck(this, MButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(MButton).apply(this, arguments));
  }

  _createClass(MButton, [{
    key: "onClick",
    value: function onClick(e) {}
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var classes = this.classes,
          styles = this.styles,
          icon = this.icon,
          onClick = this.onClick,
          color = this.color;
      return h("div", {
        "directives": [{
          name: "m-ripple",
          value: true
        }],
        "staticClass": compName$8,
        "class": classes,
        "style": styles,
        "on": {
          "click": onClick
        }
      }, [!icon ? undefined : h(MIcon$1, {
        "attrs": {
          "name": icon
        }
      }), !this.$slots.default ? undefined : h("div", {
        "class": "".concat(compName$8, "__main")
      }, [this.$slots.default])]);
    }
  }, {
    key: "styles",
    get: function get() {
      var fontColor = this.fontColor,
          size = this.size,
          color = this.color,
          elevation = this.elevation;
      var styles = {};
      genFontColor(styles, compName$8, fontColor);
      genColor(styles, compName$8, color);
      genElevation(styles, compName$8, elevation);
      genSize(styles, compName$8, size);
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      var shape = this.shape,
          variety = this.variety,
          block = this.block,
          disabled = this.disabled;
      var classes = {
        'm--block': block,
        'm--disabled': disabled
      };
      genShape(classes, shape);
      genVariety(classes, variety);
      return classes;
    }
  }]);

  return MButton;
}(vueClassComponent_common_2(colorable$1, sizeable$1, elevated$1, variable$1, shapeable$1));

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MButton.prototype, "block", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MButton.prototype, "icon", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MButton.prototype, "loading", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MButton.prototype, "disabled", void 0);

__decorate([Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MButton.prototype, "onClick", null);

MButton = __decorate([Component({
  components: {
    MIcon: MIcon$1
  }
})], MButton);
var MButton$1 = MButton;

MButton$1.install = function (Vue) {
  Vue.component('MButton', MButton$1);
};

var compName$9 = 'm-avatar';

var MAvatar =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MAvatar, _Mixins);

  function MAvatar() {
    var _this;

    _classCallCheck(this, MAvatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MAvatar).apply(this, arguments));
    _this.status = Status.pending;
    return _this;
  }

  _createClass(MAvatar, [{
    key: "updateSrc",
    value: function updateSrc(val) {
      if (val !== undefined) {
        this.status = Status.pending;
        this.curSrc = val;
      }
    }
  }, {
    key: "loadSuccess",
    value: function loadSuccess() {
      this.status = Status.success;
    }
  }, {
    key: "loadFailure",
    value: function loadFailure() {
      this.status = Status.failure;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var styles = this.styles,
          classes = this.classes,
          curSrc = this.curSrc,
          loadSuccess = this.loadSuccess,
          loadFailure = this.loadFailure;
      return h("div", {
        "staticClass": compName$9,
        "class": classes,
        "style": styles
      }, [this.$slots.default, h("img", {
        "staticClass": "".concat(compName$9, "__cover"),
        "attrs": {
          "alt": '',
          "src": curSrc
        },
        "on": {
          "load": loadSuccess,
          "error": loadFailure
        }
      })]);
    }
  }, {
    key: "styles",
    get: function get() {
      var fontColor = this.fontColor,
          size = this.size,
          color = this.color,
          elevation = this.elevation;
      var styles = {};
      genFontColor(styles, compName$9, fontColor);
      genColor(styles, compName$9, color);
      genElevation(styles, compName$9, elevation);
      genSize(styles, compName$9, size);
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      var shape = this.shape,
          variety = this.variety,
          status = this.status;

      var classes = _defineProperty({}, "m--status-".concat(Status[status]), true);

      genShape(classes, shape);
      genVariety(classes, variety);
      return classes;
    }
  }]);

  return MAvatar;
}(vueClassComponent_common_2(colorable$1, sizeable$1, elevated$1, variable$1, shapeable$1));

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MAvatar.prototype, "src", void 0);

__decorate([Watch('src', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], MAvatar.prototype, "updateSrc", null);

MAvatar = __decorate([Component], MAvatar);
var MAvatar$1 = MAvatar;

MAvatar$1.install = function (Vue) {
  Vue.component('MAvatar', MAvatar$1);
};

var compName$a = 'm-radio';

var MRadio =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MRadio, _Mixins);

  function MRadio() {
    _classCallCheck(this, MRadio);

    return _possibleConstructorReturn(this, _getPrototypeOf(MRadio).apply(this, arguments));
  }

  _createClass(MRadio, [{
    key: "onInput",
    value: function onInput(val) {}
  }, {
    key: "handleClick",
    value: function handleClick(val) {
      if (this.disabled) {
        return;
      }

      if (this.checked) {
        return;
      }

      this.onInput(val);
    }
  }, {
    key: "RRadio",
    value: function RRadio() {
      var h = this.$createElement;
      var size = this.size,
          checkedIcon = this.checkedIcon,
          uncheckIcon = this.uncheckIcon,
          checked = this.checked;
      return h("a", {
        "staticClass": "".concat(compName$a, "__radio")
      }, [h("transition", {
        "attrs": {
          "name": 'm--transition-scale'
        }
      }, [!checked ? undefined : h(MIcon$1, {
        "staticClass": "".concat(compName$a, "__checked-icon"),
        "attrs": {
          "name": checkedIcon,
          "size": size
        }
      })]), h(MIcon$1, {
        "staticClass": "".concat(compName$a, "__uncheck-icon"),
        "attrs": {
          "size": size,
          "name": uncheckIcon
        }
      }), h("div", {
        "directives": [{
          name: "m-ripple",
          value: true
        }],
        "staticClass": "".concat(compName$a, "__radio-wrapper")
      })]);
    }
  }, {
    key: "RDefault",
    value: function RDefault() {
      var h = this.$createElement;
      var $slots = this.$slots;
      return $slots.default === undefined ? undefined : h("span", {
        "staticClass": "".concat(compName$a, "__label")
      }, [$slots.default]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var styles = this.styles,
          classes = this.classes,
          label = this.label,
          handleClick = this.handleClick,
          RRadio = this.RRadio,
          RDefault = this.RDefault;
      return h("div", {
        "staticClass": compName$a,
        "class": classes,
        "style": styles,
        "on": {
          "click": function click() {
            return handleClick(label);
          }
        }
      }, [RRadio(), RDefault()]);
    }
  }, {
    key: "styles",
    get: function get() {
      var fontColor = this.fontColor,
          size = this.size,
          color = this.color;
      var styles = {};
      genFontColor(styles, compName$a, fontColor);
      genColor(styles, compName$a, color);
      genSize(styles, compName$a, size);
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      var checked = this.checked,
          disabled = this.disabled;
      var classes = {
        'm--checked': checked,
        'm--disabled': disabled
      };
      return classes;
    }
  }, {
    key: "checked",
    get: function get() {
      return this.label === this.value;
    }
  }]);

  return MRadio;
}(vueClassComponent_common_2(colorable$1, sizeable$1));

__decorate([Prop({
  type: [Boolean, Number, String],
  default: false
}), __metadata("design:type", Object)], MRadio.prototype, "value", void 0);

__decorate([Prop({
  type: [Boolean, Number, String],
  default: true
}), __metadata("design:type", Object)], MRadio.prototype, "label", void 0);

__decorate([Prop({
  type: String,
  default: 'radio_button_checked'
}), __metadata("design:type", String)], MRadio.prototype, "checkedIcon", void 0);

__decorate([Prop({
  type: String,
  default: 'radio_button_unchecked'
}), __metadata("design:type", String)], MRadio.prototype, "uncheckIcon", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MRadio.prototype, "disabled", void 0);

__decorate([Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MRadio.prototype, "onInput", null);

MRadio = __decorate([Component({
  components: {
    MIcon: MIcon$1
  }
})], MRadio);
var MRadio$1 = MRadio;

/* istanbul ignore next */

MRadio$1.install = function (Vue) {
  Vue.component('MRadio', MRadio$1);
};

var compName$b = 'm-checkbox';

var MCheckbox =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MCheckbox, _Mixins);

  function MCheckbox() {
    var _this;

    _classCallCheck(this, MCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MCheckbox).apply(this, arguments));
    _this.isArrayValue = false;
    _this.isArrayLabel = false;
    _this.isBooleanValue = false;
    return _this;
  }

  _createClass(MCheckbox, [{
    key: "onInput",
    value: function onInput(val) {}
  }, {
    key: "handleClick",
    value: function handleClick() {
      var disabled = this.disabled,
          isBooleanValue = this.isBooleanValue,
          isArrayValue = this.isArrayValue,
          isArrayLabel = this.isArrayLabel,
          label = this.label,
          value = this.value,
          onInput = this.onInput,
          checked = this.checked;

      if (disabled) {
        return;
      }

      if (isArrayValue && isArrayLabel) {
        if (checked) {
          onInput([]);
        } else {
          onInput(label);
        }
      } else if (isArrayValue) {
        var result = [].concat(value);

        if (checked) {
          var index = result.findIndex(function (item) {
            return item === label;
          });
          result.splice(index, 1);
          onInput(result);
        } else {
          result.push(label);
          onInput(result);
        }
      } else if (isBooleanValue) {
        onInput(!value);
      } else {
        if (checked) {
          onInput(null);
        } else {
          onInput(label);
        }
      }
    }
  }, {
    key: "RCheckbox",
    value: function RCheckbox() {
      var h = this.$createElement;
      var size = this.size,
          checkedIcon = this.checkedIcon,
          uncheckIcon = this.uncheckIcon,
          incheckIcon = this.incheckIcon,
          value = this.value,
          label = this.label,
          checked = this.checked,
          isArrayValue = this.isArrayValue,
          isArrayLabel = this.isArrayLabel;
      var checkIcon = checkedIcon;

      if (isArrayValue && isArrayLabel && checked && label.length > value.length) {
        // Allcheck下value是数组, label也是数组
        checkIcon = incheckIcon;
      }

      return h("a", {
        "staticClass": "".concat(compName$b, "__checkbox")
      }, [h("transition", {
        "attrs": {
          "name": 'm-transition-scale'
        }
      }, [!checked ? undefined : h(MIcon$1, {
        "staticClass": "".concat(compName$b, "__checked-icon"),
        "attrs": {
          "name": checkIcon,
          "size": size
        }
      })]), h(MIcon$1, {
        "staticClass": "".concat(compName$b, "__uncheck-icon"),
        "attrs": {
          "size": size,
          "name": uncheckIcon
        }
      }), h("div", {
        "directives": [{
          name: "m-ripple",
          value: true
        }],
        "staticClass": "".concat(compName$b, "__checkbox-wrapper")
      })]);
    }
  }, {
    key: "RDefault",
    value: function RDefault() {
      var h = this.$createElement;
      var $slots = this.$slots;
      return $slots.default === undefined ? undefined : h("span", {
        "staticClass": "".concat(compName$b, "__label")
      }, [$slots.default]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var classes = this.classes,
          styles = this.styles,
          RCheckbox = this.RCheckbox,
          RDefault = this.RDefault,
          handleClick = this.handleClick,
          value = this.value,
          label = this.label;
      this.isArrayValue = value instanceof Array;
      this.isArrayLabel = label instanceof Array; // boolean模式下等价于switch

      this.isBooleanValue = typeof value === 'boolean';
      return h("div", {
        "staticClass": compName$b,
        "class": classes,
        "style": styles,
        "on": {
          "click": function click() {
            return handleClick();
          }
        }
      }, [RCheckbox(), RDefault()]);
    }
  }, {
    key: "styles",
    get: function get() {
      var fontColor = this.fontColor,
          size = this.size,
          color = this.color;
      var styles = {};
      genFontColor(styles, compName$b, fontColor);
      genColor(styles, compName$b, color);
      genSize(styles, compName$b, size);
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      var checked = this.checked,
          disabled = this.disabled;
      var classes = {
        'm--checked': checked,
        'm--disabled': disabled
      };
      return classes;
    }
  }, {
    key: "checked",
    get: function get() {
      var value = this.value,
          label = this.label,
          isArrayValue = this.isArrayValue,
          isArrayLabel = this.isArrayLabel;
      var isCheck = false;

      if (isArrayValue && isArrayLabel) {
        // Allcheck下value是数组, label也是数组
        if (value.length > 0) {
          isCheck = true;
        }
      } else if (isArrayValue) {
        // value是数组, label单值
        if (value.includes(label)) {
          isCheck = true;
        }
      } else {
        if (value === label) {
          isCheck = true;
        }
      }

      return isCheck;
    }
  }]);

  return MCheckbox;
}(vueClassComponent_common_2(colorable$1, sizeable$1));

__decorate([Prop({
  type: [Array, Number, String, Boolean],
  default: false
}), __metadata("design:type", Object)], MCheckbox.prototype, "value", void 0);

__decorate([Prop({
  type: [Array, Number, String, Boolean],
  default: true
}), __metadata("design:type", Object)], MCheckbox.prototype, "label", void 0);

__decorate([Prop({
  type: String,
  default: 'check_box'
}), __metadata("design:type", String)], MCheckbox.prototype, "checkedIcon", void 0);

__decorate([Prop({
  type: String,
  default: 'check_box_outline_blank'
}), __metadata("design:type", String)], MCheckbox.prototype, "uncheckIcon", void 0);

__decorate([Prop({
  type: String,
  default: 'indeterminate_check_box'
}), __metadata("design:type", String)], MCheckbox.prototype, "incheckIcon", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MCheckbox.prototype, "disabled", void 0);

__decorate([Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MCheckbox.prototype, "onInput", null);

MCheckbox = __decorate([Component({
  components: {
    MIcon: MIcon$1
  }
})], MCheckbox);
var MCheckbox$1 = MCheckbox;

MCheckbox$1.install = function (Vue) {
  Vue.component('MCheckbox', MCheckbox$1);
};

/* eslint-disable */
register({
  "cancel": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"]
  }
});

var compName$c = 'm-chip';

var MChip =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MChip, _Mixins);

  function MChip() {
    _classCallCheck(this, MChip);

    return _possibleConstructorReturn(this, _getPrototypeOf(MChip).apply(this, arguments));
  }

  _createClass(MChip, [{
    key: "onClose",
    value: function onClose(e) {
      e.stopPropagation();
    }
  }, {
    key: "onClick",
    value: function onClick(e) {}
  }, {
    key: "RMedia",
    value: function RMedia() {
      var $slots = this.$slots;

      if ($slots.media) {
        if (!$slots.media[0].data.staticClass) {
          $slots.media[0].data.staticClass = '';
        }

        $slots.media[0].data.staticClass += " ".concat(compName$c, "__media");
        return $slots.media;
      }

      return undefined;
    }
  }, {
    key: "RClose",
    value: function RClose() {
      var h = this.$createElement;
      var closeable = this.closeable,
          closeover = this.closeover,
          onClose = this.onClose;
      return closeable || closeover ? h(MIcon$1, {
        "staticClass": "".concat(compName$c, "__close"),
        "on": {
          "click": function click() {
            return onClose;
          }
        },
        "attrs": {
          "name": 'cancel'
        }
      }) : undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var classes = this.classes,
          styles = this.styles,
          $slots = this.$slots,
          RMedia = this.RMedia,
          RClose = this.RClose,
          onClick = this.onClick;
      return h("div", {
        "staticClass": compName$c,
        "class": classes,
        "style": styles,
        "on": {
          "click": onClick
        }
      }, [RMedia(), h("div", {
        "staticClass": "".concat(compName$c, "__main")
      }, [$slots.default]), RClose()]);
    }
  }, {
    key: "styles",
    get: function get() {
      var fontColor = this.fontColor,
          size = this.size,
          color = this.color,
          elevation = this.elevation;
      var styles = {};
      genFontColor(styles, compName$c, fontColor);
      genColor(styles, compName$c, color);
      genSize(styles, compName$c, size);
      genElevation(styles, compName$c, elevation); // genHover(styles, _name, 'hover-color', color)

      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      var closeable = this.closeable,
          closeover = this.closeover,
          variety = this.variety,
          shape = this.shape;
      var classes = {
        'm--closeable': closeable,
        'm--closeover': closeover
      };
      genVariety(classes, variety);
      genShape(classes, shape);
      return classes;
    }
  }]);

  return MChip;
}(vueClassComponent_common_2(colorable$1, sizeable$1, elevated$1, variable$1, shapeable$1));

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MChip.prototype, "closeable", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MChip.prototype, "closeover", void 0);

__decorate([Emit('close'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MChip.prototype, "onClose", null);

__decorate([Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MChip.prototype, "onClick", null);

MChip = __decorate([Component({
  components: {
    MAvatar: MAvatar$1,
    MIcon: MIcon$1
  }
})], MChip);
var MChip$1 = MChip;

/* istanbul ignore next */

MChip$1.install = function (Vue) {
  Vue.component('MChip', MChip$1);
};

/**
 * 判断闰年
 * @return {boolean}
 */

Date.prototype.isLeapYear = function () {
  return this.getFullYear() % 4 === 0 && (this.getFullYear() % 100 !== 0 || this.getFullYear() % 400 === 0);
};
/**
 * 当月最大天数
 * @return {number}
 */


Date.prototype.maxDayOfMonth = function () {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
/**
 * 当月第一天所在星期
 * @return {number}
 */


Date.prototype.firstWeekDay = function () {
  var temp = new Date(this);
  temp.setDate(1);
  return temp.getDay();
};
/**
 * 补零
 * @return {string}
 */


Number.prototype.dateZeroize = function () {
  var value = this.toString();
  return value.length > 1 ? value : "0".concat(value);
}; // Date.prototype.getZeroize = function(type){
//     let value = ''
//     switch (type){
//         case 'month': value = this.getMonth().toString(); break;
//         case 'date': value = this.getDate().toString(); break;
//         case 'hours': value = this.getHours().toString(); break;
//         case 'minutes': value = this.getMinutes().toString(); break;
//         case 'seconds': value = this.getSeconds().toString(); break;
//     }
//     return value.length === 2 ? value : `0${value}`
// }

var WeekMap = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
var compName$d = 'm-time-picker-header';

var MTimePickerHeader =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerHeader, _Vue);

  function MTimePickerHeader() {
    _classCallCheck(this, MTimePickerHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerHeader).apply(this, arguments));
  }

  _createClass(MTimePickerHeader, [{
    key: "handleAMToggle",
    value: function handleAMToggle(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      this.DateStore.SET_AM(val);
    }
  }, {
    key: "RDate",
    value: function RDate() {
      var _this = this;

      var h = this.$createElement;
      var _this$DateStore = this.DateStore,
          year = _this$DateStore.year,
          month = _this$DateStore.month,
          weekDay = _this$DateStore.weekDay,
          date = _this$DateStore.date,
          pickerType = _this$DateStore.pickerType,
          activeType = _this$DateStore.activeType;
      return !['datetime', 'date'].includes(pickerType) ? undefined : h("div", {
        "staticClass": "".concat(compName$d, "__date")
      }, [h("div", [h("a", {
        "staticClass": "".concat(compName$d, "__date-year"),
        "class": {
          'm--active': activeType === DatePickerType.year
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(DatePickerType.year);
          }
        }
      }, [year]), h("span", {
        "staticClass": "".concat(compName$d, "__date-weekDay")
      }, [WeekMap[weekDay]])]), h("div", {
        "staticClass": "".concat(compName$d, "__date-date")
      }, [h("a", {
        "class": {
          'm--active': activeType === DatePickerType.month
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(DatePickerType.month);
          }
        }
      }, [(month + 1).dateZeroize()]), "-", h("a", {
        "class": {
          'm--active': activeType === DatePickerType.date
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
          }
        }
      }, [date.dateZeroize()])])]);
    }
  }, {
    key: "RTime",
    value: function RTime() {
      var _this2 = this;

      var h = this.$createElement;
      var handleAMToggle = this.handleAMToggle;
      var _this$DateStore2 = this.DateStore,
          hours = _this$DateStore2.hours,
          minutes = _this$DateStore2.minutes,
          pickerType = _this$DateStore2.pickerType,
          activeType = _this$DateStore2.activeType,
          ampm = _this$DateStore2.ampm,
          am = _this$DateStore2.am;
      return !['datetime', 'time'].includes(pickerType) ? undefined : h("div", {
        "class": "".concat(compName$d, "__time")
      }, [!ampm ? undefined : h("div", {
        "staticClass": "".concat(compName$d, "__time-ampm")
      }, [h("a", {
        "class": {
          'm--active': am
        },
        "on": {
          "click": function click() {
            handleAMToggle(true, am);
          }
        }
      }, ["AM"]), h("a", {
        "class": {
          'm--active': !am
        },
        "on": {
          "click": function click() {
            handleAMToggle(false, am);
          }
        }
      }, ["PM"])]), h("div", {
        "staticClass": "".concat(compName$d, "__time-hours")
      }, [h("a", {
        "class": {
          'm--active': activeType === DateTimeValueType.hours
        },
        "on": {
          "click": function click() {
            _this2.DateStore.SET_ACTIVE_TYPE(DateTimeValueType.hours);
          }
        }
      }, [hours.dateZeroize()]), ":", h("a", {
        "class": {
          'm--active': activeType === DateTimeValueType.minutes
        },
        "on": {
          "click": function click() {
            _this2.DateStore.SET_ACTIVE_TYPE(DateTimeValueType.minutes);
          }
        }
      }, [minutes.dateZeroize()])])]);
    }
  }, {
    key: "RYear",
    value: function RYear() {
      var h = this.$createElement;
      var _this$DateStore3 = this.DateStore,
          year = _this$DateStore3.year,
          pickerType = _this$DateStore3.pickerType;
      return pickerType !== 'year' ? undefined : h("div", {
        "staticClass": "".concat(compName$d, "__year")
      }, [year]);
    }
  }, {
    key: "RMonth",
    value: function RMonth() {
      var h = this.$createElement;
      var _this$DateStore4 = this.DateStore,
          month = _this$DateStore4.month,
          pickerType = _this$DateStore4.pickerType;
      return pickerType !== DatePickerType.month ? undefined : h("div", {
        "staticClass": "".concat(compName$d, "__month")
      }, [MonthMap[month]]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var classes = this.classes,
          RDate = this.RDate,
          RTime = this.RTime,
          RYear = this.RYear,
          RMonth = this.RMonth;
      return h("div", {
        "staticClass": "".concat(compName$d),
        "class": classes
      }, [RYear(), RMonth(), RDate(), h("div", {
        "style": "flex-grow:1"
      }), RTime()]);
    }
  }, {
    key: "classes",
    get: function get() {
      return _defineProperty({}, "m--".concat(this.DateStore.pickerType), true);
    }
  }]);

  return MTimePickerHeader;
}(Vue);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerHeader.prototype, "DateStore", void 0);

MTimePickerHeader = __decorate([Component], MTimePickerHeader);
var MTimePickerHeader$1 = MTimePickerHeader;

var compName$e = 'm-time-picker-panel-date';
var WeekMap$1 = ['日', '一', '二', '三', '四', '五', '六'];

var MTimePickerPanelDate =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelDate, _Vue);

  function MTimePickerPanelDate() {
    var _this;

    _classCallCheck(this, MTimePickerPanelDate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelDate).apply(this, arguments));
    _this.viewValue = _this.DateStore.value;
    return _this;
  }

  _createClass(MTimePickerPanelDate, [{
    key: "handleMonthToggle",
    value: function handleMonthToggle(action) {
      var date = new Date(this.viewValue);
      var month = date.getMonth();
      date.setMonth(action === "prev"
      /* prev */
      ? month - 1 : month + 1);
      this.viewValue = date.getTime();
    }
  }, {
    key: "handleDateClick",
    value: function handleDateClick(yearVal, monthVal, dateVal) {
      var _this$DateStore = this.DateStore,
          year = _this$DateStore.year,
          month = _this$DateStore.month,
          date = _this$DateStore.date;

      if (yearVal === year && monthVal === month && dateVal === date) {
        return;
      }

      var temp = new Date(this.viewValue);

      if (yearVal !== year) {
        temp.setFullYear(yearVal);
      }

      if (monthVal !== month) {
        temp.setMonth(monthVal);
      }

      if (dateVal !== date) {
        temp.setDate(dateVal);
      }

      this.DateStore.UPDATE(temp.getTime());
    }
  }, {
    key: "RTableHead",
    value: function RTableHead() {
      var h = this.$createElement;
      var Tds = [];
      WeekMap$1.forEach(function (week) {
        return Tds.push(h("td", [week]));
      });
      return h("thead", [h("tr", [Tds])]);
    }
  }, {
    key: "RTableBody",
    value: function RTableBody() {
      var h = this.$createElement;
      var viewDateValue = this.viewDateValue,
          viewYear = this.viewYear,
          viewMonth = this.viewMonth,
          handleDateClick = this.handleDateClick;
      var _this$DateStore2 = this.DateStore,
          year = _this$DateStore2.year,
          month = _this$DateStore2.month,
          date = _this$DateStore2.date;
      var nowValue = new Date();
      var isNowDate = nowValue.getFullYear() === viewYear && nowValue.getMonth() === viewMonth;
      var nowDate = nowValue.getDate();
      var viewMonthDays = viewDateValue.maxDayOfMonth();
      var viewFirstWeekDay = viewDateValue.firstWeekDay();
      var isCurMonth = viewYear === year && viewMonth === month;
      var Trs = [];
      var Tds = [];

      for (var pre = 0; pre < viewFirstWeekDay; pre++) {
        Tds.push(h("td", [" "]));
      }

      var _loop = function _loop(tempDate) {
        var isCurDate = isCurMonth && tempDate === date;
        var isToday = isNowDate && tempDate === nowDate;
        Tds.push(h("td", [h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurDate,
            'm--current': isToday
          },
          "on": {
            "click": function click() {
              return handleDateClick(viewYear, viewMonth, tempDate);
            }
          }
        }, [tempDate])]));

        if ((tempDate + viewFirstWeekDay) % 7 === 0 || tempDate === viewMonthDays) {
          Trs.push(h("tr", [Tds]));
          Tds = [];
        }
      };

      for (var tempDate = 1; tempDate <= viewMonthDays; tempDate++) {
        _loop(tempDate);
      }

      return h("tbody", [Trs]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var viewYear = this.viewYear,
          viewMonth = this.viewMonth,
          handleMonthToggle = this.handleMonthToggle,
          RTableHead = this.RTableHead,
          RTableBody = this.RTableBody;
      return h("div", {
        "staticClass": compName$e
      }, [h("div", {
        "class": "".concat(compName$e, "__header")
      }, [h("div", {
        "staticClass": "".concat(compName$e, "__header-year")
      }, [h("span", {
        "on": {
          "click": function click() {
            return _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.year);
          }
        }
      }, [viewYear]), "-", h("span", {
        "on": {
          "click": function click() {
            return _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.month);
          }
        }
      }, [(viewMonth + 1).dateZeroize()])]), h("div", {
        "staticClass": "".concat(compName$e, "__header-handler")
      }, [h(MButton$1, {
        "attrs": {
          "variety": Variety.flat,
          "elevation": 0,
          "shape": Shape.circle,
          "color": Color.default,
          "icon": 'navigate_before'
        },
        "staticClass": 'm-m-0',
        "on": {
          "click": function click() {
            return handleMonthToggle("prev"
            /* prev */
            );
          }
        }
      }), h(MButton$1, {
        "attrs": {
          "variety": Variety.flat,
          "elevation": 0,
          "shape": Shape.circle,
          "color": Color.default,
          "icon": 'navigate_next'
        },
        "staticClass": 'm-m-0',
        "on": {
          "click": function click() {
            return handleMonthToggle("next"
            /* next */
            );
          }
        }
      })])]), h("table", {
        "class": "".concat(compName$e, "__table")
      }, [RTableHead(), RTableBody()])]);
    }
  }, {
    key: "viewDateValue",
    get: function get() {
      return new Date(this.viewValue);
    },
    set: function set(val) {
      this.viewValue = val;
    }
  }, {
    key: "viewYear",
    get: function get() {
      return this.viewDateValue.getFullYear();
    }
  }, {
    key: "viewMonth",
    get: function get() {
      return this.viewDateValue.getMonth();
    }
  }, {
    key: "viewDate",
    get: function get() {
      return this.viewDateValue.getDate();
    }
  }]);

  return MTimePickerPanelDate;
}(Vue);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "min", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "max", void 0);

__decorate([Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "firstDayOfWeek", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelDate.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number, Number]), __metadata("design:returntype", void 0)], MTimePickerPanelDate.prototype, "handleDateClick", null);

MTimePickerPanelDate = __decorate([Component({
  components: {
    MButton: MButton$1,
    MIcon: MIcon$1
  }
})], MTimePickerPanelDate);
var MTimePickerPanelDate$1 = MTimePickerPanelDate;

var compName$f = 'm-time-picker-panel-year';

var MTimePickerPanelYear =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelYear, _Vue);

  function MTimePickerPanelYear() {
    _classCallCheck(this, MTimePickerPanelYear);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelYear).apply(this, arguments));
  }

  _createClass(MTimePickerPanelYear, [{
    key: "onClick",
    value: function onClick(year) {
      this.DateStore.UPDATE(year, DateValueType.year);
    }
  }, {
    key: "RCols",
    value: function RCols() {
      var h = this.$createElement;
      var min = this.min,
          max = this.max,
          onClick = this.onClick;
      var year = this.DateStore.year;
      var Cols = [];

      var _loop = function _loop(tempYear) {
        var isCurrent = tempYear === year;
        Cols.push(h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurrent
          },
          "on": {
            "click": function click() {
              return onClick(tempYear);
            }
          }
        }, [tempYear]));
      };

      for (var tempYear = min; tempYear <= max; tempYear++) {
        _loop(tempYear);
      }

      return Cols;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RCols = this.RCols;
      return h("div", {
        "staticClass": compName$f
      }, [RCols()]);
    }
  }]);

  return MTimePickerPanelYear;
}(Vue);

__decorate([Prop({
  type: Number,
  default: 2100
}), __metadata("design:type", Number)], MTimePickerPanelYear.prototype, "max", void 0);

__decorate([Prop({
  type: Number,
  default: 1900
}), __metadata("design:type", Number)], MTimePickerPanelYear.prototype, "min", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelYear.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", void 0)], MTimePickerPanelYear.prototype, "onClick", null);

MTimePickerPanelYear = __decorate([Component], MTimePickerPanelYear);
var MTimePickerPanelYear$1 = MTimePickerPanelYear;

var compName$g = 'm-time-picker-panel-month';
var MonthMap$1 = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

var MTimePickerPanelMonth =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelMonth, _Vue);

  function MTimePickerPanelMonth() {
    _classCallCheck(this, MTimePickerPanelMonth);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelMonth).apply(this, arguments));
  }

  _createClass(MTimePickerPanelMonth, [{
    key: "handleClick",
    value: function handleClick(month) {
      this.DateStore.UPDATE(month, DateValueType.month);
    }
  }, {
    key: "RCols",
    value: function RCols() {
      var h = this.$createElement;
      var handleClick = this.handleClick;
      var month = this.DateStore.month;
      var Cols = [];

      var _loop = function _loop(tempValue) {
        var isCurrent = tempValue === month;
        Cols.push(h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurrent
          },
          "on": {
            "click": function click() {
              return handleClick(tempValue);
            }
          }
        }, [MonthMap$1[tempValue]]));
      };

      for (var tempValue = 0; tempValue <= 11; tempValue++) {
        _loop(tempValue);
      }

      return Cols;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RCols = this.RCols;
      return h("div", {
        "staticClass": compName$g
      }, [RCols()]);
    }
  }]);

  return MTimePickerPanelMonth;
}(Vue);

__decorate([Prop({
  type: Array
}), __metadata("design:type", Number)], MTimePickerPanelMonth.prototype, "disabledValue", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelMonth.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", void 0)], MTimePickerPanelMonth.prototype, "handleClick", null);

MTimePickerPanelMonth = __decorate([Component({
  components: {
    MButton: MButton$1
  }
})], MTimePickerPanelMonth);
var MTimePickerPanelMonth$1 = MTimePickerPanelMonth;

var compName$h = 'm-time-picker-panel-time'; // const baseFont: any = getStyle(document.documentElement, 'font-size')
// const clockSize = 12 * Number(baseFont.substring(0, baseFont.length - 2))
// const clockStyle = {
//     height: `${clockSize}px`,
//     width:  `${clockSize}px`,
// }

var MTimePickerPanelTime =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelTime, _Vue);

  function MTimePickerPanelTime() {
    _classCallCheck(this, MTimePickerPanelTime);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelTime).apply(this, arguments));
  }

  _createClass(MTimePickerPanelTime, [{
    key: "onClick",
    value: function onClick(val, type) {
      this.DateStore.SET_ACTIVE_TYPE(type);
      this.DateStore.UPDATE(type === DateTimeValueType.hours && this.DateStore.ampm && !this.DateStore.am ? val + 12 : val, type);
    }
  }, {
    key: "RList",
    value: function RList(type) {
      var h = this.$createElement;
      var color = this.color,
          onClick = this.onClick,
          hourStep = this.hourStep,
          minuteStep = this.minuteStep;
      var ampm = this.DateStore.ampm;
      var min = 0;
      var max = type === DateTimeValueType.hours ? ampm ? 11 : 23 : 59;
      var step = type === DateTimeValueType.hours ? hourStep : minuteStep;
      var time = this.DateStore[type];
      var Temps = [];

      var _loop = function _loop(tempTime) {
        var isCurrent = tempTime === time;
        Temps.push(h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurrent
          },
          "on": {
            "click": function click() {
              return onClick(tempTime, type);
            }
          }
        }, [tempTime]));
      };

      for (var tempTime = min; tempTime <= max; tempTime += step) {
        _loop(tempTime);
      }

      return h("div", {
        "staticClass": "".concat(compName$h, "__list ").concat(compName$h, "__list-").concat(type)
      }, [Temps]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RList = this.RList;
      var Result = [];
      Result.push(RList(DateTimeValueType.hours));
      Result.push(RList(DateTimeValueType.minutes));
      return h("div", {
        "staticClass": compName$h
      }, [Result]);
    }
  }]);

  return MTimePickerPanelTime;
}(Vue);

__decorate([Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerPanelTime.prototype, "color", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePickerPanelTime.prototype, "hourStep", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePickerPanelTime.prototype, "minuteStep", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelTime.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number, String]), __metadata("design:returntype", void 0)], MTimePickerPanelTime.prototype, "onClick", null);

MTimePickerPanelTime = __decorate([Component({
  components: {
    MButton: MButton$1,
    MIcon: MIcon$1
  }
})], MTimePickerPanelTime);
var MTimePickerPanelTime$1 = MTimePickerPanelTime;

var compName$i = 'm-time-picker-handler';

var MTimePickerHandler =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerHandler, _Vue);

  function MTimePickerHandler() {
    _classCallCheck(this, MTimePickerHandler);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerHandler).apply(this, arguments));
  }

  _createClass(MTimePickerHandler, [{
    key: "onConfirm",
    value: function onConfirm() {}
  }, {
    key: "onCancel",
    value: function onCancel() {}
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var onConfirm = this.onConfirm,
          onCancel = this.onCancel;
      return h("div", {
        "staticClass": "".concat(compName$i, " m-p-sm")
      }, [h(MButton$1, {
        "attrs": {
          "size": "sm",
          "variety": Variety.flat,
          "color": Color.default
        },
        "style": {
          width: '5rem'
        },
        "on": {
          "click": onCancel
        }
      }, ["cancel"]), h(MButton$1, {
        "attrs": {
          "size": "sm",
          "color": Color.primary
        },
        "style": {
          width: '5rem'
        },
        "on": {
          "click": onConfirm
        }
      }, ["ok"])]);
    }
  }]);

  return MTimePickerHandler;
}(Vue);

__decorate([Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerHandler.prototype, "color", void 0);

__decorate([Emit('confirm'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePickerHandler.prototype, "onConfirm", null);

__decorate([Emit('cancel'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePickerHandler.prototype, "onCancel", null);

MTimePickerHandler = __decorate([Component({
  components: {
    MButton: MButton$1
  }
})], MTimePickerHandler);
var MTimePickerHandler$1 = MTimePickerHandler;

var compName$j = 'm-time-picker';

var MTimePicker =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MTimePicker, _Mixins);

  function MTimePicker() {
    var _this;

    _classCallCheck(this, MTimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MTimePicker).apply(this, arguments));
    _this.DateStore = {
      value: _this.valueAdaptI(_this.value),
      pickerType: _this.pickerType,
      activeType: DatePickerType.date,
      ampm: false,

      get dateValue() {
        return new Date(this.value);
      },

      get year() {
        return this.dateValue.getFullYear();
      },

      get month() {
        return this.dateValue.getMonth();
      },

      get weekDay() {
        return this.dateValue.getDay();
      },

      get date() {
        return this.dateValue.getDate();
      },

      get hours() {
        var result = this.dateValue.getHours();

        if (this.ampm && result >= 12) {
          result = result - 12;
        }

        return result;
      },

      get minutes() {
        return this.dateValue.getMinutes();
      },

      get am() {
        return this.dateValue.getHours() < 12;
      },

      SET_ACTIVE_TYPE: function SET_ACTIVE_TYPE(type) {
        if (type === this.activeType) {
          return;
        }

        this.activeType = type;
      },
      SET_PICKER_TYPE: function SET_PICKER_TYPE(type) {
        if (type === this.pickerType) {
          return;
        }

        this.pickerType = type;
      },
      SET_AM: function SET_AM(val) {
        if (val === this.am) {
          return;
        }

        var temp = new Date(this.value);
        temp.setHours(val ? this.hours : this.hours + 12);
        this.value = temp.getTime();
      },
      SET_AMPM: function SET_AMPM(val) {
        if (val === this.ampm) {
          return;
        }

        this.ampm = val;
      },
      UPDATE: function UPDATE(val) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DateValueType.date;
        var self = _this.DateStore;
        var result = new Date(self.value);

        if (type === DateValueType.year) {
          result.setFullYear(val);
          self.value = result.getTime();
        } else if (type === DateValueType.month) {
          result.setMonth(val);
          self.value = result.getTime();
        } else if (type === DateValueType.hours) {
          result.setHours(val);
          self.value = result.getTime();
        } else if (type === DateValueType.minutes) {
          result.setMinutes(val);
          self.value = result.getTime();
        } else {
          self.value = val;
        }

        if (_this.desync) {
          return;
        }

        if (_this.confirmation) {
          return;
        }

        if (_this.valueAdaptI(_this.value) === self.value) {
          return;
        }

        self.emitInput();
      },
      emitInput: function emitInput() {
        var self = _this.DateStore;

        var outValue = _this.valueAdaptO(self.value);

        _this.onInput(outValue);
      }
    };
    return _this;
  }

  _createClass(MTimePicker, [{
    key: "onConfirm",
    value: function onConfirm() {
      this.DateStore.emitInput();
    }
  }, {
    key: "onCancel",
    value: function onCancel() {}
  }, {
    key: "onInput",
    value: function onInput(val) {}
  }, {
    key: "valueAdaptI",
    // 输入适配
    value: function valueAdaptI(val) {
      var result = 0;

      if (this.valueFormat === DateValueFormat.timestamp) {
        result = typeof val === 'string' ? Number(val) : val;
      } else if (this.valueFormat === DateValueFormat.Date) {
        result = val.getTime();
      }

      return result;
    } // 输出适配

  }, {
    key: "valueAdaptO",
    value: function valueAdaptO(val) {
      var result = null;

      if (this.valueFormat === DateValueFormat.timestamp) {
        result = val;
      } else if (this.valueFormat === DateValueFormat.Date) {
        result = new Date(val);
      }

      return result;
    }
  }, {
    key: "onValueUpdate",
    value: function onValueUpdate(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      this.DateStore.UPDATE(this.valueAdaptI(val));
    }
  }, {
    key: "onAMPMUpdate",
    value: function onAMPMUpdate(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      this.DateStore.SET_AMPM(val);
    }
  }, {
    key: "onPickerTypeChange",
    value: function onPickerTypeChange(val) {
      this.DateStore.SET_PICKER_TYPE(val);

      switch (val) {
        case DatePickerType.datetime:
          this.DateStore.SET_ACTIVE_TYPE(DateValueType.date);
          break;

        default:
          this.DateStore.SET_ACTIVE_TYPE(val);
      }
    }
  }, {
    key: "RPanel",
    value: function RPanel() {
      var _this2 = this;

      var h = this.$createElement;
      var firstDayOfWeek = this.firstDayOfWeek,
          max = this.max,
          min = this.min;
      var activeType = this.DateStore.activeType;

      switch (activeType) {
        case DatePickerType.date:
          return h(MTimePickerPanelDate$1, {
            "attrs": {
              "max": max,
              "min": min,
              "firstDayOfWeek": firstDayOfWeek
            }
          });

        case DatePickerType.year:
          return h(MTimePickerPanelYear$1, {
            "attrs": {
              "max": max,
              "min": min
            },
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
              }
            }
          });

        case DatePickerType.month:
          return h(MTimePickerPanelMonth$1, {
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
              }
            }
          });

        default:
          return h(MTimePickerPanelTime$1, {
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
              }
            }
          });
      }
    }
  }, {
    key: "RHandler",
    value: function RHandler() {
      var h = this.$createElement;
      var confirmation = this.confirmation,
          onConfirm = this.onConfirm,
          onCancel = this.onCancel,
          color = this.color;
      return !confirmation ? undefined : h(MTimePickerHandler$1, {
        "on": {
          "confirm": onConfirm,
          "cancel": onCancel
        },
        "attrs": {
          "color": color
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var styles = this.styles,
          classes = this.classes,
          color = this.color,
          RPanel = this.RPanel,
          RHandler = this.RHandler;
      var pickerType = this.DateStore.pickerType;
      return h("div", {
        "staticClass": "".concat(compName$j, " m--").concat(pickerType),
        "style": styles,
        "class": classes
      }, [h("div", {
        "staticClass": "".concat(compName$j, "__main")
      }, [h(MTimePickerHeader$1), h("div", {
        "staticClass": "".concat(compName$j, "-panel")
      }, [RPanel()])]), RHandler()]);
    }
  }, {
    key: "styles",
    get: function get() {
      var elevation = this.elevation,
          color = this.color;
      var styles = {};
      genColor(styles, compName$j, color);
      genElevation(styles, compName$j, elevation);
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      var landscope = this.landscope;
      return {
        'm--landscope': landscope
      };
    }
  }]);

  return MTimePicker;
}(vueClassComponent_common_2(colorable$1, elevated$1));

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "landscope", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "desync", void 0);

__decorate([Prop({
  type: [Date, Number, String],
  default: new Date().getTime()
}), __metadata("design:type", Object)], MTimePicker.prototype, "value", void 0);

__decorate([Prop({
  type: String,
  default: DateValueFormat.timestamp
}), __metadata("design:type", String)], MTimePicker.prototype, "valueFormat", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "ampm", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePicker.prototype, "hourStep", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePicker.prototype, "minuteStep", void 0);

__decorate([Prop({
  type: [Date, Number, String],
  default: 2100
}), __metadata("design:type", Object)], MTimePicker.prototype, "max", void 0);

__decorate([Prop({
  type: [Date, Number, String],
  default: 1900
}), __metadata("design:type", Object)], MTimePicker.prototype, "min", void 0);

__decorate([Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], MTimePicker.prototype, "firstDayOfWeek", void 0);

__decorate([Prop({
  type: String,
  default: DatePickerType.date
}), __metadata("design:type", String)], MTimePicker.prototype, "pickerType", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "confirmation", void 0);

__decorate([Emit('confirm'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onConfirm", null);

__decorate([Emit('cancel'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onCancel", null);

__decorate([Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onInput", null);

__decorate([Watch('value', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onValueUpdate", null);

__decorate([Watch('ampm', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onAMPMUpdate", null);

__decorate([Watch('pickerType', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onPickerTypeChange", null);

__decorate([Provide(), __metadata("design:type", Object)], MTimePicker.prototype, "DateStore", void 0);

MTimePicker = __decorate([Component({
  components: {
    MTimePickerHeader: MTimePickerHeader$1,
    MTimePickerPanelDate: MTimePickerPanelDate$1,
    MTimePickerPanelYear: MTimePickerPanelYear$1,
    MTimePickerPanelMonth: MTimePickerPanelMonth$1,
    MTimePickerPanelTime: MTimePickerPanelTime$1,
    MTimePickerHandler: MTimePickerHandler$1
  }
})], MTimePicker);
var MTimePicker$1 = MTimePicker;

MTimePicker$1.install = function (Vue) {
  Vue.component('MTimePicker', MTimePicker$1);
};

var compName$k = 'm-list';

var MList =
/*#__PURE__*/
function (_Vue) {
  _inherits(MList, _Vue);

  function MList() {
    _classCallCheck(this, MList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MList).apply(this, arguments));
  }

  _createClass(MList, [{
    key: "onClick",
    value: function onClick(e) {}
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var styles = this.styles,
          $slots = this.$slots,
          onClick = this.onClick;
      return h("div", {
        "staticClass": compName$k,
        "on": {
          "click": onClick
        },
        "style": styles
      }, [$slots.media ? h("div", {
        "staticClass": "".concat(compName$k, "__media")
      }, [$slots.media]) : undefined, h("div", {
        "staticClass": "".concat(compName$k, "__content")
      }, [$slots.default]), $slots.action ? h("div", {
        "staticClass": "".concat(compName$k, "__action")
      }, [$slots.action]) : undefined]);
    }
  }, {
    key: "styles",
    get: function get() {
      var size = this.size;
      var styles = {};
      genSize(styles, compName$k, size);
      return styles;
    }
  }]);

  return MList;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MList.prototype, "size", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MList.prototype, "mode", void 0);

__decorate([Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MList.prototype, "onClick", null);

MList = __decorate([Component], MList);
var MList$1 = MList;

/* istanbul ignore next */

MList$1.install = function (Vue) {
  Vue.component('MList', MList$1);
};

var typeHeader;

(function (typeHeader) {
  typeHeader["normal"] = "normal";
  typeHeader["sticky"] = "sticky";
  typeHeader["none"] = "none";
})(typeHeader || (typeHeader = {}));

var typeHover;

(function (typeHover) {
  typeHover["none"] = "none";
  typeHover["row"] = "row";
  typeHover["cell"] = "cell";
})(typeHover || (typeHover = {}));

var typeSelect;

(function (typeSelect) {
  typeSelect["none"] = "none";
  typeSelect["single"] = "single";
  typeSelect["multi"] = "multi";
})(typeSelect || (typeSelect = {}));

var compName$l = 'm-table-head';

var TableHead =
/*#__PURE__*/
function (_Vue) {
  _inherits(TableHead, _Vue);

  function TableHead() {
    var _this;

    _classCallCheck(this, TableHead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableHead).apply(this, arguments));
    _this.widthMap = [];
    return _this;
  }

  _createClass(TableHead, [{
    key: "updateSize",
    value: function updateSize(widthMap) {
      this.widthMap = widthMap;
    }
  }, {
    key: "handleSelectAll",
    value: function handleSelectAll() {
      this.TableStore.SET_SELECTED_ALL();
    }
  }, {
    key: "RCell",
    value: function RCell(item, index) {
      var h = this.$createElement;
      var TableStore = this.TableStore,
          select = this.select,
          handleSelectAll = this.handleSelectAll,
          size = this.size;
      var Data = TableStore.Data,
          Selected = TableStore.Selected;
      var children = item.componentOptions.children;
      var propsData = item.componentOptions.propsData;
      var propsDefault = item.componentOptions.Ctor.options.props;

      function RContent() {
        var content = null;
        var type = item.componentOptions.propsData.type;

        if (type === 'select' && select === 'multi') {
          var selectedLength = Selected.length;
          var dataLength = Data.length;
          var checkAll = [0, 1];
          var checkVal = selectedLength === 0 ? [] : dataLength === selectedLength ? [0, 1] : [0];
          content = h(MCheckbox$1, {
            "on": {
              "input": function input() {
                handleSelectAll();
              }
            },
            "attrs": {
              "size": size,
              "value": checkVal,
              "label": checkAll
            }
          });
        } else {
          // todo:错误处理
          content = [propsData.title || children];

          if (propsData.sortable !== undefined) {
            content.push(h(MIcon$1, {
              "attrs": {
                "size": 14,
                "name": 'arrow_upward'
              }
            }));
          }
        }

        return content;
      }

      var width = getStyleSize(this.widthMap[index] || propsData.width || propsDefault.width.default);
      var align = item.componentOptions.align || propsDefault.align.default;
      var styles = {
        width: width,
        minWidth: width,
        maxWidth: width
      };
      return h("td", {
        "staticClass": "".concat(compName$l, "__cell"),
        "style": styles,
        "attrs": {
          "align": align
        }
      }, [RContent()]);
    }
  }, {
    key: "RHead",
    value: function RHead() {
      var h = this.$createElement;
      var TableCols = this.TableCols,
          RCell = this.RCell;
      var result = [];
      TableCols.forEach(function (item, index) {
        result.push(RCell(item, index));
      });
      return h("tr", {
        "staticClass": "".concat(compName$l, "__row")
      }, [result]);
    }
  }, {
    key: "RSlotHeadPrepend",
    value: function RSlotHeadPrepend() {
      var h = this.$createElement;
      var TableCols = this.TableCols;
      var $slotHeadPrepend = this.$parent.$slots['head-prepend'];
      return !$slotHeadPrepend ? undefined : h("tr", {
        "staticClass": "".concat(compName$l, "__row")
      }, [h("td", {
        "attrs": {
          "colSpan": TableCols.length
        }
      }, [$slotHeadPrepend])]);
    }
  }, {
    key: "RSlotHeadAppend",
    value: function RSlotHeadAppend() {
      var h = this.$createElement;
      var TableCols = this.TableCols;
      var $slotHeadAppend = this.$parent.$slots['head-append'];
      return !$slotHeadAppend ? undefined : h("tr", {
        "staticClass": "".concat(compName$l, "__row")
      }, [h("td", {
        "attrs": {
          "colSpan": TableCols.length
        }
      }, [$slotHeadAppend])]);
    }
  }, {
    key: "RSlotHeadExtra",
    value: function RSlotHeadExtra() {
      var $slotHeadExtra = this.$parent.$slots['head-extra'];
      return !$slotHeadExtra ? undefined : $slotHeadExtra;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RHead = this.RHead,
          RSlotHeadPrepend = this.RSlotHeadPrepend,
          RSlotHeadAppend = this.RSlotHeadAppend,
          RSlotHeadExtra = this.RSlotHeadExtra;
      return h("table", {
        "staticClass": compName$l
      }, [h("thead", [RSlotHeadPrepend(), RSlotHeadExtra(), RHead(), RSlotHeadAppend()])]);
    }
  }]);

  return TableHead;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableHead.prototype, "size", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableHead.prototype, "select", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], TableHead.prototype, "sortable", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], TableHead.prototype, "sort", void 0);

__decorate([Inject(), __metadata("design:type", Object)], TableHead.prototype, "TableCols", void 0);

__decorate([Inject(), __metadata("design:type", Object)], TableHead.prototype, "TableStore", void 0);

TableHead = __decorate([Component({
  components: {
    MCheckbox: MCheckbox$1,
    MIcon: MIcon$1
  }
})], TableHead);
var TableHead$1 = TableHead;

var compName$m = 'm-transition-expansion';

function getSize(size) {
  if (!size) {
    return 0;
  }

  var index = size.indexOf('px');

  if (index === -1) {
    return 0;
  }

  return Number(size.substring(0, index));
}

function beforeEnter(el) {
  // @ts-ignore
  el.dataset.originPaddingTop = el.style.paddingTop; // @ts-ignore

  el.dataset.originPaddingBottom = el.style.paddingBottom; // @ts-ignore

  el.dataset.originOverflow = el.style.overflow;
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
  el.style.height = '0';
}

function enter(el) {
  el.style.display = 'block';
  el.style.overflow = 'hidden'; // @ts-ignore

  el.style.height = el.scrollHeight + getSize(el.dataset.originPaddingTop) + getSize(el.dataset.originPaddingBottom) + 'px'; // @ts-ignore

  el.style.paddingTop = el.dataset.originPaddingTop; // @ts-ignore

  el.style.paddingBottom = el.dataset.originPaddingBottom;
}

function afterEnter(el) {
  // el.style.display = '';
  // el.style.height = '';
  // @ts-ignore
  el.style.overflow = el.dataset.originOverflow; // @ts-ignore

  el.style.paddingTop = el.dataset.originPaddingTop; // @ts-ignore

  el.style.paddingBottom = el.dataset.originPaddingBottom;
}

function beforeLeave(el) {
  // @ts-ignore
  el.dataset.originPaddingTop = el.style.paddingTop; // @ts-ignore

  el.dataset.originPaddingBottom = el.style.paddingBottom; // @ts-ignore

  el.dataset.originOverflow = el.style.overflow;
  el.style.display = 'block';

  if (el.scrollHeight !== 0) {
    el.style.height = el.scrollHeight + 'px';
  }

  el.style.overflow = 'hidden';
}

function leave(el) {
  if (el.scrollHeight !== 0) {
    setTimeout(function () {
      // @ts-ignore
      el.style.height = 0; // @ts-ignore

      el.style.paddingTop = 0; // @ts-ignore

      el.style.paddingBottom = 0;
    });
  }
}

var MTransitionExpansion =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTransitionExpansion, _Vue);

  function MTransitionExpansion() {
    _classCallCheck(this, MTransitionExpansion);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTransitionExpansion).apply(this, arguments));
  }

  _createClass(MTransitionExpansion, [{
    key: "render",
    value: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      return h("transition", {
        "attrs": {
          "name": compName$m
        },
        "on": {
          "beforeEnter": beforeEnter,
          "enter": enter,
          "afterEnter": afterEnter,
          "beforLeave": beforeLeave,
          "leave": leave
        }
      }, [children]);
    }
  }]);

  return MTransitionExpansion;
}(Vue);

MTransitionExpansion = __decorate([Component({
  functional: true
})], MTransitionExpansion);
var MTransitionExpansion$1 = MTransitionExpansion;

/* istanbul ignore next */

MTransitionExpansion$1.install = function (Vue) {
  Vue.component('MTransitionExpansion', MTransitionExpansion$1);
};

/**
 * 事件绑定
 * @param element
 * @param event
 * @param handler
 * @param propgation
 */
var on = function () {
  if (document.addEventListener) {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };
      var propagation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (element && event && handler) {
        element.addEventListener(event, handler, propagation);
      }
    };
  } else {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };

      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();
var off = function () {
  if (document.addEventListener) {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };
      var propagation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (element && event) {
        element.removeEventListener(event, handler, propagation);
      }
    };
  } else {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };

      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

var compName$n = 'm-table-body';

var TableBody =
/*#__PURE__*/
function (_Vue) {
  _inherits(TableBody, _Vue);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableBody).apply(this, arguments));
  }

  _createClass(TableBody, [{
    key: "noHeaderToggle",
    value: function noHeaderToggle(val) {
      if (!val) {
        this.updateDom();
      }
    }
  }, {
    key: "handleRowClick",
    value: function handleRowClick(row, index) {
      var selectable = this.selectable,
          rowSelect = this.rowSelect,
          expandable = this.expandable,
          rowExpand = this.rowExpand;

      if (selectable && rowSelect) {
        this.handleRowSelect(row, index);
      }

      if (expandable && rowExpand) {
        this.handleRowExpand(row, index);
      }
    }
  }, {
    key: "handleRowSelect",
    value: function handleRowSelect(row, index) {
      console.log(index);
      this.TableStore.SET_SELECTED(index);
    }
  }, {
    key: "handleRowExpand",
    value: function handleRowExpand(row, index) {
      console.log(index);
      this.TableStore.SET_EXPANDED(index);
    }
  }, {
    key: "RCols",
    value: function RCols(row, index) {
      var h = this.$createElement;
      var TableCols = this.TableCols,
          selectable = this.selectable,
          select = this.select,
          size = this.size,
          expandable = this.expandable,
          handleRowSelect = this.handleRowSelect,
          handleRowExpand = this.handleRowExpand;
      var _this$TableStore = this.TableStore,
          Selected = _this$TableStore.Selected,
          keyField = _this$TableStore.keyField,
          NoSelect = _this$TableStore.NoSelect,
          Expanded = _this$TableStore.Expanded;
      var result = [];

      function RContent(item) {
        var isSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isExpand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var content = [];
        var scopedSlots = item.data.scopedSlots;
        var field = item.componentOptions.propsData.field;

        if (isSelect) {
          var isSelected = Selected.includes(row[keyField]);

          if (select === typeSelect.multi) {
            content = h("div", {
              "staticClass": "m--center"
            }, [h(MCheckbox$1, {
              "attrs": {
                "value": isSelected,
                "size": size
              },
              "nativeOn": {
                "click": function click(event) {
                  event.stopPropagation();
                }
              },
              "on": {
                "input": function input() {
                  return handleRowSelect(row, index);
                }
              }
            })]);
          } else {
            content = h("div", {
              "staticClass": "m--center"
            }, [h(MRadio$1, {
              "attrs": {
                "value": isSelected,
                "size": size
              },
              "nativeOn": {
                "click": function click(event) {
                  event.stopPropagation();
                }
              },
              "on": {
                "input": function input() {
                  return handleRowSelect(row, index);
                }
              }
            })]);
          }
        } else if (isExpand) {
          var isExpanded = Expanded.includes(row[keyField]);
          content = h("div", {
            "staticClass": "m--center",
            "on": {
              "click": function click(event) {
                event.stopPropagation();
                handleRowExpand(row, index);
              }
            }
          }, [h("transition", {
            "attrs": {
              "name": "m-transition-scale"
            }
          }, [isExpanded ? h(MIcon$1, {
            "attrs": {
              "name": 'remove',
              "size": size
            }
          }) : h(MIcon$1, {
            "attrs": {
              "name": 'add',
              "size": size
            }
          })])]);
        } else if (scopedSlots) {
          // 自定模板
          content = scopedSlots.default(row);
        } else {
          content = row[field];
        }

        return content;
      }

      function RCell(item) {
        var width = getStyleSize(item.componentOptions.propsData.width);
        var styles = {
          width: width,
          minWidth: width,
          maxWidth: width
        };
        var align = item.componentOptions.align || item.componentOptions.Ctor.options.props.align.default;
        var type = item.componentOptions.propsData.type;
        var isSelect = type === 'select' && selectable;
        var isExpand = type === 'expand' && expandable;
        return h("td", {
          "staticClass": "".concat(compName$n, "__cell"),
          "style": styles,
          "attrs": {
            "align": align
          }
        }, [RContent(item, isSelect, isExpand)]);
      }

      TableCols.forEach(function (item) {
        result.push(RCell(item));
      });
      return result;
    }
  }, {
    key: "RRow",
    value: function RRow(row, index) {
      var h = this.$createElement;
      var TableStore = this.TableStore,
          RCols = this.RCols,
          handleRowClick = this.handleRowClick,
          selectable = this.selectable;
      var Selected = TableStore.Selected,
          keyField = TableStore.keyField,
          NoSelect = TableStore.NoSelect;
      var classes = !selectable ? {} : {
        'm--selected': Selected.includes(row[keyField]),
        'm--disabled': NoSelect.includes(row[keyField])
      };
      return h("tr", {
        "staticClass": "".concat(compName$n, "__row"),
        "class": classes,
        "on": {
          "click": function click() {
            return handleRowClick(row, index);
          }
        }
      }, [RCols(row, index)]);
    }
  }, {
    key: "RExpand",
    value: function RExpand(row, index) {
      var h = this.$createElement;

      if (!this.$parent.$scopedSlots.expand) {
        return undefined;
      }

      var TableStore = this.TableStore,
          TableCols = this.TableCols,
          expandable = this.expandable;
      var Expanded = TableStore.Expanded,
          keyField = TableStore.keyField;

      if (!expandable) {
        return undefined;
      }

      var isExpanded = Expanded.includes(row[keyField]);
      return h("tr", {
        "staticClass": "".concat(compName$n, "__expand")
      }, [h("td", {
        "attrs": {
          "colSpan": TableCols.length
        }
      }, [h(MTransitionExpansion$1, [!isExpanded ? undefined : h("div", {
        "staticClass": "".concat(compName$n, "__expand-content")
      }, [this.$parent.$scopedSlots.expand(row)])])])]);
    }
  }, {
    key: "RTBody",
    value: function RTBody() {
      var h = this.$createElement;
      var TableStore = this.TableStore,
          RRow = this.RRow,
          RExpand = this.RExpand,
          expandable = this.expandable;
      var result = [];
      TableStore.Data.forEach(function (row, index) {
        result.push(RRow(row, index));

        if (expandable) {
          result.push(RExpand(row, index));
        }
      });
      return h("tbody", [result]);
    }
  }, {
    key: "updateDom",
    value: function updateDom() {
      var noHeader = this.noHeader;
      var $tableBody = this.$el.querySelector('tbody');

      if (!!$tableBody.children.length && !noHeader) {
        var widthMap = [];
        var $headCells = $tableBody.children[0].children;
        var vmTableHead = this.$parent.$refs.head;
        var cellCount = $headCells.length;

        while (cellCount--) {
          // widthMap.unshift($headCells[cellCount].clientWidth + (border ? 0 : 0)) // +1px消去边框对宽度影响
          widthMap.unshift($headCells[cellCount].clientWidth);
        }

        vmTableHead.updateSize(widthMap);
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.updateDom();
      on(window, 'resize', this.updateDom);
    }
  }, {
    key: "updated",
    value: function updated() {
      this.updateDom();
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      off(window, 'resize', this.updateDom);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var styles = this.styles,
          RTBody = this.RTBody;
      return h("div", {
        "staticClass": compName$n,
        "style": styles
      }, [h("table", [RTBody()])]);
    }
  }, {
    key: "selectable",
    get: function get() {
      return this.select !== typeSelect.none;
    }
  }, {
    key: "expandable",
    get: function get() {
      return this.expand !== typeSelect.none;
    }
  }, {
    key: "styles",
    get: function get() {
      var height = this.height;
      return {
        height: height !== 'auto' ? height : false
      };
    }
  }]);

  return TableBody;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "height", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "border", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "noHeader", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "size", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "rowSelect", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "rowExpand", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "select", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "expand", void 0);

__decorate([Inject(), __metadata("design:type", Array)], TableBody.prototype, "TableCols", void 0);

__decorate([Inject(), __metadata("design:type", Object)], TableBody.prototype, "TableStore", void 0);

__decorate([Watch('noHeader'), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], TableBody.prototype, "noHeaderToggle", null);

TableBody = __decorate([Component({
  components: {
    MCheckbox: MCheckbox$1,
    MRadio: MRadio$1,
    MIcon: MIcon$1,
    MTransitionExpansion: MTransitionExpansion$1
  }
})], TableBody);
var TableBody$1 = TableBody;

var compName$o = 'm-table';
var SELF_KEY = '_table-key';

var MTable =
/*#__PURE__*/
function (_Mixins) {
  _inherits(MTable, _Mixins);

  function MTable() {
    var _this;

    _classCallCheck(this, MTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MTable).apply(this, arguments));
    _this.TableStore = {
      Data: [],
      keyField: _this.keyField,
      Selected: [],
      NoSelect: _this.noSelect,
      Expanded: [],
      SET_DATA: function SET_DATA(field, value) {
        var _this2 = this;

        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        var Data = this.Data;

        if (index === -1) {
          Data.forEach(function (row) {
            if (row[field] !== undefined) {
              row[field] = value;
            } else {
              _this2.$set(row, field, value);
            }
          });
        } else {
          if (Data[index][field] !== undefined) {
            Data[index][field] = value;
          } else {
            console.log(field, value, index); // this.$set(Data[index], field, value)
          }
        }
      },
      SET_SELECTED: function SET_SELECTED(index) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            select = _assertThisInitialize.select;

        var _this$TableStore = _this.TableStore,
            Data = _this$TableStore.Data,
            Selected = _this$TableStore.Selected,
            keyField = _this$TableStore.keyField;
        var keyValue = Data[index][keyField];
        var targetIndex = Selected.indexOf(keyValue);

        if (targetIndex === -1) {
          if (select === typeSelect.multi) {
            // multi
            _this.TableStore.Selected.push(keyValue);
          } else {
            // single
            _this.TableStore.Selected = [keyValue];
          }
        } else {
          _this.TableStore.Selected.splice(targetIndex, 1);
        }

        _this.syncSelected(_this.TableStore.Selected);
      },
      SET_SELECTED_ALL: function SET_SELECTED_ALL() {
        var _this$TableStore2 = _this.TableStore,
            Data = _this$TableStore2.Data,
            Selected = _this$TableStore2.Selected,
            keyField = _this$TableStore2.keyField;

        if (Selected.length === 0) {
          _this.TableStore.Selected = Data.map(function (row) {
            return row[keyField];
          });
        } else {
          _this.TableStore.Selected = [];
        }

        _this.syncSelected(_this.TableStore.Selected);
      },
      SET_EXPANDED: function SET_EXPANDED(index) {
        console.log(index);

        var _assertThisInitialize2 = _assertThisInitialized(_this),
            expand = _assertThisInitialize2.expand;

        var _this$TableStore3 = _this.TableStore,
            Data = _this$TableStore3.Data,
            keyField = _this$TableStore3.keyField;
        var keyValue = Data[index][keyField];

        var targetIndex = _this.TableStore.Expanded.indexOf(keyValue);

        if (targetIndex === -1) {
          if (expand === typeSelect.multi) {
            // multi
            _this.TableStore.Expanded.push(keyValue);
          } else {
            // single
            _this.TableStore.Expanded = [keyValue];
          }
        } else {
          _this.TableStore.Expanded.splice(targetIndex, 1);
        }

        _this.syncExpanded(_this.TableStore.Expanded);
      }
    };
    return _this;
  }

  _createClass(MTable, [{
    key: "onExpand",
    value: function onExpand(row, index) {}
  }, {
    key: "onExpandAll",
    value: function onExpandAll(row, index) {}
  }, {
    key: "onSelect",
    value: function onSelect(row, index) {}
  }, {
    key: "onSelectAll",
    value: function onSelectAll(row, index) {}
  }, {
    key: "onRowClick",
    value: function onRowClick(row, index) {}
  }, {
    key: "onRowDblclick",
    value: function onRowDblclick(row, index) {}
  }, {
    key: "handleDataUpdate",
    value: function handleDataUpdate(val) {
      this.TableStore.Data = this.dataAdaptI(val);
    }
  }, {
    key: "handleSelectedUpdate",
    value: function handleSelectedUpdate(val) {
      this.TableStore.Selected = deepCopy(val);
    }
  }, {
    key: "handleExpandedUpdate",
    value: function handleExpandedUpdate(val) {
      this.TableStore.Expanded = deepCopy(val);
    }
  }, {
    key: "syncSelected",
    value: function syncSelected(data) {}
  }, {
    key: "syncExpanded",
    value: function syncExpanded(data) {}
  }, {
    key: "dataAdaptI",
    // 数据输入适配
    value: function dataAdaptI() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keyField = this.keyField;
      var temp = deepCopy(val);

      if (keyField === SELF_KEY) {
        temp.forEach(function (item, index) {
          item[keyField] = index;
        });
      }

      return temp;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var height = this.height,
          border = this.border,
          header = this.header,
          size = this.size,
          elevation = this.elevation,
          select = this.select,
          expand = this.expand,
          rowSelect = this.rowSelect,
          rowExpand = this.rowExpand;
      var noHeader = header === typeHeader.none;
      return h("div", {
        "staticClass": compName$o,
        "attrs": {
          "size": size,
          "elevation": elevation
        }
      }, [h("section", {
        "staticClass": "".concat(compName$o, "__wrapper")
      }, [noHeader ? undefined : h(TableHead$1, {
        "ref": 'head',
        "attrs": {
          "size": size,
          "select": select
        }
      }), h(TableBody$1, {
        "ref": 'body',
        "attrs": {
          "size": size,
          "height": height,
          "border": border,
          "select": select,
          "expand": expand,
          "rowSelect": rowSelect,
          "rowExpand": rowExpand,
          "noHeader": noHeader
        }
      })])]);
    }
  }, {
    key: "TableCols",
    get: function get() {
      var $slots = this.$slots;
      var result = [];

      if ($slots.default) {
        // 声明渲染
        $slots.default.forEach(function (item) {
          // 多级表头处理
          // const $children = item.componentOptions.children
          // if (
          //     $children
          //     && $children.length > 1
          //     && $children[0].componentOptions.tag === tableColTagName
          // ) {
          //     console.log(item.componentOptions.children[0].componentOptions.tag)
          //     console.log(tableColTagName)
          // }
          result.push(item);
        });
      }

      return result;
    }
  }]);

  return MTable;
}(vueClassComponent_common_2(sizeable$1, elevated$1));

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], MTable.prototype, "height", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "border", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Array)], MTable.prototype, "data", void 0);

__decorate([Prop({
  type: String,
  default: SELF_KEY
}), __metadata("design:type", String)], MTable.prototype, "keyField", void 0);

__decorate([Prop({
  type: String,
  default: typeHeader.normal,
  validator: function validator(value) {
    return typeHeader.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "header", void 0);

__decorate([Prop({
  type: String,
  default: typeHover.none,
  validator: function validator(value) {
    return typeHover.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "hover", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "rowSelect", void 0);

__decorate([Prop({
  type: String,
  default: typeSelect.none,
  validator: function validator(value) {
    return typeSelect.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "select", void 0);

__decorate([Prop({
  type: [Array, String, Number],
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "selected", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "noSelect", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "rowExpand", void 0);

__decorate([Prop({
  type: String,
  default: typeSelect.none,
  validator: function validator(value) {
    return typeSelect.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "expand", void 0);

__decorate([Prop({
  type: [Array, String, Number],
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "expanded", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "noExpand", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], MTable.prototype, "filter", void 0);

__decorate([Emit('expand'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onExpand", null);

__decorate([Emit('expandAll'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onExpandAll", null);

__decorate([Emit('select'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onSelect", null);

__decorate([Emit('selectAll'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onSelectAll", null);

__decorate([Emit('rowClick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onRowClick", null);

__decorate([Emit('rowDblclick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onRowDblclick", null);

__decorate([Watch('data', {
  immediate: true,
  deep: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Array]), __metadata("design:returntype", void 0)], MTable.prototype, "handleDataUpdate", null);

__decorate([Watch('selected', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "handleSelectedUpdate", null);

__decorate([Watch('expanded', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "handleExpandedUpdate", null);

__decorate([Emit('update:selected'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "syncSelected", null);

__decorate([Emit('update:expanded'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "syncExpanded", null);

__decorate([Provide(), __metadata("design:type", Object)], MTable.prototype, "TableStore", void 0);

__decorate([Provide(), __metadata("design:type", Array), __metadata("design:paramtypes", [])], MTable.prototype, "TableCols", null);

MTable = __decorate([Component({
  components: {
    TableHead: TableHead$1,
    TableBody: TableBody$1
  }
})], MTable);
var MTable$1 = MTable;

var MTableCol =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTableCol, _Vue);

  function MTableCol() {
    _classCallCheck(this, MTableCol);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTableCol).apply(this, arguments));
  }

  return MTableCol;
}(Vue);

__decorate([Prop({
  type: String,
  default: 'normal'
}), __metadata("design:type", String)], MTableCol.prototype, "type", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MTableCol.prototype, "title", void 0);

__decorate([Prop({
  type: [String, Number],
  default: 'auto'
}), __metadata("design:type", String)], MTableCol.prototype, "width", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MTableCol.prototype, "field", void 0);

__decorate([Prop({
  type: String,
  default: Align.center
}), __metadata("design:type", String)], MTableCol.prototype, "align", void 0);

__decorate([Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTableCol.prototype, "color", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], MTableCol.prototype, "sort", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTableCol.prototype, "sortable", void 0);

MTableCol = __decorate([Component], MTableCol);
var MTableCol$1 = MTableCol;

/* istanbul ignore next */

MTable$1.install = function (Vue) {
  Vue.component('MTable', MTable$1);
};

MTableCol$1.install = function (Vue) {
  Vue.component('MTableCol', MTableCol$1);
};

// 基础

var components = /*#__PURE__*/Object.freeze({
    MApp: MApp$1,
    MView: MView$1,
    MIcon: MIcon$1,
    MContainer: MContainer$1,
    MRow: MRow$1,
    MCol: MCol$1,
    MFlex: MFlex$1,
    MFlexFiller: MFlexFiller$1,
    MAppBar: MAppBar$1,
    MButton: MButton$1,
    MAvatar: MAvatar$1,
    MRadio: MRadio$1,
    MCheckbox: MCheckbox$1,
    MChip: MChip$1,
    MTimePicker: MTimePicker$1,
    MList: MList$1,
    MTable: MTable$1,
    MTableCol: MTableCol$1
});

var name = 'MRipple';

function style(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}

var ripple = {
  show: function show(e, el) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!el._ripple || !el._ripple.enabled) {
      return;
    }

    var container = document.createElement('span');
    var animation = document.createElement('span');
    container.appendChild(animation);
    container.className = 'v-ripple__container';

    if (value.class) {
      container.className += " ".concat(value.class);
    }

    var size = Math.max(el.clientWidth, el.clientHeight) * (value.center ? 1 : 2);
    var halfSize = size / 2;
    animation.className = 'v-ripple__animation';
    animation.style.width = "".concat(size, "px");
    animation.style.height = "".concat(size, "px");
    el.appendChild(container);
    var computed = window.getComputedStyle(el);

    if (computed.position !== 'absolute' && computed.position !== 'fixed') {
      el.style.position = 'relative';
    }

    var offset = el.getBoundingClientRect();
    var x = value.center ? 0 : e.clientX - offset.left - halfSize;
    var y = value.center ? 0 : e.clientY - offset.top - halfSize;
    animation.classList.add('v-ripple__animation--enter');
    animation.classList.add('v-ripple__animation--visible');
    style(animation, "translate(".concat(x, "px, ").concat(y, "px) scale3d(0, 0, 0)"));
    animation.dataset.activated = String(performance.now());
    setTimeout(function () {
      animation.classList.remove('v-ripple__animation--enter');
      style(animation, "translate(".concat(x, "px, ").concat(y, "px)  scale3d(1, 1, 1)"));
    }, 0);
  },
  hide: function hide(el) {
    if (!el || !el._ripple || !el._ripple.enabled) {
      return;
    }

    var ripples = el.getElementsByClassName('v-ripple__animation');

    if (ripples.length === 0) {
      return;
    }

    var animation = ripples[ripples.length - 1];

    if (animation.dataset.isHiding) {
      return;
    } else {
      animation.dataset.isHiding = 'true';
    }

    var diff = performance.now() - Number(animation.dataset.activated);
    var delay = Math.max(300 - diff, 0);
    setTimeout(function () {
      animation.classList.remove('v-ripple__animation--visible');
      setTimeout(function () {
        var $ripples = el.getElementsByClassName('v-ripple__animation');

        if ($ripples.length === 0) {
          el.style.position = null;
        }

        if (animation.parentNode) {
          el.removeChild(animation.parentNode);
        }
      }, 300);
    }, delay);
  }
};

function isRippleEnabled(value) {
  return typeof value === 'undefined' || !!value;
}

function rippleShow(e) {
  var value = {};
  var element = e.currentTarget;

  if (!element) {
    return;
  }

  value.center = element._ripple.centered;

  if (element._ripple.class) {
    value.class = element._ripple.class;
  }

  ripple.show(e, element, value);
}

function rippleHide(e) {
  ripple.hide(e.currentTarget);
}

function updateRipple(el, binding, wasEnabled) {
  var enabled = isRippleEnabled(binding.value);

  if (!enabled) {
    ripple.hide(el);
  }

  el._ripple = el._ripple || {};
  el._ripple.enabled = enabled;
  var value = binding.value || {};

  if (value.center) {
    el._ripple.centered = true;
  }

  if (value.class) {
    el._ripple.class = binding.value.class;
  }

  if (enabled && !wasEnabled) {
    if ('ontouchstart' in window) {
      el.addEventListener('touchend', rippleHide, false);
      el.addEventListener('touchcancel', rippleHide, false);
    }

    el.addEventListener('mousedown', rippleShow, false);
    el.addEventListener('mouseup', rippleHide, false);
    el.addEventListener('mouseleave', rippleHide, false);
    el.addEventListener('dragstart', rippleHide, false);
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}

function removeListeners(el) {
  el.removeEventListener('mousedown', rippleShow, false);
  el.removeEventListener('touchend', rippleHide, false);
  el.removeEventListener('touchcancel', rippleHide, false);
  el.removeEventListener('mouseup', rippleHide, false);
  el.removeEventListener('mouseleave', rippleHide, false);
  el.removeEventListener('dragstart', rippleHide, false);
}

function directive(el, binding) {
  updateRipple(el, binding, false);
}

function unbind(el) {
  delete el._ripple;
  removeListeners(el);
}

function update(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }

  var wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}

var MRipple = {
  name: name,
  bind: directive,
  unbind: unbind,
  update: update
};

/* istanbul ignore next */

MRipple.install = function (Vue) {
  Vue.directive(MRipple.name, MRipple);
};

// 指令和动画

var directives = /*#__PURE__*/Object.freeze({
    MRipple: MRipple
});

/* eslint-disable */
register({
  "menu": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"]
  }
});

/* eslint-disable */
register({
  "close": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"]
  }
});

/* eslint-disable */
register({
  "search": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z"]
  }
});

/* eslint-disable */
register({
  "navigate_before": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M15.422 7.406l-4.594 4.594 4.594 4.594-1.406 1.406-6-6 6-6z"]
  }
});

/* eslint-disable */
register({
  "navigate_next": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"]
  }
});

/* eslint-disable */
register({
  "arrow_drop_down": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M6.984 9.984h10.031l-5.016 5.016z"]
  }
});

/* eslint-disable */
register({
  "check_box": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563-1.406 1.406zM18.984 3c1.125 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.891 2.016-2.016 2.016h-13.969c-1.125 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.891-2.016 2.016-2.016h13.969z"]
  }
});

/* eslint-disable */
register({
  "check_box_outline_blank": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 3c1.078 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.078 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.938-2.016 2.016-2.016h13.969zM18.984 5.016h-13.969v13.969h13.969v-13.969z"]
  }
});

/* eslint-disable */
register({
  "indeterminate_check_box": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M17.016 12.984v-1.969h-10.031v1.969h10.031zM18.984 3c1.078 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.078 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.938-2.016 2.016-2.016h13.969z"]
  }
});

/* eslint-disable */
register({
  "radio_button_checked": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12 20.016c4.406 0 8.016-3.609 8.016-8.016s-3.609-8.016-8.016-8.016-8.016 3.609-8.016 8.016 3.609 8.016 8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984zM12 6.984c2.766 0 5.016 2.25 5.016 5.016s-2.25 5.016-5.016 5.016-5.016-2.25-5.016-5.016 2.25-5.016 5.016-5.016z"]
  }
});

/* eslint-disable */
register({
  "radio_button_unchecked": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12 20.016c4.406 0 8.016-3.609 8.016-8.016s-3.609-8.016-8.016-8.016-8.016 3.609-8.016 8.016 3.609 8.016 8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"]
  }
});

/* eslint-disable */
register({
  "check": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z"]
  }
});

/* eslint-disable */
register({
  "info_outline": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M11.016 9v-2.016h1.969v2.016h-1.969zM12 20.016c4.406 0 8.016-3.609 8.016-8.016s-3.609-8.016-8.016-8.016-8.016 3.609-8.016 8.016 3.609 8.016 8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984zM11.016 17.016v-6h1.969v6h-1.969z"]
  }
});

/* eslint-disable */
register({
  "warning": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12.984 14.016v-4.031h-1.969v4.031h1.969zM12.984 18v-2.016h-1.969v2.016h1.969zM0.984 21l11.016-18.984 11.016 18.984h-22.031z"]
  }
});

/* eslint-disable */
register({
  "error": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12.984 12.984v-6h-1.969v6h1.969zM12.984 17.016v-2.016h-1.969v2.016h1.969zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"]
  }
});

/* eslint-disable */
register({
  "keyboard_arrow_down": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"]
  }
});

/* eslint-disable */
register({
  "keyboard_arrow_up": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z"]
  }
});

/* eslint-disable */
register({
  "keyboard_arrow_right": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"]
  }
});

/* eslint-disable */
register({
  "add": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"]
  }
});

/* eslint-disable */
register({
  "remove": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 12.984h-13.969v-1.969h13.969v1.969z"]
  }
});

/* eslint-disable */
register({
  "arrow_upward": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M3.984 12l8.016-8.016 8.016 8.016-1.453 1.406-5.578-5.578v12.188h-1.969v-12.188l-5.625 5.578z"]
  }
});

/* eslint-disable */
register({
  "arrow_downward": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M20.016 12l-8.016 8.016-8.016-8.016 1.453-1.406 5.578 5.578v-12.188h1.969v12.188l5.625-5.578z"]
  }
});

var Mobov = {
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    this.installed = true; // 注册组件

    var componentsList = opts.components || components;
    var directivesList = opts.directives || directives;
    Object.values(componentsList).forEach(function (item) {
      Vue.use(item);
    });
    Object.values(directivesList).forEach(function (item) {
      Vue.use(item);
    }); // 挂载根组件

    window.Mobov = this; // console.log(Vue)
    // console.log(this)
  },
  version: '1.0.0',
  constant: constant
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Mobov);
}

export default Mobov;
export { MApp$1 as MApp, MAppBar$1 as MAppBar, MAvatar$1 as MAvatar, MButton$1 as MButton, MCheckbox$1 as MCheckbox, MChip$1 as MChip, MCol$1 as MCol, MContainer$1 as MContainer, MFlex$1 as MFlex, MFlexFiller$1 as MFlexFiller, MIcon$1 as MIcon, MList$1 as MList, MRadio$1 as MRadio, MRow$1 as MRow, MTable$1 as MTable, MTableCol$1 as MTableCol, MTimePicker$1 as MTimePicker, MView$1 as MView };
