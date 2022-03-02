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

// a function that removes a country from the database based on its id

function removeCountry(countries, id) {
    for (let i = 0; i < countries.length; i++) {
        let country = countries[i];
        if (country.id == id) {
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

function writeInCountry(event) {

    event.preventDefault();

    let country = document.getElementById("country").value;
    let capital = document.getElementById("capital").value;
    let inhabitant = Number(document.getElementById("inhabitant").value);
    let language = document.getElementById("language").value;

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


    let Country = newCountry(country, capital, inhabitant, language);
    Country.id = database[database.length - 1].id + 1;

    addNewCountryToDatabase(database, Country);
    getCountries(database);
    

    let form = document.getElementById("fillincountry");
    form.reset();

}

function handlerOnAddButton() {
    let form = document.getElementById("fillincountry");
    form.addEventListener("submit", writeInCountry);
}

function getCountrybyCountry(countries, country) {
    let countryByCountry = [];
    for (let Country of countries) {
        if (Country.country.toLowerCase()== country.toLowerCase()) {
            countryByCountry.push(Country);
        }
    }
    return countryByCountry;
}

function getCountrybyCapital(countries, capital) {
    let countryByCapital = [];
    for (let Country of countries) {
        if (Country.capitaltoLowerCase() == capital.toLowerCase()) {
            countryByCapital.push(Country);
        }
    }
    return countryByCapital;
}

function filterCountryByCountry (event){
    event.preventDefault ();
    let country = document.getElementById ("filtercountry").value;
    let countries = getCountrybyCountry (database, country)
    getCountries (countries);
}

function filterCountryByCapital (event){
    event.preventDefault ();
    let capital = document.getElementById ("filtercapital").value;
    let countries = getCountrybyCapital (database, capital)
    getCountries (countries);
}

function showAllClick (){
    document.getElementById ("filtercountry").value ="";
    document.getElementById ("filtercapital").value ="";
    getCountries (database);
    
}

function handlerOnFilter (){
    let countryForm = document.getElementById ("filterbycountry");
    let capitalForm = document.getElementById ("filterbycapital");
    let showAllButton = document.getElementById ("showallcountries");

    countryForm.addEventListener ("submit", filterCountryByCountry);
    capitalForm.addEventListener ("submit", filterCountryByCapital);
    showAllButton.addEventListener ("click", showAllClick);
}

getCountry(country) ;
getCountries(database);
handlerOnAddButton();
handlerOnFilter();
handlerOnRemoveButton();

