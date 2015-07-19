var vows = require("vows"),
    assert = require("assert");

var suite = vows.describe("recmath");

suite.addBatch({
  "module": {
    topic: require("../"),

    "has happy function": function(recmath) {
      assert.equal(typeof recmath.happy, "function");
    },

    "has harshad function": function(recmath) {
      assert.equal(typeof recmath.harshad, "function");
    }
  }
});

suite.export(module);
