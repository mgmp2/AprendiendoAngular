import { Component, OnInit } from '@angular/core';
//importamos libreria de ruteo de Angular 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  miproducto:string;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.miproducto = "";
  }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(parametros => { //subscribe es mejor que promise, es mejor usar en chat
          console.log(parametros.id) // id = es la variable que escibe en el routing.moudule.js
          this.miproducto = parametros.id;
        })

  }

}
