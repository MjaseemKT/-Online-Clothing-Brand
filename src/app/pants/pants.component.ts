import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent {
  products: any[] = [];
  formData: any[] = []; 
  pants: any[] = []; 
  wish: any[] = [];
  cart: any[] = [];
  

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    
    // const types = ['pants', 't-shirt', 'shirt', 'jeans']; 
    // types.forEach(type => {
    //   const storedDetails = localStorage.getItem(type);
    //   if (storedDetails) {
    //     this.formData = this.formData.concat(JSON.parse(storedDetails));
    //   }
    // });

    this.pants = this.getStoredData('pants');
    this.wish = this.getStoredData('wish');
    this.cart = this.getStoredData('cart');
   
  }

  openProductDetailsDialog(product: any): void {
    const dialogRef = this.dialog.open(ProductdetailsComponent, {
      width: '500px',
      data: { product } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.gotodetail(product);
  }



  gotodetail(product: any): void {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
   
  }


  getStoredData(key: string): any[] {
    const storedDetails = localStorage.getItem(key);
    return storedDetails ? JSON.parse(storedDetails) : [];
  }

  handleWishlistClick(event: MouseEvent, product: any) {
    product.inWishlist = !product.inWishlist;
    this.updateLocalStorage('wish', product, product.inWishlist);
  }

  addtocart(event: MouseEvent, product: any) {
    product.inCartlist = !product.inCartlist;
    this.updateLocalStorage('cart', product, product.inCartlist);
  }

  updateLocalStorage(key: string, product: any, value: boolean) {
    let list: any[] = JSON.parse(localStorage.getItem(key) || '[]');

    if (value) {
     
      list.push(product);
    } else {
      
      list = list.filter((item: any) => item.name !== product.name);
    }

    
    localStorage.setItem(key, JSON.stringify(list));
  }

  
  gotopants(): void {
    this.router.navigate(['/pants']); 
  }

  gotojeans(): void {
    this.router.navigate(['/jeans']); 
  }


  gototshirt(): void {
    this.router.navigate(['/tshirt']); 
  }


  gotoshirt(): void {
    this.router.navigate(['/shirt']); 
  }
}

