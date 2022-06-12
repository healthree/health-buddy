async function deleteClient(event) {
  event.preventDefault();
  const doctors_id = document.getElementById("doctors_id").textContent;
  console.log(doctors_id);
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/clients/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(`/doctor/${doctors_id}`);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteClient);
