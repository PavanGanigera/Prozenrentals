// Load WhatsApp component
fetch("whatsapp.html")
  .then(res => res.text())
  .then(data => {
    document.querySelector("whatsapp-btn").innerHTML = data;
  })
  .catch(err => console.log("WhatsApp component loading error:", err));
