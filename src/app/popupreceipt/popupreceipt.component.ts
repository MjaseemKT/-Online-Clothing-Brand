import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import jsPDF from 'jspdf';


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

  // generatePDF() {
  //   const doc = new jsPDF();
  //   let yPos = 20;
 
  //   doc.setFontSize(18);
  //   doc.text('SHIPPING DETAILS', doc.internal.pageSize.getWidth() / 2, yPos, { align: 'center' });

  //   yPos += 10;
  //   doc.setFontSize(12);
  //   doc.text(`Date: ${this.currentDate}`, doc.internal.pageSize.getWidth() / 2, yPos, { align: 'center' });

   
  //   yPos += 20;
  //   this.receipt.forEach((item, index) => {
  //     yPos += 10;
  //     doc.text(`PRODUCT NAME: ${item.productName}`, 20, yPos);
  //     yPos += 10;
  //     doc.text(`SHIPPING ID: ${item.shippingId}`, 20, yPos);
  //     yPos += 10;
  //     doc.text(`Quantity: ${item.quantity}`, 20, yPos);
  //     yPos += 10;
  //     doc.text(`Price: ₹ ${item.totalPrice.toFixed(2)}`, 20, yPos); 
  //     yPos += 20;
  //   });

   
  //   yPos += 10;
  //   doc.setFont('bold');
  //   doc.text(`Shipping: ₹ 20.00`, 20, yPos);
  //   yPos += 10;
    
  //   doc.text(`Total: ₹ ${this.total.toFixed(2)}`, 20, yPos);

    
  //   doc.save('shipping_details.pdf');
  // }
}
