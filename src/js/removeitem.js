export class removeItem{
    constructor(){


    }
    removefromcart(sku,product){
			sessionStorage.getItem(sku)
			sessionStorage.removeItem(sku,product);


        };
        //  sessionStorage.setItem(sku, JSON.stringify(newvalue));



    };
