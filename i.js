// добавление стилей на js

// (function () {
//   let div = document.getElementById("block");
//   let style = div.style;
// //   style.color = "red"; так не надо
//   div.className = " css-block css-block-1 ";
//   // что бы убрать надо перетереть на пустую строку
//   //   div.className = "";

//   //   если хотим заменить один то replace " css-block " заменили на пустую строку " "
//   //   div.className = div.className.replace(" css-block ", " ");
//   //   div.classList.add("css-block");
//   // //   //   удалить
//   // //   div.classList.remove("css-block");
//   // //   // переключатель если был класс то удалит если небыло поставит
//   // //   div.classList.toggler("css-block");
//   // //   console.log(block);
// })();

const classBlock = document.querySelector(".block");
classBlock.addEventListener("click", () => {
  if ((classBlock.style.background = "blue")) {
    classBlock.style.background = "red";
  } else if ((classBlock.style.background = "red")) {
    classBlock.style.background = "blue";
  } else {
    classBlock.style.background = "blue";
  }
});

let offset = 0;
//  смещение  лево
const sliderLine = document.querySelector(".slider-line");
document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 475;
  if (offset > 1425) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
// offset+=475
document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 475;
  if (offset < 0) {
    offset = 475;
  }
  sliderLine.style.left = -offset + "px";
});
