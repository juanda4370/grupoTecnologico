import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ClienteModule} from './cliente/cliente.module';
import { ProductoModule} from './producto/producto.module';
import { ProveedorModule} from './proveedor/proveedor.module';

import {RouterModule,Routes}from '@angular/router';

import { IndexComponent} from './cliente/index/index.component';
import { IndexComponent as productoaddcomponent} from './producto/index/index.component';
import { IndexComponent as proveedoraddcomponent} from './proveedor/index/index.component';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

import {
  MdAutocompleteModule, 
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  //MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule, 
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule, 
  MdSortModule, 
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  
 } from '@angular/material';



const appRoutes: Routes = [
  {path:  'cliente/index',component: IndexComponent},
  {path:  'producto/index',component: productoaddcomponent},
  {path:  'proveedor/index',component: proveedoraddcomponent},
 
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
    
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ProductoModule,
    ProveedorModule,
    BrowserAnimationsModule,
    MdAutocompleteModule, 
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    //MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule, 
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule, 
    MdSortModule, 
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
   
     RouterModule.forRoot(
    appRoutes
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
