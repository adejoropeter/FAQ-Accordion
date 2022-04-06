const compo = document.querySelector("#component");
const com = document.querySelector("#customise");
const coms = document.querySelector("#compos");
const coms2 = document.querySelector("#compos2");
const coms3 = document.querySelector("#compos3");

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".line p").classList.add("hide");
  document.querySelector(".lines p").classList.add("hide");
  document.querySelector(".line1 p").classList.add("hide");
  document.querySelector(".line2 p").classList.add("hide");
  document.querySelector(".line3 p").classList.add("hide");

  document.querySelector(".lines .question").classList.add("font");
});

compo.addEventListener("click", combination);
com.addEventListener("click", combination);
coms.addEventListener("click", combination);
coms2.addEventListener("click", combination);
coms3.addEventListener("click", combination);

function combination() {
  return togg(), toggle(), togg1(), togg2(), togg3();
}

// function name() {
//       const font = document.querySelectorAll('#compo .question');
//       font.forEach(item => {
//             item.style.color='red'
//       })
//       // console.log(font)
// }

function toggle() {
  compo.addEventListener("click", () => {
    const body = document.querySelector(".line");
    document.querySelector(".line p").classList.toggle("hide");
    document.querySelector("#component img").classList.toggle("rotate");
  });
}
function togg() {
  com.addEventListener("click", () => {
    const body = document.querySelector(".lines");
    document.querySelector(".lines p").classList.toggle("hide");
    document.querySelector(".lines .question").classList.toggle("font");
    document.querySelector("#customise img").classList.toggle("rotate");
  });
}
function togg1() {
  coms.addEventListener("click", () => {
    const body = document.querySelector(".line1");
    document.querySelector(".line1 p").classList.toggle("hide");
    document.querySelector("#compos img").classList.toggle("rotate");
  });
}
function togg2() {
  coms2.addEventListener("click", () => {
    const body = document.querySelector(".line2");
    document.querySelector(".line2 p").classList.toggle("hide");
    document.querySelector("#compos2 img").classList.toggle("rotate");
  });
}
function togg3() {
  coms3.addEventListener("click", () => {
    const body = document.querySelector(".line3");

    document.querySelector(".line3 p").classList.toggle("hide");
    document.querySelector("#compos3 img").classList.toggle("rotate");
  });
}
