(function() {
  var Player, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Player = (function(_super) {
    __extends(Player, _super);

    function Player() {
      _ref = Player.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Player.prototype.update = function() {
      var key, value, _results;
      _results = [];
      for (key in Engine.keysDown) {
        value = Number(key);
        if (value === 38) {
          _results.push(this.move(0, -4));
        } else if (value === 40) {
          _results.push(this.move(0, 4));
        } else {
          _results.push(this.move(0, 0));
        }
      }
      return _results;
    };

    return Player;

  })(Paddle);

}).call(this);
