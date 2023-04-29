import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import {NavPreviousBtnComponent} from '../../components/nav-previous-btn/nav-previous-btn.component'
import { TabMenuComponent } from 'src/app/components/tab-menu/tab-menu.component';
import { LogoutButtonComponent } from 'src/app/components/logout-button/logout-button.component';
@NgModule({
  declarations: [NavPreviousBtnComponent,TabMenuComponent,LogoutButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,  
  ],
  exports:[NavPreviousBtnComponent,TabMenuComponent,LogoutButtonComponent]
})
export class ShareModulesModule { }
