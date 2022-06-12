async function editClient(event) {
  event.preventDefault();
  const doctors_id = document.getElementById("doctors_id").textContent;
  console.log(doctors_id);
  const name = document.querySelector('textarea[id="client-name"]').value;
  const symptoms = document.querySelector('textarea[id="Symptoms"]').value;
  const medical_history = document.querySelector(
    'textarea[id="medical_history"]'
  ).value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/clients/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      symptoms,
      medical_history,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/doctor/${doctors_id}`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".edit-client").addEventListener("submit", editClient);
