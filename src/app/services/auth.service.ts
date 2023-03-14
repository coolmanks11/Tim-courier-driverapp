import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDocs
} from '@angular/fire/firestore';
import { Driver } from '../DTO/Driver'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) { }
  async login(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      //check driver exist in driver collect or not 
      const usersRef = collection(this.firestore, 'Drivers');
      console.log('driver id ' + user.user.uid);
      const userQuery = query(usersRef, where('driver_id', '==', user.user.uid));
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        return null;
      }
      const userData = querySnapshot.docs[0].data() as Driver;
      console.log('driver exist uid : ');
      console.log(userData.driver_id);
      return user;
    } catch (e) {

      return null;
    }
  }

  logout() {
    console.log("auth service " + this.auth)
    return signOut(this.auth);
  }
  getCurrentUser() {
    console.log(this.auth.currentUser);

    return this.auth.currentUser;
  }
}
