"use strict";
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.run = function (msg) {
        console.log(msg);
    };
    return Test;
}());
var test = new Test();
test.run("Hello");
