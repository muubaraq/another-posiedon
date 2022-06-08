/* 
Create an array of your team members. It should be an array of objects having their names, image (should be a link to the person's image in your image folder) you can get it from slack or anywhere track, best food, complexion, things learnt (an array of HTML, CSS …), best movie, age. Ensure you indent properly and use the proper folder structure.

*/

const teamMembers = [
    { name: "Abuhasan Mubaraq", image: "img/mubaraq.jpeg", bestFood: "French Fries & Chicken", complexion: "Fair", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "IronMan 3", age: "28" },

    { name: "Divinegift Onumajuru", image: "img/gift.jpeg", bestFood: "Rice & Vegetable Suace", complexion: "Dark", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "Money Heist", age: "25" },

    { name: "Sherif Muhammed", image: "img/sherif.jpeg", bestFood: "Yam & Egg", complexion: "Dark", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "Power", age: "19" },

    { name: "Clinton Samuel", image: "img/clinton.jpeg", bestFood: "Garri & Afang Soup", complexion: "Fair", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "The Avengers", age: "21" },

    { name: "Jimoh Segun", image: "img/jimoh.jpeg", bestFood: "Rice", complexion: "Dark", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "Baahubali", age: "25" },

    { name: "Khadijah Muhammad", image: "img/dijah.jpeg", bestFood: "Rice & Chicken", complexion: "Dark", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "The Saint", age: "21" },

    { name: "Arinola Goodness", image: "img/goodness.jpeg", bestFood: "Rice & Chicken", complexion: "Dark", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "Morbius", age: "24" },

    { name: "Nduka Samuel", image: "img/samuel.jpeg", bestFood: "Akpu & Oha Soup", complexion: "Dark", thingsLearnt: ["HTML", "CSS", "Bootstrap", "JavaScript"], bestMovie: "The Saint", age: "27" },


];


/*
Using the for each or for loop, display the names of everyone.
You can use Bootstrap or plain HTML and CSS but it should be responsive and beautiful, showing their images and their details. Add a button on the card that when clicked can alert the name of each person clicked.
*/

for (let i = 0; i < teamMembers.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    cardTitle.innerHTML = teamMembers[i].name;
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = teamMembers[i].bestFood;

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.setAttribute("src", teamMembers[i].image);
    cardImage.setAttribute("alt", teamMembers[i].name);

    let cardButton = document.createElement("button");
    cardButton.classList.add("btn", "btn-primary");
    cardButton.innerHTML = "Click Me";
    cardButton.addEventListener("click", function () {
        alert(teamMembers[i].name);
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    document.body.appendChild(card);
}
