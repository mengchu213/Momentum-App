// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function printGreetings(username) {
//   const now = new Date();
//   const timezone = timezoneSelect.value;
//   const options = {
//     hour12: true,
//     hour: "numeric",
//     timeZone: timezone
//   };
//   const timeString = now.toLocaleString("en-US", options);
//   const hours = parseInt(timeString.split(":")[0], 10);
//   let greetingText = "";
//   if (hours >= 5 && hours < 12) {
//     greetingText = "Good morning";
//   } else if (hours >= 12 && hours < 18) {
//     greetingText = "Good afternoon";
//   } else {
//     greetingText = "Good evening";
//   }
//   greeting.innerText = `${greetingText}, ${username}.`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// function onUpdateName() {
//   localStorage.removeItem(USERNAME_KEY);
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   updateButton.classList.add(HIDDEN_CLASSNAME);
//   greeting.classList.add(HIDDEN_CLASSNAME);
//   loginInput.value = "";
//   loginInput.focus();
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// const updateButton = document.querySelector("#update-btn");
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#username-input");

// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, username);
//     const timezone = timezoneSelect.value;
//     printGreetings(username, timezone);
//     updateButton.classList.remove(HIDDEN_CLASSNAME);
//   });
//   loginInput.focus();
// } else {
//   const savedTimezone = localStorage.getItem("timezone");
//   printGreetings(savedUsername, savedTimezone);
//   updateButton.classList.remove(HIDDEN_CLASSNAME);
// }

// updateButton.addEventListener("click", onUpdateName);