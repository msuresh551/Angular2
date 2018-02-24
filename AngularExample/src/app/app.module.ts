import { NgModule } from '@angular/core';

//All Angular applications that run in a web brower in addition ng if ng for
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { EmployeeComponet } from './componts/employee-details';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeComponet],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
