// ========================================
// Grand Horizon Hotel - JAVASCRIPT
// ========================================

// ========================================
// 1. PAGE LOADED MESSAGE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

```
console.log("Grand Horizon Hotel website loaded successfully!");
```

});

// ========================================
// 2. BOOKING FORM
// ========================================

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

```
bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = bookingForm.querySelector(
        'input[placeholder="Full Name"]'
    ).value;

    const email = bookingForm.querySelector(
        'input[placeholder="Email Address"]'
    ).value;

    const checkIn = bookingForm.querySelector(
        'input[type="date"]'
    ).value;

    const room = bookingForm.querySelector(
        "select"
    ).value;

    const guests = bookingForm.querySelector(
        'input[type="number"]'
    ).value;


    // Check if all details are entered

    if (
        name === "" ||
        email === "" ||
        checkIn === "" ||
        room === "" ||
        guests === ""
    ) {

        alert("Please fill in all the booking details.");

        return;
    }


    // Show success message

    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your booking request for a " +
        room +
        " has been received.\n\n" +
        "We will contact you shortly."
    );


    // Reset form

    bookingForm.reset();

});
```

}

// ========================================
// 3. CONTACT FORM
// ========================================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

```
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector(
        "#name"
    ).value;

    const email = document.querySelector(
        "#email"
    ).value;

    const message = document.querySelector(
        "#message"
    ).value;


    // Check form fields

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert(
            "Please fill in your name, email and message."
        );

        return;
    }


    // Success message

    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your message has been sent successfully.\n\n" +
        "Our team will contact you soon."
    );


    // Reset form

    contactForm.reset();

});
```

}

// ========================================
// 4. SET MINIMUM CHECK-IN DATE
// ========================================

const checkInInput = document.querySelector(
'.booking-form input[type="date"]'
);

if (checkInInput) {

```
const today = new Date()
    .toISOString()
    .split("T")[0];

checkInInput.min = today;
```

}

// ========================================
// 5. SET MINIMUM CHECK-OUT DATE
// ========================================

const dateInputs = document.querySelectorAll(
'.booking-form input[type="date"]'
);

if (dateInputs.length >= 2) {

```
const checkIn = dateInputs[0];

const checkOut = dateInputs[1];


checkIn.addEventListener(
    "change",
    function () {

        checkOut.min = checkIn.value;

    }
);
```

}

// ========================================
// 6. CURRENT YEAR IN FOOTER
// ========================================

const footer = document.querySelector("footer");

if (footer) {

```
const year = new Date().getFullYear();

footer.innerHTML =
    "<p>© " +
    year +
    " Grand Horizon Hotel. All Rights Reserved.</p>";
```

}

// ========================================
// 7. SMOOTH SCROLLING
// ========================================

const navLinks = document.querySelectorAll(
'a[href^="#"]'
);

navLinks.forEach(function (link) {

```
link.addEventListener(
    "click",
    function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    }
);
```

});

// ========================================
// 8. WELCOME MESSAGE
// ========================================

console.log(
"Welcome to Grand Horizon Hotel!"
);
