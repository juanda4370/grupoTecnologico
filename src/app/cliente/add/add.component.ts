import { Component, OnInit } from '@angular/core';
import { cliente } from '../cliente';
import { ClienteService } from '../cliente-service.service';

@Component({
  selector: 'cliente-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
 cliente:cliente; 
 
 
  constructor(private clienteService:ClienteService) { }
   
  ngOnInit() {
    this.cliente = new cliente ();
  }
 onNewClick(){
   this.cliente = new cliente();
 }
 onSaveClick() {
   this.clienteService.clienteList.push(this.cliente);
 }
 {
   alert ("se ha guardado el cliente: " + this.cliente.nombre);
 }
}
