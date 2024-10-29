document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    
    if (name.trim() === "") {
        alert("Veuillez entrer votre nom.");
        event.preventDefault();
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        event.preventDefault();
        return;
    }

    alert("Formulaire soumis avec succès !");
});