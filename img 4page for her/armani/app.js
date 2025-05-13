 function completePayment() {
      alert('✅ Payment Successful! Thank you for your order.');
    }

    // Show the perfume image from URL query string
    const params = new URLSearchParams(window.location.search);
    const imgFile = params.get("img");
    
    if (imgFile) {
      const img = document.createElement("img");
      img.src = "./img/" + decodeURIComponent(imgFile);  // Assuming images are in the 'img' folder
      img.alt = "Selected Perfume";
      document.getElementById("productImageContainer").appendChild(img);
      
      // Debugging: Log the image source to check if it's correct
      console.log("Image Source: ", img.src);
    } else {
      console.log("No image parameter found in URL.");
    }
     document.getElementById("cart-icon").addEventListener("click", () => {
      alert("Shopping Cart clicked!");
    });