import { personel } from "./personelApi.js";

console.log(personel.results);

const box = document.querySelector(".box-container");
box.innerHTML = personel.results
  .map((person) => {
    return `
    <div class=box>
    <div class="icon"> <img class=personImg src=${person.picture.large} /> </div>
      <h1 class="title">${person.name.first}  ${person.name.last}</h1>
      <p class="personelInfo"> birth date :
        ${person.dob.date}, email : ${person.email}
      </p>
      </div>
      `;
  })
  .join("");
