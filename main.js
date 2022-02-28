"use strict";

// makes a country into HTML element
function getCountry(country) {
    let div = document.createElement("div");
    div.classList.add("country");
    div.id = country.id;

    div.innerHTML = `
    <div> ${country.country}</div>
    <div> ${country.capital}</div>
    <div> ${country.inhabitant}</div>
    <div> ${country.language}</div>
    <button type ="button">Remove</button>


    `;

    return div;
}

// Makes an array of countries into HTML
function getCountries (countries){
    let countriesE = document.getElementById ("Countries");
    countriesE.innerHTML = "";

    for (let country of countries){
        let countryE = getCountry (country);
        countriesE.appendChild (countryE);
    }
}

getCountries (database);