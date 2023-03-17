const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const btn = document
  .getElementById("submit-btn")
  .addEventListener("click", checkUsername);
const btn2 = document
  .getElementById("sub-btn")
  .addEventListener("click", checkUsername2);

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function checkUsername(event) {
  console.log("checkUsername() called");
  event.preventDefault();
  let usernameInput = document.getElementById("username");
  let username = usernameInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/check_username.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ username: username }));
  console.log(username);
  console.log(JSON.stringify({ username: username }));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      let response = JSON.parse(xhr.responseText);
      let errorMessage = document.querySelector(".usiror");
      if (response.exists == true) {
        console.log("Username exists!");
        errorMessage.style.display = "block";
      } else {
        console.log("Username does not exist!");
        errorMessage.style.display = "none";
        document
          .getElementById("form1")
          .setAttribute("action", "php/login.php");
        document.getElementById("form1").submit();
        console.log("form submitted");
      }
    }
  };
}

function checkUsername2(event) {
  console.log("checkUsername2() called");
  event.preventDefault();
  let usernameInput = document.getElementById("username1");
  let username = usernameInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/check_username.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ username: username }));
  console.log(username);
  console.log(JSON.stringify({ username: username }));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      let response = JSON.parse(xhr.responseText);
      let errorMessage = document.querySelector(".userir");
      if (response.exists == true) {
        console.log("Username correct!");
        errorMessage.style.display = "none";
        checkPassword(event);
      } else {
        console.log("Username wrong!");
        errorMessage.style.display = "block";
      }
    }
  };
}

function checkPassword(event) {
  console.log("checkPassword() called");
  event.preventDefault();
  let passwordInput = document.getElementById("password");
  let password = passwordInput.value;
  let usernameInput = document.getElementById("username1");
  let username = usernameInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/check_password.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ password: password, username: username }));
  console.log(username);
  console.log(JSON.stringify({ password: password }));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      let response = JSON.parse(xhr.responseText);
      let errorMessage = document.querySelector(".useror");
      if (response.exists == true) {
        console.log("Password wrong!");
        errorMessage.style.display = "block";
      } else {
        console.log("Password correct!");
        errorMessage.style.display = "none";
        document
          .getElementById("form2")
          .setAttribute("action", "php/login.php");
        document.getElementById("form2").submit();
        console.log("form submitted");
      }
    }
  };
}
