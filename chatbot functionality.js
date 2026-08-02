console.log("Chatbot JavaScript is working!");


function sendQuickMessage(message) {

    const chat =
        document.getElementById("chatMessages");

    if (message === "rooms") {

        chat.innerHTML += `
            <p>
                🤖 We have Deluxe Rooms,
                Executive Rooms and Luxury Suites.
            </p>
        `;

    }

    else if (message === "prices") {

        chat.innerHTML += `
            <p>
                🤖 Deluxe Room: ₹5,000 per night.
                <br>
                Executive Room: ₹7,000 per night.
                <br>
                Luxury Suite: ₹10,000 per night.
            </p>
        `;

    }

}


function sendMessage() {

    const input =
        document.getElementById("userInput");

    const message =
        input.value.toLowerCase().trim();

    const chat =
        document.getElementById("chatMessages");


    if (message === "") {

        return;

    }


    // Show user message

    chat.innerHTML += `
        <p>
            👤 ${message}
        </p>
    `;


    // Room question

    if (
        message.includes("room") ||
        message.includes("rooms")
    ) {

        chat.innerHTML += `
            <p>
                🤖 We offer Deluxe Rooms,
                Executive Rooms and Luxury Suites.
            </p>
        `;

    }


    // Price question

    else if (
        message.includes("price") ||
        message.includes("cost") ||
        message.includes("rate")
    ) {

        chat.innerHTML += `
            <p>
                🤖 Our prices are:
                <br>
                🛏️ Deluxe Room: ₹5,000/night
                <br>
                🏨 Executive Room: ₹7,000/night
                <br>
                👑 Luxury Suite: ₹10,000/night
            </p>
        `;

    }


    // Booking question

    else if (
        message.includes("book") ||
        message.includes("booking")
    ) {

        chat.innerHTML += `
            <p>
                🤖 You can book your room here:
                <br><br>
                <a href="booking.html">
                    📅 Book Now
                </a>
            </p>
        `;

    }


    // Default response

    else {

        chat.innerHTML += `
            <p>
                🤖 Sorry, I don't understand.
                Try asking about rooms,
                prices or booking.
            </p>
        `;

    }


    // Clear input

    input.value = "";

}