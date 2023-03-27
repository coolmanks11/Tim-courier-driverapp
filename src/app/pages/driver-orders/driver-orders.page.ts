import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/DTO/Order';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-driver-orders',
  templateUrl: './driver-orders.page.html',
  styleUrls: ['./driver-orders.page.scss'],
})
export class DriverOrdersPage implements OnInit {

  driverOrders: Order[] = [];

  constructor(private orderService : OrderService,private authService : AuthService) { 
  
  }

  ngOnInit() {
    this.getDriverOrders();
  }
  getDriverOrders(){
    const driver_id  = this.authService.getCurrentUser()?.uid;
    if(driver_id!=null)
    {
      this.orderService.getOrdersByDriverId(driver_id).subscribe(res =>{
        this.driverOrders = res;
        console.log('driver orders ',this.driverOrders);
      })
    }

  }

}
