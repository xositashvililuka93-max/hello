
const acceptButton = document.querySelector<HTMLButtonElement>("#acceptButton");
const declineButton = document.querySelector<HTMLButtonElement>("#declineButton");
const rsvpMessage = document.querySelector<HTMLElement>("#rsvpMessage");

if (acceptButton && declineButton && rsvpMessage) {
  acceptButton.addEventListener("click", () => {
    rsvpMessage.textContent = "Wonderful! We look forward to celebrating with you!";
    rsvpMessage.style.color = "#66805c";
  });

  declineButton.addEventListener("click", () => {
    rsvpMessage.textContent = "Thank you for letting us know. You will be missed!";
    rsvpMessage.style.color = "#9b8069";
  });
}
