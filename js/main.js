// ELEMENTI DEL DOM

const cardFirst = document.getElementById("cardOne");
const cardSecond = document.getElementById("cardTwo");
const cardThird = document.getElementById("cardThree");
const cardFourth = document.getElementById("cardFour");
const cardFifth = document.getElementById("cardFive");
const cardSixth = document.getElementById("cardSix");


// ARRAY DI OGGETTI

const team = [

    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg",
    },

    {
        "name": "Angela Caroll",
        "role": "Chief editor",
        "img": "angela-caroll-chief-editor.jpg",
    },

    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "img": "walter-gordon-office-manager.jpg",
    },

    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg",
    },

    {
        "name": "Scott Estrada",
        "role": "Developer",
        "img": "scott-estrada-developer.jpg",
    },

    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg",
    },
];

// STAMPA IN CONSOLE DEI VALORI DI CIASCUN OGGETTO

// VALORI OGGETTO 1

console.log(team[0].name);
console.log(team[0].role);
console.log(team[0].img);

// VALORI OGGETTO 2

console.log(team[1].name);
console.log(team[1].role);
console.log(team[1].img);

// VALORI OGGETTO 3

console.log(team[2].name);
console.log(team[2].role);
console.log(team[2].img);

// VALORI OGGETTO 3

console.log(team[3].name);
console.log(team[3].role);
console.log(team[3].img);

// VALORI OGGETTO 4

console.log(team[4].name);
console.log(team[4].role);
console.log(team[4].img);

// VALORI OGGETTO 5

console.log(team[5].name);
console.log(team[5].role);
console.log(team[5].img);

// STAMPA DEI VALORI NEL DOM

cardOne.innerHTML = `
<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${team[0].name}</h5>
                        <p class="card-text">${team[0].role}</p>
                    </div>
                </div>`

cardTwo.innerHTML = `
<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${team[1].name}</h5>
                        <p class="card-text">${team[1].role}</p>
                    </div>
                </div>`

cardThree.innerHTML = `
<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${team[2].name}</h5>
                        <p class="card-text">${team[2].role}</p>
                    </div>
                </div>`

cardFour.innerHTML = `
<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${team[3].name}</h5>
                        <p class="card-text">${team[3].role}</p>
                    </div>
                </div>`

cardFive.innerHTML = `
<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${team[4].name}</h5>
                        <p class="card-text">${team[4].role}</p>
                    </div>
                </div>`

cardSix.innerHTML = `
<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${team[5].name}</h5>
                        <p class="card-text">${team[5].role}</p>
                    </div>
                </div>` 