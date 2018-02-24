import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <div>
<h1>
         {{ pageHeader }}
</h1>
<p>Addition of two numbers {{ 10+20 }}</p>
<h1> {{ name }} </h1>
    <h1> {{ 'Name =' +name }}</h1>
    <h1> {{ 10+20+30 }} </h1>
    <h1> {{ name ? name : 'No name specified' }} </h1>
    <img src='{{link}}' />
    <h1>{{'full Name = '+ getFullName()}}</h1>

<my-employee></my-employee>
</div>`

     //templateUrl:'app/componet.html' ,
    //`<h1>
    //Hello {{ name }}
    //testing </h1>`
})
export class AppComponent {
    pageHeader: string = 'Employee Details';
    name: string = 'Suresh';
    link: string = 'https://www.google.co.in/logos/doodles/2018/2018-doodle-snow-games-day-17-6585325022347264-s.png';
    firstName: string = 'Suresh';
    lastName: string = 'Mogudala';
    getFullName() :string 
    {
        return this.firstName +' '+ this.lastName;
    }
}
