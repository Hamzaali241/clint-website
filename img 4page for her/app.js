document.getElementById("cart-icon").addEventListener("click", () => {
      alert("Shopping Cart clicked!");
    });
     var cartIcon = document.getElementById("cart-icon");
    cartIcon.addEventListener("click", function() {
    alert("Shopping Cart clicked!");
  });
 function completePayment() {
    alert('✅ Payment Successful! Thank you for your order.');
  }

  // Show the perfume image (simple version)
  var query = location.search.substring(1); // Remove '?'
  var params = query.split('&');

  for (var i = 0; i < params.length; i++) {
    var pair = params[i].split('=');
    if (pair[0] === 'img') {
      var imgFile = decodeURIComponent(pair[1]);
      var img = document.createElement('img');
      img.src = './imges/' + imgFile;
      img.alt = 'Selected Perfume';
      document.getElementById('productImageContainer').appendChild(img);
      break;
    }
  }