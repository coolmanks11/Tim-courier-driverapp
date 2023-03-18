import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import {NavPreviousBtnComponent} from '../../components/nav-previous-btn/nav-previous-btn.component'


@NgModule({
  declarations: [NavPreviousBtnComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,  
  ],
  exports:[NavPreviousBtnComponent]
})
export class ShareModulesModule { }
