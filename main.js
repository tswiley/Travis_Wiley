"use strict";

function validateNotEmpty(value) {
    return value.trim() !== '';
}

document.addEventListener("DOMContentLoaded", function () {
    // Load header and footer
    fetch("header.html")
        .then(response => response.text())
        .then(headerData => {
            const headerContainer = document.createElement("div");
            headerContainer.innerHTML = headerData;
            document.body.prepend(...headerContainer.childNodes);

            fetch("footer.html")
                .then(response => response.text())
                .then(footerData => {
                    const footerContainer = document.createElement("div");
                    footerContainer.innerHTML = footerData;
                    document.body.appendChild(...footerContainer.childNodes);

                    // Hamburger menu toggle code
                    const menuToggle = document.querySelector('.menu-toggle');
                    const nav = document.querySelector('.nav');
                    const closeButton = document.querySelector('.close-button');

                    menuToggle.addEventListener('click', function () {
                        nav.classList.toggle('open');
                        menuToggle.classList.toggle('open');
                    });

                    closeButton.addEventListener('click', function () {
                        nav.classList.remove('open');
                        menuToggle.classList.remove('open');
                    });
                });
        });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            // Use the Fetch API to send the form data to the server
            fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: document.getElementById('name').value,
                    phone: document.getElementById('phone').value,
                    email: document.getElementById('email-contact').value,
                    // Add other form fields as needed
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                displaySuccessMessage();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    });

    function validateForm() {
        // Add your custom validation logic here
        // For simplicity, this example just checks if the contact method is selected
        const contactMethod = document.querySelector('input[name="contact-method"]:checked');
        const contactMethodError = document.getElementById('contact-method-error');

        if (!contactMethod) {
            contactMethodError.textContent = 'Please select a contact method';
            return false;
        }

        // Clear any previous error messages
        contactMethodError.textContent = '';
        return true;
    }

    function displaySuccessMessage() {
        const formContainer = document.getElementById('contactMe');
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Thank you for contacting us. We will be in touch with you soon!';
        successMessage.classList.add('success-message');

        // Clear the form
        contactForm.reset();

        // Append the success message under the form
        formContainer.appendChild(successMessage);
    }

    // Back to top button
    var backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
