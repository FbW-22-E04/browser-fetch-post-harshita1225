// The following line makes sure your styles are included in the project. Don't remove this.
//import "../styles/main.scss";
//import "babel-polyfill";

// \/ All of your javascript should go here \/

const form = document.getElementById("submit-form");
const submit = document.querySelector(".btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("message");
const checkbox = document.getElementById("checkbox");

async function handleClick(e) {
  e.preventDefault();

  console.log("handle click");

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    msg: msg.value,
    checkbox: checkbox.value,
  };

  console.log("data ==>", data);

  const settings = {
    method: "POST",
    body: JSON.stringify(data),
    header: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      settings
    );

    const responseJson = await response.json();
    console.log("JSON response ==>", responseJson);

    if (response.status === 201)
      alert("Thank you. Your profile has been saved");
  } catch (error) {
    console.log("something went wrong", error.message);
  }
}

submit.addEventListener("click", handleClick);
