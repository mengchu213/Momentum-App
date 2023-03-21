const clock = document.querySelector("#clock");
const timezoneSelect = document.querySelector("#timezone-select");
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#username-input");
const updateButton = document.querySelector("#update-btn");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function getClock() {
  const date = new Date();
  const timezone = timezoneSelect.value;
  const options = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timezone
  };
  clock.innerText = date.toLocaleString("en-US", options);

  localStorage.setItem("timezone", timezone);

  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    printGreetings(savedUsername, timezone);
  }
}

const savedTimezone = localStorage.getItem("timezone");
if (savedTimezone) {
  timezoneSelect.value = savedTimezone;
}

getClock();
setInterval(getClock, 1000);

timezoneSelect.addEventListener("change", () => {
  getClock();
});

function onLoginSubmit(event) {
  console.log("onLoginSubmit called");
  event.preventDefault(); 
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printGreetings(username, timezoneSelect.value);
  updateButton.classList.remove(HIDDEN_CLASSNAME);
}

function printGreetings(username, timezone) {
  const now = new Date();
  const hours = now.toLocaleString("en-US", { timeZone: timezone, hour: "numeric", hour12: false }).split(":")[0];
  let greetingText = "";
  if (hours >= 5 && hours < 12) {
    greetingText = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greetingText = "Good afternoon";
  } else {
    greetingText = "Good evening";
  }
  greeting.innerText = `${greetingText}, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onUpdateName() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  updateButton.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
  loginInput.focus();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  loginInput.focus();
} else {
  printGreetings(savedUsername, savedTimezone);
  updateButton.classList.remove(HIDDEN_CLASSNAME);
}

updateButton.addEventListener("click", onUpdateName);
loginForm.addEventListener("submit", onLoginSubmit);
