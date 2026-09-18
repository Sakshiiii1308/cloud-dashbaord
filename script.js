console.log("Cloud Monitoring Dashboard loaded successfully!");

const servers = document.querySelectorAll(".server-card");

servers.forEach((server) => {
    server.addEventListener("click", () => {
        alert("You selected: " + server.querySelector("h3").textContent);
    });
});
