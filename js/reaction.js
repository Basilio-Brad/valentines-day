//Reproducir el audio
const playMusic = () => {
  const audio = document.getElementById("music");

  audio.play().catch((error) => {
    console.error("Error al reproducir audio:", error);
  });
};

//variables id
const id_quiero = document.getElementById("quiero");
const id_que = document.getElementById("que");
const id_decirte = document.getElementById("decirte");
const id_thanks = document.getElementById("thanks");
//estilo a los ids
id_quiero.style.visibility = "hidden";
id_que.style.visibility = "hidden";
id_decirte.style.visibility = "hidden";
id_thanks.style.display = "none";
//variables texto

const text_quiero = document.getElementById("quiero-text");
const text_que = document.getElementById("que-text");
const text_decirte = document.getElementById("decirte-text");
const text_tkm = document.getElementById("tkm-text");
const div_heart = document.getElementById("contenedor-heart");
//estilo a los textos
text_quiero.style.display = "none";
text_que.style.display = "none";
text_decirte.style.display = "none";
text_tkm.style.display = "none";

const fn_quiero = () => {
  setTimeout(() => {
    id_quiero.classList.remove("animation-heart");
    id_quiero.innerHTML = "<div id='rigth-heart'></div>";
    text_quiero.style.display = "block";
    text_quiero.style.fontFamily = "Courgette";
  }, 2000);
  id_quiero.style.color = "crimson";
  id_quiero.style.fontWeight = "bold";
  id_quiero.classList.add("animation-heart");
};
const fn_que = () => {
  setTimeout(() => {
    id_que.classList.remove("animation-heart");
    id_que.innerHTML = "<div id='left-heart'></div>";
    text_que.style.display = "block";
    text_que.style.fontFamily = "Courgette";
  }, 2000);
  text_quiero.style.display = "none";
  id_que.style.color = "crimson";
  id_que.style.fontWeight = "bold";
  id_que.classList.add("animation-heart");
};
const fn_decirte = () => {
  setTimeout(() => {
    id_decirte.classList.remove("animation-heart");
    id_decirte.innerHTML = "<div id='bottom-heart'></div>";
    text_decirte.style.display = "block";
    text_decirte.style.fontFamily = "Courgette";
  }, 2000);
  text_que.style.display = "none";
  id_decirte.style.color = "crimson";
  id_decirte.classList.add("animation-heart");
  id_decirte.style.fontWeight = "bold";
};

//cargar el documento
document.addEventListener("DOMContentLoaded", () => {
  playMusic();
  setTimeout(() => {
    id_quiero.style.visibility = "visible";
    id_quiero.classList.add("animation-ids");

    setTimeout(() => {
      id_decirte.style.visibility = "visible";
      id_decirte.classList.add("animation-ids");

      setTimeout(() => {
        id_que.style.visibility = "visible";
        id_que.classList.add("animation-ids");

        setTimeout(() => {
          fn_quiero();
          setTimeout(() => {
            fn_que();
            setTimeout(() => {
              fn_decirte();
              setTimeout(() => {
                text_decirte.style.display = "none";
                text_tkm.style.display = "block";
                div_heart.classList.add("animation-heart");
                setTimeout(() => {
                  div_heart.style.display = "none";
                  id_thanks.style.display = "block";
                  id_thanks.classList.add("animation-ids");
                  setTimeout(() => {
                    window.location.href = "/";
                  }, 20000);
                }, 8000);
              }, 10000);
            }, 10000);
          }, 10000);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
});
