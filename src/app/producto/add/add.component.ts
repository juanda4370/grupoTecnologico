import { Component, OnInit } from '@angular/core';
import { producto } from '../producto';
import { ProductoService } from '../producto-service.service';

@Component({
  selector: 'producto-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
 producto:producto; 
 
 
  constructor(private productoService:ProductoService) { }
   
  ngOnInit() {
    this.producto = new producto ();
  }
 onNewClick(){
   this.producto = new producto();
 }
 onSaveClick() {
   this.productoService.productoList.push(this.producto);
 }
 
  
 
}