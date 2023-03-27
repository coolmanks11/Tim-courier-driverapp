import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import {NavPreviousBtnComponent} from '../../components/nav-previous-btn/nav-previous-btn.component'
import { TabMenuComponent } from 'src/app/components/tab-menu/tab-menu.component';

@NgModule({
  declarations: [NavPreviousBtnComponent,TabMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,  
  ],
  exports:[NavPreviousBtnComponent,TabMenuComponent]
})
export class ShareModulesModule { }
