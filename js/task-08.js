const formEl = document.querySelector(".login-form");

const onSubmit = (event) => {
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені!");
  }
  const userDetails = {
    email: email.value,
    password: password.value,
  };

  console.log(userDetails);
  event.currentTarget.reset();
}

formEl.addEventListener("submit", onSubmit);
