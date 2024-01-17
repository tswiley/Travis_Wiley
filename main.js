"use strict";

function validateNotEmpty(value) {
    return value.trim() !== '';
}

document.addEventListener("DOMContentLoaded", function () {
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

        const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the form
        const isValid = validateForm();

        if (isValid) {
            // Display success message
            displaySuccessMessage();
            // You can also send the form data to a server using AJAX if needed
            // Example: sendFormData();
        }
    });

    function validateForm() {
        // You can add your custom validation logic here
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
        successMessage.textContent = 'Thank you for contacting Red Leg Brewing Company. We will be in touch with you soon!';
        successMessage.classList.add('success-message');
    
        // Clear the form
        contactForm.reset();
    
        // Append the success message under the form
        formContainer.appendChild(successMessage);
    }

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
