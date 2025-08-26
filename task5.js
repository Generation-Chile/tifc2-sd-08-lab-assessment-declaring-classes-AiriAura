export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;       // puntos iniciales
    this.experienceToLevel = 100; // XP necesaria para subir de nivel
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
    this.experience = 0; // reinicia XP al subir
    this.info();
  }

  gainXP(points) {
    this.experience += points;
    if (this.experience >= this.experienceToLevel) {
      this.levelUp();
    }
  }
}
