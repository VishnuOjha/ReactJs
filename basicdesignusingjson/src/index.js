import "./styles.css";

const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

function age(birthYear) {
  let Age = new Date().getFullYear() - birthYear;
  if (Age < 0) {
    return "Baby";
  } else if (Age == 1) {
    return "1 year old";
  } else {
    return `${Age} years old`;
  }
}

function food(foods) {
  return `
  <h4>Foods</h4>
  <ul class="food-lists">
   ${foods.map((items) => `<li>${items}</li>`).join("")}
  </ul>
  `;
}
function petTemplate(pet) {
  return `
  <div class="wrapper">
   <img src="${pet.photo}" alt="pets image" class="pet-img"/>
  <div class="pet-info">
    <h4 class="pet-name"> ${pet.name} <span>(${pet.species})</span> </h4>
    <p class="pet-age"><strong>Age :</strong> ${age(pet.birthYear)}</p>
    ${pet.favFoods ? food(pet.favFoods) : ""}
    </div>
    </div>
  
  `;
}

document.getElementById("app").innerHTML = `
<h2 class="app-title"> Pets ${petsData.length}</h2>  
${petsData.map(petTemplate).join("")}

<p class="app-footer">These ${petsData.length} pets just added recently </p>
`;
