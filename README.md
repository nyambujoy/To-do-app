# To-do-app

import logoSvg from './imgs/logo.svg';
function createLogo() {
    const logoContainer = document.querySelector('.logo');

    const imgElement = document.createElement('img');
    imgElement.src = logoSvg;
    imgElement.alt = 'Logo';

    logoContainer.appendChild(imgElement);

    console.log("hello");

}

createLogo()

import logoSvg from './imgs/logo.svg';
function createLogo() {
    const logoContainer = document.querySelector('.logo');

    const globe = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    globe.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    globe.setAttribute("viewBox", "0 0 24 24");
    globe.setAttribute("height", "60px"); // Set height
    globe.setAttribute("width", "60px"); // 
    globe.setAttribute("backgroundColor", "#669bbc")
    globe.style.marginLeft = "5px";
    const globe2 = document.createElementNS("http://www.w3.org/2000/svg", "title");
    // globe2.textContent = ' delete';
    globe.appendChild(globe2);

    // Create a path element within the SVG
    const svgPathTrash = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPathTrash.setAttribute("d", "M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");
    svgPathTrash.style.fill = "#0513e0"
    globe.appendChild(svgPathTrash);

    logoContainer.append(globe)

}

createLogo()