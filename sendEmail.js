function sendMail(contactForm) {
    emailjs.send("gmail", "croatia_cruising", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "booking_inquiry": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("TALK TO YOU SOON", response);
        },
        function(error) {
            console.log("SORRY, TRY AGAIN :(", error);
        }
    );
    return false;  // To block from loading a new page
}