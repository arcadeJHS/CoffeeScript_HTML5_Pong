(function() {
  var Game;

  Game = {
    gameW: 600,
    gameH: 400,
    init: function() {
      var paddleH, paddleW;
      paddleW = 20;
      paddleH = 100;
      Engine.init(this.gameW, this.gameH);
      this.ball = new Ball(this.gameW / 2 - paddleW / 2, this.gameH / 2 - paddleW / 2, paddleW, paddleW);
      this.player = new Player(20, this.gameH / 2 - paddleH / 2, paddleW, paddleH);
      this.cpu = new CPU(560, this.gameH / 2 - paddleH / 2, paddleW, paddleH);
      return Game.loop();
    },
    update: function() {
      this.player.update();
      this.cpu.update(this.ball);
      return this.ball.update(this.player, this.cpu);
    },
    draw: function() {
      Engine.clear();
      this.drawNet();
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

}).call(this);
