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


      //  let qtyhtml = document.getElementbyId("")
        // console.log(newvalue.qty);
        // console.log(product.price * newvalue.qty);


        // console.log(sessionStorage.getItem(product.qty));
        // console.log(sessionStorage.getItem(sku));

          let allkeys = "";
          let item = "";
          let cartobj ="";


        for (let i=0; i<sessionStorage.length; i++) {
          //console.log (sessionStorage.key(i));
          allkeys = sessionStorage.key(i);

          item = sessionStorage.getItem(allkeys);
          cartobj = JSON.parse(item);
          //console.log(cartobj);
          console.log(cartobj.qty);




        };
        sessionStorage.setItem(sku, JSON.stringify(newvalue));
         //console.log(sessionStorage.key(0));

    };



//count items in cart
          var cartNum = document.getElementById("cartTotalItems");
          cartNum.innerHTML = sessionStorage.length;
        }
}




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
