import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popupreceipt',
  templateUrl: './popupreceipt.component.html',
  styleUrls: ['./popupreceipt.component.css']
})
export class PopupreceiptComponent {
  currentDate: string = new Date().toLocaleDateString();
  receipt: any[] = []; 


  constructor(private router: Router) {}

  ngOnInit(): void {
    
    const storedreceipt = localStorage.getItem('receipt');
    if (storedreceipt) {
      this.receipt = JSON.parse(storedreceipt);
    }
  }

  get total(): number {
    return this.receipt.reduce((acc, item) => acc + item.totalPrice,+20);
  }

  clearReceipt() {
    this.receipt = []; 
    localStorage.removeItem('receipt'); 
    this.gotohome();
    
  }
  

  gotohome(): void {
    this.router.navigate(['/']); 
  }
}
