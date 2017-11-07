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
for (t in obj) {
    if (obj.hasOwnProperty(t)) {
    console.log(t);
}
}
delete obj["prop"];
for (t in obj) {
    if (obj.hasOwnProperty(t)) {
    console.log(t);
}
}
a = new Array({"attr1":"text1","attr2":"text2"},
{"attr1":"text3","attr2":"text4"});
console.log(a);
memBefore = process.memoryUsage().heapUsed;
console.log(memBefore);
var a = [];
a[1] = 1;
a[999999] = 2;
memAfter = process.memoryUsage().heapUsed
console.log(memAfter-memBefore);
a[a.length] = "new element";
a.push("new element");
a.pop();
console.log(a.length);
a.length = 0;
var arr = [];
arr[1] = 123;
arr[9999] = 456;
for (t in arr) {
//    if (arr.hasOwnProperty(t)) {
    console.log(t);
//}
};
var arr1 = [1,2,3];
var arr2 = [10,5,1];
console.log(arr1.concat(arr2));
console.log(arr1.reverse().concat(arr2));
console.log(arr1.reverse().concat(arr2.sort()));
console.log(arr1.slice(1));
console.log(arr1);
console.log(arr1.splice(1));
console.log(arr1);
console.log(arr1.unshift(1));
console.log(arr1);
a = new Array();
a[-2]=-2;
a[-1]=-1;
a[0]=0;
a[1]=1;
a[2]=2;
console.log("Length: " + a.length);
for (var i=0; i<a.length; i++) {
console.log(a[i]);
}
console.log(a[a[-2]+a[1]]);
console.log(a[3]);
var checkArr = [];
checkArr[0] = 1;
checkArr[1] = 3;
checkArr[10] = -2;
checkArr[2] = 6;
checkArr[-1] = 3;
console.log(checkArr);
console.log(checkArr.slice(3).length);


