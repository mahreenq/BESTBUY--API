
import request from "./bestbuy";
import {products} from "./carousel";
import {productutil} from "./productutil";
//import {removeItem} from "./removeitem";


export default class App{
	constructor(){
		this.baseUrl = "https://api.bestbuy.com/v1/products";
		this.url = "https://api.bestbuy.com/v1/products";
		this.initBBCall();
		this.eventHandler ();
		this.addtocart();
		this.updatecart();
		//this.removefromcart();

	}
 	eventHandler(){

		$(".category").on('click', (e) => {
		$('#content').show(1);

			let val = e.target.value;
			this.url = this.baseUrl + val ;
			this.initBBCall();

});
}


addtocart(){
        $(document).on('click', '.addtocart', function(){
						let sku = $(this).data("sku");
						let product = {
							price : $(this).data("price"),
							qty : 1,

						}

            let atc= new productutil;
            atc.addtocart(sku,product);
						atc.removefromcart(sku);



        });
    }

		updatecart(sku, product){
			$(document).on('click', '.addtocart', function(){
			sessionStorage.getItem(sku,product)

			            let allkeys = "";
			            let item = "";
			            let cartobj ="";
			            let itemsincart ="";
			            let priceincart="";
			            $('#popup').empty();

			for (let i=0; i<sessionStorage.length; i++){

				    allkeys = sessionStorage.key(i);

				    item = sessionStorage.getItem(allkeys);
				    cartobj = JSON.parse(item);
				    itemsincart =  cartobj.qty;
				    priceincart = cartobj.price * itemsincart;

				    var createDiv = $("<div></div>");
				    createDiv.addClass('singleCartItem');
				    $('#popup').append(createDiv);
				    createDiv.append('SKU:'+allkeys+'   QUANTITY:'+itemsincart+'   TOTAL:'+priceincart + '<button class="removeFromCart"> REMOVE </button>');

			}


		});
		}


		// removefromcart(sku){
		// 	$(document).on('click', '.removeFromCart', function(){
		// 		sessionStorage.getItem(sku);
		// 		sessionStorage.removeItem(sku);
		//
		// 	})
		// }



	initBBCall () {
		request({url:this.url, api:"8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			$('#content').empty();

			products(data);
		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	}
}
let x = new App;



$('#mainpage').click();
