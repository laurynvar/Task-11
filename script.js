document.getElementById("add-skill").addEventListener("click", () => {
  window.location.href = "add.html";
});

const ENDPOINT = "https://melon-potent-period.glitch.me";

let data;

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    data = result;
    publishToTable(result);
  })
  .catch((error) => console.error(error));

function publishToTable() {
  const tableElement = document.getElementById("table");
  const trElement = document.createElement("tr");
  const tbodyElement = document.createElement("tbody");
  const idEle = document.createElement("td");
  const skillsEle = document.createElement("td");
  const deleteEle = document.createElement("td");
  idEle.innerHTML = id;
  skillsEle.innerHTML = skill;
  deleteEle.innerHTML = "delete";
  trElement.appendChild(idEle);
  trElement.appendChild(skillsEle);
  trElement.appendChild(deleteEle);
  tbodyElement.appendChild(trElement);

  tableElement.appendChild(tbodyElement);
}
