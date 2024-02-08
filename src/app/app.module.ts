import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { InicioComponent } from './components/inicio/inicio.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TableComponent,
    InicioComponent,
    NavbarComponent,
    RecepcionComponent
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
