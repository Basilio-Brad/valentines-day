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
});

const fn_redirectToPage = () => {
  window.location.href = "flowers.html";
};
