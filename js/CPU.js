(function() {
  var CPU, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  CPU = (function(_super) {
    __extends(CPU, _super);

    function CPU() {
      _ref = CPU.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CPU.prototype.update = function(ball) {
      var diff, y_pos;
      y_pos = ball.y;
      diff = -((this.y + (this.height / 2)) - (y_pos + ball.height / 2));
      if (diff < 0 && diff < -10) {
        diff = -10;
      } else if (diff > 0 && diff > 10) {
        diff = 10;
      }
      return this.move(0, diff);
    };

    return CPU;

  })(Paddle);

}).call(this);
