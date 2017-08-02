(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(obj.method || "GET", obj.url + '?apiKey=' + obj.api + '&format=json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function () {
            return reject(xhr.statusText);
        };
        xhr.send(obj.body);
    });
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
var products = exports.products = function products(data) {

      for (var i = 0; i < data.products.length; i++) {
            var image = ' </p> <img src=" ' + data.products[i].thumbnailImage + ' "> </p>';
            var price = '<p class="price">' + data.products[i].regularPrice;+'</p>';
            var brand = '<p class="brand">' + data.products[i].fulfilledBy;+'</p>';
            var name = '<p class="name">' + data.products[i].name;+'</p>';
            //let htmlElements = image + price + brand;

            var createDiv = $("<div></div>");
            createDiv.addClass('singleproduct', 'wallop-item');
            $('#content').append(createDiv);
            createDiv.append(brand + name + image + price);
      };
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*import Cart from "./cart";*/

var _bestbuy = require("./bestbuy");

var _bestbuy2 = _interopRequireDefault(_bestbuy);

var _carousel = require("./carousel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.baseUrl = "https://api.bestbuy.com/v1/products";
		this.url = "https://api.bestbuy.com/v1/products";
		this.initBBCall();
		this.eventHandler();
	}

	_createClass(App, [{
		key: "eventHandler",
		value: function eventHandler() {
			var _this = this;

			$("button").on('click', function (e) {
				$('#content').empty();

				var val = e.target.value;
				//console.log(e.target.value);
				_this.url = _this.baseUrl + val;
				//console.log(this.url);
				_this.initBBCall();
			});
		}
	}, {
		key: "initBBCall",
		value: function initBBCall() {
			console.log(this.url);
			(0, _bestbuy2.default)({ url: this.url, api: "8ccddf4rtjz5k5btqam84qak" }).then(function (data) {
				(0, _carousel.products)(data);
			}).catch(function (error) {
				console.log("warning Christopher Robins... Error");
				console.log(error);
			});
		}
	}]);

	return App;
}();

exports.default = App;

var x = new App();

$('#mainpage').click();

},{"./bestbuy":1,"./carousel":2}]},{},[3]);
