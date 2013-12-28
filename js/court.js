var Court;

Court = {
  init: function(gameW, gameH) {
    this.net_jump = 10;
    this.net_y = this.net_jump;
    this.net_width = 5;
    this.net_step_length = 10;
    this.gameW = gameW;
    return this.gameH = gameH;
  },
  render: function() {
    var y, _results;
    Engine.ctx.fillStyle = "#fff";
    y = this.net_y;
    _results = [];
    while (y < this.gameH) {
      Engine.drawCRT(this.gameW / 2 - this.net_width, y, this.net_width, y + this.net_step_length);
      _results.push(y += this.net_step_length + this.net_jump);
    }
    return _results;
  }
};
