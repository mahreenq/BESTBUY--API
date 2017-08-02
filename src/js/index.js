/*import Cart from "./cart";*/

import request from "./bestbuy";
import {products} from "./carousel";
//import {productutil} from "./productutil";
import {productutilee} from "./productutil";



export default class App{
	constructor(){
		this.baseUrl = "https://api.bestbuy.com/v1/products";
		this.url = "https://api.bestbuy.com/v1/products";
		this.initBBCall();
		this.eventHandler ();
		this.addtocart();
		//this.atc();
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
	let atc= new productutilee;
	atc.addtocart();
}




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
