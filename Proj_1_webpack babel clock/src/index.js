import "./styles.css";

const updateClock = () => {
  const now = new Date();
  let hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  document.getElementById(
    "clock"
  ).textContent = `${hour}:${minute}:${second}:${ampm}`;
};

setInterval(updateClock, 1000);
updateClock();
