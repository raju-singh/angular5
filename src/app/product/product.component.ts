import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../services/app.service';
import { AppDirective } from './../directive/app.directive';
import { dateFormat } from './../pipes/app.pipes';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private configService:ConfigService) {

  }
  isEdit = false;
  categoryList = [];
  subCategoryList = [];
  subCategory = [];
  productList;
  getProducts(){
  	this.configService.getData("http://localhost:3030/product")
      .subscribe((data)=> {
      	console.log("data==>",data);
      		this.productList = data;
      	});
  };
  ngOnInit() {
  	this.categoryList = [
  		{
  			id : 0,
  			value : "Category 0"
  		},
  		{
  			id : 1,
  			value : "Category 1"
  		},
  		{
  			id : 2,
  			value : "Category 2"
  		},
  		{
  			id : 3,
  			value : "Category 3"
  		}
  	];
    this.subCategoryList = [
        {
            category_id :0,
            categories : [
                {
                    id : 1,
                    value : "Sub Category 1"
                },
                {
                    id : 2,
                    value : "Sub Category 2"
                },
                {
                    id : 3,
                    value : "Sub Category 3"
                }
            ]
        },
        {
            category_id :1,
            categories : [
                {
                    id : 1,
                    value : "Sub Category 4"
                },
                {
                    id : 2,
                    value : "Sub Category 5"
                },
                {
                    id : 3,
                    value : "Sub Category 6"
                }
            ]
        },
        {
            category_id :2,
            categories : [
                {
                    id : 1,
                    value : "Sub Category 7"
                },
                {
                    id : 2,
                    value : "Sub Category 8"
                },
                {
                    id : 3,
                    value : "Sub Category 9"
                }
            ]
        },
        {
            category_id :3,
            categories : [
                {
                    id : 1,
                    value : "Sub Category 10"
                },
                {
                    id : 2,
                    value : "Sub Category 11"
                },
                {
                    id : 3,
                    value : "Sub Category 12"
                }
            ]
        }
      
    ];
  	this.getProducts();
  	

  }

  productChange(cat){
      console.log("Category===>",cat);
      this.subCategory =this.subCategoryList[cat].categories;
  }

  product = {
  	name : null,
  	code : null,
  	madeAvailable : true,
  	price : 0.00,
  	category : 0,
    subcategory : 0,
  	_id : null
  }

  addProduct(prod){
  	console.log("Request Object===>>",prod);
    if(this.isEdit){
      let reqData = prod;
      reqData.isAvailable =prod.isAvailable
        
        this.configService.patchData("http://localhost:3030/product", reqData)
          .subscribe((data:any) =>{
            console.log("data==>",data);
            this.isEdit = false;
            alert(data.message);
            this.getProducts();
            
        });
    }else{
      this.configService.postData("http://localhost:3030/add-product", prod)
      .subscribe((data) =>{
        console.log("data==>",data);
        alert("Product add successfully!");
        this.getProducts();
      });
    }
    
  }

  editProduct(prod){
  	this.product = prod;
  	this.product.madeAvailable = prod.isAvailable;
  	console.log();
    this.isEdit = true;
  }

  deleteProduct(prodId){
    this.configService.deleteData("http://localhost:3030/delete-product", prodId)
      .subscribe((data) =>{
        console.log("data==>",data);
        this.getProducts();
        alert("Product deleted successfully!");
        
      });
  }

  makeAvailable(product){
    /*console.log("Product===>",product);
    let reqData = {
      _id : product._id,
      isAvailable : !product.isAvailable
    }
    this.configService.patchData("http://localhost:3030/product", reqData)
      .subscribe((data:any) =>{
        console.log("data==>",data);
        ///this.getProducts();
        //let msg = data && data.message? data.message
        alert(data.message);
        
      });*/
  }

}
