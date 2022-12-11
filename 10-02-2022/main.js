// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"

String.prototype.toJadenCase = function () {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};
