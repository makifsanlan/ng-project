import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'] 
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup; 

  constructor(private formBuilder: FormBuilder , 
    private productService:ProductService , private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }
  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({}, this.productAddForm.value )
      this.productService.add(productModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message , "Başarılı")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      })
      
       
    }else{
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }
  
 
  }
}
