import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-libros',
  templateUrl: './mis-libros.page.html',
  styleUrls: ['./mis-libros.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MisLibrosPage implements OnInit {

  categorias: { nombre: string, libros: string[] }[] = [
    { nombre: 'Ficción', libros: ['El Principito', 'Cien años de soledad', '1984'] },
    { nombre: 'Ciencia', libros: ['Breves respuestas a las grandes preguntas', 'Cosmos', 'El gen egoísta'] },
    { nombre: 'Historia', libros: ['Sapiens', 'La Segunda Guerra Mundial', 'Historia de América Latina'] },
    { nombre: 'Tecnología', libros: ['Clean Code', 'The Pragmatic Programmer', 'Artificial Intelligence: A Guide'] }
  ];

  librosMostrados: string[] = [];
  categoriaSeleccionada: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
      const cat = params.get('categoria');
      if (cat) {
        this.categoriaSeleccionada = cat;
        const categoriaObj = this.categorias.find(c => c.nombre === cat);
        this.librosMostrados = categoriaObj ? categoriaObj.libros : [];
      } else {
        this.categoriaSeleccionada = '';
        this.librosMostrados = [];
      }
    });
  }

}