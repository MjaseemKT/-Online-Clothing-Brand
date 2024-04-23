import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  selectedProduct: any;

  constructor(public dialogRef: MatDialogRef<ProductdetailsComponent>) { }

  ngOnInit(): void {
    this.getSelectedProductDetails();
  }

  getSelectedProductDetails(): void {
    const productDetails = localStorage.getItem('selectedProduct');
    if (productDetails) {
      this.selectedProduct = JSON.parse(productDetails);
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  
}
