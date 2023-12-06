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