const map = L.map("map").setView([43.648521, -79.525818], 13); // Coordinates for Toronto, ON

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([43.6532, -79.3832])
  .addTo(map)
  .bindPopup("Parth Panchal<br>Toronto, ON")
  .openPopup();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch("send_form_email.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("formResponse").innerHTML = data;
        this.reset();
      })
      .catch((error) => {
        document.getElementById("formResponse").innerHTML =
          "An error occurred. Please try again later.";
      });
  });
