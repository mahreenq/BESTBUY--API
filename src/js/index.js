
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
						atc.removefromcart(sku,product);
        });
    }


	// removefromcart(sku, product){
	// 	$(document).on('click', '.removeFromCart', function(){
	// 		let sku = $(this).data("sku");
	// 		let product = {
	// 			price : $(this).data("price"),
	// 			qty : 1,
	// 		}
	// 		sessionStorage.removeItem(sku);
	//
	// 	})
	// }

	initBBCall () {
		//console.log(this.url);
		request({url:this.url, api:"8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			$('#content').empty();

			products(data);
			//productutil(data);
		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	}
}
let x = new App;



$('#mainpage').click();
