import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nombre:string; // Buenas practicas: declarar el tipo de variable
  edad:number;
  perfil:string;
  constructor() { // se debe declarar el valor 
    this.nombre ="Miriam";
    this.perfil ="Front-end developer"
   }

  ngOnInit() { // por buenas prácticas variables locales
    let variablex:string =":v";
    //cuando su valor no cambia
    const variabley:string = ":c"
  }

}
