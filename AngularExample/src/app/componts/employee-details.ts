import { Component } from "@angular/core"
@Component
    ({
    selector: 'my-employee',
    templateUrl:'app/componts/employee-details.html'
    })
export class EmployeeComponet {
    name: string = 'Suresh';
    email: string = "a@b.com";

}
