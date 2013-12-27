var Game;

Game = {
  gameW: 750,
  gameH: 510,
  init: function() {
    var paddleH, paddleW;
    paddleW = 10;
    paddleH = 32;
    Engine.init(this.gameW, this.gameH);
    Court.init(this.gameW, this.gameH);
    this.ball = new Ball(this.gameW / 2 - paddleW / 2, this.gameH / 2 - paddleW / 2, 10, 10);
    this.player = new Player(100, this.gameH / 2 - paddleH / 2, paddleW, paddleH);
    this.cpu = new CPU(this.gameW - 100 - paddleW, this.gameH / 2 - paddleH / 2, paddleW, paddleH);
    return Game.loop();
  },
  update: function() {
    this.player.update();
    this.cpu.update(this.ball);
    return this.ball.update(this.player, this.cpu);
  },
  draw: function() {
    Engine.clear();
    Court.render();
    this.player.render();
    this.cpu.render();
    return this.ball.render();
  },
  drawNet: function() {
    var y, _results;
    y = -15;
    _results = [];
    while (y < this.gameH) {
      Engine.ctx.fillStyle = "#fff";
      Engine.ctx.fillRect(this.gameW / 2 - 5, y, 10, 30);
      _results.push(y += 40);
    }
    return _results;
  },
  loop: function() {
    Game.update();
    Game.draw();
    return Engine.animate(Game.loop);
  }
};

Game.init();
