class Party {
  constructor() {
    this.members = [];
  }

  addPlayer(player) {
    this.members.push(player);
  }

  removePlayer(playerName) {
    this.members = this.members.filter(p => p.name !== playerName);
  }
}
