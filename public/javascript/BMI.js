console.log("step1");
async function getBMI(event) {
  console.log("step2");
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
  console.log("step3");

  fetch(
    `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("step4");
      var result = document.getElementById("result-content");
      result.textContent = data.bmi.toFixed(2);
    })
    .catch((err) => console.error(err));
}

document.querySelector(".BMI-form").addEventListener("submit", getBMI);
