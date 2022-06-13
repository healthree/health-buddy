async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("input[id = 'username']").value;
  const email = document.querySelector("input[id = 'email']").value;
  const password = document.querySelector("input[id = 'password']").value;
  console.log(username + email + password);

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
