(function () {
  "use strict";
  Spec.specs = 0;
  function Spec(spec, callback) {
    if (!(this instanceof Spec)) {
      return new Spec(spec, callback);
    }
    this.spec = spec || '';
    Spec.specs += 1;
    if (typeof callback === 'function') callback();
  }

  if (typeof module !== 'undefined' && module.exports) {
    global.it = Spec;
  } else {
    window.it = Spec;
  }
}());
