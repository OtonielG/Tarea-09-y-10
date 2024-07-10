let enemy1 = "EnemyX";
let dist1 = 15;

let enemy2 = "EnemyY";
let dist2 = 15;

function enemigoCercano(enemy1, dist1, enemy2, dist2) {
  if (dist1 < dist2) {
      console.log(enemy1);
  } else if (dist2 < dist1) {
      console.log(enemy2);
  } else {
      console.log(enemy1);
  };
};

enemigoCercano(enemy1, dist1, enemy2, dist2);
