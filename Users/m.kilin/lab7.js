var t = function(f) {
    if (!(f instanceof Array)) {
        throw new TypeError("it's not array");
    }
    for (var elt in f) {
        if (typeof(f[elt]) === "object") {
            if (Object.prototype.toString.call(f[elt]) !== Object.prototype.toString.call(f[Object.keys(f)[0]])) {
            throw new TypeError("it's not equal array");
        }}
        else {
            /*return typeof(f[elt]);*/
            if (typeof(f[elt]) !== typeof(f[Object.keys(f)[0]])) {
            throw new TypeError("it's not equal array");
        }
    }    
    }
    return 1;
};
a = [{"a":1}, {"b":2}, new Date()];
console.log(Object.prototype.toString.call(new Date));
console.log(t(a));