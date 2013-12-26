(function() {
  var Paddle;

  Paddle = (function() {
    function Paddle(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.x_speed = 0;
      this.y_speed = 0;
    }

    Paddle.prototype.render = function() {
      Engine.ctx.fillStyle = "#fff";
      return Engine.ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    Paddle.prototype.move = function(x, y) {
      this.x += x;
      this.y += y;
      this.x_speed = x;
      this.y_speed = y;
      if (this.y < 0) {
        this.y = 0;
        return this.y_speed = 0;
      } else if (this.y + this.height > Engine.canvasH) {
        this.y = Engine.canvasH - this.height;
        return this.y_speed = 0;
      }
    };

    return Paddle;

  })();

}).call(this);
