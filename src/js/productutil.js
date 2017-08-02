//
// export const productutil = (data) => {
//
//
//             $(".addtocart").click(function(){
//
//                 let price = $(this).data("price");
//                 let sku = $(this).data("sku");
//                 console.log(price, sku);
//             });
//
// }



export class productutilee {
  constructor(){

  }

  addtocart(){
    $(document).on("click", ".addtocart", function (){

            let price = $(this).data("price");
            let sku = $(this).data("sku");
            console.log(price, sku);
            var cartNum = document.getElementById("cartTotalItems");
            var count = cartNum.innerHTML;
            cartNum.innerHTML = parseInt(count) +1;



    });

  }
}
