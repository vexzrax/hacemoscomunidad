// music.js

document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bg-music');
  const soundBtn = document.getElementById('sound-btn');
  let isMuted = false;

  // For autoplay: try to play as soon as possible (browser restrictions may apply)
  function playMusic() {
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 1;
      audio.play().catch(() => {
        // Autoplay might fail - ignore silently
      });
    }
  }

  // Try to play once DOM is ready
  playMusic();

  // Also try to play when user interacts (for mobile/strict browsers)
  document.body.addEventListener('click', playMusic, { once: true });

  // Mute/Unmute logic: stops and plays music
  soundBtn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
      isMuted = false;
    } else {
      audio.pause();
      isMuted = true;
    }
  });
});
