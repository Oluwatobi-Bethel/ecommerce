
document.addEventListener("DOMContentLoaded", function () {

    const mainImage = document.querySelector(".hero-image img");
    const thumbnails = document.querySelectorAll(".product-images img");
    const quantityDisplay = document.getElementById("quantity");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const addToCartBtn = document.getElementById("add-to-cart");
    const cartCount = document.getElementById("cart-count");
  
    let quantity = 0;
  
  

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        mainImage.src = this.src.replace("-thumbnail", "");
    });
});
    
    // Increase quantity
    document.getElementById("increase").addEventListener("click", function() {
      quantity++;
      quantityDisplay.textContent = quantity;
    });
  
    // Decrease quantity
    document.getElementById("decrease").addEventListener("click", function() {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });
  
    // Add to Cart
    addToCartBtn.addEventListener("click", function () {
      if (quantity > 0) {
        cartCount.textContent = quantity; 
        cartCount.style.display = "inline-block"; 
        localStorage.setItem("cartQuantity", quantity); 
      }
    });
  
    // Load cart quantity on page load
    let savedQuantity = localStorage.getItem("cartQuantity");
    if (savedQuantity) {
      cartCount.textContent = savedQuantity;
      cartCount.style.display = "inline-block";
    }
  });
  