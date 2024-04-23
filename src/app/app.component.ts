import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupwishComponent } from './popupwish/popupwish.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'onlineshopping';

  wishlistCount: number = 0;
  cartCount: number = 0;
  products: any[] = [];
  filteredProducts: any[] = [];
  wish: any[] = [];
  cart: any[] = [];


  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadFormData();
  }

 



  gotohome(): void {
    this.router.navigate(['/Home']);
  }

  gotomen(): void {
    this.router.navigate(['/men']);
  }

  gotowomen(): void {
    this.router.navigate(['/women']);
  }

  gotoabout(): void {
    this.router.navigate(['/about']);
  }


  
  gotocart(): void {
    this.router.navigate(['/cart']);
  }

  loadFormData(): void {
   
   
    const storedPlaces = localStorage.getItem('wish');
    if (storedPlaces) {
      this.wish = JSON.parse(storedPlaces);
    }
  
  }
  

  
  gotowish(): void {
    const dialogRef = this.dialog.open(PopupwishComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  // addToWishlist(item: any): void {
    
  //   this.wish.push(item);
  //   localStorage.setItem('wish', JSON.stringify(this.wish));

  //   this.loadFormData()
  
  // }

  // removeFromWishlist(item: any): void {
  
  //   this.wish = this.wish.filter(wishItem => wishItem.name !== item.name);
  //   localStorage.setItem('wish', JSON.stringify(this.wish));

   
    
  // }

  // addToCart(item: any): void {

  //   this.cart.push(item);
  //   localStorage.setItem('cart', JSON.stringify(this.cart));

   
    
  // }

  // removeFromCart(item: any): void {
   
  //   this.cart = this.cart.filter(cartItem => cartItem.name !== item.name);
  //   localStorage.setItem('cart', JSON.stringify(this.cart));

    
    
  // }
}
