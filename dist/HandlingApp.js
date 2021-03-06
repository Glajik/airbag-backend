(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HandlingApp"] = factory();
	else
		root["HandlingApp"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return partTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return persons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return operations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return statuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return prices; });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glajik_sheet_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ReferenceSuper =
/*#__PURE__*/
function (_SheetWrapper) {
  _inherits(ReferenceSuper, _SheetWrapper);

  function ReferenceSuper() {
    _classCallCheck(this, ReferenceSuper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReferenceSuper).apply(this, arguments));
  }

  _createClass(ReferenceSuper, [{
    key: "onEdit",
    value: function onEdit(e) {
      // event data
      var range = e.range;
      var sheet = range.getSheet();
      var sheetName = sheet.getName();
      if (sheetName !== this.sheetName) return;
      var rowId = range.getRow();
      var columnId = range.getColumn();
      var rows = range.getNumRows();
      var columns = range.getNumColumns();
      var oldValue = e.oldValue;
      var newValue = e.value; // ignore if range is edited

      var isRange = rows > 1 || columns > 1;
      if (isRange) return; // ignore if header is edited

      var isHeader = rowId <= this.numHeaders;
      if (isHeader) return;
      var isCellErased = typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue) === 'object' && newValue.oldValue && oldValue;
      var uuidColumnId = this.findColumnId('uuid');
      var isUuidColumn = uuidColumnId === columnId; // remove row

      if (isCellErased && isUuidColumn) {
        sheet.deleteRow(rowId);
        return;
      }

      if (isUuidColumn) {
        // TODO:
        // - find change uuid in all relative data
        // - maybe it's concern to any other relative data with same id
        return;
      } // append uuid, if empty


      var uuidRange = sheet.getRange(rowId, uuidColumnId);
      var uuid = uuidRange.getValue();

      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(uuid)) {
        // eslint-disable-next-line no-undef
        uuidRange.setValue(Utilities.getUuid());
      }
    }
  }]);

  return ReferenceSuper;
}(_glajik_sheet_wrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

var partTypes = new ReferenceSuper({
  sheetName: 'partTypes',
  fields: 'uuid, class, name, label, acceptanceAlias, airbagField',
  numHeaders: 1
});
var locations = new ReferenceSuper({
  sheetName: 'locations',
  fields: 'uuid, name, label',
  numHeaders: 1
});
var persons = new ReferenceSuper({
  sheetName: 'persons',
  fields: 'uuid, name, account, airbagAlias, acceptanceAlias, locationLabel',
  numHeaders: 1
});
var operations = new ReferenceSuper({
  sheetName: 'operations',
  fields: 'uuid, locationLabel, name, label',
  numHeaders: 1
});
var statuses = new ReferenceSuper({
  sheetName: 'statuses',
  fields: 'uuid, locationLabel, name, label',
  numHeaders: 1
});
var prices = new ReferenceSuper({
  sheetName: 'prices',
  fields: 'uuid, partLabel, locationLabel, operationLabel, term, cost, penalty',
  numHeaders: 1
});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(21),
    getTag = __webpack_require__(14),
    isArguments = __webpack_require__(22),
    isArray = __webpack_require__(6),
    isArrayLike = __webpack_require__(23),
    isBuffer = __webpack_require__(16),
    isPrototype = __webpack_require__(27),
    isTypedArray = __webpack_require__(17);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheetWrapper; });
/* harmony import */ var _glajik_sheet_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _glajik_sheet_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_glajik_sheet_helper__WEBPACK_IMPORTED_MODULE_0__);
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

var SheetWrapper =
/*#__PURE__*/
function (_SheetHelper) {
  _inherits(SheetWrapper, _SheetHelper);

  // eslint-disable-next-line no-useless-constructor
  function SheetWrapper(options) {
    _classCallCheck(this, SheetWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(SheetWrapper).call(this, options));
  } // eslint-disable-next-line class-methods-use-this


  _createClass(SheetWrapper, [{
    key: "getRowRange",

    /**
     * @returns range object
     * @param {Number} rowId index of row started from 1
     */
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
     * Insert row between header rows and first data row.
     * (universal method - both for rowData object or array)
     */

  }, {
    key: "insertRow",
    value: function insertRow(data) {
      this.sheet.insertRowBefore(this.firstRow);
      this.updateRow(this.firstRow, data);
      return this.firstRow;
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
      var range = this.getRowRange(rowId);
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
      var _this = this;

      var range = this.getRowRange(rowId);
      var fields = Object.keys(rowData); // update by each field

      fields.forEach(function (field) {
        var column = _get(_getPrototypeOf(SheetWrapper.prototype), "findColumnId", _this).call(_this, field);

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
    }
  }, {
    key: "updateSheet",

    /**
     * Update all sheet except header rows
     * @param {Array} rowDataColl array of rowData objects
     */
    value: function updateSheet(rowDataColl) {
      var values = _get(_getPrototypeOf(SheetWrapper.prototype), "toRowValuesColl", this).call(this, rowDataColl, this.headerValues); // update sheet


      var row = 1;
      var column = 1;
      var numColumns = this.fields.length;
      var numRows = values.length;
      this.sheet.getDataRange().clearContent();
      this.sheet.getRange(row, column, numRows, numColumns).setValues(values);
    }
    /**
     * Hide rows filtered by predicate function
     * @param {Function} predicate
     */

  }, {
    key: "hide",
    value: function hide(predicate) {
      var _this2 = this;

      this.spreadsheet.toast('Start hiding');

      var blocks = _get(_getPrototypeOf(SheetWrapper.prototype), "getBlocks", this).call(this, this.dataColl, predicate);

      blocks.forEach(function (_ref) {
        var rowId = _ref.rowId,
            count = _ref.count;
        return _this2.sheet.hideRows(rowId, count);
      });
    }
    /**
     * Show rows filtered by predicate function
     * @param {Function} predicate
     */

  }, {
    key: "show",
    value: function show(predicate) {
      var _this3 = this;

      this.spreadsheet.getActiveSpreadsheet().toast('Start showing');

      var blocks = _get(_getPrototypeOf(SheetWrapper.prototype), "getBlocks", this).call(this, this.dataColl, predicate);

      blocks.forEach(function (_ref2) {
        var rowId = _ref2.rowId,
            count = _ref2.count;
        return _this3.sheet.showRows(rowId, count);
      });
    }
    /** Show all hidden rows */

  }, {
    key: "showAll",
    value: function showAll() {
      var length = this.sheet.getLastRow() - this.firstRow;
      this.sheet.showRows(this.firstRow, length);
    }
    /**
     * find column id by name
     * @return index of column started from 1
     * @param {*} field field name
     */

  }, {
    key: "findColumnId",
    value: function findColumnId(field) {
      return _get(_getPrototypeOf(SheetWrapper.prototype), "findColumnId", this).call(this, field);
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
      var values = this.sheet.getDataRange().getValues();
      return values;
    }
    /**
     * Get all sheet values, convert to collection of rowData objects
     * @returns array of rowData objects
     */

  }, {
    key: "dataColl",
    get: function get() {
      return _get(_getPrototypeOf(SheetWrapper.prototype), "toRowDataColl", this).call(this, this.values);
    }
  }, {
    key: "headerValues",
    get: function get() {
      return this.values.slice(0, this.numHeaders);
    }
  }]);

  return SheetWrapper;
}(_glajik_sheet_helper__WEBPACK_IMPORTED_MODULE_0___default.a);



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = void 0;

var _findIndex = _interopRequireDefault(__webpack_require__(28));

var _isArray = _interopRequireDefault(__webpack_require__(7));

var _isEqual = _interopRequireDefault(__webpack_require__(32));

__webpack_require__(55);

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
    } // prefil default


    var headers = new Array(this.numHeaders).fill('');
    this.memo = {
      values: [],
      headerValues: headers.map(function () {
        return new Array(_this.fields.length).fill('');
      }),
      dataValues: [],
      rowDataColl: []
    };
  }
  /**
   * Used only for range values
   * @param {*} values Nested arrays representing range values
   */


  _createClass(SheetHelper, [{
    key: "memoize",
    value: function memoize(values) {
      if ((0, _isEqual['default'])(values, this.memo.values)) return;
      var cloned = this.clone(values);
      this.memo.values = cloned;
      this.memo.headerValues = cloned.slice(0, this.numHeaders);
      this.memo.dataValues = cloned.slice(this.numHeaders);
    }
    /**
     * @returns first data row number after headers
     */

  }, {
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
     * Convert range values to collection of rowData.
     * Each row contains the row index rowId started from 1.
     * @param {array} values range values
     * @returns array of row objects
     */

  }, {
    key: "toRowDataColl",
    value: function toRowDataColl(values) {
      // return chached result
      if ((0, _isEqual['default'])(values, this.memo.values)) return this.memo.rowDataColl;
      var dataValues = values.slice(this.numHeaders);
      var rowDataColl = [];
      var valuesCount = dataValues.length;
      var fieldsCount = this.fields.length;

      for (var i = 0; i < valuesCount; i++) {
        // eslint-disable-line no-plusplus
        var rowData = {};

        for (var j = 0; j < fieldsCount; j++) {
          // eslint-disable-line no-plusplus
          var field = this.getField(j);
          rowData[field] = dataValues[i][j];
        }

        rowData.rowId = i + 1 + this.numHeaders;
        rowDataColl.push(rowData);
      } // memoization


      this.memoize(values);
      this.memo.rowDataColl = this.clone(rowDataColl);
      return rowDataColl;
    }
    /**
     * @returns Nested arrays, which represent a rows and columns
     * @param {*} rowDataColl Collection of rowData object
     * @param {*} headerValues If present, output has this values in the top
     */

  }, {
    key: "toRowValuesColl",
    value: function toRowValuesColl(rowDataColl, headerValues) {
      var cloned = this.clone(rowDataColl);
      var dataCollCount = cloned.length;
      var fieldsCount = this.fields.length;
      var dataValues = [];

      for (var i = 0; i < dataCollCount; i++) {
        // eslint-disable-line no-plusplus
        var rowData = cloned[i];
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
      } // memoization


      this.memo.rowDataColl = cloned;
      var oldHeaderValues = this.memo.headerValues; // eslint-disable-next-line max-len

      var values = (0, _isArray['default'])(headerValues) ? [].concat(_toConsumableArray(headerValues), dataValues) : [].concat(_toConsumableArray(oldHeaderValues), dataValues);
      this.memoize(values);
      return values;
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

exports['default'] = SheetHelper;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(9);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isLength = __webpack_require__(26);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObject = __webpack_require__(25);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(29),
    baseIteratee = __webpack_require__(30),
    toInteger = __webpack_require__(31);

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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(33);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(34),
    isObjectLike = __webpack_require__(54);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(35),
    equalArrays = __webpack_require__(42),
    equalByTag = __webpack_require__(47),
    equalObjects = __webpack_require__(48),
    getTag = __webpack_require__(51),
    isArray = __webpack_require__(7),
    isBuffer = __webpack_require__(52),
    isTypedArray = __webpack_require__(53);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(36),
    listCacheDelete = __webpack_require__(37),
    listCacheGet = __webpack_require__(39),
    listCacheHas = __webpack_require__(40),
    listCacheSet = __webpack_require__(41);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(43),
    arraySome = __webpack_require__(44),
    cacheHas = __webpack_require__(45);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(7);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(46);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(49);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(50);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 55 */
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
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEdit", function() { return onEdit; });
/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
 // eslint-disable-next-line import/prefer-default-export

var onEdit = function onEdit(e) {
  [_reference__WEBPACK_IMPORTED_MODULE_0__[/* partTypes */ "c"], _reference__WEBPACK_IMPORTED_MODULE_0__[/* locations */ "a"], _reference__WEBPACK_IMPORTED_MODULE_0__[/* persons */ "d"], _reference__WEBPACK_IMPORTED_MODULE_0__[/* operations */ "b"], _reference__WEBPACK_IMPORTED_MODULE_0__[/* statuses */ "f"], _reference__WEBPACK_IMPORTED_MODULE_0__[/* prices */ "e"]].forEach(function (s) {
    return s.onEdit(e);
  });
};

/***/ })
/******/ ]);
});