var currentDate = new Date();
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

const form = document.getElementById("newsletter");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Here you can add code to validate the email address, for example:
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  //   // Send the email address to your server for processing
  //   // ...

  //   // Clear the form and show a success message
  //   emailInput.value = '';
  //   alert('Thanks for subscribing!');
  // });

  const data = {
    email_address: email,
    status: "subscribed",
  };
  fetch("https://us21.api.mailchimp.com/3.0/lists/9fd4c1b894", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "auth c84008870b6dc410bf9f34595571307a-us21",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        emailInput.value = "";
        alert("Thanks for subscribing!");
      } else {
        alert(
          "There was an error processing your subscription. Please try again later."
        );
      }
    })
    .catch((error) => {
      alert(
        "There was an error processing your subscription. Please try again later."
      );
    });
});
