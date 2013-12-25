var exports = exports || {};

Spec.specs = 0;
function Spec(spec, callback) {
  if (!(this instanceof Spec)) {
    return new Spec(spec, callback);
  }
  this.spec = spec || '';
  Spec.specs += 1;
  if (typeof callback === 'function') callback();
}

exports.Spec = Spec;
