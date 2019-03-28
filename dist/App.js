(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["App"] = factory();
	else
		root["App"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SheetHelper = void 0;

var _findIndex = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(5);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
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
/**
 * Provide more convient work with specified sheet
 */
// eslint-disable-next-line


var SheetHelper =
/*#__PURE__*/
function () {
  function SheetHelper() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SheetHelper);

    var sheetName = options.sheetName,
        numHeaders = options.numHeaders,
        fields = options.fields;
    this.sheetName = sheetName || 'Sheet 1';
    this.numHeaders = numHeaders || 0;

    if (typeof fields === 'string') {
      this.fields = fields.split(',').map(function (f) {
        return f.trim();
      });
    } else if (fields instanceof Array) {
      this.fields = fields;
    } else {
      this.fields = ['A'];
    } // prefill default header


    var headers = new Array(this.numHeaders).fill('');
    this.headerValues = headers.map(function () {
      return new Array(_this.fields.length).fill('');
    });
    this.dataValues = [];
  }
  /**
   * @returns first data row number after headers
   */


  _createClass(SheetHelper, [{
    key: "toRowData",
    value: function toRowData(values) {
      var _this2 = this;

      var fn = function fn(acc, value, index) {
        var field = _this2.getField(index);

        if (!field) {
          return acc;
        }

        return _objectSpread({}, acc, _defineProperty({}, field, value));
      };

      return values.reduce(fn, {});
    }
    /**
     * Convert rowData object to array of row values
     * @return Array
     * @param {Object} rowData index of row, started from 1
     */

  }, {
    key: "toRowValues",
    value: function toRowValues(rowData) {
      var fn = function fn(acc, field) {
        var value = rowData[field];

        if (value === undefined) {
          return [].concat(_toConsumableArray(acc), ['']);
        }

        return [].concat(_toConsumableArray(acc), [value]);
      };

      return this.fields.reduce(fn, []);
    }
    /**
     * Convert array of array of values to array of row object.
     * Each row contains the row index rowId started from 1.
     * @param {array} values array of row's arrays
     * @returns array of row objects
     */

  }, {
    key: "toRowDataColl",
    value: function toRowDataColl(values) {
      this.headerValues = values.slice(0, this.numHeaders);
      this.dataValues = values.slice(this.numHeaders);
      var dataColl = [];
      var valuesCount = this.dataValues.length;
      var fieldsCount = this.fields.length;

      for (var i = 0; i < valuesCount; i++) {
        // eslint-disable-line no-plusplus
        var rowData = {};

        for (var j = 0; j < fieldsCount; j++) {
          // eslint-disable-line no-plusplus
          var field = this.getField(j);
          rowData[field] = this.dataValues[i][j];
        }

        rowData.rowId = i + 1 + this.numHeaders;
        dataColl.push(rowData);
      }

      this.dataColl = dataColl;
      return this.dataColl;
    }
  }, {
    key: "toRowValuesColl",
    value: function toRowValuesColl(dataColl) {
      var headerValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.headerValues; // this.dataColl = _.cloneDeep(dataColl);
      // this.headerValues = _.cloneDeep(headerValues);

      this.dataColl = this.clone(dataColl);
      this.headerValues = this.clone(headerValues);
      var dataCollCount = dataColl.length;
      var fieldsCount = this.fields.length;
      var dataValues = [];

      for (var i = 0; i < dataCollCount; i++) {
        // eslint-disable-line no-plusplus
        var rowData = dataColl[i];
        var rowValues = [];

        for (var j = 0; j < fieldsCount; j++) {
          // eslint-disable-line no-plusplus
          var field = this.getField(j);
          var value = rowData[field];

          if (value === undefined) {
            rowValues.push('');
          }

          rowValues.push(value);
        }

        dataValues.push(rowValues);
      }

      this.dataValues = dataValues;
      return [].concat(_toConsumableArray(this.headerValues), _toConsumableArray(this.dataValues));
    }
    /**
     * find column id by name
     * @return index of column started from 1
     * @param {String} field FieldName
     */

  }, {
    key: "findColumnId",
    value: function findColumnId(field) {
      var index = (0, _findIndex['default'])(this.fields, function (v) {
        return v === field;
      });
      var column = index + 1;

      if (index < 0) {
        return;
      } // eslint-disable-next-line consistent-return


      return column;
    }
    /**
     * get field name by index
     * @param {*} index index in array
     */

  }, {
    key: "getField",
    value: function getField(index) {
      return this.fields[index];
    }
    /**
     * Update specified row with rowData object.
     * rowData object can consist part of whole row data
     * and only this part be updated
     * @return {Array} new row values
     * @param {Array} values old row values
     * @param {Object} dataToUpdate rowData object
     */

  }, {
    key: "updateRow",
    value: function updateRow(values, dataToUpdate) {
      var getField = this.getField;
      var newValues = values.reduce(function (acc, value, index) {
        // get field by index
        var field = getField(index); // get field by index

        var newValue = dataToUpdate[field];

        if (newValue === undefined) {
          return [].concat(_toConsumableArray(acc), [value]);
        }

        return [].concat(_toConsumableArray(acc), [newValue]);
      }, []);
      return newValues;
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "blockBuilder",
    value: function blockBuilder(acc, _ref) {
      var rowId = _ref.rowId;

      var _acc = _toArray(acc),
          first = _acc[0],
          rest = _acc.slice(1); // init acc


      if (!first) {
        return [{
          rowId: rowId,
          count: 1
        }];
      } // if current rowId is sequence - modify count of first element


      var count = first.count;

      if (first.rowId + count === rowId) {
        return [{
          rowId: first.rowId,
          count: count + 1
        }].concat(_toConsumableArray(rest));
      } // sequence break - add new element


      return [{
        rowId: rowId,
        count: 1
      }, first].concat(_toConsumableArray(rest));
    }
    /**
     * @returns a list in which rowId is first row in sequence
     * and count is the number of lines that are not interrupted by the predicate are
     * specified. Rows that match the predicate are not included in any block.
     * @param {*} data
     * @param {Function} predicate
     */

  }, {
    key: "getBlocks",
    value: function getBlocks(data, predicate) {
      var filtered = data.filter(predicate);
      var blocks = filtered.reduce(this.blockBuilder, []);
      return blocks;
    }
  }, {
    key: "clone",
    value: function clone(objectToBeCloned) {
      // Basis.
      if (!(objectToBeCloned instanceof Object)) {
        return objectToBeCloned;
      }

      var objectClone; // Filter out special objects.

      var Constructor = objectToBeCloned.constructor;

      switch (Constructor) {
        // Implement other special objects here.
        case RegExp:
          objectClone = new Constructor(objectToBeCloned);
          break;

        case Date:
          objectClone = new Constructor(objectToBeCloned.getTime());
          break;

        default:
          objectClone = new Constructor();
      } // Clone each property.


      for (var prop in objectToBeCloned) {
        objectClone[prop] = this.clone(objectToBeCloned[prop]);
      } // eslint-disable-line


      return objectClone;
    }
  }, {
    key: "firstRow",
    get: function get() {
      return this.numHeaders + 1;
    }
  }]);

  return SheetHelper;
}();

exports.SheetHelper = SheetHelper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(2),
    baseIteratee = __webpack_require__(3),
    toInteger = __webpack_require__(4);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */

if (!Array.prototype.fill) {
  Array.prototype.fill = function (value) {
    // Шаги 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this); // Шаги 3-5.

    var len = O.length >>> 0; // Шаги 6-7.

    var start = arguments[1];
    var relativeStart = start >> 0; // Шаг 8.

    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Шаги 9-10.

    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Шаг 11.

    var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Шаг 12.

    while (k < final) {
      O[k] = value;
      k++;
    } // Шаг 13.


    return O;
  };
}

;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../sheet-helper/dist/SheetHelper.js
var SheetHelper = __webpack_require__(0);

// CONCATENATED MODULE: ../sheet-wrapper/src/SheetWrapper.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Provide more convient work with specified sheet
 * TODO:
 * 1. Write tests
 * 2. method updateSheet() maybe isn't work as expected
 */
// eslint-disable-next-line import/prefer-default-export

var SheetWrapper =
/*#__PURE__*/
function (_SheetHelper) {
  _inherits(SheetWrapper, _SheetHelper);

  function SheetWrapper(options) {
    var _this;

    _classCallCheck(this, SheetWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SheetWrapper).call(this, options));
    _this.memo = {
      values: undefined,
      dataColl: undefined
    };
    return _this;
  } // eslint-disable-next-line class-methods-use-this


  _createClass(SheetWrapper, [{
    key: "reset",

    /**
     * Next calling this.sheetData get data directly from sheet
     */
    value: function reset() {
      this.memo = {
        values: undefined,
        dataColl: undefined
      };
    }
    /**
     * @returns range object
     * @param {Number} rowId index of row started from 1
     */

  }, {
    key: "getRowRange",
    value: function getRowRange(rowId) {
      var sheet = this.sheet,
          fields = this.fields;
      var numColumns = fields.length;
      return sheet.getRange(rowId, 1, 1, numColumns);
    }
    /**
     * Inject rowId to returned object
     * @returns rowData object
     * @param {Number} rowId index of row, started from 1
     */

  }, {
    key: "getRowData",
    value: function getRowData(rowId) {
      var range = this.getRowRange(rowId);

      var _range$getValues = range.getValues(),
          _range$getValues2 = _slicedToArray(_range$getValues, 1),
          rowValues = _range$getValues2[0];

      var data = _get(_getPrototypeOf(SheetWrapper.prototype), "toRowData", this).call(this, rowValues);

      return _objectSpread({}, data, {
        rowId: rowId
      });
    }
    /**
     * @returns index of row with selected cell
     */

  }, {
    key: "getSelectedRow",
    value: function getSelectedRow() {
      return this.sheet.getActiveCell().getRowIndex();
    }
    /**
     * Insert row between header rows and first data row.
     * (universal method - both for rowData object or array)
     */

  }, {
    key: "insertRow",
    value: function insertRow(data) {
      this.sheet.insertRowBefore(this.firstRow);
      this.resetSheetDataCache();
      this.updateRow(this.firstRow, data);
      return this.firstRow;
    }
    /**
     * Apend row to end of table.
     * (universal method - both for rowData object or array)
     * @param {any} data rowData object or Array of row values
     */

  }, {
    key: "appendRow",
    value: function appendRow(data) {
      if (data instanceof Array) {
        return this.appendRowArr(data);
      }

      if (data instanceof Object) {
        return this.appendRowObj(data);
      }

      return null;
    }
    /**
     * Append row to end of table - array version
     * @param {Array} values
     */

  }, {
    key: "appendRowArr",
    value: function appendRowArr(values) {
      var rowId = this.sheet.appendRow(values);
      this.reset();
      return rowId;
    }
    /**
     * Append row to end of table - rowData version
     * @param {Object} rowData
     */

  }, {
    key: "appendRowObj",
    value: function appendRowObj(rowData) {
      var values = _get(_getPrototypeOf(SheetWrapper.prototype), "toRowValues", this).call(this, rowData);

      var rowId = this.sheet.appendRow(values);
      this.reset();
      return rowId;
    }
    /**
     * Update specified row.
     * (universal method - both for rowData object or array)
     * In case rowData object - you can use part of whole row data
     * and only this part be updated
     * @param {Number} rowId index of row, started from 1
     * @param {any} data rowData or array of row values
     */

  }, {
    key: "updateRow",
    value: function updateRow(rowId, data) {
      if (data instanceof Object) {
        return this.updateRowObj(rowId, data);
      }

      if (data instanceof Array) {
        return this.updateRowArr(rowId, data);
      }

      return null;
    }
    /**
     * Update specified row with array of values.
     * @param {Number} rowId index of row, started from 1
     * @param {Array} values list of values
     */

  }, {
    key: "updateRowArr",
    value: function updateRowArr(rowId, values) {
      var range = this.sheet.getRange(rowId, 1, 1, values.length);
      range.setFontWeight(null);
      range.setValues([values]);
      return range;
    }
    /**
     * Update specified row with rowData object.
     * rowData object can consist part of whole row data
     * and only this part be updated
     * @param {Number} rowId index of row, started from 1
     * @param {Object} rowData rowData object
     */

  }, {
    key: "updateRowObj",
    value: function updateRowObj(rowId, rowData) {
      var _this2 = this;

      var numColumns = this.fields.length;
      var range = this.sheet.getRange(rowId, 1, 1, numColumns);
      var fields = Object.keys(rowData); // update by each field

      fields.forEach(function (field) {
        var column = _get(_getPrototypeOf(SheetWrapper.prototype), "findColumnId", _this2).call(_this2, field);

        if (column <= 0) {
          return;
        }

        range.getCell(1, column).setValue(rowData[field]);
      });
      return range;
    }
    /**
     * Clear sheet but leave headers
     */

  }, {
    key: "clearSheet",
    value: function clearSheet() {
      var sheet = this.sheet;
      var row = this.numHeaders + 1;
      var column = 1;
      var numRows = sheet.getLastRow() - row + 1;

      if (numRows < 1) {
        return;
      }

      var numColumns = this.fields.length;
      sheet.getRange(row, column, numRows, numColumns).clearContent();
      this.reset();
    }
  }, {
    key: "updateSheet",

    /**
     * Update all sheet except header rows
     * @param {Array} rowDataColl array of rowData objects
     */
    value: function updateSheet(rowDataColl) {
      var headerValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.headerValues;

      var values = _get(_getPrototypeOf(SheetWrapper.prototype), "toRowValuesColl", this).call(this, rowDataColl, headerValues); // update sheet


      var row = 1;
      var column = 1;
      var numColumns = this.fields.length;
      var numRows = values.length;
      this.sheet.getDataRange().clearContent();
      this.sheet.getRange(row, column, numRows, numColumns).setValues(values);
      this.memo.dataColl = _get(_getPrototypeOf(SheetWrapper.prototype), "clone", this).call(this, rowDataColl);
      this.memo.values = _get(_getPrototypeOf(SheetWrapper.prototype), "clone", this).call(this, values); // eslint-disable-next-line no-undef

      SpreadsheetApp.flush();
    }
    /**
     * Hide rows filtered by predicate function
     * @param {Function} predicate
     */

  }, {
    key: "hide",
    value: function hide(predicate) {
      var _this3 = this;

      this.spreadsheet.toast('Start hiding');

      var blocks = _get(_getPrototypeOf(SheetWrapper.prototype), "getBlocks", this).call(this, this.dataColl, predicate);

      blocks.forEach(function (_ref) {
        var rowId = _ref.rowId,
            count = _ref.count;
        return _this3.sheet.hideRows(rowId, count);
      });
    }
    /**
     * Show rows filtered by predicate function
     * @param {Function} predicate
     */

  }, {
    key: "show",
    value: function show(predicate) {
      var _this4 = this;

      this.spreadsheet.getActiveSpreadsheet().toast('Start showing');

      var blocks = _get(_getPrototypeOf(SheetWrapper.prototype), "getBlocks", this).call(this, this.dataColl, predicate);

      blocks.forEach(function (_ref2) {
        var rowId = _ref2.rowId,
            count = _ref2.count;
        return _this4.sheet.showRows(rowId, count);
      });
    }
    /** Show all hidden rows */

  }, {
    key: "showAll",
    value: function showAll() {
      var length = this.sheet.getLastRow() - this.firstRow;
      this.sheet.showRows(this.firstRow, length);
    }
  }, {
    key: "spreadsheet",
    get: function get() {
      // eslint-disable-next-line no-undef
      return SpreadsheetApp.getActiveSpreadsheet();
    }
  }, {
    key: "sheet",
    get: function get() {
      return this.spreadsheet.getSheetByName(this.sheetName);
    }
  }, {
    key: "values",
    get: function get() {
      if (this.memo.values === undefined) {
        this.memo.values = this.sheet.getDataRange().getValues();
      }

      return this.memo.values;
    }
    /**
     * Get all sheet values, convert to collection of rowData objects
     * @returns array of rowData objects
     */

  }, {
    key: "dataColl",
    get: function get() {
      if (this.memo.dataColl === undefined) {
        this.memo.dataColl = this.toRowDataColl(this.values);
      }

      return this.memo.dataColl;
    }
  }, {
    key: "headerValues",
    get: function get() {
      return this.values.slice(0, this.numHeaders);
    }
  }]);

  return SheetWrapper;
}(SheetHelper["SheetHelper"]);
// CONCATENATED MODULE: ./src/Acceptance.js
function Acceptance_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Acceptance_typeof = function _typeof(obj) { return typeof obj; }; } else { Acceptance_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Acceptance_typeof(obj); }

function Acceptance_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Acceptance_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Acceptance_createClass(Constructor, protoProps, staticProps) { if (protoProps) Acceptance_defineProperties(Constructor.prototype, protoProps); if (staticProps) Acceptance_defineProperties(Constructor, staticProps); return Constructor; }

function Acceptance_possibleConstructorReturn(self, call) { if (call && (Acceptance_typeof(call) === "object" || typeof call === "function")) { return call; } return Acceptance_assertThisInitialized(self); }

function Acceptance_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Acceptance_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { Acceptance_get = Reflect.get; } else { Acceptance_get = function _get(target, property, receiver) { var base = Acceptance_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return Acceptance_get(target, property, receiver || target); }

function Acceptance_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = Acceptance_getPrototypeOf(object); if (object === null) break; } return object; }

function Acceptance_getPrototypeOf(o) { Acceptance_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Acceptance_getPrototypeOf(o); }

function Acceptance_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Acceptance_setPrototypeOf(subClass, superClass); }

function Acceptance_setPrototypeOf(o, p) { Acceptance_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Acceptance_setPrototypeOf(o, p); }



var Acceptance =
/*#__PURE__*/
function (_SheetWrapper) {
  Acceptance_inherits(Acceptance, _SheetWrapper);

  function Acceptance() {
    var _this;

    Acceptance_classCallCheck(this, Acceptance);

    _this = Acceptance_possibleConstructorReturn(this, Acceptance_getPrototypeOf(Acceptance).call(this, {
      sheetName: 'Цех пластика',
      numHeaders: 1,
      fields: ['orderId', 'partName', 'model', 'color', 'issueDate', 'sentToProductionStatus', 'sendLinkToPhoto', 'sentToProductionDate', 'acceptedStatus', 'acceptedDate', 'readyStatus', 'readyDate', 'returnStatus', 'returnLinkToPhoto', 'returnDate', 'reward', 'cost', 'penalty', 'commentPlastic']
    }));
    _this.url = 'https://docs.google.com/spreadsheets/d/10jo0P_nyUju2mjgydSo1PVXcAQc1DkZQjs9K8-47W2Q/edit#gid=1674658446';
    return _this;
  }

  Acceptance_createClass(Acceptance, [{
    key: "extractAll",
    value: function extractAll() {
      var _this2 = this;

      var values = this.values,
          formulas = this.formulas,
          notes = this.notes;
      return values.map(function (rowValues, index) {
        return {
          valuesObj: Acceptance_get(Acceptance_getPrototypeOf(Acceptance.prototype), "toRowData", _this2).call(_this2, rowValues),
          formulasObj: Acceptance_get(Acceptance_getPrototypeOf(Acceptance.prototype), "toRowData", _this2).call(_this2, formulas[index]),
          notesObj: Acceptance_get(Acceptance_getPrototypeOf(Acceptance.prototype), "toRowData", _this2).call(_this2, notes[index])
        };
      });
    }
  }, {
    key: "spreadsheet",
    get: function get() {
      // eslint-disable-next-line no-undef
      return SpreadsheetApp.openByUrl(this.url);
    }
  }, {
    key: "formulas",
    get: function get() {
      return this.spreadsheet.getDataRange().getFormulas();
    }
  }, {
    key: "notes",
    get: function get() {
      return this.sheet.getDataRange().getNotes();
    }
  }]);

  return Acceptance;
}(SheetWrapper);


// CONCATENATED MODULE: ./src/Parts.js
function Parts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Parts_typeof = function _typeof(obj) { return typeof obj; }; } else { Parts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Parts_typeof(obj); }

function Parts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Parts_possibleConstructorReturn(self, call) { if (call && (Parts_typeof(call) === "object" || typeof call === "function")) { return call; } return Parts_assertThisInitialized(self); }

function Parts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Parts_getPrototypeOf(o) { Parts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Parts_getPrototypeOf(o); }

function Parts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Parts_setPrototypeOf(subClass, superClass); }

function Parts_setPrototypeOf(o, p) { Parts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Parts_setPrototypeOf(o, p); }



var Parts =
/*#__PURE__*/
function (_SheetWrapper) {
  Parts_inherits(Parts, _SheetWrapper);

  function Parts() {
    Parts_classCallCheck(this, Parts);

    return Parts_possibleConstructorReturn(this, Parts_getPrototypeOf(Parts).call(this, {
      sheetName: 'parts',
      fields: 'uuid, data, acceptance, plastic, roofs, bags',
      numHeaders: 1
    }));
  }

  return Parts;
}(SheetWrapper);


// CONCATENATED MODULE: ./src/App.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doImport", function() { return App_doImport; });



var isEmpty = function isEmpty(v) {
  return v === '';
};
/*
      state: {
        type: 'SEND_TO_PLASTIC',
        label: 'Отправил в работу',
        destination: {
          name: 'plastic',
          label: 'Пластик'
        },
        person: {
          account: 'andrey.autocrash@gmail.com',
          name: 'Андрей Ст.',
          department: {
            name: 'plastic',
            label: 'Пластик'
          }
        }
      }

*/


var getPartState = function getPartState(data) {
  var sentToProductionStatus = data.sentToProductionStatus,
      sentToProductionDate = data.sentToProductionDate,
      acceptedStatus = data.acceptedStatus,
      acceptedDate = data.acceptedDate,
      readyStatus = data.readyStatus,
      readyDate = data.readyDate,
      returnStatus = data.returnStatus,
      returnDate = data.returnDate;

  if (!isEmpty(returnStatus)) {
    return {
      changedAt: returnDate,
      location: {
        name: 'acceptance',
        label: 'Приемка'
      },
      status: {
        name: 'accepted',
        label: 'Получил из производства'
      },
      person: {
        account: 'andrewautocrash@gmail.com',
        name: 'Андрей Журжа',
        department: {
          name: 'acceptance',
          label: 'Приемка'
        }
      }
    };
  }

  if (!isEmpty(readyStatus)) {
    return {
      changedAt: readyDate,
      location: {
        name: 'plastic',
        label: 'Пластик'
      },
      status: {
        name: 'ready',
        label: 'Готово к отгрузке'
      },
      person: {
        account: 'andrey.autocrash@gmail.com',
        name: 'Андрей Ст.',
        department: {
          name: 'plastic',
          label: 'Пластик'
        }
      }
    };
  }

  if (!isEmpty(acceptedStatus)) {
    return {
      changedAt: acceptedDate,
      location: {
        name: 'acceptance',
        label: 'Приемка'
      },
      status: {
        name: 'send',
        label: 'Отправил в работу'
      },
      destination: {
        name: 'plastic',
        label: 'Пластик'
      },
      person: {
        account: 'andrey.autocrash@gmail.com',
        name: 'Андрей Ст.',
        department: {
          name: 'plastic',
          label: 'Пластик'
        }
      }
    };
  }

  if (!isEmpty(sentToProductionStatus)) {
    return {
      changedAt: sentToProductionDate,
      location: {
        name: 'plastic',
        label: 'Пластик'
      },
      status: {
        name: 'accepted',
        label: 'Принял в работу'
      },
      person: {
        account: 'andrey.autocrash@gmail.com',
        name: 'Андрей Ст.',
        department: {
          name: 'plastic',
          label: 'Пластик'
        }
      }
    };
  } // default


  return {
    changedAt: new Date(),
    location: {},
    status: {},
    person: {}
  };
};
/**
 * TODO:
 * - Use data from partTypes tab
 * @param {*} data rowObject data
 */


var getPartType = function getPartType(data) {
  var partName = data.partName;
  return {
    // eslint-disable-next-line no-undef
    uuid: Utilities.getUuid(),
    class: 'wheel',
    name: partName,
    label: partName,
    airbagAlias: 'wheel_coverRef'
  };
}; // eslint-disable-next-line max-len
// const regexp = /^(?:=ГИПЕРССЫЛКА\( *")(https:\/\/drive\.google\.com\/drive\/.+)(?:" *; *".+" *\))$/g;

/**
 * TODO:
 * - use right person for fill comments. Get it from ... maybe airbagCRM
 */
// eslint-disable-next-line import/prefer-default-export


var App_doImport = function doImport() {
  // const parts = new Parts();
  var acceptance = new Acceptance();
  var dataCollSpecial = acceptance.extractAll();
  var saveToParts = dataCollSpecial.map(function (_ref) {
    var valuesObj = _ref.valuesObj;
    var orderId = valuesObj.orderId,
        model = valuesObj.model,
        color = valuesObj.color,
        commentPlastic = valuesObj.commentPlastic; // eslint-disable-next-line no-undef

    var uuid = Utilities.getUuid();
    var data = {
      partType: getPartType(valuesObj),
      color: color,
      model: model,
      orderId: orderId,
      comments: [{
        type: 'plastic',
        text: commentPlastic,
        person: {
          name: 'Максим',
          account: 'autocrash.maksim@gmail.com',
          department: 'managers'
        }
      }],
      state: getPartState(valuesObj)
    };
    return {
      uuid: uuid,
      data: JSON.stringify(data),
      acceptance: '',
      plastic: '',
      roofs: '',
      bags: ''
    };
  }); // eslint-disable-next-line no-undef

  Logger.log(saveToParts[0]);
  new Parts().updateSheet(saveToParts);
};

/***/ })
/******/ ]);
});