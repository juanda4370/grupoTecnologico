import { Component, OnInit } from '@angular/core';


import { cliente } from '../cliente';

@Component({
  selector: 'cliente-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public cliente:cliente;

  constructor() { 
    this.cliente=new cliente ();
  }


  ngOnInit() {
  }

}
