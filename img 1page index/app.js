 // Cart icon click
  var cartIcon = document.getElementById("cart-icon");
  if (cartIcon) {
    cartIcon.addEventListener("click", function () {
      alert("Shopping Cart clicked!");
    });
  }

  // Search icon click
  var searchIcon = document.getElementById("search-icon");
  if (searchIcon) {
    searchIcon.addEventListener("click", function () {
      alert("Search clicked!");
    });
  }

  // Toggle mobile menu
  var mobileMenuIcon = document.getElementById("mobile-menu-icon");
  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", function () {
      var menu = document.getElementById("mobile-menu");
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });
  }

  // Close menu when clicking outside
  window.addEventListener("click", function (e) {
    var menu = document.getElementById("mobile-menu");
    var icon = document.getElementById("mobile-menu-icon");
    if (menu && icon && !menu.contains(e.target) && e.target !== icon) {
      menu.style.display = "none";
    }
  });

  // Get URL parameters
  var params = new URLSearchParams(window.location.search);
  var name = params.get('cardName');
  var price = params.get('price');
  var image = params.get('image');

  console.log("Image URL:", image); // Debugging

  // Set data in HTML
  var productName = document.getElementById('product-name');
  var productPrice = document.getElementById('product-price');
  var productImage = document.getElementById('product-image');

  if (productName) productName.innerText = name;
  if (productPrice) productPrice.innerText = price;
  if (productImage) productImage.src = image;

  // Handle payment logic
  function makePayment() {
    var size = document.getElementById('size').value;
    var quantity = document.getElementById('quantity').value;

    if (quantity < 1) {
      alert("Please select a valid quantity.");
      return;
    }

    alert("Payment Successful!\nYou ordered: " + quantity + " x " + name + " (" + size + ")");
  }