
//modal 1 defined
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

//modal 2 defined
const open2 = document.getElementById("open2");
const modal_container2 = document.getElementById("modal_container2");
const close2 = document.getElementById("close2");

//modal 3 defined
const open3 = document.getElementById("open3");
const modal_container3 = document.getElementById("modal_container3");
const close3 = document.getElementById("close3");

//modal 4 defined
const open4 = document.getElementById("open4");
const modal_container4 = document.getElementById("modal_container4");
const close4 = document.getElementById("close4");


//modal 1 function
open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

  //modal 2 function
open2.addEventListener("click", () => {
  modal_container2.classList.add("show");
});
close2.addEventListener("click", () => {
  modal_container2.classList.remove("show");
});

//modal 3 function
open3.addEventListener("click", () => {
  modal_container3.classList.add("show");
});
close3.addEventListener("click", () => {
  modal_container3.classList.remove("show");
});

//modal 4 function
open4.addEventListener("click", () => {
    modal_container4.classList.add("show");
  });
close4.addEventListener("click", () => {
    modal_container4.classList.remove("show");
 });



function init(){
}
window.addEventListener("load", init, false);