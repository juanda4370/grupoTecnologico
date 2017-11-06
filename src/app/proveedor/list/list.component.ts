import { Component, OnInit } from '@angular/core';
import { proveedor } from '../proveedor';
import { ProductoService } from '../proveedor-service.service';

@Component({
  selector: 'proveedor-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 

  constructor(private proveedorService:ProveedorService) { }

  ngOnInit() {
    
      
  }
  }
