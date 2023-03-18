import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/DTO/Order';
@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.page.html',
  styleUrls: ['./list-orders.page.scss'],
})
export class ListOrdersPage implements OnInit {

  constructor(private orderservice: OrderService) { }

  orders: Order[] = [];
  ngOnInit() {
    this.getOrderByStatus('In progress');
  }
  
  getOrderByStatus(status : string){
    this.orderservice.getOrdersByStatus(status).subscribe(
      orders => {
        
        this.orders = orders 
        console.log("adsa"+ orders); 
      },
    );
  }
}
