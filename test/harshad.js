var vows = require("vows"),
    assert = require("assert");

var suite = vows.describe("harshad");

suite.addBatch({
  "harshad": {
    topic: function() { return require("../").harshad },

    "For all harshad numbers seq[0] * seq[1] should equal to the number": function(harshad) {
      var totalHarshadNumbers = 33;
      var count = 0;
      var result;
      for (var i = 1; i < 100; i ++) {
        result = harshad(i);
        if (result.harshad) {
          count++;
          assert.equal(result.seq[0] * result.seq[1], i);
        }
      }

      assert(count, 33);
    }
  }
});

suite.export(module);
