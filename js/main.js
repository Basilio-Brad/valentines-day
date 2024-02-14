const id_greats = document.getElementById("greats");
const fn_greats = () => {
  const var_date = new Date();
  const var_hours = var_date.getHours();
  let var_great;
  if (var_hours >= 4 && var_hours < 12) {
    var_great = "Buenos Dias";
  } else if (var_hours >= 12 && var_hours < 18) {
    var_great = "Buenas Tardes";
  } else {
    var_great = "Buenas Noches";
  }
  id_greats.innerText = var_great;
};

document.addEventListener("DOMContentLoaded", () => {
  fn_greats();
  setInterval(() => {
    fn_upadteDate();
  }, 1000);
});

const fn_redirectToPage = () => {
  window.location.href = "flowers.html";
};

const valentine_day = new Date("Feb 14, 2024 17:30:00").getTime();
const id_day = document.getElementById("day");
const id_hours = document.getElementById("hours");
const id_minutes = document.getElementById("minutes");
const id_seconds = document.getElementById("seconds");
const id_valentinesDay = document.getElementById("valentines-day");
const id_btnPlay = document.getElementById("btn-play");
const id_date = document.getElementById("date");
const fn_upadteDate = () => {
  const now = new Date().getTime();
  const distance = (valentine_day - now) / 1000;
  if (distance > 0) {
    id_valentinesDay.style.display = "none";
    id_btnPlay.style.display = "none";
    date.style.display = "block";
    const days = Math.floor(distance / 60 / 60 / 24);
    const hours = Math.floor((distance / 60 / 60) % 24);
    const minutes = Math.floor((distance / 60) % 60);
    const seconds = Math.floor(distance % 60);
    id_day.innerText = days;
    id_hours.innerText = hours;
    id_minutes.innerText = minutes;
    id_seconds.innerText = seconds;
  } else {
    id_valentinesDay.style.display = "block";
    id_btnPlay.style.display = "block";
    date.style.display = "none";
  }
};
