"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = 'Employee Details';
        this.name = 'Suresh';
        this.link = 'https://www.google.co.in/logos/doodles/2018/2018-doodle-snow-games-day-17-6585325022347264-s.png';
        this.firstName = 'Suresh';
        this.lastName = 'Mogudala';
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <div>\n<h1>\n         {{ pageHeader }}\n</h1>\n<p>Addition of two numbers {{ 10+20 }}</p>\n<h1> {{ name }} </h1>\n    <h1> {{ 'Name =' +name }}</h1>\n    <h1> {{ 10+20+30 }} </h1>\n    <h1> {{ name ? name : 'No name specified' }} </h1>\n    <img src='{{link}}' />\n    <h1>{{'full Name = '+ getFullName()}}</h1>\n\n<my-employee></my-employee>\n</div>"
            //templateUrl:'app/componet.html' ,
            //`<h1>
            //Hello {{ name }}
            //testing </h1>`
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map