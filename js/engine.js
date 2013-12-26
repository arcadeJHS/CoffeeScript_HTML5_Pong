(function() {
  var Engine;

  Engine = {
    keysDown: {},
    animate: function(callback) {
      return window.setTimeout(callback, 1000 / 60);
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

}).call(this);
