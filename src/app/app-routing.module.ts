import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component' // 1. importar componente HOME
import { ContactoComponent } from './pages/contacto/contacto.component' // importar componente CONTACTO
import { ProductosComponent } from './pages/productos/productos.component'
import { DetalleComponent } from './pages/productos/detalle/detalle.component'


const routes: Routes = [//2. creandoruta
    { //creando primera ruta
        path: 'home', component: HomeComponent  //nombre de ruta: home y usará el compoenente HomeComponent
    }, 
    { //2da ruta //nombre de ruta: contacto y usará el compoenente HomeComponent
        path: 'contacto', component: ContactoComponent  
    },
    { //2da ruta //nombre de ruta: contacto y usará el compoenente HomeComponent
        path: 'productos', component: ProductosComponent
    },
    { //2da ruta //nombre de ruta: contacto y usará el compoenente HomeComponent
        path: 'productos/:id', component: DetalleComponent  
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}