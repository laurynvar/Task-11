document.getElementById("view-skills").addEventListener("click", () => {
  window.location.href = "index.html";
});

const addSkillForm = document.querySelector("#addskill-form");
addSkillForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const skillNameInput = document.querySelector("#addskill-input");
  const skillName = skillNameInput.value;
  const data = { skill: skillName };
  fetch("https://melon-potent-period.glitch.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        alert("Serverio klaida");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Įgūdis sėkmingai pridėtas:", data);
      skillNameInput.value = "";
    })
    .catch((error) => {
      console.error("Įvyko klaida:", error);
    });
});
