/**
 * Created by Bridge on 2017/8/2.
 */

/**
 * javascript 十个坑
 * */

//立即执行函数
(function () {
    //逻辑函数
})();

//2.闭包函数
//对于闭包(closure)，当外部函数返回之后，内部函数依然可以访问外部函数的变量
function f1() {
    var n = 0;
    function f2() {
        n += 1;
        console.log(n);
    }

    return f2()
}

var result = f1();
console.log(result);
// result();
// result();
// result();

//使用闭包定义私有变量

function Product() {
    var name;
    this.setName = function (value) {
        name = value;
    };
    this.getName = function () {
        return name;
    };
}

var p = new Product();
p.setName("Bridge");

console.log(p.getName());//输出Bridge
console.log(p.name);// 输出undefined
// p.getName();


//4.prototype属性

//每个JavaScript构造函数都有一个prototype属性，用于设置所有实例对象需要共享的属性和方法。prototype属性不能列举。
// JavaScript仅支持通过prototype属性进行继承属性和方法。

function Rectangle(x,y) {
    this._length = x;
    this._breadth  = y;
}

Rectangle.prototype.getDimensions  = function () {
    return{
        length : this._length,
        breadth: this._breadth,
    };

};

var x = new Rectangle(3,4);
var y = new Rectangle(4,3);

console.log(x.getDimensions());  //{ length: 3, breadth: 4 }
console.log(y.getDimensions());  //{ length: 4, breadth: 3 }

//5.模块化
var module = function () {

    var N = 5;

    function print(x) {
        console.log("The result is : " + x)
    }

    function add(a) {
        var x = a + N;
        print(x);
    }

    return{
        description: "This is a description.",
        add: add
    };

}();

console.log(module.description);  //This is a description.
module.add(5);  //The result is : 10
//所谓模块化，就是根据需要控制模块内属性与方法的可访问性，即私有或者公开。在代码中，module为一个独立的模块，N为其私有属性，
// print为其私有方法，decription为其公有属性，add为其共有方法。

