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
function getCountries(countries) {
    let countriesE = document.getElementById("countries");
    countriesE.innerHTML = "";

    for (let country of countries) {
        let countryE = getCountry(country);
        countriesE.appendChild(countryE);
    }
}


// Made a function to make a new country
function newCountry(country, capital, inhabitant, language) {
    let Country = {
        country: country,
        capital: capital,
        inhabitant: inhabitant,
        language: language,
    };

    return Country;

}

// Made a function to add the new country to the database
function addNewCountryToDatabase (database,country){
database.push(country);
}


 getCountries(database);