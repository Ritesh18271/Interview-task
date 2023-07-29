
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  constructor(private http:HttpClient){}
 apiURL = 'https://fakestoreapi.com/products';
  getData(){
    return this.http.get(this.apiURL);
  }
  getDataById(id:any){
    return this.http.get(this.apiURL+'/'+id)
  }
  putData(data:any){
    return this.http.put(this.apiURL+'/'+data.id,data)
  }
  deleteData(data:any){
    return this.http.delete(this.apiURL+'/'+data.id)
  }
}
