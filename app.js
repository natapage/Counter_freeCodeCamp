// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value"); // вопрос Артёму. На курсе Шмидтмана говорилось что лучше всё делать классами. Нужен ли тут id?
const btns = document.querySelectorAll(".btn");

console.log(btns); // массив кнопок

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }

    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
