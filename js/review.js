const data =
    JSON.parse(
        localStorage.getItem(
            "registrationData"
        )
    );


if (!data) {

    window.location.href =
        "register.html";

}



/* SCHOOL DETAILS */

document.getElementById(
    "reviewSchool"
).textContent = data.school;


document.getElementById(
    "reviewTeacher"
).textContent = data.teacher;


document.getElementById(
    "reviewEmail"
).textContent = data.email;


document.getElementById(
    "reviewPhone"
).textContent = data.phone;



/* EVENTS */

const eventsContainer =
    document.getElementById(
        "reviewEvents"
    );


data.events.forEach(event => {

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>${event.sport}</td>

        <td>${event.age}</td>

        <td>${event.quantity}</td>

        <td>
            ₹${event.amount.toLocaleString("en-IN")}
        </td>

    `;


    eventsContainer.appendChild(row);

});


document.getElementById(
    "reviewTotal"
).textContent =
    `₹${data.total.toLocaleString("en-IN")}`;



/* BACK TO EDIT */

function goBack() {

    window.location.href =
        "register.html";

}



/* CONFIRM */

function confirmRegistration() {

    const registrationId =
        "CD-" +
        new Date().getFullYear() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();


    localStorage.setItem(
        "registrationId",
        registrationId
    );


    /*
        IMPORTANT:

        This is currently the final
        front-end confirmation.

        When the Cloudflare Worker +
        D1 database is connected,
        this function will send the
        registration to the database.
    */


    localStorage.setItem(
        "registrationSubmitted",
        "true"
    );


    window.location.href =
        "success.html";

}
