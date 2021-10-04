let headerTextContent = document.getElementById('header-text').textContent;
let footerTextContent = document.getElementById('footer-text').textContent;

let headerText = document.getElementById('header-text');
let footerText = document.getElementById('footer-text');

headerText.textContent = footerTextContent;
footerText.textContent = headerTextContent;
