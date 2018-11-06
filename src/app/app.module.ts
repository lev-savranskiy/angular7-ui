import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MenuModule } from '@progress/kendo-angular-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuleftComponent } from './menuleft/menuleft.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MainComponent } from './main/main.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuleftComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    MenuModule,
    BrowserAnimationsModule,
    GridModule,
    InputsModule,
    DropDownsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
