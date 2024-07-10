let enemy1 = "EnemyA";
let dist1 = 10;

let enemy2 = "EnemyB";
let dist2 = 20;

function enemigoCercano(enemy1, dist1, enemy2, dist2) {
  if (dist1 < dist2) {
      console.log(enemy1);
  } else {
      console.log(enemy2);
  };
};

enemigoCercano(enemy1, dist1, enemy2, dist2);