"use strict"


/* RENDERING HTML FOR INDIVIDUAL COFFEE CARDS */
function renderCoffeeCard(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<h3>' + coffee.roast + '</h3>';
    html += '</div>';

    return html;
}
/*LOOP THROUGH ARRAY LIST TO RENDER CARDS */
function loopCoffeeList(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffeeCard(coffees[i]);
    }
    return html;
}

function filterCoffeesByInput(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffeesArray = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffeesArray.push(coffee);
        }
    });
    tbody.innerHTML = loopCoffeeList(filteredCoffeesArray);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let newCoffeeId = 20;
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
tbody.innerHTML = loopCoffeeList(coffees);
submitButton.addEventListener('click', filterCoffeesByInput);


/* SEARCH VIA THE SEARCH BOX */
var searchCoffees = function (event) {
    event.preventDefault();
    var searchedCoffees = [];
    var searchInput = document.getElementById("searchBox").value;
    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().includes(searchInput.toUpperCase()) || coffee.roast.toUpperCase().includes(searchInput.toUpperCase())) {
            searchedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = loopCoffeeList(searchedCoffees);
}
document.getElementById('searchBox').addEventListener('keyup', searchCoffees);


var displayLRoast = function (event) {
    let lightRoastCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === 'Light') {
            lightRoastCoffees.push(coffee);
            tbody.innerHTML = loopCoffeeList(lightRoastCoffees);
        }
    })
}
document.getElementById('lightButton').addEventListener('click', displayLRoast);

var displayMRoast = function (event) {
    let mediumRoastCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === 'Medium') {
            mediumRoastCoffees.push(coffee);
            tbody.innerHTML = loopCoffeeList(mediumRoastCoffees);
        }
    })
}
document.getElementById('mediumButton').addEventListener('click', displayMRoast);

var displayDRoast = function (event) {
    let darkRoastCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === 'Dark') {
            darkRoastCoffees.push(coffee);
            tbody.innerHTML = loopCoffeeList(darkRoastCoffees);
        }
    })
}
document.getElementById('darkButton').addEventListener('click', displayDRoast);


//displays all coffees

var displayAllRoast = function (event) {
    tbody.innerHTML = loopCoffeeList(coffees);
}
document.getElementById('allButton').addEventListener('click', displayAllRoast);

var addCustomersCoffee = function (event) {
    event.preventDefault()
    let customerEnteredRoast = document.getElementById('customerRoast').value
    let customerEnteredName = document.getElementById('addYourBrew').value
    let customCoffee = {
        id: newCoffeeId++,
        name: customerEnteredName,
        roast: customerEnteredRoast
    };
    coffees.push(customCoffee);
    console.log(customerEnteredRoast)
    tbody.innerHTML = loopCoffeeList(coffees)

}
document.getElementById('submitRoast').addEventListener('click', addCustomersCoffee);
