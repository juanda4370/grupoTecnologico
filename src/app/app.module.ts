import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ClienteModule} from './cliente/cliente.module';
import { ProductoModule} from './producto/producto.module';
import { ProveedorModule} from './proveedor/proveedor.module';

import {RouterModule,Routes}from '@angular/router';

import { IndexComponent} from './cliente/index/index.component';
import { AddComponent as productoaddcomponent} from './producto/add/add.component';
import { IndexComponent as proveedoraddcomponent} from './proveedor/index/index.component';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule } from '@angular/material';



const appRoutes: Routes = [
  {path:  "cliente/index",component: IndexComponent},
  {path:  "producto/index",component: productoaddcomponent},
 {path:  "proveedor/index",component: proveedoraddcomponent},
 
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
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  BrowserAnimationsModule,
    
   
    RouterModule.forRoot(
    appRoutes
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
