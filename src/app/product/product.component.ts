
import { Component, Inject } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ProductApiService } from '../product-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  array:any=[];
  searchtxt='';
  // page=1;
  // pageSize=5;
  // collectionSize:number=0;

  page = 1;
  pageSize = 5;
  collectionSize = 10;
  data:any;
  constructor(private service:ProductApiService, private route: Router){
    this.getData();

  }
  ngOnInit(){

  }

  getData(){
    this.service.getData().subscribe(res=>{
      console.log('data',res);
      this.array=res;
      this.data=this.array;
      this.collectionSize=this.array.length;
      this.onPageChange();
    })
  }
  updatePage(id:any){
    this.route.navigate(['/update'])
    console.log(id);
    localStorage.setItem("id", id);

  }
  onPageChange(){
    this.data = this.array
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  delet(id:any){
     this.service.deleteData(id).subscribe((res)=>{
       console.log("Deleted Data : " ,res);

     })
  }
}

