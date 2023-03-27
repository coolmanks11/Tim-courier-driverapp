import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/DTO/Order';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.page.html',
  styleUrls: ['./update-order-status.page.scss'],
})
export class UpdateOrderStatusPage implements OnInit {
  order_id: any;
  orderDetails!: Order;
  statusOption!: string
  constructor(
    private actRoute: ActivatedRoute,
    private orderService: OrderService,
    private authService: AuthService,
    private route: Router) { }

  ngOnInit() {
    this.order_id = this.actRoute.snapshot.paramMap.get('orderId');
    this.getOrderByOrderId(this.order_id);
  }
  getOrderByOrderId(orderId: string) {
    this.orderService.getOrderByOrderId(orderId).subscribe(res => {
      this.orderDetails = res;
      this.statusOption = res.status;
      console.log(this.statusOption);
    })

  }

  async updateOrderStatus() {
    if (this.orderDetails.order_id == null) {
      console.error('Order id not available');
      return;
    } else {
      const result = await this.orderService.updateOrderStatus(this.orderDetails.order_id, this.statusOption);
      if (result) {
        console.error(result);
        // handle error
      } else {
        console.log(`Order status updated to ${this.statusOption}`);
        // handle success
      }
    }
  }

}
