
document.addEventListener("DOMContentLoaded", function () {
  const timer = document.getElementById("timer");
  if (!timer) return;

  function getNextCycleDate() {
    const now = new Date();
    const cycleDays = 3 + Math.floor(Math.random() * 2); // 3 или 4 дня
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);
  
    const offset =
      ((cycleDays * 24 + randomHours) * 60 + randomMinutes) * 60 + randomSeconds;
  
    return new Date(now.getTime() + offset * 1000);
  }

  let targetDate = getNextCycleDate();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      targetDate = getNextCycleDate();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
