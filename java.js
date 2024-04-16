const mybutton = document.getElementById("mybutton");
const myimage = document.getElementById("mydiv");
const mybutton2 = document.getElementById("mybutton2");
const mybutton3 = document.getElementById("mybutton3");
const mybutton4 = document.getElementById("mybutton4");
const mydiv2 = document.getElementById("mydiv2");
const div3 = document.getElementById("div3");
myimage.style.display = "block";
div3.style.display = "none";
mydiv2.style.display = "none";
mybutton2.addEventListener("click", event => {
div3.style.display = "block";
myimage.style.display = "none";
});
mybutton3.addEventListener("click", event => {
div3.style.display = "none";
mydiv2.style.display = "block";
});
mybutton4.addEventListener("click", event => {
div3.style.display = "block";
mydiv2.style.display = "none";
});
