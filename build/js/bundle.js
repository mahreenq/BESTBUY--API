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

            var image = ' <img src=" ' + data.products[i].largeImage + ' "> ';
            var priceDisplay = '<p class="price">' + data.products[i].regularPrice + '</p>';
            var brand = '<p class="brand">' + data.products[i].manufacturer + '</p>';
            var name = '<p class="name">' + data.products[i].name + '</p>';

            var sku = data.products[i].sku;
            var price = data.products[i].regularPrice;

            var cartButton = '<button class="addtocart" data-sku="' + sku + '" data-price="' + price + '"> ADD TO CART </button>';

            var createDiv = $("<div></div>");
            createDiv.addClass('singleproduct');
            $('#content').append(createDiv);
            createDiv.append(brand + image + name + priceDisplay + cartButton);
      };
};

// <div><button class="addtocart" data-sku="sku" data-price="price"> ADD TO CART </button></div>
// '<div><button class="addtocart" data-sku="'+sku+'" data-price="'+price+'"> ADD TO CART </button></div>'

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bestbuy = require("./bestbuy");

var _bestbuy2 = _interopRequireDefault(_bestbuy);

var _carousel = require("./carousel");

var _productutil = require("./productutil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.baseUrl = "https://api.bestbuy.com/v1/products";
		this.url = "https://api.bestbuy.com/v1/products";
		this.initBBCall();
		this.eventHandler();
		this.addtocart();
	}

	_createClass(App, [{
		key: "eventHandler",
		value: function eventHandler() {
			var _this = this;

			$(".category").on('click', function (e) {
				$('#content').show(1);

				var val = e.target.value;
				_this.url = _this.baseUrl + val;
				_this.initBBCall();
			});
		}

		// addtocart(){
		// 	let atc= new productutil;
		// 	atc.addtocart();
		// }

	}, {
		key: "addtocart",
		value: function addtocart() {
			$(document).on('click', '.addtocart', function () {
				var sku = $(this).data("sku");
				var product = {
					price: $(this).data("price"),
					qty: 1

				};

				var atc = new _productutil.productutil();
				atc.addtocart(sku, product);
			});
		}
	}, {
		key: "initBBCall",
		value: function initBBCall() {
			//console.log(this.url);
			(0, _bestbuy2.default)({ url: this.url, api: "8ccddf4rtjz5k5btqam84qak" }).then(function (data) {
				$('#content').empty();

				(0, _carousel.products)(data);
				//productutil(data);
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

},{"./bestbuy":1,"./carousel":2,"./productutil":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var productutil = exports.productutil = function () {
  function productutil() {
    _classCallCheck(this, productutil);
  }

  _createClass(productutil, [{
    key: "addtocart",
    value: function addtocart(sku, product) {

      if (sessionStorage.getItem(sku) == undefined) {
        sessionStorage.setItem(sku, JSON.stringify(product));
      } else {
        var oldvalue = JSON.parse(sessionStorage.getItem(sku));
        var newvalue = oldvalue;
        newvalue.qty += product.qty;

        //  let qtyhtml = document.getElementbyId("")
        // console.log(newvalue.qty);
        // console.log(product.price * newvalue.qty);


        var allkeys = "";
        var item = "";
        var cartobj = "";
        var itemsincart = "";
        var priceincart = "";
        $('#popup').empty();
        //  let productnameincart ="";


        for (var i = 0; i < sessionStorage.length; i++) {
          //console.log (sessionStorage.key(i));

          allkeys = sessionStorage.key(i);

          item = sessionStorage.getItem(allkeys);
          cartobj = JSON.parse(item);
          itemsincart = cartobj.qty;
          priceincart = cartobj.price * itemsincart;

          console.log(allkeys, itemsincart, priceincart);

          var createDiv = $("<div></div>");
          createDiv.addClass('singleCartItem');
          $('#popup').append(createDiv);
          createDiv.append("SKU:" + allkeys + "            QUANTITY:" + itemsincart + "         TOTAL:$" + priceincart);

          // let popup = document.getElementById("popup");
          // popup.innerHTML = (`SKU:${allkeys}    QUANTITY:${itemsincart}   TOTAL:$${priceincart}`);
          //  alert(`SKU:${allkeys}    QUANTITY:${itemsincart}   TOTAL:$${priceincart}`);
        };
        sessionStorage.setItem(sku, JSON.stringify(newvalue));
      };

      // //count items in cart
      var cartNum = document.getElementById("cartTotalItems");
      cartNum.innerHTML = sessionStorage.length;
    }
  }]);

  return productutil;
}();

// export class productutil {
//   constructor(){
//
//   }
//
//   addtocart(){
//     $(document).on("click", ".addtocart", function (){
//
//             let price = $(this).data("price");
//             let sku = $(this).data("sku");
//             console.log(price, sku);
//             var cartNum = document.getElementById("cartTotalItems");
//             var count = cartNum.innerHTML;
//             cartNum.innerHTML = parseInt(count) +1;
//
//
//
//     });
//
//   }
// }

},{}]},{},[3]);
