import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClienteModule} from './cliente/cliente.module';
import { ProductoModule} from './producto/producto.module';
import { ProveedorModule} from './proveedor/proveedor.module';

import {RouterModule,Routes}from '@angular/router';

import { IndexComponent} from './cliente/index/index.component';
import { IndexComponent as productoaddcomponent} from './producto/index/index.component';
import { IndexComponent as proveedoraddcomponent} from './proveedor/index/index.component';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  {path:  'cliente/index',component: IndexComponent},
  {path:  'producto/index',component: productoaddcomponent},
  {path:  'proveedor/index',component: proveedoraddcomponent},
 
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ProductoModule,
    ProveedorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
