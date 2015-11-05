function displayPlusOne() {
    // Local variable that ends up within closure
    var val = 100;
    var alertVal = function() { alert(val); }
    val++;
    return alertVal;
}
var alertNumber = displayPlusOne();
alertNumber(); // alerts 101