import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrls: ['./saree.component.css']
})
export class SareeComponent {
  products: any[] = [];
  formData2: any[] = []; 
  saree: any[] = []; 
  wish: any[] = [];
  cart: any[] = [];
 

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    
 

    this.saree = this.getStoredData('saree');
    this.wish = this.getStoredData('wish');
    this.cart = this.getStoredData('cart');
  
  }


  openProductDetailsDialog(product: any): void {
    const dialogRef = this.dialog.open(ProductdetailsComponent, {
   
      data: { product } 
    });

    dialogRef.afterClosed().subscribe(result => {
     
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


  
  gotokurti(): void {
    this.router.navigate(['/kurti']); 
  }

  gotosaree(): void {
    this.router.navigate(['/saree']); 
  }


  gotoleggings(): void {
    this.router.navigate(['/leggings']); 
  }


  gotochuridar(): void {
    this.router.navigate(['/churidar']); 
  }
}


