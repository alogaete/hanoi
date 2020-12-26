
let [startX, startY, thickness] = [10, 10, 15];
let [discMaxRadius, discMinRadius, discAmount] = [50, 10, 10];
let rodHeight = (thickness + 1) * (discAmount + 1);
let rod1X = startX + 1 * thickness + 1 * discMaxRadius;
let rod2X = startX + 2 * thickness + 3 * discMaxRadius;
let rod3X = startX + 3 * thickness + 5 * discMaxRadius;

let discsRadius = [];
for(let i = 1; i <= discAmount; i++) {
  discsRadius.push( i * (discMaxRadius - discMinRadius) / discAmount + discMinRadius);
}

var drawRod = (ctx, posX, posY) => {
  let baseX = posX - discMaxRadius - thickness;
  let baseWidth = 2 * thickness + 2 * discMaxRadius;
  ctx.rect(posX - thickness / 2, posY, thickness, rodHeight);
  ctx.rect(baseX, posY + rodHeight, baseWidth, thickness);
}

var drawBackground = (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  drawRod(ctx, rod1X, startY);
  drawRod(ctx, rod2X, startY);
  drawRod(ctx, rod3X, startY);
  ctx.fillStyle = "black";
  ctx.fill();
}

var drawDiscs = (ctx, rodX, posY, discs) => {
  for(let i = 0; i < discs.length; i++) {
    let discRadius = discsRadius[discs[i]]
    let discY = posY + rodHeight - (i + 1) * (thickness + 1);
    ctx.rect(rodX - discRadius, discY, 2 * discRadius, thickness);
  }
}

var drawAllDiscs = (canvas) => {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  drawDiscs(ctx, rod1X, startY, [4, 3, 2, 1, 0]);
  drawDiscs(ctx, rod2X, startY, [4, 3, 2, 1, 0]);
  drawDiscs(ctx, rod3X, startY, [4, 3, 2, 1, 0]);
  ctx.fillStyle = "gray";
  ctx.fill();
}

document.addEventListener("DOMContentLoaded", function(event) {
	drawBackground(document.getElementById("backGroundCanvas"));
	drawAllDiscs(document.getElementById("discsCanvas"));
});

