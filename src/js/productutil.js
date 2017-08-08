export class productutil{
    constructor(){


    }
    addtocart(sku,product){

      if (sessionStorage.getItem(sku)==undefined){
        sessionStorage.setItem(sku,JSON.stringify(product));
    } else {
        let oldvalue = JSON.parse(sessionStorage.getItem(sku));
        let newvalue = oldvalue;
        newvalue.qty += product.qty;

          sessionStorage.setItem(sku, JSON.stringify(newvalue));

    };

// //count items in cart
          var cartNum = document.getElementById("cartTotalItems");
          cartNum.innerHTML = sessionStorage.length;
        }


      //   updatecart(){
      //
      // };



        // removefromcart(sku, product){
        //   $(document).on('click', '.removeFromCart', function(){
        //
        //     sessionStorage.removeItem(sku);
        //
        //   })
        // }


}
