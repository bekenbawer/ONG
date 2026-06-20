//Menu Mobile//
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

//Fermeture auto menu//

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Humbeturger animation//

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* ========================================= */
/* FILTRE DES ACTIONS */
/* ========================================= */

const filterButtons =
document.querySelectorAll(".filter-btn");

const actionCards =
document.querySelectorAll(".action-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
        button.getAttribute("data-filter");

        actionCards.forEach(card => {

            const category =
            card.getAttribute("data-category");

            if (
                filter === "all" ||
                filter === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

/* ========================================= */
/* FORMULAIRES ONG */
/* ========================================= */

function gererFormulaire(formId, messageId) {

    const form = document.getElementById(formId);

    if (!form) return;

    form.addEventListener("submit", (e) => {

       

        const inputs = form.querySelectorAll(
            "input, textarea, select"
        );

        let valide = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valide = false;

            }

        });

        const message =
        document.getElementById(messageId);

        if (!valide) {

            message.textContent =
            "Veuillez remplir tous les champs.";

            message.style.color = "red";

            return;

        }

        message.textContent =
        "Votre demande a été envoyée avec succès.";

        message.style.color = "green";

        form.reset();

    });

}

/* Bénévole */
gererFormulaire(
    "benevole-form",
    "benevole-message"
);

/* Partenaire */
gererFormulaire(
    "partenaire-form",
    "partenaire-message"
);

/* Entreprise */
gererFormulaire(
    "entreprise-form",
    "entreprise-message"
);

/* ========================================= */
/* COMPTE À REBOURS */
/* ========================================= */

// Année, mois, jour
const eventDate =
new Date("December 31, 2026 18:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").textContent =
    days;

    document.getElementById("hours").textContent =
    hours;

    document.getElementById("minutes").textContent =
    minutes;

    document.getElementById("seconds").textContent =
    seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown")
        .innerHTML =
        "<h3>L'événement a commencé !</h3>";

    }

}, 1000);

/* ========================================= */
/* FORMULAIRE CONTACT */
/* ========================================= */

const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        

        const nom =
        document.getElementById("nom").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const sujet =
        document.getElementById("sujet").value.trim();

        const message =
        document.getElementById("message").value.trim();

        const result =
        document.getElementById("contact-result");

        /* Champs vides */

        if(
            nom === "" ||
            email === "" ||
            sujet === "" ||
            message === ""
        ){

            result.textContent =
            "Veuillez remplir tous les champs.";

            result.style.color = "red";

            return;
        }

        /* Email valide */

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){

            result.textContent =
            "Veuillez saisir une adresse email valide.";

            result.style.color = "red";

            return;
        }

        /* Nom minimum */

        if(nom.length < 3){

            result.textContent =
            "Le nom doit contenir au moins 3 caractères.";

            result.style.color = "red";

            return;
        }

        /* Message minimum */

        if(message.length < 10){

            result.textContent =
            "Votre message est trop court.";

            result.style.color = "red";

            return;
        }

        result.textContent =
        "Merci ! Votre message a été envoyé avec succès.";

        result.style.color = "green";

        contactForm.reset();

    });

}

/* ========================================= */
/* NEWSLETTER FOOTER */
/* ========================================= */

const newsletterForm =
document.querySelector(".newsletter-form");

const newsletterMessage =
document.getElementById("newsletter-message");

if(newsletterForm){

    newsletterForm.addEventListener("submit", (e) => {

        

        const email =
        newsletterForm.querySelector("input").value.trim();

        if(email === ""){

            newsletterMessage.textContent =
            "Veuillez entrer votre adresse email.";

            newsletterMessage.style.color = "red";

            return;
        }

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){

            newsletterMessage.textContent =
            "Veuillez entrer une adresse email valide.";

            newsletterMessage.style.color = "red";

            return;
        }

        newsletterMessage.textContent =
        "Merci pour votre inscription !";

        newsletterMessage.style.color = "white";

        newsletterForm.reset();

    });

}
