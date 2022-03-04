"use strict";

// makes a country into HTML element
function getCountry(country) {
    let div = document.createElement("div");
    div.classList.add("country");
    div.id = country.id;

    div.innerHTML = `
    <li> ${country.country} </li> 
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

        handlerOnRemoveButton();
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

// a function that removes a country from the database based on its id

function removeCountry(countries, id) {
    for (let i = 0; i < countries.length; i++) {
        let country = countries[i];
        if (country.id == id) {
            confirm(`Are you sure you want to remove ${country.country}?`);
            countries.splice(i, 1);
            return;
        }

    }

}
// to know when the user clicks specific on the remove button

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

// a function when the user fill in the form
function writeInCountry(event) {

    event.preventDefault();

    let country = document.getElementById("country").value;
    let capital = document.getElementById("capital").value;
    let inhabitant = Number(document.getElementById("inhabitant").value);
    let language = document.getElementById("language").value;

    // alerts if the user doesent fill in all the information
    if (country == "") {
        return alert("Fill in the country please.")
    }

    else if (capital == "") {
        return alert("Fill in the capital please.")
    }

    else if (inhabitant == 0) {
        return alert("Fill in the inhabitant please.")
    }

    else if (language == "") {
        return alert("Fill in the language please.")
    }

    // the new countries ids
    let Country = newCountry(country, capital, inhabitant, language);

    if (database.length = database.length) {
        Country.id = database[database.length - 1].id + 1;
    }

    else {
        Country.id = 1;
    }

    addNewCountryToDatabase(database, Country);
    getCountries(database);

    // empty all the form fields
    let form = document.getElementById("fillincountry");
    form.reset();

}

// a functions that adds click eventlostener to the add button
function handlerOnAddButton() {
    let form = document.getElementById("fillincountry");
    form.addEventListener("submit", writeInCountry);
}

// returns all countries based on the country
function getCountrybyCountry(countries, country) {
    let countryByCountry = [];
    for (let Country of countries) {
        if (Country.country.toLowerCase() == country.toLowerCase()) {
            countryByCountry.push(Country);
        }
    }
    return countryByCountry;
}

// returns all countries based on the capital
function getCountrybyCapital(countries, capital) {
    let countryByCapital = [];
    for (let Country of countries) {
        if (Country.capital.toUpperCase() == capital.toUpperCase()) {
            countryByCapital.push(Country);
        }
    }
    return countryByCapital;
}

//  a function that filter country by country
function filterCountryByCountry(event) {
    event.preventDefault();
    let country = document.getElementById("filtercountry").value;
    let countries = getCountrybyCountry(database, country)
    getCountries(countries);

    // I prefer to empty the fields
    let filter = document.getElementById("filterbycountry");
    filter.reset();
}

//  a function that filter country by country
function filterCountryByCapital(event) {
    event.preventDefault();
    let capital = document.getElementById("filtercapital").value;
    let countries = getCountrybyCapital(database, capital)
    getCountries(countries);
    // I prefer to empty the fields
    let filter = document.getElementById("filterbycapital");
    filter.reset();
}

// a function so you can see all countries again
function showAllClick() {
    document.getElementById("filtercountry").value = "";
    document.getElementById("filtercapital").value = "";
    getCountries(database);

}

// adds eventlistener "submit" and "click" to the filters and show all button
function handlerOnFilter() {
    let countryF = document.getElementById("filterbycountry");
    let capitalF = document.getElementById("filterbycapital");
    let showAllButton = document.getElementById("showallcountries");

    countryF.addEventListener("submit", filterCountryByCountry);
    capitalF.addEventListener("submit", filterCountryByCapital);
    showAllButton.addEventListener("click", showAllClick);
}

// Initialize the page
getCountries(database);
handlerOnAddButton();
handlerOnFilter();


