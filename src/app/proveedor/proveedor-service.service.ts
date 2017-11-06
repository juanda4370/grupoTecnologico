import { Injectable } from '@angular/core';
import { proveedor } from './proveedor';



@Injectable()
export class ProveedorService {


  proveedorList:Array<ProveedorService>;



  constructor() { 

    this.proveedorList = [];
   
  }
 
}