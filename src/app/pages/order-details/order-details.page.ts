import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Order } from 'src/app/DTO/Order';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  order_id : any;
  orderDetails! : Order ;

  constructor(
    private actRoute: ActivatedRoute,
    private orderService : OrderService,
    private authService : AuthService,
    private route : Router
  ) { 
    this.order_id = this.actRoute.snapshot.paramMap.get('id');
    this.getOrderByOrderId(this.order_id);
  }

  ngOnInit() {
    console.log('id' + this.order_id);
  }

  getOrderByOrderId(id :string){
    const order = this.orderService.getOrderByOrderId(id).subscribe(res=>{
      this.orderDetails = res;  
      console.log('res'+res.created_date);
    });
  }
  // acceptOrderByDriverId(driver_id : string, order_id : string ){
  acceptOrderByDriverId(){
    const driver_id  = this.authService.getCurrentUser()?.uid;
    if(driver_id!=null)
    {
      const res = this.orderService.acceptOrderByDriverId(this.order_id,driver_id);
      console.log('res ' + res);
      this.route.navigate(['list-orders']);

    }else{
      console.log('Not logged in');
      this.route.navigate(['login']);
    }
  }
}
