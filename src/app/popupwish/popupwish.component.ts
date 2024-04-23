import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupwish',
  templateUrl: './popupwish.component.html',
  styleUrls: ['./popupwish.component.css']
})
export class PopupwishComponent implements OnInit {
  wishlist: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist() {
   
    this.wishlist = JSON.parse(localStorage.getItem('wish') || '[]');

    
   

   
    const uniqueItems: any[] = [];
    const uniqueIds = new Set();

    this.wishlist.forEach(item => {
      if (!uniqueIds.has(item.id)) {
        uniqueItems.push(item);
        uniqueIds.add(item.id);
      }
    });
    this.wishlist = uniqueItems;

   
    localStorage.setItem('wish', JSON.stringify(this.wishlist));
}

  removeFromWishlist(item: any) {
    this.wishlist = this.wishlist.filter(wishItem => wishItem.id !== item.id);
    localStorage.setItem('wish', JSON.stringify(this.wishlist));
  }



 
}