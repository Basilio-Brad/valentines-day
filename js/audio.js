document.addEventListener("DOMContentLoaded", () => {
  const id_audio = document.getElementById("music");
  id_audio.play();
  const id_lyrcsES = document.getElementById("lyrcsES");
  const id_lyrcsEN = document.getElementById("lyrcsEN");
  /* const lyricsEN = {
    0: "Take my hand",
    6: "Take my whole life, too",
    13: "For I can't help",
    19: "Falling in love with you",
  };

  const lyrics = {
    0: "Toma mi mano",
    6: "Toma mi vida entera tambien",
    13: "Porque no puedo evitar",
    19: "Enamorarme de ti",
    }; */
  const lyricsEN = {
    0: "Oh, I used to say",
    4: "I would never fall in love again",
    8: "until I found her",
    11: "I said, I would never fall",
    15: "unless it's you I fall into",
    19: "I was lost within the darkness",
    23: "but then I found her",
    26: "I found you",
  };

  const lyrics = {
    0: "Oh, yo solía decir",
    4: "Nunca me volvería a enamorar",
    8: "Hasta que la encontré",
    11: "Dije: nunca me enamoraría",
    15: "A menos que sea de ti que me enamore",
    19: "Estaba perdido en la oscuridad",
    23: "Pero entonces la encontré",
    26: "Te encontré ...",
  };
  id_audio.addEventListener("timeupdate", function () {
    const currentTime = Math.floor(id_audio.currentTime);
    if (lyrics[currentTime]) {
      id_lyrcsES.textContent = lyrics[currentTime];
    }
    if (lyricsEN[currentTime]) {
      id_lyrcsEN.textContent = lyricsEN[currentTime];
    }
  });
  setTimeout(() => {
    window.location.href = "reaction.html";
  }, 33000);
});
