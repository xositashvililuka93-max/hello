"use strict";
const acceptButton = document.querySelector("#acceptButton");
const declineButton = document.querySelector("#declineButton");
const rsvpMessage = document.querySelector("#rsvpMessage");
const countdown = document.querySelector("#countdown");
if (acceptButton && declineButton && rsvpMessage) {
    acceptButton.addEventListener("click", () => {
        rsvpMessage.textContent = "რა სასიამოვნოა! მოუთმენლად ველით თქვენთან შეხვედრას!";
        rsvpMessage.style.color = "#66805c";
        acceptButton.disabled = true;
        declineButton.disabled = true;
    });
    declineButton.addEventListener("click", () => {
        rsvpMessage.textContent = "გმადლობთ პასუხისთვის! ძალიან დაგვაკლდებით!";
        rsvpMessage.style.color = "#9b8069";
        acceptButton.disabled = true;
        declineButton.disabled = true;
    });
}
const weddingDate = new Date("2027-06-20T16:00:00").getTime();
function updateCountdown() {
    if (!countdown)
        return;
    const now = new Date().getTime();
    const difference = weddingDate - now;
    if (difference <= 0) {
        countdown.textContent = "დღეს ჩვენი განსაკუთრებული დღეა!";
        return;
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    countdown.innerHTML = `
    <div class="countdown-item">
      <strong>${days}</strong>
      <span>დღე</span>
    </div>
    <div class="countdown-item">
      <strong>${hours}</strong>
      <span>საათი</span>
    </div>
    <div class="countdown-item">
      <strong>${minutes}</strong>
      <span>წუთი</span>
    </div>
    <div class="countdown-item">
      <strong>${seconds}</strong>
      <span>წამი</span>
    </div>
  `;
}
updateCountdown();
setInterval(updateCountdown, 1000);
