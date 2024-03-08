
import {Component} from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { BackendService } from '../../services/backend.service';

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
    dni_cliente: ['3222222',[ Validators.required, Validators.min(999999)]],
    apellido_cliente: ['we', [Validators.required, Validators.minLength(2)]],
    nombre_cliente: ['we', [Validators.required, Validators.minLength(2)]],
    celular_cliente: ['155433433', [Validators.required, Validators.min(15000000)]],
    email_cliente: ['we@gmail.com', [Validators.email]]


  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private backendService: BackendService) {}

  validarUser(){
    console.log( this.firstFormGroup.value);

    let dni_recepcion: number;
    let apellido_recepcion: string;
    let nombre_recepcion: string;
    let telefono_recepcion: number;
    let email_recepcion: string;

    this.backendService.postData(this.firstFormGroup.value).subscribe( (data:any) =>{
      console.log('Enviado correctamente')
    })
  

    if (this.firstFormGroup.valid && typeof this.firstFormGroup.value.dni_cliente === 'number') {
      dni_recepcion = this.firstFormGroup.value.dni_cliente;
      
      console.log( 'efectivamente '+ dni_recepcion +' es un '+ typeof dni_recepcion);
    
    }

  }
    }
    

/*
    let cliente : Cliente = {
      apellido = this.firstFormGroup.value.apellido_cliente
    }
    
    this.backendService.getData().subscribe( (data: any) =>{
        this.datos = data;
        this.dataSource = this.datos;
  
        console.log(this.datos)
      })
      
  }
  
}
*/
    