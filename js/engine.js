var Engine;

Engine = {
  keysDown: {},
  animate: function() {
    var _base, _base1, _base2;
    return (_base = window.prototype).requestAnimationFrame != null ? (_base = window.prototype).requestAnimationFrame : _base.requestAnimationFrame = (_base1 = window.prototype).webkitRequestAnimationFrame != null ? (_base1 = window.prototype).webkitRequestAnimationFrame : _base1.webkitRequestAnimationFrame = (_base2 = window.prototype).mozRequestAnimationFrame != null ? (_base2 = window.prototype).mozRequestAnimationFrame : _base2.mozRequestAnimationFrame = function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  },
  init: function(canvasW, canvasH) {
    var _ref;
    this.setListeners();
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.canvas.width = this.canvasW = canvasW;
    this.canvas.height = this.canvasH = canvasH;
    return this.ctx = (_ref = this.canvas) != null ? typeof _ref.getContext === "function" ? _ref.getContext("2d") : void 0 : void 0;
  },
  clear: function() {
    this.ctx.fillStyle = "#000";
    return this.ctx.fillRect(0, 0, this.canvasW, this.canvasH);
  },
  setListeners: function() {
    var _this = this;
    window.addEventListener("keydown", function(event) {
      return _this.keysDown[event.keyCode] = true;
    });
    return window.addEventListener("keyup", function(event) {
      return delete _this.keysDown[event.keyCode];
    });
  }
};
