document.addEventListener("DOMContentLoaded", () => {
  const square = document.querySelector(".square");
  const rectangle = document.querySelector(".rectangle");
  const info = document.querySelector(".info");
  const input = document.getElementById("input");
  const message = document.getElementById("message");

  square.addEventListener("click", () => {
    alert("Клік на квадраті");
  });

  rectangle.addEventListener("click", () => {
    info.textContent = "Ви клікнули на прямокутник";
  });

  input.addEventListener("input", () => {
    message.textContent = input.value || "незнайомець";
  });
});

