import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

/**
 * @title Basic toolbar
 */

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router : Router){};

nombreEmpresa: string = 'Mi Empresa';



goHome() {
  console.log('yendo a inicio')
  this.router.navigate(['/inicio']);
}

goRegister() {
  console.log('yendo a registro')
  this.router.navigate(['/reg_user']);
}

goServices() {
  console.log('yendo a servicios');
  this.router.navigate(['/services']);
  //window.location.reload();
}

}
