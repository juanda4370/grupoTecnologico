import { Component, OnInit } from '@angular/core';
import { cliente } from '../cliente';
import { ClienteService } from '../cliente-service.service';

@Component({
  selector: 'cliente-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    
      
  }
  }
