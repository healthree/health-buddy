async function getIssues(event) {
  event.preventDefault();
  const issueId = document.querySelector('select[name="issue-Id"]').value;
  const resultcol = document.getElementById("result");
  const issuetitle = document.getElementById("result-header");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3ca2473663mshadfed96d78e1943p118f82jsnb3ea968dd263",
      "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
    },
  };

  fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/issues/${issueId}/info?language=en-gb`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      resultcol.classList.remove("invisible");
      var Description = document.getElementById("Description");
      var PossibleSymptoms = document.getElementById("PossibleSymptoms");
      var TreatmentDescription = document.getElementById(
        "TreatmentDescription"
      );
      issuetitle.textContent = data.Name;
      Description.textContent = "Description: " + data.DescriptionShort;
      PossibleSymptoms.textContent =
        "PossibleSymptoms: " + data.PossibleSymptoms;
    })
    .catch((err) => console.error(err));
}

document.querySelector(".issue-form").addEventListener("submit", getIssues);
