import { Component, OnInit } from '@angular/core';
import {proveedor} from '../proveedor';
import { ProductoService } from '../proveedor-service.service';

@Component({
  selector: 'proveedor-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
 proveedor:proveedor; 
 
 
  constructor(private proveedorService:ProveedorService) { }
   
  ngOnInit() {
    this.proveedor = new proveedor ();
  }
 onNewClick(){
   this.proveedor = new proveedor();
 }
 onSaveClick() {
   this.proveedorService.proveedorList.push(this.proveedor);
 }
 
  
 
}