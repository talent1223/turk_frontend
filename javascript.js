document.addEventListener("DOMContentLoaded", (event) => {});

let rotated = false;
function rotate() {
  const img = document.getElementById("image");
  if (rotated == false){
    img.style.transform = "rotate(180deg)";
    rotated = true;
  } else{
    img.style.transform = "rotate(0deg)";
    rotated = false;
  }
}

function submit(){

}
