var canvas = document.querySelector(".canvas-hero");
var c = canvas.getContext("2d");

var hero = document.querySelector(".hero");
canvas.width = hero.offsetWidth;
canvas.height = hero.offsetHeight;

var increment = 0.02;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "#FAFBFE";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  c.moveTo(0, 0);

  for (let i = 0; i < canvas.width + 1; i++) {
    c.lineTo(
      i,
      canvas.height -
        35 +
        Math.sin(i * 0.003 + increment) * 35 * Math.sin(increment)
    );
  }
  c.lineTo(canvas.width, 0);
  c.fillStyle = "#272725";
  c.fill();
  increment += 0.02;
}

animate();

addEventListener("resize", function() {
  canvas.width = hero.offsetWidth;
  canvas.height = hero.offsetHeight;
});
