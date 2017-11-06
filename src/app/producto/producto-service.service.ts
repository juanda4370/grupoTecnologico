import { Injectable } from '@angular/core';
import { producto } from './producto';



@Injectable()
export class ProductoService {


  productoList:Array<producto>;



  constructor() { 

    this.productoList = [];
   
  }
 
}