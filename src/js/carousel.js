

export const products = (data) => {

  for (var i=0; i<data.products.length; i++){

        let image = ' <img src=" ' + data.products[i].largeImage + ' "> ';
        let priceDisplay = '<p class="price">' + data.products[i].regularPrice +'</p>';
        let brand = '<p class="brand">'+ data.products[i].manufacturer + '</p>';
        let name = '<p class="name">' + data.products[i].name +'</p>';

        let sku = data.products[i].sku;
        let price = data.products[i].regularPrice;


        let cartButton = '<button class="addtocart" data-sku="'+sku+'" data-price="'+price+'"> ADD TO CART </button>';

        var createDiv = $("<div></div>");
        createDiv.addClass('singleproduct');
        $('#content').append(createDiv);
        createDiv.append(brand + image+  name  + priceDisplay + cartButton);



  };
}


// <div><button class="addtocart" data-sku="sku" data-price="price"> ADD TO CART </button></div>
// '<div><button class="addtocart" data-sku="'+sku+'" data-price="'+price+'"> ADD TO CART </button></div>'
