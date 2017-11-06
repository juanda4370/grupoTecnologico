import { Injectable } from '@angular/core';
import { cliente } from './cliente';



@Injectable()
export class ClienteService {


  clienteList:Array<cliente>;



  constructor() { 

    this.clienteList = [];
   
  }
 
}
  


