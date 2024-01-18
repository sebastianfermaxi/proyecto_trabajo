
import {Component} from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';

/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrl: './recepcion.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  standalone: true,
  imports: [
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class RecepcionComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    dni_cliente: ['', Validators.required],
    apellido_cliente: ['', Validators.required],
    nombre_cliente: ['', Validators.required],
    celular_cliente: ['', Validators.required],


  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
