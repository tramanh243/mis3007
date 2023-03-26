let icon_menu = document.getElementById("icon_menu");
let slide_bar = document.getElementById("slide_bar");
icon_menu.addEventListener("mousemove", () => {
  slide_bar.style.display = "block";
});
icon_menu.addEventListener("mouseout", ()=>{
  slide_bar.style.display= "none";
})
slide_bar.addEventListener("mousemove", () => {
  slide_bar.style.display = "block";
});
slide_bar.addEventListener("mouseout", ()=>{
  slide_bar.style.display= "none";
})