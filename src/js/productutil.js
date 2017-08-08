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



        removefromcart(sku){
    			$(document).on('click', '.removeFromCart', function(){
    				sessionStorage.getItem(sku);
    				sessionStorage.removeItem(sku);
            $('#popup').empty();
            $("#cartTotalItems").empty();


    			})
    		}


        // updatecart(sku, product){
        //   $(document).on('click', '.addtocart', function(){
        //   sessionStorage.getItem(sku,product)
        //
        //               let allkeys = "";
        //               let item = "";
        //               let cartobj ="";
        //               let itemsincart ="";
        //               let priceincart="";
        //               $('#popup').empty();
        //
        //   for (let i=0; i<sessionStorage.length; i++){
        //
        //         allkeys = sessionStorage.key(i);
        //
        //         item = sessionStorage.getItem(allkeys);
        //         cartobj = JSON.parse(item);
        //         itemsincart =  cartobj.qty;
        //         priceincart = cartobj.price * itemsincart;
        //
        //         var createDiv = $("<div></div>");
        //         createDiv.addClass('singleCartItem');
        //         $('#popup').append(createDiv);
        //         createDiv.append('SKU:'+allkeys+'   QUANTITY:'+itemsincart+'   TOTAL:'+priceincart + '<button class="removeFromCart"> REMOVE </button>');
        //
        //   }
        //
        //
        // });
        // }





}
