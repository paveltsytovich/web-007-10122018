var c = {
    secret : 0,
    get gate() {return this.secret;},
    set gate(val) {this.secret = val;},
    toString: function () {return "123 " + this.secret;}
    
};
console.log(c.secret);
c.secret = 5;
console.log(c.secret);
c.gate = 10;
console.log(c.gate);
console.log(c.secret);
console.log(c.toString());
/*document.alert(c);*/
str = "[1,2,3,4]";
nums = JSON.parse(str);
console.log(nums[0]);

var str = '{"title": "sample", "date" : "2017-10-15"}';
var json2 = JSON.parse(str,function(key,value)
{
    if (key == 'date')
      return new Date(value);
    else 
      return value;
});
console.log(json2.date.getDate());

/*Lab 7*/
var newObj = {};
console.log(newObj.prop);
console.log(newObj["prop"]);
//console.log(Window.prop); 
var obj = {};
obj.prop = "proper";
obj.prop2 = "moper";
console.log(obj.prop2); 
for (o in obj) {
    console.log(o)
}

