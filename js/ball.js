var Ball;

Ball = (function() {
  function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.x_speed = 3;
    this.y_speed = 0;
  }

  Ball.prototype.reset = function() {
    this.x = Engine.canvasW / 2;
    this.y = Engine.canvasH / 2;
    this.x_speed = 3;
    return this.y_speed = 0;
  };

  Ball.prototype.render = function() {
    Engine.ctx.fillStyle = "#fff";
    return Engine.drawCRT(this.x, this.y, this.width, this.y + this.height);
  };

  Ball.prototype.update = function(paddle1, paddle2) {
    this.x += this.x_speed;
    this.y += this.y_speed;
    if (this.y < 0) {
      this.y_speed *= -1;
    }
    if ((this.y + this.height) > Engine.canvasH) {
      this.y_speed *= -1;
    }
    if (this.x <= (paddle1.x + paddle1.width) && (this.x > paddle1.x) && (this.y >= paddle1.y) && this.y < (paddle1.y + paddle1.height)) {
      this.x_speed *= -1;
      this.y_speed += paddle1.y_speed / 2;
    }
    if ((this.x + this.width) > paddle2.x && (this.x + this.width) < (paddle2.x + paddle2.width) && this.y >= paddle2.y && this.y < (paddle2.y + paddle2.height)) {
      this.x_speed *= -1;
      this.y_speed += paddle2.y_speed / 2;
    }
    if ((this.x + this.width) > Engine.canvasW) {
      this.reset();
      paddle1.score += 1;
    }
    if (this.x < 0) {
      this.reset();
      return paddle2.score += 1;
    }
  };

  return Ball;

})();
