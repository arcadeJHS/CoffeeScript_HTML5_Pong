(function() {
  var Ball;

  Ball = (function() {
    function Ball(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.x_speed = 3;
      this.y_speed = 0;
    }

    Ball.prototype.render = function() {
      Engine.ctx.fillStyle = "#fff";
      return Engine.ctx.fillRect(this.x, this.y, this.width, this.height);
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
      if ((this.x + this.width) > Engine.canvasW) {
        this.reset();
      }
      if ((this.x + this.width) > paddle2.x && (this.x + this.width) < (paddle2.x + paddle2.width) && this.y >= paddle2.y && this.y < (paddle2.y + paddle2.height)) {
        this.x_speed *= -1;
        this.y_speed += paddle2.y_speed / 2;
      }
      if (this.x < 0) {
        return this.reset();
      }
    };

    Ball.prototype.reset = function() {
      this.x_speed = 3;
      this.y_speed = 0;
      this.x = Engine.canvasW / 2;
      return this.y = Engine.canvasH / 2;
    };

    return Ball;

  })();

}).call(this);
