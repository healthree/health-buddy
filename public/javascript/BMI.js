async function getBMI(event) {
  event.preventDefault();
  const height = document.querySelector('input[name="BMI-height"]').value;
  const weight = document.querySelector('input[name="BMI-weight"]').value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "59cd09d6cbmshcc26c724137479dp1a8087jsn04bcf6ec1cd1",
      "X-RapidAPI-Host": "body-mass-index-bmi-calculator.p.rapidapi.com",
    },
  };

  fetch(
    `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      var result = document.getElementById("result-content");
      var header = document.getElementById("BMIheader");
      header.setAttribute("class", "card text-bg-light mb-3 ml-5");
      if (25 > data.bmi && data.bmi > 18.5) {
        header.classList.replace("text-bg-light", "text-bg-success");
      } else if (30 > data.bmi && data.bmi > 25) {
        header.classList.replace("text-bg-light", "text-bg-warning");
      } else if (data.bmi > 30) {
        header.classList.replace("text-bg-light", "text-bg-danger");
      }
      result.textContent = data.bmi.toFixed(2);
    })
    .catch((err) => console.error(err));
}

document.querySelector(".BMI-form").addEventListener("submit", getBMI);
