
import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { BackendService } from '../../services/backend.service';
import { Subscription } from 'rxjs';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, ],
})
export class TableComponent {

  dataSource : any[] = [];
  columnsToDisplay = ['Dni', 'Apellido', 'Nombre', 'Telefono','Email'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: null | undefined;
  private subscripcion:Subscription;
  

  constructor ( private backendService: BackendService) {

    this.subscripcion = this.backendService.getData().subscribe( (data: any) =>{

      data.forEach((e: any) => {

        this.dataSource.push({
          "Dni": e.dni_cliente,
          "Apellido": e.apellido_cliente,
          "Nombre": e.nombre_cliente,
          "Email": e.email_cliente,
          "Telefono": e.telefono_cliente
        });

      });

      console.log(this.dataSource);

    })
  }

  ngOnInit(): void{
  }

  ngAfterViewInit(){

    this.backendService.getData().subscribe( (data: any) =>{

      this.dataSource = [];

      data.forEach((e: any) => {

        this.dataSource.push({
          "Dni": e.dni_cliente,
          "Apellido": e.apellido_cliente,
          "Nombre": e.nombre_cliente,
          "Email": e.email_cliente,
          "Telefono": e.telefono_cliente
        });

      });
    })
  }

  ngOnDestroy(): void{
    this.subscripcion.unsubscribe();
  };

  
}

