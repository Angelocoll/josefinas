// Ange det specifika datumet och tiden att räkna ned från
const targetDate = new Date("December 31, 2023 18:00:00").getTime(); // Ange ditt önskade datum här

let playBtn = document.querySelector("#play");
playBtn.addEventListener("click", () => {
  let audio = document.querySelector("#musik");
  audio.play();
  const countdown = setInterval(() => {
    const now = new Date().getTime(); // Nuvarande tid
    const distance = targetDate - now; // Beräkna skillnaden mellan måldatum och nuvarande tid

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = formatTime(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = formatTime(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

    // Uppdatera element på sidan med den återstående tiden
    document.querySelector(".D").innerHTML = days;
    document.querySelector(".H").innerHTML = hours;
    document.querySelector(".M").innerHTML = minutes;
    document.querySelector(".S").innerHTML = seconds;

    // Om nedräkningen är klar
    if (distance < 0) {
      clearInterval(countdown); // Stoppa nedräkningen
      // Här kan du lägga till kod för att visa ett meddelande när nedräkningen är klar
      document.querySelector(".clock").innerHTML =
        "Årets sista och största fest har startat!";
    }
  }, 1000); // Uppdatera varje sekund

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  document.body.innerHTML = `
  <div class="background">

    <video autoplay muted playsinline loop src="pexels_videos_1741279 (1080p).mp4" alt="raketer">
</div>
  <div class="clock">
  <h1>
     <span class="D">00</span> : <span class="H">00</span> : <span class="M">00</span> : <span class="S">00</span>
  </h1>
  <div class="Box">
      <span>Days</span>
      <span>Hours</span>
      <span>Minutes</span>
      <span>Seconds</span>
  </div>
</div>
<audio id="musik" autoplay loop playsinline src="passion-127011.mp3"></audio>`;
});
