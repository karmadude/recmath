module.exports = harshad;

function harshad(n) {
  if(n === void 0) throw new Error("Missing argument n");

  var result = {
    n: n,
    harshad: false,
    seq: [],
    toString: function() {
      return this.harshad
        ? "Harshad " + this.n + ": " + this.seq.join(" * ")
        : "Not Harshad " + this.n;
    }
  };

  var digits  = ("" + n).split("");
  var sum = digits.reduce(function(p, c) {
    return p + parseInt(c);
  }, 0);
  
  if (n % sum === 0) {
    result.harshad = true;
    result.seq.push(sum);
    result.seq.push(n / sum);
  }

  return result;
}

harshad.wiki = "https://en.wikipedia.org/wiki/Harshad_number";
