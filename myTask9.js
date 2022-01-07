const getCountries = () => {
    console.log("Getting countries....");
    //XMLHttpRequest()
// creating the request
const xhr = new XMLHttpRequest();
//Reading the data
//METHOD, URL
xhr.open("GET", "https://restcountries.com:/v3.1/all"); //open
xhr.send(); //send
xhr.responseType = "json"; //data format

// After getting the response, print on console
xhr.onload = () => {
    const countries = xhr.response;
    //const countryNames = countries.map((country) => country.name.common);
    //console.log("Full data", countries, countryNames);
    //console.log("Full data", countries);
    
    //a. Get all the countries from Asia continent /region using Filter function
    const asianCountries = countries.filter((country) => country.region && country.region === "Asia")
          .map((country) => country.name.common);
    console.log("All the Countries from Asia Continent:", asianCountries);
    
    //b. Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesPopulation = countries
        .filter((country)=>country.population < 2_00_000)
        .map((country)=> ({name: country.name.common, population: country.population}));
    console.log("Countries with a population of less than 2 lakhs:", countriesPopulation);

    //c. Print the following details name, capital, flag using forEach function
    console.log("Details of Name, Capital, Flag:");
    countries.forEach((country) => console.log("country.name: " + country.name.common, "Capital: " + country.capital, "Flag: " + country.flag));
    
    //d. Print the total population of countries using reduce function
    const totalPopulation = countries.map((country) => country.population)
        .reduce((sum , curr) => sum + curr, 0);
    console.log("The total population of countries are:", totalPopulation);    
  
    //e. Print the country which uses US Dollars as currency
    const countryUSDollars = countries
        .filter((country) => country.currencies && country.currencies.USD)
        .map((country) => country.name.common);
        console.log("The countries use of US Dollars as currency:", countryUSDollars);
};
};
getCountries();
