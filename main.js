"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the header content
    fetch("header.html")
        .then(response => response.text())
        .then(headerData => {
            // Create a temporary container to hold the header content
            const headerContainer = document.createElement("div");
            headerContainer.innerHTML = headerData;

            // Append the header content to the body
            document.body.prepend(...headerContainer.childNodes);

            // Fetch and include the footer content after fetching the header
            fetch("footer.html")
                .then(response => response.text())
                .then(footerData => {
                    // Create a temporary container to hold the footer content
                    const footerContainer = document.createElement("div");
                    footerContainer.innerHTML = footerData;

                    // Append the footer content to the body
                    document.body.appendChild(...footerContainer.childNodes);
                });
        });

    // Contact Form
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

        // Validate inputs
        const isValidName = validateNotEmpty(nameInput.val());
        const isValidPhone = validateNotEmpty(phoneInput.val());
        const isValidEmail = validateEmail(emailInput.val());
        const isValidContactMethod = contactMethodInput.length > 0;
        const isValidComments = validateNotEmpty(commentsInput.val());

        // Display error messages
        displayErrorMessage(isValidName, nameError, 'Please enter your name.');
        displayErrorMessage(isValidPhone, phoneError, 'Please enter your phone number.');
        displayErrorMessage(isValidEmail, emailError, 'Please enter a valid email address.');
        displayErrorMessage(isValidContactMethod, contactMethodError, 'Please select a contact method.');
        displayErrorMessage(isValidComments, commentsError, 'Please enter your comments.');

        // Check if all inputs are valid
        if (isValidName && isValidPhone && isValidEmail && isValidContactMethod && isValidComments) {
            // Handle successful submission (you can replace this with your own logic)
            alert('Thank you for contacting us. We will reach out to you soon.');
            // Clear the form
            $('#contact-form')[0].reset();
        }
    });

    // Initialize Swiper for the project carousel
    // const swiper = new Swiper('.swiper-container', {
    //     direction: 'horizontal', // Set the direction to horizontal
    //     loop: true, // Enable loop mode for continuous sliding
    //     slidesPerView: 1, // Number of slides per view
    //     spaceBetween: 20, // Space between slides
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // });
});
