import { Component, OnInit } from '@angular/core';
import { producto } from '../producto';
import { ProductoService } from '../producto-service.service';

@Component({
  selector: 'producto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 

  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    
      
  }
  }
