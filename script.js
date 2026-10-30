
const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (
        name === "Sharanu" &&
        email === "sirgapuresharanu@gmail.com" &&
        password === "12345678"
    ) {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid name, email or password";
        message.style.color = "red";
    }
});
