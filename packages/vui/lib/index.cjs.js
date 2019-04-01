'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vuePropertyDecorator = require('vue-property-decorator');
var esHelper = require('@mobov/es-helper');

var _objectDp = /*#__PURE__*/Object.freeze({

});
var _wks$1 = /*#__PURE__*/Object.freeze({

});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt


var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var LIBRARY = require('./_library');

var $export = require('./_export');

var redefine = require('./_redefine');

var hide = require('./_hide');

var Iterators = require('./_iterators');

var $iterCreate = require('./_iter-create');

var setToStringTag = require('./_set-to-string-tag');

var getPrototypeOf = require('./_object-gpo');

var ITERATOR = require('./_wks')('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

var _iterDefine = /*#__PURE__*/Object.freeze({

});

var $at = _stringAt(true); // 21.1.3.27 String.prototype[@@iterator]()


_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

var isRegExp = require('./_is-regexp');

var anObject = require('./_an-object');

var speciesConstructor = require('./_species-constructor');

var advanceStringIndex = require('./_advance-string-index');

var toLength = require('./_to-length');

var callRegExpExec = require('./_regexp-exec-abstract');

var regexpExec = require('./_regexp-exec');

var fails = require('./_fails');

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
}); // @@split logic

require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
});

require('./es6.array.iterator');

var global = require('./_global');

var hide$1 = require('./_hide');

var Iterators$1 = require('./_iterators');

var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide$1(proto, TO_STRING_TAG, NAME);
  Iterators$1[NAME] = Iterators$1.Array;
}

var store = require('./_shared')('wks');

var uid = require('./_uid');

var _Symbol = require('./_global').Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

var _wks = /*#__PURE__*/Object.freeze({

});

var f = _wks;

var _wksExt = {
	f: f
};

var iterator = _wksExt.f('iterator');

var iterator$1 = iterator;

var global$1 = require('./_global');

var has = require('./_has');

var DESCRIPTORS = require('./_descriptors');

var $export$1 = require('./_export');

var redefine$1 = require('./_redefine');

var META = require('./_meta').KEY;

var $fails = require('./_fails');

var shared = require('./_shared');

var setToStringTag$1 = require('./_set-to-string-tag');

var uid$1 = require('./_uid');

var wks = require('./_wks');

var wksExt = require('./_wks-ext');

var wksDefine = require('./_wks-define');

var enumKeys = require('./_enum-keys');

var isArray = require('./_is-array');

var anObject$1 = require('./_an-object');

var isObject = require('./_is-object');

var toIObject = require('./_to-iobject');

var toPrimitive = require('./_to-primitive');

var createDesc = require('./_property-desc');

var _create = require('./_object-create');

var gOPNExt = require('./_object-gopn-ext');

var $GOPD = require('./_object-gopd');

var $DP = require('./_object-dp');

var $keys = require('./_object-keys');

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global$1.Symbol;
var $JSON = global$1.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global$1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject$1(it);
  key = toPrimitive(key, true);
  anObject$1(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject$1(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid$1(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine$1($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine$1(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag$1($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag$1(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag$1(global$1.JSON, 'JSON', true);

var _global$1 = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {
  version: '2.6.5'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var global$2 = require('./_global');

var core = require('./_core');

var ctx = require('./_ctx');

var hide$2 = require('./_hide');

var has$1 = require('./_has');

var PROTOTYPE$1 = 'prototype';

var $export$2 = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE$1];
  var target = IS_GLOBAL ? global$2 : IS_STATIC ? global$2[name] : (global$2[name] || {})[PROTOTYPE$1];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has$1(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global$2) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE$1] = C[PROTOTYPE$1];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide$2(expProto, key, out);
    }
  }
}; // type bitmap


$export$2.F = 1; // forced

$export$2.G = 2; // global

$export$2.S = 4; // static

$export$2.P = 8; // proto

$export$2.B = 16; // bind

$export$2.W = 32; // wrap

$export$2.U = 64; // safe

$export$2.R = 128; // real proto method for `library`

module.exports = $export$2;

var _export = /*#__PURE__*/Object.freeze({

});

// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return defineProperty$1({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

var _descriptors = /*#__PURE__*/Object.freeze({

});

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


_export(_export.S + _export.F * !_descriptors, 'Object', {
  defineProperty: _objectDp.f
});

var $Object = _core.Object;

var defineProperty = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$1 = defineProperty;

var anObject$2 = require('./_an-object');

var IE8_DOM_DEFINE = require('./_ie8-dom-define');

var toPrimitive$1 = require('./_to-primitive');

var dP$1 = defineProperty$1;
exports.f = require('./_descriptors') ? defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$2(O);
  P = toPrimitive$1(P, true);
  anObject$2(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP$1(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var defineProperty$2 = _objectDp.f;

var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$2($Symbol, name, {
    value: _wksExt.f(name)
  });
};

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol = _core.Symbol;

var symbol$1 = symbol;

function _typeof2(obj) {
  if (typeof symbol$1 === "function" && _typeof(iterator$1) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return _typeof(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof symbol$1 === "function" && obj.constructor === symbol$1 && obj !== symbol$1.prototype ? "symbol" : _typeof(obj);
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof symbol$1 === "function" && _typeof2(iterator$1) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof symbol$1 === "function" && obj.constructor === symbol$1 && obj !== symbol$1.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

var _isObject = /*#__PURE__*/Object.freeze({

});

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject$1 = require('./_is-object');

var anObject$3 = require('./_an-object');

var check = function check(O, proto) {
  anObject$3(O);
  if (!isObject$1(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: setPrototypeOf$1 || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

var _setProto = /*#__PURE__*/Object.freeze({

});

// 19.1.3.19 Object.setPrototypeOf(O, proto)


_export(_export.S, 'Object', {
  setPrototypeOf: _setProto.set
});

var setPrototypeOf = _core.Object.setPrototypeOf;

var setPrototypeOf$1 = setPrototypeOf;

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject$2 = require('./_is-object');

var anObject$4 = require('./_an-object');

var check$1 = function check(O, proto) {
  anObject$4(O);
  if (!isObject$2(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: setPrototypeOf$1 || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check$1(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check$1
};

var _setProto$1 = /*#__PURE__*/Object.freeze({

});

var setPrototypeOf$2 = _setProto$1.set;

var _inheritIfRequired = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf$2) {
    setPrototypeOf$2(that, P);
  }

  return that;
};

var anObject$5 = require('./_an-object');

var IE8_DOM_DEFINE$1 = require('./_ie8-dom-define');

var toPrimitive$2 = require('./_to-primitive');

var dP$2 = defineProperty$1;
exports.f = require('./_descriptors') ? defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$5(O);
  P = toPrimitive$2(P, true);
  anObject$5(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return dP$2(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp$1 = /*#__PURE__*/Object.freeze({

});

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// most Object methods by ES6 should accept primitives






var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () {
    fn(1);
  }), 'Object', exp);
};

// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

require('./es6.regexp.flags');

var anObject$6 = require('./_an-object');

var $flags = require('./_flags');

var DESCRIPTORS$1 = require('./_descriptors');

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (require('./_fails')(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject$6(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS$1 && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject$1 = require('./_to-iobject');

var gOPN$1 = require('./_object-gopn').f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && getOwnPropertyNames$1 ? getOwnPropertyNames$1(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(toIObject$1(it));
};

var _objectGopnExt = /*#__PURE__*/Object.freeze({

});

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

var $Object$1 = _core.Object;

var getOwnPropertyNames = function getOwnPropertyNames(it) {
  return $Object$1.getOwnPropertyNames(it);
};

var getOwnPropertyNames$1 = getOwnPropertyNames;

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys$1 = require('./_object-keys-internal');

var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = getOwnPropertyNames$1 || function getOwnPropertyNames(O) {
  return $keys$1(O, hiddenKeys);
};

var _objectGopn = /*#__PURE__*/Object.freeze({

});

var toString$1 = {}.toString;

module.exports = function (it) {
  return toString$1.call(it).slice(8, -1);
};

var _cof = /*#__PURE__*/Object.freeze({

});

// 7.2.8 IsRegExp(argument)




var MATCH = _wks$1('match');

var _isRegexp = function (it) {
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _flags = function () {
  var that = _anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return defineProperty$1({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

var _descriptors$1 = /*#__PURE__*/Object.freeze({

});

var _fails$1 = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var global$3 = require('./_global');

var hide$3 = require('./_hide');

var has$2 = require('./_has');

var SRC = require('./_uid')('src');

var $toString$1 = require('./_function-to-string');

var TO_STRING$1 = 'toString';
var TPL = ('' + $toString$1).split(TO_STRING$1);

require('./_core').inspectSource = function (it) {
  return $toString$1.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has$2(val, 'name') || hide$3(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has$2(val, SRC) || hide$3(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global$3) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide$3(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide$3(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING$1, function toString() {
  return typeof this == 'function' && this[SRC] || $toString$1.call(this);
});

var _redefine = /*#__PURE__*/Object.freeze({

});

var SPECIES = _wks$1('species');

var _setSpecies = function (KEY) {
  var C = _global[KEY];
  if (_descriptors$1 && C && !C[SPECIES]) _objectDp$1.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

var dP$3 = _objectDp$1.f;

var gOPN$2 = _objectGopn.f;





var $RegExp = _global.RegExp;
var Base = $RegExp;
var proto$1 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (_descriptors$1 && (!CORRECT_NEW || _fails$1(function () {
  re2[_wks$1('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = _isRegexp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : _inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f), tiRE ? this : proto$1, $RegExp);
  };

  var proxy = function proxy(key) {
    key in $RegExp || dP$3($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN$2(Base), i$1 = 0; keys.length > i$1;) {
    proxy(keys[i$1++]);
  }

  proto$1.constructor = $RegExp;
  $RegExp.prototype = proto$1;

  _redefine(_global, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

var anObject$7 = require('./_an-object');

var toLength$1 = require('./_to-length');

var advanceStringIndex$1 = require('./_advance-string-index');

var regExpExec = require('./_regexp-exec-abstract'); // @@match logic


require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject$7(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

var dP$4 = require('./_object-dp').f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME$1 = 'name'; // 19.2.4.2 name

NAME$1 in FProto || require('./_descriptors') && dP$4(FProto, NAME$1, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

var store$1 = require('./_shared')('wks');

var uid$2 = require('./_uid');

var _Symbol$1 = require('./_global').Symbol;

var USE_SYMBOL$1 = typeof _Symbol$1 == 'function';

var $exports$1 = module.exports = function (name) {
  return store$1[name] || (store$1[name] = USE_SYMBOL$1 && _Symbol$1[name] || (USE_SYMBOL$1 ? _Symbol$1 : uid$2)('Symbol.' + name));
};

$exports$1.store = store$1;

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors$1 ? function (object, key, value) {
  return _objectDp$1.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks$1('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});

var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

var _iterators = {};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof'); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

var _iobject = /*#__PURE__*/Object.freeze({

});

// 7.2.1 RequireObjectCoercible(argument)
var _defined$1 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings




var _toIobject = function (it) {
  return _iobject(_defined$1(it));
};

var LIBRARY$1 = require('./_library');

var $export$3 = require('./_export');

var redefine$2 = require('./_redefine');

var hide$4 = require('./_hide');

var Iterators$2 = require('./_iterators');

var $iterCreate$1 = require('./_iter-create');

var setToStringTag$2 = require('./_set-to-string-tag');

var getPrototypeOf$1 = require('./_object-gpo');

var ITERATOR$1 = require('./_wks')('iterator');

var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR$1 = '@@iterator';
var KEYS$1 = 'keys';
var VALUES$1 = 'values';

var returnThis$1 = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate$1(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY$1 && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS$1:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES$1:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES$1;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$1] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf$1($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag$2(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY$1 && typeof IteratorPrototype[ITERATOR$1] != 'function') hide$4(IteratorPrototype, ITERATOR$1, returnThis$1);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES$1) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY$1 || FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$1])) {
    hide$4(proto, ITERATOR$1, $default);
  } // Plug for library


  Iterators$2[NAME] = $default;
  Iterators$2[TAG] = returnThis$1;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES$1),
      keys: IS_SET ? $default : getMethod(KEYS$1),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine$2(proto, key, methods[key]);
    } else $export$3($export$3.P + $export$3.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
  }

  return methods;
};

var _iterDefine$1 = /*#__PURE__*/Object.freeze({

});

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


var es6_array_iterator = _iterDefine$1(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }

  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

_iterators.Arguments = _iterators.Array;
_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

require('../../modules/es6.object.keys');

module.exports = require('../../modules/_core').Object.keys;

var keys$1 = /*#__PURE__*/Object.freeze({

});

var keys$2 = keys$1;

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys$2 = require('./_object-keys-internal');

var enumBugKeys = require('./_enum-bug-keys');

module.exports = keys$2 || function keys(O) {
  return $keys$2(O, enumBugKeys);
};

var _objectKeys = /*#__PURE__*/Object.freeze({

});

var ITERATOR$2 = _wks$1('iterator');
var TO_STRING_TAG$1 = _wks$1('toStringTag');
var ArrayValues = _iterators.Array;
var DOMIterables$1 = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = _objectKeys(DOMIterables$1), i$2 = 0; i$2 < collections.length; i$2++) {
  var NAME$2 = collections[i$2];
  var explicit = DOMIterables$1[NAME$2];
  var Collection$1 = _global[NAME$2];
  var proto$2 = Collection$1 && Collection$1.prototype;
  var key;

  if (proto$2) {
    if (!proto$2[ITERATOR$2]) _hide(proto$2, ITERATOR$2, ArrayValues);
    if (!proto$2[TO_STRING_TAG$1]) _hide(proto$2, TO_STRING_TAG$1, NAME$2);
    _iterators[NAME$2] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) {
      if (!proto$2[key]) _redefine(proto$2, key, es6_array_iterator[key], true);
    }
  }
}

require('../../modules/es7.object.values');

module.exports = require('../../modules/_core').Object.values;

var values = /*#__PURE__*/Object.freeze({

});

var values$1 = values;

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

    defineProperty$1(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

// 7.1.13 ToObject(argument)


var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3 = require('./_has');

var toObject = require('./_to-object');

var IE_PROTO = require('./_shared-key')('IE_PROTO');

var ObjectProto$1 = Object.prototype;

module.exports = getPrototypeOf$3 || function (O) {
  O = toObject(O);
  if (has$3(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto$1 : null;
};

var _objectGpo = /*#__PURE__*/Object.freeze({

});

// 19.1.2.9 Object.getPrototypeOf(O)




_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf$2 = _core.Object.getPrototypeOf;

var getPrototypeOf$3 = getPrototypeOf$2;

function _getPrototypeOf(o) {
  _getPrototypeOf = setPrototypeOf$1 ? getPrototypeOf$3 : function _getPrototypeOf(o) {
    return o.__proto__ || getPrototypeOf$3(o);
  };
  return _getPrototypeOf(o);
}

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$8 = require('./_an-object');

var dPs = require('./_object-dps');

var enumBugKeys$1 = require('./_enum-bug-keys');

var IE_PROTO$1 = require('./_shared-key')('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE$2 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');

  var i = enumBugKeys$1.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  require('./_html').appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE$2][enumBugKeys$1[i]];
  }

  return _createDict();
};

module.exports = create$1 || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE$2] = anObject$8(O);
    result = new Empty();
    Empty[PROTOTYPE$2] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO$1] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

var _objectCreate = /*#__PURE__*/Object.freeze({

});

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


_export(_export.S, 'Object', {
  create: _objectCreate
});

var $Object$2 = _core.Object;

var create = function create(P, D) {
  return $Object$2.create(P, D);
};

var create$1 = create;

function _setPrototypeOf(o, p) {
  _setPrototypeOf = setPrototypeOf$1 || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create$1(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
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
}(vuePropertyDecorator.Vue);

MApp = __decorate([vuePropertyDecorator.Component], MApp);
var MApp$1 = MApp;

/* istanbul ignore next */

MApp$1.install = function (Vue) {
  Vue.component(MApp$1.name, MApp$1);
};

var $export$4 = require('./_export');

var $parseInt = require('./_parse-int'); // 18.2.5 parseInt(string, radix)


$export$4($export$4.G + $export$4.F * (_parseInt$1 != $parseInt), {
  parseInt: $parseInt
});

var _parseInt = _core.parseInt;

var _parseInt$1 = _parseInt;

var global$4 = require('./_global');

var has$4 = require('./_has');

var cof$1 = require('./_cof');

var inheritIfRequired = require('./_inherit-if-required');

var toPrimitive$3 = require('./_to-primitive');

var fails$1 = require('./_fails');

var gOPN$3 = require('./_object-gopn').f;

var gOPD$1 = require('./_object-gopd').f;

var dP$5 = require('./_object-dp').f;

var $trim = require('./_string-trim').trim;

var NUMBER = 'Number';
var $Number = global$4[NUMBER];
var Base$1 = $Number;
var proto$3 = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof$1(require('./_object-create')(proto$3)) == NUMBER;
var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

var toNumber = function toNumber(argument) {
  var it = toPrimitive$3(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return _parseInt$1(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails$1(function () {
      proto$3.valueOf.call(that);
    }) : cof$1(that) != NUMBER) ? inheritIfRequired(new Base$1(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys$3 = require('./_descriptors') ? gOPN$3(Base$1) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key$1; keys$3.length > j$1; j$1++) {
    if (has$4(Base$1, key$1 = keys$3[j$1]) && !has$4($Number, key$1)) {
      dP$5($Number, key$1, gOPD$1(Base$1, key$1));
    }
  }

  $Number.prototype = proto$3;
  proto$3.constructor = $Number;

  require('./_redefine')(global$4, NUMBER, $Number);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    defineProperty$1(obj, key, {
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

var global$5 = require('./_global');

var core$1 = require('./_core');

var hide$5 = require('./_hide');

var redefine$3 = require('./_redefine');

var ctx$1 = require('./_ctx');

var PROTOTYPE$3 = 'prototype';

var $export$5 = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global$5 : IS_STATIC ? global$5[name] || (global$5[name] = {}) : (global$5[name] || {})[PROTOTYPE$3];
  var exports = IS_GLOBAL ? core$1 : core$1[name] || (core$1[name] = {});
  var expProto = exports[PROTOTYPE$3] || (exports[PROTOTYPE$3] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx$1(out, global$5) : IS_PROTO && typeof out == 'function' ? ctx$1(Function.call, out) : out; // extend global

    if (target) redefine$3(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide$5(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global$5.core = core$1; // type bitmap

$export$5.F = 1; // forced

$export$5.G = 2; // global

$export$5.S = 4; // static

$export$5.P = 8; // proto

$export$5.B = 16; // bind

$export$5.W = 32; // wrap

$export$5.U = 64; // safe

$export$5.R = 128; // real proto method for `library`

module.exports = $export$5;

var _export$1 = /*#__PURE__*/Object.freeze({

});

// 7.1.4 ToInteger
var ceil$1 = Math.ceil;
var floor$1 = Math.floor;

var _toInteger$1 = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor$1 : ceil$1)(it);
};

// 7.1.15 ToLength


var min = Math.min;

var _toLength = function (it) {
  return it > 0 ? min(_toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

var _toAbsoluteIndex = function (index, length) {
  index = _toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes






var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

var $includes = _arrayIncludes(true);

_export$1(_export$1.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_addToUnscopables('includes');

// helper for String#{startsWith, endsWith, includes}




var _stringContext = function (that, searchString, NAME) {
  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(_defined$1(that));
};

var MATCH$1 = _wks$1('match');

var _failsIsRegexp = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

var INCLUDES = 'includes';
_export$1(_export$1.P + _export$1.F * _failsIsRegexp(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~_stringContext(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

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

var SIZE = keys$2(Size);
var Variety;

(function (Variety) {
  Variety["default"] = "default";
  Variety["flat"] = "flat";
  Variety["outline"] = "outline";
})(Variety || (Variety = {}));

var VARIETY = keys$2(Variety);
var Shape;

(function (Shape) {
  Shape["circle"] = "circle";
  Shape["round"] = "round";
  Shape["corner"] = "corner";
  Shape["square"] = "square";
})(Shape || (Shape = {}));

var SHAPE = keys$2(Shape);
var Color;

(function (Color) {
  Color["primary"] = "primary";
  Color["error"] = "error";
  Color["success"] = "success";
  Color["warning"] = "warning";
  Color["default"] = "default";
})(Color || (Color = {}));

var COLOR = keys$2(Color);
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

var FILL = keys$2(Fill);
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

var FLEX_JUSTIFY = keys$2(FlexJustify);
var FlexWrap;

(function (FlexWrap) {
  FlexWrap["normal"] = "normal";
  FlexWrap["reverse"] = "reverse";
  FlexWrap["none"] = "none";
})(FlexWrap || (FlexWrap = {}));

var FLEX_WRAP = keys$2(FlexWrap);
var FlexAlign;

(function (FlexAlign) {
  FlexAlign["start"] = "start";
  FlexAlign["center"] = "center";
  FlexAlign["end"] = "end";
  FlexAlign["stretch"] = "stretch";
})(FlexAlign || (FlexAlign = {}));

var FLEX_ALIGN = keys$2(FlexAlign);
var Align;

(function (Align) {
  Align["left"] = "left";
  Align["center"] = "center";
  Align["right"] = "right";
})(Align || (Align = {}));

var ALIGN = keys$2(Align);

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
	ALIGN: ALIGN
});

/**
 * 获取真实渲染样式尺寸
 * @param value
 * @return {string}
 */

function getStyleSize(value) {
  return typeof value !== 'number' && esHelper.isStyleUnit(value) ? value : "".concat(value, "px");
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Fill.both
}), __metadata("design:type", String)], MView.prototype, "fillHeader", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Fill.both
}), __metadata("design:type", String)], MView.prototype, "fillFooter", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "headerSize", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "footerSize", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "leftSize", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MView.prototype, "rightSize", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MView.prototype, "headerIndex", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", Number)], MView.prototype, "footerIndex", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", Number)], MView.prototype, "leftIndex", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", Number)], MView.prototype, "rightIndex", void 0);

MView = __decorate([vuePropertyDecorator.Component], MView);
var MView$1 = MView;

/* istanbul ignore next */

MView$1.install = function (Vue) {
  Vue.component(MView$1.name, MView$1);
};

var getKeys = require('./_object-keys');

var gOPS = require('./_object-gops');

var pIE = require('./_object-pie');

var toObject$1 = require('./_to-object');

var IObject = require('./_iobject');

var $assign = assign$1; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = symbol$1();

  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || keys$2($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject$1(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }

  return T;
} : $assign;

var _objectAssign = /*#__PURE__*/Object.freeze({

});

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', {
  assign: _objectAssign
});

var assign = _core.Object.assign;

var assign$1 = assign;

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

      var styles = assign$1({
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MIcon.prototype, "name", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number],
  default: Size.sm
}), __metadata("design:type", Object)], MIcon.prototype, "size", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MIcon.prototype, "color", void 0);

MIcon = __decorate([vuePropertyDecorator.Component({
  functional: true
})], MIcon);
var MIcon$1 = MIcon;

MIcon$1.install = function (Vue) {
  Vue.component(MIcon$1.name, MIcon$1);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MContainer.prototype, "id", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MContainer.prototype, "tag", void 0);

MContainer = __decorate([vuePropertyDecorator.Component({
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MRow.prototype, "id", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MRow.prototype, "tag", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MRow.prototype, "gutter", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MRow.prototype, "cols", void 0);

MRow = __decorate([vuePropertyDecorator.Component({
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MCol.prototype, "id", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MCol.prototype, "tag", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "xs", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "sm", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "md", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "lg", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "xl", void 0);

MCol = __decorate([vuePropertyDecorator.Component({
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MFlex.prototype, "id", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", String)], MFlex.prototype, "tag", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: false
}), __metadata("design:type", Boolean)], MFlex.prototype, "inline", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: FlexWrap.normal
}), __metadata("design:type", String)], MFlex.prototype, "wrap", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: FlexJustify.start
}), __metadata("design:type", String)], MFlex.prototype, "justify", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: FlexAlign.stretch
}), __metadata("design:type", String)], MFlex.prototype, "align", void 0);

MFlex = __decorate([vuePropertyDecorator.Component({
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
}(vuePropertyDecorator.Vue);

MFlexFiller = __decorate([vuePropertyDecorator.Component({
  functional: true
})], MFlexFiller);
var MFlexFiller$1 = MFlexFiller;

MContainer$1.install = function (Vue) {
  Vue.component(MContainer$1.name, MContainer$1);
};

MRow$1.install = function (Vue) {
  Vue.component(MRow$1.name, MRow$1);
};

MCol$1.install = function (Vue) {
  Vue.component(MCol$1.name, MCol$1);
};

MFlex$1.install = function (Vue) {
  Vue.component(MFlex$1.name, MFlex$1);
};

MFlexFiller$1.install = function (Vue) {
  Vue.component(MFlexFiller$1.name, MFlexFiller$1);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", Object)], colorable.prototype, "fontColor", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", Object)], colorable.prototype, "color", void 0);

colorable = __decorate([vuePropertyDecorator.Component], colorable);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], sizeable.prototype, "size", void 0);

sizeable = __decorate([vuePropertyDecorator.Component], sizeable);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  validator: function validator(value) {
    return ELEVATION.includes(value);
  }
}), __metadata("design:type", Object)], elevated.prototype, "elevation", void 0);

elevated = __decorate([vuePropertyDecorator.Component], elevated);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  validator: function validator(value) {
    return VARIETY.includes(value);
  }
}), __metadata("design:type", Object)], variable.prototype, "variety", void 0);

variable = __decorate([vuePropertyDecorator.Component], variable);
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
}(vuePropertyDecorator.Mixins(colorable$1, elevated$1, sizeable$1, variable$1));

MAppBar = __decorate([vuePropertyDecorator.Component], MAppBar);
var MAppBar$1 = MAppBar;

MAppBar$1.install = function (Vue) {
  Vue.component(MAppBar$1.name, MAppBar$1);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  validator: function validator(value) {
    return SHAPE.includes(value);
  }
}), __metadata("design:type", Object)], shapeable.prototype, "shape", void 0);

shapeable = __decorate([vuePropertyDecorator.Component], shapeable);
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
}(vuePropertyDecorator.Mixins(colorable$1, sizeable$1, elevated$1, variable$1, shapeable$1));

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MButton.prototype, "block", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MButton.prototype, "icon", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MButton.prototype, "loading", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MButton.prototype, "disabled", void 0);

__decorate([vuePropertyDecorator.Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MButton.prototype, "onClick", null);

MButton = __decorate([vuePropertyDecorator.Component({
  components: {
    MIcon: MIcon$1
  }
})], MButton);
var MButton$1 = MButton;

MButton$1.install = function (Vue) {
  Vue.component(MButton$1.name, MButton$1);
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
}(vuePropertyDecorator.Mixins(colorable$1, sizeable$1, elevated$1, variable$1, shapeable$1));

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MAvatar.prototype, "src", void 0);

__decorate([vuePropertyDecorator.Watch('src', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], MAvatar.prototype, "updateSrc", null);

MAvatar = __decorate([vuePropertyDecorator.Component], MAvatar);
var MAvatar$1 = MAvatar;

MAvatar$1.install = function (Vue) {
  Vue.component(MAvatar$1.name, MAvatar$1);
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
}(vuePropertyDecorator.Mixins(colorable$1, sizeable$1));

__decorate([vuePropertyDecorator.Prop({
  type: [Boolean, Number, String],
  default: false
}), __metadata("design:type", Object)], MRadio.prototype, "value", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [Boolean, Number, String],
  default: true
}), __metadata("design:type", Object)], MRadio.prototype, "label", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'radio_button_checked'
}), __metadata("design:type", String)], MRadio.prototype, "checkedIcon", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'radio_button_unchecked'
}), __metadata("design:type", String)], MRadio.prototype, "uncheckIcon", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MRadio.prototype, "disabled", void 0);

__decorate([vuePropertyDecorator.Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MRadio.prototype, "onInput", null);

MRadio = __decorate([vuePropertyDecorator.Component({
  components: {
    MIcon: MIcon$1
  }
})], MRadio);
var MRadio$1 = MRadio;

/* istanbul ignore next */

MRadio$1.install = function (Vue) {
  Vue.component(MRadio$1.name, MRadio$1);
};

var $export$6 = require('./_export');

var $find = require('./_array-methods')(6);

var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export$6($export$6.P + $export$6.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')(KEY);

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
}(vuePropertyDecorator.Mixins(colorable$1, sizeable$1));

__decorate([vuePropertyDecorator.Prop({
  type: [Array, Number, String, Boolean],
  default: false
}), __metadata("design:type", Object)], MCheckbox.prototype, "value", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [Array, Number, String, Boolean],
  default: true
}), __metadata("design:type", Object)], MCheckbox.prototype, "label", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'check_box'
}), __metadata("design:type", String)], MCheckbox.prototype, "checkedIcon", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'check_box_outline_blank'
}), __metadata("design:type", String)], MCheckbox.prototype, "uncheckIcon", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'indeterminate_check_box'
}), __metadata("design:type", String)], MCheckbox.prototype, "incheckIcon", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MCheckbox.prototype, "disabled", void 0);

__decorate([vuePropertyDecorator.Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MCheckbox.prototype, "onInput", null);

MCheckbox = __decorate([vuePropertyDecorator.Component({
  components: {
    MIcon: MIcon$1
  }
})], MCheckbox);
var MCheckbox$1 = MCheckbox;

MCheckbox$1.install = function (Vue) {
  Vue.component(MCheckbox$1.name, MCheckbox$1);
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
}(vuePropertyDecorator.Mixins(colorable$1, sizeable$1, elevated$1, variable$1, shapeable$1));

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MChip.prototype, "closeable", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MChip.prototype, "closeover", void 0);

__decorate([vuePropertyDecorator.Emit('close'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MChip.prototype, "onClose", null);

__decorate([vuePropertyDecorator.Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MChip.prototype, "onClick", null);

MChip = __decorate([vuePropertyDecorator.Component({
  components: {
    MAvatar: MAvatar$1,
    MIcon: MIcon$1
  }
})], MChip);
var MChip$1 = MChip;

/* istanbul ignore next */

MChip$1.install = function (Vue) {
  Vue.component(MChip$1.name, MChip$1);
};

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

var dateValueFormat;

(function (dateValueFormat) {
  dateValueFormat["timestamp"] = "timestamp";
  dateValueFormat["Date"] = "Date";
})(dateValueFormat || (dateValueFormat = {}));

var datePickerType;

(function (datePickerType) {
  datePickerType["datetime"] = "datetime";
  datePickerType["date"] = "date";
  datePickerType["year"] = "year";
  datePickerType["month"] = "month";
  datePickerType["time"] = "time";
})(datePickerType || (datePickerType = {}));

var dateValueType;

(function (dateValueType) {
  dateValueType["year"] = "year";
  dateValueType["month"] = "month";
  dateValueType["week"] = "week";
  dateValueType["date"] = "date";
  dateValueType["time"] = "time";
  dateValueType["hours"] = "hours";
  dateValueType["minutes"] = "minutes";
})(dateValueType || (dateValueType = {}));

var dateTimeValueType;

(function (dateTimeValueType) {
  dateTimeValueType["time"] = "time";
  dateTimeValueType["hours"] = "hours";
  dateTimeValueType["minutes"] = "minutes";
})(dateTimeValueType || (dateTimeValueType = {}));

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
          'm--active': activeType === datePickerType.year
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(datePickerType.year);
          }
        }
      }, [year]), h("span", {
        "staticClass": "".concat(compName$d, "__date-weekDay")
      }, [WeekMap[weekDay]])]), h("div", {
        "staticClass": "".concat(compName$d, "__date-date")
      }, [h("a", {
        "class": {
          'm--active': activeType === datePickerType.month
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(datePickerType.month);
          }
        }
      }, [(month + 1).dateZeroize()]), "-", h("a", {
        "class": {
          'm--active': activeType === datePickerType.date
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(datePickerType.date);
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
          'm--active': activeType === dateTimeValueType.hours
        },
        "on": {
          "click": function click() {
            _this2.DateStore.SET_ACTIVE_TYPE(dateTimeValueType.hours);
          }
        }
      }, [hours.dateZeroize()]), ":", h("a", {
        "class": {
          'm--active': activeType === dateTimeValueType.minutes
        },
        "on": {
          "click": function click() {
            _this2.DateStore.SET_ACTIVE_TYPE(dateTimeValueType.minutes);
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
      return pickerType !== datePickerType.month ? undefined : h("div", {
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerHeader.prototype, "color", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], MTimePickerHeader.prototype, "DateStore", void 0);

MTimePickerHeader = __decorate([vuePropertyDecorator.Component], MTimePickerHeader);
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
        Tds.push(h("td", [h(MButton$1, {
          "class": 'm-m-0 m-p-0',
          "attrs": {
            "size": 'sm',
            "shape": Shape.circle,
            "elevation": 0,
            "variety": isCurDate ? Variety.default : isToday ? Variety.outline : Variety.flat,
            "color": isCurDate || isToday ? Color.primary : Color.default
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
          handleMonthToggle = this.handleMonthToggle,
          RTableHead = this.RTableHead,
          RTableBody = this.RTableBody;
      return h("div", {
        "staticClass": compName$e
      }, [h("div", {
        "class": "".concat(compName$e, "__header")
      }, [h("div", {
        "staticClass": "".concat(compName$e, "__header-year")
      }, [h(MButton$1, {
        "attrs": {
          "variety": Variety.flat,
          "color": Color.default,
          "elevation": 0
        },
        "staticClass": 'm-m-0',
        "on": {
          "click": function click() {
            return _this2.DateStore.SET_ACTIVE_TYPE(datePickerType.year);
          }
        }
      }, [viewYear])]), h("div", {
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerPanelDate.prototype, "type", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "min", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "max", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "firstDayOfWeek", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], MTimePickerPanelDate.prototype, "DateStore", void 0);

__decorate([vuePropertyDecorator.Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number, Number]), __metadata("design:returntype", void 0)], MTimePickerPanelDate.prototype, "handleDateClick", null);

MTimePickerPanelDate = __decorate([vuePropertyDecorator.Component({
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
      this.DateStore.UPDATE(year, dateValueType.year);
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
        Cols.push(h(MButton$1, {
          "attrs": {
            "size": "sm",
            "shape": Shape.circle,
            "elevation": 0,
            "variety": isCurrent ? Variety.default : Variety.flat,
            "color": isCurrent ? Color.primary : Color.default
          },
          "class": "m-m-0 m-p-0",
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerPanelYear.prototype, "type", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 2100
}), __metadata("design:type", Number)], MTimePickerPanelYear.prototype, "max", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 1900
}), __metadata("design:type", Number)], MTimePickerPanelYear.prototype, "min", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], MTimePickerPanelYear.prototype, "DateStore", void 0);

__decorate([vuePropertyDecorator.Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", void 0)], MTimePickerPanelYear.prototype, "onClick", null);

MTimePickerPanelYear = __decorate([vuePropertyDecorator.Component({
  components: {
    MButton: MButton$1
  }
})], MTimePickerPanelYear);
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
      this.DateStore.UPDATE(month, dateValueType.month);
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
        Cols.push(h(MButton$1, {
          "attrs": {
            "size": "sm",
            "shape": Shape.circle,
            "elevation": 0,
            "variety": isCurrent ? Variety.default : Variety.flat,
            "color": isCurrent ? Color.primary : Color.default
          },
          "class": "m-m-0 m-p-0",
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerPanelMonth.prototype, "type", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Array
}), __metadata("design:type", Number)], MTimePickerPanelMonth.prototype, "disabledValue", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], MTimePickerPanelMonth.prototype, "DateStore", void 0);

__decorate([vuePropertyDecorator.Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", void 0)], MTimePickerPanelMonth.prototype, "handleClick", null);

MTimePickerPanelMonth = __decorate([vuePropertyDecorator.Component({
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
      this.DateStore.UPDATE(type === dateTimeValueType.hours && this.DateStore.ampm && !this.DateStore.am ? val + 12 : val, type);
    }
  }, {
    key: "RList",
    value: function RList(type) {
      var h = this.$createElement;
      var onClick = this.onClick,
          hourStep = this.hourStep,
          minuteStep = this.minuteStep;
      var ampm = this.DateStore.ampm;
      var min = 0;
      var max = type === dateTimeValueType.hours ? ampm ? 11 : 23 : 59;
      var step = type === dateTimeValueType.hours ? hourStep : minuteStep;
      var time = this.DateStore[type];
      var Temps = [];

      var _loop = function _loop(tempTime) {
        var isCurrent = tempTime === time;
        Temps.push(h(MButton$1, {
          "on": {
            "click": function click() {
              return onClick(tempTime, type);
            }
          },
          "attrs": {
            "size": "sm",
            "block": true,
            "shape": Shape.circle,
            "elevation": 0,
            "variety": isCurrent ? Variety.default : Variety.flat,
            "color": isCurrent ? Color.primary : Color.default
          },
          "class": "m-m-0 m-p-0 m--block"
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
      Result.push(RList(dateTimeValueType.hours));
      Result.push(RList(dateTimeValueType.minutes));
      return h("div", {
        "staticClass": compName$h
      }, [Result]);
    }
  }]);

  return MTimePickerPanelTime;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerPanelTime.prototype, "type", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePickerPanelTime.prototype, "hourStep", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePickerPanelTime.prototype, "minuteStep", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], MTimePickerPanelTime.prototype, "DateStore", void 0);

__decorate([vuePropertyDecorator.Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number, String]), __metadata("design:returntype", void 0)], MTimePickerPanelTime.prototype, "onClick", null);

MTimePickerPanelTime = __decorate([vuePropertyDecorator.Component({
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
          "color": Color.primary
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerHandler.prototype, "color", void 0);

__decorate([vuePropertyDecorator.Emit('confirm'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePickerHandler.prototype, "onConfirm", null);

__decorate([vuePropertyDecorator.Emit('cancel'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePickerHandler.prototype, "onCancel", null);

MTimePickerHandler = __decorate([vuePropertyDecorator.Component({
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
      activeType: datePickerType.date,
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
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dateValueType.date;
        var self = _this.DateStore;
        var result = new Date(self.value);

        if (type === dateValueType.year) {
          result.setFullYear(val);
          self.value = result.getTime();
        } else if (type === dateValueType.month) {
          result.setMonth(val);
          self.value = result.getTime();
        } else if (type === dateValueType.hours) {
          result.setHours(val);
          self.value = result.getTime();
        } else if (type === dateValueType.minutes) {
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
    value: function onInput(val) {} // 输入适配

  }, {
    key: "valueAdaptI",
    value: function valueAdaptI(val) {
      var result = 0;

      if (this.valueFormat === dateValueFormat.timestamp) {
        result = typeof val === 'string' ? Number(val) : val;
      } else if (this.valueFormat === dateValueFormat.Date) {
        result = val.getTime();
      }

      return result;
    } // 输出适配

  }, {
    key: "valueAdaptO",
    value: function valueAdaptO(val) {
      var result = null;

      if (this.valueFormat === dateValueFormat.timestamp) {
        result = val;
      } else if (this.valueFormat === dateValueFormat.Date) {
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
        case datePickerType.datetime:
          this.DateStore.SET_ACTIVE_TYPE(dateValueType.date);
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
      var color = this.color,
          firstDayOfWeek = this.firstDayOfWeek,
          max = this.max,
          min = this.min;
      var activeType = this.DateStore.activeType;

      switch (activeType) {
        case datePickerType.date:
          return h(MTimePickerPanelDate$1, {
            "attrs": {
              "max": max,
              "min": min,
              "color": color,
              "firstDayOfWeek": firstDayOfWeek
            }
          });

        case datePickerType.year:
          return h(MTimePickerPanelYear$1, {
            "attrs": {
              "max": max,
              "min": min
            },
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(datePickerType.date);
              }
            }
          });

        case datePickerType.month:
          return h(MTimePickerPanelMonth$1, {
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(datePickerType.date);
              }
            }
          });

        default:
          return h(MTimePickerPanelTime$1, {
            "attrs": {
              "color": color
            },
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(datePickerType.date);
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
          onCancel = this.onCancel;
      return !confirmation ? undefined : h(MTimePickerHandler$1, {
        "on": {
          "confirm": onConfirm,
          "cancel": onCancel
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var classes = this.classes,
          color = this.color,
          RPanel = this.RPanel,
          RHandler = this.RHandler;
      var pickerType = this.DateStore.pickerType;
      return h("div", {
        "staticClass": "".concat(compName$j, " m--").concat(pickerType),
        "class": classes
      }, [h("div", {
        "staticClass": "".concat(compName$j, "__main")
      }, [h(MTimePickerHeader$1, {
        "attrs": {
          "color": color
        }
      }), h("div", {
        "staticClass": "".concat(compName$j, "-panel")
      }, [RPanel()])]), RHandler()]);
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
}(vuePropertyDecorator.Mixins(colorable$1, elevated$1));

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "landscope", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "desync", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [Date, Number, String],
  default: new Date().getTime()
}), __metadata("design:type", Object)], MTimePicker.prototype, "value", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: dateValueFormat.timestamp
}), __metadata("design:type", String)], MTimePicker.prototype, "valueFormat", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "ampm", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePicker.prototype, "hourStep", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePicker.prototype, "minuteStep", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [Date, Number, String],
  default: 2100
}), __metadata("design:type", Object)], MTimePicker.prototype, "max", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [Date, Number, String],
  default: 1900
}), __metadata("design:type", Object)], MTimePicker.prototype, "min", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], MTimePicker.prototype, "firstDayOfWeek", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: datePickerType.date
}), __metadata("design:type", String)], MTimePicker.prototype, "pickerType", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "confirmation", void 0);

__decorate([vuePropertyDecorator.Emit('confirm'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onConfirm", null);

__decorate([vuePropertyDecorator.Emit('cancel'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onCancel", null);

__decorate([vuePropertyDecorator.Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onInput", null);

__decorate([vuePropertyDecorator.Watch('value', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onValueUpdate", null);

__decorate([vuePropertyDecorator.Watch('ampm', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onAMPMUpdate", null);

__decorate([vuePropertyDecorator.Watch('pickerType', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onPickerTypeChange", null);

__decorate([vuePropertyDecorator.Provide(), __metadata("design:type", Object)], MTimePicker.prototype, "DateStore", void 0);

MTimePicker = __decorate([vuePropertyDecorator.Component({
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
  Vue.component(MTimePicker$1.name, MTimePicker$1);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MList.prototype, "size", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", String)], MList.prototype, "mode", void 0);

__decorate([vuePropertyDecorator.Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MList.prototype, "onClick", null);

MList = __decorate([vuePropertyDecorator.Component], MList);
var MList$1 = MList;

/* istanbul ignore next */

MList$1.install = function (Vue) {
  Vue.component(MList$1.name, MList$1);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], TableHead.prototype, "size", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], TableHead.prototype, "select", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], TableHead.prototype, "sortable", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Function
}), __metadata("design:type", Function)], TableHead.prototype, "sort", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], TableHead.prototype, "TableCols", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], TableHead.prototype, "TableStore", void 0);

TableHead = __decorate([vuePropertyDecorator.Component({
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
}(vuePropertyDecorator.Vue);

MTransitionExpansion = __decorate([vuePropertyDecorator.Component({
  functional: true
})], MTransitionExpansion);
var MTransitionExpansion$1 = MTransitionExpansion;

/* istanbul ignore next */

MTransitionExpansion$1.install = function (Vue) {
  Vue.component(MTransitionExpansion$1.name, MTransitionExpansion$1);
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "height", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "border", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "noHeader", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "size", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "rowSelect", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "rowExpand", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "select", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "expand", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Array)], TableBody.prototype, "TableCols", void 0);

__decorate([vuePropertyDecorator.Inject(), __metadata("design:type", Object)], TableBody.prototype, "TableStore", void 0);

__decorate([vuePropertyDecorator.Watch('noHeader'), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], TableBody.prototype, "noHeaderToggle", null);

TableBody = __decorate([vuePropertyDecorator.Component({
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
      this.TableStore.Selected = esHelper.deepCopy(val);
    }
  }, {
    key: "handleExpandedUpdate",
    value: function handleExpandedUpdate(val) {
      this.TableStore.Expanded = esHelper.deepCopy(val);
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
      var temp = esHelper.deepCopy(val);

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
}(vuePropertyDecorator.Mixins(sizeable$1, elevated$1));

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], MTable.prototype, "height", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "border", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Array)], MTable.prototype, "data", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: SELF_KEY
}), __metadata("design:type", String)], MTable.prototype, "keyField", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: typeHeader.normal,
  validator: function validator(value) {
    return typeHeader.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "header", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: typeHover.none,
  validator: function validator(value) {
    return typeHover.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "hover", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "rowSelect", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: typeSelect.none,
  validator: function validator(value) {
    return typeSelect.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "select", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [Array, String, Number],
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "selected", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "noSelect", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "rowExpand", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: typeSelect.none,
  validator: function validator(value) {
    return typeSelect.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "expand", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [Array, String, Number],
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "expanded", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "noExpand", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Function
}), __metadata("design:type", Function)], MTable.prototype, "filter", void 0);

__decorate([vuePropertyDecorator.Emit('expand'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onExpand", null);

__decorate([vuePropertyDecorator.Emit('expandAll'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onExpandAll", null);

__decorate([vuePropertyDecorator.Emit('select'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onSelect", null);

__decorate([vuePropertyDecorator.Emit('selectAll'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onSelectAll", null);

__decorate([vuePropertyDecorator.Emit('rowClick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onRowClick", null);

__decorate([vuePropertyDecorator.Emit('rowDblclick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onRowDblclick", null);

__decorate([vuePropertyDecorator.Watch('data', {
  immediate: true,
  deep: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Array]), __metadata("design:returntype", void 0)], MTable.prototype, "handleDataUpdate", null);

__decorate([vuePropertyDecorator.Watch('selected', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "handleSelectedUpdate", null);

__decorate([vuePropertyDecorator.Watch('expanded', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "handleExpandedUpdate", null);

__decorate([vuePropertyDecorator.Emit('update:selected'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "syncSelected", null);

__decorate([vuePropertyDecorator.Emit('update:expanded'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "syncExpanded", null);

__decorate([vuePropertyDecorator.Provide(), __metadata("design:type", Object)], MTable.prototype, "TableStore", void 0);

__decorate([vuePropertyDecorator.Provide(), __metadata("design:type", Array), __metadata("design:paramtypes", [])], MTable.prototype, "TableCols", null);

MTable = __decorate([vuePropertyDecorator.Component({
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
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: 'normal'
}), __metadata("design:type", String)], MTableCol.prototype, "type", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MTableCol.prototype, "title", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: [String, Number],
  default: 'auto'
}), __metadata("design:type", String)], MTableCol.prototype, "width", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String
}), __metadata("design:type", String)], MTableCol.prototype, "field", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Align.center
}), __metadata("design:type", String)], MTableCol.prototype, "align", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTableCol.prototype, "color", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Function
}), __metadata("design:type", Function)], MTableCol.prototype, "sort", void 0);

__decorate([vuePropertyDecorator.Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTableCol.prototype, "sortable", void 0);

MTableCol = __decorate([vuePropertyDecorator.Component], MTableCol);
var MTableCol$1 = MTableCol;

/* istanbul ignore next */

MTable$1.install = function (Vue) {
  Vue.component(MTable$1.name, MTable$1);
};

MTableCol$1.install = function (Vue) {
  Vue.component(MTableCol$1.name, MTableCol$1);
};

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
	MTableCol: MTableCol$1,
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

var Megmore = {
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    this.installed = true; // 注册组件

    var componentsList = opts.components || components;
    console.log(componentsList);

    values$1(componentsList).forEach(function (component) {
      console.log(component);
      Vue.use(component);
    }); // const $Megmore = {
    //   cons
    // }
    // 挂载根组件


    window.Megmore = this; // console.log(Vue)
    // console.log(this)
  },
  version: '1.0.0',
  constant: constant
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Megmore);
}

exports.MApp = MApp$1;
exports.MAppBar = MAppBar$1;
exports.MAvatar = MAvatar$1;
exports.MButton = MButton$1;
exports.MCheckbox = MCheckbox$1;
exports.MChip = MChip$1;
exports.MCol = MCol$1;
exports.MContainer = MContainer$1;
exports.MFlex = MFlex$1;
exports.MFlexFiller = MFlexFiller$1;
exports.MIcon = MIcon$1;
exports.MList = MList$1;
exports.MRadio = MRadio$1;
exports.MRipple = MRipple;
exports.MRow = MRow$1;
exports.MTable = MTable$1;
exports.MTableCol = MTableCol$1;
exports.MTimePicker = MTimePicker$1;
exports.MView = MView$1;
exports.default = Megmore;
