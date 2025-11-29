const mario = document.getElementById("mario");
const enemies = document.querySelectorAll(".enemy");
const flag = document.getElementById("flag");
const obstacles = document.querySelectorAll(".obstacle");

let posX = 100;
let posY = 0;
let velY = 0;
let gravity = 1;
let isJumping = false;
const keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function rectsOverlap(r1, r2) {
  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

function die() {
  alert("☠️ You died! Restarting...");
  posX = 100;
  posY = 0;
}

function update() {
  // Movement
  if (keys["ArrowRight"]) posX += 5;
  if (keys["ArrowLeft"]) posX -= 5;
  if ((keys["ArrowUp"] || keys[" "]) && !isJumping) {
    velY = 20;
    isJumping = true;
  }

  posY += velY;
  velY -= gravity;
  if (posY <= 0) {
    posY = 0;
    velY = 0;
    isJumping = false;
  }

  mario.style.left = posX + "px";
  mario.style.bottom = (100 + posY) + "px";

  document.querySelector(".game").scrollLeft = posX - 200;

  const marioRect = mario.getBoundingClientRect();

  // Collision with enemies
  enemies.forEach(enemy => {
    const enemyRect = enemy.getBoundingClientRect();
    if (rectsOverlap(marioRect, enemyRect)) {
      die();
    }

    // Basic enemy back-forth movement
    let left = parseInt(enemy.style.left);
    if (!enemy.dataset.dir) enemy.dataset.dir = "right";
    if (enemy.dataset.dir === "right") {
      left += 1;
      if (left > parseInt(enemy.style.leftStart || 1000) + 50) enemy.dataset.dir = "left";
    } else {
      left -= 1;
      if (left < parseInt(enemy.style.leftStart || 1000) - 50) enemy.dataset.dir = "right";
    }
    enemy.style.left = left + "px";
  });

  // Collision with obstacles
  obstacles.forEach(obs => {
    const obsRect = obs.getBoundingClientRect();
    if (rectsOverlap(marioRect, obsRect)) {
      die();
    }
  });

  // Win
  const flagRect = flag.getBoundingClientRect();
  if (rectsOverlap(marioRect, flagRect)) {
    alert("🎉 You Win!");
    posX = 100;
    posY = 0;
  }

  requestAnimationFrame(update);
}

update();
