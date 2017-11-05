import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [

    FormsModule,
    CommonModule,


  ],
  declarations: [AddComponent, ListComponent, IndexComponent]
})
export class ClienteModule { }
