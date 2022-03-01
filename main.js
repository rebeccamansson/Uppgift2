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


// a function to make a new country
function newCountry(country, capital, inhabitant, language) {
    let Country = {
        country: country,
        capital: capital,
        inhabitant: inhabitant,
        language: language,
    };

    return Country;

}

// a function to add the new country to the database
function addNewCountryToDatabase(database, country) {
    database.push(country);
}

// a function that removes a country from the database based on its name

function removeCountry(countries, id) {
    for (let i = 0; i < countries.length; i++) {
        let country = countries[i];
        if (country.id == id) {
            countries.splice(i, 1);
            return;
        }

    }

}
// to know when the user clicks sppecific on the remove button

function onClickRemoveCountry(event) {
    let button = event.target;
    let id = button.parentElement.id;
    removeCountry(database, id);
    getCountries(database);
    handlerOnRemoveButton();

}

// a function that adds a click eventlistener to all the removebuttons

function handlerOnRemoveButton() {
    let buttons = document.querySelectorAll(".country button");

    for (let button of buttons) {
        button.addEventListener("click", onClickRemoveCountry);
    }
}


getCountries(database);
handlerOnRemoveButton();

