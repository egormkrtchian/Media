

document.addEventListener("DOMContentLoaded", function() {
  // ваш код тут
  
  // Отримуємо посилання на кнопку та елемент
var button = document.getElementById("buttonBurger");
var element = document.getElementById("burgerMenu");

// Додаємо обробник події для кліку на кнопку
button.addEventListener("click", function() {
  // Отримуємо поточне значення display
  var currentDisplay = element.style.display;
  
  // Переключаємо значення display
  if (currentDisplay === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});
});