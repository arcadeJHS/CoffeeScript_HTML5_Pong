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
    var y, _results;
    Engine.ctx.fillStyle = "#fff";
    y = this.y;
    _results = [];
    while (y < this.y + this.height) {
      Engine.ctx.fillRect(this.x, y, this.width, 1);
      _results.push(y += 2);
    }
    return _results;
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
