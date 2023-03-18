import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  updateDoc,
  where,
  query,
  getDoc,
  getDocs,

} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Order } from '../DTO/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firestore: Firestore, private auth: AuthService) { }

  getOrdersByStatus(status : string): Observable<Order[]>
  {
    const orderRef =  collection(this.firestore,'orders');
    const orderByStatusQuery = query(orderRef,where('status','==',status));
    return collectionData(orderByStatusQuery, { idField: 'order_id'}) as Observable<Order[]> ;
  }
  getOrderByOrderId(orderId : string)  {
    const orderRef = doc(this.firestore,`orders/${orderId}`);
    return docData(orderRef, {idField:'order_id'}) as Observable<Order>
  }
}
