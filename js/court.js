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
  score: [[1, 1, 1, 0, 1, 1, 1], [0, 0, 1, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 0, 1, 1], [1, 0, 1, 1, 0, 0, 1], [1, 1, 0, 1, 0, 1, 1], [1, 1, 0, 1, 1, 1, 1], [0, 1, 1, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 1]],
  renderNet: function() {
    var y, _results;
    Engine.ctx.fillStyle = "#fff";
    y = this.net_y;
    _results = [];
    while (y < this.gameH) {
      Engine.drawCRT(this.gameW / 2 - this.net_width, y, this.net_width, y + this.net_step_length);
      _results.push(y += this.net_step_length + this.net_jump);
    }
    return _results;
  },
  renderScore: function(score1, score2) {
    var i, s, s1, s2, _i, _j, _len, _len1, _results;
    s1 = Court.score[score1];
    for (i = _i = 0, _len = s1.length; _i < _len; i = ++_i) {
      s = s1[i];
      if (s) {
        switch (i) {
          case 0:
            Engine.drawCRT(100 + 0, 0, 10, 40);
            break;
          case 1:
            Engine.drawCRT(100 + 0, 0, 40, 10);
            break;
          case 2:
            Engine.drawCRT(100 + 30, 0, 10, 40);
            break;
          case 3:
            Engine.drawCRT(100 + 0, 30, 40, 30 + 10);
            break;
          case 4:
            Engine.drawCRT(100 + 0, 30, 10, 30 + 40);
            break;
          case 5:
            Engine.drawCRT(100 + 0, 60, 40, 60 + 10);
            break;
          case 6:
            Engine.drawCRT(100 + 30, 30, 10, 30 + 40);
        }
      }
    }
    s2 = Court.score[score2];
    _results = [];
    for (i = _j = 0, _len1 = s2.length; _j < _len1; i = ++_j) {
      s = s2[i];
      if (s) {
        switch (i) {
          case 0:
            _results.push(Engine.drawCRT(this.gameW - 100 + 0, 0, 10, 40));
            break;
          case 1:
            _results.push(Engine.drawCRT(this.gameW - 100 + 0, 0, 40, 10));
            break;
          case 2:
            _results.push(Engine.drawCRT(this.gameW - 100 + 30, 0, 10, 40));
            break;
          case 3:
            _results.push(Engine.drawCRT(this.gameW - 100 + 0, 30, 40, 30 + 10));
            break;
          case 4:
            _results.push(Engine.drawCRT(this.gameW - 100 + 0, 30, 10, 30 + 40));
            break;
          case 5:
            _results.push(Engine.drawCRT(this.gameW - 100 + 0, 60, 40, 60 + 10));
            break;
          case 6:
            _results.push(Engine.drawCRT(this.gameW - 100 + 30, 30, 10, 30 + 40));
            break;
          default:
            _results.push(void 0);
        }
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  }
};
