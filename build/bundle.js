/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactEventListener = __webpack_require__(/*! react-event-listener */ \"react-event-listener\");\n\nvar _reactEventListener2 = _interopRequireDefault(_reactEventListener);\n\nvar _CssBaseline = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n\nvar _CssBaseline2 = _interopRequireDefault(_CssBaseline);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _navigation = __webpack_require__(/*! ./components/navigation */ \"./src/client/components/navigation/index.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/client/utils/index.js\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n//https://res.cloudinary.com/dbfv0bfmw/image/upload/v1573853318/manequin.jpg\n\n\nvar theme = (0, _styles.createMuiTheme)({\n  typography: {\n    useNextVariants: true,\n    fontFamily: [\"Raleway-ExtraBold\"].join(\",\")\n  },\n  // https://material-ui.com/customization/themes/#customizing-all-instances-of-a-component-type\n  overrides: {\n    // Name of the component ⚛️ / style sheet\n    MuiButton: {\n      // Name of the rule\n      root: {\n        // Some CSS\n        background: \"white\",\n        borderRadius: 3,\n        border: 0,\n        height: 48,\n        padding: \"0 30px\",\n        boxShadow: \"0 3px 5px 2px rgba(85, 144, 245, .3)\",\n        letterSpacing: \"2px\",\n        fontWeight: \"600\",\n        \"&:hover\": {\n          background: \"red\"\n        }\n      }\n    },\n    MuiInputBase: {\n      root: {\n        fontSize: \"20px\"\n      }\n    }\n  }\n});\n\nvar App = function (_React$PureComponent) {\n  _inherits(App, _React$PureComponent);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      confirmedClassName: \"\"\n    };\n\n    _this.handleWindowSizeChange = _this.handleWindowSizeChange.bind(_this);\n    _this.handleRedirect = _this.handleRedirect.bind(_this);\n    _this.handleClassNameConfirmation = _this.handleClassNameConfirmation.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.handleWindowSizeChange();\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _ref.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"handleWindowSizeChange\",\n    value: function handleWindowSizeChange() {\n      var resize = this.props.resize;\n\n      var headerMobile = (0, _utils.isHeaderMobile)();\n      resize(headerMobile);\n      this.handleClassNameConfirmation(headerMobile);\n    }\n  }, {\n    key: \"handleRedirect\",\n    value: function handleRedirect() {\n      var _props = this.props,\n          loc = _props.loc,\n          resetAuthentication = _props.resetAuthentication;\n\n      loc.pathname = \"/login\";\n      resetAuthentication();\n    }\n  }, {\n    key: \"handleClassNameConfirmation\",\n    value: function handleClassNameConfirmation(mobile) {\n      if (mobile) {\n        this.setState({ confirmedClassName: \"mobileRootStyle\" });\n      } else {\n        this.setState({ confirmedClassName: \"regRootStyle\" });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _props2 = this.props,\n          mobile = _props2.mobile,\n          history = _props2.history,\n          location = _props2.location,\n          route = _props2.route;\n\n      var readyToRender = mobile !== null;\n      return React.createElement(\n        _styles.MuiThemeProvider,\n        { theme: theme },\n        React.createElement(\n          _reactHelmet.Helmet,\n          null,\n          React.createElement(\n            \"title\",\n            null,\n            \"LLEAP Voice Controller\"\n          ),\n          React.createElement(\"meta\", { name: \"description\", content: \"LLEAP Voice Controller\" }),\n          React.createElement(\"meta\", { name: \"theme-color\", content: \"#008f68\" })\n        ),\n        React.createElement(_reactHelmet.Helmet, { defaultTitle: \"LLEAP Voice Controller\", titleTemplate: \"LLEAP Voice Controller\" }),\n        React.createElement(_CssBaseline2.default, null),\n        React.createElement(_reactEventListener2.default, { target: \"window\", onResize: this.handleWindowSizeChange }),\n        readyToRender && React.createElement(_navigation.Navigator, { loc: location, history: history, mobile: mobile }),\n        readyToRender && (0, _reactRouterConfig.renderRoutes)(route.routes),\n        !readyToRender && React.createElement(_navigation.Loading, null)\n      );\n    }\n  }]);\n\n  return App;\n}(React.PureComponent);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    resetAuthentication: function resetAuthentication() {\n      dispatch((0, _actions.resetAuth)());\n    },\n    resize: function resize(mobile) {\n      dispatch((0, _actions.resizeEvent)(mobile));\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth,\n    mobile: state.mobile\n  };\n};\n\nvar AppComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);\n\nexports.default = {\n  component: AppComponent\n};\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _pages = __webpack_require__(/*! ./pages */ \"./src/client/pages/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n  routes: [_extends({}, _pages.HomePage, {\n    path: \"/home\",\n    exact: true\n  }), _extends({}, _pages.VoicePage, { path: \"/voice\", exact: true })]\n})];\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.submitMedBotQuery = exports.SUBMIT_MEDBOT_QUERY_COMPLETE = exports.SUBMIT_MEDBOT_QUERY_PENDING = exports.VOICE_RES = exports.setNavHomePage = exports.SET_HAVE_HOMEPAGE = exports.adePayPalFailure = exports.UPDATE_PAYPAL_FAILURE = exports.adePayPalSuccess = exports.UPDATE_PAYPAL_SUCCESS = exports.routePrograms = exports.ROUTE_PROGRAMS = exports.updatePayPalAmount = exports.UPDATE_PAYPAL_AMOUNT = exports.updateInfoForm = exports.UPDATE_INFO_FORM = exports.updateAmortGraph = exports.UPDATE_AMORT_GRAPH = exports.setBeginDate = exports.resetAmortization = exports.updateAmortization = exports.SET_BEGIN_DATE = exports.RESET_AMORTIZATION = exports.UPDATE_AMORTIZATION = exports.setFormError = exports.SET_FORM_ERROR = exports.submitContactUsEmail = exports.EMAIL_FAILED = exports.EMAIL_SUCCESS = exports.EMAIL_SUBMIT = exports.resizeEvent = exports.RESIZE_EVENT = exports.resetAuth = exports.RESET_AUTH = exports.confirmUniqueUsername = exports.CONFIRM_UNIQUE_USERNAME = exports.fetchCurrentUser = exports.FETCH_CURRENT_USER = exports.registerUser = exports.REGISTER_USER = exports.adeLoginSubmit = exports.ADE_LOGIN_MORTGAGE = exports.ADE_LOGIN_SUBMIT = exports.updateActiveUser = exports.UPDATE_ACTIVE_USER = undefined;\nexports.voiceRes = voiceRes;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar UPDATE_ACTIVE_USER = exports.UPDATE_ACTIVE_USER = \"update_active_user\";\nvar updateActiveUser = exports.updateActiveUser = function updateActiveUser(username) {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({\n                type: UPDATE_ACTIVE_USER,\n                payload: username\n              });\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n// note might need to regress to   const res = await api.get(\"/ade-login\");\n// style\nvar ADE_LOGIN_SUBMIT = exports.ADE_LOGIN_SUBMIT = \"ade_login_submit\";\nvar ADE_LOGIN_MORTGAGE = exports.ADE_LOGIN_MORTGAGE = \"ADE_LOGIN_MORTGAGE\";\n\nvar adeLoginSubmit = exports.adeLoginSubmit = function adeLoginSubmit(username, pw) {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return api.post(\"http://localhost:5000/ade-login-user\", {\n                username: username,\n                pw: pw\n              });\n\n            case 2:\n              res = _context2.sent;\n\n\n              dispatch({\n                type: ADE_LOGIN_SUBMIT,\n                payload: res\n              });\n\n              dispatch({\n                type: ADE_LOGIN_MORTGAGE,\n                payload: res\n              });\n\n              if (res.data.msg === \"Logged In\") {\n                dispatch({\n                  type: UPDATE_ACTIVE_USER,\n                  payload: username\n                });\n              }\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\nvar REGISTER_USER = exports.REGISTER_USER = \"register_user\";\nvar registerUser = exports.registerUser = function registerUser(info) {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n      var data, res;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              data = Object.assign({}, info);\n\n              data.mortgage = {\n                initialAmt: Number(info.loanAmount),\n                termYears: Number(info.term),\n                interestRate: Number(info.interestRate),\n                monthlyPayment: 0\n              };\n              _context3.next = 4;\n              return api.post(\"http://localhost:5000/ade-register-user\", {\n                data: data\n              });\n\n            case 4:\n              res = _context3.sent;\n\n              dispatch({\n                type: REGISTER_USER,\n                payload: res\n              });\n\n            case 6:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = \"fetch_current_user\";\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n  return function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return api.get(\"http://localhost:5000/current-user\");\n\n            case 2:\n              res = _context4.sent;\n\n              dispatch({\n                type: FETCH_CURRENT_USER,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, undefined);\n    }));\n\n    return function (_x10, _x11, _x12) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n};\n\nvar CONFIRM_UNIQUE_USERNAME = exports.CONFIRM_UNIQUE_USERNAME = \"confirm_unique_username\";\nvar confirmUniqueUsername = exports.confirmUniqueUsername = function confirmUniqueUsername(data) {\n  return function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return api.post(\"http://localhost:5000/ade-username-check\", {\n                data: data\n              });\n\n            case 2:\n              res = _context5.sent;\n\n\n              dispatch({\n                type: CONFIRM_UNIQUE_USERNAME,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, undefined);\n    }));\n\n    return function (_x13, _x14, _x15) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n};\n\nvar RESET_AUTH = exports.RESET_AUTH = \"rest_auth\";\nvar resetAuth = exports.resetAuth = function resetAuth() {\n  return function () {\n    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState, api) {\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              dispatch({\n                type: RESET_AUTH\n              });\n\n            case 1:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6, undefined);\n    }));\n\n    return function (_x16, _x17, _x18) {\n      return _ref6.apply(this, arguments);\n    };\n  }();\n};\n\nvar RESIZE_EVENT = exports.RESIZE_EVENT = \"resize_event\";\nvar resizeEvent = exports.resizeEvent = function resizeEvent(mobile) {\n  return function () {\n    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch, getState, api) {\n      return regeneratorRuntime.wrap(function _callee7$(_context7) {\n        while (1) {\n          switch (_context7.prev = _context7.next) {\n            case 0:\n              dispatch({\n                type: RESIZE_EVENT,\n                payload: mobile\n              });\n\n            case 1:\n            case \"end\":\n              return _context7.stop();\n          }\n        }\n      }, _callee7, undefined);\n    }));\n\n    return function (_x19, _x20, _x21) {\n      return _ref7.apply(this, arguments);\n    };\n  }();\n};\n\n/** EMAIL MSG ACTIONS */\n// EMAIL_SUCCESS, EMAIL_FAILED;\n\n/* eslint-disable */\nvar EMAIL_SUBMIT = exports.EMAIL_SUBMIT = \"EMAIL_SUBMIT\";\nvar EMAIL_SUCCESS = exports.EMAIL_SUCCESS = \"EMAIL_SUCCESS\";\nvar EMAIL_FAILED = exports.EMAIL_FAILED = \"EMAIL_FAILED\";\nvar submitContactUsEmail = exports.submitContactUsEmail = function submitContactUsEmail(data) {\n  return function () {\n    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee8$(_context8) {\n        while (1) {\n          switch (_context8.prev = _context8.next) {\n            case 0:\n              dispatch({\n                type: EMAIL_SUBMIT\n              });\n\n              _context8.next = 3;\n              return api.post(\"http://localhost:5000/email\", {\n                data: data\n              });\n\n            case 3:\n              res = _context8.sent;\n\n              if (res.status !== 201) {\n                dispatch({\n                  type: EMAIL_SUCCESS\n                });\n              } else {\n                dispatch({\n                  type: EMAIL_FAILED\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context8.stop();\n          }\n        }\n      }, _callee8, undefined);\n    }));\n\n    return function (_x22, _x23, _x24) {\n      return _ref8.apply(this, arguments);\n    };\n  }();\n};\n\nvar SET_FORM_ERROR = exports.SET_FORM_ERROR = \"SET_FORM_ERROR\";\n\nvar setFormError = exports.setFormError = function setFormError(error) {\n  return {\n    type: SET_FORM_ERROR,\n    error: error\n  };\n};\n\nvar UPDATE_AMORTIZATION = exports.UPDATE_AMORTIZATION = \"UPDATE_AMORTIZATION\";\nvar RESET_AMORTIZATION = exports.RESET_AMORTIZATION = \"RESET_AMORTIZATION\";\nvar SET_BEGIN_DATE = exports.SET_BEGIN_DATE = \"SET_BEGIN_DATE\";\n\nvar updateAmortization = exports.updateAmortization = function updateAmortization() {\n  return {\n    type: UPDATE_AMORTIZATION\n  };\n};\n\nvar resetAmortization = exports.resetAmortization = function resetAmortization() {\n  return {\n    type: RESET_AMORTIZATION\n  };\n};\n\nvar setBeginDate = exports.setBeginDate = function setBeginDate(date) {\n  return {\n    type: SET_BEGIN_DATE,\n    date: date\n  };\n};\n\nvar UPDATE_AMORT_GRAPH = exports.UPDATE_AMORT_GRAPH = \"UPDATE_AMORT_GRAPH\";\n\nvar updateAmortGraph = exports.updateAmortGraph = function updateAmortGraph(st) {\n  return {\n    type: UPDATE_AMORT_GRAPH,\n    st: st\n  };\n};\n\nvar UPDATE_INFO_FORM = exports.UPDATE_INFO_FORM = \"UPDATE_INFO_FORM\";\n\nvar updateInfoForm = exports.updateInfoForm = function updateInfoForm(st) {\n  return {\n    type: UPDATE_INFO_FORM,\n    st: st\n  };\n};\n\nvar UPDATE_PAYPAL_AMOUNT = exports.UPDATE_PAYPAL_AMOUNT = \"UPDATE_PAYPAL_AMOUNT\";\n\n// TODO: REMOVE BOOL? NO NEED AT THIS POINT\nvar updatePayPalAmount = exports.updatePayPalAmount = function updatePayPalAmount(amt, bool) {\n  return {\n    type: UPDATE_PAYPAL_AMOUNT,\n    amt: amt,\n    bool: bool\n  };\n};\n\nvar ROUTE_PROGRAMS = exports.ROUTE_PROGRAMS = \"ROUTE_PROGRAMS\";\n\nvar routePrograms = exports.routePrograms = function routePrograms(msg) {\n  return {\n    type: ROUTE_PROGRAMS,\n    msg: msg\n  };\n};\n\n// adePayPalSuccess as createPayPalSuccessActionCreator,\n// adePayPalFailure as createPayPalFailureActionCreator\n\nvar UPDATE_PAYPAL_SUCCESS = exports.UPDATE_PAYPAL_SUCCESS = \"UPDATE_PAYPAL_SUCCESS\";\n\nvar adePayPalSuccess = exports.adePayPalSuccess = function adePayPalSuccess() {\n  var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return {\n    type: UPDATE_PAYPAL_SUCCESS,\n    dt: dt\n  };\n};\n\nvar UPDATE_PAYPAL_FAILURE = exports.UPDATE_PAYPAL_FAILURE = \"UPDATE_PAYPAL_FAILURE\";\n\nvar adePayPalFailure = exports.adePayPalFailure = function adePayPalFailure(dt) {\n  return {\n    type: UPDATE_PAYPAL_FAILURE,\n    dt: dt\n  };\n};\n\nvar SET_HAVE_HOMEPAGE = exports.SET_HAVE_HOMEPAGE = \"SET_HAVE_HOMEPAGE\";\nvar setNavHomePage = exports.setNavHomePage = function setNavHomePage(pg) {\n  return {\n    type: SET_HAVE_HOMEPAGE,\n    pg: pg\n  };\n};\n\nvar VOICE_RES = exports.VOICE_RES = \"voice_res\";\nvar SUBMIT_MEDBOT_QUERY_PENDING = exports.SUBMIT_MEDBOT_QUERY_PENDING = \"SUBMIT_MEDBOT_QUERY_PENDING\";\nvar SUBMIT_MEDBOT_QUERY_COMPLETE = exports.SUBMIT_MEDBOT_QUERY_COMPLETE = \"SUBMIT_MEDBOT_QUERY_COMPLETE\";\n\nvar submitMedBotQuery = exports.submitMedBotQuery = function submitMedBotQuery(data) {\n  return function () {\n    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee9$(_context9) {\n        while (1) {\n          switch (_context9.prev = _context9.next) {\n            case 0:\n              dispatch({\n                type: SUBMIT_MEDBOT_QUERY_PENDING,\n                payload: { status: true }\n              });\n              console.log(\"api\", api);\n              _context9.next = 4;\n              return api.post(\"http://127.0.0.1:5000/medBotChat\", {\n                data: data\n              });\n\n            case 4:\n              res = _context9.sent;\n\n\n              dispatch({\n                type: SUBMIT_MEDBOT_QUERY_COMPLETE,\n                payload: res\n              });\n\n            case 6:\n            case \"end\":\n              return _context9.stop();\n          }\n        }\n      }, _callee9, undefined);\n    }));\n\n    return function (_x26, _x27, _x28) {\n      return _ref9.apply(this, arguments);\n    };\n  }();\n};\n\nfunction voiceRes() {\n  var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();\n\n  // recognition.onresult = function(event) {\n  //     console.log('You said: ', event.results[0][0].transcript);\n  //     console.log('actions index: ', this);\n  // };\n  return {\n    type: VOICE_RES,\n    payload: recognition\n  };\n}\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/common/CalendarPicker/CalendarPicker.js":
/*!***********************************************************************!*\
  !*** ./src/client/components/common/CalendarPicker/CalendarPicker.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CalendarPicker = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _build = __webpack_require__(/*! @date-io/date-fns/build */ \"@date-io/date-fns/build\");\n\nvar _build2 = _interopRequireDefault(_build);\n\nvar _pickers = __webpack_require__(/*! @material-ui/pickers */ \"@material-ui/pickers\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar materialTheme = (0, _styles.createMuiTheme)({\n  overrides: {\n    MuiPaper: {\n      root: {\n        left: \"135px !important\"\n      }\n    },\n    MuiPickersBasePicker: {\n      container: {}\n    }\n  }\n});\n\nvar CalendarPickerComponent = function (_React$Component) {\n  _inherits(CalendarPickerComponent, _React$Component);\n\n  function CalendarPickerComponent(props) {\n    _classCallCheck(this, CalendarPickerComponent);\n\n    var _this = _possibleConstructorReturn(this, (CalendarPickerComponent.__proto__ || Object.getPrototypeOf(CalendarPickerComponent)).call(this, props));\n\n    _this.state = {\n      date: new Date(),\n      touched: false,\n      open: false\n    };\n    _this.changeDate = _this.changeDate.bind(_this);\n    _this.handleFlip = _this.handleFlip.bind(_this);\n    return _this;\n  }\n\n  _createClass(CalendarPickerComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _props = this.props,\n          setInitial = _props.setInitial,\n          value = _props.value;\n\n      if (setInitial) {\n        var date = new Date(value);\n        this.setState({ date: date });\n      }\n    }\n  }, {\n    key: \"changeDate\",\n    value: function changeDate(e) {\n      var dt = e.toLocaleString();\n      this.setState({ date: e, touched: true });\n      this.props.onChange(dt);\n      this.handleFlip();\n    }\n  }, {\n    key: \"handleFlip\",\n    value: function handleFlip() {\n      var open = this.state.open;\n\n      this.setState({ open: !open });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _state = this.state,\n          date = _state.date,\n          open = _state.open,\n          touched = _state.touched;\n      var _props2 = this.props,\n          label = _props2.label,\n          labelFontSize = _props2.labelFontSize;\n\n      var simpleDate = this.state.date.toString().slice(0, 16);\n      return _react2.default.createElement(\n        _styles.MuiThemeProvider,\n        { theme: materialTheme },\n        _react2.default.createElement(\n          _pickers.MuiPickersUtilsProvider,\n          { utils: _build2.default },\n          open ? _react2.default.createElement(_pickers.DatePicker, _extends({\n            variant: \"static\",\n            style: {\n              color: \"#000\",\n              fontSize: \"20px\",\n              backgroundColor: \"#FFF\"\n            }\n          }, this.props, {\n            autoOk: true,\n            openTo: \"date\",\n            value: date,\n            style: { width: \"100%\" },\n            placeholder: \"here yo\",\n            InputProps: {\n              style: {\n                backgroundColor: \"#fff\",\n                color: \"#000\",\n                paddingTop: \".4rem\",\n                fontSize: \"20px\",\n                fontWeight: \"bold\",\n                marginLeft: \".4rem\",\n                textDecoration: \"none\"\n              },\n              disableUnderline: true\n            },\n            onChange: this.changeDate\n          })) : _react2.default.createElement(_core.TextField, {\n            label: !touched ? label : simpleDate,\n            placeholder: !touched ? label : simpleDate,\n            fullWidth: true,\n            style: {\n              border: \"solid #049347 2px\",\n              borderRadius: \"8px\",\n              backgroundColor: \"#fff\",\n              fontWeight: \"900\"\n            },\n            margin: \"normal\",\n            InputProps: {\n              style: {\n                marginLeft: \".3rem\",\n                textDecoration: \"none\",\n                textAlign: \"center\"\n              },\n              disableUnderline: true\n            },\n            onClick: this.handleFlip,\n            InputLabelProps: {\n              style: {\n                fontSize: \"20px\",\n                color: !touched ? \"rgb(45, 49, 144)\" : \"#000000\",\n                marginLeft: \".3rem\",\n                fontWeight: \"900\"\n              },\n              shrink: false\n            }\n          })\n        )\n      );\n    }\n  }]);\n\n  return CalendarPickerComponent;\n}(_react2.default.Component);\n\nvar CalendarPicker = exports.CalendarPicker = CalendarPickerComponent;\n\n//# sourceURL=webpack:///./src/client/components/common/CalendarPicker/CalendarPicker.js?");

/***/ }),

/***/ "./src/client/components/common/CalendarPicker/index.js":
/*!**************************************************************!*\
  !*** ./src/client/components/common/CalendarPicker/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _CalendarPicker = __webpack_require__(/*! ./CalendarPicker */ \"./src/client/components/common/CalendarPicker/CalendarPicker.js\");\n\nObject.defineProperty(exports, \"CalendarPicker\", {\n  enumerable: true,\n  get: function get() {\n    return _CalendarPicker.CalendarPicker;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/CalendarPicker/index.js?");

/***/ }),

/***/ "./src/client/components/common/CardForm/CardForm.js":
/*!***********************************************************!*\
  !*** ./src/client/components/common/CardForm/CardForm.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CardForm = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _index = __webpack_require__(/*! ../index */ \"./src/client/components/common/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  root: {\n    flexGrow: 1,\n    margin: \"3rem auto\",\n    height: \"100%\"\n  },\n  btn: {\n    margin: \"0 auto\"\n  },\n  link: {\n    margin: \"0rem auto\"\n  },\n  buttons: {\n    display: \"flex\",\n    justifyContent: \"center\",\n    margin: \"2rem auto\"\n  },\n  mobileLink: {\n    margin: \"0rem auto\",\n    fontSize: \"3rem\"\n  },\n  linkContainer: {\n    color: \"#fff\"\n  },\n  btmContainer: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  field: {\n    display: \"flex\",\n    justifyContent: \"center\",\n    margin: \"2rem\",\n    opacity: \"1\"\n  },\n  header: {\n    textAlign: \"center\"\n  }\n};\n\nvar validate = function validate(values) {\n  var errors = {};\n  if (values.registerPassword && values.confirmPassword) {\n    if (values.registerPassword !== values.confirmPassword) {\n      errors.registerPassword = \"Passwords do not match\";\n      errors.confirmPassword = \"Passwords do not match\";\n    }\n  }\n  return errors;\n};\n\nvar sleep = function sleep(ms) {\n  return new Promise(function (resolve) {\n    return setTimeout(resolve, ms);\n  });\n};\n\nvar asyncValidate = function asyncValidate(values, dispatch) {\n  if (values.username_email) {\n    return dispatch(console.log(values.username_email));\n  }\n  return sleep(10).then(function (a) {\n    return console.log(\"a\", a);\n  });\n};\n/* eslint-disable */\n\nvar CardFormComponent = function (_React$Component) {\n  _inherits(CardFormComponent, _React$Component);\n\n  function CardFormComponent(props) {\n    _classCallCheck(this, CardFormComponent);\n\n    return _possibleConstructorReturn(this, (CardFormComponent.__proto__ || Object.getPrototypeOf(CardFormComponent)).call(this, props));\n  }\n\n  _createClass(CardFormComponent, [{\n    key: \"renderHeader\",\n    value: function renderHeader() {\n      var _props = this.props,\n          mobile = _props.mobile,\n          formName = _props.formName;\n\n      return mobile ? _react2.default.createElement(\n        \"h1\",\n        { style: { color: \"#fff\" } },\n        _react2.default.createElement(\n          \"strong\",\n          null,\n          formName\n        )\n      ) : _react2.default.createElement(\n        \"h3\",\n        { style: { color: \"#fff\" } },\n        formName\n      );\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _props2 = this.props,\n          handleSubmit = _props2.handleSubmit,\n          pristine = _props2.pristine,\n          submitting = _props2.submitting,\n          registered = _props2.registered,\n          classes = _props2.classes,\n          mobile = _props2.mobile,\n          reset = _props2.reset,\n          history = _props2.history;\n\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.root },\n        _react2.default.createElement(\n          _Grid2.default,\n          {\n            container: true,\n            spacing: 10,\n            direction: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\"\n          },\n          _react2.default.createElement(\n            _Grid2.default,\n            {\n              item: true,\n              className: \"window-trans-padded bordered-box\",\n              style: {\n                border: \"1px #000 solid\",\n                borderRadius: \"1rem\",\n                minWidth: mobile ? \"45rem\" : \"30rem\",\n                marginTop: \"3rem\",\n                backgroundColor: \"rgba(24, 186, 154, 0.23)\"\n              }\n            },\n            _react2.default.createElement(\n              \"div\",\n              { className: classes.header },\n              this.renderHeader()\n            ),\n            _react2.default.createElement(\n              \"form\",\n              {\n                onSubmit: handleSubmit(function (values) {\n                  var confirmPassword = values.confirmPassword,\n                      registerPassword = values.registerPassword,\n                      lastName = values.lastName,\n                      firstName = values.firstName,\n                      username_email = values.username_email;\n                  var _props3 = props,\n                      registerUser = _props3.registerUser;\n\n                  var isRegistered = registerUser({\n                    username: username_email,\n                    firstname: firstName,\n                    lastname: lastName,\n                    email: username_email,\n                    dob: \"\",\n                    pw: confirmPassword\n                  });\n                })\n              },\n              _react2.default.createElement(\n                \"div\",\n                { className: classes.field },\n                _react2.default.createElement(_reduxForm.Field, {\n                  name: \"username_email\",\n                  type: \"text\",\n                  placeholder: \"Enter email address\",\n                  label: \"Email/Username\",\n                  mobile: mobile,\n                  component: _index.FormField\n                })\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: classes.field },\n                _react2.default.createElement(_reduxForm.Field, {\n                  type: \"text\",\n                  label: \"First Name\",\n                  name: \"firstName\",\n                  placeholder: \"Erlich\",\n                  mobile: mobile,\n                  component: _index.FormField\n                })\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: classes.field },\n                _react2.default.createElement(_reduxForm.Field, {\n                  type: \"text\",\n                  label: \"Last Name\",\n                  name: \"lastName\",\n                  placeholder: \"Bachman\",\n                  mobile: mobile,\n                  component: _index.FormField\n                })\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: classes.field },\n                _react2.default.createElement(_reduxForm.Field, {\n                  type: \"password\",\n                  label: \"Enter a Password\",\n                  name: \"registerPassword\",\n                  placeholder: \"password1\",\n                  mobile: mobile,\n                  component: _index.FormField\n                })\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: classes.field },\n                _react2.default.createElement(_reduxForm.Field, {\n                  type: \"password\",\n                  label: \"Confirm Password\",\n                  name: \"confirmPassword\",\n                  placeholder: \"password1\",\n                  mobile: mobile,\n                  component: _index.FormField\n                })\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: classes.buttons },\n                _react2.default.createElement(_index.StyledButton, {\n                  label: \"Register\",\n                  type: \"submit\",\n                  name: \"submit\",\n                  mobile: mobile,\n                  primary: true,\n                  disabled: pristine || submitting,\n                  className: classes.btn\n                })\n              )\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: classes.btmContainer },\n              registered ? history.push(\"/login\") : \"\",\n              _react2.default.createElement(\n                \"span\",\n                { className: mobile ? classes.mobileLink : classes.link },\n                _react2.default.createElement(\"br\", null),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: classes.linkContainer },\n                  \"Have an account?\",\n                  \" \",\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { className: \"bright-blue\", to: \"/Login\" },\n                    \"Sign in\"\n                  )\n                ),\n                _react2.default.createElement(\"br\", null)\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return CardFormComponent;\n}(_react2.default.Component);\n\nvar CardReduxForm = (0, _reduxForm.reduxForm)({\n  form: \"CardForm\", // a unique identifier for this form\n  validate: validate,\n  asyncValidate: asyncValidate,\n  asyncBlurFields: [\"username_email\", \"confirmPassword\"]\n})((0, _styles.withStyles)(styles)(CardFormComponent));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    registered: state.users.registered,\n    confirmUserNameMsg: confirmValue(state.users.confirmUserNameMsg),\n    mobile: state.mobile\n  };\n};\n\nvar ConnectedCardForm = (0, _reactRedux.connect)(mapStateToProps)(CardReduxForm);\n\nvar CardForm = exports.CardForm = ConnectedCardForm;\n\nfunction confirmValue(data) {\n  if (typeof data === \"undefined\") {\n    return \"\";\n  }\n  return data;\n}\n\n//# sourceURL=webpack:///./src/client/components/common/CardForm/CardForm.js?");

/***/ }),

/***/ "./src/client/components/common/CardForm/index.js":
/*!********************************************************!*\
  !*** ./src/client/components/common/CardForm/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _CardForm = __webpack_require__(/*! ./CardForm */ \"./src/client/components/common/CardForm/CardForm.js\");\n\nObject.defineProperty(exports, 'CardForm', {\n  enumerable: true,\n  get: function get() {\n    return _CardForm.CardForm;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/CardForm/index.js?");

/***/ }),

/***/ "./src/client/components/common/FlexContainer/FlexContainer.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/common/FlexContainer/FlexContainer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FlexContainer = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FlexContainer = exports.FlexContainer = function FlexContainer(props) {\n  var children = props.children,\n      mobile = props.mobile;\n\n  var dir = mobile ? \"column\" : \"row\";\n  return _react2.default.createElement(\n    _Grid2.default,\n    {\n      container: true,\n      spacing: mobile ? 4 : 8,\n      justify: \"center\",\n      alignItems: \"center\",\n      direction: dir\n    },\n    children\n  );\n};\n\n//# sourceURL=webpack:///./src/client/components/common/FlexContainer/FlexContainer.js?");

/***/ }),

/***/ "./src/client/components/common/FlexContainer/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/common/FlexContainer/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _FlexContainer = __webpack_require__(/*! ./FlexContainer */ \"./src/client/components/common/FlexContainer/FlexContainer.js\");\n\nObject.defineProperty(exports, \"FlexContainer\", {\n  enumerable: true,\n  get: function get() {\n    return _FlexContainer.FlexContainer;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/FlexContainer/index.js?");

/***/ }),

/***/ "./src/client/components/common/FlyOut/FlyOut.js":
/*!*******************************************************!*\
  !*** ./src/client/components/common/FlyOut/FlyOut.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FlyOut = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Zoom = __webpack_require__(/*! @material-ui/core/Zoom */ \"@material-ui/core/Zoom\");\n\nvar _Zoom2 = _interopRequireDefault(_Zoom);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    root: {\n      height: 180\n    },\n    container: {\n      display: \"flex\"\n    },\n    paper: {\n      margin: theme.spacing(1)\n    },\n    svg: {\n      width: 100,\n      height: 100\n    },\n    polygon: {\n      fill: theme.palette.common.white,\n      stroke: theme.palette.divider,\n      strokeWidth: 1\n    }\n  };\n});\n\nvar FlyOut = exports.FlyOut = function FlyOut(props) {\n  var classes = useStyles();\n  var direction = props.direction;\n\n  var checked = props.show;\n  var message = props.message ? props.message : \"Add message here\";\n  var arrowDirection = direction === \"left\" ? \"arrow_box-left\" : \"arrow_box-top\";\n  return _react2.default.createElement(\n    _Zoom2.default,\n    {\n      \"in\": checked,\n      style: {\n        transitionDelay: checked ? \"500ms\" : \"0ms\",\n        borderRadius: \"1rem\"\n      }\n    },\n    _react2.default.createElement(\n      \"div\",\n      { className: arrowDirection },\n      _react2.default.createElement(\n        \"a\",\n        null,\n        _react2.default.createElement(\n          _Typography2.default,\n          _extends({\n            variant: \"h6\"\n          }, props, {\n            style: {\n              color: \"#3f51b5\",\n              textShadow: \"0 1px 2px rgba(0, 0, 0, 0.4)\",\n              padding: \"1rem\"\n            },\n            id: \"modal-title\",\n            align: \"left\",\n            gutterBottom: true\n          }),\n          message\n        )\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/client/components/common/FlyOut/FlyOut.js?");

/***/ }),

/***/ "./src/client/components/common/FlyOut/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/common/FlyOut/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _FlyOut = __webpack_require__(/*! ./FlyOut */ \"./src/client/components/common/FlyOut/FlyOut.js\");\n\nObject.defineProperty(exports, \"FlyOut\", {\n  enumerable: true,\n  get: function get() {\n    return _FlyOut.FlyOut;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/FlyOut/index.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/FormField.js":
/*!*************************************************************!*\
  !*** ./src/client/components/common/FormField/FormField.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FormField = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _RegFormField = __webpack_require__(/*! ./RegFormField */ \"./src/client/components/common/FormField/RegFormField.js\");\n\nvar _MobileFormField = __webpack_require__(/*! ./MobileFormField */ \"./src/client/components/common/FormField/MobileFormField.js\");\n\nvar _PasswordField = __webpack_require__(/*! ./PasswordField */ \"./src/client/components/common/FormField/PasswordField/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FormFieldComponent = function FormFieldComponent(props) {\n  if (props.type === \"password\") {\n    return _react2.default.createElement(_PasswordField.PasswordField, props);\n  }\n\n  return props.mobile ? _react2.default.createElement(_MobileFormField.MobileFormField, _extends({}, props, props.input)) : _react2.default.createElement(_RegFormField.RegFormField, props);\n};\n\nFormFieldComponent.propTypes = {\n  input: _propTypes2.default.object,\n  type: _propTypes2.default.string,\n  mobile: _propTypes2.default.bool,\n  onChange: _propTypes2.default.func,\n  value: _propTypes2.default.string,\n  placeholder: _propTypes2.default.string,\n  className: _propTypes2.default.string,\n  label: _propTypes2.default.string,\n  meta: _propTypes2.default.object,\n  margin: _propTypes2.default.string,\n  multiline: _propTypes2.default.bool,\n  rows: _propTypes2.default.string\n};\n\nvar FormField = exports.FormField = FormFieldComponent;\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/FormField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/Input.js":
/*!*********************************************************!*\
  !*** ./src/client/components/common/FormField/Input.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Input = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _RegularInputField = __webpack_require__(/*! ./RegularInputField */ \"./src/client/components/common/FormField/RegularInputField.js\");\n\nvar _MobileInput = __webpack_require__(/*! ./MobileInput */ \"./src/client/components/common/FormField/MobileInput.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Input = exports.Input = function Input(props) {\n    return props.mobile ? _react2.default.createElement(_MobileInput.MobileInput, props) : _react2.default.createElement(_RegularInputField.RegularInputField, props);\n};\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/Input.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/MobileFormField.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/common/FormField/MobileFormField.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MobileFormField = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar MobileTextFieldComponent = function MobileTextFieldComponent(props) {\n  var meta = props.meta,\n      initial = props.initial,\n      iconcomponent = props.iconcomponent,\n      input = props.input,\n      mobile = props.mobile,\n      otherProps = _objectWithoutProperties(props, [\"meta\", \"initial\", \"iconcomponent\", \"input\", \"mobile\"]);\n\n  var floatingLabelStyle = {\n    fontSize: \"1rem\",\n    paddingLeft: \".25rem\",\n    color: \"#665757\"\n  };\n\n  var inputStyle = {\n    fontSize: \"1rem\",\n    height: \"3rem\",\n    marginTop: \"1rem\",\n    marginLeft: \"1rem\",\n    width: \"100%\"\n  };\n\n  if (otherProps.multiline) {\n    inputStyle.height = \"30rem\";\n  }\n  var active = meta.active,\n      error = meta.error,\n      touched = meta.touched,\n      dirty = meta.dirty;\n\n  var showPasswordStyle = initial === \"password\";\n  inputStyle.paddingLeft = showPasswordStyle ? \".5 rem\" : undefined;\n\n  var isLabelActive = active || dirty;\n  floatingLabelStyle.margin = isLabelActive ? \"-1.2rem 0 0 1rem\" : \"2rem 0 0 1rem\";\n\n  var showErr = touched && error !== \"Required\";\n\n  var errorStyle = {\n    visibility: showErr ? \"visible\" : \"hidden\",\n    color: showErr ? \"red\" : \"transparent\",\n    width: \"100%\",\n    fontSize: \"10px\",\n    textAlign: \"center\",\n    margin: \"6px 0\",\n    fontFamily: \"Raleway-ExtraBold\"\n  };\n\n  var fieldContainterStyle = { width: \"100%\" };\n  fieldContainterStyle.display = showPasswordStyle ? \"flex\" : undefined;\n  fieldContainterStyle.flexDirection = showPasswordStyle ? \"row\" : undefined;\n  fieldContainterStyle.marginLeft = showPasswordStyle ? \"1rem\" : undefined;\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(\n      _Grid2.default,\n      { container: true, spacing: 0, alignItems: \"flex-end\" },\n      _react2.default.createElement(\n        _Grid2.default,\n        { item: true, style: fieldContainterStyle },\n        _react2.default.createElement(_TextField2.default, _extends({\n          margin: \"dense\",\n          meta: meta\n        }, otherProps, input, {\n          fullWidth: true,\n          InputProps: {\n            style: inputStyle\n          },\n          inputProps: {\n            style: { marginTop: \"1.25rem\" }\n          },\n          InputLabelProps: {\n            style: floatingLabelStyle\n          },\n          variant: \"outlined\"\n        })),\n        iconcomponent\n      )\n    ),\n    _react2.default.createElement(\n      \"div\",\n      { style: errorStyle },\n      _react2.default.createElement(\n        \"strong\",\n        null,\n        showErr && error\n      )\n    )\n  );\n};\n\nvar MobileFormField = exports.MobileFormField = MobileTextFieldComponent;\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/MobileFormField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/MobileInput.js":
/*!***************************************************************!*\
  !*** ./src/client/components/common/FormField/MobileInput.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MobileInput = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _StyledTextField = __webpack_require__(/*! ./StyledTextField */ \"./src/client/components/common/FormField/StyledTextField.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  inputContainer: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    margin: \"1rem 2rem\"\n  }\n};\n\nvar MobileInputComponent = function (_React$Component) {\n  _inherits(MobileInputComponent, _React$Component);\n\n  function MobileInputComponent(props) {\n    _classCallCheck(this, MobileInputComponent);\n\n    return _possibleConstructorReturn(this, (MobileInputComponent.__proto__ || Object.getPrototypeOf(MobileInputComponent)).call(this, props));\n  }\n\n  _createClass(MobileInputComponent, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          input = _props.input,\n          label = _props.label,\n          type = _props.type,\n          classes = _props.classes,\n          _props$meta = _props.meta,\n          touched = _props$meta.touched,\n          error = _props$meta.error;\n\n      var showErr = touched && error !== \"Required\";\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.inputContainer },\n        _react2.default.createElement(_StyledTextField.StyledTextField, _extends({}, this.props, input, {\n          style: {\n            backgroundColor: \"white\",\n            borderRadius: \"1.3rem\",\n            height: \"10rem\"\n          },\n          underlineShow: false,\n          placeholder: label,\n          type: type,\n          fullWidth: false,\n          inputStyle: {\n            height: \"85%\",\n            color: \"#162b29\",\n            boxShadow: \"none\",\n            fontSize: \"4rem\",\n            marginLeft: \".3rem\"\n          },\n          hintStyle: {\n            marginLeft: \".5rem\",\n            fontSize: \"3rem\",\n            marginBottom: \"1rem\"\n          },\n          underlineFocusStyle: {\n            borderColor: \"#162b29\"\n          },\n          floatingLabelStyle: {\n            color: \"#162b29\",\n            fontSize: \"3rem\"\n          }\n        })),\n        _react2.default.createElement(\n          \"div\",\n          {\n            style: {\n              visibility: showErr ? \"visible\" : \"hidden\",\n              color: showErr ? \"red\" : \"transparent\",\n              margin: \".3rem auto\",\n              width: \"18rem\",\n              height: \"1.5rem\"\n            }\n          },\n          _react2.default.createElement(\n            \"strong\",\n            null,\n            \" \",\n            error\n          )\n        )\n      );\n    }\n  }]);\n\n  return MobileInputComponent;\n}(_react2.default.Component);\n\nvar MobileInput = exports.MobileInput = (0, _styles.withStyles)(styles)(MobileInputComponent);\n\nMobileInputComponent.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  label: _propTypes2.default.string,\n  type: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/MobileInput.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/PasswordField/MobilePasswordField.js":
/*!*************************************************************************************!*\
  !*** ./src/client/components/common/FormField/PasswordField/MobilePasswordField.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MobilePasswordField = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Visibility = __webpack_require__(/*! @material-ui/icons/Visibility */ \"@material-ui/icons/Visibility\");\n\nvar _Visibility2 = _interopRequireDefault(_Visibility);\n\nvar _VisibilityOff = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ \"@material-ui/icons/VisibilityOff\");\n\nvar _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);\n\nvar _MobileFormField = __webpack_require__(/*! ../MobileFormField */ \"./src/client/components/common/FormField/MobileFormField.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar iconStyle = {\n  color: \"#5184ec !important\",\n  fontSize: \"1.5rem\",\n  width: \"100%\",\n  marginLeft: \"1rem\",\n  borderRadius: \"5px\"\n};\n\nvar MobilePasswordFieldComponent = function (_React$Component) {\n  _inherits(MobilePasswordFieldComponent, _React$Component);\n\n  function MobilePasswordFieldComponent(props) {\n    _classCallCheck(this, MobilePasswordFieldComponent);\n\n    var _this = _possibleConstructorReturn(this, (MobilePasswordFieldComponent.__proto__ || Object.getPrototypeOf(MobilePasswordFieldComponent)).call(this, props));\n\n    _this.state = {\n      showPassword: false,\n      initial: null\n    };\n\n    _this.handleMouseDownPassword = _this.handleMouseDownPassword.bind(_this);\n    _this.handleClickShowPassword = _this.handleClickShowPassword.bind(_this);\n    _this.getIconComponent = _this.getIconComponent.bind(_this);\n    return _this;\n  }\n\n  _createClass(MobilePasswordFieldComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.type === \"password\") {\n        this.setState({ initial: \"password\" });\n      }\n    }\n  }, {\n    key: \"handleMouseDownPassword\",\n    value: function handleMouseDownPassword(event) {\n      event.preventDefault();\n    }\n  }, {\n    key: \"handleClickShowPassword\",\n    value: function handleClickShowPassword() {\n      this.setState({ showPassword: !this.state.showPassword });\n    }\n  }, {\n    key: \"getIconComponent\",\n    value: function getIconComponent(showPassword) {\n      return _react2.default.createElement(\n        _IconButton2.default,\n        {\n          \"aria-label\": \"Toggle password visibility\",\n          onClick: this.handleClickShowPassword,\n          disableRipple: true,\n          onMouseDown: this.handleMouseDownPassword\n        },\n        showPassword ? _react2.default.createElement(_VisibilityOff2.default, { style: iconStyle }) : _react2.default.createElement(_Visibility2.default, { style: iconStyle })\n      );\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var meta = this.props.meta;\n      var _state = this.state,\n          initial = _state.initial,\n          showPassword = _state.showPassword;\n\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(_MobileFormField.MobileFormField, _extends({\n          initial: initial,\n          meta: meta\n        }, this.props.input, this.props, {\n          type: showPassword ? \"text\" : \"password\",\n          iconcomponent: this.getIconComponent(showPassword)\n        }))\n      );\n    }\n  }]);\n\n  return MobilePasswordFieldComponent;\n}(_react2.default.Component);\n\nMobilePasswordFieldComponent.propTypes = {\n  classes: _propTypes2.default.object\n};\n\nvar MobilePasswordField = exports.MobilePasswordField = MobilePasswordFieldComponent;\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/PasswordField/MobilePasswordField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/PasswordField/PasswordField.js":
/*!*******************************************************************************!*\
  !*** ./src/client/components/common/FormField/PasswordField/PasswordField.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PasswordField = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _RegPasswordField = __webpack_require__(/*! ./RegPasswordField */ \"./src/client/components/common/FormField/PasswordField/RegPasswordField.js\");\n\nvar _MobilePasswordField = __webpack_require__(/*! ./MobilePasswordField */ \"./src/client/components/common/FormField/PasswordField/MobilePasswordField.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PasswordField = exports.PasswordField = function PasswordField(props) {\n  return props.mobile ? _react2.default.createElement(_MobilePasswordField.MobilePasswordField, props) : _react2.default.createElement(_RegPasswordField.RegPasswordField, props);\n};\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/PasswordField/PasswordField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/PasswordField/RegPasswordField.js":
/*!**********************************************************************************!*\
  !*** ./src/client/components/common/FormField/PasswordField/RegPasswordField.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegPasswordField = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _StyledTextField = __webpack_require__(/*! ../StyledTextField */ \"./src/client/components/common/FormField/StyledTextField.js\");\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"@material-ui/core/InputAdornment\");\n\nvar _InputAdornment2 = _interopRequireDefault(_InputAdornment);\n\nvar _Visibility = __webpack_require__(/*! @material-ui/icons/Visibility */ \"@material-ui/icons/Visibility\");\n\nvar _Visibility2 = _interopRequireDefault(_Visibility);\n\nvar _VisibilityOff = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ \"@material-ui/icons/VisibilityOff\");\n\nvar _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RegPasswordFieldComponent = function (_React$Component) {\n  _inherits(RegPasswordFieldComponent, _React$Component);\n\n  function RegPasswordFieldComponent(props) {\n    _classCallCheck(this, RegPasswordFieldComponent);\n\n    var _this = _possibleConstructorReturn(this, (RegPasswordFieldComponent.__proto__ || Object.getPrototypeOf(RegPasswordFieldComponent)).call(this, props));\n\n    _this.state = {\n      showPassword: false,\n      initial: null\n    };\n\n    _this.handleMouseDownPassword = _this.handleMouseDownPassword.bind(_this);\n    _this.handleClickShowPassword = _this.handleClickShowPassword.bind(_this);\n    _this.getIconComponent = _this.getIconComponent.bind(_this);\n    return _this;\n  }\n\n  _createClass(RegPasswordFieldComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.type === \"password\") {\n        this.setState({ initial: \"password\" });\n      }\n    }\n  }, {\n    key: \"handleMouseDownPassword\",\n    value: function handleMouseDownPassword(event) {\n      event.preventDefault();\n    }\n  }, {\n    key: \"handleClickShowPassword\",\n    value: function handleClickShowPassword() {\n      this.setState({ showPassword: !this.state.showPassword });\n    }\n  }, {\n    key: \"getIconComponent\",\n    value: function getIconComponent(showPassword) {\n      var iconStyle = {\n        color: \"#5184ec !important\",\n        fontSize: \"1.5rem\",\n        borderRadius: \"5px\"\n      };\n      return _react2.default.createElement(\n        _InputAdornment2.default,\n        { position: \"end\" },\n        _react2.default.createElement(\n          _IconButton2.default,\n          {\n            \"aria-label\": \"Toggle password visibility\",\n            onClick: this.handleClickShowPassword,\n            disableRipple: true,\n            style: {\n              margin: \"0 1rem 1rem 0\"\n            },\n            onMouseDown: this.handleMouseDownPassword\n          },\n          showPassword ? _react2.default.createElement(_VisibilityOff2.default, { style: iconStyle }) : _react2.default.createElement(_Visibility2.default, { style: iconStyle })\n        )\n      );\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var meta = this.props.meta;\n      var _state = this.state,\n          initial = _state.initial,\n          showPassword = _state.showPassword;\n      var active = meta.active,\n          error = meta.error,\n          touched = meta.touched,\n          dirty = meta.dirty;\n\n      var showPasswordStyle = initial === \"password\";\n      var fieldContainterStyle = { width: \"100%\" };\n      fieldContainterStyle.display = showPasswordStyle ? \"flex\" : undefined;\n      fieldContainterStyle.flexDirection = showPasswordStyle ? \"row\" : undefined;\n      var gridItemStyle = { width: \"28rem\" };\n      var showErr = meta.touched && meta.error !== \"Required\";\n      var keepVisible = {\n        height: \"1.5rem\",\n        marginTop: \".2rem\",\n        textAlign: \"center\"\n      };\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\n          _Grid2.default,\n          { item: true, style: fieldContainterStyle },\n          _react2.default.createElement(_StyledTextField.StyledTextField, _extends({\n            fullWidth: true,\n            style: gridItemStyle,\n            meta: meta\n          }, this.props, this.props.input, {\n            type: showPassword ? \"text\" : \"password\",\n            iconcomponent: this.getIconComponent(showPassword)\n          }))\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { style: keepVisible },\n          _react2.default.createElement(\n            \"strong\",\n            {\n              style: {\n                visibility: showErr ? \"visible\" : \"hidden\",\n                color: showErr ? \"red\" : \"transparent\",\n                height: \"1.5rem\"\n              }\n            },\n            meta.error\n          )\n        )\n      );\n    }\n  }]);\n\n  return RegPasswordFieldComponent;\n}(_react2.default.Component);\n\nRegPasswordFieldComponent.propTypes = {\n  classes: _propTypes2.default.object\n};\n\nvar RegPasswordField = exports.RegPasswordField = RegPasswordFieldComponent;\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/PasswordField/RegPasswordField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/PasswordField/index.js":
/*!***********************************************************************!*\
  !*** ./src/client/components/common/FormField/PasswordField/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _PasswordField = __webpack_require__(/*! ./PasswordField */ \"./src/client/components/common/FormField/PasswordField/PasswordField.js\");\n\nObject.defineProperty(exports, 'PasswordField', {\n  enumerable: true,\n  get: function get() {\n    return _PasswordField.PasswordField;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/PasswordField/index.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/RegFormField.js":
/*!****************************************************************!*\
  !*** ./src/client/components/common/FormField/RegFormField.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegFormField = exports.email = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _StyledTextField = __webpack_require__(/*! ./StyledTextField */ \"./src/client/components/common/FormField/StyledTextField.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar email = exports.email = function email(value) {\n  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value) ? true : false;\n};\n\nvar RegFormField = exports.RegFormField = function RegFormField(props) {\n  var meta = props.meta;\n\n  var showErr = meta.touched;\n  var showEmailMsg = false;\n  var errorMsg = \"\";\n  var showGreen = meta.error && meta.error.indexOf(\"Good\") !== -1;\n  var keepVisible = {\n    height: \"1.5rem\",\n    marginTop: \".2rem\",\n    marginBottom: \"5px\",\n    textAlign: \"center\"\n  };\n\n  if (props.emailError) {\n    showErr = !meta.active;\n    var isError = email(props.input.value) && props.input.value.length > 6;\n    if (isError) {\n      errorMsg = \"Invalid email address\";\n      showEmailMsg = true;\n      showErr = true;\n    }\n  }\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_StyledTextField.StyledTextField, _extends({}, props.input, props, {\n      style: { borderRadius: \".3rem\" },\n      fullWidth: true\n    })),\n    _react2.default.createElement(\n      \"div\",\n      { style: keepVisible },\n      _react2.default.createElement(\n        \"strong\",\n        {\n          style: {\n            visibility: showErr ? \"visible\" : \"hidden\",\n            color: showErr ? showGreen ? \"green\" : \"red\" : \"transparent\",\n            width: \"18rem\",\n            fontFamily: \"Raleway-ExtraBold\",\n            fontSize: \"20px\"\n          }\n        },\n        showEmailMsg ? errorMsg : meta.error\n      )\n    )\n  );\n};\n\nRegFormField.propTypes = {\n  input: _propTypes2.default.object,\n  meta: _propTypes2.default.object,\n  label: _propTypes2.default.string,\n  type: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/RegFormField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/RegularInputField.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/common/FormField/RegularInputField.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegularInputField = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _StyledTextField = __webpack_require__(/*! ./StyledTextField */ \"./src/client/components/common/FormField/StyledTextField.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  inputContainer: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\"\n  },\n  showErr: {\n    visibility: \"visible\",\n    color: \"red\",\n    width: \"14rem\",\n    height: \"1rem\"\n  },\n  hideErr: {\n    visibility: \"hidden\",\n    width: \"14rem\",\n    height: \"1rem\"\n  }\n};\n\nvar RegularInputComponent = function (_React$Component) {\n  _inherits(RegularInputComponent, _React$Component);\n\n  function RegularInputComponent(props) {\n    _classCallCheck(this, RegularInputComponent);\n\n    return _possibleConstructorReturn(this, (RegularInputComponent.__proto__ || Object.getPrototypeOf(RegularInputComponent)).call(this, props));\n  }\n\n  _createClass(RegularInputComponent, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          input = _props.input,\n          label = _props.label,\n          type = _props.type,\n          classes = _props.classes,\n          _props$meta = _props.meta,\n          touched = _props$meta.touched,\n          error = _props$meta.error;\n\n      var showErr = touched && error !== \"Required\";\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.inputContainer },\n        _react2.default.createElement(_StyledTextField.StyledTextField, _extends({}, this.props, input, {\n          style: { borderRadius: \".3rem\" },\n          underlineShow: false,\n          placeholder: label,\n          type: type\n        })),\n        _react2.default.createElement(\n          \"div\",\n          {\n            style: {\n              visibility: showErr ? \"visible\" : \"hidden\",\n              color: showErr ? \"red\" : \"transparent\",\n              margin: \".3rem auto\",\n              width: \"18rem\",\n              height: \"1.5rem\"\n            }\n          },\n          error\n        )\n      );\n    }\n  }]);\n\n  return RegularInputComponent;\n}(_react2.default.Component);\n\nvar RegularInputField = exports.RegularInputField = (0, _styles.withStyles)(styles)(RegularInputComponent);\n\nRegularInputComponent.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  label: _propTypes2.default.string,\n  type: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/RegularInputField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/StyledTextField.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/common/FormField/StyledTextField.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.StyledTextField = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable */\n\nvar StyledFieldComponent = function StyledFieldComponent(props) {\n  var className = props.className,\n      iconcomponent = props.iconcomponent,\n      fullWidth = props.fullWidth,\n      input = props.input,\n      label = props.label,\n      meta = props.meta,\n      mobile = props.mobile,\n      margin = props.margin,\n      multiline = props.multiline,\n      onChange = props.onChange,\n      placeholder = props.placeholder,\n      rows = props.rows,\n      rowsMax = props.rowsMax,\n      showborder = props.showborder,\n      style = props.style,\n      type = props.type,\n      value = props.value;\n\n  var borderStyle = showborder ? { border: \"solid 2px #000\", width: \"100%\" } : undefined;\n  return _react2.default.createElement(\n    _Grid2.default,\n    { item: true, style: style },\n    _react2.default.createElement(_TextField2.default, _extends({\n      className: className,\n      fullWidth: fullWidth\n    }, input, {\n      label: label,\n      margin: margin,\n      multiline: multiline,\n      onChange: onChange,\n      placeholder: placeholder,\n      rows: rows,\n      rowsMax: rowsMax,\n      showborder: showborder,\n      type: type,\n      value: value,\n      style: borderStyle,\n      InputProps: {\n        style: { marginLeft: \".5rem\" },\n        disableUnderline: true,\n        endAdornment: iconcomponent\n      },\n      InputLabelProps: {\n        style: { marginLeft: \".5rem\" }\n      }\n    }))\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    showBorder: !state.mobile\n  };\n};\n\nvar ConnectedTextField = (0, _reactRedux.connect)(mapStateToProps, null)(StyledFieldComponent);\n\nvar StyledTextField = exports.StyledTextField = ConnectedTextField;\n\nStyledFieldComponent.propTypes = {};\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/StyledTextField.js?");

/***/ }),

/***/ "./src/client/components/common/FormField/index.js":
/*!*********************************************************!*\
  !*** ./src/client/components/common/FormField/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _FormField = __webpack_require__(/*! ./FormField */ \"./src/client/components/common/FormField/FormField.js\");\n\nObject.defineProperty(exports, 'FormField', {\n  enumerable: true,\n  get: function get() {\n    return _FormField.FormField;\n  }\n});\n\nvar _Input = __webpack_require__(/*! ./Input */ \"./src/client/components/common/FormField/Input.js\");\n\nObject.defineProperty(exports, 'Input', {\n  enumerable: true,\n  get: function get() {\n    return _Input.Input;\n  }\n});\n\nvar _PasswordField = __webpack_require__(/*! ./PasswordField */ \"./src/client/components/common/FormField/PasswordField/index.js\");\n\nObject.defineProperty(exports, 'PasswordField', {\n  enumerable: true,\n  get: function get() {\n    return _PasswordField.PasswordField;\n  }\n});\n\nvar _StyledTextField = __webpack_require__(/*! ./StyledTextField */ \"./src/client/components/common/FormField/StyledTextField.js\");\n\nObject.defineProperty(exports, 'StyledTextField', {\n  enumerable: true,\n  get: function get() {\n    return _StyledTextField.StyledTextField;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/FormField/index.js?");

/***/ }),

/***/ "./src/client/components/common/HeaderLink/HeaderLink.js":
/*!***************************************************************!*\
  !*** ./src/client/components/common/HeaderLink/HeaderLink.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HeaderLink = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _AccountCircle = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n\nvar _AccountCircle2 = _interopRequireDefault(_AccountCircle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar iconStyles = {\n  color: \"#000\",\n  marginBottom: \".5rem\",\n  marginLeft: \".5rem\"\n};\n\nvar flexStules = {\n  display: \"flex\",\n  flexDirection: \"row\",\n  justifyContent: \"space-between\",\n  alignItems: \"center\",\n  alingContent: \"center\"\n};\n\nvar HeaderLinkComponent = function HeaderLinkComponent(props) {\n  var className = props.className,\n      to = props.to,\n      title = props.title,\n      isHref = props.isHref,\n      navKey = props.navKey,\n      hasIcon = props.hasIcon,\n      otherProps = _objectWithoutProperties(props, [\"className\", \"to\", \"title\", \"isHref\", \"navKey\", \"hasIcon\"]);\n\n  var styles = {};\n  if (isHref) {\n    return _react2.default.createElement(\n      \"div\",\n      { className: className, key: navKey },\n      _react2.default.createElement(\n        \"a\",\n        { ref: to, style: { textDecoration: \"none\" } },\n        _react2.default.createElement(\n          _Typography2.default,\n          { variant: \"h6\", id: \"header\", align: \"center\" },\n          title\n        )\n      ),\n      hasIcon ? _react2.default.createElement(_AccountCircle2.default, { style: iconStyles }) : null\n    );\n  }\n\n  if (hasIcon) {\n    styles = flexStules;\n  }\n\n  return _react2.default.createElement(\n    \"div\",\n    _extends({ className: className, style: styles }, otherProps, { key: navKey }),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: to, style: { textDecoration: \"none\" } },\n      _react2.default.createElement(\n        _Typography2.default,\n        {\n          variant: \"h6\",\n          style: { color: \"#000\" },\n          id: \"modal-title\",\n          align: \"center\",\n          gutterBottom: true\n        },\n        title\n      )\n    ),\n    hasIcon ? _react2.default.createElement(_AccountCircle2.default, { style: iconStyles }) : null\n  );\n};\n\nvar HeaderLink = exports.HeaderLink = HeaderLinkComponent;\n\nHeaderLinkComponent.propTypes = {\n  className: _propTypes2.default.string,\n  to: _propTypes2.default.string.isRequired,\n  title: _propTypes2.default.string.isRequired,\n  navKey: _propTypes2.default.string,\n  isHref: _propTypes2.default.bool\n};\n\n//# sourceURL=webpack:///./src/client/components/common/HeaderLink/HeaderLink.js?");

/***/ }),

/***/ "./src/client/components/common/HeaderLink/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/common/HeaderLink/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _HeaderLink = __webpack_require__(/*! ./HeaderLink */ \"./src/client/components/common/HeaderLink/HeaderLink.js\");\n\nObject.defineProperty(exports, 'HeaderLink', {\n  enumerable: true,\n  get: function get() {\n    return _HeaderLink.HeaderLink;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/HeaderLink/index.js?");

/***/ }),

/***/ "./src/client/components/common/HelpButton/HelpButton.js":
/*!***************************************************************!*\
  !*** ./src/client/components/common/HelpButton/HelpButton.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HelpButton = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _HelpOutlineTwoTone = __webpack_require__(/*! @material-ui/icons/HelpOutlineTwoTone */ \"@material-ui/icons/HelpOutlineTwoTone\");\n\nvar _HelpOutlineTwoTone2 = _interopRequireDefault(_HelpOutlineTwoTone);\n\nvar _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ \"@material-ui/core/Tooltip\");\n\nvar _Tooltip2 = _interopRequireDefault(_Tooltip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import { RegistrationModal } from \"../../components/modals\";\n\nvar styles = {\n  container: {\n    border: \"solid red 3px\",\n    width: \"5rem\"\n  },\n  btn: {\n    color: \"red\",\n    fontSize: \"2.2rem\"\n  }\n};\n\nvar HelpButtonComponent = function HelpButtonComponent(props) {\n  var classes = props.classes,\n      onClick = props.onClick;\n\n  return _react2.default.createElement(\n    _Tooltip2.default,\n    {\n      enterDelay: 100,\n      leaveDelay: 200,\n      title: \"Need help? Click here\",\n      onClick: onClick\n    },\n    _react2.default.createElement(_HelpOutlineTwoTone2.default, { className: classes.btn })\n  );\n};\n\nvar HelpButtonWithStyles = (0, _styles.withStyles)(styles)(HelpButtonComponent);\n\nvar HelpButton = exports.HelpButton = HelpButtonWithStyles;\n\nHelpButtonComponent.propTypes = {\n  classes: _propTypes2.default.object,\n  auth: _propTypes2.default.object,\n  mobile: _propTypes2.default.bool\n};\n\n//# sourceURL=webpack:///./src/client/components/common/HelpButton/HelpButton.js?");

/***/ }),

/***/ "./src/client/components/common/HelpButton/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/common/HelpButton/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _HelpButton = __webpack_require__(/*! ./HelpButton */ \"./src/client/components/common/HelpButton/HelpButton.js\");\n\nObject.defineProperty(exports, \"HelpButton\", {\n  enumerable: true,\n  get: function get() {\n    return _HelpButton.HelpButton;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/HelpButton/index.js?");

/***/ }),

/***/ "./src/client/components/common/Image/Image.js":
/*!*****************************************************!*\
  !*** ./src/client/components/common/Image/Image.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Image = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _navigation = __webpack_require__(/*! ../../navigation */ \"./src/client/components/navigation/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ImageComponent = function (_React$Component) {\n  _inherits(ImageComponent, _React$Component);\n\n  function ImageComponent(props) {\n    _classCallCheck(this, ImageComponent);\n\n    var _this = _possibleConstructorReturn(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).call(this, props));\n\n    _this.state = { loading: true };\n    _this.handleImageLoaded = _this.handleImageLoaded.bind(_this);\n    _this.handleImageLoaded = _this.handleImageLoaded.bind(_this);\n    return _this;\n  }\n\n  _createClass(ImageComponent, [{\n    key: \"handleImageLoaded\",\n    value: function handleImageLoaded() {\n      this.setState({\n        loading: false\n      });\n    }\n  }, {\n    key: \"handleImageErrored\",\n    value: function handleImageErrored() {\n      this.setState({ loading: true });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var loading = this.state.loading;\n      var _props = this.props,\n          containerClassName = _props.containerClassName,\n          imgClassName = _props.imgClassName,\n          _props$showSpinner = _props.showSpinner,\n          showSpinner = _props$showSpinner === undefined ? true : _props$showSpinner;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: containerClassName },\n        _react2.default.createElement(\"img\", _extends({}, this.props, {\n          style: { opacity: \"50%\", backgroundSize: \"cover\", width: \"100%\" },\n          className: imgClassName,\n          src: this.props.src,\n          onLoad: this.handleImageLoaded.bind(this),\n          onError: this.handleImageErrored.bind(this)\n        })),\n        showSpinner && _react2.default.createElement(_navigation.Loading, {\n          loading: loading,\n          isImage: true,\n          className: containerClassName\n        })\n      );\n    }\n  }]);\n\n  return ImageComponent;\n}(_react2.default.Component);\n\nvar Image = exports.Image = ImageComponent;\n\n//# sourceURL=webpack:///./src/client/components/common/Image/Image.js?");

/***/ }),

/***/ "./src/client/components/common/Image/index.js":
/*!*****************************************************!*\
  !*** ./src/client/components/common/Image/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Image = __webpack_require__(/*! ./Image.js */ \"./src/client/components/common/Image/Image.js\");\n\nObject.defineProperty(exports, \"Image\", {\n  enumerable: true,\n  get: function get() {\n    return _Image.Image;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/Image/index.js?");

/***/ }),

/***/ "./src/client/components/common/LearnMoreDescription/LearnMoreDescription.js":
/*!***********************************************************************************!*\
  !*** ./src/client/components/common/LearnMoreDescription/LearnMoreDescription.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.LearnMoreDescription = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  card: {\n    maxWidth: 345\n  },\n  media: {\n    height: 0,\n    paddingTop: \"56.25%\" // 16:9\n  },\n  description: {\n    minWidth: \"18rem\"\n  }\n};\n/* eslint-disable */\n\n\nvar LearnMoreComponent = function LearnMoreComponent(props) {\n  var mobile = props.mobile,\n      description = props.description;\n\n  var typeStyle = {\n    marginTop: mobile ? \"1rem\" : \".5rem\"\n  };\n  typeStyle.fontSize = mobile ? undefined : \"1.1rem\";\n  return _react2.default.createElement(\n    _Typography2.default,\n    {\n      align: \"left\",\n      key: description,\n      variant: mobile ? \"h5\" : \"subtitle1\",\n      color: \"textPrimary\",\n      style: typeStyle\n    },\n    description\n  );\n};\n\nvar LearnMoreDescription = exports.LearnMoreDescription = (0, _styles.withStyles)(styles)(LearnMoreComponent);\n\n//# sourceURL=webpack:///./src/client/components/common/LearnMoreDescription/LearnMoreDescription.js?");

/***/ }),

/***/ "./src/client/components/common/LearnMoreDescription/index.js":
/*!********************************************************************!*\
  !*** ./src/client/components/common/LearnMoreDescription/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LearnMoreDescription = __webpack_require__(/*! ./LearnMoreDescription */ \"./src/client/components/common/LearnMoreDescription/LearnMoreDescription.js\");\n\nObject.defineProperty(exports, 'LearnMoreDescription', {\n  enumerable: true,\n  get: function get() {\n    return _LearnMoreDescription.LearnMoreDescription;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/LearnMoreDescription/index.js?");

/***/ }),

/***/ "./src/client/components/common/LeftPanel/LeftPanel.js":
/*!*************************************************************!*\
  !*** ./src/client/components/common/LeftPanel/LeftPanel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.LeftPanel = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _RegLeftPanel = __webpack_require__(/*! ./RegLeftPanel */ \"./src/client/components/common/LeftPanel/RegLeftPanel.js\");\n\nvar _MobileLeftPanel = __webpack_require__(/*! ./MobileLeftPanel */ \"./src/client/components/common/LeftPanel/MobileLeftPanel.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LeftPanelComponent = function LeftPanelComponent(props) {\n    var mobile = props.mobile;\n\n    var panel = mobile ? _react2.default.createElement(_MobileLeftPanel.MobileLeftPanel, props) : _react2.default.createElement(_RegLeftPanel.RegLeftPanel, props);\n    return panel;\n};\n\nvar LeftPanel = exports.LeftPanel = LeftPanelComponent;\n\nLeftPanelComponent.propTypes = {\n    mobile: _propTypes2.default.bool\n};\n\n//# sourceURL=webpack:///./src/client/components/common/LeftPanel/LeftPanel.js?");

/***/ }),

/***/ "./src/client/components/common/LeftPanel/MobileLeftPanel.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/common/LeftPanel/MobileLeftPanel.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MobileLeftPanel = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _LinkButton = __webpack_require__(/*! ../LinkButton */ \"./src/client/components/common/LinkButton/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  \"roll-3\": {\n    margin: \"2rem 0rem 0rem 6rem\",\n    textAlign: \"left\"\n  },\n  \"p-2\": {\n    textAlign: \"left\"\n  },\n  \"container-1\": {\n    margin: \"0rem auto\"\n  },\n  link: {\n    color: \"#fff\",\n    border: \"solid white\",\n    borderRadius: \".5rem\",\n    margin: \"2rem\",\n    textAlign: \"center\",\n    minWidth: \"12rem\",\n    padding: \".5rem\",\n    \"&:hover\": {\n      backgroundColor: \"#fff\",\n      color: \"#03c0fe\",\n      textShadow: \"1px 1px 4px #03c0fe\"\n    }\n  },\n  center: {\n    margin: \"0rem auto\"\n  },\n  textTop: {\n    color: \"white\",\n    textAlign: \"center\",\n    margin: \"2rem\"\n  },\n  top: {\n    display: \"flex\",\n    flexDirection: \"row\",\n    justifyContent: \"space-around\",\n    alignItems: \"center\",\n    margin: \"1rem\"\n  },\n  space: {\n    width: \"2rem\",\n    margin: \"0 auto\"\n  },\n  linksContainer: {\n    maxWidth: \"50rem\",\n    margin: \"2rem auto\"\n  },\n  mobileLeft: {\n    fontSize: \"2rem\"\n  }\n};\n\nvar MobileLeftPanelComponent = function MobileLeftPanelComponent(props) {\n  /* eslint-disable */\n  var classes = props.classes;\n\n  return _react2.default.createElement(\n    \"div\",\n    { className: classes.mobileLeft },\n    _react2.default.createElement(\n      \"div\",\n      { className: classes.top },\n      _react2.default.createElement(\"img\", { src: \"https://res.cloudinary.com/dbfv0bfmw/image/upload/v1570753007/heroImg.png\" }),\n      _react2.default.createElement(\n        \"div\",\n        { className: classes.space },\n        \"\\xA0\"\n      ),\n      _react2.default.createElement(\n        \"h1\",\n        { className: \"bright-blue\" },\n        _react2.default.createElement(\n          \"strong\",\n          null,\n          \"LLEAP Voice Controller!\"\n        )\n      )\n    ),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"w3-col m12 l4 window-dark w3-content\" },\n      _react2.default.createElement(\n        \"div\",\n        { className: classes.center },\n        _react2.default.createElement(\n          \"div\",\n          { className: classes.textTop },\n          _react2.default.createElement(\n            \"h2\",\n            { className: \"bright-blue\" },\n            \"LLEAP Voice Controller\"\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: classes.linksContainer },\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#wp\",\n            className: classes.link,\n            label: \"White paper drafting.\"\n          }),\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#video\",\n            className: classes.link,\n            label: \"Video content creation.\"\n          }),\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#reg\",\n            className: classes.link,\n            label: \"Regulatory Compliance.\"\n          }),\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#pr\",\n            className: classes.link,\n            label: \"PR and marketing.\"\n          }),\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#token\",\n            className: classes.link,\n            label: \"Token sale website creation.\"\n          }),\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#token\",\n            className: classes.link,\n            label: \"Token and secure wallet development.\"\n          })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: classes.textTop },\n          _react2.default.createElement(\n            \"h2\",\n            { className: \"bright-blue\" },\n            \"As well as each stage of dApp development:\"\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: classes.linksContainer },\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#dapp\",\n            className: classes.link,\n            label: \"dApp software architecture\"\n          }),\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#tech\",\n            className: classes.link,\n            label: \"Implementation & Infrastructure\"\n          }),\n          _react2.default.createElement(_LinkButton.LinkButton, {\n            to: \"/services#tech\",\n            className: classes.link,\n            label: \"Block chain, sub/side chain implementation & integration\"\n          })\n        )\n      )\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    mobile: state.mobile\n  };\n};\n\nvar MobileLeftPanelWithStyles = (0, _styles.withStyles)(styles)(MobileLeftPanelComponent);\n\nvar ConnectedLeftPanel = (0, _reactRedux.connect)(mapStateToProps)(MobileLeftPanelWithStyles);\n\nvar MobileLeftPanel = exports.MobileLeftPanel = ConnectedLeftPanel;\n\n//# sourceURL=webpack:///./src/client/components/common/LeftPanel/MobileLeftPanel.js?");

/***/ }),

/***/ "./src/client/components/common/LeftPanel/RegLeftPanel.js":
/*!****************************************************************!*\
  !*** ./src/client/components/common/LeftPanel/RegLeftPanel.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RegLeftPanel = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  \"roll-3\": {\n    margin: \"2rem 0rem 0rem 6rem\",\n    textAlign: \"left\"\n  },\n  \"p-2\": {\n    textAlign: \"left\"\n  },\n  \"container-1\": {\n    margin: \"0rem auto\"\n  },\n  link: {\n    color: \"white\"\n  }\n};\n\nvar RegLeftPanelComponent = function RegLeftPanelComponent(props) {\n  /* eslint-disable */\n  var classes = props.classes;\n\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"w3-col m12 l4 window-dark w3-content\" },\n    _react2.default.createElement(\n      \"h5\",\n      null,\n      \"LLEAP Voice Controller\"\n    ),\n    _react2.default.createElement(\n      \"ul\",\n      null,\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#wp\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#video\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#reg\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#pr\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#token\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#token\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#dapp\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#tech\" },\n          \"Add.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/services#tech\" },\n          \"Add.\"\n        )\n      )\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    mobile: state.mobile\n  };\n};\n\nvar RegLeftPanelWithStyles = (0, _styles.withStyles)(styles)(RegLeftPanelComponent);\n\nvar ConnectedLeftPanel = (0, _reactRedux.connect)(mapStateToProps)(RegLeftPanelWithStyles);\n\nvar RegLeftPanel = exports.RegLeftPanel = ConnectedLeftPanel;\n\n//# sourceURL=webpack:///./src/client/components/common/LeftPanel/RegLeftPanel.js?");

/***/ }),

/***/ "./src/client/components/common/LeftPanel/index.js":
/*!*********************************************************!*\
  !*** ./src/client/components/common/LeftPanel/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LeftPanel = __webpack_require__(/*! ./LeftPanel */ \"./src/client/components/common/LeftPanel/LeftPanel.js\");\n\nObject.defineProperty(exports, 'LeftPanel', {\n  enumerable: true,\n  get: function get() {\n    return _LeftPanel.LeftPanel;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/LeftPanel/index.js?");

/***/ }),

/***/ "./src/client/components/common/LenderSelect/LenderSelect.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/common/LenderSelect/LenderSelect.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.LenderSelect = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _InputLabel = __webpack_require__(/*! @material-ui/core/InputLabel */ \"@material-ui/core/InputLabel\");\n\nvar _InputLabel2 = _interopRequireDefault(_InputLabel);\n\nvar _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n\nvar _FormControl2 = _interopRequireDefault(_FormControl);\n\nvar _Select = __webpack_require__(/*! @material-ui/core/Select */ \"@material-ui/core/Select\");\n\nvar _Select2 = _interopRequireDefault(_Select);\n\nvar _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    root: {\n      display: \"flex\",\n      flexWrap: \"wrap\"\n    },\n    formControl: {\n      margin: theme.spacing(1),\n      minWidth: 120\n    },\n    selectEmpty: {\n      marginTop: theme.spacing(2)\n    }\n  };\n});\n\nvar labelStyle = {\n  color: \"#3f51b5\",\n  textShadow: \"0 1px 2px rgba(0, 0, 0, 0.4)\"\n};\n\nvar LenderSelectComponent = function (_React$Component) {\n  _inherits(LenderSelectComponent, _React$Component);\n\n  function LenderSelectComponent(props) {\n    _classCallCheck(this, LenderSelectComponent);\n\n    var _this = _possibleConstructorReturn(this, (LenderSelectComponent.__proto__ || Object.getPrototypeOf(LenderSelectComponent)).call(this, props));\n\n    _this.state = {\n      value: null\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(LenderSelectComponent, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      this.setState({\n        value: event.target.value\n      });\n      this.props.onLenderSelect(event.target.value);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var value = this.state.value;\n      var options = this.props.options;\n\n      return _react2.default.createElement(\n        _FormControl2.default,\n        { style: { width: \"11rem\" } },\n        _react2.default.createElement(\n          _InputLabel2.default,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { variant: \"h6\", style: labelStyle, align: \"left\" },\n            \"Lender\"\n          )\n        ),\n        _react2.default.createElement(\n          _Select2.default,\n          {\n            value: value,\n            onChange: this.handleChange,\n            inputProps: {\n              name: \"Lender\"\n            }\n          },\n          options.map(function (option) {\n            return _react2.default.createElement(\n              _MenuItem2.default,\n              { value: option },\n              option\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return LenderSelectComponent;\n}(_react2.default.Component);\n\nvar StyledSelect = (0, _styles.withStyles)(styles)(LenderSelectComponent);\n\n// const mapStateToProps = state => {\n//   return {\n//     registered: state.input\n//   };\n// };\n\n// const ConnectedSelect = connect(mapStateToProps)(StyledSelect);\n\nvar LenderSelect = exports.LenderSelect = StyledSelect;\n\n//# sourceURL=webpack:///./src/client/components/common/LenderSelect/LenderSelect.js?");

/***/ }),

/***/ "./src/client/components/common/LenderSelect/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/common/LenderSelect/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LenderSelect = __webpack_require__(/*! ./LenderSelect */ \"./src/client/components/common/LenderSelect/LenderSelect.js\");\n\nObject.defineProperty(exports, \"LenderSelect\", {\n  enumerable: true,\n  get: function get() {\n    return _LenderSelect.LenderSelect;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/LenderSelect/index.js?");

/***/ }),

/***/ "./src/client/components/common/LinkButton/LinkButton.js":
/*!***************************************************************!*\
  !*** ./src/client/components/common/LinkButton/LinkButton.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.LinkButton = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable */\n\nvar LinkButton = exports.LinkButton = function LinkButton(props) {\n    var className = props.className,\n        to = props.to,\n        label = props.label;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: to },\n            _react2.default.createElement(\n                'h4',\n                { className: className },\n                _react2.default.createElement(\n                    'strong',\n                    null,\n                    label\n                )\n            )\n        )\n    );\n};\n\n//# sourceURL=webpack:///./src/client/components/common/LinkButton/LinkButton.js?");

/***/ }),

/***/ "./src/client/components/common/LinkButton/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/common/LinkButton/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LinkButton = __webpack_require__(/*! ./LinkButton */ \"./src/client/components/common/LinkButton/LinkButton.js\");\n\nObject.defineProperty(exports, 'LinkButton', {\n  enumerable: true,\n  get: function get() {\n    return _LinkButton.LinkButton;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/LinkButton/index.js?");

/***/ }),

/***/ "./src/client/components/common/OfferCard/OfferCard.js":
/*!*************************************************************!*\
  !*** ./src/client/components/common/OfferCard/OfferCard.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.OfferCard = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActionArea = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"@material-ui/core/CardActionArea\");\n\nvar _CardActionArea2 = _interopRequireDefault(_CardActionArea);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n\nvar _CardMedia2 = _interopRequireDefault(_CardMedia);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/client/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  card: {\n    maxWidth: 345\n  },\n  media: {\n    height: 220\n  },\n  mobileMedia: {\n    height: 500\n  },\n  mobileContent: {},\n  content: {\n    height: \"9rem\"\n  },\n  actions: {},\n  mobileBtn: {\n    fontSize: \"2rem\",\n    margin: \"0 auto\"\n  },\n  mobileCard: {\n    maxWidth: \"680 !important\"\n  }\n};\n\nfunction MediaCard(props) {\n  var classes = props.classes,\n      option = props.option,\n      imgURL = props.imgURL,\n      onClick = props.onClick,\n      mobile = props.mobile;\n  var h5 = option.h5,\n      description = option.description,\n      name = option.name,\n      cardName = option.cardName;\n\n  var cardClassName = mobile ? classes.mobileCard : classes.card;\n  var mediaClassName = mobile ? classes.mobileMedia : classes.media;\n  var contentClassName = mobile ? classes.mobileContent : classes.content;\n  var buttonClassName = mobile ? classes.mobileBtn : classes.actions;\n  return _react2.default.createElement(\n    _Card2.default,\n    { className: cardClassName, onClick: onClick },\n    _react2.default.createElement(\n      _CardActionArea2.default,\n      { name: cardName },\n      _react2.default.createElement(_CardMedia2.default, { className: mediaClassName, image: imgURL, title: h5 }),\n      _react2.default.createElement(\n        _CardContent2.default,\n        { className: contentClassName },\n        _react2.default.createElement(\n          _Typography2.default,\n          { gutterBottom: true, variant: mobile ? \"h3\" : \"h5\" },\n          h5\n        ),\n        _react2.default.createElement(\n          _common.Text,\n          { mobile: mobile, component: mobile ? \"h3\" : \"p\" },\n          description\n        )\n      )\n    ),\n    _react2.default.createElement(\n      _CardActions2.default,\n      { className: classes.actions },\n      _react2.default.createElement(\n        _Button2.default,\n        {\n          size: mobile ? \"large\" : \"small\",\n          color: \"primary\",\n          className: buttonClassName,\n          value: cardName\n        },\n        \"Select\"\n      )\n    )\n  );\n}\n\nMediaCard.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar OfferCard = exports.OfferCard = (0, _styles.withStyles)(styles)(MediaCard);\n\n//# sourceURL=webpack:///./src/client/components/common/OfferCard/OfferCard.js?");

/***/ }),

/***/ "./src/client/components/common/OfferCard/index.js":
/*!*********************************************************!*\
  !*** ./src/client/components/common/OfferCard/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _OfferCard = __webpack_require__(/*! ./OfferCard */ \"./src/client/components/common/OfferCard/OfferCard.js\");\n\nObject.defineProperty(exports, \"OfferCard\", {\n  enumerable: true,\n  get: function get() {\n    return _OfferCard.OfferCard;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/OfferCard/index.js?");

/***/ }),

/***/ "./src/client/components/common/PlatformRadioGroup/PlatformRadioGroup.js":
/*!*******************************************************************************!*\
  !*** ./src/client/components/common/PlatformRadioGroup/PlatformRadioGroup.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PlatformRadioGroup = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Checkbox = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n\nvar _Checkbox2 = _interopRequireDefault(_Checkbox);\n\nvar _green = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n\nvar _green2 = _interopRequireDefault(_green);\n\nvar _FormGroup = __webpack_require__(/*! @material-ui/core/FormGroup */ \"@material-ui/core/FormGroup\");\n\nvar _FormGroup2 = _interopRequireDefault(_FormGroup);\n\nvar _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n\nvar _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  root: {\n    color: _green2.default[600],\n    \"&$checked\": {\n      color: _green2.default[500]\n    }\n  },\n  checked: {}\n};\n\nvar CheckboxGroup = function (_React$Component) {\n  _inherits(CheckboxGroup, _React$Component);\n\n  function CheckboxGroup(props) {\n    _classCallCheck(this, CheckboxGroup);\n\n    var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(CheckboxGroup, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          classes = _props.classes,\n          fbSelected = _props.fbSelected,\n          twitter = _props.twitter,\n          instaG = _props.instaG,\n          telegram = _props.telegram,\n          handleCheckBoxChange = _props.handleCheckBoxChange;\n\n      var classesObj = {\n        root: classes.root,\n        checked: classes.checked\n      };\n      return _react2.default.createElement(\n        _FormGroup2.default,\n        null,\n        _react2.default.createElement(_FormControlLabel2.default, {\n          control: _react2.default.createElement(_Checkbox2.default, {\n            checked: fbSelected,\n            onChange: function onChange() {\n              return handleCheckBoxChange(\"fbSelected\");\n            },\n            value: \"fbSelected\",\n            classes: classesObj\n          }),\n          label: \"FaceBook\"\n        }),\n        _react2.default.createElement(_FormControlLabel2.default, {\n          control: _react2.default.createElement(_Checkbox2.default, {\n            checked: telegram,\n            onChange: function onChange() {\n              return handleCheckBoxChange(\"telegram\");\n            },\n            value: \"telegram\",\n            classes: classesObj\n          }),\n          label: \"Telegram\"\n        }),\n        _react2.default.createElement(_FormControlLabel2.default, {\n          control: _react2.default.createElement(_Checkbox2.default, {\n            checked: twitter,\n            onChange: function onChange() {\n              return handleCheckBoxChange(\"twitter\");\n            },\n            value: \"twitter\",\n            classes: classesObj\n          }),\n          label: \"Twitter\"\n        }),\n        _react2.default.createElement(_FormControlLabel2.default, {\n          control: _react2.default.createElement(_Checkbox2.default, {\n            checked: instaG,\n            onChange: function onChange() {\n              return handleCheckBoxChange(\"instaG\");\n            },\n            value: \"instaG\",\n            classes: classesObj\n          }),\n          label: \"Instagram\"\n        })\n      );\n    }\n  }]);\n\n  return CheckboxGroup;\n}(_react2.default.Component);\n\nvar PlatformRadioGroup = exports.PlatformRadioGroup = (0, _styles.withStyles)(styles)(CheckboxGroup);\n\n//# sourceURL=webpack:///./src/client/components/common/PlatformRadioGroup/PlatformRadioGroup.js?");

/***/ }),

/***/ "./src/client/components/common/PlatformRadioGroup/index.js":
/*!******************************************************************!*\
  !*** ./src/client/components/common/PlatformRadioGroup/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _PlatformRadioGroup = __webpack_require__(/*! ./PlatformRadioGroup */ \"./src/client/components/common/PlatformRadioGroup/PlatformRadioGroup.js\");\n\nObject.defineProperty(exports, \"PlatformRadioGroup\", {\n  enumerable: true,\n  get: function get() {\n    return _PlatformRadioGroup.PlatformRadioGroup;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/PlatformRadioGroup/index.js?");

/***/ }),

/***/ "./src/client/components/common/ProgressLine/ProgressLine.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/common/ProgressLine/ProgressLine.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ProgressLine = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _LinearProgress = __webpack_require__(/*! @material-ui/core/LinearProgress */ \"@material-ui/core/LinearProgress\");\n\nvar _LinearProgress2 = _interopRequireDefault(_LinearProgress);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  root: {\n    flexGrow: 1\n  }\n};\n\nvar LinearBuffer = function (_React$Component) {\n  _inherits(LinearBuffer, _React$Component);\n\n  function LinearBuffer(props) {\n    _classCallCheck(this, LinearBuffer);\n\n    var _this = _possibleConstructorReturn(this, (LinearBuffer.__proto__ || Object.getPrototypeOf(LinearBuffer)).call(this, props));\n\n    _this.state = {\n      completed: 0,\n      buffer: 10\n    };\n    return _this;\n  }\n\n  _createClass(LinearBuffer, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.timer = setInterval(this.progress, 500);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearInterval(this.timer);\n    }\n  }, {\n    key: \"progress\",\n    value: function progress() {\n      var completed = this.state.completed;\n\n      if (completed > 100) {\n        this.setState({ completed: 0, buffer: 10 });\n      } else {\n        var diff = Math.random() * 10;\n        var diff2 = Math.random() * 10;\n        this.setState({\n          completed: completed + diff,\n          buffer: completed + diff + diff2\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      var _state = this.state,\n          completed = _state.completed,\n          buffer = _state.buffer;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.root },\n        _react2.default.createElement(_LinearProgress2.default, {\n          variant: \"buffer\",\n          value: completed,\n          valueBuffer: buffer\n        })\n      );\n    }\n  }]);\n\n  return LinearBuffer;\n}(_react2.default.Component);\n\nLinearBuffer.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar ProgressLine = exports.ProgressLine = (0, _styles.withStyles)(styles)(LinearBuffer);\n\n//# sourceURL=webpack:///./src/client/components/common/ProgressLine/ProgressLine.js?");

/***/ }),

/***/ "./src/client/components/common/ProgressLine/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/common/ProgressLine/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ProgressLine = __webpack_require__(/*! ./ProgressLine */ \"./src/client/components/common/ProgressLine/ProgressLine.js\");\n\nObject.defineProperty(exports, \"ProgressLine\", {\n  enumerable: true,\n  get: function get() {\n    return _ProgressLine.ProgressLine;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/ProgressLine/index.js?");

/***/ }),

/***/ "./src/client/components/common/RadioGroup/RadioGroup.js":
/*!***************************************************************!*\
  !*** ./src/client/components/common/RadioGroup/RadioGroup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RadioGroup = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Checkbox = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n\nvar _Checkbox2 = _interopRequireDefault(_Checkbox);\n\nvar _green = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n\nvar _green2 = _interopRequireDefault(_green);\n\nvar _FormGroup = __webpack_require__(/*! @material-ui/core/FormGroup */ \"@material-ui/core/FormGroup\");\n\nvar _FormGroup2 = _interopRequireDefault(_FormGroup);\n\nvar _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n\nvar _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  root: {\n    color: _green2.default[600],\n    \"&$checked\": {\n      color: _green2.default[500]\n    }\n  },\n  checked: {},\n  mobile: {\n    fontSize: \"1.8rem !important\",\n    margin: \"1rem !important\",\n    color: \"#3F51B5\"\n  },\n  reg: {\n    color: \"#3F51B5\"\n  }\n};\n\nvar CheckboxGroup = function (_React$Component) {\n  _inherits(CheckboxGroup, _React$Component);\n\n  function CheckboxGroup(props) {\n    _classCallCheck(this, CheckboxGroup);\n\n    var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));\n\n    _this.state = {\n      no: false,\n      yes: false\n    };\n    return _this;\n  }\n\n  _createClass(CheckboxGroup, [{\n    key: \"handleChange\",\n    value: function handleChange(v) {\n      var handleCheckBoxChange = this.props.handleCheckBoxChange;\n      // this.setState({});\n\n      if (v === \"no\") {\n        this.setState({ no: true, yes: false });\n      } else {\n        this.setState({ no: false, yes: true });\n      }\n      handleCheckBoxChange(v);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          classes = _props.classes,\n          mobile = _props.mobile;\n      var _state = this.state,\n          no = _state.no,\n          yes = _state.yes;\n\n\n      var labelClassName = mobile ? classes.mobile : classes.reg;\n      var classesObj = {\n        root: classes.root,\n        checked: classes.checked\n      };\n\n      return _react2.default.createElement(\n        _FormGroup2.default,\n        null,\n        _react2.default.createElement(_FormControlLabel2.default, {\n          control: _react2.default.createElement(_Checkbox2.default, {\n            checked: no,\n            onChange: function onChange() {\n              return _this2.handleChange(\"no\");\n            },\n            value: \"no\",\n            classes: classesObj\n          }),\n          label: \"No\",\n          classes: { label: labelClassName }\n        }),\n        _react2.default.createElement(_FormControlLabel2.default, {\n          control: _react2.default.createElement(_Checkbox2.default, {\n            checked: yes,\n            onChange: function onChange() {\n              return _this2.handleChange(\"yes\");\n            },\n            value: \"yes\",\n            classes: classesObj\n          }),\n          classes: { label: labelClassName },\n          label: \"Yes\"\n        })\n      );\n    }\n  }]);\n\n  return CheckboxGroup;\n}(_react2.default.Component);\n\nvar RadioGroup = exports.RadioGroup = (0, _styles.withStyles)(styles)(CheckboxGroup);\n\n//# sourceURL=webpack:///./src/client/components/common/RadioGroup/RadioGroup.js?");

/***/ }),

/***/ "./src/client/components/common/RadioGroup/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/common/RadioGroup/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _RadioGroup = __webpack_require__(/*! ./RadioGroup */ \"./src/client/components/common/RadioGroup/RadioGroup.js\");\n\nObject.defineProperty(exports, \"RadioGroup\", {\n  enumerable: true,\n  get: function get() {\n    return _RadioGroup.RadioGroup;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/RadioGroup/index.js?");

/***/ }),

/***/ "./src/client/components/common/RightSideContent/RightSideContent.js":
/*!***************************************************************************!*\
  !*** ./src/client/components/common/RightSideContent/RightSideContent.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RightSideContent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  content: {\n    textAlign: \"left\"\n  },\n  href: {\n    textDecoration: \"none\",\n    color: \"blue\"\n  }\n};\n\n/* eslint-disable */\n\nvar RightSideComponent = function (_React$Component) {\n  _inherits(RightSideComponent, _React$Component);\n\n  function RightSideComponent(props) {\n    _classCallCheck(this, RightSideComponent);\n\n    return _possibleConstructorReturn(this, (RightSideComponent.__proto__ || Object.getPrototypeOf(RightSideComponent)).call(this, props));\n  }\n\n  _createClass(RightSideComponent, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"w3-row\", id: \"about\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"window-trans-padded w3-content bordered-box\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: classes.content },\n            _react2.default.createElement(\n              \"h5\",\n              { className: \"bright-blue\" },\n              \"Upcoming ade campaigns & TGEs:\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              _react2.default.createElement(\n                \"a\",\n                {\n                  href: \"https://www.shapecoin.io/\",\n                  target: \"_blank\",\n                  className: classes.href\n                },\n                \"ShapeCoin\"\n              )\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              _react2.default.createElement(\n                \"a\",\n                {\n                  href: \"http://partsdetectico.io/\",\n                  target: \"_blank\",\n                  className: classes.href\n                },\n                \"PD\"\n              )\n            ),\n            _react2.default.createElement(\n              \"h5\",\n              { className: \"bright-blue\" },\n              \"Blog Posts:\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Bleeding Edge Crypto Projects\"\n            ),\n            _react2.default.createElement(\n              \"li\",\n              null,\n              \"Regulatory\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return RightSideComponent;\n}(_react2.default.Component);\n\nvar RightSideContent = exports.RightSideContent = (0, _styles.withStyles)(styles)(RightSideComponent);\n\nRightSideComponent.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  input: _propTypes2.default.object,\n  meta: _propTypes2.default.object,\n  label: _propTypes2.default.string,\n  type: _propTypes2.default.string\n};\n\n// We bring leadership to all dimensions of the token sale, including:\n\n// •  White paper drafting.\n// •  Video content creation.\n// •  Token sale website creation.\n// •  Token and secure wallet development.\n// •  Technical implementation.\n// •  PR and marketing.\n\n//# sourceURL=webpack:///./src/client/components/common/RightSideContent/RightSideContent.js?");

/***/ }),

/***/ "./src/client/components/common/RightSideContent/index.js":
/*!****************************************************************!*\
  !*** ./src/client/components/common/RightSideContent/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _RightSideContent = __webpack_require__(/*! ./RightSideContent */ \"./src/client/components/common/RightSideContent/RightSideContent.js\");\n\nObject.defineProperty(exports, 'RightSideContent', {\n  enumerable: true,\n  get: function get() {\n    return _RightSideContent.RightSideContent;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/RightSideContent/index.js?");

/***/ }),

/***/ "./src/client/components/common/SaveButton/SaveButton.js":
/*!***************************************************************!*\
  !*** ./src/client/components/common/SaveButton/SaveButton.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SaveButton = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _CircularProgress = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"@material-ui/core/CircularProgress\");\n\nvar _CircularProgress2 = _interopRequireDefault(_CircularProgress);\n\nvar _green = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n\nvar _green2 = _interopRequireDefault(_green);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Check = __webpack_require__(/*! @material-ui/icons/Check */ \"@material-ui/icons/Check\");\n\nvar _Check2 = _interopRequireDefault(_Check);\n\nvar _Publish = __webpack_require__(/*! @material-ui/icons/Publish */ \"@material-ui/icons/Publish\");\n\nvar _Publish2 = _interopRequireDefault(_Publish);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      display: \"flex\",\n      alignItems: \"center\"\n    },\n    wrapper: {\n      margin: theme.spacing.unit,\n      position: \"relative\"\n    },\n    buttonSuccess: {\n      backgroundColor: _green2.default[500],\n      \"&:hover\": {\n        backgroundColor: _green2.default[700]\n      }\n    },\n    fabProgress: {\n      color: _green2.default[500],\n      position: \"absolute\",\n      top: -6,\n      left: -6,\n      zIndex: 1\n    },\n    buttonProgress: {\n      color: _green2.default[500],\n      position: \"absolute\",\n      top: \"50%\",\n      left: \"50%\",\n      marginTop: -12,\n      marginLeft: -12\n    }\n  };\n};\n\nvar CircularIntegration = function (_React$Component) {\n  _inherits(CircularIntegration, _React$Component);\n\n  function CircularIntegration(props) {\n    _classCallCheck(this, CircularIntegration);\n\n    var _this = _possibleConstructorReturn(this, (CircularIntegration.__proto__ || Object.getPrototypeOf(CircularIntegration)).call(this, props));\n\n    _this.state = {\n      loading: false,\n      success: false\n    };\n    _this.handleButtonClick = _this.handleButtonClick.bind(_this);\n    return _this;\n  }\n\n  _createClass(CircularIntegration, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearTimeout(this.timer);\n    }\n  }, {\n    key: \"handleButtonClick\",\n    value: function handleButtonClick() {\n      var _this2 = this;\n\n      if (!this.state.loading) {\n        this.setState({\n          success: false,\n          loading: true\n        }, function () {\n          _this2.timer = setTimeout(function () {\n            _this2.setState({\n              loading: false,\n              success: true\n            });\n          }, 4000);\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _state = this.state,\n          loading = _state.loading,\n          success = _state.success;\n      var classes = this.props.classes;\n\n      var buttonClassname = (0, _classnames2.default)(_defineProperty({}, classes.buttonSuccess, success));\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.root },\n        _react2.default.createElement(\n          \"div\",\n          { className: classes.wrapper },\n          _react2.default.createElement(\n            _Button2.default,\n            {\n              variant: \"extendedFab\",\n              color: \"primary\",\n              \"aria-label\": \"Post\",\n              className: buttonClassname,\n              disabled: loading,\n              onClick: this.handleButtonClick\n            },\n            success ? _react2.default.createElement(_Check2.default, null) : _react2.default.createElement(_Publish2.default, null),\n            success ? \"Posted\" : \"Post\"\n          ),\n          loading && _react2.default.createElement(_CircularProgress2.default, { size: 24, className: classes.buttonProgress })\n        )\n      );\n    }\n  }]);\n\n  return CircularIntegration;\n}(_react2.default.Component);\n\nCircularIntegration.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar SaveButton = exports.SaveButton = (0, _styles.withStyles)(styles)(CircularIntegration);\n\n//# sourceURL=webpack:///./src/client/components/common/SaveButton/SaveButton.js?");

/***/ }),

/***/ "./src/client/components/common/SaveButton/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/common/SaveButton/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SaveButton = __webpack_require__(/*! ./SaveButton */ \"./src/client/components/common/SaveButton/SaveButton.js\");\n\nObject.defineProperty(exports, \"SaveButton\", {\n  enumerable: true,\n  get: function get() {\n    return _SaveButton.SaveButton;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/SaveButton/index.js?");

/***/ }),

/***/ "./src/client/components/common/SelectedOptionsDisplay/SelectedOptionsDisplay.js":
/*!***************************************************************************************!*\
  !*** ./src/client/components/common/SelectedOptionsDisplay/SelectedOptionsDisplay.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SelectedOptionsDisplay = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ \"@material-ui/core/Tooltip\");\n\nvar _Tooltip2 = _interopRequireDefault(_Tooltip);\n\nvar _Chip = __webpack_require__(/*! @material-ui/core/Chip */ \"@material-ui/core/Chip\");\n\nvar _Chip2 = _interopRequireDefault(_Chip);\n\nvar _PermIdentity = __webpack_require__(/*! @material-ui/icons/PermIdentity */ \"@material-ui/icons/PermIdentity\");\n\nvar _PermIdentity2 = _interopRequireDefault(_PermIdentity);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      display: \"flex\",\n      justifyContent: \"center\",\n      flexWrap: \"wrap\"\n    },\n    chip: {\n      margin: theme.spacing.unit\n    }\n  };\n};\n\nvar OptionDisplayComponent = function OptionDisplayComponent(props) {\n  var classes = props.classes,\n      className = props.className,\n      _props$optionsSelecte = props.optionsSelected,\n      optionsSelected = _props$optionsSelecte === undefined ? [] : _props$optionsSelecte,\n      removeOption = props.removeOption;\n\n  var ready = optionsSelected.length !== 0;\n  return _react2.default.createElement(\n    \"div\",\n    { className: className },\n    ready && optionsSelected.map(function (option) {\n      return _react2.default.createElement(_Chip2.default, {\n        label: option,\n        clickable: true,\n        className: classes.chip,\n        color: \"primary\",\n        onClick: removeOption,\n        variant: \"outlined\"\n      });\n    })\n  );\n};\nvar SelectedOptionsDisplay = exports.SelectedOptionsDisplay = (0, _styles.withStyles)(styles)(OptionDisplayComponent);\n\n//# sourceURL=webpack:///./src/client/components/common/SelectedOptionsDisplay/SelectedOptionsDisplay.js?");

/***/ }),

/***/ "./src/client/components/common/SelectedOptionsDisplay/index.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/common/SelectedOptionsDisplay/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SelectedOptionsDisplay = __webpack_require__(/*! ./SelectedOptionsDisplay.js */ \"./src/client/components/common/SelectedOptionsDisplay/SelectedOptionsDisplay.js\");\n\nObject.defineProperty(exports, \"SelectedOptionsDisplay\", {\n  enumerable: true,\n  get: function get() {\n    return _SelectedOptionsDisplay.SelectedOptionsDisplay;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/SelectedOptionsDisplay/index.js?");

/***/ }),

/***/ "./src/client/components/common/StyledButton/MobileButton.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/common/StyledButton/MobileButton.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MobileButton = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar btnStyle = {\n  width: \"75%\",\n  fontSize: \".8rem\",\n  borderRadius: \"5px\",\n  color: \"#fff\",\n  marginBottom: \"5px\"\n};\n\nvar MobileButtonComponent = function MobileButtonComponent(props) {\n  var className = props.className,\n      label = props.label,\n      onSubmit = props.onSubmit,\n      otherProps = _objectWithoutProperties(props, [\"className\", \"label\", \"onSubmit\"]);\n\n  return _react2.default.createElement(\n    _Button2.default,\n    _extends({\n      variant: \"contained\",\n      disableRipple: true\n    }, otherProps, {\n      onSubmit: onSubmit,\n      className: className,\n      size: \"large\",\n      style: btnStyle\n    }),\n    _react2.default.createElement(\n      \"strong\",\n      null,\n      label\n    )\n  );\n};\n\nvar MobileButton = exports.MobileButton = MobileButtonComponent;\n\nMobileButtonComponent.propTypes = {\n  className: _propTypes2.default.string,\n  label: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/common/StyledButton/MobileButton.js?");

/***/ }),

/***/ "./src/client/components/common/StyledButton/StyledButton.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/common/StyledButton/StyledButton.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.StyledButton = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _MobileButton = __webpack_require__(/*! ./MobileButton */ \"./src/client/components/common/StyledButton/MobileButton.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar regBtnStyle = {\n  borderRadius: \"5px\",\n  width: \"10rem\",\n  fontSize: \"1rem\",\n  textAlign: \"center\",\n  marginRight: \"5px\",\n  \"&hover\": {\n    backgroundColor: \"red\"\n  }\n};\n\nvar ButtonComponent = function ButtonComponent(props) {\n  var isMobile = props.isMobile,\n      className = props.className,\n      label = props.label,\n      onSubmit = props.onSubmit,\n      mobile = props.mobile,\n      otherProps = _objectWithoutProperties(props, [\"isMobile\", \"className\", \"label\", \"onSubmit\", \"mobile\"]);\n\n  var btn = isMobile ? _react2.default.createElement(_MobileButton.MobileButton, _extends({\n    label: label,\n    onSubmit: onSubmit\n  }, otherProps, {\n    className: className\n  })) : _react2.default.createElement(\n    _Button2.default,\n    _extends({\n      disableRipple: true\n    }, otherProps, {\n      onSubmit: onSubmit,\n      className: className,\n      style: regBtnStyle\n    }),\n    label\n  );\n  return btn;\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isMobile: state.mobile\n  };\n};\nvar StyledButton = exports.StyledButton = (0, _reactRedux.connect)(mapStateToProps, null)(ButtonComponent);\n\nButtonComponent.propTypes = {\n  classes: _propTypes2.default.object,\n  className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/common/StyledButton/StyledButton.js?");

/***/ }),

/***/ "./src/client/components/common/StyledButton/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/common/StyledButton/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _StyledButton = __webpack_require__(/*! ./StyledButton */ \"./src/client/components/common/StyledButton/StyledButton.js\");\n\nObject.defineProperty(exports, 'StyledButton', {\n  enumerable: true,\n  get: function get() {\n    return _StyledButton.StyledButton;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/StyledButton/index.js?");

/***/ }),

/***/ "./src/client/components/common/Text/Text.js":
/*!***************************************************!*\
  !*** ./src/client/components/common/Text/Text.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Text = exports.StyledText = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar styles = function styles(theme) {\n  return {\n    mobile: {\n      fontSize: \"2.2rem !important\"\n    }\n  };\n};\n\nvar MobileTextComponent = function MobileTextComponent(props) {\n  var children = props.children,\n      classes = props.classes,\n      dispatch = props.dispatch,\n      mobile = props.mobile,\n      rest = _objectWithoutProperties(props, [\"children\", \"classes\", \"dispatch\", \"mobile\"]);\n\n  return _react2.default.createElement(\n    _Typography2.default,\n    _extends({ className: classes.mobile }, rest),\n    children\n  );\n};\n\nvar RegTextComponent = function RegTextComponent(props) {\n  var children = props.children,\n      dispatch = props.dispatch,\n      rest = _objectWithoutProperties(props, [\"children\", \"dispatch\"]);\n\n  return _react2.default.createElement(\n    _Typography2.default,\n    rest,\n    children\n  );\n};\n\nvar TextComponent = function TextComponent(props) {\n  return props.mobile ? _react2.default.createElement(MobileTextComponent, _extends({}, props, props.input)) : _react2.default.createElement(RegTextComponent, props);\n};\n\nvar StyledText = exports.StyledText = (0, _styles.withStyles)(styles)(TextComponent);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    mobile: state.mobile\n  };\n};\n\nvar Text = exports.Text = (0, _reactRedux.connect)(mapStateToProps, null)(StyledText);\n\nTextComponent.propTypes = {\n  classes: _propTypes2.default.object,\n  mobile: _propTypes2.default.bool.isRequired\n};\n\n//# sourceURL=webpack:///./src/client/components/common/Text/Text.js?");

/***/ }),

/***/ "./src/client/components/common/Text/index.js":
/*!****************************************************!*\
  !*** ./src/client/components/common/Text/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Text = __webpack_require__(/*! ./Text */ \"./src/client/components/common/Text/Text.js\");\n\nObject.defineProperty(exports, \"Text\", {\n  enumerable: true,\n  get: function get() {\n    return _Text.Text;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/Text/index.js?");

/***/ }),

/***/ "./src/client/components/common/Timer.js":
/*!***********************************************!*\
  !*** ./src/client/components/common/Timer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Timer = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TimerComponent = function (_React$Component) {\n    _inherits(TimerComponent, _React$Component);\n\n    function TimerComponent(props) {\n        _classCallCheck(this, TimerComponent);\n\n        var _this = _possibleConstructorReturn(this, (TimerComponent.__proto__ || Object.getPrototypeOf(TimerComponent)).call(this, props));\n\n        _this.state = {\n            elapsed: 0\n        };\n        _this.tick = _this.tick.bind(_this);\n        _this.timer = _this.timer.bind(_this);\n        return _this;\n    }\n\n    _createClass(TimerComponent, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            // componentDidMount is called by react when the component\n            // has been rendered on the page. We can set the interval here:\n            this.timer();\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            // This method is called immediately before the component is removed\n            // from the page and destroyed. We can clear the interval here:\n\n            clearInterval(this.timer);\n        }\n    }, {\n        key: 'timer',\n        value: function timer() {\n            this.timer = setInterval(this.tick, 50);\n        }\n    }, {\n        key: 'tick',\n        value: function tick() {\n            // This function is called every 50 ms. It updates the\n            // elapsed counter. Calling setState causes the component to be re-rendered\n            /* eslint-disable */\n\n            this.setState({ elapsed: new Date() - this.props.start });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            // Calculate elapsed to tenth of a second:\n            var elapsed = Math.round(this.state.elapsed / 100);\n\n            // This will give a number with one digit after the decimal dot (xx.x):\n            var seconds = (elapsed / 10).toFixed(1);\n\n            // Although we return an entire <p> element, react will smartly update\n            // only the changed parts, which contain the seconds variable.\n            return _react2.default.createElement(\n                'p',\n                null,\n                'Your order was submitted ',\n                _react2.default.createElement(\n                    'b',\n                    null,\n                    seconds,\n                    ' seconds'\n                ),\n                ' ago.'\n            );\n        }\n    }]);\n\n    return TimerComponent;\n}(_react2.default.Component);\n\nvar Timer = exports.Timer = TimerComponent;\n\n//# sourceURL=webpack:///./src/client/components/common/Timer.js?");

/***/ }),

/***/ "./src/client/components/common/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/common/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _FormField = __webpack_require__(/*! ./FormField */ \"./src/client/components/common/FormField/index.js\");\n\nObject.defineProperty(exports, \"FormField\", {\n  enumerable: true,\n  get: function get() {\n    return _FormField.FormField;\n  }\n});\nObject.defineProperty(exports, \"Input\", {\n  enumerable: true,\n  get: function get() {\n    return _FormField.Input;\n  }\n});\nObject.defineProperty(exports, \"PasswordField\", {\n  enumerable: true,\n  get: function get() {\n    return _FormField.PasswordField;\n  }\n});\n\nvar _Timer = __webpack_require__(/*! ./Timer */ \"./src/client/components/common/Timer.js\");\n\nObject.defineProperty(exports, \"Timer\", {\n  enumerable: true,\n  get: function get() {\n    return _Timer.Timer;\n  }\n});\n\nvar _RightSideContent = __webpack_require__(/*! ./RightSideContent */ \"./src/client/components/common/RightSideContent/index.js\");\n\nObject.defineProperty(exports, \"RightSideContent\", {\n  enumerable: true,\n  get: function get() {\n    return _RightSideContent.RightSideContent;\n  }\n});\n\nvar _LeftPanel = __webpack_require__(/*! ./LeftPanel */ \"./src/client/components/common/LeftPanel/index.js\");\n\nObject.defineProperty(exports, \"LeftPanel\", {\n  enumerable: true,\n  get: function get() {\n    return _LeftPanel.LeftPanel;\n  }\n});\n\nvar _StyledButton = __webpack_require__(/*! ./StyledButton */ \"./src/client/components/common/StyledButton/index.js\");\n\nObject.defineProperty(exports, \"StyledButton\", {\n  enumerable: true,\n  get: function get() {\n    return _StyledButton.StyledButton;\n  }\n});\n\nvar _LinkButton = __webpack_require__(/*! ./LinkButton */ \"./src/client/components/common/LinkButton/index.js\");\n\nObject.defineProperty(exports, \"LinkButton\", {\n  enumerable: true,\n  get: function get() {\n    return _LinkButton.LinkButton;\n  }\n});\n\nvar _CardForm = __webpack_require__(/*! ./CardForm */ \"./src/client/components/common/CardForm/index.js\");\n\nObject.defineProperty(exports, \"CardForm\", {\n  enumerable: true,\n  get: function get() {\n    return _CardForm.CardForm;\n  }\n});\n\nvar _OfferCard = __webpack_require__(/*! ./OfferCard */ \"./src/client/components/common/OfferCard/index.js\");\n\nObject.defineProperty(exports, \"OfferCard\", {\n  enumerable: true,\n  get: function get() {\n    return _OfferCard.OfferCard;\n  }\n});\nObject.defineProperty(exports, \"AnimatedCard\", {\n  enumerable: true,\n  get: function get() {\n    return _OfferCard.AnimatedCard;\n  }\n});\n\nvar _HeaderLink = __webpack_require__(/*! ./HeaderLink */ \"./src/client/components/common/HeaderLink/index.js\");\n\nObject.defineProperty(exports, \"HeaderLink\", {\n  enumerable: true,\n  get: function get() {\n    return _HeaderLink.HeaderLink;\n  }\n});\n\nvar _LearnMoreDescription = __webpack_require__(/*! ./LearnMoreDescription */ \"./src/client/components/common/LearnMoreDescription/index.js\");\n\nObject.defineProperty(exports, \"LearnMoreDescription\", {\n  enumerable: true,\n  get: function get() {\n    return _LearnMoreDescription.LearnMoreDescription;\n  }\n});\n\nvar _Image = __webpack_require__(/*! ./Image */ \"./src/client/components/common/Image/index.js\");\n\nObject.defineProperty(exports, \"Image\", {\n  enumerable: true,\n  get: function get() {\n    return _Image.Image;\n  }\n});\n\nvar _HelpButton = __webpack_require__(/*! ./HelpButton */ \"./src/client/components/common/HelpButton/index.js\");\n\nObject.defineProperty(exports, \"HelpButton\", {\n  enumerable: true,\n  get: function get() {\n    return _HelpButton.HelpButton;\n  }\n});\n\nvar _SelectedOptionsDisplay = __webpack_require__(/*! ./SelectedOptionsDisplay */ \"./src/client/components/common/SelectedOptionsDisplay/index.js\");\n\nObject.defineProperty(exports, \"SelectedOptionsDisplay\", {\n  enumerable: true,\n  get: function get() {\n    return _SelectedOptionsDisplay.SelectedOptionsDisplay;\n  }\n});\n\nvar _RadioGroup = __webpack_require__(/*! ./RadioGroup */ \"./src/client/components/common/RadioGroup/index.js\");\n\nObject.defineProperty(exports, \"RadioGroup\", {\n  enumerable: true,\n  get: function get() {\n    return _RadioGroup.RadioGroup;\n  }\n});\n\nvar _PlatformRadioGroup = __webpack_require__(/*! ./PlatformRadioGroup */ \"./src/client/components/common/PlatformRadioGroup/index.js\");\n\nObject.defineProperty(exports, \"PlatformRadioGroup\", {\n  enumerable: true,\n  get: function get() {\n    return _PlatformRadioGroup.PlatformRadioGroup;\n  }\n});\n\nvar _SaveButton = __webpack_require__(/*! ./SaveButton */ \"./src/client/components/common/SaveButton/index.js\");\n\nObject.defineProperty(exports, \"SaveButton\", {\n  enumerable: true,\n  get: function get() {\n    return _SaveButton.SaveButton;\n  }\n});\n\nvar _FlexContainer = __webpack_require__(/*! ./FlexContainer */ \"./src/client/components/common/FlexContainer/index.js\");\n\nObject.defineProperty(exports, \"FlexContainer\", {\n  enumerable: true,\n  get: function get() {\n    return _FlexContainer.FlexContainer;\n  }\n});\n\nvar _ProgressLine = __webpack_require__(/*! ./ProgressLine */ \"./src/client/components/common/ProgressLine/index.js\");\n\nObject.defineProperty(exports, \"ProgressLine\", {\n  enumerable: true,\n  get: function get() {\n    return _ProgressLine.ProgressLine;\n  }\n});\n\nvar _Text = __webpack_require__(/*! ./Text */ \"./src/client/components/common/Text/index.js\");\n\nObject.defineProperty(exports, \"Text\", {\n  enumerable: true,\n  get: function get() {\n    return _Text.Text;\n  }\n});\n\nvar _FlyOut = __webpack_require__(/*! ./FlyOut */ \"./src/client/components/common/FlyOut/index.js\");\n\nObject.defineProperty(exports, \"FlyOut\", {\n  enumerable: true,\n  get: function get() {\n    return _FlyOut.FlyOut;\n  }\n});\n\nvar _LenderSelect = __webpack_require__(/*! ./LenderSelect */ \"./src/client/components/common/LenderSelect/index.js\");\n\nObject.defineProperty(exports, \"LenderSelect\", {\n  enumerable: true,\n  get: function get() {\n    return _LenderSelect.LenderSelect;\n  }\n});\n\nvar _CalendarPicker = __webpack_require__(/*! ./CalendarPicker */ \"./src/client/components/common/CalendarPicker/index.js\");\n\nObject.defineProperty(exports, \"CalendarPicker\", {\n  enumerable: true,\n  get: function get() {\n    return _CalendarPicker.CalendarPicker;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/common/index.js?");

/***/ }),

/***/ "./src/client/components/navigation/HeaderNav/HeaderNav.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/navigation/HeaderNav/HeaderNav.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HeaderNav = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _AccountCircle = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n\nvar _AccountCircle2 = _interopRequireDefault(_AccountCircle);\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/client/components/common/index.js\");\n\nvar _utils = __webpack_require__(/*! ../../../utils */ \"./src/client/utils/index.js\");\n\nvar _actions = __webpack_require__(/*! ../../../actions */ \"./src/client/actions/index.js\");\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LOGIN = \"LOGIN\";\n\nvar styles = {\n  w3Top: {\n    top: \"0\",\n    positiion: \"fixed\",\n    zIndex: \"1\",\n    marginTop: \"1rem\"\n  },\n  w3Black: {\n    backgroundColor: \"black !important\",\n    color: \"#fff !important\"\n  },\n  w3Bar: {\n    width: \"100%\",\n    overflow: \"hidden\",\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    justifyContent: \"space-evenly\",\n    position: \"fixed\",\n    top: \"0\",\n    left: \"0\",\n    zIndex: \"100\",\n    marginBottom: \"2rem\"\n  },\n  w3BarAuth: {\n    width: \"100%\",\n    overflow: \"hidden\",\n    display: \"flex\",\n    flexDirection: \"row\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    position: \"fixed\",\n    top: \"0\",\n    left: \"0\",\n    zIndex: \"100\",\n    marginBottom: \"2rem\",\n    padding: \"0 1rem\"\n  },\n  w3Button: {\n    userSelect: \"none\",\n    color: \"#000\",\n    \"&:hover\": {\n      color: \"#1260DF\",\n      textShadow: \"1px 1px 4px white\"\n    }\n  },\n  w3BarItem: {\n    display: \"inline-block\",\n    verticalAlign: \"middle\",\n    textDecoration: \"none\",\n    backgroundColor: \"inherit\",\n    cursor: \"pointer\",\n    whiteSpace: \"nowrap\",\n    \"&:hover\": {\n      color: \"#1260DF !important\",\n      textShadow: \"1px 1px 4px white\"\n    }\n  },\n  selected: {\n    backgroundColor: \"#fff\",\n    color: \"#000\",\n    textShadow: \"1px 1px 4px #1260DF\"\n  },\n  notSelected: {}\n};\n\nvar loginStyle = {\n  display: \"flex\",\n  flexDirection: \"row\",\n  alignItems: \"center\"\n};\n\nvar externalHeaderLinks = [\"HOME\", \"LLEAP PARAMETERS\", \"SCENES\", \"VOICE ACTIVATION\", \"HELP\"];\n\nvar internalHeaderLinks = [\"HOME\", \"LOGIN\"];\n\nvar getTitle = function getTitle(title) {\n  var link = title.replace(\" \", \"-\");\n  if (title === LOGIN) {\n    return \"/login\";\n  }\n  if (title === \"PROGRAMS\") {\n    return \"/programs\";\n  }\n  return link;\n};\n\nvar NavButton = function NavButton(props) {\n  var mobile = props.mobile,\n      title = props.title,\n      onClick = props.onClick,\n      classes = props.classes;\n\n  var button = void 0;\n  var linkClassName = (0, _classnames2.default)(classes.w3BarItem, classes.w3Button);\n  var linkPath = getTitle(title);\n  var isHref = linkPath.includes(\"#\");\n  var linkPathVar = \"\";\n  linkPathVar = linkPath;\n  button = _react2.default.createElement(_common.HeaderLink, {\n    isHref: isHref,\n    className: linkClassName,\n    to: linkPathVar,\n    title: title,\n    mobile: mobile ? 1 : 0\n  });\n  return button;\n};\n/* eslint-disable */\n\nvar HeaderComponent = function (_React$Component) {\n  _inherits(HeaderComponent, _React$Component);\n\n  function HeaderComponent(props) {\n    _classCallCheck(this, HeaderComponent);\n\n    var _this = _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).call(this, props));\n\n    _this.handleLogOut = _this.handleLogOut.bind(_this);\n    return _this;\n  }\n\n  _createClass(HeaderComponent, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _ref.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"handleLogOut\",\n    value: function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var _props, history, resetAuthentication;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _props = this.props, history = _props.history, resetAuthentication = _props.resetAuthentication;\n                _context2.next = 3;\n                return resetAuthentication();\n\n              case 3:\n                this.props.loc.pathname = \"/\";\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function handleLogOut() {\n        return _ref2.apply(this, arguments);\n      }\n\n      return handleLogOut;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        \"nav\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: (0, _classnames2.default)(classes.w3Top, classes.w3Black) },\n          _react2.default.createElement(\n            \"div\",\n            { className: classes.w3Bar },\n            _react2.default.createElement(\n              _Grid2.default,\n              {\n                container: true,\n                spacing: 1,\n                alignItems: \"center\",\n                justify: \"center\",\n                direction: \"row\"\n              },\n              _react2.default.createElement(\n                _Grid2.default,\n                { item: true, xs: 10 },\n                _react2.default.createElement(\n                  _Grid2.default,\n                  {\n                    container: true,\n                    spacing: 1,\n                    alignItems: \"flex-start\",\n                    justify: \"center\",\n                    direction: \"row\"\n                  },\n                  externalHeaderLinks.map(function (title) {\n                    return _react2.default.createElement(\n                      _Grid2.default,\n                      { item: true, style: { textAlign: \"center\" }, xs: 2 },\n                      _react2.default.createElement(NavButton, _extends({\n                        key: title\n                      }, _this2.props, {\n                        title: title,\n                        onClick: _this2.handleLogOut\n                      }))\n                    );\n                  })\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return HeaderComponent;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: { attempted: false, result: \"\" },\n    mobile: state.mobile\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    resetAuthentication: function resetAuthentication() {\n      dispatch((0, _actions.resetAuth)());\n    }\n  };\n};\n\nvar HeaderNav = exports.HeaderNav = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)(HeaderComponent));\n\nHeaderComponent.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/HeaderNav/HeaderNav.js?");

/***/ }),

/***/ "./src/client/components/navigation/HeaderNav/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/navigation/HeaderNav/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _HeaderNav = __webpack_require__(/*! ./HeaderNav */ \"./src/client/components/navigation/HeaderNav/HeaderNav.js\");\n\nObject.defineProperty(exports, \"HeaderNav\", {\n  enumerable: true,\n  get: function get() {\n    return _HeaderNav.HeaderNav;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/navigation/HeaderNav/index.js?");

/***/ }),

/***/ "./src/client/components/navigation/Loading.js":
/*!*****************************************************!*\
  !*** ./src/client/components/navigation/Loading.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Loading = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLoading = __webpack_require__(/*! react-loading */ \"react-loading\");\n\nvar _reactLoading2 = _interopRequireDefault(_reactLoading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LoadingComponent = function LoadingComponent(props) {\n  var isImage = props.isImage,\n      loading = props.loading;\n  // isImage then\n  // check loading for style application\n  // if loading show else don't\n  // else showStyle\n\n  var showStyle = {\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    flexDirection: \"column\"\n  };\n\n  var noStyle = { display: \"none\", visbility: \"hidden\" };\n\n  var isImageStyle = loading ? showStyle : noStyle;\n  return _react2.default.createElement(\n    \"div\",\n    { className: props.classname },\n    _react2.default.createElement(\n      \"div\",\n      { style: isImage ? isImageStyle : showStyle },\n      _react2.default.createElement(\n        \"h1\",\n        null,\n        \"Loading\"\n      ),\n      _react2.default.createElement(_reactLoading2.default, { type: \"spin\", color: \"#000\", delay: 0 })\n    )\n  );\n};\n\nvar Loading = exports.Loading = LoadingComponent;\n\n//# sourceURL=webpack:///./src/client/components/navigation/Loading.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNav.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNav.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MobileNav = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _actions = __webpack_require__(/*! ../../../actions */ \"./src/client/actions/index.js\");\n\nvar _Navigator = __webpack_require__(/*! ./MobileNavComponents/Navigator */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/Navigator.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  reg: {\n    marginRight: \"2rem\"\n  },\n  link: {\n    fontSize: \"3rem\"\n  },\n  navContainer: {\n    position: \"fixed\",\n    top: \"0\",\n    width: \"100%\",\n    height: \"8rem\",\n    paddingTop: \".25rem\",\n    zIndex: \"100\"\n  },\n  unadorned: {}\n};\n\nvar MobileHeaderComponent = function (_React$Component) {\n  _inherits(MobileHeaderComponent, _React$Component);\n\n  function MobileHeaderComponent(props) {\n    _classCallCheck(this, MobileHeaderComponent);\n\n    var _this = _possibleConstructorReturn(this, (MobileHeaderComponent.__proto__ || Object.getPrototypeOf(MobileHeaderComponent)).call(this, props));\n\n    _this.handleRedirect = _this.handleRedirect.bind(_this);\n    return _this;\n  }\n\n  _createClass(MobileHeaderComponent, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _ref.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"handleRedirect\",\n    value: function handleRedirect() {\n      /* eslint-disable */\n      var _props = this.props,\n          history = _props.history,\n          resetAuthentication = _props.resetAuthentication;\n\n      this.props.loc.pathname = \"/login\";\n      resetAuthentication();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _props2 = this.props,\n          loc = _props2.loc,\n          history = _props2.history,\n          classes = _props2.classes;\n\n      return _react2.default.createElement(\n        \"nav\",\n        { className: classes.navContainer },\n        _react2.default.createElement(_Navigator.Navigator, { loc: loc, history: history })\n      );\n    }\n  }]);\n\n  return MobileHeaderComponent;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth,\n    mobile: state.mobile\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    resetAuthentication: function resetAuthentication() {\n      dispatch((0, _actions.resetAuth)());\n    }\n  };\n};\n\nvar ConnectedMobileNav = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)(MobileHeaderComponent));\n\nvar MobileNav = exports.MobileNav = ConnectedMobileNav;\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNav.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/ContactUs.js":
/*!*************************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/ContactUs.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ContactUs = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SVG = function SVG(_ref) {\n  var _ref$fill = _ref.fill,\n      fill = _ref$fill === undefined ? \"#000\" : _ref$fill,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className,\n      _ref$viewBox = _ref.viewBox,\n      viewBox = _ref$viewBox === undefined ? \"-3 0 23 23\" : _ref$viewBox;\n  return _react2.default.createElement(\n    \"svg\",\n    {\n      width: 85,\n      viewBox: viewBox,\n      height: 85,\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"svg-icon \" + (className || \"\"),\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n    },\n    _react2.default.createElement(\"path\", {\n      fill: fill,\n      style: {\n        pointerEvents: \"all\"\n      },\n      d: \"M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z\"\n    })\n  );\n};\n\nvar ContactUs = exports.ContactUs = SVG;\n\nSVG.propTypes = {\n  fill: _propTypes2.default.string,\n  viewBox: _propTypes2.default.string,\n  className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/ContactUs.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Envelope.js":
/*!************************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Envelope.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Envelope = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SVG = function SVG(_ref) {\n    var _ref$style = _ref.style,\n        style = _ref$style === undefined ? {} : _ref$style,\n        _ref$fill = _ref.fill,\n        fill = _ref$fill === undefined ? '#000' : _ref$fill,\n        _ref$className = _ref.className,\n        className = _ref$className === undefined ? '' : _ref$className,\n        _ref$viewBox = _ref.viewBox,\n        viewBox = _ref$viewBox === undefined ? '0 0 25 25' : _ref$viewBox;\n    return _react2.default.createElement(\n        'svg',\n        {\n            width: 85,\n            style: style,\n            height: 85,\n            viewBox: viewBox,\n            xmlns: 'http://www.w3.org/2000/svg',\n            className: 'svg-icon ' + (className || ''),\n            xmlnsXlink: 'http://www.w3.org/1999/xlink'\n        },\n        _react2.default.createElement('path', {\n            fill: fill,\n            d: 'M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z'\n        })\n    );\n};\n\nvar Envelope = exports.Envelope = SVG;\n\nSVG.propTypes = {\n    fill: _propTypes2.default.string,\n    viewBox: _propTypes2.default.string,\n    style: _propTypes2.default.object,\n    className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Envelope.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Home.js":
/*!********************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Home.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Home = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SVG = function SVG(_ref) {\n  var _ref$fill = _ref.fill,\n      fill = _ref$fill === undefined ? \"#000\" : _ref$fill,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className,\n      _ref$viewBox = _ref.viewBox,\n      viewBox = _ref$viewBox === undefined ? \"-1 0 23 23\" : _ref$viewBox;\n  return _react2.default.createElement(\n    \"svg\",\n    {\n      width: 85,\n      style: {\n        display: \"flex\",\n        alignContent: \"center\",\n        justifyContent: \"center\"\n      },\n      height: 85,\n      viewBox: viewBox,\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"svg-icon \" + (className || \"\"),\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n    },\n    _react2.default.createElement(\"path\", {\n      fill: fill,\n      d: \"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z\"\n    })\n  );\n};\n\nvar Home = exports.Home = SVG;\n\nSVG.propTypes = {\n  fill: _propTypes2.default.string,\n  viewBox: _propTypes2.default.string,\n  className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Home.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LogOut.js":
/*!**********************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LogOut.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.LogOut = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SVG = function SVG(_ref) {\n  var _ref$fill = _ref.fill,\n      fill = _ref$fill === undefined ? \"#000\" : _ref$fill,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className,\n      _ref$viewBox = _ref.viewBox,\n      viewBox = _ref$viewBox === undefined ? \"0 0 20 20\" : _ref$viewBox;\n  return _react2.default.createElement(\n    \"svg\",\n    {\n      width: 85,\n      viewBox: viewBox,\n      style: {\n        display: \"flex\",\n        alignContent: \"center\",\n        justifyContent: \"center\"\n      },\n      height: 85,\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"svg-icon \" + (className || \"\"),\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n    },\n    _react2.default.createElement(\"path\", {\n      fill: fill,\n      style: {\n        pointerEvents: \"all\"\n      },\n      d: \"M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z\"\n    }),\n    _react2.default.createElement(\"path\", {\n      fill: fill,\n      style: {\n        pointerEvents: \"all\"\n      },\n      d: \"M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z\"\n    })\n  );\n};\n\nvar LogOut = exports.LogOut = SVG;\n\nSVG.propTypes = {\n  fill: _propTypes2.default.string,\n  viewBox: _propTypes2.default.string,\n  className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LogOut.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LoginUser.js":
/*!*************************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LoginUser.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.LoginUser = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SVG = function SVG(_ref) {\n  var _ref$style = _ref.style,\n      style = _ref$style === undefined ? {} : _ref$style,\n      _ref$fill = _ref.fill,\n      fill = _ref$fill === undefined ? \"#000\" : _ref$fill,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className,\n      _ref$viewBox = _ref.viewBox,\n      viewBox = _ref$viewBox === undefined ? \"0 0 25 25\" : _ref$viewBox;\n  return _react2.default.createElement(\n    \"svg\",\n    {\n      width: 85,\n      style: style,\n      height: 85,\n      viewBox: viewBox,\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"svg-icon \" + (className || \"\"),\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n    },\n    _react2.default.createElement(\"path\", {\n      fill: fill,\n      d: \"M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878\"\n    })\n  );\n};\n\nvar LoginUser = exports.LoginUser = SVG;\n\nSVG.propTypes = {\n  fill: _propTypes2.default.string,\n  viewBox: _propTypes2.default.string,\n  style: _propTypes2.default.object,\n  className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LoginUser.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Profile.js":
/*!***********************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Profile.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Profile = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SVG = function SVG(_ref) {\n  var _ref$fill = _ref.fill,\n      fill = _ref$fill === undefined ? \"#000\" : _ref$fill,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className,\n      _ref$viewBox = _ref.viewBox,\n      viewBox = _ref$viewBox === undefined ? \"0 0 20 20\" : _ref$viewBox;\n  return _react2.default.createElement(\n    \"svg\",\n    {\n      width: 95,\n      viewBox: viewBox,\n      style: {\n        display: \"flex\",\n        alignContent: \"center\",\n        justifyContent: \"center\"\n      },\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"svg-icon \" + (className || \"\"),\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n    },\n    _react2.default.createElement(\"path\", {\n      fill: fill,\n      d: \"M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z\"\n    })\n  );\n};\n\nvar Profile = exports.Profile = SVG;\nSVG.propTypes = {\n  fill: _propTypes2.default.string,\n  viewBox: _propTypes2.default.string,\n  className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Profile.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Telephone.js":
/*!*************************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Telephone.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Telephone = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SVG = function SVG(_ref) {\n  var _ref$style = _ref.style,\n      style = _ref$style === undefined ? {} : _ref$style,\n      _ref$fill = _ref.fill,\n      fill = _ref$fill === undefined ? \"#000\" : _ref$fill,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? \"\" : _ref$className,\n      _ref$viewBox = _ref.viewBox,\n      viewBox = _ref$viewBox === undefined ? \"0 0 25 25\" : _ref$viewBox;\n  return _react2.default.createElement(\n    \"svg\",\n    {\n      width: 85,\n      style: style,\n      height: 85,\n      viewBox: viewBox,\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"svg-icon \" + (className || \"\"),\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\"\n    },\n    _react2.default.createElement(\"path\", {\n      fill: fill,\n      d: \"M 2.56635 12.9241C 0.708307 9.55549 0 6.83983 0 5.00558C 0 3.17134 0.450658 2.64526 0.907953 2.22025C 1.36525 1.79524 3.42732 0.523908 3.77867 0.286808C 4.13002 0.0497085 5.47099 -0.41107 6.31193 0.798636C 7.15287 2.00834 8.73646 4.43718 9.82825 6.05069C 11.5415 8.33611 10.1766 9.33937 9.73572 9.94069C 8.92447 11.0472 8.45734 11.3201 8.45734 12.6788C 8.45734 14.0375 12.2545 17.8976 13.1625 18.8487C 14.0635 19.7926 17.8471 23.1094 19.0195 23.2868C 20.2002 23.4654 21.7807 22.2154 22.1168 21.8985C 23.8263 20.586 24.7912 21.581 25.5787 22.0136C 26.3661 22.4461 29.9239 24.663 31.0264 25.4103C 32.0641 26.1576 31.9992 27.3125 31.9992 27.3125C 31.9992 27.3125 29.859 30.7092 29.5996 31.1168C 29.2753 31.5924 28.4971 32 26.746 32C 24.995 32 23.1241 31.6802 18.6777 29.2349C 15.0396 27.234 11.5714 24.1009 9.75551 22.2666C 7.87475 20.4324 4.68876 16.772 2.56635 12.9241Z\"\n    })\n  );\n};\n\nvar Telephone = exports.Telephone = SVG;\n\nSVG.propTypes = {\n  fill: _propTypes2.default.string,\n  viewBox: _propTypes2.default.string,\n  style: _propTypes2.default.object,\n  className: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Telephone.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/index.js":
/*!*********************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ContactUs = __webpack_require__(/*! ./ContactUs */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/ContactUs.js\");\n\nObject.defineProperty(exports, 'ContactUs', {\n  enumerable: true,\n  get: function get() {\n    return _ContactUs.ContactUs;\n  }\n});\n\nvar _Envelope = __webpack_require__(/*! ./Envelope */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Envelope.js\");\n\nObject.defineProperty(exports, 'Envelope', {\n  enumerable: true,\n  get: function get() {\n    return _Envelope.Envelope;\n  }\n});\n\nvar _Home = __webpack_require__(/*! ./Home */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Home.js\");\n\nObject.defineProperty(exports, 'Home', {\n  enumerable: true,\n  get: function get() {\n    return _Home.Home;\n  }\n});\n\nvar _Telephone = __webpack_require__(/*! ./Telephone */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Telephone.js\");\n\nObject.defineProperty(exports, 'Telephone', {\n  enumerable: true,\n  get: function get() {\n    return _Telephone.Telephone;\n  }\n});\n\nvar _LoginUser = __webpack_require__(/*! ./LoginUser */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LoginUser.js\");\n\nObject.defineProperty(exports, 'LoginUser', {\n  enumerable: true,\n  get: function get() {\n    return _LoginUser.LoginUser;\n  }\n});\n\nvar _LogOut = __webpack_require__(/*! ./LogOut */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/LogOut.js\");\n\nObject.defineProperty(exports, 'LogOut', {\n  enumerable: true,\n  get: function get() {\n    return _LogOut.LogOut;\n  }\n});\n\nvar _Profile = __webpack_require__(/*! ./Profile */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/Profile.js\");\n\nObject.defineProperty(exports, 'Profile', {\n  enumerable: true,\n  get: function get() {\n    return _Profile.Profile;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/index.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/MobileNavComponents/Navigator.js":
/*!*************************************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/MobileNavComponents/Navigator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Navigator = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Fade = __webpack_require__(/*! react-reveal/Fade */ \"react-reveal/Fade\");\n\nvar _Fade2 = _interopRequireDefault(_Fade);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _reactSvgButtons = __webpack_require__(/*! react-svg-buttons */ \"react-svg-buttons\");\n\nvar _utils = __webpack_require__(/*! ../../../../utils */ \"./src/client/utils/index.js\");\n\nvar _actions = __webpack_require__(/*! ../../../../actions */ \"./src/client/actions/index.js\");\n\nvar _MobileIcons = __webpack_require__(/*! ./MobileIcons */ \"./src/client/components/navigation/MobileNav/MobileNavComponents/MobileIcons/index.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  menuBox: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    height: \"100%\",\n    backgroundColor: \"black\"\n  },\n  menu: {},\n  contactUs: {\n    border: \"solid #000 4px\",\n    borderRadius: \"50%\",\n    display: \"flex\",\n    alignContent: \"center\",\n    justifyContent: \"center\",\n    marginTop: \"2px\"\n  }\n};\n\nvar MorphIconBtn = function MorphIconBtn(props) {\n  return _react2.default.createElement(_reactSvgButtons.MorphIcon, {\n    onClick: props.clickFn,\n    type: props.type,\n    color: \"#000\",\n    size: props.type === \"cross\" ? 97 : 100,\n    thickness: 5\n  });\n};\n\n/*eslint-disable*/\n\nvar MobileNavigator = function (_React$Component) {\n  _inherits(MobileNavigator, _React$Component);\n\n  function MobileNavigator(props) {\n    _classCallCheck(this, MobileNavigator);\n\n    var _this = _possibleConstructorReturn(this, (MobileNavigator.__proto__ || Object.getPrototypeOf(MobileNavigator)).call(this, props));\n\n    _this.state = {\n      pressed: false,\n      navWidth: 0\n    };\n    _this.togglePress = _this.togglePress.bind(_this);\n    _this.handleRoute = _this.handleRoute.bind(_this);\n    _this.handleLogOutRoute = _this.handleLogOutRoute.bind(_this);\n    return _this;\n  }\n\n  _createClass(MobileNavigator, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var width;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                width = _utils.isServer ? \"100%\" : 0.75 * (0, _utils.getScreenWidth)();\n\n                this.setState({ navWidth: width });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _ref.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"togglePress\",\n    value: function togglePress() {\n      this.setState({ pressed: !this.state.pressed });\n    }\n  }, {\n    key: \"handleRoute\",\n    value: function handleRoute(rt) {\n      var history = this.props.history;\n      // selectModal(rt);\n\n      history.push(rt);\n      this.togglePress();\n    }\n  }, {\n    key: \"handleLogOutRoute\",\n    value: function handleLogOutRoute(rt) {\n      var _props = this.props,\n          history = _props.history,\n          resetAuthentication = _props.resetAuthentication;\n\n      resetAuthentication();\n      this.togglePress();\n      history.push(rt);\n    }\n  }, {\n    key: \"getRightIcon\",\n    value: function getRightIcon() {\n      var _this2 = this;\n\n      var _props2 = this.props,\n          classes = _props2.classes,\n          loc = _props2.loc;\n\n      if (loc.pathname.includes(\"login\")) {\n        return _react2.default.createElement(\n          \"a\",\n          { href: \"/#Home\", onClick: function onClick() {\n              return _this2.handleRoute(\"/#Home\");\n            } },\n          _react2.default.createElement(_MobileIcons.Home, { fill: \"#000\", className: classes.contactUs })\n        );\n      }\n      if (loc.pathname.includes(\"dash\")) {\n        return _react2.default.createElement(\n          \"a\",\n          { href: \"/#Contact-Us\", onClick: this.handleLogOutRoute },\n          _react2.default.createElement(_MobileIcons.LogOut, { className: classes.contactUs, fill: \"#000\" })\n        );\n      } else {\n        return _react2.default.createElement(\n          \"a\",\n          { href: \"/login\", onClick: function onClick() {\n              return _this2.handleRoute(\"/login\");\n            } },\n          _react2.default.createElement(_MobileIcons.Profile, { fill: \"#000\" })\n        );\n      }\n    }\n  }, {\n    key: \"getLeftIcon\",\n    value: function getLeftIcon() {\n      var _this3 = this;\n\n      var _props3 = this.props,\n          classes = _props3.classes,\n          loc = _props3.loc;\n\n      if (loc.pathname.includes(\"login\")) {\n        return _react2.default.createElement(\n          \"a\",\n          {\n            href: \"/#Contact-Us\",\n            onClick: function onClick() {\n              return _this3.handleRoute(\"/#Contact-Us\");\n            }\n          },\n          _react2.default.createElement(_MobileIcons.ContactUs, { className: classes.contactUs, fill: \"#000\" })\n        );\n      }\n      if (loc.hash.includes(\"Contact\")) {\n        return _react2.default.createElement(\n          \"a\",\n          { href: \"/#Home\", onClick: function onClick() {\n              return _this3.handleRoute(\"/#Home\");\n            } },\n          _react2.default.createElement(_MobileIcons.Home, { fill: \"#000\" })\n        );\n      }\n      if (loc.pathname.includes(\"dash\")) {\n        return _react2.default.createElement(\n          \"a\",\n          { href: \"/#Home\", onClick: this.handleLogOutRoute },\n          _react2.default.createElement(_MobileIcons.LogOut, { fill: \"#000\" })\n        );\n      } else {\n        return _react2.default.createElement(\n          \"a\",\n          {\n            href: \"/#Contact-Us\",\n            onClick: function onClick() {\n              return _this3.handleRoute(\"/#Contact-Us\");\n            }\n          },\n          _react2.default.createElement(_MobileIcons.ContactUs, { className: classes.contactUs, fill: \"#000\" })\n        );\n      }\n    }\n  }, {\n    key: \"getMenu\",\n    value: function getMenu() {\n      var pressed = this.state.pressed;\n      var classes = this.props.classes;\n\n      var type = pressed ? \"cross\" : \"bars\";\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        this.getLeftIcon(),\n        _react2.default.createElement(MorphIconBtn, { clickFn: this.togglePress, type: type }),\n        this.getRightIcon()\n      );\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _props4 = this.props,\n          classes = _props4.classes,\n          loc = _props4.loc;\n      var _state = this.state,\n          pressed = _state.pressed,\n          navWidth = _state.navWidth;\n\n      var type = pressed ? \"cross\" : \"bars\";\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.menuBox },\n        _react2.default.createElement(\n          _Fade2.default,\n          { bottom: true, collapse: true, when: pressed },\n          _react2.default.createElement(\n            \"div\",\n            {\n              className: classes.menu,\n              style: {\n                width: navWidth + \"px\",\n                marginTop: \".4rem\"\n              }\n            },\n            this.getMenu()\n          )\n        ),\n        !pressed && _react2.default.createElement(MorphIconBtn, { clickFn: this.togglePress, type: type })\n      );\n    }\n  }]);\n\n  return MobileNavigator;\n}(_react2.default.Component);\n/*eslint-enable*/\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    resetAuthentication: function resetAuthentication() {\n      dispatch((0, _actions.resetAuth)());\n    },\n    selectModal: function selectModal(modalName) {\n      dispatch((0, _actions.selectModal)(modalName));\n    }\n  };\n};\n\nvar ConnectedNavigator = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)(MobileNavigator));\n\nvar Navigator = exports.Navigator = ConnectedNavigator;\n\nMobileNavigator.propTypes = {\n  classes: _propTypes2.default.object,\n  resetAuthentication: _propTypes2.default.func,\n  loc: _propTypes2.default.object,\n  history: _propTypes2.default.object\n};\n\nMorphIconBtn.propTypes = {\n  clickFn: _propTypes2.default.func,\n  type: _propTypes2.default.string\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/MobileNavComponents/Navigator.js?");

/***/ }),

/***/ "./src/client/components/navigation/MobileNav/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/navigation/MobileNav/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _MobileNav = __webpack_require__(/*! ./MobileNav */ \"./src/client/components/navigation/MobileNav/MobileNav.js\");\n\nObject.defineProperty(exports, 'MobileNav', {\n  enumerable: true,\n  get: function get() {\n    return _MobileNav.MobileNav;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/navigation/MobileNav/index.js?");

/***/ }),

/***/ "./src/client/components/navigation/Navigator.js":
/*!*******************************************************!*\
  !*** ./src/client/components/navigation/Navigator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Navigator = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _MobileNav = __webpack_require__(/*! ./MobileNav */ \"./src/client/components/navigation/MobileNav/index.js\");\n\nvar _HeaderNav = __webpack_require__(/*! ./HeaderNav */ \"./src/client/components/navigation/HeaderNav/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Navigator = exports.Navigator = function Navigator(props) {\n  return props.mobile ? _react2.default.createElement(_MobileNav.MobileNav, props) : _react2.default.createElement(_HeaderNav.HeaderNav, props);\n};\n\n//# sourceURL=webpack:///./src/client/components/navigation/Navigator.js?");

/***/ }),

/***/ "./src/client/components/navigation/index.js":
/*!***************************************************!*\
  !*** ./src/client/components/navigation/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Navigator = __webpack_require__(/*! ./Navigator */ \"./src/client/components/navigation/Navigator.js\");\n\nObject.defineProperty(exports, 'Navigator', {\n  enumerable: true,\n  get: function get() {\n    return _Navigator.Navigator;\n  }\n});\n\nvar _Loading = __webpack_require__(/*! ./Loading */ \"./src/client/components/navigation/Loading.js\");\n\nObject.defineProperty(exports, 'Loading', {\n  enumerable: true,\n  get: function get() {\n    return _Loading.Loading;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/components/navigation/index.js?");

/***/ }),

/***/ "./src/client/pages/HomePage/HomePage.js":
/*!***********************************************!*\
  !*** ./src/client/pages/HomePage/HomePage.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HomePage = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _common = __webpack_require__(/*! ../../components/common */ \"./src/client/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  bg: {\n    height: \"40rem\",\n    border: \"dotted blue 2px\"\n  }\n};\n\nvar HomePageComponent = function HomePageComponent(props) {\n  return _react2.default.createElement(\n    \"div\",\n    { style: { width: \"100%\", height: \"100%\", marginTop: \"8rem\" } },\n    _react2.default.createElement(_common.Image, {\n      showSpinner: false,\n      src: \"https://res.cloudinary.com/dbfv0bfmw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1573858024/AEOVJABS.jpg\"\n    })\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    mobile: state.mobile\n  };\n};\n\nvar ConnectedHomePage = (0, _reactRedux.connect)(mapStateToProps, null)(HomePageComponent);\n\nvar HomePage = exports.HomePage = {\n  component: (0, _styles.withStyles)(styles)(ConnectedHomePage)\n};\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/HomePage/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/HomePage/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _HomePage = __webpack_require__(/*! ./HomePage */ \"./src/client/pages/HomePage/HomePage.js\");\n\nObject.defineProperty(exports, \"HomePage\", {\n  enumerable: true,\n  get: function get() {\n    return _HomePage.HomePage;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/index.js?");

/***/ }),

/***/ "./src/client/pages/VoicePage/Transcriber.js":
/*!***************************************************!*\
  !*** ./src/client/pages/VoicePage/Transcriber.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.TranscriberComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Transcriber = function (_Component) {\n  _inherits(Transcriber, _Component);\n\n  function Transcriber(props) {\n    _classCallCheck(this, Transcriber);\n\n    var _this = _possibleConstructorReturn(this, (Transcriber.__proto__ || Object.getPrototypeOf(Transcriber)).call(this, props));\n\n    var compatible = true;\n    _this.recognition = null;\n    _this.wordTranscriptions = props.data || {};\n    _this.state = {\n      recognized: \"\",\n      transcribed: \"\",\n      compatible: compatible,\n      isRecording: false\n    };\n    return _this;\n  }\n\n  _createClass(Transcriber, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // if (this.props.dataPath) {\n      //   const xhr = new XMLHttpRequest();\n      //   xhr.open(\"get\", this.props.dataPath, true);\n      //   xhr.onreadystatechange = () => {\n      //     if (xhr.readyState === 4) {\n      //       if (xhr.status === 200) {\n      //         this.wordTranscriptions = JSON.parse(xhr.responseText);\n      //       } else {\n      //         console.log(\"error\");\n      //       }\n      //     }\n      //   };\n      //   xhr.send();\n      // }\n      this.setupRecognition();\n    }\n  }, {\n    key: \"transcribe\",\n    value: function transcribe(recognized) {\n      var _this2 = this;\n\n      // check if the whole string is in the dictionary\n      var noSpaces = recognized.replace(/\\s/g, \"\").toUpperCase();\n      if (this.wordTranscriptions[noSpaces]) {\n        if (this.props.wrapTokens) {\n          return this.props.wrapTokens.replace(\"%s\", this.wordTranscriptions[noSpaces]);\n        } else {\n          return this.wordTranscriptions[noSpaces];\n        }\n      }\n\n      // check words\n      var buffer = [];\n      recognized.split(\" \").forEach(function (word) {\n        if (!word) {\n          buffer.push(\" \");\n          return;\n        }\n        var wordUpper = word.toUpperCase();\n\n        // check if word is in the dictionary\n        var transcribed = _this2.wordTranscriptions[wordUpper];\n\n        // if all uppercase, it's probably an acronym\n        if (!transcribed && word === wordUpper) {\n          transcribed = \"\";\n          for (var i = 0; i < word.length; i++) {\n            // append the transcription for each letter-word\n            transcribed += _this2.wordTranscriptions[word.charAt(i)] || word.charAt(i);\n          }\n        }\n\n        // wrap known tokens\n        if (transcribed && _this2.props.wrapTokens) {\n          console.log(\"wrapping tokens\", transcribed, _this2.props.wrapTokens);\n          transcribed = _this2.props.wrapTokens.replace(\"%s\", transcribed);\n        }\n\n        // wrap unknown tokens\n        if (!transcribed && _this2.props.wrapUnknown) {\n          console.log(\"wrapping unknown\", word, _this2.props.wrapUnknown);\n          word = _this2.props.wrapUnknown.replace(\"<\", \"&lt;\").replace(\">\", \"&gt;\").replace(\"%s\", word);\n        }\n\n        buffer.push(transcribed || word);\n      });\n      return buffer.join(\" \");\n    }\n  }, {\n    key: \"setupRecognition\",\n    value: function setupRecognition() {\n      var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();\n      recognition.continuous = true;\n      recognition.interimResults = false;\n      recognition.onend = this.finishRecognition.bind(this);\n      recognition.onresult = this.finishRecognition.bind(this);\n      recognition.lang = \"en-US\";\n      recognition.interimResults = false;\n      recognition.maxAlternatives = 5;\n      this.recognition = recognition;\n    }\n  }, {\n    key: \"beginRecognition\",\n    value: function beginRecognition() {\n      if (this.state.isRecording) {\n        this.finishRecognition();\n      } else {\n        this.recognition.onresult = this.processRecognition.bind(this);\n        this.recognition.onend = this.finishRecognition.bind(this);\n        this.recognition.start();\n        this.setState({\n          isRecording: true\n        });\n      }\n    }\n  }, {\n    key: \"processRecognition\",\n    value: function processRecognition(event) {\n      console.log(\"processrecog\", event.results);\n\n      if (!event.results) {\n        this.setState({\n          recognized: \"error\",\n          transcribed: \"\"\n        });\n      } else {\n        var recognized = event.results[event.results.length - 1][0].transcript;\n        var transcribed = this.transcribe(recognized);\n        this.setState({\n          recognized: event.results.length === 1 ? recognized : this.state.recognized + recognized,\n          transcribed: event.results.length === 1 ? transcribed : this.state.transcribed + transcribed\n        });\n\n        if (this.props.onTranscription) {\n          this.props.onTranscription.call(null, recognized, transcribed);\n        }\n      }\n    }\n  }, {\n    key: \"finishRecognition\",\n    value: function finishRecognition(event) {\n      this.recognition.onend = this.recognition.onresult = null;\n      this.recognition.stop();\n      this.setState({\n        isRecording: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var buttonText = this.state.compatible ? !this.state.isRecording ? this.props.textStart : this.props.textStop : \"Your browser does not support Speech Recognition.\";\n      return _react2.default.createElement(\n        \"button\",\n        {\n          disabled: !this.state.compatible,\n          onClick: this.beginRecognition.bind(this)\n        },\n        buttonText\n      );\n    }\n  }]);\n\n  return Transcriber;\n}(_react.Component);\n\nTranscriber.defaultProps = {\n  textStart: \"Start\",\n  textStop: \"Stop \",\n  textUnsupported: \"⚠ Your browser does not support Speech Recognition.\",\n  wrapTokens: \"\",\n  wrapUnknown: \"\"\n};\n\nvar TranscriberComponent = exports.TranscriberComponent = Transcriber;\n\n//# sourceURL=webpack:///./src/client/pages/VoicePage/Transcriber.js?");

/***/ }),

/***/ "./src/client/pages/VoicePage/VoiceComponent.js":
/*!******************************************************!*\
  !*** ./src/client/pages/VoicePage/VoiceComponent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.VoiceComponent = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Transcriber = __webpack_require__(/*! ./Transcriber */ \"./src/client/pages/VoicePage/Transcriber.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Voice = function (_React$Component) {\n  _inherits(Voice, _React$Component);\n\n  function Voice(props) {\n    _classCallCheck(this, Voice);\n\n    var _this = _possibleConstructorReturn(this, (Voice.__proto__ || Object.getPrototypeOf(Voice)).call(this, props));\n\n    _this.state = {\n      recognized: \"\",\n      transcribed: \"\",\n      result: \"\",\n      clicked: false\n    };\n    return _this;\n  }\n\n  _createClass(Voice, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      // this.props.fetchResult();\n    }\n  }, {\n    key: \"onTranscription\",\n    value: function onTranscription(source, recognized, transcribed) {\n      this.setState({\n        recognized: this.state.recognized + recognized,\n        transcribed: this.state.transcribed + transcribed\n      });\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.setState({\n        recognized: \"\",\n        transcribed: \"\"\n      });\n    }\n  }, {\n    key: \"renderResults\",\n    value: function renderResults() {\n      var medBot = this.props.medBot;\n\n      var resArr = medBot.result.split(\",\");\n      console.log(\"resArr\", resArr);\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        \"Result:\",\n        resArr.map(function (res) {\n          return res.length > 0 ? _react2.default.createElement(\n            \"li\",\n            null,\n            \" \" + res\n          ) : \"\";\n        })\n      );\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      // this.setState({ clicked: true });\n      this.props.submitMedBotQuery(this.state.transcribed);\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      // this.setState({result: this.props.result})\n      this.setState({\n        recognized: this.state.recognized,\n        transcribed: this.state.transcribed,\n        result: this.props.result\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\"br\", null),\n          _react2.default.createElement(\n            \"h6\",\n            { style: { color: \"red\", paddingTop: \".5em\" } },\n            \"Voice entry mode active now\"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { style: { border: \"2px solid\" } },\n            _react2.default.createElement(\n              \"p\",\n              null,\n              _react2.default.createElement(\n                \"label\",\n                null,\n                \"Recognized:\"\n              ),\n              _react2.default.createElement(\n                \"span\",\n                { className: \"result\" },\n                this.state.recognized\n              )\n            ),\n            _react2.default.createElement(\"br\", null),\n            \" \",\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(\n              \"p\",\n              null,\n              _react2.default.createElement(\n                \"label\",\n                null,\n                \"Transcribed:\"\n              ),\n              _react2.default.createElement(\"span\", {\n                className: \"result\",\n                dangerouslySetInnerHTML: { __html: this.state.transcribed }\n              })\n            ),\n            _react2.default.createElement(\"br\", null),\n            \" \",\n            _react2.default.createElement(\"br\", null)\n          ),\n          _react2.default.createElement(\"br\", null),\n          _react2.default.createElement(\n            \"div\",\n            {\n              style: { height: \"30px\", display: \"flex\", flexDirection: \"row\" }\n            },\n            _react2.default.createElement(\n              \"div\",\n              {\n                style: { width: \"auto\", color: \"white\", fontFamily: \"Open Sans\" }\n              },\n              _react2.default.createElement(_Transcriber.TranscriberComponent, {\n                id: \"phoneticTrans\",\n                dataPath: \"/cmudict.json\",\n                textStart: \"\\uD83C\\uDFA4 Begin Phonetic Transcription\",\n                wrapUnknown: \"<%s>\",\n                onTranscription: this.onTranscription.bind(this, \"phonetic\")\n              })\n            ),\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(\n              \"ul\",\n              null,\n              _react2.default.createElement(\n                \"button\",\n                {\n                  onClick: this.handleClick.bind(this),\n                  style: {\n                    backgroundColor: \"#5163EF\",\n                    marginLeft: \"40px\",\n                    width: \"90px\",\n                    color: \"white\",\n                    fontFamily: \"Open Sans\",\n                    border: \"solid grey 2px\",\n                    textAlign: \"center\"\n                  }\n                },\n                \"Submit Query\"\n              ),\n              _react2.default.createElement(\n                \"button\",\n                {\n                  style: {\n                    marginLeft: \"40px\",\n                    width: \"auto\",\n                    color: \"black\",\n                    fontFamily: \"Open Sans\",\n                    textAlign: \"center\"\n                  },\n                  onClick: this.clear.bind(this)\n                },\n                \"\\xD7 Clear\"\n              ),\n              _react2.default.createElement(\"br\", null)\n            )\n          ),\n          _react2.default.createElement(\"br\", null),\n          _react2.default.createElement(\"br\", null)\n        ),\n        !this.props.medBot.result ? null : this.renderResults()\n      );\n    }\n  }]);\n\n  return Voice;\n}(_react2.default.Component);\n\nfunction mapStateToProps(state) {\n  return { result: state.result, medBot: state.medBot };\n}\n\nvar VoiceComponent = exports.VoiceComponent = (0, _reactRedux.connect)(mapStateToProps, actions)(Voice);\n\n//# sourceURL=webpack:///./src/client/pages/VoicePage/VoiceComponent.js?");

/***/ }),

/***/ "./src/client/pages/VoicePage/VoicePage.js":
/*!*************************************************!*\
  !*** ./src/client/pages/VoicePage/VoicePage.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.VoicePage = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _VoiceComponent = __webpack_require__(/*! ./VoiceComponent */ \"./src/client/pages/VoicePage/VoiceComponent.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  ref: {\n    margin: \"2rem\",\n    textDecoration: \"none\",\n    color: \"#000\",\n    paddingTop: \"2rem\"\n  },\n  section: { marginTop: \"1rem\" },\n  links: { display: \"flex\", justifyContent: \"center\", margin: \"2rem 1rem\" }\n};\n\nvar VoicePageComponent = function VoicePageComponent(props) {\n  var classes = props.classes;\n\n  return _react2.default.createElement(\n    \"section\",\n    { className: classes.section, id: \"terms\" },\n    _react2.default.createElement(_VoiceComponent.VoiceComponent, null)\n  );\n};\n\nvar VoicePage = exports.VoicePage = {\n  component: (0, _styles.withStyles)(styles)(VoicePageComponent)\n};\n\nVoicePageComponent.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\n//# sourceURL=webpack:///./src/client/pages/VoicePage/VoicePage.js?");

/***/ }),

/***/ "./src/client/pages/VoicePage/index.js":
/*!*********************************************!*\
  !*** ./src/client/pages/VoicePage/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _VoicePage = __webpack_require__(/*! ./VoicePage */ \"./src/client/pages/VoicePage/VoicePage.js\");\n\nObject.defineProperty(exports, \"VoicePage\", {\n  enumerable: true,\n  get: function get() {\n    return _VoicePage.VoicePage;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/pages/VoicePage/index.js?");

/***/ }),

/***/ "./src/client/pages/index.js":
/*!***********************************!*\
  !*** ./src/client/pages/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _HomePage = __webpack_require__(/*! ./HomePage */ \"./src/client/pages/HomePage/index.js\");\n\nObject.defineProperty(exports, \"HomePage\", {\n  enumerable: true,\n  get: function get() {\n    return _HomePage.HomePage;\n  }\n});\n\nvar _VoicePage = __webpack_require__(/*! ./VoicePage */ \"./src/client/pages/VoicePage/index.js\");\n\nObject.defineProperty(exports, \"VoicePage\", {\n  enumerable: true,\n  get: function get() {\n    return _VoicePage.VoicePage;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/pages/index.js?");

/***/ }),

/***/ "./src/client/reducers/emailReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/emailReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { result: false, message: \"\", pending: false, error: null };\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.EMAIL_SUBMIT:\n      var submitState = Object.assign({}, state);\n      submitState.pending = true;\n      return submitState;\n    case _actions.EMAIL_SUCCESS:\n      var successState = Object.assign({}, state);\n      successState.result = true;\n      successState.pending = false;\n      return successState;\n    case _actions.EMAIL_FAILED:\n      var failedState = Object.assign({}, state);\n      failedState.result = false;\n      failedState.error = \"error\";\n      return failedState;\n    default:\n      return state;\n  }\n};\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n//# sourceURL=webpack:///./src/client/reducers/emailReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _mobileReducer = __webpack_require__(/*! ./mobileReducer */ \"./src/client/reducers/mobileReducer.js\");\n\nvar _mobileReducer2 = _interopRequireDefault(_mobileReducer);\n\nvar _emailReducer = __webpack_require__(/*! ./emailReducer */ \"./src/client/reducers/emailReducer.js\");\n\nvar _emailReducer2 = _interopRequireDefault(_emailReducer);\n\nvar _medBotReducer = __webpack_require__(/*! ./medBotReducer */ \"./src/client/reducers/medBotReducer.js\");\n\nvar _medBotReducer2 = _interopRequireDefault(_medBotReducer);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  mobile: _mobileReducer2.default,\n  email: _emailReducer2.default,\n  medBot: _medBotReducer2.default,\n  form: _reduxForm.reducer\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/medBotReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/medBotReducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { pending: false, result: false, query: \"\" };\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.SUBMIT_MEDBOT_QUERY_PENDING:\n      var medBotQueryState = Object.assign({}, state);\n      medBotQueryState.pending = true;\n      return medBotQueryState;\n    case _actions.SUBMIT_MEDBOT_QUERY_COMPLETE:\n      var medBotQueryDoneState = Object.assign({}, state);\n      medBotQueryDoneState.result = action.payload;\n      return medBotQueryDoneState;\n    default:\n      return state;\n  }\n};\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n//# sourceURL=webpack:///./src/client/reducers/medBotReducer.js?");

/***/ }),

/***/ "./src/client/reducers/mobileReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/mobileReducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.RESIZE_EVENT:\n      var newState = action.payload;\n      return newState;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/mobileReducer.js?");

/***/ }),

/***/ "./src/client/utils/index.js":
/*!***********************************!*\
  !*** ./src/client/utils/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar required = exports.required = function required(value) {\n  return value ? undefined : \"Required\";\n};\n\nvar isGoodErrorMessage = function isGoodErrorMessage(str) {\n  if (str.indexOf(\"Good\") !== -1) {\n    return true;\n  } else if (str === \"This username is taken\") {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nvar isUUIDError = exports.isUUIDError = function isUUIDError(str) {\n  return str.length > 0 && isGoodErrorMessage(str);\n};\n\nvar maxLength = exports.maxLength = function maxLength(max) {\n  return function (value) {\n    return value && value.length > max ? \"Must be \" + max + \" characters or less\" : undefined;\n  };\n};\n\nvar maxLength15 = exports.maxLength15 = maxLength(15); // eslint-disable-line\n\nvar minLength = exports.minLength = function minLength(min) {\n  return function (value) {\n    return value && value.length < min ? \"Must be \" + min + \" characters or more\" : undefined;\n  };\n};\n\nvar minLength2 = exports.minLength2 = minLength(2); // eslint-disable-line\n\nvar minLength12 = exports.minLength12 = minLength(12); // eslint-disable-line\n\nvar minLength6 = exports.minLength6 = minLength(6); // eslint-disable-line\n\nvar number = exports.number = function number(value) {\n  return value && isNaN(Number(value)) ? \"Must be a number\" : undefined;\n};\n\nvar minValue = exports.minValue = function minValue(min) {\n  return function (value) {\n    return value && value < min ? \"Must be at least \" + min : undefined;\n  };\n};\n\nvar minValue13 = exports.minValue13 = minValue(13); // eslint-disable-line\n\n/*eslint-disable */\nvar email = exports.email = function email(value) {\n  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value) ? \"Invalid email address\" : undefined;\n};\n\nvar alphaNumeric = exports.alphaNumeric = function alphaNumeric(value) {\n  return value && /[^a-zA-Z0-9 ]/i.test(value) ? \"Only alphanumeric characters\" : undefined;\n};\n\nvar phoneNumber = exports.phoneNumber = function phoneNumber(value) {\n  return value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? \"Invalid phone number, must be 10 digits\" : undefined;\n};\n\nvar postData = exports.postData = function postData(url, data) {\n  // Default options are marked with *\n  return fetch(url, {\n    body: JSON.stringify(data), // must match 'Content-Type' header\n    cache: \"no-cache\", // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: \"same-origin\", // include, same-origin, *omit\n    headers: {\n      \"content-type\": \"application/json\"\n    },\n    method: \"POST\", // *GET, POST, PUT, DELETE, etc.\n    mode: \"cors\", // no-cors, cors, *same-origin\n    redirect: \"follow\", // manual, *follow, error\n    referrer: \"no-referrer\" // *client, no-referrer\n  }).then(function (response) {\n    return response.json();\n  }) // parses response to JSON\n  .catch(function (err) {\n    return console.err(err);\n  }); // eslint-disable-line\n};\n\nvar getData = exports.getData = function getData(url, data) {\n  // Default options are marked with *\n  return fetch(url, {\n    body: JSON.stringify(data), // must match 'Content-Type' header\n    cache: \"no-cache\", // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: \"same-origin\", // include, same-origin, *omit\n    headers: {\n      \"content-type\": \"application/json\"\n    },\n    method: \"GET\", // *GET, POST, PUT, DELETE, etc.\n    mode: \"cors\", // no-cors, cors, *same-origin\n    redirect: \"follow\", // manual, *follow, error\n    referrer: \"no-referrer\" // *client, no-referrer\n  }).then(function (response) {\n    return response.json();\n  }) // parses response to JSON\n  .catch(function (err) {\n    return console.err(err);\n  }); // eslint-disable-line\n};\n\nvar validateDate = exports.validateDate = function validateDate(testdate) {\n  var date_regex = /^(0[1-9]|1[0-2])\\/(0[1-9]|1\\d|2\\d|3[01])\\/(19|20)\\d{2}$/;\n  return date_regex.test(testdate);\n};\n\n// A nice helper to tell us if we're on the server\nvar isServer = exports.isServer = !(typeof window !== \"undefined\" && window.document && window.document.createElement);\n\nvar getScreenWidth = exports.getScreenWidth = function getScreenWidth() {\n  return window.innerWidth;\n};\n\nvar isMobile = exports.isMobile = function isMobile(ua) {\n  var isMobile = false;\n  if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(ua.substr(0, 4))) {\n    isMobile = true;\n  }\n  return isMobile;\n};\n\nvar isHeaderMobile = exports.isHeaderMobile = function isHeaderMobile() {\n  var isMobileBool = false;\n  if (window.innerWidth < 995) {\n    isMobileBool = true;\n  } else if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(navigator.userAgent.substr(0, 4))) {\n    isMobileBool = true;\n  }\n  return isMobileBool;\n};\n\nvar confirmValue = exports.confirmValue = function confirmValue(data) {\n  if (typeof data === \"undefined\") {\n    return \"\";\n  } else {\n    return data;\n  }\n};\n\nvar confirmString = exports.confirmString = function confirmString(str) {\n  if (typeof str === \"undefined\") {\n    return false;\n  } else if (str.length === 0) {\n    return false;\n  } else {\n    return true;\n  }\n};\n\nvar confirmAuth = exports.confirmAuth = function confirmAuth(auth) {\n  return true;\n  // const { username, result, attempted } = auth;\n  // let user = confirmString(username);\n  // let resConfirm = result === \"OK\";\n  // return user && resConfirm && attempted;\n};\n\n//# sourceURL=webpack:///./src/client/utils/index.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n  var axiosInstance = _axios2.default.create({\n    baseURL: \"http://localhost:5000\",\n    headers: { cookie: req.get(\"cookie\") || \"\" }\n  });\n\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n  return store;\n};\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _utils = __webpack_require__(/*! ../client/utils */ \"./src/client/utils/index.js\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      type: \"light\"\n    },\n    typography: {\n      useNextVariants: true\n    }\n  });\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _JssProvider2.default,\n    {\n      registry: sheetsRegistry,\n      generateClassName: generateClassName\n    },\n    _react2.default.createElement(\n      _styles.MuiThemeProvider,\n      { theme: theme, sheetsManager: new Map() },\n      _react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n          _reactRouterDom.StaticRouter,\n          { location: req.path, context: context },\n          _react2.default.createElement(\n            _react2.default.Fragment,\n            null,\n            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n          )\n        )\n      )\n    )\n  ));\n\n  var helmet = _reactHelmet.Helmet.renderStatic();\n  var css = sheetsRegistry.toString();\n  var mobile = (0, _utils.isMobile)(req.headers[\"user-agent\"]);\n\n  return \"\\n    <html>\\n      <title>LLEAP Voice Controller</title>\\n          <head>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://use.typekit.net/nex3vbe.css\\\">\\n          <link href=\\\"https://fonts.googleapis.com/css?family=Raleway:400,700,700i,800&display=swap\\\" rel=\\\"stylesheet\\\">\\n          <style>\\n               .mobileRootStyle {\\n                color: #fff;\\n                font-size: 3rem;\\n                height: 91vh;\\n                width:100%;\\n                position:fixed;\\n                top: 35;\\n                left: 0;\\n                padding: 0;\\n                margin: 3rem 0 0 0;\\n                overflow: scroll;\\n                }\\n                .regRootStyle {\\n                margin-top:3rem;\\n                background-color:#FFFFFF\\n                }\\n\\n              </style>\\n              <link rel=\\\"shortcut icon\\\" href=\\\"favicon.ico\\\">\\n                \" + helmet.title.toString() + \"\\n                \" + helmet.meta.toString() + \"\\n              </head>\\n                <body>\\n                  <style id=\\\"jss-server-side\\\">\\n                    \" + css + \"\\n                  </style>\\n                    <div id=\\\"root\\\"><nav/><div/>\" + content + \"</div>\\n                  <script>\\n                    var initialStore = \" + (0, _serializeJavascript2.default)(store.getState()) + \";\\n                    initialStore.mobile =\" + mobile + \";\\n                    window.INITIAL_STATE = initialStore;\\n                  </script>\\n                  <script src=\\\"bundle.js\\\"></script>\\n                </body>\\n          </html>\\n        \";\n};\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _cluster = __webpack_require__(/*! cluster */ \"cluster\");\n\nvar _cluster2 = _interopRequireDefault(_cluster);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nglobal.navigator = { userAgent: \"all\" };\n\nvar PORT = process.env.PORT || 3000;\n\n// if (cluster.isMaster) {\n//   // Count the machine's CPUs\n//   let cpuCount = require(\"os\").cpus().length;\n\n//   // Create a worker for each CPU\n//   for (let i = 0; i < 2; i++) {\n//     cluster.fork();\n//   }\n\n//   // Listen for dying workers\n//   cluster.on(\"exit\", function(worker) {\n//     // Replace the dead worker, we're not sentimental\n//     console.log(\"Worker %d died :(\", worker.id);\n//     cluster.fork();\n//   });\n// } else {\nvar app = (0, _express2.default)();\n\napp.use(\"/api\", (0, _expressHttpProxy2.default)(\"http://localhost:5000\", {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    return opts;\n  }\n}));\napp.use(_express2.default.static(\"public\"));\napp.get(\"*\", function (req, res) {\n  var store = (0, _createStore2.default)(req);\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0, _renderer2.default)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.send(content);\n  });\n});\n\napp.listen(PORT, function () {\n  console.log(\"Listening on port: \" + PORT);\n  // console.log(\"Worker %d running!\", cluster.worker.id);\n});\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "@date-io/date-fns/build":
/*!******************************************!*\
  !*** external "@date-io/date-fns/build" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@date-io/date-fns/build\");\n\n//# sourceURL=webpack:///external_%22@date-io/date-fns/build%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActionArea\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActionArea%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Checkbox\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Checkbox%22?");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Chip\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Chip%22?");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CircularProgress\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CircularProgress%22?");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CssBaseline%22?");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControl\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControl%22?");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControlLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControlLabel%22?");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormGroup\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormGroup%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputAdornment\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputAdornment%22?");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputLabel%22?");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/LinearProgress\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/LinearProgress%22?");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuItem%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Select\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Select%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Tooltip\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Tooltip%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/Zoom":
/*!*****************************************!*\
  !*** external "@material-ui/core/Zoom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Zoom\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Zoom%22?");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/green\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/green%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccountCircle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/AccountCircle%22?");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Check\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Check%22?");

/***/ }),

/***/ "@material-ui/icons/HelpOutlineTwoTone":
/*!********************************************************!*\
  !*** external "@material-ui/icons/HelpOutlineTwoTone" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/HelpOutlineTwoTone\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/HelpOutlineTwoTone%22?");

/***/ }),

/***/ "@material-ui/icons/PermIdentity":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PermIdentity" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/PermIdentity\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/PermIdentity%22?");

/***/ }),

/***/ "@material-ui/icons/Publish":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Publish" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Publish\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Publish%22?");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Visibility\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Visibility%22?");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/VisibilityOff\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/VisibilityOff%22?");

/***/ }),

/***/ "@material-ui/pickers":
/*!***************************************!*\
  !*** external "@material-ui/pickers" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/pickers\");\n\n//# sourceURL=webpack:///external_%22@material-ui/pickers%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cluster\");\n\n//# sourceURL=webpack:///external_%22cluster%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-event-listener":
/*!***************************************!*\
  !*** external "react-event-listener" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-event-listener\");\n\n//# sourceURL=webpack:///external_%22react-event-listener%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loading\");\n\n//# sourceURL=webpack:///external_%22react-loading%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-reveal/Fade\");\n\n//# sourceURL=webpack:///external_%22react-reveal/Fade%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-svg-buttons":
/*!************************************!*\
  !*** external "react-svg-buttons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-svg-buttons\");\n\n//# sourceURL=webpack:///external_%22react-svg-buttons%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });