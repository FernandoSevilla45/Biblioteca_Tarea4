import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PerfilPage implements OnInit {

  perfil = {
    nombre: 'Fernando',
    apellido: 'Sevilla',
    edad: 34,
    ocupacion: 'Estudiante',
    ciudad: 'Quito',
    pais: 'Ecuador'
  };

  constructor() { }

  ngOnInit() {
  }

}
