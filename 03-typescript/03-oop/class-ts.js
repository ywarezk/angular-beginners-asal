"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(age) {
        this.age = age;
        this._name = 'yariv';
        this.address = 'Ramat Gan';
        this.hello = 'world';
    }
    Person.prototype.sayHello = function (msg) {
        if (msg === void 0) { msg = 'hello world'; }
        console.log(msg);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(age, grade) {
        var _this = _super.call(this, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this, 'hello');
    };
    return Student;
}(Person));
var me = new Person(42);
me.sayHello();
var myGradeObject = { grade: 14 };
var Engine = /** @class */ (function () {
    function Engine() {
    }
    return Engine;
}());
// const engine = new Engine();
var Airplane = /** @class */ (function (_super) {
    __extends(Airplane, _super);
    function Airplane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Airplane.prototype.sayHello = function () {
    };
    return Airplane;
}(Engine));
var airplane = new Airplane();
//# sourceMappingURL=class-ts.js.map