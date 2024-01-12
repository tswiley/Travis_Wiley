"use strict";

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

    $('#contact-form').submit(function (event) {
        event.preventDefault();
    
        const nameInput = $('#name');
        const phoneInput = $('#phone');
        const emailInput = $('#email-contact');
        const contactMethodInput = $("input[name='contact-method']:checked");
        const commentsInput = $('#comments');
        const nameError = $('#name-error');
        const phoneError = $('#phone-error');
        const emailError = $('#email-error');
        const contactMethodError = $('#contact-method-error');
        const commentsError = $('#comments-error');
    
        const isValidName = validateNotEmpty(nameInput.val());
        const isValidPhone = validateNotEmpty(phoneInput.val());
        const isValidEmail = validateEmail(emailInput.val());
        const isValidContactMethod = contactMethodInput.length > 0;
        const isValidComments = validateNotEmpty(commentsInput.val());
    
        displayErrorMessage(isValidName, nameError, 'Please enter your name.');
        displayErrorMessage(isValidPhone, phoneError, 'Please enter your phone number.');
        displayErrorMessage(isValidEmail, emailError, 'Please enter a valid email address.');
        displayErrorMessage(isValidContactMethod, contactMethodError, 'Please select a contact method.');
        displayErrorMessage(isValidComments, commentsError, 'Please enter your comments.');
    
        if (isValidName && isValidPhone && isValidEmail && isValidContactMethod && isValidComments) {
            $('#contact-form')[0].reset();
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you for contacting us. We will reach out to you soon.';
            document.getElementById('contact-form').appendChild(successMessage);
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    

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
