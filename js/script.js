let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let imagen = document.getElementById("imagen");
let controls = document.getElementById("controls");
let stop_btn = document.getElementById("stop-btn");
let contenedor = document.getElementById("contenedor")

play_btn.addEventListener("click", () =>{
  cancion.play();
  imagen.style.animationPlayState ="running";
  controls.style.animationPlayState ="running";
  contenedor.style.animationPlayState ="running";
})

pause_btn.addEventListener("click", () =>{
  cancion.pause();
  imagen.style.animationPlayState ="paused";
  controls.style.animationPlayState ="paused";
  contenedor.style.animationPlayState ="paused";
})

stop_btn.addEventListener("click", () =>{
  cancion.load();
  imagen.style.animationPlayState ="paused";
  contenedor.style.animationPlayState ="paused";
  controls.style.animationPlayState ="paused";
})