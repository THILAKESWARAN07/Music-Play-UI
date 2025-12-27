let playing = false;
let progress = document.querySelector(".progress");
let playBtn = document.getElementById("playBtn");
let width = 0;
let interval;

playBtn.addEventListener("click", () => {
    if (!playing) {
        playBtn.textContent = "⏸";
        playing = true;

        interval = setInterval(() => {
            if (width >= 100) {
                width = 0;
            }
            width += 1;
            progress.style.width = width + "%";
        }, 200);

    } else {
        playBtn.textContent = "▶";
        playing = false;
        clearInterval(interval);
    }
});
