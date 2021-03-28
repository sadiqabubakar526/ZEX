// Generated by CoffeeScript 1.6.3
/*
  GamepadController (Orientation + buttons) for touch devices

  @class suraj.GamepadController
  @author SURAJ SR ABUBAKAR
*/


(function() {
  var GamepadController, exports, _base;

  GamepadController = (function() {
    GamepadController.isCompatible = function() {
      return ('getGamepads' in navigator) || ('webkitGetGamepads' in navigator);
    };

    /*
      Creates a new GamepadController
    */


    function GamepadController(buttonPressCallback) {
      this.buttonPressCallback = buttonPressCallback;
      this.active = true;
      this.leftStickArray = [];
      this.rightStickArray = [];
    }

    /*
      @public
    */


    GamepadController.prototype.updateAvailable = function() {
      var accel, gamepads, gp, lt, rt, sel, _ref, _ref1, _ref2, _ref3;
      if (!this.active) {
        return false;
      }
      gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads();
      if (!(gamepads != null ? gamepads[0] : void 0)) {
        return false;
      }
      gp = gamepads[0];
      if ((gp.buttons == null) || (gp.axes == null)) {
        return;
      }
      this.lstickx = gp.axes[0];
      accel = gp.buttons[0];
      lt = gp.buttons[6];
      rt = gp.buttons[7];
      sel = gp.buttons[8];
      this.acceleration = (_ref = accel.pressed) != null ? _ref : accel;
      this.ltrigger = (_ref1 = lt.pressed) != null ? _ref1 : lt;
      this.rtrigger = (_ref2 = rt.pressed) != null ? _ref2 : rt;
      this.select = (_ref3 = sel.pressed) != null ? _ref3 : sel;
      this.buttonPressCallback(this);
      return true;
    };

    return GamepadController;

  })();

  exports = exports != null ? exports : this;

  exports.suraj || (exports.suraj = {});

  (_base = exports.suraj).controllers || (_base.controllers = {});

  exports.suraj.controllers.GamepadController = GamepadController;

}).call(this);
