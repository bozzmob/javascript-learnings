function helloName(name) {
    var text = 'Hello ' + name; // Local variable
    var funcAlert = function() { alert(text); }
    return funcAlert;
}
var alertName = helloName('Bozzmob');
alertName(); // alerts "Hello Bozzmob"