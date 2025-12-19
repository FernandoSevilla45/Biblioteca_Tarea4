import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class CatalogoPage implements OnInit {

   categorias: string[] = ['Ficción', 'No Ficción', 'Ciencia', 'Historia', 'Tecnología', 'Arte'];


  constructor() { }

  ngOnInit() {
  }

}
