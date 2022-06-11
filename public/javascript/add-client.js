async function newClient(event) {
  event.preventDefault();
  const doctors_id = document.getElementById("doctors_id").textContent;
  const name = document.querySelector('input[name="Name"]').value;
  const date_of_birth = document.querySelector(
    'input[name="Date_of_Birth"]'
  ).value;
  const symptoms = document.querySelector('input[name="symptoms"]').value;
  const date_of_enrollment = new Date().toISOString().slice(0, 10);

  const response = await fetch(`/api/clients`, {
    method: "POST",
    body: JSON.stringify({
      name,
      date_of_birth,
      date_of_enrollment,
      symptoms,
      doctors_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/doctor/${doctors_id}`);
    alert("You have been added to this doctor!");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-post-form").addEventListener("submit", newClient);
