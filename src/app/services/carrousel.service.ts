import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
firebase.initializeApp(environment.firebaseConfig)
@Injectable({
  providedIn: 'root'
})
export class CarrouselService {
  items!: Observable<any[]>;
  storageRef=firebase.app().storage().ref()
  constructor( private firestore: AngularFirestore) {
    this.items= firestore.collection('carrousel').valueChanges({ idField: 'eventId' });
  }

  getCarrouselItems(){    
     return this.firestore.collection('carrousel').valueChanges({ idField: 'eventId' });

  }
  deleteCarrouselItem(id:string){
    return this.firestore.collection("carrousel").doc(id).delete()
  
  }
  addCarrouselItem(name:string,img64:string){
    this.SubirImagen(name,img64).then(imgUrl => {
      var item ={ 
        name: name,
        path: imgUrl
      }
      return this.firestore.collection('carrousel').add(item);
    })
  }
  async SubirImagen( name:string, img64:any){      
    try{
      let respuesta = await this.storageRef.child("carrousel/"+name).putString(img64,'data_url')
      return await respuesta.ref.getDownloadURL()
    }catch (error){
      window.alert(error)
      return null
    }
  }
  
}
