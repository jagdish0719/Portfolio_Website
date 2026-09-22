/* =====================================================
   PORTFOLIO CONFIGURATION
===================================================== */

const CONFIG = {

    /* =================================================
       WHATSAPP
    ================================================== */

    whatsappNumber: "916379210462",

    whatsappMessage:
        "Hi Jagadeesan, I came across your portfolio and would like to discuss a project.",


    /* =================================================
       YOUR EMAIL

       IMPORTANT:
       Replace this with your actual email address.
    ================================================== */

    email: "jagdish.work.in@gmail.com",


    /* =================================================
       EMAILJS
    ================================================== */

    emailJS: {

        publicKey: "Y4GUUTYLnZ4qDiBG8",

        serviceID: "service_1e1farm",

        templateID: "template_3yc3061"

    },


    /* =================================================
       PROJECT URLs

       Replace these with your actual deployed URLs.
    ================================================== */

    projectLinks: [

        "",

        "",

        "",

        ""

    ]

};



/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hidden");

    }, 500);

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("open");


        const icon =
            menuToggle.querySelector("i");


        if (
            navMenu.classList.contains("open")
        ) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }
);



/* =====================================================
   CLOSE MOBILE NAVIGATION
===================================================== */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove("open");


                const icon =
                    menuToggle.querySelector("i");


                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }
        );

    });



/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;


            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }
);



/* =====================================================
   WHATSAPP
===================================================== */

function openWhatsApp() {

    const message =
        encodeURIComponent(
            CONFIG.whatsappMessage
        );


    const whatsappURL =
        `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

}



/* =====================================================
   FLOATING WHATSAPP BUTTON
===================================================== */

const whatsappButton =
    document.getElementById("whatsappButton");


if (whatsappButton) {

    whatsappButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openWhatsApp();

        }
    );

}



/* =====================================================
   CONTACT WHATSAPP LINK
===================================================== */

const whatsappText =
    document.getElementById("whatsappText");


if (whatsappText) {

    whatsappText.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openWhatsApp();

        }
    );

}



/* =====================================================
   EMAIL DISPLAY
===================================================== */

const emailLink =
    document.getElementById("emailLink");


if (emailLink) {

    emailLink.textContent =
        CONFIG.email;


    emailLink.href =
        `mailto:${CONFIG.email}`;

}



/* =====================================================
   EMAILJS INITIALIZATION
===================================================== */

const EMAILJS_PUBLIC_KEY = "Y4GUUTYLnZ4qDiBG8";
const EMAILJS_SERVICE_ID = "service_1e1farm";
const EMAILJS_TEMPLATE_ID = "template_3yc3061";

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");

const submitButton =
    document.getElementById("submitButton");


function countAlphanumeric(value) {

    return (value.match(/[A-Za-z0-9]/g) || []).length;

}


function isValidName(value) {

    if (value.length < 2 || value.length > 50) {
        return false;
    }

    return /^[A-Za-z](?:[A-Za-z .'-]*[A-Za-z.'])?$/.test(value);

}


function isValidEmail(value) {

    if (!value || value.length > 254) {
        return false;
    }

    if (/\s/.test(value)) {
        return false;
    }

    return /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/.test(value);

}


function isValidSubject(value) {

    if (value.length < 5 || value.length > 100) {
        return false;
    }

    if (countAlphanumeric(value) < 3) {
        return false;
    }

    return /^[A-Za-z0-9 .,'\-+&:/()!?#"@]+$/.test(value);

}


function isValidMessage(value) {

    if (value.length < 20 || value.length > 1500) {
        return false;
    }

    return countAlphanumeric(value) >= 10;

}


const formFields = contactForm
    ? [
        {
            input: document.getElementById("fromName"),
            error: document.getElementById("fromNameError"),
            counter: document.getElementById("fromNameCount"),
            max: 50,
            validate: isValidName,
            invalidMessage: "Please enter a valid name (2–50 characters)."
        },
        {
            input: document.getElementById("replyTo"),
            error: document.getElementById("replyToError"),
            counter: document.getElementById("replyToCount"),
            max: 254,
            validate: isValidEmail,
            invalidMessage: "Please enter a valid email address."
        },
        {
            input: document.getElementById("subject"),
            error: document.getElementById("subjectError"),
            counter: document.getElementById("subjectCount"),
            max: 100,
            validate: isValidSubject,
            invalidMessage: "Subject must be between 5 and 100 characters."
        },
        {
            input: document.getElementById("message"),
            error: document.getElementById("messageError"),
            counter: document.getElementById("messageCount"),
            max: 1500,
            validate: isValidMessage,
            invalidMessage: "Message must be between 20 and 1500 characters."
        }
    ]
    : [];


function updateCounter(field) {

    if (!field.counter) {
        return;
    }

    const length = field.input.value.length;

    field.counter.textContent =
        length + " / " + field.max;

    field.counter.classList.toggle(
        "at-limit",
        length >= field.max
    );

}


function clearFieldState(field) {

    field.input.classList.remove("is-invalid", "is-valid");
    field.error.textContent = "";
    field.error.classList.remove("is-error", "is-valid");

}


function showFieldError(field, message) {

    field.input.classList.add("is-invalid");
    field.input.classList.remove("is-valid");
    field.error.textContent = "⚠ " + message;
    field.error.classList.add("is-error");
    field.error.classList.remove("is-valid");

}


function showFieldValid(field) {

    field.input.classList.add("is-valid");
    field.input.classList.remove("is-invalid");
    field.error.textContent = "✓ Valid";
    field.error.classList.add("is-valid");
    field.error.classList.remove("is-error");

}


function validateField(field, { showValid = false } = {}) {

    const trimmed = field.input.value.trim();

    if (!field.validate(trimmed)) {
        showFieldError(field, field.invalidMessage);
        return false;
    }

    if (showValid) {
        showFieldValid(field);
    } else {
        clearFieldState(field);
    }

    return true;

}


function resetFormValidation() {

    formFields.forEach(field => {
        field.interacted = false;
        clearFieldState(field);
        updateCounter(field);
    });

}


if (contactForm) {

    formFields.forEach(field => {

        field.interacted = false;

        updateCounter(field);


        field.input.addEventListener("input", () => {

            updateCounter(field);

            if (field.interacted) {
                validateField(field, { showValid: true });
            }

        });


        field.input.addEventListener("blur", () => {

            field.input.value = field.input.value.trim();
            field.interacted = true;
            updateCounter(field);
            validateField(field, { showValid: true });

        });

    });


    let isSending = false;


    contactForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();

            if (isSending) {
                return;
            }


            formFields.forEach(field => {
                field.input.value = field.input.value.trim();
                updateCounter(field);
            });


            let firstInvalid = null;

            formFields.forEach(field => {

                field.interacted = true;

                const isValid = validateField(
                    field,
                    { showValid: true }
                );

                if (!isValid && !firstInvalid) {
                    firstInvalid = field.input;
                }

            });


            if (firstInvalid) {

                firstInvalid.focus();

                firstInvalid.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                return;

            }


            /* =========================================
               BUTTON LOADING
            ========================================= */

            const buttonText =
                submitButton.querySelector("span");


            isSending = true;

            buttonText.textContent =
                "Sending...";


            submitButton.disabled = true;


            formStatus.textContent = "";



            /* =========================================
               EMAILJS SEND
            ========================================= */

            try {

                const response =
                    await emailjs.sendForm(

                        EMAILJS_SERVICE_ID,

                        EMAILJS_TEMPLATE_ID,

                        contactForm

                    );


                console.log(
                    "EmailJS Success:",
                    response
                );


                formStatus.textContent =
                    "✓ Message sent successfully!";

                formStatus.style.color =
                    "#4ade80";


                contactForm.reset();

                resetFormValidation();


            } catch (error) {

                console.error("EmailJS ERROR:", error);
                console.error("Status:", error?.status);
                console.error("Text:", error?.text);


                formStatus.textContent =
                    "✕ Message failed. Please try again.";

                formStatus.style.color =
                    "#f87171";

            }


            /* =========================================
               RESET BUTTON
            ========================================= */

            buttonText.textContent =
                "Send Message";


            submitButton.disabled = false;

            isSending = false;

        }
    );

}



/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}



/* =====================================================
   PROJECT LINKS
===================================================== */

const projectButtons =
    document.querySelectorAll(
        ".project-link[data-project]"
    );


projectButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();


            const projectIndex =
                Number(
                    button.dataset.project
                );


            const projectURL =
                CONFIG.projectLinks[
                    projectIndex
                ];


            if (!projectURL) {

                alert(
                    "Add this project's deployed URL in script.js first."
                );

                return;

            }


            window.open(
                projectURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

});



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .workflow-card, .contact-form-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );


                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});