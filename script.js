// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const mainImage = document.querySelector(".hero-image img");
    const thumbnails = document.querySelectorAll(".product-images img");
    const quantityDisplay = document.getElementById("quantity");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const addToCartBtn = document.getElementById("add-to-cart");
    const cartCount = document.getElementById("cart-count");
  
    let quantity = 0;
  
    // Thumbnail Image Switcher
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        mainImage.src = this.src; // Change main image
        thumbnails.forEach((img) => img.classList.remove("active"));
        this.classList.add("active"); // Highlight active image
      });
    });
  
    // Increase quantity
    increaseBtn.addEventListener("click", function () {
      quantity++;
      quantityDisplay.textContent = quantity;
    });
  
    // Decrease quantity
    decreaseBtn.addEventListener("click", function () {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });
  
    // Add to Cart
    addToCartBtn.addEventListener("click", function () {
      if (quantity > 0) {
        cartCount.textContent = quantity; // Update cart count
        cartCount.style.display = "inline-block"; // Show cart count
        localStorage.setItem("cartQuantity", quantity); // Save to local storage
      }
    });
  
    // Load cart quantity on page load
    let savedQuantity = localStorage.getItem("cartQuantity");
    if (savedQuantity) {
      cartCount.textContent = savedQuantity;
      cartCount.style.display = "inline-block";
    }
  });
  