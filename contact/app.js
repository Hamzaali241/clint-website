  // ✅ Firebase Config (as is)
  var firebaseConfig = {
    apiKey: "AIzaSyBgVPBgrGOfRUGkQtZ6ysXqvdQyNFA9tMk",
    authDomain: "clientwebsite-2c18c.firebaseapp.com",
    databaseURL: "https://clientwebsite-2c18c-default-rtdb.firebaseio.com",
    projectId: "clientwebsite-2c18c",
    storageBucket: "clientwebsite-2c18c.appspot.com",
    messagingSenderId: "546871602316",
    appId: "1:546871602316:web:59a99fd548e555ac201fa9",
    measurementId: "G-FZJY6MPDHS"
  };

  // ✅ Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var contactRef = firebase.database().ref("contacts");

  // ✅ Shopping cart icon alert
  var cartIcon = document.getElementById("cart-icon");
  cartIcon.addEventListener("click", function () {
    alert("Shopping Cart clicked!");
  });

  // ✅ Form submission handler
  var contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // ✅ Create formData object
    var formData = {
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      phone: contactForm.phone.value.trim(),
      message: contactForm.message.value.trim()
    };

    // ✅ Print object in console
    console.log("User Input (as object):", formData);

    // ✅ Save to Firebase
    contactRef.push(formData, function (error) {
      if (error) {
        console.error("Error sending message:", error);
        alert("Something went wrong. Please try again.");
      } else {
        alert("Message sent successfully!");
        contactForm.reset(); // Clear the form
      }
    });
  });