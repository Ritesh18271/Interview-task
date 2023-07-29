import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private apiService: ProductApiService){
    this.getProducts();
  }
editId = localStorage.getItem("id");
data:any;
reactiveForm = new FormGroup({
  title: new FormControl(''),
  price: new FormControl(''),
  description: new FormControl(''),
  category: new FormControl(''),
  image: new FormControl(''),
  rate: new FormControl(''),
  count: new FormControl(''),
})
getProducts(){
  this.apiService.getDataById(this.editId).subscribe(res => {
    this.data = res;
    this.reactiveForm.controls.title.setValue(this.data.title);
    this.reactiveForm.controls.price.setValue(this.data.price);
    this.reactiveForm.controls.description.setValue(this.data.description);
    this.reactiveForm.controls.category.setValue(this.data.category);
    this.reactiveForm.controls.image.setValue(this.data.image);
    this.reactiveForm.controls.rate.setValue(this.data.rating.rate);
    this.reactiveForm.controls.count.setValue(this.data.rating.count);
  })
}
update(){
  let obj = {
    id:this.editId,
    title: this.reactiveForm.controls.title.value,
    price: this.reactiveForm.controls. price.value,
    description: this.reactiveForm.controls.description.value,
    category: this.reactiveForm.controls.category.value,
    image: this.reactiveForm.controls.image.value,
    rating:{
      rate: this.reactiveForm.controls.rate.value,
      count: this.reactiveForm.controls.count.value
    }
  }
 this.apiService.putData(obj).subscribe((res)=>{
    console.log(res)
    window.alert("Product updated successfully!")
 });

}

submit(){
 console.log(this.reactiveForm.value);

}
}
