// var tup:[string,number,boolean] = [ 'abc',23,true]
// console.log(tup)
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Blue"] = 2] = "Blue";
    color[color["Green"] = 3] = "Green";
})(color || (color = {}));
var c = color.Green;
console.log(c);
