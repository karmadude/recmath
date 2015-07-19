module.exports = happy;

function happy(n) {
  if(typeof n === "undefined") throw new Error("Missing argument n");

  var result = {
    n: n,
    happy: true,
    seq: [n],
    toString: function() {
      return this.happy
        ? "Happy " + this.n + ": " + this.seq.join(", ")
        : "Sad " + this.n;
    }
  };
  
  if(n === 1) return result;

  function next(n) {
    return ("" + n).split("")
      .map(function(d) { d = parseInt(d); return d*d; })
      .reduce(function(p, c) {
        return p + c;
      }, 0);
  }

  do {
    n = next(n);

    if(result.seq.indexOf(n) > -1) {
      result.happy = false;
      result.seq = [];
    } else {
      result.seq.push(n);
    }
  } while(n > 1 && result.seq.length > 0);

  return result;
}

happy.wiki = "https://en.wikipedia.org/wiki/Happy_number";
