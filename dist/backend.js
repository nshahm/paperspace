require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var express = __webpack_require__(1);
	var bodyParser = __webpack_require__(2);
	var route_ts_1 = __webpack_require__(3);
	var app = express();
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	route_ts_1.RegisteredRoutes.init(app);
	var serverHost = process.env.HOST || '0.0.0.0';
	var serverPort = process.env.PORT || 8080;
	var server = app.listen(serverPort, serverHost, function () {
	    var host = server.address().address;
	    var port = server.address().port;
	    console.log('Example app listening at http://%s:%s', host, port);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var profile_ts_1 = __webpack_require__(4);
	var home_ts_1 = __webpack_require__(5);
	var RegisteredRoutes = (function () {
	    function RegisteredRoutes() {
	    }
	    RegisteredRoutes.init = function (app) {
	        home_ts_1.default.init(app);
	        profile_ts_1.Profile.init(app);
	    };
	    return RegisteredRoutes;
	}());
	exports.RegisteredRoutes = RegisteredRoutes;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var Profile = (function () {
	    function Profile() {
	    }
	    Profile.init = function (app) {
	        app.get('/createuserprofile', createUserProfile);
	    };
	    return Profile;
	}());
	exports.Profile = Profile;
	var createUserProfile = function (req, res) {
	    res.send("Create user profile invoked");
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var HomeRoute = (function () {
	    function HomeRoute() {
	    }
	    HomeRoute.init = function (app) {
	        app.get('/paperspace', function (req, res) {
	            res.status(200).send('Hey, Paperspace app started....');
	        });
	    };
	    return HomeRoute;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HomeRoute;


/***/ }
/******/ ]);
//# sourceMappingURL=backend.js.map