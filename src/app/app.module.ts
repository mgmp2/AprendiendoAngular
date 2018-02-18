import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/productos/detalle/detalle.component' // 3. importar componente


@NgModule({
  declarations: [//4. declara nuestro nuevo componente
    AppComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    DetalleComponent
  ],
  imports: [ // se coloca todos los modulos
    BrowserModule,
    AppRoutingModule // aqui se encuentra los componentes Home y Contacto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
